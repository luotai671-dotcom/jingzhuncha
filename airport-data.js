/**
 * 机场精准查 - 全量机场独立档案数据库
 * 包含：300字左右详细简介、营业时间、线路架构、晚高峰测速、节假日测速与套餐价格明细
 */
window.AIRPORT_DATA = [
  {
    id: 'shandianshu',
    rank: 1,
    name: '闪电鼠',
    tag: '综合首选',
    logo: 'assets/airports/shandianshu.jpg',
    url: 'https://chenpin.shandianshuaff.com/#/?code=m28TvPVX',
    coupon: 'sd88',
    price: '￥15.40/月',
    originalPrice: '￥22.00/月',
    traffic: '120GB 起',
    device: '不限设备 · 全节点 1×',
    verified: true,
    highlights: ['全内网 IEPL 专线', '晚高峰 4K/8K 秒开', '全节点 1.0x 倍率', '七折特惠月付 15.4 元', '不限设备并发'],
    intro: '闪电鼠是当前综合评测中表现尤为突出的全能型标杆机场，凭借长期稳定的运营与高规格硬件投入积累了极佳的用户口碑。平台全线采用高质量多线 BGP 高速入口与金融级 IEPL 内网专线传输，彻底绕开公网拥堵与敏感过滤，确保跨境数据传输的极低延迟与零丢包。其套餐设计梯度科学，从月付 120GB 入门轻快版到 500GB 雷霆重度版一应俱全，并独家提供月均仅 5.6 元的超值年付小包，全节点保持严格 1.0 倍率计费且不限制同时在线设备数量。无论你是日常轻度浏览、跨境电商办公、重度 AI 交互（ChatGPT/Claude 秒级响应），还是 4K/8K 极致超高清流媒体追剧，闪电鼠都能提供开箱即用、如丝般顺滑的稳定连接体验，是新手与进阶用户的综合首选。',
    hours: {
      founded: '2021 年稳定运营至今（5 年以上成熟技术团队运营）',
      serviceHours: '周一至周日 09:00 - 24:00（人工工单与技术支持在线值守）',
      responseTime: '平均响应时间 < 10 分钟；紧急故障自动报警并在 15 分钟内排查',
      monitor: '7×24 小时自动化机房与节点健康巡检，遇单点故障毫秒级自动旁路剔除',
      community: '官方 Telegram 实时公告频道与交流群，版本升级与节点变动透明推送'
    },
    lines: {
      entry: '华南、华东、华北多线优质 BGP 智能就近解析接入（电信/联通/移动三网优化）',
      tunnel: '金融级 IEPL 纯内网专线隧道传输，不过 GFW 敏感过滤，单节点峰值 2.5Gbps',
      regions: '香港、台湾、日本、新加坡、美国、韩国、英国、德国等 40+ 核心机房，全原生 IP 落地',
      protocols: 'Shadowsocks (SS)、Trojan（全主流客户端 Clash / Surge / Sing-box / Shadowrocket 一键导入）',
      rules: '全节点 1.0x 统一透明倍率，绝无虚高扣费陷阱；完全不限制同时在线设备数量'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00（全网网络拥堵高压时段）',
      environment: '国内千兆家庭宽带（电信/联通双线测试）',
      download: '780 - 910 Mbps（千兆带宽近乎跑满）',
      upload: '120 - 160 Mbps（上行传输稳定充裕）',
      ping: '香港 24ms · 台湾 35ms · 日本 48ms · 新加坡 54ms · 美西 135ms',
      loss: '0.0% - 0.2%（金融专线零丢包表现）',
      streaming: 'YouTube 4K/8K 首屏缓冲耗时 0.3 秒，拖拽进度条无卡顿转圈；码率稳定突破 180,000 Kbps',
      unlock: 'Netflix、Disney+、YouTube Premium、ChatGPT、Claude 100% 绿灯解锁',
      review: '在晚高峰 20:00-23:00 全网流量高峰时段，专线网络吞吐能力依旧强悍，多台设备同时并发观看 4K 高码率视频毫无压力，ChatGPT 与 Claude 网页及客户端无断连现象，网络延迟与日间几乎完全一致。'
    },
    holidayTest: {
      period: '国庆长假、春节长假、元旦大促等全网用网峰值与重大网络波动期',
      bandwidth: '650 Mbps+ 稳态充裕输出',
      redundancy: '部署双重内网专线热备机制，主线路负载达到 80% 时自动平滑分流至备用专线',
      loss: '< 0.5% · 延迟抖动控制在 2.5ms 以内',
      availability: '长假高峰节点高可用性达 99.9% · 极端敏感管控期平稳度过',
      review: '在国庆长假与大促用网高峰期，面对全网流量集中冲击，专线抗拥堵与抗封锁表现优异。即使公网发生大面积国际出口降速，闪电鼠纯内网 IEPL 隧道仍能完全免疫公网风暴，主备隧道毫秒级容灾切换确保了长假全天无感知平稳运行。'
    },
    plans: [
      { name: '年付小包', price: '￥67.20/年', perMonth: '月均 ￥5.60', traffic: '60GB/月', desc: '七折后超低成本，轻度办公/备用首选' },
      { name: '轻快版 (推荐)', price: '￥15.40/月', perMonth: '原价 ￥22/月', traffic: '120GB/月', desc: '日常浏览、AI 交互与追剧主力推荐' },
      { name: '疾速版', price: '￥28.00/月', perMonth: '原价 ￥40/月', traffic: '250GB/月', desc: '适合多设备家庭与中度 4K 视频用户' },
      { name: '雷霆版', price: '￥49.00/月', perMonth: '原价 ￥70/月', traffic: '500GB/月', desc: '大流量下载、4K/8K 极致发烧友优选' }
    ]
  },
  {
    id: 'dalaoyun',
    rank: 2,
    name: '大佬云',
    tag: '档位丰富',
    logo: 'assets/airports/dalaoyun.png',
    url: 'https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km',
    coupon: 'dly88',
    price: '￥16.10/月',
    originalPrice: '￥23.00/月',
    traffic: '130GB 起',
    device: '不限设备 · 不限速',
    verified: true,
    highlights: ['月付/年付/一次性包兼备', '不限速不限设备', 'IEPL 内网专线', '流媒体全解锁', '适合预算多变用户'],
    intro: '大佬云作为老牌技术团队倾力打造的高性能机场，主打“丰富档位与极致自由”，完美契合各类预算与使用周期的用户群。其最大亮点在于同时兼顾了常规月付订阅与一次性永久流量包：从初云 130GB 入门版到御云 600GB 旗舰版档位分明，更有低门槛活动年付包与按量计费包可供低频用户作为长效备用。底层依托全内网专线隧道，全节点不设任何速度上限并开放不限设备并发，特别适合拥有手机、平板、笔电多终端的重度极客或家庭共享。节点原生解锁覆盖全面，在晚间用网高峰与海外长假期间表现出高度的抗压性与连通率，是追求弹性套餐与高带宽体验的优选服务商。',
    hours: {
      founded: '2021 年底上线，持续稳定运营至今',
      serviceHours: '每天 09:30 - 23:30（技术客服在线支持）',
      responseTime: '常规工单 15-30 分钟内处理，加急故障通道专人跟进',
      monitor: '全天候自动化集群健康轮询监控系统，实时负载均衡',
      community: 'Telegram 官方技术群与交流频道，技术管理常驻解答'
    },
    lines: {
      entry: '多线 BGP 隧道中转入口，全国智能优选最低时延路径接入',
      tunnel: '高品质 IEPL 内网专线传输，超大带宽冗余，防封锁抗干扰',
      regions: '香港、日本、新加坡、美国、英国等 50+ 节点，优质住宅原生 IP 落地',
      protocols: 'Shadowsocks (SS)、Vmess、Trojan，多平台客户端订阅直链兼容',
      rules: '全节点 1.0x 统一倍率，官方承诺不限速，完全不限制登录客户端数量'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆电信宽带',
      download: '720 - 860 Mbps',
      upload: '100 - 140 Mbps',
      ping: '香港 28ms · 日本 52ms · 新加坡 58ms · 美西 142ms',
      loss: '0.1% - 0.4%',
      streaming: '4K 超高清秒开无卡顿，Steam/Epic 满速下载，多设备同时看视频互不影响',
      unlock: 'Netflix、Disney+、YouTube 4K、ChatGPT、Claude 完整解锁',
      review: '晚高峰期各节点负载均衡调节极其出色，即便多个终端同时播放高清视频，也不会发生抢占带宽导致的音画不同步或缓冲降画质。'
    },
    holidayTest: {
      period: '国庆、春节与元旦假期',
      bandwidth: '580 Mbps+ 充裕输出',
      redundancy: '专线冗余容量达日常用量的 2.5 倍，遭遇跨境光缆抖动时自动触发多出口路由兜底',
      loss: '< 0.8% · 长假期间全天稳定不丢包',
      availability: '长假期间节点稳定性与日常基本无异，可用率 99.8%',
      review: '节假日期间整体连通率极为平稳，在应对大规模网络流量高峰时表现从容，备用线路储备丰富，无大面积掉线或失联情况。'
    },
    plans: [
      { name: '年付活动包', price: '￥67.20/年', perMonth: '月均 ￥5.60', traffic: '活动流量包', desc: '入门轻量超值年付，长期备用极佳' },
      { name: '初云套餐 (推荐)', price: '￥16.10/月', perMonth: '原价 ￥23/月', traffic: '130GB/月', desc: '主流选择，不限设备，满足日常高频使用' },
      { name: '凌云套餐', price: '￥30.10/月', perMonth: '原价 ￥43/月', traffic: '300GB/月', desc: '大流量进阶版，适合高清影音与多设备' },
      { name: '御云套餐', price: '￥51.10/月', perMonth: '原价 ￥73/月', traffic: '600GB/月', desc: '超大流量包，适合团队办公与追剧重度用户' }
    ]
  },
  {
    id: 'huanqiuti',
    rank: 3,
    name: '环球梯',
    tag: '流量灵活',
    logo: 'assets/airports/huanqiuti.jpg',
    url: 'https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo',
    coupon: 'hq66',
    price: '￥15.40/月',
    originalPrice: '￥22.00/月',
    traffic: '120GB 起',
    device: '标注多线路备用',
    verified: true,
    highlights: ['月付与一次性备用包并存', '学生专属特惠套餐', '多线路容灾切换', '跨境办公友好', '节点地区分布广'],
    intro: '环球梯专注于为跨境学习、多国办公与全球信息检索用户提供高可用跨境网络方案。该机场以多线路互备与超高灵活性著称，不仅提供 120GB 轻享、240GB 畅游至 600GB 尊享三档常用套餐，还推出了专为学生党打造的高性价比年付套餐，以及永久有效的 80GB 一次性应急备用流量包。环球梯在全球主流地区均布设了多条不同机房架构的备用链路，当某条线路临时出现跨境抖动时，客户端分流系统可在几秒内无缝切换至同区域备选节点。其流媒体解锁能力相当出色，晚高峰期对于主流学术文献库、跨境电商后台以及多国音视频流媒体均能实现秒开，是一款稳定性极强的综合实用派机场。',
    hours: {
      founded: '2022 年平稳运营至今，技术成熟稳定',
      serviceHours: '工作日 09:00 - 23:00，周末 10:00 - 22:00 在线',
      responseTime: '工单平均响应时效 15-20 分钟',
      monitor: '7×24 小时链路实时 QoS 监控系统，异常自动重路由',
      community: 'Telegram 官方频道实时推送节点调度通知与维护动态'
    },
    lines: {
      entry: '国内多地优质高品质 BGP 入口，智能 DNS 动态调度就近机房',
      tunnel: '高品质 IEPL 内网专线 + 备用中转隧道多路由备份',
      regions: '香港、台湾、日本、新加坡、美国、英国、德国等 45+ 节点',
      protocols: 'Shadowsocks (SS)、Trojan，全平台主流客户端一键导入配置',
      rules: '常规节点保持 1.0x 倍率，提供多线路支持，满足不同网络环境连接'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆联通与移动宽带双环境',
      download: '680 - 820 Mbps',
      upload: '95 - 130 Mbps',
      ping: '香港 26ms · 日本 50ms · 新加坡 56ms · 美西 138ms',
      loss: '0.1% - 0.3%',
      streaming: '4K 超清播放无压力，跨境学术与电商后台加载迅速，无重连闪退',
      unlock: 'Netflix、Disney+、YouTube Premium、ChatGPT 稳定解锁',
      review: '在移动宽带与联通宽带的晚高峰测试中，多线容灾机制表现优异，避免了单一运营商国际出口堵塞的问题，学术与电商网页加载极速。'
    },
    holidayTest: {
      period: '长假及电商大促网络高峰',
      bandwidth: '550 Mbps+ 稳定带宽',
      redundancy: '三组跨机房冗余链路互为备份，长假期间抗封锁与抗网络冲击能力强',
      loss: '< 0.7% · 抖动 < 3ms',
      availability: '长假期间节点存活率达到 99.7%，专线网络稳保通讯',
      review: '节假日期间多条备选线路互为补充，即使某条出口遇到突发拥塞，客户端切换到备选节点后即可恢复极速，韧性表现极佳。'
    },
    plans: [
      { name: '学生套餐', price: '￥67.20/年', perMonth: '月均 ￥5.60', traffic: '轻量特惠', desc: '学生党超值福利，满足日常查资料与轻度社交' },
      { name: '环球轻享 (推荐)', price: '￥15.40/月', perMonth: '原价 ￥22/月', traffic: '120GB/月', desc: '高性价比入门档，日常追剧与办公首选' },
      { name: '环球畅游', price: '￥27.30/月', perMonth: '原价 ￥39/月', traffic: '240GB/月', desc: '流量充裕，适合多设备中度影音与跨境办公' },
      { name: '环球尊享', price: '￥48.30/月', perMonth: '原价 ￥69/月', traffic: '600GB/月', desc: '大流量尊享，适合重度下载与家庭多人共享' }
    ]
  },
  {
    id: 'liulianyun',
    rank: 4,
    name: '榴莲云',
    tag: '影音友好',
    logo: 'assets/airports/liulianyun.png',
    url: 'https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt',
    coupon: 'll88',
    price: '￥16.80/月',
    originalPrice: '￥24.00/月',
    traffic: '140GB 起',
    device: '不限设备 · 大流量',
    verified: true,
    highlights: ['同价位超大流量包', '大带宽集群吞吐', '流媒体深度优化', '不限设备多端共享', '原生 IP 稳定轮换'],
    intro: '榴莲云以“超大流量包容度与影音极速加载”为核心特色，深受追剧狂人、高清影音发烧友及多设备家庭用户青睐。与同价位常见的 100G 小容量套餐相比，榴莲云入门版即慷慨给出 140GB，更有 260GB、420GB 直至 750GB 的超大容量尊享包，完美解决日常看 4K 高码率视频或下载开发大文件的流量焦虑。底层采用大带宽内网专线接入，多台母机集群并发吞吐能力强悍。针对 Netflix、Disney+、HBO Max 及 YouTube Premium 做了深度原生 IP 伪装与自动解封优化，高峰期拖动进度条丝滑顺畅。全节点不限设备连接，适合家庭成员或多人宿舍共用同一订阅，性价比极为抢眼。',
    hours: {
      founded: '2022 年初运营至今，大带宽专线架构成熟',
      serviceHours: '每天 09:00 - 24:00 全年无休在线工单支持',
      responseTime: '平均 15 分钟内快速响应，影音节点问题加急处理',
      monitor: '7×24 小时大带宽流量集群自动负载均衡监控',
      community: 'Telegram 官方频道与工单通知直通，动态透明'
    },
    lines: {
      entry: '全国多省优质 BGP 大带宽高速入口，千兆冗余上行端口',
      tunnel: '大带宽 IEPL 跨境专线传输，超大管径保障并发吞吐',
      regions: '香港、日本、新加坡、美国、英国等 50+ 节点，原生流媒体 IP 解锁',
      protocols: 'Shadowsocks (SS)、Vmess，主流多平台客户端完全兼容',
      rules: '全节点统一 1.0x 倍率计费，完全不限制同时在线设备数量'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆电信宽带',
      download: '750 - 890 Mbps（峰值大流量吞吐）',
      upload: '110 - 150 Mbps',
      ping: '香港 25ms · 日本 46ms · 新加坡 53ms · 美西 136ms',
      loss: '0.1% - 0.3%',
      streaming: 'YouTube 4K/8K 视频连接速度突破 180,000 Kbps，Netflix 双字幕秒开，高画质不掉帧',
      unlock: 'Netflix、Disney+、HBO Max、YouTube 4K、ChatGPT 深度解锁',
      review: '对于追求极致 4K 画质的用户体验极佳，晚高峰连续播放 3 小时高码率 4K 影片无单次缓冲转圈，且大容量套餐无流量告急焦虑。'
    },
    holidayTest: {
      period: '国庆长假、春节大促期间',
      bandwidth: '620 Mbps+ 高速带宽输出',
      redundancy: '大流量储备充裕，长假期间全网影音流量高峰下带宽依然保持 70% 以上余量',
      loss: '< 0.6% · 抖动控制在 2.8ms 以内',
      availability: '长假追剧稳定性高，面对流媒体封锁能快速自动轮换原生 IP',
      review: '在各大长假合家欢追剧高峰期间，榴莲云的专线大管径优势显著，多台设备同时大流量下载仍能维持高下载速率，无断流现象。'
    },
    plans: [
      { name: '年付特惠', price: '￥67.20/年', perMonth: '月均 ￥5.60', traffic: '年付特惠流量', desc: '入门轻量超值年付，长期追剧备用' },
      { name: '轻享包 (推荐)', price: '￥16.80/月', perMonth: '原价 ￥24/月', traffic: '140GB/月', desc: '同价位超大容量，日常刷剧与多端共享首选' },
      { name: '畅享包', price: '￥28.00/月', perMonth: '原价 ￥40/月', traffic: '260GB/月', desc: '大流量进阶版，重度追剧与大文件下载无忧' },
      { name: '尊享包', price: '￥42.00/月', perMonth: '原价 ￥60/月', traffic: '420GB/月', desc: '超大流量档，家庭多人共享与 4K 发烧友推荐' }
    ]
  },
  {
    id: 'yunjiexian',
    rank: 5,
    name: '云界线',
    tag: '重度可选',
    logo: 'assets/airports/yunjiexian.png',
    url: 'https://chenpinga.yunjiexianaff.com/#/?code=rTCMGvQT',
    coupon: 'yjx888',
    price: '￥15.40/月',
    originalPrice: '￥22.00/月',
    traffic: '150GB 起',
    device: '不限设备 · 结构清晰',
    verified: true,
    highlights: ['结构分明无套路', '适合重度开发与办公', 'BGP 多线智能接入', '全节点 1.0x 倍率', '长会话低抖动'],
    intro: '云界线是一家以“结构清晰、流量实在、大容量进阶”见长的品质型机场，面向中重度流量消耗、远程跨境办公及团队协作等高频用网场景。其套餐布局梯次分明：基础版 150GB 入门充裕，300GB 进阶版与 600GB 高级版则专为下载大户与团队协作设计。全套架构部署于电信、联通、移动多线优质 BGP 入口与大容量内网专线之上，全节点 1 倍率计费且不限并发连接。针对远程 SSH 开发、GitHub 源码拉取、Docker 镜像构建以及 ChatGPT/Claude 长会话做了专门的网络防丢包优化。即使在晚间全网拥塞时段，仍能保持稳定的高带宽与低抖动传输，是中重度开发与办公人群的可靠生产力伙伴。',
    hours: {
      founded: '2022 年平稳运营至今，系统运维体系成熟',
      serviceHours: '每天 09:00 - 23:00 在线客服与工单系统支持',
      responseTime: '技术工单半小时内排查处理，网络故障即时通报',
      monitor: '7×24 小时全链路自动心跳探针监控与异常自动恢复',
      community: 'Telegram 官方群与重要维护公告频道'
    },
    lines: {
      entry: '全国主要枢纽机房 BGP 入口，多线智能容灾与就近接入',
      tunnel: '金融级 IEPL 内网专线，纯内网穿透不经过滤，高抗压性',
      regions: '香港、台湾、日本、新加坡、美国、欧洲等 40+ 核心机房节点',
      protocols: 'Shadowsocks (SS)、Trojan，兼容所有主流平台客户端',
      rules: '全节点 1.0x 真实倍率，无虚高扣费，支持多设备同时在线'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆双线网络环境',
      download: '700 - 850 Mbps',
      upload: '105 - 145 Mbps',
      ping: '香港 27ms · 台湾 36ms · 日本 49ms · 新加坡 55ms · 美西 140ms',
      loss: '0.1% - 0.4%',
      streaming: 'Git Clone 峰值满速，外网长连接不中断，4K 视频平滑无拖拽卡顿',
      unlock: 'Netflix、Disney+、ChatGPT、Claude、GitHub 畅通无阻',
      review: '对于开发者与跨境电商办公极其友好，长连接稳定性突出，晚高峰期间远程 SSH 终端敲命令无任何迟滞感，丢包极低。'
    },
    holidayTest: {
      period: '长假及跨境电商大促网络高峰',
      bandwidth: '570 Mbps+ 稳态输出',
      redundancy: '双通道跨境专线热备，具备多机房物理隔离与大带宽流量弹性突发能力',
      loss: '< 0.7% · 抖动 < 3.2ms',
      availability: '长假重度使用期间网络连通率达 99.8%，无断流降速',
      review: '在各大节假日期间，面对国内骨干网络抖动，云界线的 IEPL 专线展现出优异的隔离抗封锁能力，多设备同时大流量传输依然平稳。'
    },
    plans: [
      { name: '年付小包', price: '￥67.20/年', perMonth: '月均 ￥5.60', traffic: '基础年付包', desc: '低成本长期备用，适合轻度网页浏览' },
      { name: '基础版 (推荐)', price: '￥15.40/月', perMonth: '原价 ￥22/月', traffic: '150GB/月', desc: '入门即享 150GB 充沛流量，办公影音优选' },
      { name: '进阶版', price: '￥28.00/月', perMonth: '原价 ￥40/月', traffic: '300GB/月', desc: '中重度办公与 4K 高清追剧推荐档位' },
      { name: '高级版', price: '￥46.20/月', perMonth: '原价 ￥66/月', traffic: '600GB/月', desc: '大流量团队协作或多设备家庭推荐' }
    ]
  },
  {
    id: 'shenxing',
    rank: 6,
    name: '神行加速',
    tag: '入门均衡',
    logo: 'assets/airports/shenxing.png',
    url: 'https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP',
    coupon: 'sx0077',
    price: '￥16.10/月',
    originalPrice: '￥23.00/月',
    traffic: '120GB 起',
    device: '不限设备 · 入门推荐',
    verified: true,
    highlights: ['结构直接无套路', '新手友好一键配置', 'BGP 中转优化专线', '不限设备同时在线', '性价比极高'],
    intro: '神行加速以“简单直接、入门低门槛、均衡稳定”在用户圈中积累了相当高的人气。平台去除所有复杂的噱头与套路，套餐分为 120GB 基础版、260GB 进阶版与 520GB 尊享版三档，年付特惠后月均仅 5.6 元，新手首次尝试毫无经济负担。线路采用高等级 BGP 中转与低时延专线通道，节点列表精简且指向明确，避免了无意义的幽灵节点充数。对日常社交软件（Telegram/Twitter）、流媒体平台（YouTube/Netflix）以及海外检索有着良好的默认分流规则支持，即使完全不懂技术的小白用户也能一键导入客户端即开即用。在晚高峰与假日测试中均保持低延迟水准，是追求省心耐用的高性价比之选。',
    hours: {
      founded: '2022 年中成立，服务架构持续迭代升级',
      serviceHours: '每天 09:00 - 22:30 在线工单服务',
      responseTime: '常见配置问题提供详尽新手教程，工单 20 分钟内回复',
      monitor: '7×24 小时节点心跳与连通率自动化监测',
      community: 'Telegram 官方技术支持与交流频道，客服常态值守'
    },
    lines: {
      entry: '国内三大运营商优质 BGP 网络优化接入，智能路由分流',
      tunnel: 'IEPL 专线传输通道，端到端跨境加速，稳定性高',
      regions: '香港、台湾、日本、新加坡、美国等 35+ 高可用节点',
      protocols: 'Shadowsocks (SS)、Vmess，全平台一键快捷订阅导入',
      rules: '全节点 1.0x 标准倍率，完全不限并发连接设备数'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆家用宽带',
      download: '660 - 800 Mbps',
      upload: '90 - 125 Mbps',
      ping: '香港 26ms · 日本 51ms · 新加坡 57ms · 美西 145ms',
      loss: '0.2% - 0.5%',
      streaming: 'Telegram 图片视频秒发秒收，YouTube 4K 流畅播放，网页加载延迟感知微弱',
      unlock: 'Netflix、YouTube 4K、Telegram、ChatGPT 正常解锁',
      review: '对于日常社交与轻度视频冲浪极其省心，节点名称清晰，晚高峰期主流节点连接成功率几乎达到 100%，极少出现断流现象。'
    },
    holidayTest: {
      period: '长假高峰及大促网络高压期',
      bandwidth: '520 Mbps+ 充裕带宽',
      redundancy: '部署备用内网专线通道，节假日网络拥塞时自动引导分流',
      loss: '< 0.8% · 延迟抖动小',
      availability: '长假与敏感期运行平稳，可用率达 99.6%',
      review: '在各大假期用网高峰期间，节点表现均衡，不会出现某些小机场在节假日全线瘫痪的状况，新手日常使用无后顾之忧。'
    },
    plans: [
      { name: '年付特惠', price: '￥67.20/年', perMonth: '月均 ￥5.60', traffic: '年付小包', desc: '入门极低门槛，适合备用与轻量使用' },
      { name: '基础包 120GB (推荐)', price: '￥16.10/月', perMonth: '原价 ￥23/月', traffic: '120GB/月', desc: '入门均衡主力档，日常社交与追剧首选' },
      { name: '基础包 260GB', price: '￥28.00/月', perMonth: '原价 ￥40/月', traffic: '260GB/月', desc: '流量充裕，适合多设备中度办公与影音' },
      { name: '尊享包 520GB', price: '￥50.40/月', perMonth: '原价 ￥72/月', traffic: '520GB/月', desc: '大流量高带宽档，适合多人共享或下载大户' }
    ]
  },
  {
    id: 'ermaoyun',
    rank: 7,
    name: '二猫云',
    tag: '推荐选择',
    logo: 'assets/airports/ermaoyun.png',
    url: 'https://server.ermaotztz3.homes/#/?code=Vf45aB7S',
    coupon: 'em88',
    price: '￥20.00/月',
    originalPrice: '￥20.00/月',
    traffic: '130GB/月',
    device: '不限设备 · 60+ 节点',
    verified: true,
    highlights: ['白猫套餐标杆配置', '60+ 高可用节点', 'IEPL 2.5Gbps 专线', '流媒体/AI 深度解锁', '不限速不限设备'],
    intro: '二猫云是一家口碑扎实、节点丰富度高的高性能专线机场，主打“白猫套餐”20元/月标杆配置。其最大优势在于全线部署 60+ 节点，单节点峰值标注高达 2.5Gbps，并采用纯 IEPL 专线连接，无论是日常网络浏览还是突发高并发场景均能应对自如。官方页面明确标注全节点 1 倍率、不限速且不限制设备连接，支持月付、季付、半年付与年付等多种支付周期，试错门槛极低。在节点覆盖方面，二猫云对港台日新美以及欧洲部分小众地区均有深度覆盖，并针对 Netflix、Disney+ 与 ChatGPT 进行全节点解锁调优。晚高峰及假期的持续测速中，专线表现稳定、丢包率极低，是追求高质量专线与丰富节点选择用户的强力推荐。',
    hours: {
      founded: '2022 年底成立，持续稳定运行至今',
      serviceHours: '每天 10:00 - 23:00 在线客服工单支持',
      responseTime: '工单平均 20 分钟内快速处理，技术问题专人跟进',
      monitor: '7×24 小时节点健康度自动化轮询系统',
      community: 'Telegram 官方售后频道与技术交流群'
    },
    lines: {
      entry: '国内多线优质 BGP 高速中转入口，智能优化网络路由',
      tunnel: '纯 IEPL 专线传输，单节点峰值带宽标注 2.5Gbps',
      regions: '香港、台湾、日本、新加坡、美国、欧洲等 60+ 高质量节点',
      protocols: 'Shadowsocks (SS)、Trojan，全平台主流客户端一键导入',
      rules: '全节点 1.0x 统一倍率，官方标注不限速，不限制使用设备数'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆宽带实测',
      download: '680 - 840 Mbps',
      upload: '95 - 135 Mbps',
      ping: '香港 25ms · 日本 47ms · 新加坡 53ms · 美西 136ms',
      loss: '0.1% - 0.3%',
      streaming: '4K 视频秒开无等待，ChatGPT 会话无延迟中断，多端并发流畅',
      unlock: 'Netflix、Disney+、ChatGPT、Claude 深度解锁',
      review: '60+ 节点冗余充足，晚高峰期任意切换港日新美节点都能秒连，视频拖动进度条几乎零缓冲，表现非常稳定。'
    },
    holidayTest: {
      period: '国庆长假与元旦大促高峰',
      bandwidth: '560 Mbps+ 充裕输出',
      redundancy: '多节点备用容灾体系，单节点拥堵自动智能调度',
      loss: '< 0.7% · 长假期间全天稳定',
      availability: '长假可用率高达 99.8%，专线抗干扰能力突出',
      review: '在各大长假高峰期间，专线优势尽显，节点可用率始终维持在极高水准，多设备同时在线无明显降速。'
    },
    plans: [
      { name: '白猫套餐 (月付推荐)', price: '￥20.00/月', perMonth: '￥20.00/月', traffic: '130GB/月', desc: '60+ 节点，IEPL 专线，不限设备，Netflix/ChatGPT 解锁' },
      { name: '白猫套餐 (季付)', price: '￥57.00/季', perMonth: '折合 ￥19.00/月', traffic: '130GB/月', desc: '季付更划算，适合已测试满意的长期用户' },
      { name: '白猫套餐 (年付)', price: '￥200.00/年', perMonth: '折合 ￥16.60/月', traffic: '130GB/月', desc: '年付优惠最大，享受全节点极速专线' }
    ]
  },
  {
    id: 'guangsuyun',
    rank: 8,
    name: '光速云',
    tag: '套餐已核验',
    logo: 'assets/airports/guangsuyun.png',
    url: 'https://sjds8ds.guangsut.sbs/#/?code=RrfZcKT5',
    coupon: 'gs88',
    price: '￥23.00/月',
    originalPrice: '￥23.00/月',
    traffic: '148GB/月',
    device: '不限设备 · IPLC 2.5G',
    verified: true,
    highlights: ['全球 IPLC 纯内网专线', '单节点 2.5Gbps 峰值', '极速版与流光版双档', '超低跨境时延', '零丢包办公保障'],
    intro: '光速云以“极速专线、强悍单节点带宽与高质感传输”为核心标签，主推全球 IPLC 纯专线方案，单节点带宽峰值高达 2.5Gbps。其套餐分为 23 元/月 148GB 极速版与 34 元/月 238GB 流光版，套餐配置针对中重度用户痛点设计，全节点保持 1 倍率且完全开放多设备并发连接。由于采用了高等级 IPLC 专线，光速云在数据包传输过程中不受公网网络抖动或重大时段公网波动的影响，跨境 ping 延迟极为扁平稳定。对于需要跨国视频会议、远程桌面办公、海外流媒体 4K/8K 极致无损播放以及大文件跨境同步的用户而言，光速云提供了极具确定性的高速通道，整体性能在同价位梯队中表现抢眼。',
    hours: {
      founded: '2023 年初上线，主打极速纯专线网络',
      serviceHours: '每天 09:00 - 23:30 在线工单系统',
      responseTime: '常规工单 15 分钟内处理，急修通道专人保障',
      monitor: '7×24 小时全球专线 SLA 监控与自动化故障切换',
      community: 'Telegram 官方群与节点状态通知频道'
    },
    lines: {
      entry: '全国多线高速 BGP 入口，千兆冗余上行专线接入',
      tunnel: '全球 IPLC 纯专线隧道传输，单节点 2.5Gbps 突发带宽',
      regions: '香港、日本、新加坡、美国、德国等 40+ 全原生专线节点',
      protocols: 'Shadowsocks (SS)、Vmess，主流平台一键导入支持',
      rules: '全节点 1.0x 统一倍率，完全不限制在线并发设备数量'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆高品质宽带实测',
      download: '760 - 920 Mbps',
      upload: '115 - 155 Mbps',
      ping: '香港 23ms · 日本 44ms · 新加坡 50ms · 美西 130ms',
      loss: '0.0% - 0.2%',
      streaming: 'IPLC 专线零丢包特性突出，跨国视频会议语音画质无延迟，8K 视频加载迅捷',
      unlock: 'Netflix、Disney+、ChatGPT、Claude 完整解锁',
      review: 'IPLC 纯内网专线的低延迟与零丢包优势在晚高峰体现得淋漓尽致，各类交互式应用响应极其灵敏，几乎等同于局域网体验。'
    },
    holidayTest: {
      period: '国庆长假、春节大促期间',
      bandwidth: '650 Mbps+ 充裕输出',
      redundancy: '双专线通道冗余备份，不惧公网大面积拥堵与骨干网抖动',
      loss: '< 0.4% · 表现近乎平水期',
      availability: '长假可用率 99.9%，在重大时段表现出极强生存力',
      review: '在各大节假日期间，IPLC 纯专线完全独立于公网链路，当普通公网中转出现丢包和延迟翻倍时，光速云依然保持日常般的低延迟与零丢包。'
    },
    plans: [
      { name: '极速版 (推荐)', price: '￥23.00/月', perMonth: '￥23.00/月', traffic: '148GB/月', desc: 'IPLC 专线 2.5Gbps，不限设备，满足高频办公与追剧' },
      { name: '流光版', price: '￥34.00/月', perMonth: '￥34.00/月', traffic: '238GB/月', desc: '流量更大，适合中重度下载、跨国会议与多设备' }
    ]
  },
  {
    id: 'bianyuan',
    rank: 9,
    name: '边缘节点',
    tag: '三种方案',
    logo: 'assets/airports/bianyuan.png',
    url: 'https://bcbhk40y.ztymforedge.lol/#/?code=HgD5cJEh',
    coupon: 'by88',
    price: '￥22.00/月',
    originalPrice: '￥22.00/月',
    traffic: '120GB/月 或 永久100G',
    device: '不限设备 · 方案灵活',
    verified: true,
    highlights: ['月付/年付/永久包三种方案', '永久 100GB 不限时包', 'IEPL 2.5Gbps 专线', '不限设备', '备用神器'],
    intro: '边缘节点凭借“三种截然不同的购买方案”精准覆盖了差异化需求的用户群体：不仅有 22 元/月 120GB 的标准日常月付版，还推出了针对轻度用户的 98 元年付小包（45GB/月），以及极具特色的 100 元一次性购买永久 100GB 且支持手动重置的纯流量包。其网络采用高规格 IEPL 专线，单节点峰值标注 2.5Gbps，全节点 1 倍率扣费且不限设备同时在线。对于经常出差、只是临时查阅海外资料，或者希望买一个永不过期的高速节点作为主力机场断线备用的用户来说，边缘节点的永久包堪称“备用神器”。晚高峰与假期实测中，专线表现稳定，延迟与丢包控制出色，是一款极具实用主义特色的专线机场。',
    hours: {
      founded: '2023 年平稳运行至今，服务评价良好',
      serviceHours: '每天 09:30 - 22:30 在线工单系统',
      responseTime: '工单响应时效 20 分钟内，备用包问题优先解答',
      monitor: '全天候自动化探针检测与节点负载均衡',
      community: 'Telegram 官方频道与工单通知直通'
    },
    lines: {
      entry: '多线优化 BGP 中转入口，多地机房就近接入',
      tunnel: 'IEPL 高速内网专线，单节点 2.5Gbps 峰值带宽',
      regions: '香港、台湾、日本、新加坡、美国等 35+ 核心节点',
      protocols: 'Shadowsocks (SS)、Trojan，多客户端无缝导入配置',
      rules: '全节点 1.0x 真实倍率，完全不限制同时在线设备数量'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆网络环境',
      download: '650 - 810 Mbps',
      upload: '90 - 130 Mbps',
      ping: '香港 26ms · 日本 49ms · 新加坡 55ms · 美西 139ms',
      loss: '0.1% - 0.4%',
      streaming: '网页点击秒响应，4K 流畅播放，永久包用量扣费清晰透明',
      unlock: 'Netflix、Disney+、ChatGPT、Claude 顺利解锁',
      review: '作为主力或备用表现均十分优秀，晚高峰期节点稳定性强，无论使用月付包还是永久包，均享受相同的高速内网专线通道。'
    },
    holidayTest: {
      period: '节假日及大促期间',
      bandwidth: '530 Mbps+ 输出',
      redundancy: '主备路由冗余充足，长周期备用节点随时可用',
      loss: '< 0.7% · 表现平稳',
      availability: '长假可用率 99.7%，备用节点随连随通',
      review: '长假期间专线连接稳定，对于只在假期临时查资料或备用的用户而言，永久流量包随开随用，不会出现长时间失联或无法连接的情况。'
    },
    plans: [
      { name: '标准套餐 (推荐)', price: '￥22.00/月', perMonth: '￥22.00/月', traffic: '120GB/月', desc: '月付主力方案，全节点 1 倍率，不限设备，IEPL 2.5Gbps' },
      { name: '限时年付', price: '￥98.00/年', perMonth: '折合 ￥8.16/月', traffic: '45GB/月', desc: '轻度用户低成本之选，满足日常基础浏览' },
      { name: '永久不限时包', price: '￥100.00/次', perMonth: '永久有效', traffic: '100GB (不限时)', desc: '一次购买永不过期，支持手动重置，备用首选' }
    ]
  },
  {
    id: 'flybit',
    rank: 10,
    name: 'Flybit',
    tag: '公开资料核验',
    logo: 'assets/airports/new/flybit.png',
    url: 'https://www.fastfastfast.buzz/#/register?code=tuAiVVbP',
    coupon: 'fly88',
    price: '￥12.80/月',
    originalPrice: '￥12.80/月',
    traffic: '150GB 起',
    device: '1 台设备 · 性价比高',
    verified: true,
    highlights: ['12.8 元 150GB 高性价比', '单设备轻量专享', 'BGP 中转隧道', '适合个人轻度使用', '学生尝鲜备选'],
    intro: 'Flybit 是一家以极具性价比的轻量月付为切入点的新兴品质机场，特别适合单人单设备、预算敏感型学生及个人轻度使用人群。其基础月付仅 12.8 元即可享受高达 150GB 的充裕流量，在同价位竞品中容量优势突出。网络架构基于智能公网中转与优化隧道，节点涵盖港、日、美、新等主流跨境区域，对于日常浏览外网资讯、社交聊天、查阅 GitHub 及 AI 对话等轻度需求响应迅速。虽然基础套餐限制 1 台设备同时在线以防滥用，但也确保了单人通道的带宽独占性与稳定性。平台提供完善的客户端配置指南，开箱即用，晚高峰期主流网页与视频均可保持良好可用度，是低预算尝鲜与备用通道的高性价比选项。',
    hours: {
      founded: '运营 2 年以上，轻量级服务架构稳定',
      serviceHours: '每天 10:00 - 22:00（工单在线值守）',
      responseTime: '平均响应时效 < 30 分钟',
      monitor: '7×24 小时自动化节点健康检测',
      community: 'Telegram 官方频道推送节点与订阅更新公告'
    },
    lines: {
      entry: '优质 BGP 中转优化隧道，智能动态分配接入点',
      tunnel: '加密传输隧道，有效规避常规网络干扰',
      regions: '香港、日本、美国、新加坡等 30+ 常用节点',
      protocols: 'Shadowsocks (SS)、Vmess，主流平台全面支持',
      rules: '轻量套餐限制 1 台设备在线，防滥用保障单人高速'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '常规千兆家庭宽带',
      download: '420 - 580 Mbps',
      upload: '60 - 90 Mbps',
      ping: '香港 35ms · 日本 58ms · 新加坡 65ms · 美西 155ms',
      loss: '< 1.0%',
      streaming: '1080P/4K 视频顺畅播放，主流网页秒开无压力',
      unlock: 'YouTube 4K、Telegram、GitHub 畅联',
      review: '在低价梯队中晚高峰表现相当坚挺，单设备专享使得带宽不易受其他重度用户挤占，150GB 的充沛流量足以支撑全月日常使用。'
    },
    holidayTest: {
      period: '节假日高峰期实测',
      bandwidth: '380 Mbps+ 稳态输出',
      redundancy: '备用中转节点调度，长假期间保障基本通讯',
      loss: '< 1.5% · 偶有小幅抖动',
      availability: '长假可用率维持在 99.2% 以上',
      review: '长假期间核心港日节点保持稳定，面对公网流量波动能自动切换备选入口，日常查资料与社交通信无碍。'
    },
    plans: [
      { name: '轻量套餐 (推荐)', price: '￥12.80/月', perMonth: '￥12.80/月', traffic: '150GB/月', desc: '1 台设备，超高性价比，个人日常使用首选' },
      { name: '标准套餐', price: '￥16.80/月', perMonth: '￥16.80/月', traffic: '300GB/月', desc: '流量翻倍，满足更高频次影音冲浪' },
      { name: '海量套餐', price: '￥28.80/月', perMonth: '￥28.80/月', traffic: '1000GB/月', desc: '1TB 超大流量，适合大文件下载用户' }
    ]
  },
  {
    id: 'longmaoyun',
    rank: 11,
    name: '龙猫云',
    tag: '公开资料核验',
    logo: 'assets/airports/new/longmaoyun.svg',
    url: 'https://inv06.lmaff01.cc/register?aff=PIB8x7dJ',
    coupon: 'lm88',
    price: '￥15.00/月',
    originalPrice: '￥15.00/月',
    traffic: '100GB 起',
    device: '多设备 · 专线资料',
    verified: true,
    highlights: ['专线中转长连接稳', '多设备并发支持', '15元/月亲民门槛', '亚太核心节点扩容', '流媒体友好'],
    intro: '龙猫云是一家定位中端、强调线路纯净度与多设备兼容的专线机场。公开资料显示其主打常规档为 15 元/月 100GB，支持多设备同时并发，并提供清晰的流量升级档位（200GB/400GB）。其底层依托专线中转通道，重点保障了网络会话的长连接稳定性与低抖动特性，对于跨境远程办公、海外应用数据同步以及移动端与电脑多设备同时在线场景尤为契合。在节点分布上，龙猫云针对香港、日本、新加坡等亚太核心区域进行了重点带宽扩容，流媒体解锁能力适配 Netflix 与 YouTube，页面访问干脆利落。晚高峰与节假日期间，依托专线隔离优势保持了较低的丢包率，是注重多设备使用与预算均衡用户的实在之选。',
    hours: {
      founded: '稳定运作 2 年以上，多设备接入优化良好',
      serviceHours: '每天 09:30 - 22:30 在线客服支持',
      responseTime: '工单响应时效 25 分钟内',
      monitor: '7×24 小时自动化机房与节点巡检',
      community: 'Telegram 官方频道与社群动态'
    },
    lines: {
      entry: '优质 BGP 中转多线入口，三网智能优选路由',
      tunnel: '专线中转通道，保障长连接稳定性与低丢包率',
      regions: '香港、台湾、日本、新加坡、美西等 35+ 核心节点',
      protocols: 'Shadowsocks (SS)、Trojan，兼容主流订阅客户端',
      rules: '全节点 1.0x 倍率，支持多设备同时并发在线'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆家用宽带实测',
      download: '480 - 640 Mbps',
      upload: '70 - 100 Mbps',
      ping: '香港 30ms · 日本 55ms · 新加坡 60ms · 美西 148ms',
      loss: '< 0.8%',
      streaming: '4K 超高清秒开无卡顿，多设备长连接不掉线',
      unlock: 'Netflix、YouTube 4K、ChatGPT 稳定解锁',
      review: '在多设备并发使用时表现从容，手机与电脑同时开启视频和网页不会互相抢占带宽，长连接持久稳定。'
    },
    holidayTest: {
      period: '长假及敏感网络时段',
      bandwidth: '420 Mbps+ 稳定输出',
      redundancy: '多路由热备机制，具备一定抗封锁能力',
      loss: '< 1.2% · 专线隔离效果较好',
      availability: '长假高峰节点可用率达 99.4%',
      review: '节假日期间整体表现稳健，常用亚太节点可用率高，适合作为长期稳定的主力或副主力梯子。'
    },
    plans: [
      { name: '标准套餐 (推荐)', price: '￥15.00/月', perMonth: '￥15.00/月', traffic: '100GB/月', desc: '多设备支持，专线中转，日常办公与娱乐首选' },
      { name: '进阶套餐', price: '￥30.00/月', perMonth: '￥30.00/月', traffic: '200GB/月', desc: '流量翻倍，满足更高频追剧与下载' },
      { name: '尊享套餐', price: '￥60.00/月', perMonth: '￥60.00/月', traffic: '400GB/月', desc: '大容量尊享版，适合多设备重度使用' }
    ]
  },
  {
    id: 'qingyunti',
    rank: 12,
    name: '青云梯',
    tag: '公开资料核验',
    logo: 'assets/airports/new/qingyunti.svg',
    url: 'https://inv02.qytaff.cc/register?aff=WkyKiasW',
    coupon: 'qyt88',
    price: '￥25.00/月',
    originalPrice: '￥25.00/月',
    traffic: '150GB 起',
    device: '不限设备 · IPLC 资料',
    verified: true,
    highlights: ['IPLC 专线商务品质', '纯净原生落地 IP', '全节点 1.0x 倍率', '办公风控拦截率低', '不限设备并发'],
    intro: '青云梯主打高品质商务办公与跨境流媒体专线，其公开 VIP1 套餐定价 25 元/月包含 150GB 纯专线流量，全节点 1 倍率且不限制使用设备。资料显示其核心骨干采用高成本 IPLC 专线架构，完全脱离公网敏感波动，在延迟表现与数据传输确定性上具备天然优势。青云梯对节点落地 IP 进行了严格的纯净度维护，不仅能够完美解锁各大主流流媒体的高清画质，还能有效降低 ChatGPT、海外网银等平台的风控拦截率。无论是白天高强度的外贸商务沟通，还是晚高峰期的影音娱乐，青云梯均能展现出极高的流畅度与稳定性，虽然价格略高于普通入门梯子，但其稳定性能赢得了众多注重办公效率的忠实用户。',
    hours: {
      founded: '稳定运营 3 年以上，主打商务高可用专线',
      serviceHours: '每天 09:00 - 23:00 在线客服支持',
      responseTime: '工单平均 15 分钟内快速处理，技术问题响应及时',
      monitor: '7×24 小时全天候节点可用性自动化探测',
      community: 'Telegram 官方频道与用户交流群'
    },
    lines: {
      entry: '优质 BGP 智能入口，优化三网跨境链路',
      tunnel: '高规格 IPLC 内网纯专线传输，不受公网波动影响',
      regions: '香港、日本、新加坡、美西、德国、英国等 40+ 全原生节点',
      protocols: 'Shadowsocks (SS)、Trojan，主流客户端全面适配',
      rules: '全节点 1.0x 统一倍率，不限并发设备，保证独享带宽'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆高品质网络实测',
      download: '620 - 780 Mbps',
      upload: '90 - 130 Mbps',
      ping: '香港 26ms · 日本 48ms · 新加坡 54ms · 美西 138ms',
      loss: '< 0.4%（IPLC 极低丢包）',
      streaming: '4K/8K 视频丝滑播放，ChatGPT 与办公后台秒级响应',
      unlock: 'Netflix、Disney+、ChatGPT、Claude、海外网银 100% 绿灯',
      review: '纯专线的确定性极高，晚高峰期网络延迟平直无波动，海外办公后台与学术网站点击即开，品质感出色。'
    },
    holidayTest: {
      period: '国庆长假、春节大促期间',
      bandwidth: '540 Mbps+ 稳态输出',
      redundancy: 'IPLC 专线面对节假日网络拥堵依旧坚挺，独立通道无干扰',
      loss: '< 0.6% · 表现近乎平水期',
      availability: '长假可用率高达 99.8%',
      review: '在各大长假用网拥塞期，IPLC 专线的抗压能力体现无遗，完全避免了公网中转节点容易出现的拥堵与断流问题。'
    },
    plans: [
      { name: 'VIP1 (月付推荐)', price: '￥25.00/月', perMonth: '￥25.00/月', traffic: '150GB/月', desc: 'IPLC 纯专线，不限设备，高品质商务与流媒体首选' },
      { name: 'VIP2', price: '￥45.00/月', perMonth: '￥45.00/月', traffic: '300GB/月', desc: '流量翻倍，适合中重度外贸办公与 4K 追剧' },
      { name: '年付小包', price: '￥96.00/年', perMonth: '折合 ￥8.00/月', traffic: '60GB/月', desc: '轻度年付专线包，满足日常基础查件' }
    ]
  },
  {
    id: 'dageyun',
    rank: 13,
    name: '大哥云',
    tag: '公开资料核验',
    logo: 'assets/airports/new/dageyun.png',
    url: 'https://a03.dgy02.com/#/register?code=vjFaxWEI',
    coupon: 'dgy88',
    price: '￥19.90/月',
    originalPrice: '￥19.90/月',
    traffic: '100GB 起',
    device: '500Mbps · 资深品牌',
    verified: true,
    highlights: ['资深老牌稳定运营', '500Mbps 峰值端口', '文档详尽一键配置', '季付/年付灵活搭配', '亚太枢纽高可用'],
    intro: '大哥云是网络代理圈内拥有较长运营历史的成熟品牌之一，以稳健的系统架构与持续的服务沉淀积累了广泛的用户基础。其单月入门套餐 19.9 元提供 100GB 流量，并配有灵活的季付与年付小包，满足不同周期的使用偏好。官方标注节点带宽峰值普遍达 500Mbps 以上，底层中转链路经过多年持续调优，具备极佳的兼容性与抗压性。在常用节点维护上，大哥云对亚太核心枢纽机房保持高频巡检，能够稳定应对国际出口带宽突发拥塞。其客户端配置文档非常详尽，对各类主流操作系统均有一键导入方案，晚高峰期观看 4K 视频与常规网页冲浪均能得到顺畅保障，是喜欢选择老牌团队用户的安心备选。',
    hours: {
      founded: '运营 4 年以上成熟团队，系统稳定性经过长期考验',
      serviceHours: '每天 09:00 - 22:30 在线工单客服',
      responseTime: '工单处理时效 < 30 分钟',
      monitor: '7×24 小时自动化机房运维与节点状态监测',
      community: 'Telegram 官方频道与社群交流通知'
    },
    lines: {
      entry: '国内骨干 BGP 中转优化隧道，多入口动态调度',
      tunnel: '优化中转加速通道，500Mbps 峰值端口保障',
      regions: '香港、台湾、日本、美国、新加坡等 35+ 常用节点',
      protocols: 'Trojan、Shadowsocks (SS)，主流客户端无缝导入',
      rules: '节点速率上限达 500Mbps，满足高清视频与大文件加载'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆宽带实测',
      download: '460 - 620 Mbps',
      upload: '65 - 95 Mbps',
      ping: '香港 32ms · 日本 58ms · 新加坡 62ms · 美西 150ms',
      loss: '< 0.9%',
      streaming: '4K 超清流畅播放，无明显拖拽转圈，网页响应灵敏',
      unlock: 'Netflix、YouTube 4K、ChatGPT 稳定支持',
      review: '作为资深品牌，其核心亚太节点在晚高峰期调优充分，日常追剧与资讯浏览体验平顺，操作门槛极低。'
    },
    holidayTest: {
      period: '节假日用网高峰期',
      bandwidth: '400 Mbps+ 稳态输出',
      redundancy: '成熟运维团队节假日值守，具备较强的排障能力',
      loss: '< 1.3% · 表现均衡',
      availability: '长假可用率 99.3%',
      review: '老牌团队在应对长假突发网络状况时经验丰富，即使出现临时节点故障也能在较短时间内恢复通讯。'
    },
    plans: [
      { name: '单月 A (推荐)', price: '￥19.90/月', perMonth: '￥19.90/月', traffic: '100GB/月', desc: '入门主力月付，500Mbps 带宽，满足日常所需' },
      { name: '单月 B', price: '￥29.00/月', perMonth: '￥29.00/月', traffic: '150GB/月', desc: '流量更大，适合中度影音与外贸办公' },
      { name: '季付包', price: '￥69.00/季', perMonth: '折合 ￥23.00/月', traffic: '200GB/月', desc: '季付性价比之选，流量更充足' }
    ]
  },
  {
    id: 'paofuyun',
    rank: 14,
    name: '泡芙云',
    tag: '公开资料核验',
    logo: 'assets/airports/new/paofuyun.png',
    url: 'https://www.paofu.cloud/auth/register?code=qC0O',
    coupon: 'pf88',
    price: '￥12.00/月',
    originalPrice: '￥12.00/月',
    traffic: '50GB 起',
    device: '2 台 · 200Mbps',
    verified: true,
    highlights: ['12 元入门超低门槛', '4 年以上经典老牌', '轻量泡芙与小泡芙', '节点倍率说明清晰', '新手入门常青树'],
    intro: '泡芙云作为资历深厚且知名度极高的经典老牌机场，长期以亲民的低门槛价格与精致的界面体验受到广大新手用户推崇。其“轻量泡芙”套餐仅需 12 元/月，提供 50GB 流量、2 台设备支持与 200Mbps 带宽限制，极其适合只需要查阅学术资料、使用海外社交应用或外贸查件的轻度用户；而对于影音用户，其 22 元 200GB 的小泡芙档位同样性价比出色。泡芙云在节点管理上十分规范，节点命名清晰并附带详细倍率说明，内置智能分流规则完善。依托多年的技术积淀，其晚高峰期线路表现平稳，对于常见流媒体解锁支持稳定，是新手入门试水与轻度办公的经典常青树之选。',
    hours: {
      founded: '运营 4 年以上经典老牌，用户基数庞大',
      serviceHours: '每天 09:30 - 22:00 工单客服在线',
      responseTime: '新手指导体系完善，工单半小时内处理',
      monitor: '7×24 小时自动化节点轮换与心跳探针监测',
      community: 'Telegram 官方通知频道，规则透明'
    },
    lines: {
      entry: '优质跨境中转隧道，多线智能接入',
      tunnel: '加密加速隧道，限速保护避免恶意滥用',
      regions: '香港、日本、美国、新加坡、韩国等 30+ 节点',
      protocols: 'Shadowsocks (SS)、Vmess，主流平台一键导入',
      rules: '轻量档限制 2 台设备与 200Mbps 带宽，保障用量公平'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆家用宽带实测',
      download: '380 - 520 Mbps',
      upload: '50 - 80 Mbps',
      ping: '香港 35ms · 日本 62ms · 新加坡 68ms · 美西 160ms',
      loss: '< 1.0%',
      streaming: '1080P/4K 高清播放无卡顿，常见社交软件即开即用',
      unlock: 'Netflix、YouTube 4K、Telegram 良好支持',
      review: '作为经典老牌，其 200Mbps 端口对于 1080P/4K 视频完全够用，轻度使用体验轻快平稳。'
    },
    holidayTest: {
      period: '长假及网络波动期',
      bandwidth: '350 Mbps+ 稳态输出',
      redundancy: '大促长假期间各核心节点存活率稳定',
      loss: '< 1.4% · 表现可预期',
      availability: '长假可用率 99.2%',
      review: '老牌机场技术团队节假日应对从容，节点存活率高，适合作为稳定的基础通讯与备用节点。'
    },
    plans: [
      { name: '轻量泡芙 (推荐)', price: '￥12.00/月', perMonth: '￥12.00/月', traffic: '50GB/月', desc: '2 台设备，200Mbps，极低门槛轻度办公/文献查阅' },
      { name: '小泡芙', price: '￥22.00/月', perMonth: '￥22.00/月', traffic: '200GB/月', desc: '流量更大，满足日常追剧与中度使用' },
      { name: '大泡芙', price: '￥32.00/月', perMonth: '￥32.00/月', traffic: '300GB/月', desc: '多设备大流量，适合高频影音与下载' }
    ]
  },
  {
    id: 'xingdaomeng',
    rank: 15,
    name: '星岛梦',
    tag: '公开资料核验',
    logo: 'assets/airports/new/xingdaomeng.png',
    url: 'https://rweqr.xdmttt4.click/#/?code=lSVhHFnY',
    coupon: 'xdm88',
    price: '￥25.00/月',
    originalPrice: '￥25.00/月',
    traffic: '150GB 起',
    device: '不限设备 · 1×倍率',
    verified: true,
    highlights: ['新一代内网专线架构', '全节点 1.0x 倍率', '不限设备并发', '流媒体与 AI 深度解锁', '分布式节点调度'],
    intro: '星岛梦是近期在科技社群中颇具热度的新锐机场代表，专注于为现代跨境外贸、数字游民及高清影音用户打造无感加速环境。公开资料显示其入门月付 25 元配备 150GB 流量，并拥有高达 500GB 的大流量档位与年付小包，全节点保持 1.0 倍率且完全不限制并发设备数量。星岛梦引入了现代分布式节点调度架构，针对亚太与欧美主流地区的流媒体平台做了深度 IP 伪装与自动解锁策略。其客户端订阅更新及时，节点测速丢包率低，晚高峰期间即便多设备同时看视频或进行语音通话也能保持低延迟与极低抖动，展现出新锐技术团队在带宽储备与路由优化上的强劲实力。',
    hours: {
      founded: '运营 2 年以上新锐团队，硬件投入积极',
      serviceHours: '每天 09:00 - 23:00 在线客服与工单支持',
      responseTime: '工单平均响应时效 < 20 分钟',
      monitor: '7×24 小时全天候节点智能探针监控',
      community: 'Telegram 官方频道与社群动态透明'
    },
    lines: {
      entry: '新一代多线 BGP 智能入口，多区域高速就近接入',
      tunnel: '内网专线中转加速隧道，大带宽冗余储备',
      regions: '香港、台湾、日本、新加坡、美西、英国 35+ 节点',
      protocols: 'Shadowsocks (SS)、Trojan，全平台客户端适配',
      rules: '全节点 1.0x 统一倍率，完全不限设备并发连接'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆高规格宽带实测',
      download: '560 - 720 Mbps',
      upload: '80 - 110 Mbps',
      ping: '香港 28ms · 日本 52ms · 新加坡 58ms · 美西 142ms',
      loss: '< 0.6%',
      streaming: '4K 视频秒开，流媒体与 AI 工具全面解锁无阻',
      unlock: 'Netflix、Disney+、ChatGPT、Claude 完整解锁',
      review: '新锐架构在晚高峰期间表现出很高的吞吐带宽，多设备同时看视频无降画质，AI 工具对话交互流畅无等待。'
    },
    holidayTest: {
      period: '节假日高压网络期',
      bandwidth: '480 Mbps+ 稳态输出',
      redundancy: '长假期间专线自动调度稳健，备用节点丰富',
      loss: '< 1.0% · 抖动平稳',
      availability: '长假节点可用率维持在 99.5% 以上',
      review: '在各大长假期间抗压表现出色，新锐架构的动态负载均衡使网络不会因某一时段流量集中而造成整体降速。'
    },
    plans: [
      { name: '月付标准 (推荐)', price: '￥25.00/月', perMonth: '￥25.00/月', traffic: '150GB/月', desc: '全节点 1.0x 倍率，不限设备，满足日常高频使用' },
      { name: '月付进阶', price: '￥50.00/月', perMonth: '￥50.00/月', traffic: '300GB/月', desc: '流量更大，适合中重度 4K 追剧与办公' },
      { name: '月付尊享', price: '￥70.00/月', perMonth: '￥70.00/月', traffic: '500GB/月', desc: '大流量尊享，适合多设备共享与下载大户' }
    ]
  },
  {
    id: 'wangjikuai',
    rank: 16,
    name: '网际快车',
    tag: '公开资料核验',
    logo: 'assets/airports/new/wangjikuai.svg',
    url: 'https://johhhu.xn--66tw07h.com',
    coupon: 'wjkc88',
    price: '￥24.00/次',
    originalPrice: '￥24.00/次',
    traffic: '100GB 不限时',
    device: '不限设备 · 按量计费',
    verified: true,
    highlights: ['按量计费永不过期', '标准不限时 24元 100G', '6.8 元低门槛尝鲜包', '不限设备并发', '随身备用必备神器'],
    intro: '网际快车以“按量计费、永不过期不限时”为核心卖点，在按需付费的备用梯子市场独树一帜。其主推的标准不限时包 24 元即可购买 100GB 纯高速流量，另有低至 6.8 元的 20GB 尝鲜包与大额 200GB 包，所有流量均无月度到期清零限制，买一次即可长期使用直至用完为止。这彻底解决了非高频用户“每月买月付用不完浪费、不买临时要用又没网”的痛点。底层线路采用稳定专线中转，节点覆盖主流港日美新等地区，并支持不限设备连接。无论是作为出国旅游临时上网、紧急情况下排查主力机场故障，还是低频文献查阅，网际快车都是性价比极高、极具安全感的随身备用神器。',
    hours: {
      founded: '稳定运作 2 年以上，按量计费系统自动化完善',
      serviceHours: '每天 10:00 - 22:00 工单客服支持',
      responseTime: '充值与流量自动即时生效，工单 30 分钟内处理',
      monitor: '7×24 小时自动化机房探针监控与流量精准核算',
      community: 'Telegram 官方频道与通知直通'
    },
    lines: {
      entry: '优质 BGP 中转多线入口，各地区智能优选',
      tunnel: '专线隧道中转加速，按量计费不缩减带宽',
      regions: '香港、日本、新加坡、美国等 25+ 常用节点',
      protocols: 'Shadowsocks (SS)、Vmess，主流平台全面支持',
      rules: '全节点无时间限制按量扣费，完全不限制设备数'
    },
    peakTest: {
      period: '工作日晚高峰 20:00 - 23:00',
      environment: '千兆宽带实测',
      download: '450 - 600 Mbps',
      upload: '60 - 90 Mbps',
      ping: '香港 32ms · 日本 58ms · 新加坡 62ms · 美西 150ms',
      loss: '< 0.9%',
      streaming: '4K 视频按量观看毫无卡顿，按需扣费精准透明',
      unlock: 'YouTube 4K、Telegram、GitHub、ChatGPT 正常解锁',
      review: '作为备用线路在晚高峰表现非常可靠，随开随连，无需担心月付过期断流，流量计量严格精准。'
    },
    holidayTest: {
      period: '长假及网络高波动期',
      bandwidth: '390 Mbps+ 稳态输出',
      redundancy: '长假备用线路随开随用，网络连接成功率 99.8%',
      loss: '< 1.3% · 整体稳定',
      availability: '长假期间节点随时可用，具备极高冗余安全性',
      review: '长假出行与备用利器，即使主力机场在长假偶发故障，切换至网际快车后立刻恢复正常通信，安全感拉满。'
    },
    plans: [
      { name: '尝鲜不限时包', price: '￥6.80/次', perMonth: '永久有效', traffic: '20GB (不限时)', desc: '极低成本体验，临时应急查件首选' },
      { name: '标准不限时 (推荐)', price: '￥24.00/次', perMonth: '永久有效', traffic: '100GB (不限时)', desc: '买一次长期使用永不清零，随身备用神器' },
      { name: '大容量不限时', price: '￥44.00/次', perMonth: '永久有效', traffic: '200GB (不限时)', desc: '按量大容量包，低频长期追剧与办公优选' }
    ]
  }
];

// 辅助方法：按 id / name / rank 快速查询机场数据
window.getAirportProfile = function(query) {
  if (!query) return window.AIRPORT_DATA[0];
  const q = String(query).toLowerCase().trim();
  return window.AIRPORT_DATA.find(a => 
    a.id.toLowerCase() === q || 
    a.name.toLowerCase() === q || 
    String(a.rank) === q
  ) || window.AIRPORT_DATA[0];
};
