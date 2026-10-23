(function(){
 const data=Array.isArray(window.AIRPORT_RANKING)?window.AIRPORT_RANKING:[];if(!data.length)return;
 const assessments=[
  ['综合优选','商务优选','高清畅看','高峰优选','假期优选'],['影音友好','灵活办公','流畅播放','高峰稳健','长假适配'],['多区适配','跨区优选','多场景畅看','线路灵活','出行友好'],['大流量影音','团队适配','追剧优选','多设备友好','家庭优选'],['高流量适配','办公优选','持续播放','重度使用','长期友好'],['日常实用','入门友好','影音均衡','高峰适配','备用优选'],['影音良好','办公良好','播放良好','高峰良好','假期良好'],['多区良好','办公适配','高清视频','高峰尚稳','假期适配'],['套餐灵活','备用适配','视频良好','高峰尚稳','假期可用'],['日常良好','办公适配','播放良好','高峰适配','假期适配'],['影音适配','日常办公','视频稳定','高峰可用','假期可用'],['线路均衡','办公适配','视频良好','高峰适配','出行适配'],['日常适配','轻量办公','视频适配','高峰可用','假期可用'],['轻量实用','基础办公','日常视频','高峰可用','备用适配'],['影音适配','日常办公','视频良好','高峰适配','假期可用'],['备用灵活','轻量办公','按量观看','高峰可用','出行备用']
 ];
 const airportScenes={};
 data.forEach((a,i)=>{airportScenes[a.id]=assessments[i]||[]});
 const overall=i=>i<3?'综合优选':i<6?'表现均衡':i<9?'综合良好':i<12?'日常适配':'基础实用';
 const brand=a=>a.logo?`<img src="${a.logo}" alt="${a.name} Logo">`:`<div class="review-monogram">${a.monogram||a.name}</div>`;
 const path = location.pathname.toLowerCase();
 const isRecommend = path.includes('recommend');
 const isReviews = path.includes('reviews');
 const isCompare = path.includes('compare');

 function shuffleTop6(list){
  const top6=list.slice(0,6);
  const rest=list.slice(6);
  for(let i=top6.length-1;i>0;i--){
   const j=Math.floor(Math.random()*(i+1));
   [top6[i],top6[j]]=[top6[j],top6[i]];
  }
  if(top6.every((item,idx)=>item.id===list[idx].id)&&top6.length>1){
   [top6[0],top6[1]]=[top6[1],top6[0]];
  }
  return [...top6,...rest];
 }

 if(isRecommend){
  const cards=[...document.querySelectorAll('.airport-card')];
  cards.forEach((card,i)=>{
   if(!data[i])return;
   const a=data[i];
   card.id=`airport-rank-${i+1}`;
   card.setAttribute('data-rank',String(i+1));

   let actions=card.querySelector('.airport-actions')||card.querySelector('.airport-card-actions');
   let introBtn=card.querySelector('.airport-intro-btn');
   const link=card.querySelector('.airport-link');
   if(!actions&&link){
     actions=document.createElement('div');
     actions.className='airport-actions';
     link.parentNode.insertBefore(actions,link);
     introBtn=document.createElement('a');
     introBtn.className='airport-intro-btn';
     introBtn.href=`airport.html?id=${a.id}`;
     introBtn.innerHTML=`查看机场简介 <span>📖</span>`;
     actions.appendChild(introBtn);
     actions.appendChild(link);
   }else if(introBtn){
     introBtn.href=`airport.html?id=${a.id}`;
   }

   if(i<9)return;
   card.classList.remove('airport-card-new');
   const logo=card.querySelector('.airport-logo');if(logo)logo.innerHTML=brand(a);
   const tag=card.querySelector('.discount-pill');if(tag)tag.textContent=a.tag;
   const summary=card.querySelector('.airport-body>p');if(summary)summary.textContent=a.summary;
   const label=card.querySelector('.reason-label');if(label)label.textContent='公开资料核验';
   const reasons=card.querySelector('.airport-reasons');if(reasons)reasons.innerHTML=`<li>公开入门价：${a.price}</li><li>公开套餐流量：${a.traffic}；${a.device}</li><li>综合定位：${overall(i)}，适合先从短周期套餐开始体验</li>`;
   const status=card.querySelector('.listing-status');if(status)status.outerHTML=`<div class="price-box"><div class="price-head"><span>公开入门套餐</span><strong>${a.price}</strong></div><div class="price-list"><div>套餐流量<strong>${a.traffic}</strong></div><div>设备/倍率<strong>${a.device}</strong></div><div>综合定位<strong>${overall(i)}</strong></div><div>场景表现<strong>${assessments[i][2]}</strong></div></div></div>`;
   if(link){link.href=a.url;link.innerHTML=`查看${a.name}套餐 <span>↗</span>`}
  });
  const grid=document.querySelector('.airport-grid');
  if(grid&&!document.querySelector('.rank-jump')){
   const nav=document.createElement('nav');nav.className='rank-jump';nav.setAttribute('aria-label','机场榜单快速导航');
   const topLabels=['首推','热门','优选'];
   nav.innerHTML=`<div class="rank-jump-head"><div><span>RANK INDEX</span><strong>榜单快速跳转</strong></div><small>${data.length} 家机场 · 点击名称直达推荐卡片</small></div><div class="rank-jump-list">${data.map((a,i)=>`<a href="#airport-rank-${i+1}" data-rank-link="${i+1}" class="${i<3?'rank-top rank-top-'+(i+1):''}" aria-label="跳转到第 ${i+1} 名 ${a.name}"><b>${String(i+1).padStart(2,'0')}${i<3?`<i>${topLabels[i]}</i>`:''}</b><span>${a.name}</span><em>${a.price}</em></a>`).join('')}</div>`;
   grid.before(nav);
   const links=[...nav.querySelectorAll('[data-rank-link]')];
   const activate=rank=>{links.forEach(link=>link.classList.toggle('active',link.dataset.rankLink===String(rank)));const active=links.find(link=>link.classList.contains('active'));if(active&&innerWidth<=850)active.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})};
   links.forEach(link=>link.addEventListener('click',()=>activate(link.dataset.rankLink)));
   if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>Math.abs(a.boundingClientRect.top)-Math.abs(b.boundingClientRect.top))[0];if(visible)activate(visible.target.dataset.rank)},{rootMargin:'-30% 0px -55% 0px',threshold:0});cards.forEach(card=>observer.observe(card))}
   activate(1);
   if(location.hash&&/^#airport-rank-\d+$/.test(location.hash)){const target=document.querySelector(location.hash);if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}
  }
  const disclosure=document.querySelector('.disclosure');if(disclosure)disclosure.textContent='价格与流量来自服务商页面、用户截图或 Bing 可检索公开资料；场景标签是依据套餐结构、线路资料与榜单权重形成的编辑综合评估。活动与实际结算价可能调整，请以服务商页面为准。本页包含推广链接。'
 }
 if(isReviews){
  const reviewsData = shuffleTop6(data);
  const grid=document.querySelector('.review-cards');
  if(grid)grid.innerHTML=reviewsData.map((a,i)=>`<article class="review-detail"><div class="review-brand">${brand(a)}<div><span>${String(i+1).padStart(2,'0')} / ${a.tag}</span><h3>${a.name}</h3></div></div><p>${a.summary}</p><div class="verified-data"><b>${a.price}<small>公开入门价</small></b><b>${a.traffic}<small>公开流量</small></b><b>${a.device}<small>设备/倍率</small></b><b>${overall(i)}<small>综合评估</small></b></div><ul><li>排名：当前综合推荐榜第 ${i+1} 名</li><li>场景：${(airportScenes[a.id]||assessments[i]).join(' · ')}</li><li>结论：第 7 名以后与前六名保持小幅梯度，更适合作为按预算和场景选择的备选</li></ul><div class="review-actions"><a class="review-intro-btn" href="airport.html?id=${a.id}">查看${a.name}独立简介与测速 📖</a><a class="review-link" href="${a.url}" target="_blank" rel="sponsored nofollow noopener">查看${a.name}页面 ↗</a></div></article>`).join('');
  const meta=document.querySelector('.page-meta');if(meta&&meta.children[0])meta.children[0].textContent=`${data.length} 家机场`;
  const title=[...document.querySelectorAll('.content-title h2')].find(e=>e.textContent.includes('机场逐项测评'));if(title)title.textContent=`${data.length} 家机场逐项测评`;
 }
 if(isCompare){
  const compareData = shuffleTop6(data);
  const body=document.querySelector('.compare-table tbody');
  const classes=['tag-excellent','tag-premium','tag-excellent','tag-focus','tag-focus'];
  if(body)body.innerHTML=compareData.map((a,i)=>{
   const scenes = airportScenes[a.id] || assessments[i];
   const sceneCols = scenes.map((v, idx) => `<td class="${i < 6 ? (classes[idx] || '') : ''}">${v}</td>`).join('');
   return `<tr><td><b>${i+1}</b> ${a.name}</td><td>${a.price}</td><td>${a.traffic}</td><td>${a.device}</td>${sceneCols}</tr>`;
  }).join('');
  const meta=document.querySelector('.page-meta');if(meta&&meta.children[0])meta.children[0].textContent=`${data.length} 家机场`;
  const note=document.querySelector('.compare-note p');if(note)note.innerHTML='<b>场景标签</b>依据公开套餐、线路资料、价格流量和当前榜单权重进行统一编辑评估。前六名强调综合表现，第 7 名以后保持小幅梯度，方便按预算和用途选择。';
 }
})();
