const fs = require('fs');
const https = require('https');
const path = require('path');

const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');
const HOST = 'jcjingzhuncha.com';
const KEY = 'd7177de219adaa225b3abd9d1677e2d3';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

if (!fs.existsSync(SITEMAP_PATH)) {
  console.error(`❌ 未找到 sitemap.xml: ${SITEMAP_PATH}`);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
const locMatches = sitemapContent.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
const urlList = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

if (urlList.length === 0) {
  console.error('❌ sitemap.xml 中未提取到任何 URL');
  process.exit(1);
}

console.log(`📡 [IndexNow] 从 sitemap.xml 中读取到 ${urlList.length} 条 URL，准备推送到 IndexNow 节点...`);

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

function sendToIndexNow(hostname) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: hostname,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': 'IndexNow-Pusher/1.0'
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ hostname, statusCode: res.statusCode, body });
      });
    });

    req.on('error', (err) => {
      resolve({ hostname, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  const endpoints = ['api.indexnow.org', 'yandex.com'];
  for (const ep of endpoints) {
    console.log(`🚀 正在向 ${ep} 提交更新...`);
    const result = await sendToIndexNow(ep);
    if (result.error) {
      console.warn(`⚠️ [${ep}] 请求失败: ${result.error}`);
    } else {
      console.log(`📥 [${ep}] 响应状态码: ${result.statusCode}`);
      if (result.statusCode === 200 || result.statusCode === 202) {
        console.log(`✅ [${ep}] 提交成功 (200/202)！全部 ${urlList.length} 条 URL 已被接收并广播同步。`);
        break;
      } else {
        console.warn(`⚠️ [${ep}] 返回状态码: ${result.statusCode}，尝试下一个备用节点...`);
      }
    }
  }
}

main();
