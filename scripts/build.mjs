import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(),out=path.join(root,'dist');
await mkdir(out,{recursive:true});
for(const name of ['index.html','styles.css','app.js','preview.js','gallery.html','mobile-overview.html','mobile-overview.png','README.md','asset-sources.json','assets','frames']) {
  await cp(path.join(root,'designs-v2',name),path.join(out,name),{recursive:true});
}
await cp(path.join(root,'docs'),path.join(out,'docs'),{recursive:true});
await cp(path.join(root,'README.md'),path.join(out,'CASE-STUDY.md'));
let gallery=await readFile(path.join(out,'gallery.html'),'utf8');
gallery=gallery.replace('<a href="../Foot-Locker-UI-Corrected-v2.zip">Download complete package ↓</a>','<a href="https://github.com/PCTEJA/footlocker-ui-redesign">View repository ↗</a>');
await writeFile(path.join(out,'gallery.html'),gallery);
await writeFile(path.join(out,'robots.txt'),'User-agent: *\nDisallow: /\n');
console.log('Built dist/: responsive demo, gallery, original assets, and case-study documentation.');
