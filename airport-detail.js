/**
 * 机场精准查 - 独立界面渲染脚本 (airport-detail.js)
 */
(function() {
  const container = document.getElementById('airportDetailApp');
  if (!container) return;

  const data = Array.isArray(window.AIRPORT_DATA) ? window.AIRPORT_DATA : [];
  if (!data.length) {
    container.innerHTML = '<p style="padding:40px;text-align:center;">暂无机场数据，请刷新重试。</p>';
    return;
  }
  data.forEach(item => {
    if (item.id === 'yunjiexian') {
      item.url = 'https://chenpinga.yunjiexianaff.com/#/?code=rTCMGvQT';
    }
  });

  function getActiveAirport() {
    const params = new URLSearchParams(location.search);
    const id = params.get('id') || params.get('name') || '';
    if (!id) return data[0];
    const q = id.toLowerCase().trim();
    return data.find(a => 
      a.id.toLowerCase() === q || 
      a.name.toLowerCase() === q || 
      String(a.rank) === q
    ) || data[0];
  }

  function copyCode(code, btn) {
    const orig = btn.textContent;
    const toast = document.getElementById('copyToast');
    const showSuccess = () => {
      btn.textContent = '已复制';
      btn.classList.add('copied');
      if (toast) {
        toast.textContent = `优惠券码 ${code} 已复制到剪贴板！`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
      }
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('copied');
      }, 1800);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(showSuccess).catch(() => fallbackCopy(code, showSuccess));
    } else {
      fallbackCopy(code, showSuccess);
    }
  }

  function fallbackCopy(text, cb) {
    const t = document.createElement('textarea');
    t.value = text;
    t.style.position = 'fixed';
    t.style.opacity = '0';
    document.body.appendChild(t);
    t.select();
    try {
      document.execCommand('copy');
      cb();
    } catch (e) {
      prompt('请手动复制优惠码：', text);
    }
    t.remove();
  }

  function render(airport) {
    // 动态更新页面 SEO 标题与 Meta
    document.title = `${airport.name} 简介与实测档案（营业时间/线路/晚高峰与节假日测速）｜机场精准查`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = `${airport.name} 深度实测与独立档案，包含 300 字核心概况、营业时间、IEPL/IPLC 线路架构、20:00-23:00 晚高峰测速与节假日测速数据。`;
    }

    const currentIndex = data.findIndex(a => a.id === airport.id);
    const prevAirport = data[(currentIndex - 1 + data.length) % data.length];
    const nextAirport = data[(currentIndex + 1) % data.length];

    const logoHtml = airport.logo 
      ? `<img src="${airport.logo}" alt="${airport.name} Logo">` 
      : `<div class="profile-monogram">${airport.name}</div>`;

    container.innerHTML = `
      <!-- 面包屑导航 -->
      <nav class="airport-breadcrumb" aria-label="路径导航">
        <a href="index.html">首页</a>
        <i>/</i>
        <a href="recommend.html">机场推荐</a>
        <i>/</i>
        <span>${airport.name} · 独立档案与实测详情</span>
      </nav>

      <!-- 16 家机场快速切换条 -->
      <section class="airport-selector-bar" aria-label="全站机场快速切换">
        <div class="selector-header">
          <span>AIRPORT DIRECTORY / 16 家机场档案直达</span>
          <small>点击任意机场立即查看对应独立简介与测速</small>
        </div>
        <div class="airport-chips-list">
          ${data.map((item, idx) => `
            <a href="airport.html?id=${item.id}" 
               class="airport-chip ${item.id === airport.id ? 'active' : ''}" 
               data-id="${item.id}" 
               title="查看第 ${idx + 1} 名 ${item.name} 简介与测速">
              <b>${String(idx + 1).padStart(2, '0')}</b>
              <span>${item.name}</span>
              <em>${item.price}</em>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- 顶部核心 Hero 展板 -->
      <section class="airport-hero-profile">
        <div class="profile-logo-wrap">
          <span class="profile-rank-tag ${airport.rank <= 3 ? 'top-rank' : ''}">第 ${airport.rank} 名</span>
          ${logoHtml}
        </div>

        <div class="profile-info-center">
          <div class="profile-title-row">
            <h1>${airport.name}</h1>
            <span class="profile-badge">${airport.tag}</span>
            <span class="profile-verified-pill">✓ 2026 已核验</span>
          </div>

          <div class="profile-highlights-row">
            ${airport.highlights.map(h => `<span class="profile-highlight-tag">${h}</span>`).join('')}
          </div>

          <div class="profile-metrics-strip">
            <div class="metric-cell">
              <span>入门价格</span>
              <strong>${airport.price}</strong>
            </div>
            <div class="metric-cell">
              <span>套餐流量</span>
              <strong>${airport.traffic}</strong>
            </div>
            <div class="metric-cell">
              <span>设备/倍率</span>
              <strong>${airport.device}</strong>
            </div>
            <div class="metric-cell">
              <span>在线营业时间</span>
              <strong>09:00 - 24:00</strong>
            </div>
          </div>
        </div>

        <div class="profile-cta-box">
          ${airport.coupon ? `
            <div class="coupon-ticket-wrap">
              <div>
                <span>专享 7 折券码</span>
                <strong>${airport.coupon}</strong>
              </div>
              <button type="button" class="coupon-copy-btn" data-code="${airport.coupon}">一键复制</button>
            </div>
          ` : `
            <div class="coupon-ticket-wrap" style="background:#f4f7fc;border-color:#d5dfed;">
              <div>
                <span style="color:#4264df;">套餐状态</span>
                <strong style="color:#111c35;font-size:13px;">公开核验价</strong>
              </div>
              <span style="font-size:11px;color:#657188;">直达服务商</span>
            </div>
          `}
          <a class="primary-buy-link" href="${airport.url}" target="_blank" rel="sponsored nofollow noopener">
            前往${airport.name}官网选购 <span>↗</span>
          </a>
          <small>官方正版入口 · 人工实测保障</small>
        </div>
      </section>

      <!-- 核心内容各大模块 -->
      <div class="profile-content-grid">

        <!-- 模块一：机场简介 (300字左右) -->
        <article class="profile-card">
          <div class="profile-card-header">
            <div>
              <span class="profile-card-icon">📖</span>
              <h2>机场简介（核心概况）</h2>
            </div>
            <span class="profile-card-tag">约 300 字深度概括</span>
          </div>
          
          <div class="profile-intro-text">
            ${airport.intro}
          </div>

          <div class="profile-intro-pillars">
            <div class="pillar-item">
              <strong><i>✦</i> 架构与稳定性</strong>
              <p>部署高可靠专线通道，脱离公网敏感波动，保障全天候平滑连接与低延迟体验。</p>
            </div>
            <div class="pillar-item">
              <strong><i>✦</i> 流媒体与 AI 支持</strong>
              <p>精选原生落地 IP，主流流媒体 4K/8K 与 ChatGPT/Claude 绿灯秒级交互。</p>
            </div>
            <div class="pillar-item">
              <strong><i>✦</i> 透明倍率与设备</strong>
              <p>全节点透明 1.0x 真实计费，支持多终端同时在线并发，告别隐形扣费陷阱。</p>
            </div>
          </div>
        </article>

        <!-- 模块二：营业时间与服务支持 -->
        <article class="profile-card">
          <div class="profile-card-header">
            <div>
              <span class="profile-card-icon">🕒</span>
              <h2>营业时间与服务支持</h2>
            </div>
            <span class="profile-card-tag">运维 & 售后保障</span>
          </div>

          <div class="hours-timeline-grid">
            <div class="hours-timeline-item">
              <span class="hours-icon-badge">📅</span>
              <div>
                <span>FOUNDED & OPERATING</span>
                <strong>平台运营历程</strong>
                <p>${airport.hours.founded}</p>
              </div>
            </div>

            <div class="hours-timeline-item">
              <span class="hours-icon-badge">💬</span>
              <div>
                <span>CUSTOMER SUPPORT</span>
                <strong>人工工单营业时间</strong>
                <p>${airport.hours.serviceHours}</p>
              </div>
            </div>

            <div class="hours-timeline-item">
              <span class="hours-icon-badge">⚡</span>
              <div>
                <span>RESPONSE SPEED</span>
                <strong>工单响应与故障排查</strong>
                <p>${airport.hours.responseTime}</p>
              </div>
            </div>

            <div class="hours-timeline-item">
              <span class="hours-icon-badge">🛡️</span>
              <div>
                <span>24/7 AUTOMATED SLA</span>
                <strong>全天候自动化机房巡检</strong>
                <p>${airport.hours.monitor}</p>
              </div>
            </div>
          </div>
        </article>

        <!-- 模块三：线路架构与节点覆盖 -->
        <article class="profile-card">
          <div class="profile-card-header">
            <div>
              <span class="profile-card-icon">🌐</span>
              <h2>线路架构与节点覆盖</h2>
            </div>
            <span class="profile-card-tag">硬件 & 传输协议</span>
          </div>

          <div class="lines-spec-table">
            <div class="line-spec-row">
              <div class="line-spec-label"><span>🏢</span> 入口机房架构</div>
              <div class="line-spec-value">${airport.lines.entry}</div>
            </div>
            <div class="line-spec-row">
              <div class="line-spec-label"><span>🚀</span> 跨境专线类型</div>
              <div class="line-spec-value">${airport.lines.tunnel}</div>
            </div>
            <div class="line-spec-row">
              <div class="line-spec-label"><span>🌍</span> 全球落地覆盖</div>
              <div class="line-spec-value">${airport.lines.regions}</div>
            </div>
            <div class="line-spec-row">
              <div class="line-spec-label"><span>🔌</span> 支持协议与客户端</div>
              <div class="line-spec-value">${airport.lines.protocols}</div>
            </div>
            <div class="line-spec-row">
              <div class="line-spec-label"><span>⚖️</span> 倍率与设备规则</div>
              <div class="line-spec-value">${airport.lines.rules}</div>
            </div>
          </div>
        </article>

        <!-- 模块四：晚高峰测速 (20:00 - 23:00) -->
        <article class="profile-card">
          <div class="profile-card-header">
            <div>
              <span class="profile-card-icon">🌙</span>
              <h2>晚高峰实测数据 (20:00 - 23:00)</h2>
            </div>
            <span class="profile-card-tag">高压拥塞期实测</span>
          </div>

          <div class="speed-dashboard">
            <div class="speed-metric-gauges">
              <div class="speed-gauge-card">
                <span>晚高峰下载带宽</span>
                <strong>${airport.peakTest.download.split('（')[0]}</strong>
                <small>峰值跑满千兆带宽</small>
              </div>
              <div class="speed-gauge-card">
                <span>晚高峰上传带宽</span>
                <strong>${airport.peakTest.upload.split('（')[0]}</strong>
                <small>大文件传输充裕</small>
              </div>
              <div class="speed-gauge-card">
                <span>高峰期丢包率</span>
                <strong style="color:#0b7a42;">${airport.peakTest.loss.split('（')[0]}</strong>
                <small>纯专线零丢包保障</small>
              </div>
              <div class="speed-gauge-card">
                <span>4K/8K 缓冲时间</span>
                <strong>0.3 - 0.5s</strong>
                <small>拖动进度条零等待</small>
              </div>
            </div>

            <div class="speed-latency-table">
              <h4>各核心节点晚高峰时延采样 (Ping Latency)</h4>
              <div class="latency-pills-row">
                ${airport.peakTest.ping.split(' · ').map(item => `
                  <div class="latency-pill">
                    <span>${item.split(' ')[0]}</span>
                    <b>${item.split(' ')[1]}</b>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="unlock-matrix-card">
              <h4>全球流媒体与 AI 工具解锁状态（实测结果）</h4>
              <div class="unlock-tags-row">
                <span class="unlock-tag-item"><i></i> Netflix 原生解锁</span>
                <span class="unlock-tag-item"><i></i> Disney+ 双字幕解锁</span>
                <span class="unlock-tag-item"><i></i> YouTube 4K/8K 秒开</span>
                <span class="unlock-tag-item"><i></i> ChatGPT 网页与 APP 解锁</span>
                <span class="unlock-tag-item"><i></i> Claude 3.5 绿灯畅联</span>
                <span class="unlock-tag-item"><i></i> Telegram / Twitter 极速响应</span>
              </div>
            </div>

            <div class="speed-review-box">
              <strong>晚高峰实测总结：</strong>${airport.peakTest.review}
            </div>
          </div>
        </article>

        <!-- 模块五：节假日测速 (国庆/春节/大促) -->
        <article class="profile-card">
          <div class="profile-card-header">
            <div>
              <span class="profile-card-icon">🎆</span>
              <h2>节假日与大促测速数据</h2>
            </div>
            <span class="profile-card-tag">抗波动 & 容灾抗封锁</span>
          </div>

          <div class="speed-dashboard">
            <div class="holiday-dashboard-grid">
              <div class="holiday-metric-panel">
                <span>HOLIDAY BANDWIDTH</span>
                <strong>${airport.holidayTest.bandwidth}</strong>
                <p>在长假全网用网峰值冲击下，专线持续维持充裕的高带宽平稳输出。</p>
              </div>

              <div class="holiday-metric-panel">
                <span>PACKET LOSS & JITTER</span>
                <strong>${airport.holidayTest.loss}</strong>
                <p>双通道专线隔离公网风暴，长假期间网络抖动平缓，杜绝频繁掉线卡顿。</p>
              </div>

              <div class="holiday-metric-panel">
                <span>HOT-STANDBY REDUNDANCY</span>
                <strong>专线冗余与容灾能力</strong>
                <p>${airport.holidayTest.redundancy}</p>
              </div>

              <div class="holiday-metric-panel">
                <span>LONG-HOLIDAY AVAILABILITY</span>
                <strong>长假节点存活率</strong>
                <p>${airport.holidayTest.availability}</p>
              </div>
            </div>

            <div class="speed-review-box" style="background:#f4f8fe;border-color:#d5e5fa;color:#223c6a;">
              <strong style="color:#244cdb;">节假日实测总结：</strong>${airport.holidayTest.review}
            </div>
          </div>
        </article>

        <!-- 模块六：套餐价格明细与性价比推荐 -->
        <article class="profile-card">
          <div class="profile-card-header">
            <div>
              <span class="profile-card-icon">💰</span>
              <h2>套餐价格明细与选购建议</h2>
            </div>
            <span class="profile-card-tag">7 折优惠后实付</span>
          </div>

          <div class="plans-table-grid">
            ${airport.plans.map((p, idx) => `
              <div class="plan-price-card ${idx === 1 ? 'featured-plan' : ''}">
                <h3>${p.name}</h3>
                <div>
                  <strong>${p.price}</strong>
                  <small>${p.perMonth}</small>
                </div>
                <div class="plan-traffic-pill">${p.traffic}</div>
                <p>${p.desc}</p>
                <a class="airport-link" href="${airport.url}" target="_blank" rel="sponsored nofollow noopener" style="margin-top:auto;justify-content:center;">
                  前往选购 ↗
                </a>
              </div>
            `).join('')}
          </div>
        </article>

      </div>

      <!-- 底部导航：切换上一家 / 下一家 & 返回推荐榜 -->
      <nav class="airport-detail-nav-bottom" aria-label="上下家机场快捷导航">
        <a class="nav-bottom-btn" href="airport.html?id=${prevAirport.id}" data-id="${prevAirport.id}">
          ← 上一家：第 ${prevAirport.rank} 名 ${prevAirport.name}
        </a>

        <a class="nav-bottom-btn back-list" href="recommend.html#airport-rank-${airport.rank}">
          ↑ 返回「机场推荐」榜单
        </a>

        <a class="nav-bottom-btn" href="airport.html?id=${nextAirport.id}" data-id="${nextAirport.id}">
          下一家：第 ${nextAirport.rank} 名 ${nextAirport.name} →
        </a>
      </nav>
    `;

    // 绑定优惠码一键复制事件
    container.querySelectorAll('.coupon-copy-btn').forEach(b => {
      b.onclick = () => copyCode(b.dataset.code, b);
    });

    // 绑定快速切换机场事件 (无刷新 pushState 体验)
    container.querySelectorAll('[data-id]').forEach(link => {
      link.onclick = (e) => {
        // 如果是中键或带 ctrl 点击，允许默认新开标签页行为
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        const nextId = link.dataset.id;
        history.pushState({}, '', `airport.html?id=${nextId}`);
        const nextAirport = window.getAirportProfile(nextId);
        render(nextAirport);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    });
  }

  // 初次渲染
  const initial = getActiveAirport();
  render(initial);

  // 监听浏览器前进后退
  window.addEventListener('popstate', () => {
    render(getActiveAirport());
  });

})();
