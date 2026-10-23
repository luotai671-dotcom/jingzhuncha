const airportStatusMap={
 '闪电鼠':{device:'不限设备 · 1×倍率',labels:['综合优选','商务优选','高清畅看','高峰优选','假期优选']},
 '大佬云':{device:'不限设备',labels:['影音友好','灵活办公','流畅播放','高峰稳健','长假适配']},
 '环球梯':{device:'3 条线路',labels:['多区适配','跨区优选','多场景畅看','线路灵活','出行友好']},
 '榴莲云':{device:'不限设备',labels:['大流量影音','团队适配','追剧优选','多设备友好','家庭优选']},
 '云界线':{device:'不限设备',labels:['高流量适配','办公优选','持续播放','重度使用','长周期友好']},
 '神行加速':{device:'不限设备',labels:['日常实用','入门友好','影音均衡','高峰适配','备用优选']}
};
const classes=['tag-excellent','tag-premium','tag-excellent','tag-focus','tag-focus'];
document.querySelectorAll('.compare-table tbody tr').forEach((row)=>{
 const cells=row.querySelectorAll('td');
 if(!cells.length)return;
 const name=cells[0].textContent.replace(/^\d+\s*/,'').trim();
 const data=airportStatusMap[name];
 if(!data)return;
 cells[3].textContent=data.device;
 data.labels.forEach((text,i)=>{
  if(cells[i+4]){
   cells[i+4].textContent=text;
   cells[i+4].className=classes[i];
  }
 });
});
const note=document.querySelector('.compare-note');
if(note)note.innerHTML='<strong>场景推荐说明</strong><p>每家机场按套餐结构和适用方向单独定位：排名靠前的方案更强调综合覆盖，其余方案分别突出线路灵活度、大流量、办公影音或入门实用性，方便按需求选择。</p>';
const oldArticleTitle=[...document.querySelectorAll('.content-title')].find(el=>el.textContent.includes('测评文章'));
if(oldArticleTitle){
 const articles=oldArticleTitle.nextElementSibling;
 if(articles?.classList.contains('compare-articles'))articles.remove();
 oldArticleTitle.remove();
}

