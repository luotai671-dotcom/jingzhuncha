const favicon=document.createElement('link');favicon.rel='icon';favicon.type='image/svg+xml';favicon.href='assets/logos/logo-01-radar.svg';document.head.appendChild(favicon);const themeMeta=document.createElement('meta');themeMeta.name='theme-color';themeMeta.content='#111c35';document.head.appendChild(themeMeta);const canvas=document.getElementById('network-canvas'),ctx=canvas.getContext('2d');let nodes=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight;nodes=Array.from({length:Math.min(55,Math.floor(innerWidth/24))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);nodes.forEach((n,i)=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>canvas.width)n.vx*=-1;if(n.y<0||n.y>canvas.height)n.vy*=-1;nodes.slice(i+1).forEach(m=>{const d=Math.hypot(n.x-m.x,n.y-m.y);if(d<170){ctx.strokeStyle=`rgba(85,119,242,${.12*(1-d/170)})`;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(m.x,m.y);ctx.stroke()}});ctx.fillStyle='rgba(85,119,242,.28)';ctx.beginPath();ctx.arc(n.x,n.y,1.5,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}resize();draw();addEventListener('resize',resize);const panel=document.getElementById('searchPanel');document.getElementById('searchBtn').onclick=()=>panel.classList.add('open');document.getElementById('closeSearch').onclick=()=>panel.classList.remove('open');document.addEventListener('keydown',e=>{if(e.key==='Escape')panel.classList.remove('open')});document.getElementById('menuBtn').onclick=()=>document.querySelector('.main-nav').classList.toggle('mobile-open');
const nav=document.querySelector('.main-nav');if(nav&&!nav.querySelector('.nav-social')){const socials=[['nav-telegram','https://t.me/shandianjiaoliu','Telegram','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.4 18.5 19c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.4-.1-.6-.6-.2L6.1 12.8 1.3 11.3c-1-.3-1-1 .2-1.5L20.2 2.6c.9-.3 1.7.2 1.5.8Z"/></svg>'],['nav-github','https://github.com/shandianshu888/jingzhuncha888','GitHub','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.5v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C15.7 5 16.7 5.3 16.7 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.5A11.5 11.5 0 0 0 12 .7Z"/></svg>']];socials.forEach(([cls,href,label,icon])=>{const a=document.createElement('a');a.className=`nav-social ${cls}`;a.href=href;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',label);a.title=label;a.innerHTML=icon;nav.appendChild(a)})}
document.querySelector('.nav-github')?.remove();

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
