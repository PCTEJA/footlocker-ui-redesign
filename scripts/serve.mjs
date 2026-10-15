import http from 'node:http';import path from 'node:path';import {readFile} from 'node:fs/promises';
const root=path.resolve('dist');const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.json':'application/json','.md':'text/plain'};
const server=http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403).end();return}const data=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'}).end(data)}catch{res.writeHead(404).end('Not found')}});
const port=Number(process.env.PORT)||4173;
server.listen(port,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+port));
