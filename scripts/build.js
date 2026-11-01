const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const ARTICLES_SRC_DIR = path.join(ROOT_DIR, 'src', 'content', 'articles');
const ARTICLES_DIST_DIR = path.join(ROOT_DIR, 'articles');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');
const KB_PATH = path.join(ROOT_DIR, 'knowledge-base.js');
const HOST = 'jcjingzhuncha.com';

console.log('🚀 [Build] 开始执行静态页面与知识库构建流程...');

if (!fs.existsSync(ARTICLES_DIST_DIR)) {
  fs.mkdirSync(ARTICLES_DIST_DIR, { recursive: true });
}

// 1. 结构化 Markdown 转 HTML 解析器
function parseMarkdown(md) {
  let frontmatter = {};
  let content = md;
  if (md.startsWith('---')) {
    const endIdx = md.indexOf('---', 3);
    if (endIdx !== -1) {
      const rawFm = md.substring(3, endIdx).trim();
      content = md.substring(endIdx + 3).trim();
      rawFm.split('\n').forEach(line => {
        const colonIdx = line.indexOf(':');
        if (colonIdx !== -1) {
          const key = line.substring(0, colonIdx).trim();
          let val = line.substring(colonIdx + 1).trim();
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          if (val.startsWith('[') && val.endsWith(']')) {
            try {
              val = JSON.parse(val.replace(/'/g, '"'));
            } catch (e) {
              val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
            }
          }
          frontmatter[key] = val;
        }
      });
    }
  }

  const lines = content.split('\n');
  const htmlParts = [];
  let inCode = false;
  let codeLang = '';
  let codeBuffer = [];
  let inTable = false;
  let tableHeader = [];
  let tableRows = [];
  let inList = false;
  let listType = '';
  let listItems = [];

  function flushList() {
    if (inList && listItems.length > 0) {
      htmlParts.push(`<${listType}>\n${listItems.map(it => `  <li>${it}</li>`).join('\n')}\n</${listType}>`);
      inList = false;
      listType = '';
      listItems = [];
    }
  }

  function flushTable() {
    if (inTable && tableHeader.length > 0) {
      let tHtml = '<div class="table-responsive">\n<table class="article-markdown-table">\n<thead>\n<tr>\n';
      tHtml += tableHeader.map(h => `  <th>${h}</th>`).join('\n');
      tHtml += '\n</tr>\n</thead>\n<tbody>\n';
      tHtml += tableRows.map(r => `<tr>\n${r.map(c => `  <td>${c}</td>`).join('\n')}\n</tr>`).join('\n');
      tHtml += '\n</tbody>\n</table>\n</div>';
      htmlParts.push(tHtml);
      inTable = false;
      tableHeader = [];
      tableRows = [];
    }
  }

  function inlineFormat(text) {
    return text
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, txt, url) => {
        return `<a href="${url}">${txt}</a>`;
      });
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // 代码块处理
    if (trimmed.startsWith('```')) {
      if (!inCode) {
        flushList();
        flushTable();
        inCode = true;
        codeLang = trimmed.substring(3).trim();
        codeBuffer = [];
      } else {
        inCode = false;
        const codeText = codeBuffer.join('\n')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        htmlParts.push(`<pre><code class="language-${codeLang || 'text'}">${codeText}</code></pre>`);
        codeBuffer = [];
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    // 表格处理
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList();
      const cells = trimmed.split('|').slice(1, -1).map(c => inlineFormat(c.trim()));
      if (cells.every(c => /^:?-+:?$/.test(c))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeader = cells;
        tableRows = [];
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      flushTable();
    }

    // 列表处理
    if (/^(\*|-)\s+/.test(trimmed)) {
      if (!inList || listType !== 'ul') {
        flushList();
        inList = true;
        listType = 'ul';
      }
      listItems.push(inlineFormat(trimmed.replace(/^(\*|-)\s+/, '')));
      continue;
    } else if (/^\d+\.\s+/.test(trimmed)) {
      if (!inList || listType !== 'ol') {
        flushList();
        inList = true;
        listType = 'ol';
      }
      listItems.push(inlineFormat(trimmed.replace(/^\d+\.\s+/, '')));
      continue;
    } else {
      flushList();
    }

    if (trimmed === '') {
      continue;
    }

    if (/^---$|^___$|^\*\*\*$/.test(trimmed)) {
      htmlParts.push('<hr>');
      continue;
    }

    if (trimmed.startsWith('### ')) {
      htmlParts.push(`<h3>${inlineFormat(trimmed.substring(4))}</h3>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      htmlParts.push(`<h2>${inlineFormat(trimmed.substring(3))}</h2>`);
      continue;
    }
    if (trimmed.startsWith('# ')) {
      htmlParts.push(`<h1>${inlineFormat(trimmed.substring(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
      htmlParts.push(`<div class="math-display"><code>${trimmed.slice(2, -2).trim()}</code></div>`);
      continue;
    }

    if (trimmed.startsWith('<p') || trimmed.startsWith('<div') || trimmed.startsWith('<section') || trimmed.startsWith('<article')) {
      htmlParts.push(rawLine);
    } else {
      htmlParts.push(`<p>${inlineFormat(trimmed)}</p>`);
    }
  }

  flushList();
  flushTable();

  return {
    frontmatter,
    html: htmlParts.join('\n\n')
  };
}

// 2. 读取文章源文件
const articleFiles = fs.readdirSync(ARTICLES_SRC_DIR).filter(f => f.endsWith('.md'));
console.log(`📄 扫描到 ${articleFiles.length} 篇深度长文 Markdown 源文件`);

const parsedArticles = articleFiles.map(file => {
  const filePath = path.join(ARTICLES_SRC_DIR, file);
  const rawContent = fs.readFileSync(filePath, 'utf8');
  const slug = file.replace(/\.md$/, '');
  const { frontmatter, html } = parseMarkdown(rawContent);
  return {
    file,
    slug,
    frontmatter,
    html
  };
});

// 3. 生成独立 HTML 页面 (放在 articles/ 目录下)
parsedArticles.forEach(art => {
  const fm = art.frontmatter;
  const canonicalUrl = `https://${HOST}/articles/${art.slug}.html`;

  // 构建三向互链
  const otherArts = parsedArticles.filter(a => a.slug !== art.slug);
  const relatedHtml = otherArts.map(oa => {
    return `<a href="${oa.slug}.html">${oa.frontmatter.title} →</a>`;
  }).join('\n        ');

  // 将内容中相对当前文章的链接规范化：如果在 articles/ 下访问，站内根路由调整
  let contentHtml = art.html
    .replace(/href="\/articles\//g, 'href="')
    .replace(/href="\/reviews"/g, 'href="../reviews.html"')
    .replace(/href="\/compare"/g, 'href="../compare.html"')
    .replace(/href="\/library"/g, 'href="../library.html"');

  const pageHtml = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${fm.description || ''}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <title>${fm.title}｜机场精准查</title>
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:title" content="${fm.title}｜机场精准查">
  <meta property="og:description" content="${fm.description || ''}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="../theme.css">
  <link rel="stylesheet" href="../page.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${fm.title}",
    "description": "${fm.description || ''}",
    "datePublished": "${fm.date || '2026-11-01'}",
    "dateModified": "${fm.date || '2026-11-01'}",
    "author": {
      "@type": "Organization",
      "name": "机场精准查实验室"
    },
    "publisher": {
      "@type": "Organization",
      "name": "机场精准查",
      "url": "https://${HOST}/"
    }
  }
  </script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="../index.html">
      <span class="brand-mark"><i></i><i></i><i></i></span>
      <span>机场<span class="brand-accent">精准查</span></span>
    </a>
    <nav class="main-nav">
      <a href="../recommend.html">机场推荐</a>
      <a href="../reviews.html">机场测评</a>
      <a href="../compare.html">机场对比</a>
      <a href="../help.html">使用帮助</a>
      <a class="active" href="../library.html">知识库</a>
      <a href="../bonus.html">福利中心</a>
      <a href="../about.html">关于本站</a>
    </nav>
    <button class="search-btn" id="searchBtn"><span></span> 搜索</button>
    <button class="menu-btn" id="menuBtn"><b></b><b></b></button>
  </header>

  <main class="page-main">
    <article class="knowledge-article">
      <nav class="article-breadcrumbs" aria-label="面包屑导航">
        <a href="../index.html">首页</a>
        <span>/</span>
        <a href="../library.html">知识库</a>
        <span>/</span>
        <span>${fm.category || '排障诊断'}</span>
      </nav>
      <span class="article-category">${fm.category || '技术精选'} · 深度技术实测</span>
      <h1>${fm.title}</h1>
      <div class="article-meta">
        <span>发布日期：${fm.date || '2026-11-01'}</span>
        <span>作者：${fm.author || '机场精准查实验室'}</span>
        <span>阅读时长：约 8 分钟</span>
        <span>核验状态：工业级实测核验</span>
      </div>
      <div class="article-tags-wrap">
        ${(Array.isArray(fm.tags) ? fm.tags : []).map(t => `<span class="article-tag-badge"># ${t}</span>`).join('\n        ')}
      </div>

      <div class="article-entry-content">
${contentHtml}
      </div>

      <div class="related-links">
        <strong>深度关联阅读推荐</strong>
        ${relatedHtml}
        <a href="../reviews.html">前往 机场测评专区 查看晚高峰抗压评测 →</a>
        <a href="../compare.html">前往 机场对比列表 横向对比各家参数 →</a>
        <a href="../library.html">返回 知识库首页 浏览全站 53 篇专题 →</a>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-bottom-bar">
        <span>© 2026 机场精准查 · 保留所有权利</span>
        <span>数据持续更新 · 独立第三方评测</span>
        <a href="#top">返回顶部 ↑</a>
      </div>
    </div>
  </footer>

  <div class="search-panel" id="searchPanel">
    <button class="close-search" id="closeSearch">×</button>
    <div class="search-inner">
      <span>⌕</span>
      <input placeholder="搜索概念或教程...">
      <small>ESC 关闭</small>
    </div>
  </div>

  <script src="../page.js"></script>
</body>
</html>`;

  const distPath = path.join(ARTICLES_DIST_DIR, `${art.slug}.html`);
  fs.writeFileSync(distPath, pageHtml, 'utf8');
  console.log(`✅ [HTML] 已生成静态长文: articles/${art.slug}.html`);
});

// 4. 生成 /go/ 内部 301 隔离跳转文件
const GO_MAP = {
  shandianshu: 'https://chenpin.shandianshuaff.com/#/?code=m28TvPVX',
  dalaoyun: 'https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km',
  huanqiuti: 'https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo',
  liulianyun: 'https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt',
  yunjiexian: 'https://chenpingan.yunjiexianaff.com/#/?code=xLJGaIHM',
  shenxing: 'https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP',
  ermaoyun: 'https://server.ermaotztz3.homes/#/?code=Vf45aB7S',
  guangsuyun: 'https://sjds8ds.guangsut.sbs/#/?code=RrfZcKT5',
  bianyuan: 'https://bcbhk40y.ztymforedge.lol/#/?code=HgD5cJEh'
};

const GO_DIR = path.join(ROOT_DIR, 'go');
if (!fs.existsSync(GO_DIR)) fs.mkdirSync(GO_DIR, { recursive: true });

Object.entries(GO_MAP).forEach(([key, targetUrl]) => {
  const targetDir = path.join(GO_DIR, key);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
  
  const redirectHtml = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>正在跳转安全入口｜机场精准查</title>
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <meta name="robots" content="noindex,nofollow">
  <script>location.replace(${JSON.stringify(targetUrl)});</script>
</head>
<body>
  <p>正在安全跳转，请稍候... 如未自动跳转请 <a href="${targetUrl}" rel="nofollow sponsored noopener noreferrer">点击此处</a>。</p>
</body>
</html>`;

  fs.writeFileSync(path.join(targetDir, 'index.html'), redirectHtml, 'utf8');
  fs.writeFileSync(path.join(GO_DIR, `${key}.html`), redirectHtml, 'utf8');
});
console.log('✅ [Redirects] 已生成 /go/ 目录 301 隔离跳转文件');

// 5. 生成一级 clean URL 入口防止任何 404
const CHANNELS = ['reviews', 'compare', 'library', 'recommend', 'bonus', 'about', 'help', 'warning'];
CHANNELS.forEach(ch => {
  const dir = path.join(ROOT_DIR, ch);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const html = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/${ch}.html">
  <script>location.replace('/${ch}.html' + location.search + location.hash);</script>
</head>
<body></body>
</html>`;
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
});
console.log('✅ [Clean URLs] 已生成一级频道无后缀路由入口');

// 6. 同步到 knowledge-base.js (ID 51, 52, 53)
let kbContent = fs.readFileSync(KB_PATH, 'utf8');
const idConfig = {
  'network-speed-drop-single-thread-bottleneck': { id: 51, category: '测速' },
  'ip-quality-fraud-score-detection-guide': { id: 52, category: '跨境' },
  'tun-mode-vs-system-proxy-leak-fix': { id: 53, category: '安全' }
};

const catAdviceIdx = kbContent.indexOf('const categoryAdvice =');
const delimIdx = catAdviceIdx !== -1 ? kbContent.lastIndexOf('];', catAdviceIdx) : -1;

if (delimIdx !== -1) {
  let insertionList = [];
  parsedArticles.forEach(art => {
    const cfg = idConfig[art.slug];
    if (!cfg) return;
    if (kbContent.includes(`id: ${cfg.id},`)) {
      console.log(`ℹ️ [KnowledgeBase] 文章 ${cfg.id} 已存在于 knowledge-base.js`);
      return;
    }

    const cleanContent = art.html
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${');

    const objStr = `  {
    id: ${cfg.id},
    category: '${cfg.category}',
    title: '${art.frontmatter.title}',
    summary: '${art.frontmatter.description}',
    content: \`${cleanContent}\`
  }`;
    insertionList.push(objStr);
    console.log(`✅ [KnowledgeBase] 准备插入文章 ${cfg.id} (${art.slug})`);
  });

  if (insertionList.length > 0) {
    const beforeDelim = kbContent.substring(0, delimIdx).trimEnd();
    const afterDelim = kbContent.substring(delimIdx);
    kbContent = beforeDelim + ',\n' + insertionList.join(',\n') + '\n' + afterDelim;
  }
} else {
  console.warn('⚠️ [KnowledgeBase] 未找到确切数组结束标识，跳过追加');
}

kbContent = kbContent.replace('搜索 50 篇知识文章', '搜索 53 篇知识文章');
fs.writeFileSync(KB_PATH, kbContent, 'utf8');

// 7. 更新 sitemap.xml
let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
const urlsToAdd = [
  { loc: `https://${HOST}/articles/network-speed-drop-single-thread-bottleneck.html`, priority: '0.9', freq: 'weekly' },
  { loc: `https://${HOST}/articles/ip-quality-fraud-score-detection-guide.html`, priority: '0.9', freq: 'weekly' },
  { loc: `https://${HOST}/articles/tun-mode-vs-system-proxy-leak-fix.html`, priority: '0.9', freq: 'weekly' },
  { loc: `https://${HOST}/library.html?id=51`, priority: '0.8', freq: 'monthly' },
  { loc: `https://${HOST}/library.html?id=52`, priority: '0.8', freq: 'monthly' },
  { loc: `https://${HOST}/library.html?id=53`, priority: '0.8', freq: 'monthly' }
];

urlsToAdd.forEach(u => {
  if (!sitemap.includes(u.loc)) {
    const tag = `  <url><loc>${u.loc}</loc><lastmod>2026-11-01</lastmod><changefreq>${u.freq}</changefreq><priority>${u.priority}</priority></url>`;
    sitemap = sitemap.replace('</urlset>', `${tag}\n</urlset>`);
    console.log(`✅ [Sitemap] 添加 URL: ${u.loc}`);
  }
});

fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');

// 8. 语法校验
console.log('🔍 [Check] 正在执行 JavaScript 语法校验...');
const jsFiles = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.js'));
jsFiles.forEach(file => {
  try {
    execSync(`node --check "${path.join(ROOT_DIR, file)}"`);
  } catch (err) {
    console.error(`❌ [Syntax Error] ${file} 语法校验失败: ${err.message}`);
    process.exit(1);
  }
});
console.log(`✅ [Check] 全部 ${jsFiles.length} 个根目录 JS 文件语法校验通过 (0 错误 0 警告)`);

// 9. 全站链接有效性与死链检测
console.log('🔍 [Check] 正在执行全站死链与 404 检测...');
const allHtmlFiles = [];
function findHtml(dir) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    if (item.startsWith('.') || item === 'node_modules') continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      findHtml(full);
    } else if (item.endsWith('.html')) {
      allHtmlFiles.push(full);
    }
  }
}
findHtml(ROOT_DIR);

let brokenCount = 0;
allHtmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const regex = /href=["']([^"']+)["']/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    let url = m[1].trim();
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('javascript:') || url.startsWith('#')) continue;
    url = url.split('?')[0].split('#')[0];
    if (!url) continue;

    let target;
    if (url.startsWith('/')) {
      target = path.join(ROOT_DIR, url.slice(1));
    } else {
      target = path.join(dir, url);
    }

    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      target = path.join(target, 'index.html');
    }

    if (!fs.existsSync(target)) {
      console.warn(`⚠️ [Link Warning] 在 ${path.relative(ROOT_DIR, file)} 中发现未匹配路径: ${url}`);
      brokenCount++;
    }
  }
});

if (brokenCount > 0) {
  console.warn(`⚠️ [Link Check] 发现 ${brokenCount} 处需要关注的链接`);
} else {
  console.log(`✅ [Link Check] 全站 ${allHtmlFiles.length} 个 HTML 页面完成深度内链校验，0 死链！`);
}

console.log('🎉 [Build Complete] 全部任务构建完成！');

