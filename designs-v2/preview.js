/* Browser-only prototype behavior. No accounts, payments, or orders are collected. */
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function readStore(key,fallback){try{return JSON.parse(sessionStorage.getItem(key))||fallback}catch{return fallback}}
function writeStore(key,value){try{sessionStorage.setItem(key,JSON.stringify(value))}catch{}}
let previewBag=readStore('fl-preview-bag',[]).filter(item=>products.some(p=>p.id===item.id));
let savedProducts=readStore('fl-preview-saved',[]);
document.querySelector('main').id='main-content';
document.querySelector('.utility>span:first-child').textContent='INDEPENDENT DESIGN STUDY';
document.querySelector('footer>span:first-child').textContent='Independent concept · Not affiliated with Foot Locker';
document.querySelector('footer>a').href='gallery.html';document.querySelector('footer>a').textContent='Frames & design notes';
function syncBag(){bag=previewBag.length;document.getElementById('bag-count').textContent=bag;writeStore('fl-preview-bag',previewBag)}
function syncSaved(){document.querySelectorAll('.product').forEach(el=>{const selected=savedProducts.includes(el.dataset.product);el.querySelector('.heart').classList.toggle('saved',selected);el.querySelector('.heart').setAttribute('aria-pressed',selected)})}
syncBag();syncSaved();
const bagDialog=document.getElementById('preview-bag');
let bagPage=0;
function showBag(){
  bagPage=Math.max(0,Math.min(bagPage,previewBag.length-1));
  bagDialog.innerHTML='<div class="dialog-header"><h2 id="bag-title">Your preview bag ('+previewBag.length+')</h2><button class="icon-button" data-close-bag aria-label="Close bag">'+icon('close')+'</button></div><div class="bag-body">'+(previewBag.length?previewBag.slice(bagPage,bagPage+1).map((item)=>{const p=products.find(p=>p.id===item.id);return '<article class="bag-row"><a class="product-detail-image" href="'+productLink(p,item.color)+'"><img src="assets/'+(p.id==='caitlin'?'caitlin-'+(['pink','blue','yellow'].includes(item.color)?item.color:'pink')+'-tile.png':p.img)+'" alt="'+p.name+'"></a><div><h3><a class="product-detail-link" href="'+productLink(p,item.color)+'">'+p.name+'</a></h3><p>US '+(p.category.includes('Women')?'Women':'Men')+' '+escapeHTML(item.size)+'</p><strong>'+(p.price?'$'+p.price:'Price on product page')+'</strong><button class="inline" data-remove-item="'+bagPage+'">Remove</button></div></article>'}).join(''):'<p>Your bag is ready for your next pair.</p>')+(previewBag.length>1?'<nav class="bag-pagination" aria-label="Bag items"><button data-bag-step="-1" '+(bagPage===0?'disabled':'')+' aria-label="Previous bag item">Previous</button><span role="status">Item '+(bagPage+1)+' of '+previewBag.length+'</span><button data-bag-step="1" '+(bagPage===previewBag.length-1?'disabled':'')+' aria-label="Next bag item">Next</button></nav>':'')+'</div><div class="quick-footer"><p class="bag-note">Design preview only. No payment or order is created.</p><div class="bag-actions"><a class="primary instant-buy" href="index.html">Instant buy '+icon('arrow')+'</a><a class="primary checkout-page" href="index.html">Checkout page '+icon('arrow')+'</a></div><button class="text-link bag-continue" data-close-bag>Continue exploring '+icon('arrow')+'</button></div>';
  if(!bagDialog.open)bagDialog.showModal();
  bagDialog.querySelector('[data-close-bag]').focus();
}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.classList.contains('add-bag')&&!b.disabled&&activeProduct&&selectedSize){previewBag.push({id:activeProduct.id,size:selectedSize,color:selectedColor});syncBag();bagPage=previewBag.length-1;dialog.close();showBag()}
 if(b.classList.contains('bag')){bagPage=0;showBag()}
 if(b.hasAttribute('data-bag-step')){const step=Number(b.dataset.bagStep);bagPage+=step;showBag();const next=bagDialog.querySelector('[data-bag-step="'+step+'"]:not(:disabled)')||bagDialog.querySelector('[data-bag-step]:not(:disabled)');next?.focus()}
 if(b.hasAttribute('data-close-bag'))bagDialog.close();
 if(b.hasAttribute('data-remove-item')){previewBag.splice(Number(b.dataset.removeItem),1);syncBag();showBag()}
 if(b.classList.contains('heart')){const id=b.closest('.product').dataset.product;savedProducts=b.classList.contains('saved')?[...new Set([...savedProducts,id])]:savedProducts.filter(x=>x!==id);writeStore('fl-preview-saved',savedProducts)}
 if(b.dataset.player){const u=new URL(location.href);u.searchParams.set('player',b.dataset.player);history.replaceState(null,'',u);syncSaved()}
});
const query=new URLSearchParams(location.search).get('q')||'';
const search=document.querySelector('.search input');search.value=query;
search.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();location.href='?page=listing&q='+encodeURIComponent(search.value.trim())}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();search.focus()}});
if(pageType==='listing'){
 const updateBase=updateProducts;updateProducts=function(){updateBase();if(query){let count=0;document.querySelectorAll('#listing-products .product').forEach(el=>{const p=products.find(p=>p.id===el.dataset.product);const match=(p.name+' '+p.player+' '+p.color).toLowerCase().includes(query.toLowerCase());el.hidden=!match;if(match)count++});document.querySelector('.result-count').textContent=count+' matching styles';document.getElementById('result-description').textContent='Search: '+query;if(!count){const empty=document.createElement('p');empty.className='empty-results';empty.textContent='No matches in this preview assortment. Try Caitlin, LeBron, Nike, or blue.';document.getElementById('listing-products').append(empty)}}syncSaved()};updateProducts();
}
/* Controls outside this bounded prototype explain their scope instead of silently doing nothing. */
document.querySelectorAll('nav a').forEach(a=>{if(a.textContent!=='Basketball')a.addEventListener('click',e=>{e.preventDefault();toast('This design preview focuses on the homepage and basketball collection.')})});
document.querySelector('.account').addEventListener('click',()=>toast('Design preview · Sign-in is not connected.'));
document.querySelector('.store').addEventListener('click',()=>toast('Grapevine Mills is the reference location. Live availability is not connected.'));
document.querySelectorAll('.interests button').forEach(b=>b.addEventListener('click',()=>{const ids=b.textContent==='Basketball'?['witness','lebron']:b.textContent==='Everyday'?['nb','samba']:['witness','lebron','nb','samba'];document.querySelector('.home-grid').innerHTML=ids.map(id=>card(products.find(p=>p.id===id))).join('');syncSaved();if(b.textContent==='Running')toast('Running assortment is not included in this preview. Explore the editorial below.')}));

/* A clear first-visit introduction to the independent design demonstration. */
const disclaimer=document.createElement('dialog');
disclaimer.id='site-disclaimer';disclaimer.setAttribute('aria-labelledby','disclaimer-title');disclaimer.setAttribute('aria-describedby','disclaimer-description');
disclaimer.innerHTML='<div class="disclaimer-gloss" aria-hidden="true"></div><div class="disclaimer-content"><div class="disclaimer-kicker"><span class="study-mark" aria-hidden="true">↗</span> INDEPENDENT UI DESIGN STUDY</div><p class="disclaimer-intro">Before you explore</p><h1 id="disclaimer-title">This is not the original<br><span>Foot Locker</span> website.</h1><p id="disclaimer-description">This website is for illustration purposes only.</p><div class="disclaimer-rule"></div><p class="disclaimer-detail">An independent concept exploring a more direct way to discover sneakers. It is not affiliated with, endorsed by, or operated by Foot Locker.</p><div class="disclaimer-facts"><span>No purchases</span><span>No payments</span><span>No live inventory</span></div><div class="disclaimer-actions"><button class="disclaimer-enter" autofocus>Enter design preview '+icon('arrow')+'</button><a href="https://www.footlocker.com/" class="disclaimer-official">Visit official Foot Locker '+icon('arrow')+'</a></div><p class="disclaimer-footnote">Product imagery and trademarks belong to their respective owners.</p></div>';
document.body.append(disclaimer);
function showDisclaimer(){disclaimer.showModal();document.body.classList.add('disclaimer-open')}
function closeDisclaimer(){writeStore('fl-preview-intro',true);disclaimer.close();document.body.classList.remove('disclaimer-open');document.querySelector('.logo').focus()}
disclaimer.querySelector('.disclaimer-enter').addEventListener('click',closeDisclaimer);
disclaimer.addEventListener('cancel',e=>{e.preventDefault();closeDisclaimer()});
const disclaimerLink=document.createElement('button');disclaimerLink.className='inline disclaimer-reopen';disclaimerLink.textContent='About this demo';disclaimerLink.addEventListener('click',showDisclaimer);document.querySelector('footer').append(disclaimerLink);
if(!readStore('fl-preview-intro',false))showDisclaimer();
