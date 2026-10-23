/* =========================================================
 * 商路大亨 · 云端后端（云存档 + 资产排行榜）
 * ---------------------------------------------------------
 * 零依赖 Node.js 服务：托管游戏静态文件，提供云存档与全球资产榜。
 *
 * 【本地演示】
 *   在游戏目录执行：  node server.js
 *   然后浏览器打开：  http://localhost:3000
 *   局域网分享：      http://<本机IP>:3000 （同一 WiFi 下的手机/电脑可玩）
 *
 * 【发给朋友（公网部署）】
 *   任意支持 Node 的免费云服务（Render / Railway / 腾讯云云托管等）：
 *     1. 把本文件与游戏目录（商路大亨.html + assets/）一起上传
 *     2. 启动命令填： node server.js
 *     3. 部署后所有人都能通过网址玩，数据存云端，资产排行榜全球共享
 *   服务端口自动读取环境变量 PORT（云平台会注入）。
 * ========================================================= */
'use strict';
const http=require('http');
const fs=require('fs');
const path=require('path');
const os=require('os');

const PORT=process.env.PORT||3000;
const DATA_FILE=path.join(__dirname,'data.json');
const INDEX=path.join(__dirname,'商路大亨.html');

function loadDB(){ try{ return JSON.parse(fs.readFileSync(DATA_FILE,'utf8')) }catch(e){ return {players:{}} } }
let db=loadDB();
function saveDB(){ try{ fs.writeFileSync(DATA_FILE,JSON.stringify(db,null,2)) }catch(e){} }

const MIME={
  '.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg',
  '.webp':'image/webp','.svg':'image/svg+xml','.json':'application/json; charset=utf-8',
  '.ico':'image/x-icon','.txt':'text/plain; charset=utf-8'
};

function readBody(req){ return new Promise((resolve,reject)=>{
  let s='';
  req.on('data',c=>{ s+=c; if(s.length>1024*1024){ reject(new Error('body too large')); req.destroy(); } });
  req.on('end',()=>resolve(s));
  req.on('error',reject);
}); }

function playerList(){ return Object.values(db.players).filter(x=>x&&x.asset>0); }
function rankOfAsset(asset){
  const ps=playerList().sort((a,b)=>b.asset-a.asset);
  return ps.filter(x=>x.asset>asset).length+1; // 并列资产并列名次（取最前）
}

const server=http.createServer(async (req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS'){ res.writeHead(204); return res.end(); }
  let u;
  try{ u=new URL(req.url,'http://localhost'); }catch(e){ res.writeHead(400); return res.end('bad url'); }
  const p=decodeURIComponent(u.pathname);
  try{
    /* ---------------- API ---------------- */
    if(p==='/api/ping'){ res.writeHead(200,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:true,server:'商路大亨云端',time:Date.now()})); }

    if(p==='/api/lb'){ // 资产排行榜
      const limit=Math.min(100,parseInt(u.searchParams.get('limit')||'50',10)||50);
      const lb=playerList().sort((a,b)=>b.asset-a.asset).slice(0,limit)
        .map((x,i)=>({rank:i+1,name:x.name,asset:x.asset,net:x.net,time:x.time}));
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end(JSON.stringify({ok:true,total:playerList().length,lb}));
    }

    if(p==='/api/rank'){ // 我的名次
      const asset=parseFloat(u.searchParams.get('asset')||'0');
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end(JSON.stringify({ok:true,rank:asset>0?rankOfAsset(asset):null,total:playerList().length}));
    }

    if(p==='/api/sync' && req.method==='POST'){ // 云存档上传（同时上报资产进榜）
      const body=JSON.parse(await readBody(req)||'{}');
      if(!body.id){ res.writeHead(400,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:false,err:'need id'})); }
      const t=Date.now();
      const rec={
        id:String(body.id).slice(0,32),
        name:String(body.name||'无名行商').slice(0,12),
        asset:Math.max(0,Math.round(Number(body.asset)||0)),
        net:Math.round(Number(body.net)||0),
        data:body.data||null,
        time:t
      };
      db.players[rec.id]=rec;
      saveDB();
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end(JSON.stringify({ok:true,time:t,rank:rec.asset>0?rankOfAsset(rec.asset):null}));
    }

    if(p==='/api/sync' && req.method==='GET'){ // 云存档拉取
      const id=u.searchParams.get('id');
      const rec=id&&db.players[id];
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end(JSON.stringify({ok:!!rec,data:rec?rec.data:null,asset:rec?rec.asset:0,time:rec?rec.time:0}));
    }

    if(p==='/api/rename'){ // 改名
      const body=JSON.parse(await readBody(req)||'{}');
      const rec=body.id&&db.players[body.id];
      if(!rec){ res.writeHead(404,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:false,err:'no player'})); }
      rec.name=String(body.name||rec.name).slice(0,12); saveDB();
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end(JSON.stringify({ok:true}));
    }

    /* ---------------- 静态托管 ---------------- */
    if(p==='/'||p==='/index.html'){
      if(!fs.existsSync(INDEX)){ res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}); return res.end('未找到 商路大亨.html，请与本文件放在同一目录'); }
      res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      return fs.createReadStream(INDEX).pipe(res);
    }
    if(p.startsWith('/assets/')||p.startsWith('/_assets/')){
      const f=path.join(__dirname, decodeURIComponent(p.replace(/^\/+/,'')));
      const ext=path.extname(f).toLowerCase();
      if(fs.existsSync(f)){
        res.writeHead(200,{'Content-Type':MIME[ext]||'application/octet-stream'});
        return fs.createReadStream(f).pipe(res);
      }
    }
    if(p==='/favicon.ico'){ res.writeHead(204); return res.end(); }

    res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
    res.end('404 商路大亨云端');
  }catch(e){
    res.writeHead(500,{'Content-Type':'application/json'});
    res.end(JSON.stringify({ok:false,err:String(e&&e.message||e)}));
  }
});

function lanIP(){
  const nets=os.networkInterfaces();
  for(const k in nets){
    for(const n of nets[k]||[]){
      if(n.family==='IPv4'&&!n.internal) return n.address;
    }
  }
  return '127.0.0.1';
}

server.listen(PORT,()=>{
  console.log('==============================================');
  console.log('  商路大亨 · 云端服务已启动');
  console.log('  本机访问：  http://localhost:'+PORT);
  console.log('  局域网分享：http://'+lanIP()+':'+PORT);
  console.log('  公网部署：  监听 PORT 环境变量（云平台自动注入）');
  console.log('  数据文件：  data.json（自动创建）');
  console.log('==============================================');
});
