const fs = require('fs');
const https = require('https');
const path = require('path');

const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');
const HOST = 'jcjingzhuncha.com';
const KEY = 'd7177de219adaa225b3abd9d1677e2d3';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

if (!fs.existsSync(SITEMAP_PATH)) {
  console.error(`❌ sitemap.xml not found at ${SITEMAP_PATH}`);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
const locMatches = sitemapContent.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
const urlList = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

if (urlList.length === 0) {
  console.error('❌ No URLs found in sitemap.xml');
  process.exit(1);
}

console.log(`📡 [IndexNow] 从 sitemap.xml 中读取到 ${urlList.length} 条 URL，准备推送...`);

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

const req = https.request({
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
}, (res) => {
  console.log(`📥 [IndexNow] 响应状态码: ${res.statusCode} ${res.statusMessage || ''}`);
  let responseBody = '';
  res.on('data', chunk => responseBody += chunk);
  res.on('end', () => {
    if (responseBody) {
      console.log('📄 响应内容:', responseBody);
    }
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ [IndexNow] URL 批量提交成功 (200/202)！搜索引擎将自动收录更新。');
    } else {
      console.warn(`⚠️ [IndexNow] 返回非预期状态码: ${res.statusCode}`);
    }
  });
});

req.on('error', (err) => {
  console.error('❌ [IndexNow] 请求发生异常:', err.message);
});

req.write(payload);
req.end();
