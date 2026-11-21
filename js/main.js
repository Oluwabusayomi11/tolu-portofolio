/* Site behaviour: builds the sections from js/content.js, the pop-up windows, the video player and the phone menu. */
const $=s=>document.querySelector(s),dlg=$('#dlg'),box=$('#dlg-in');
const img=(src,alt="")=>`<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`;
$('#camps').innerHTML=CAMPAIGNS.map((c,i)=>`<button class="camp" data-i="${i}"><div class="th">${img(c.img,c.t)}</div><div><h3 class="bb">${c.t}</h3><p>${c.tag}</p></div><span class="go">Read more</span></button>`).join('');
$('#reels-grid').innerHTML=VIDEOS.map((v,i)=>`<button class="reel" data-v="${i}" aria-label="Play ${v.t}">${img(v.img,"")}<span class="play"></span><span class="cap"><b>${v.t}</b><span>${v.s}</span></span></button>`).join('');
$('#posts-grid').innerHTML=POSTS.map((p,k)=>`<a class="post pic" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.t} (opens Instagram)">${img(p.img,"")}<span>View on Instagram</span></a>`).join('');
$('#personal-grid').innerHTML=PERSONAL.map((p,k)=>`<a class="post pic" href="${p.url}" target="_blank" rel="noopener" aria-label="Personal brand post ${k+1} (opens Instagram)">${img(p.img,"")}<span>View on Instagram</span></a>`).join('');
$('#art-grid').innerHTML=EDITORIAL.map((a,i)=>`<button class="camp art" data-a="${i}"><div><h3 class="bb">${a.t}</h3>${(a.sub||a.tag)?`<p>${a.sub||a.tag}</p>`:""}</div><span class="go">Read</span></button>`).join('');
function open(h){box.innerHTML=h;dlg.showModal()}
function shut(){box.innerHTML="";dlg.close()}
const igBox=(id,t,sub)=>`<div class="m-media v" style="background:var(--cream)"><iframe src="https://www.instagram.com/reel/${id}/embed" style="width:100%;max-width:420px;height:min(78vh,720px);aspect-ratio:auto;background:#fff" allow="autoplay;fullscreen" allowfullscreen title="${t||'Reel'}"></iframe></div><div class="m-body" style="padding:18px 30px">${t?`<h3 class="bb" style="font-size:40px;margin:0">${t}</h3><p style="margin:0 0 10px">${sub}</p>`:""}<a class="btn o" href="https://www.instagram.com/reel/${id}/" target="_blank" rel="noopener">Watch on Instagram</a></div>`;
window.igFall=i=>{const p=VIDEOS[i];box.innerHTML=igBox(p.ig,p.t,p.s)};
document.addEventListener('click',e=>{
 const g=e.target.closest('[data-ig]');if(g){open(igBox(g.dataset.ig));return}
 const c=e.target.closest('.camp[data-i]'),v=e.target.closest('.reel'),a=e.target.closest('[data-a]');
 if(c){const p=CAMPAIGNS[c.dataset.i];open(`<div class="m-body"><h3 class="bb">${p.t}</h3><p><strong>${p.tag}</strong></p><p>${p.d}</p>${p.reels?`<p><strong>Watch some of the content that was posted</strong></p><div class="rl">${p.reels.map((r,k)=>`<button class="btn o sm" data-ig="${r}">Reel ${k+1}</button>`).join("")}</div>`:""}${p.link?`<div class="cta" style="margin-top:22px"><a class="btn" href="${p.link}" target="_blank" rel="noopener">View further details</a></div>`:""}</div>`)}
 if(a){const p=EDITORIAL[a.dataset.a];open(`<div class="m-body"><h3 class="bb">${p.t}</h3>${p.tag?`<p><strong>${p.tag}</strong></p>`:""}${p.sub?`<p><em>${p.sub}</em></p>`:""}${p.body.map(x=>x.startsWith('## ')?`<h4>${x.slice(3)}</h4>`:`<p>${x}</p>`).join("")}${p.link?`<a class="btn" href="${p.link}" target="_blank" rel="noopener">Read the full piece</a>`:""}</div>`)}
 if(v){const i=v.dataset.v,p=VIDEOS[i];if(p.src){open(`<div class="m-media"><video src="${p.src}" controls autoplay playsinline onerror="igFall(${i})"></video></div><div class="m-body" style="padding:18px 30px"><h3 class="bb" style="font-size:40px;margin:0">${p.t}</h3><p style="margin:0 0 10px">${p.s}</p><a class="btn o" href="https://www.instagram.com/reel/${p.ig}/" target="_blank" rel="noopener">Watch on Instagram</a></div>`)}else open(igBox(p.ig,p.t,p.s))}
});
const bg=$('#burger'),nv=$('#nav');
const menu=o=>{nv.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')};
bg.onclick=()=>menu(!nv.classList.contains('open'));
nv.addEventListener('click',e=>{if(e.target.closest('a'))menu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false)});
$('#close').onclick=shut;
dlg.addEventListener('click',e=>{if(e.target===dlg)shut()});
dlg.addEventListener('close',()=>{box.innerHTML=""});
