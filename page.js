const path = location.pathname.toLowerCase();
const isRecommend = path.includes('recommend');
const isReviews = path.includes('reviews');
const isCompare = path.includes('compare');
const isHelp = path.includes('help');

if(isRecommend){const trust=document.createElement('script');trust.src='trust-section.js';document.head.appendChild(trust)}
const favicon=document.createElement('link');favicon.rel='icon';favicon.type='image/svg+xml';favicon.href='assets/logos/logo-01-radar.svg';document.head.appendChild(favicon);
const themeMeta=document.createElement('meta');themeMeta.name='theme-color';themeMeta.content='#111c35';document.head.appendChild(themeMeta);

if(isRecommend)document.title='机场推荐｜机场精准查';
else if(isReviews)document.title='机场测评｜机场精准查';
else if(isCompare)document.title='机场对比｜机场精准查';
else if(isHelp)document.title='使用帮助｜机场精准查';
else if(path.includes('library'))document.title='知识库｜机场精准查';
else if(path.includes('bonus'))document.title='福利中心｜机场精准查';
else if(path.includes('about'))document.title='关于本站｜机场精准查';
else if(path.includes('privacy'))document.title='隐私政策｜机场精准查';
else if(path.includes('terms'))document.title='使用条款｜机场精准查';

const pagePanel=document.getElementById('searchPanel');const openSearch=document.getElementById('searchBtn');const closeSearch=document.getElementById('closeSearch');if(openSearch&&pagePanel)openSearch.onclick=()=>pagePanel.classList.add('open');if(closeSearch&&pagePanel)closeSearch.onclick=()=>pagePanel.classList.remove('open');document.addEventListener('keydown',e=>{if(e.key==='Escape'&&pagePanel)pagePanel.classList.remove('open')});const menu=document.getElementById('menuBtn');if(menu)menu.onclick=()=>document.querySelector('.main-nav').classList.toggle('mobile-open');

const mainNav=document.querySelector('.main-nav');
if(mainNav&&!mainNav.querySelector('a[href="warning.html"]')){
  const warningLink=document.createElement('a');
  warningLink.href='warning.html';
  warningLink.className='warning-nav';
  warningLink.textContent='机场跑路预警';
  const aboutLink=mainNav.querySelector('a[href="about.html"]');
  mainNav.insertBefore(warningLink,aboutLink||null);
}
if(mainNav&&!mainNav.querySelector('a[href="friends.html"]')){
  const friendsLink=document.createElement('a');
  friendsLink.href='friends.html';
  friendsLink.textContent='友链';
  const warningLink=mainNav.querySelector('a[href="warning.html"]');
  const aboutLink=mainNav.querySelector('a[href="about.html"]');
  mainNav.insertBefore(friendsLink,warningLink?warningLink.nextSibling:aboutLink);
}
if(mainNav&&!mainNav.querySelector('.nav-social')){
  const socials=[['nav-telegram','https://t.me/shandianjiaoliu','Telegram','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.4 18.5 19c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.4-.1-.6-.6-.2L6.1 12.8 1.3 11.3c-1-.3-1-1 .2-1.5L20.2 2.6c.9-.3 1.7.2 1.5.8Z"/></svg>'],['nav-github','https://github.com/shandianshu888/jingzhuncha888','GitHub','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.5v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C15.7 5 16.7 5.3 16.7 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.5A11.5 11.5 0 0 0 12 .7Z"/></svg>']];
  socials.forEach(([cls,href,label,icon])=>{const a=document.createElement('a');a.className=`nav-social ${cls}`;a.href=href;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',label);a.title=label;a.innerHTML=icon;mainNav.appendChild(a)});
}
document.querySelector('.nav-github')?.remove();

if(isRecommend){
  const voucherCodes=['sd88','dly88','hq66','ll88','yjx888','sx0077'];
  document.querySelectorAll('.airport-card .price-head').forEach((head,index)=>{
    const code=voucherCodes[index];
    if(!code)return;
    const badge=document.createElement('button');
    badge.type='button';
    badge.className='voucher-code';
    badge.dataset.code=code;
    badge.title=`点击复制优惠券码 ${code}`;
    badge.innerHTML=`<span>优惠券码</span><b>${code}</b>`;
    badge.addEventListener('click',async()=>{
      try{await navigator.clipboard.writeText(code)}catch(error){const input=document.createElement('textarea');input.value=code;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();document.execCommand('copy');input.remove()}
      badge.classList.add('copied');
      badge.querySelector('span').textContent='已复制';
      setTimeout(()=>{badge.classList.remove('copied');badge.querySelector('span').textContent='优惠券码'},1500);
    });
    head.insertBefore(badge,head.querySelector('strong'));
  });
}
if(isReviews){const s=document.createElement('script');s.src='reviews-articles.js';document.head.appendChild(s)}
if(isCompare){const s=document.createElement('script');s.src='compare-status.js';document.head.appendChild(s)}
if(isHelp){const s=document.createElement('script');s.src='help-guides.js';document.head.appendChild(s)}

function renderSiteFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-main">
        <div class="footer-brand-side">
          <a class="brand" href="index.html">
            <span class="brand-mark"><i></i><i></i><i></i></span>
            <span>机场<span class="brand-accent">精准查</span></span>
          </a>
          <div class="footer-slogans">
            <span>真实线路独立实测</span>
            <span>高性价比优质选拔</span>
          </div>
          <p class="footer-desc">不收厂商软文，用数据说话。围绕速度、稳定性与隐私安全，为全球用户提供透明、客观的机场测评与避坑指南。</p>
        </div>

        <div class="footer-nav-grid">
          <div class="footer-nav-col">
            <h4>内容</h4>
            <ul>
              <li><a href="library.html">博客</a></li>
              <li><a href="library.html">专题</a></li>
              <li><a href="compare.html">对比</a></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h4>机场</h4>
            <ul>
              <li><a href="recommend.html">机场推荐</a></li>
              <li><a href="recommend.html#recommend">性价比机场</a></li>
              <li><a href="bonus.html">机场优惠码</a></li>
              <li><a href="reviews.html">机场库</a></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h4>资源</h4>
            <ul>
              <li><a href="help.html#downloads">客户端下载</a></li>
              <li><a href="help.html#troubleshoot">常见问题</a></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h4>关于与政策</h4>
            <ul>
              <li><a href="about.html">关于本站</a></li>
              <li><a href="privacy.html">隐私政策</a></li>
              <li><a href="terms.html">使用条款</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <span>© 2026 机场精准查 · 保留所有权利</span>
        <span>数据持续更新 · 独立第三方评测</span>
        <a href="#top">返回顶部 ↑</a>
      </div>
    </div>
  `;
}
renderSiteFooter();

