// Ponder Engine v1.2.0 CDN Bundle (auto-injects CSS, DOM shell, modules G & A, multilingual engine & AI tutor)
(function(){
  window.PONDER_VERSION='1.2.0';
  window.BR='#d9a441';window.WH='#e9e4d6';window.MU='#a39d8c';window.FL='#3b3320';
  window.fr=(a,b)=>'<span class="fr"><span>'+a+'</span><span>'+b+'</span></span>';
  const st=document.createElement('style');
  st.textContent=":root{--bg:#1b1a17;--surf:#23211c;--ink:#0f0e0c;--ln:#3a372f;--ln2:#4a463c;--tx:#e9e4d6;--mu:#a39d8c;--br:#d9a441;--ptr:#7c8082;--serif:Georgia,\"Times New Roman\",serif;--mono:ui-monospace,\"SF Mono\",Menlo,Consolas,monospace;--out:cubic-bezier(.22,1,.36,1);--io:cubic-bezier(.65,0,.35,1)}\n*{box-sizing:border-box}html,body{height:100%;margin:0;background:var(--bg);color:var(--tx);font-family:var(--serif)}\nbutton{font:inherit;color:inherit;cursor:pointer}button:focus-visible{outline:1px solid var(--br);outline-offset:2px}\n.m{font:12px/1.4 var(--mono);letter-spacing:.04em;color:var(--mu)}.k{color:var(--br)}\n#app{height:100vh;min-width:0;display:grid;grid-template-rows:64px 1fr 84px;overflow:hidden}\nheader{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:0 40px;min-width:0}\n.br{display:flex;align-items:center;gap:14px;min-width:0;flex:1}.br>div:last-child{min-width:0}.ic{width:36px;height:36px;flex:none;border:1px solid var(--ln2);background:var(--ink);display:grid;place-items:center}.tt,#tag{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tt{font-size:20px}\n.seg{display:flex;position:relative;background:var(--ink);flex:none}#sw{position:absolute;top:0;bottom:0;left:0;width:0;background:var(--br);z-index:0}#sw.a{transition:left .6s var(--out),width .6s var(--out)}.seg .t{position:relative;z-index:1;background:transparent}.t{height:34px;padding:0 14px;background:var(--ink);border:1px solid var(--ln2);margin-left:-1px;color:var(--mu);font:12px var(--mono);white-space:nowrap;transition:color .25s var(--io),background .25s var(--io),border-color .25s var(--io)}\n.t:hover{color:var(--tx)}.t.on{border-color:var(--br);color:var(--bg)}\nmain{display:grid;grid-template-columns:1fr 0fr 0fr 0fr;padding:0 40px;min-height:0;transition:grid-template-columns .8s var(--out)}\n.m-razbor main{grid-template-columns:1.38fr 1fr 0fr 0fr}.m-konspekt main{grid-template-columns:0fr 0fr 1fr 0fr}\n.chat-on.m-scene main,.chat-on.m-razbor main{grid-template-columns:1fr 0fr 0fr .45fr}.chat-on.m-konspekt main{grid-template-columns:0fr 0fr 1fr .45fr}\n.pane{min-width:0;min-height:0;overflow:hidden;display:flex;padding-left:0;opacity:0;visibility:hidden;transition:padding-left .8s var(--out),opacity .5s var(--io),visibility 0s linear .8s}\n.ps,.m-razbor:not(.chat-on) .pn,.m-konspekt .pd,.chat-on .pc{visibility:visible;opacity:1;transition:padding-left .8s var(--out),opacity .6s var(--io) .1s,visibility 0s}\n.m-konspekt .ps{opacity:0;visibility:hidden;transition:padding-left .8s var(--out),opacity .5s var(--io),visibility 0s linear .8s}\n.m-razbor:not(.chat-on) .pn,.chat-on .pc{padding-left:16px}\n#stage{position:relative;flex:1;min-width:0;background:var(--surf);border:1px solid var(--ln);overflow:hidden;transition:opacity .5s var(--io)}\n.m-konspekt #stage{opacity:0}\n#svgw,#svgw svg{position:absolute;inset:0;width:100%;height:100%}\n#svgw{transition:left .8s var(--out),width .8s var(--out)}.m-scene #svgw{left:300px;width:calc(100% - 300px)}\n.sv text{font-family:var(--serif);font-style:italic;font-size:22px;transform-box:fill-box;transform-origin:center;paint-order:stroke;stroke:var(--surf);stroke-width:5px;stroke-linejoin:round}\n.sv circle{transform-box:fill-box;transform-origin:center}\n.p{position:absolute;left:24px;width:260px;background:var(--ink);border:1px solid var(--ln2);border-right-color:var(--ptr);padding:12px 16px;font-size:18px;line-height:1.45;transform:translateY(-50%);transition:top .65s var(--out),opacity .35s var(--io)}\n#leader{position:absolute;left:284px;height:1.5px;width:0;background:var(--ptr);opacity:0;pointer-events:none;transition:top .65s var(--out),width .65s var(--out),opacity .3s var(--io)}\n#leader::before{content:\"\";position:absolute;left:-3px;top:50%;width:5px;height:5px;background:var(--ptr);transform:translateY(-50%) rotate(45deg)}\n#dot{position:absolute;right:-4.5px;top:50%;width:9px;height:9px;border-radius:50%;background:var(--ptr);transform:translateY(-50%)}\n.m-razbor .p,.m-konspekt .p{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .25s var(--io),visibility 0s linear .25s}\n.fm .p{transition:opacity .35s var(--io)}.fm #leader{transition:opacity .3s var(--io)}\n#notes,#chat{background:var(--surf);border:1px solid var(--ln);min-height:0}\n#doc{background:none;overflow:auto;min-height:0;min-width:0;flex:1 1 0}\n#notes{position:relative;overflow:auto;min-width:0;flex:1 1 0}\n#chat{display:flex;flex-direction:column;min-width:0;flex:1 1 0}\n.nh{padding:14px 20px;border-bottom:1px solid var(--ln)}\n.st{display:flex;gap:14px;padding:18px 20px;color:var(--mu);font-size:16px;line-height:1.6;cursor:pointer;border-bottom:1px solid var(--ln);transition:background .4s var(--io),color .4s var(--io)}\n.st:hover{color:var(--tx)}.st.on{background:#2c2a24;color:var(--tx)}.st p{margin:0 0 8px}\n.fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;font-style:italic;margin:0 3px}.fr>span:first-child{border-bottom:1px solid currentColor;padding:0 4px}\n.ok{display:block;margin-top:10px;font:12px var(--mono);color:var(--br)}\n.dc{max-width:980px;margin:0 auto;padding:12px 0 40px}.dc h1{font-size:34px;font-weight:400;margin:6px 0 24px}\n.row{display:flex;gap:32px;padding:18px 0;border-top:1px solid var(--ln);min-height:160px}.row .m.k{width:32px;padding-top:4px}\n.row>div:nth-child(2){flex:1;font-size:18px;line-height:1.6}.row .m{margin-bottom:6px;color:var(--tx)}\n.th{width:260px;height:150px;background:var(--surf);border:1px solid var(--ln);flex:none}.th svg{width:100%;height:100%}.th text{font:italic 700 34px var(--serif)}\n.ch{display:flex;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--ln)}\n.cx{margin:14px 18px 0;border:1px solid var(--ln2);padding:7px 10px;display:flex;gap:8px;align-items:center}.cx i{width:8px;height:8px;background:var(--br)}\n#log{flex:1;overflow:auto;padding:18px;font-size:16px;line-height:1.6}#log .q{font:13px var(--mono);margin:18px 0 8px}#log .q:first-child{margin-top:0}\n.lk{font:12px var(--mono);color:var(--br);border-bottom:1px solid var(--br);cursor:pointer}\n.qa{display:flex;flex-wrap:wrap;gap:6px;padding:0 18px 10px}.qa .t{margin:0}\n.in{display:flex;margin:0 18px 18px;border:1px solid var(--ln2);background:var(--ink);transition:border-color .25s var(--io)}.in:focus-within{border-color:var(--mu)}.in input{flex:1;min-width:0;background:none;border:0;color:var(--tx);padding:0 14px;height:44px;font:13px var(--mono);outline:none}\n.in button{width:44px;flex:none;background:none;border:0;color:var(--br);font:16px var(--mono)}\nfooter{display:flex;align-items:center;gap:12px;padding:0 40px}\n.b{position:relative;width:44px;height:44px;background:var(--ink);border:1px solid var(--ln2);font:22px var(--serif);flex:none;transition:border-color .25s var(--io),color .25s var(--io)}\n.b i{position:absolute;right:4px;bottom:2px;font:10px var(--mono);color:var(--mu);font-style:normal;transition:color .25s var(--io)}.b:hover{border-color:var(--mu)}\n.b.on{border-color:var(--br);color:var(--br)}.b.on i{color:var(--br)}\n#tl{position:relative;flex:1;max-width:560px;height:44px;margin:0 12px;cursor:pointer}\n#tl .tr{position:absolute;left:0;right:0;top:21px;height:2px;background:var(--ln)}#fl{position:absolute;left:0;top:21px;height:2px;background:var(--br);transition:width .8s var(--out)}\n.tk{position:absolute;top:16px;width:2px;height:12px;background:var(--mu);transition:background .4s var(--io)}.tk.d{background:var(--br)}\n#mk{position:absolute;top:14px;width:10px;height:16px;background:var(--br);margin-left:-5px;transition:left .8s var(--out)}\n#lbl{margin-left:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:34%}\n@media (max-width:860px){header,main,footer{padding:0 16px}.tt{font-size:16px}.t{padding:0 10px;font-size:11px}.m-scene #svgw{left:220px;width:calc(100% - 220px)}.p{left:14px;width:200px;font-size:15px;padding:10px 12px}#leader{left:214px}.chat-on.m-scene main,.chat-on.m-razbor main{grid-template-columns:1fr 0fr 0fr .62fr}.chat-on.m-scene #svgw{left:0;width:100%;height:calc(100% - 76px)}.chat-on.m-scene .p{left:10px;right:10px;width:auto;top:auto!important;bottom:10px;transform:none;border-right-color:var(--ln2);border-top-color:var(--ptr);font-size:14px;padding:8px 12px}.chat-on #leader{display:none}.dc h1{font-size:24px}.row{gap:16px}.th{width:180px;height:110px}#lbl{max-width:28%}}\n@media (max-width:540px){#app{grid-template-rows:auto 1fr 68px}header{flex-wrap:wrap;padding:10px 12px;gap:8px}.seg{width:100%}.seg .t{flex:1;padding:0 6px;text-align:center}main,footer{padding:0 12px}footer{gap:6px}.b{width:36px;height:36px;font-size:18px}.b i{display:none}#tl{margin:0 4px}#lbl{display:none}.m-scene #svgw{left:0;width:100%;height:calc(100% - 86px)}.p{left:10px;right:10px;width:auto;top:auto!important;bottom:10px;transform:none;border-right-color:var(--ln2);border-top-color:var(--ptr);font-size:14px;padding:8px 12px}#leader{display:none}.m-razbor main{grid-template-columns:0fr 1fr 0fr 0fr}.m-razbor .ps{opacity:0;visibility:hidden}.m-razbor:not(.chat-on) .pn,.chat-on .pc{padding-left:0}.chat-on.m-scene main,.chat-on.m-razbor main,.chat-on.m-konspekt main{grid-template-columns:0fr 0fr 0fr 1fr}.chat-on .ps,.chat-on .pn,.chat-on .pd{opacity:0;visibility:hidden}.row{flex-direction:column;gap:12px}.th{width:100%;height:150px}}\n@media (prefers-reduced-motion:reduce){*{transition:none!important}}";
  (document.head||document.documentElement).appendChild(st);
  // ===== МОДУЛЬ АЛГЕБРЫ И ГРАФИКОВ: координатная плоскость, функции, проекции =====

window.A ={
  x0:-1,x1:5,y0:-2,y1:5,ux:74,uy:52,ox:160,oy:260,
  cfg(x0,x1,y0,y1,ux=74,uy=52){A.x0=x0;A.x1=x1;A.y0=y0;A.y1=y1;A.ux=ux;A.uy=uy;A.ox=70-x0*ux;A.oy=50+y1*uy;return A},
  pt:(x,y)=>[A.ox+x*A.ux,A.oy-y*A.uy],
  grid:()=>{let s='<g data-bg="1">';for(let x=Math.ceil(A.x0);x<=Math.floor(A.x1);x++)if(x){const X=A.ox+x*A.ux;
    s+=`<path data-tk="1" d="M${X} ${A.oy-4} L${X} ${A.oy+4}" stroke="#6b6657" stroke-width="1.3"/>`}
   for(let y=Math.ceil(A.y0);y<=Math.floor(A.y1);y++)if(y){const Y=A.oy-y*A.uy;
    s+=`<path data-tk="1" d="M${A.ox-4} ${Y} L${A.ox+4} ${Y}" stroke="#6b6657" stroke-width="1.3"/>`}return s+'</g>'},
  axes:()=>{const xL=A.ox+A.x0*A.ux,xR=A.ox+A.x1*A.ux,yT=A.oy-A.y1*A.uy,yB=A.oy-A.y0*A.uy;
   return `<g data-bg="1"><path data-c="${A.ox},${A.oy}" d="M${xL} ${A.oy} L${xR} ${A.oy}" stroke="#6b6657" stroke-width="1.6"/>`+
    `<path d="M${A.ox} ${yB} L${A.ox} ${yT}" stroke="#6b6657" stroke-width="1.6"/>`+
    `<path data-tk="1" d="M${xR} ${A.oy} L${xR-9} ${A.oy-4} L${xR-9} ${A.oy+4} Z M${A.ox} ${yT} L${A.ox-4} ${yT+9} L${A.ox+4} ${yT+9} Z" fill="#6b6657"/>`+
    `<g font-size="20" fill="${MU}"><text x="${xR-4}" y="${A.oy-14}" text-anchor="end">x</text><text x="${A.ox+16}" y="${yT+16}" text-anchor="start">y</text><text x="${A.ox-12}" y="${A.oy+24}" text-anchor="end">0</text></g></g>`},
  plot:(fn,a=A.x0,b=A.x1,s=WH,w=2.5,d)=>{const pts=[],N=160;for(let i=0;i<=N;i++){const x=a+(b-a)*i/N,y=fn(x);if(isFinite(y)&&y>=A.y0-.3&&y<=A.y1+.3)pts.push(A.pt(x,y))}
   if(!pts.length)return '';const m=pts[Math.floor(pts.length*.22)];
   return `<path data-c="${m[0]},${m[1]}" d="M${pts.map(p=>p.join(' ')).join(' L')}" fill="none" stroke="${s}" stroke-width="${w}" stroke-linejoin="round"${d?` stroke-dasharray="${d}"`:''}/>`},
  area:(fn,a,b,f=FL,s=BR)=>{const pts=[A.pt(a,0)],N=80;for(let i=0;i<=N;i++){const x=a+(b-a)*i/N;pts.push(A.pt(x,fn(x)))}pts.push(A.pt(b,0));
   const m=A.pt((a+b)/2,fn((a+b)/2)*.55);return `<path data-c="${m[0]},${m[1]}" d="M${pts.map(p=>p.join(' ')).join(' L')} Z" fill="${f}" stroke="none"/>`+(s&&s!=='none'?A.plot(fn,a,b,s,2.8):'')},
  seg:(x1,y1,x2,y2,s=WH,w=2,d)=>{const p=A.pt(x1,y1),q=A.pt(x2,y2);return `<path data-c="${(p[0]+q[0])/2},${(p[1]+q[1])/2}" d="M${p} L${q}" fill="none" stroke="${s}" stroke-width="${w}"${d?` stroke-dasharray="${d}"`:''}/>`},
  proj:(x,y,c=MU,lx,ly,vx=true,vy=true)=>{const p=A.pt(x,y),px=A.pt(x,0),py=A.pt(0,y);
   return `<g data-c="${p[0]},${p[1]}">`+(vy&&y?`<path d="M${p} L${px}" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="6 5"/>`:'')+
    (vx&&x?`<path d="M${p} L${py}" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="6 5"/>`:'')+
    `<g font-size="20">`+(lx!==false?`<text x="${px[0]}" y="${px[1]+(y>=0?26:-12)}" text-anchor="middle" fill="${c}">${lx??x}</text>`:'')+
    (ly!==false?`<text x="${py[0]+(x>=0?-12:12)}" y="${py[1]+(y<0?22:-10)}" text-anchor="${x>=0?'end':'start'}" fill="${c}">${ly??y}</text>`:'')+`</g></g>`},
  dot:(x,y,c=WH,open=false)=>{const p=A.pt(x,y);return `<circle data-c="${p[0]},${p[1]}" cx="${p[0]}" cy="${p[1]}" r="4" fill="${open?'#23211c':c}" stroke="#23211c" stroke-width="${open?2:1.5}"/>`},
  txt:(t,x,y,dx=0,dy=-14,c=WH,an='middle')=>{const p=A.pt(x,y);return `<text data-c="${p[0]},${p[1]}" x="${p[0]+dx}" y="${p[1]+dy}" text-anchor="${an}" fill="${c}">${t}</text>`}
};
  // ===== МОДУЛЬ ГЕОМЕТРИИ: примитивы, построения и защита от ошибок генератора =====

window.G ={
  _p:[],_r(p){if(Array.isArray(p)&&isFinite(p[0])&&isFinite(p[1]))G._p.push(p);return p},
  _c(){const a=G._p;if(!a.length)return[200,180];let x=0,y=0;for(const p of a){x+=p[0];y+=p[1]}return[x/a.length,y/a.length]},
  pts:a=>a.map(v=>(G._r(v),v.join(' '))).join(' L'),
  poly:(a,f='none',s=WH,w=2)=>`<path data-c="${a.reduce((s,v)=>s+v[0],0)/a.length},${a.reduce((s,v)=>s+v[1],0)/a.length}" d="M${G.pts(a)} Z" fill="${f}" stroke="${s}" stroke-width="${w}" stroke-linejoin="round"/>`,
  seg:(a,b,s=WH,w=2,d)=>(G._r(a),G._r(b),`<path data-c="${(a[0]+b[0])/2},${(a[1]+b[1])/2}" d="M${a} L${b}" fill="none" stroke="${s}" stroke-width="${w}"${d?` stroke-dasharray="${d}"`:''}/>`),
  ra:(v,a,b,s=13)=>{const la=G.dist(v,a)||1,lb=G.dist(v,b)||1,k=Math.min(s,la*.35,lb*.35),i=[(a[0]-v[0])/la*k,(a[1]-v[1])/la*k],j=[(b[0]-v[0])/lb*k,(b[1]-v[1])/lb*k];
   return `<path data-c="${v[0]+(i[0]+j[0])*.6},${v[1]+(i[1]+j[1])*.6}" d="M${v[0]+i[0]} ${v[1]+i[1]} L${v[0]+i[0]+j[0]} ${v[1]+i[1]+j[1]} L${v[0]+j[0]} ${v[1]+j[1]}" fill="none" stroke="${WH}" stroke-width="1.5"/>`},
  dot:(v,c=WH)=>(G._r(v),`<circle data-c="${v[0]},${v[1]}" cx="${v[0]}" cy="${v[1]}" r="3.5" fill="${c}"/>`),
  txt:(t,v,dx,dy,c=WH,an='middle')=>{G._r(v);if(dx==null||dy==null||isNaN(dx)||isNaN(dy)){const o=G._c(),vx=v[0]-o[0],vy=v[1]-o[1],l=Math.hypot(vx,vy)||1;dx=vx/l*22;dy=vy/l*22+7}
   return `<text x="${v[0]+dx}" y="${v[1]+dy}" text-anchor="${an}" fill="${c}">${t}</text>`},
  lbl:(t,v,c=WH)=>G.txt(t,v,null,null,c),
  dot2:(a,b)=>a[0]*b[0]+a[1]*b[1],
  // точные построения (чтобы модель не считала координаты вручную)
  mid:(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2],
  lerp:(a,b,t=.5)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t],
  dist:(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]),
  foot:(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],d=dx*dx+dy*dy||1,t=((p[0]-a[0])*dx+(p[1]-a[1])*dy)/d;return[a[0]+t*dx,a[1]+t*dy]},
  cross:(a,b,c,d)=>{const r=[b[0]-a[0],b[1]-a[1]],s=[d[0]-c[0],d[1]-c[1]],det=r[0]*s[1]-r[1]*s[0]||1e-9,t=((c[0]-a[0])*s[1]-(c[1]-a[1])*s[0])/det;return[a[0]+t*r[0],a[1]+t*r[1]]},
  tri:(a,b,c,A=[60,260],U=1)=>{const B=[A[0]+c*U,A[1]],x=(b*b+c*c-a*a)/(2*c),y=Math.sqrt(Math.max(0,b*b-x*x));return[A,B,[A[0]+x*U,A[1]-y*U]]},
  incenter:(A,B,C)=>{const a=G.dist(B,C),b=G.dist(A,C),c=G.dist(A,B),p=a+b+c||1;return[(a*A[0]+b*B[0]+c*C[0])/p,(a*A[1]+b*B[1]+c*C[1])/p]},
  inradius:(A,B,C)=>{const a=G.dist(B,C),b=G.dist(A,C),c=G.dist(A,B),s=(a+b+c)/2;return Math.sqrt(Math.max(0,s*(s-a)*(s-b)*(s-c)))/(s||1)},
  circum:(A,B,C)=>{const D=2*(A[0]*(B[1]-C[1])+B[0]*(C[1]-A[1])+C[0]*(A[1]-B[1]))||1e-9,a2=A[0]*A[0]+A[1]*A[1],b2=B[0]*B[0]+B[1]*B[1],c2=C[0]*C[0]+C[1]*C[1],
   O=[(a2*(B[1]-C[1])+b2*(C[1]-A[1])+c2*(A[1]-B[1]))/D,(a2*(C[0]-B[0])+b2*(A[0]-C[0])+c2*(B[0]-A[0]))/D];return[O,G.dist(O,A)]},
  // окружность, дуга угла, стрелка, размерная линия
  circle:(c,r,f='none',s=WH,w=2)=>(G._r([c[0]-r,c[1]-r]),G._r([c[0]+r,c[1]+r]),`<path data-c="${c[0]},${c[1]}" d="M${c[0]-r} ${c[1]} A${r} ${r} 0 1 1 ${c[0]+r} ${c[1]} A${r} ${r} 0 1 1 ${c[0]-r} ${c[1]} Z" fill="${f}" stroke="${s}" stroke-width="${w}"/>`),
  arc:(v,a,b,r=26,s=WH,w=1.5)=>{const R=Math.min(r,G.dist(v,a)*.42,G.dist(v,b)*.42),t1=Math.atan2(a[1]-v[1],a[0]-v[0]),t2=Math.atan2(b[1]-v[1],b[0]-v[0]),d=(((t2-t1)%(2*Math.PI))+3*Math.PI)%(2*Math.PI)-Math.PI,tm=t1+d/2;
   return `<path data-c="${v[0]+R*Math.cos(tm)},${v[1]+R*Math.sin(tm)}" d="M${v[0]+R*Math.cos(t1)} ${v[1]+R*Math.sin(t1)} A${R} ${R} 0 0 ${d>0?1:0} ${v[0]+R*Math.cos(t2)} ${v[1]+R*Math.sin(t2)}" fill="none" stroke="${s}" stroke-width="${w}"/>`},
  arrow:(a,b,s=WH,w=2,h=11)=>{const l=G.dist(a,b)||1,u=[(b[0]-a[0])/l,(b[1]-a[1])/l],e=[b[0]-u[0]*h,b[1]-u[1]*h],n=[-u[1]*h*.4,u[0]*h*.4];
   return G.seg(a,e,s,w)+`<path d="M${b} L${e[0]+n[0]} ${e[1]+n[1]} L${e[0]-n[0]} ${e[1]-n[1]} Z" fill="${s}" stroke="${s}" stroke-width="1" stroke-linejoin="round"/>`},
  dim:(a,b,off=34,t='',c=MU)=>{G._r(a);G._r(b);const l=G.dist(a,b)||1,u=[(b[0]-a[0])/l,(b[1]-a[1])/l],ab=G.mid(a,b),o=G._c();
   let n=[-u[1],u[0]];const d=n[0]*(ab[0]-o[0])+n[1]*(ab[1]-o[1]);if(d<-1)n=[-n[0],-n[1]];else if(Math.abs(d)<=1&&off<0)n=[-n[0],-n[1]];
   const D=Math.abs(off)||34,p=v=>[v[0]+n[0]*D,v[1]+n[1]*D],pa=p(a),pb=p(b),m=G.mid(pa,pb);
   const wx=Math.max(15,String(t).length*7+10),wy=14,g=Math.min(l*.35,1/Math.hypot(u[0]/wx,u[1]/wy)),ml=[m[0]-u[0]*g,m[1]-u[1]*g],mr=[m[0]+u[0]*g,m[1]+u[1]*g];
   const tc=c===BR?BR:WH,tk=v=>`<path data-tk="1" d="M${v[0]-n[0]*5} ${v[1]-n[1]*5} L${v[0]+n[0]*5} ${v[1]+n[1]*5}" fill="none" stroke="${c}" stroke-width="1.2"/>`;
   return `<g data-c="${m[0]},${m[1]}">`+G.seg(ml,pa,c,1.2)+G.seg(mr,pb,c,1.2)+tk(pa)+tk(pb)+`<g font-size="20"><text x="${m[0]}" y="${m[1]}" text-anchor="middle" dominant-baseline="central" fill="${tc}">${t}</text></g></g>`}
};
  function boot(E,S){
    if(!E||!S||window.__ponder)return;
    if(!document.getElementById('app'))document.body.insertAdjacentHTML('afterbegin',"<div id=\"app\" class=\"m-scene\">\n<header><div class=\"br\"><div class=\"ic\"><svg viewBox=\"0 0 20 20\" width=\"20\" height=\"20\"><path d=\"M3 16 L17 16 L6 5 Z\" fill=\"none\" stroke=\"#d9a441\" stroke-width=\"1.5\"/></svg></div><div><div class=\"m\" id=\"tag\"></div><div class=\"tt\" id=\"ttl\"></div></div></div>\n<div class=\"seg\"><i id=\"sw\"></i><button class=\"t on\" data-m=\"scene\">1 · Stage</button><button class=\"t\" data-m=\"razbor\">2 · Breakdown</button><button class=\"t\" data-m=\"konspekt\">3 · Summary</button></div></header>\n<main>\n<div class=\"pane ps\"><div id=\"stage\"><div id=\"svgw\" class=\"sv\"></div><div id=\"leader\"><div id=\"dot\"></div></div><div class=\"p\" id=\"plq\"></div></div></div>\n<div class=\"pane pn\"><aside id=\"notes\"></aside></div>\n<div class=\"pane pd\"><div id=\"doc\"></div></div>\n<div class=\"pane pc\"><aside id=\"chat\"><div class=\"ch\"><span class=\"m\" id=\"ch-a\">ASK · AI</span><span class=\"m\" id=\"ch-c\">Q · close</span></div><div class=\"cx\"><i></i><span class=\"m\" id=\"ctx\" style=\"color:var(--tx)\"></span></div>\n<div id=\"log\"></div><div class=\"qa\"></div>\n<div class=\"in\"><input id=\"inp\" placeholder=\"Ask about this step…\" autocomplete=\"off\"><button id=\"snd\">↵</button></div></aside></div>\n</main>\n<footer><button class=\"b\" id=\"bp\" title=\"Previous\">‹<i>←</i></button><button class=\"b\" id=\"bn\" title=\"Next\">›<i>→</i></button><button class=\"b\" id=\"br\" title=\"Replay\">↻<i>S</i></button><button class=\"b\" id=\"bq\" title=\"Ask\">?<i>Q</i></button>\n<div id=\"tl\"><div class=\"tr\"></div><div id=\"fl\"></div><div id=\"mk\"></div></div><div class=\"m\" id=\"lbl\"></div></footer></div>");
    const G=window.G,A=window.A,BR=window.BR,WH=window.WH,MU=window.MU,FL=window.FL,fr=window.fr;
    // ===== ENGINE: data normalization, 10-language i18n with English fallback, retained SVG DOM & animations =====
const I18N={
  en:{s1:'1 · Stage',s2:'2 · Breakdown',s3:'3 · Summary',ask:'ASK · AI',cls:'Q · close',ph:'Ask about this step…',b:['Previous','Next','Replay','Ask'],st:(i,n)=>`Step ${i} of ${n}`,nh:n=>`Breakdown · ${n} steps`,sum:'Summary',thk:'… thinking',err:'Could not get a response. Please try again in a moment.',ok:'✓ construction and answer verified',er:'✗ verification failed',tg:'Breakdown',tt:'Problem',q:['Explain simpler','Why is that?','Similar problem'],sw:'step'},
  es:{s1:'1 · Escena',s2:'2 · Desglose',s3:'3 · Resumen',ask:'PREGUNTAR · IA',cls:'Q · cerrar',ph:'Pregunta sobre este paso…',b:['Anterior','Siguiente','Repetir','Preguntar'],st:(i,n)=>`Paso ${i} de ${n}`,nh:n=>`Explicación · ${n} pasos`,sum:'Resumen',thk:'… pensando',err:'No se pudo obtener respuesta. Inténtalo de nuevo en unos segundos.',ok:'✓ construcción y respuesta verificadas',er:'✗ error de verificación',tg:'Desglose',tt:'Problema',q:['Explícalo más simple','¿Por qué es así?','Problema similar'],sw:'paso'},
  zh:{s1:'1 · 演示',s2:'2 · 解析',s3:'3 · 讲义',ask:'提问 · AI',cls:'Q · 关闭',ph:'询问关于这一步的问题…',b:['上一步','下一步','重播','提问'],st:(i,n)=>`第 ${i} / ${n} 步`,nh:n=>`详细解析 · 共 ${n} 步`,sum:'讲义',thk:'… 思考中',err:'暂时无法获取回答，请稍后再试。',ok:'✓ 作图与答案已验证',er:'✗ 验证未通过',tg:'解析',tt:'题目',q:['讲得更简单些','为什么会这样？','类似题目'],sw:'步'},
  pt:{s1:'1 · Cena',s2:'2 · Análise',s3:'3 · Resumo',ask:'PERGUNTAR · IA',cls:'Q · fechar',ph:'Pergunte sobre este passo…',b:['Anterior','Próximo','Repetir','Perguntar'],st:(i,n)=>`Passo ${i} de ${n}`,nh:n=>`Explicação · ${n} passos`,sum:'Resumo',thk:'… pensando',err:'Não foi possível obter resposta. Tente novamente em instantes.',ok:'✓ construção e resposta verificadas',er:'✗ erro na verificação',tg:'Análise',tt:'Problema',q:['Explique mais simples','Por que isso acontece?','Problema semelhante'],sw:'passo'},
  ru:{s1:'1 · Сцена',s2:'2 · Разбор',s3:'3 · Конспект',ask:'СПРОСИТЬ · ИИ',cls:'Q · закрыть',ph:'Спросите про этот шаг…',b:['Назад','Вперёд','Сначала','Спросить'],st:(i,n)=>`Шаг ${i} из ${n}`,nh:n=>`Пояснения · ${n} шагов`,sum:'Конспект',thk:'… думаю',err:'Не удалось получить ответ. Попробуйте повторить вопрос через пару секунд.',ok:'✓ построение и ответ проверены',er:'✗ ошибка проверки',tg:'Разбор',tt:'Задача',q:['Объясни проще','Почему так?','Похожая задача'],sw:'шаг'},
  uk:{s1:'1 · Сцена',s2:'2 · Розбір',s3:'3 · Конспект',ask:'ЗАПИТАТИ · ШІ',cls:'Q · закрити',ph:'Запитайте про цей крок…',b:['Назад','Далі','Спочатку','Запитати'],st:(i,n)=>`Крок ${i} з ${n}`,nh:n=>`Пояснення · ${n} кроків`,sum:'Конспект',thk:'… думаю',err:'Не вдалося отримати відповідь. Спробуйте повторити запитання за кілька секунд.',ok:'✓ побудову та відповідь перевірено',er:'✗ помилка перевірки',tg:'Розбір',tt:'Задача',q:['Поясни простіше','Чому саме так?','Схожа задача'],sw:'крок'},
  ja:{s1:'1 · ステージ',s2:'2 · 解説',s3:'3 · まとめ',ask:'質問する · AI',cls:'Q · 閉じる',ph:'このステップについて質問…',b:['前へ','次へ','最初から','質問'],st:(i,n)=>`ステップ ${i} / ${n}`,nh:n=>`解説 · 全 ${n} ステップ`,sum:'まとめ',thk:'… 考え中',err:'応答を取得できませんでした。もう一度お試しください。',ok:'✓ 作図と解答を検証済み',er:'✗ 検証エラー',tg:'解説',tt:'問題',q:['もっと簡単に説明して','なぜそうなるの？','類題を見せて'],sw:'ステップ'},
  de:{s1:'1 · Szene',s2:'2 · Analyse',s3:'3 · Skript',ask:'FRAGEN · KI',cls:'Q · schließen',ph:'Frage zu diesem Schritt…',b:['Zurück','Weiter','Neu starten','Fragen'],st:(i,n)=>`Schritt ${i} von ${n}`,nh:n=>`Erklärungen · ${n} Schritte`,sum:'Skript',thk:'… denke nach',err:'Keine Antwort erhalten. Bitte versuche es gleich noch einmal.',ok:'✓ Konstruktion und Ergebnis geprüft',er:'✗ Prüfungsfehler',tg:'Analyse',tt:'Aufgabe',q:['Einfacher erklären','Warum ist das so?','Ähnliche Aufgabe'],sw:'Schritt'},
  fr:{s1:'1 · Scène',s2:'2 · Analyse',s3:'3 · Résumé',ask:'DEMANDER · IA',cls:'Q · fermer',ph:'Posez une question sur cette étape…',b:['Précédent','Suivant','Rejouer','Demander'],st:(i,n)=>`Étape ${i} sur ${n}`,nh:n=>`Explications · ${n} étapes`,sum:'Résumé',thk:'… réflexion',err:'Impossible d’obtenir une réponse. Réessayez dans un instant.',ok:'✓ construction et réponse vérifiées',er:'✗ erreur de vérification',tg:'Analyse',tt:'Problème',q:['Explique plus simplement','Pourquoi est-ce ainsi ?','Problème similaire'],sw:'étape'},
  ko:{s1:'1 · 스테이지',s2:'2 · 풀이',s3:'3 · 요약 노트',ask:'질문하기 · AI',cls:'Q · 닫기',ph:'이 단계에 대해 질문하기…',b:['이전','다음','다시 재생','질문'],st:(i,n)=>`단계 ${i} / ${n}`,nh:n=>`상세 풀이 · 총 ${n}단계`,sum:'요약 노트',thk:'… 생각 중',err:'응답을 가져오지 못했습니다. 잠시 후 다시 시도해 주세요.',ok:'✓ 작도 및 정답 검증 완료',er:'✗ 검증 오류',tg:'풀이',tt:'문제',q:['더 쉽게 설명해 줘','왜 그렇게 돼?','비슷한 문제'],sw:'단계'}
};
const nt=s=>{try{return typeof s.notes==='function'?s.notes():String(s.notes||'')}catch(_){return ''}};
function detectLang(){
  const raw=[S.title,S.tag,S.given,...(S.steps||[]).map(s=>s.cap+' '+nt(s))].join(' ');
  const hl=String(S.lang||document.documentElement.lang||'').toLowerCase().split(/[-_]/)[0];
  if(/[іїєґІЇЄҐ]/.test(raw))return 'uk';
  if(/[ыэъёЫЭЪЁ]/.test(raw))return 'ru';
  if(/[\uAC00-\uD7AF]/.test(raw))return 'ko';
  if(/[\u3040-\u30FF]/.test(raw))return 'ja';
  if(/[\u4E00-\u9FFF]/.test(raw))return hl==='ja'?'ja':'zh';
  if(I18N[hl])return hl;
  if(/[а-яА-Я]/.test(raw))return 'uk';
  return 'en';
}
const LANG=detectLang(),L10N={...I18N.en,...(I18N[LANG]||{}),...(S.ui||{})};
document.documentElement.lang=LANG;
S.quick=Array.isArray(S.quick)&&S.quick.length?S.quick:L10N.q;
S.hl=Array.isArray(S.hl)?S.hl.filter(Boolean).map(String):[];
E.forEach((e,i)=>{e.id=String(e.id??i);e.at=+e.at||0;const fn=e.f;e.f=o=>{try{return fn(!!o)||''}catch(_){return ''}};e.f(false)});
E.forEach(e=>{e._a=e.f(false);e._b=e.f(true)});
// auto z-ordering: -1 axes/grid -> 0 fills -> 1 lines/arcs -> 2 ticks/dims -> 3 dots & labels
const zRank=h=>/data-bg/.test(h)?-1:/<circle|<text/.test(h)&&!/data-tk/.test(h)?3:/data-tk/.test(h)?2:/fill="(?!none)[^"]+"/.test(h)&&!/stroke="(?!none)[^"]+"/.test(h)?0:1;
E.sort((a,b)=>zRank(a._a||a._b)-zRank(b._a||b._b)||a.at-b.at);
const eIds=new Set(E.map(e=>e.id));
S.steps.forEach((st,i)=>{st.cap=String(st.cap||'');st.focus=Array.isArray(st.focus)?st.focus.map(String):st.focus?[String(st.focus)]:[];
  if(!st.anchor||!eIds.has(String(st.anchor)))st.anchor=st.focus.find(id=>eIds.has(id))||(E.filter(e=>e.at<=i).pop()||E[0])?.id});
const N=S.steps.length,$=s=>document.querySelector(s),app=$('#app');
// localize static shell UI
$('.t[data-m="scene"]').textContent=L10N.s1;$('.t[data-m="razbor"]').textContent=L10N.s2;$('.t[data-m="konspekt"]').textContent=L10N.s3;
$('#ch-a').textContent=L10N.ask;$('#ch-c').textContent=L10N.cls;$('#inp').placeholder=L10N.ph;
['#bp','#bn','#br','#bq'].forEach((id,i)=>$(id).title=L10N.b[i]);
const NS='http://www.w3.org/2000/svg',OUT='cubic-bezier(.22,1,.36,1)',IO='cubic-bezier(.65,0,.35,1)',POP='cubic-bezier(.34,1.56,.64,1)';
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,D=ms=>RM?0:ms;
let cur=0,mode='scene',timer=null,hist=[],first=true;
const chkFn=typeof check==='function'?check:typeof window.check==='function'?window.check:null;
const noteHtml=(s,i)=>{let h=nt(s);if(i===N-1&&chkFn&&!/class=["']ok["']/.test(h)){let ok=false;try{ok=!!chkFn()}catch(_){}h+=`<span class="ok">${ok?L10N.ok:L10N.er}</span>`}return h};
const fadeTo=(el,to,ms)=>{const from=+getComputedStyle(el).opacity;el.getAnimations().forEach(a=>a.cancel());el.style.opacity=to;
  if(D(ms))el.animate([{opacity:from},{opacity:to}],{duration:D(ms),easing:IO})};
function fitVB(){const s=document.createElementNS(NS,'svg');s.setAttribute('class','sv');s.setAttribute('style','position:absolute;visibility:hidden;width:0;height:0');
  s.innerHTML='<g>'+E.map(e=>e._a+e._b).join('')+'</g>';document.body.appendChild(s);const b=s.firstChild.getBBox();s.remove();const m=Math.max(28,Math.hypot(b.width,b.height)*.06);
  const w=Math.max(500,(b.width||200)+2*m),h=Math.max(320,(b.height||200)+2*m),cx=b.x+(b.width||200)/2,cy=b.y+(b.height||200)/2;
  return `${cx-w/2} ${cy-h/2} ${w} ${h}`}
const VB=fitVB();
const vis=(e,i)=>e.at<=i&&(!e.only||S.steps[i].focus.includes(e.id));
function svgStatic(i){const foc=S.steps[i].focus;
  return `<svg viewBox="${VB}" preserveAspectRatio="xMidYMid meet">`+E.filter(e=>vis(e,i)).map(e=>`<g>${foc.includes(e.id)?e._b:e._a}</g>`).join('')+`</svg>`}
const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox',VB);svg.setAttribute('preserveAspectRatio','xMidYMid meet');
const defs=document.createElementNS(NS,'defs');svg.appendChild(defs);$('#svgw').appendChild(svg);
const layer=h=>{const l=document.createElementNS(NS,'g');l.innerHTML=h;return l};
const L=E.map(e=>{const g=document.createElementNS(NS,'g');g.id='e-'+e.id;g.style.display='none';svg.appendChild(g);
  const a=e._a,b=e._b,lo=layer(a),lh=a===b?null:layer(b);g.appendChild(lo);if(lh){lh.style.opacity=0;g.appendChild(lh)}
  return{e,g,lo,lh,on:false,hot:false}});
let mid=0;
function reveal(p,delay){
  if(!p.hasAttribute('stroke-dasharray')){p.setAttribute('pathLength',1);
    p.animate([{strokeDasharray:'1 1',strokeDashoffset:1},{strokeDasharray:'1 1',strokeDashoffset:0}],{duration:D(800),delay,easing:OUT,fill:'backwards'});return}
  const id='mk'+(mid++),m=document.createElementNS(NS,'mask');m.setAttribute('id',id);m.setAttribute('maskUnits','userSpaceOnUse');
  ['x','y'].forEach(k=>m.setAttribute(k,-1e5));['width','height'].forEach(k=>m.setAttribute(k,2e5));
  const c=document.createElementNS(NS,'path');c.setAttribute('d',p.getAttribute('d'));c.setAttribute('pathLength',1);c.setAttribute('stroke','#fff');c.setAttribute('stroke-width',12);c.setAttribute('fill','none');
  m.appendChild(c);defs.appendChild(m);p.setAttribute('mask',`url(#${id})`);
  const a=c.animate([{strokeDasharray:'1 1',strokeDashoffset:1},{strokeDasharray:'1 1',strokeDashoffset:0}],{duration:D(800),delay,easing:OUT,fill:'both'});
  a.onfinish=()=>{p.removeAttribute('mask');m.remove()}}
function enter(l,delay){const g=l.g;g.getAnimations({subtree:true}).forEach(a=>a.cancel());g.style.display='';l.on=true;if(!D(1))return;
  g.animate([{opacity:0},{opacity:1}],{duration:D(420),delay,easing:IO,fill:'backwards'});
  g.querySelectorAll('path').forEach(p=>{if(p.dataset.tk)p.animate([{opacity:0},{opacity:1}],{duration:D(260),delay:delay+340,easing:IO,fill:'backwards'});
    else if(p.getAttribute('stroke')!=='none'&&p.getAttribute('stroke-width')!=='0')reveal(p,delay)});
  g.querySelectorAll('circle').forEach(c=>c.animate([{transform:'scale(0)'},{transform:'scale(1)'}],{duration:D(420),delay:delay+220,easing:POP,fill:'backwards'}));
  g.querySelectorAll('text').forEach(t=>t.animate([{transform:'scale(.84)',opacity:0},{transform:'none',opacity:1}],{duration:D(460),delay:delay+80,easing:OUT,fill:'backwards'}))}
function leave(l){l.on=false;const g=l.g,a=g.animate([{opacity:1},{opacity:0}],{duration:D(260),easing:IO,fill:'forwards'});
  a.onfinish=()=>{if(!l.on)g.style.display='none';a.cancel()}}
function heat(l,hot,anim){if(!l.lh||l.hot===hot)return;l.hot=hot;const ms=anim?460:0;
  fadeTo(l.lh,hot?1:0,ms);l.lo.getAnimations().forEach(a=>a.cancel());l.lo.style.opacity=hot?0:1;if(hot&&D(ms))l.lo.animate([{opacity:1},{opacity:1}],{duration:ms})}
function sync(){const foc=S.steps[cur].focus;let k=0;
  L.forEach(l=>{const want=vis(l.e,cur),hot=foc.includes(l.e.id);
    if(want&&!l.on){heat(l,hot,false);enter(l,k++*110)}else if(!want&&l.on)leave(l);else if(want)heat(l,hot,true)})}
function place(){const pl=$('#plq'),ld=$('#leader');if(mode!=='scene'){ld.style.opacity=0;svg.querySelectorAll('circle').forEach(ci=>ci.style.opacity='');return}
  const st=S.steps[cur],el=$('#e-'+st.anchor);if(!el&&!st.pt)return;const s=$('#stage').getBoundingClientRect();let ax,ay;
  const dc=st.pt||(el&&el.querySelector('[data-c]')?.dataset.c.split(',').map(Number));
  if(dc&&isFinite(dc[0])&&isFinite(dc[1])){const q=svg.createSVGPoint();q.x=dc[0];q.y=dc[1];const c=q.matrixTransform(svg.getScreenCTM());ax=c.x-s.left;ay=c.y-s.top;
    svg.querySelectorAll('circle').forEach(ci=>{const m=Math.hypot(+ci.getAttribute('cx')-dc[0],+ci.getAttribute('cy')-dc[1])<3;ci.style.opacity=m?0:''})}
  else{svg.querySelectorAll('circle').forEach(ci=>ci.style.opacity='');const r=el.getBoundingClientRect();ax=r.left+r.width/2-s.left;ay=r.top+r.height/2-s.top}
  const ph=pl.offsetHeight,x0=pl.offsetLeft+pl.offsetWidth,cy=Math.max(16+ph/2,Math.min(s.height-ph/2-16,ay));
  pl.style.top=cy+'px';
  if(ax>x0){ld.style.top=ay+'px';ld.style.width=ax-x0+'px';ld.style.opacity=1}
  else{ld.style.width='0px';ld.style.opacity=0}}
const hlText=(cap,hl)=>hl.reduce((t,w)=>{const esc=w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return t.replace(new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`,'gu'),`<span class="k">${w}</span>`)},cap);
function setPlaque(html){const p=$('#plq');if(p.dataset.h===html)return;p.dataset.h=html;p.getAnimations().forEach(a=>a.cancel());p.innerHTML=html;
  if(D(1)&&!first&&mode==='scene')p.animate([{opacity:0},{opacity:1}],{duration:D(380),easing:IO})}
function render(){const st=S.steps[cur];
  setPlaque(hlText(st.cap,S.hl));
  sync();
  document.querySelectorAll('.st').forEach((e,i)=>e.classList.toggle('on',i===cur));
  const on=$('.st.on');if(on&&mode==='razbor')reveal2(!first);
  const pct=N>1?cur/(N-1)*100:100;
  $('#fl').style.width=pct+'%';$('#mk').style.left=pct+'%';
  document.querySelectorAll('.tk').forEach((e,i)=>e.classList.toggle('d',i<=cur));
  const stepTxt=`${L10N.st(cur+1,N)} · ${st.cap}`;
  $('#lbl').textContent=stepTxt;$('#ctx').textContent=stepTxt;
  requestAnimationFrame(place);first=false}
function go(i){i=Math.max(0,Math.min(N-1,i));if(i===cur)return;cur=i;render()}
function reveal2(smooth){const n=$('#notes'),on=$('.st.on');if(!on)return;n.scrollTo({top:Math.max(0,on.offsetTop-(n.clientHeight-on.offsetHeight)/2),behavior:smooth&&!RM?'smooth':'auto'})}
function track(ms){const s=$('#stage'),id=++tr;s.classList.add('fm');const t0=performance.now();(function f(){place();if(id!==tr)return;if(performance.now()-t0<ms)requestAnimationFrame(f);else s.classList.remove('fm')})()}
let tr=0;
function moveSw(anim){const b=$('.t.on'),w=$('#sw');w.classList.toggle('a',!!anim);w.style.left=b.offsetLeft+'px';w.style.width=b.offsetWidth+'px'}
function setMode(m){if(m===mode)return;mode=m;app.className=(app.classList.contains('chat-on')?'chat-on ':'')+'m-'+m;
  document.querySelectorAll('.t[data-m]').forEach(b=>b.classList.toggle('on',b.dataset.m===m));moveSw(true);track(900);if(m==='razbor')reveal2(false)}
function toggleChat(){const open=app.classList.toggle('chat-on');$('#bq').classList.toggle('on',open);
  if(!open)$('#inp').blur();track(900)}
function play(){stop();cur=-1;go(0);$('#br').classList.add('on');timer=setInterval(()=>{if(cur>=N-1)return stop();go(cur+1)},3600)}
function stop(){clearInterval(timer);timer=null;$('#br').classList.remove('on')}
$('#tag').textContent=S.tag||L10N.tg;$('#ttl').textContent=S.title||L10N.tt;
for(let i=0;i<N;i++){const k=document.createElement('div');k.className='tk';k.style.left=`calc(${(N>1?i/(N-1)*100:0)}% - 1px)`;$('#tl').appendChild(k)}
$('#notes').innerHTML=`<div class="nh m">${L10N.nh(N)}</div>`+S.steps.map((s,i)=>`<div class="st" data-i="${i}"><span class="m k">${String(i+1).padStart(2,'0')}</span><div>${noteHtml(s,i)}</div></div>`).join('');
$('#doc').innerHTML=`<div class="dc"><div class="m">${L10N.sum} · ${S.tag||L10N.tg}</div><h1>${S.title||L10N.tt}</h1>`+S.steps.map((s,i)=>`<section class="row"><span class="m k">${String(i+1).padStart(2,'0')}</span><div><div class="m">${s.cap}</div>${noteHtml(s,i)}</div><div class="th">${svgStatic(i)}</div></section>`).join('')+`</div>`;
if('IntersectionObserver'in window&&!RM){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){io.unobserve(x.target);x.target.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:600,easing:OUT,fill:'backwards'})}}),{root:$('#doc'),threshold:.15});
  document.querySelectorAll('.row').forEach(r=>io.observe(r))}
document.querySelectorAll('.t[data-m]').forEach(b=>b.onclick=()=>setMode(b.dataset.m));
$('#bp').onclick=()=>{stop();go(cur-1)};$('#bn').onclick=()=>{stop();go(cur+1)};$('#br').onclick=play;$('#bq').onclick=toggleChat;
$('#notes').onclick=e=>{const s=e.target.closest('.st');if(s){stop();go(+s.dataset.i)}};
$('#tl').onclick=e=>{const r=$('#tl').getBoundingClientRect();stop();go(Math.round((e.clientX-r.left)/r.width*(N-1)))};
addEventListener('resize',place);if('ResizeObserver'in window)new ResizeObserver(place).observe($('#stage'));
addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey)return;const c=e.code,k=e.key;
  if(e.target.tagName==='INPUT'){if(k==='Escape'||(c==='KeyQ'&&!e.target.value)){e.preventDefault();e.target.blur();if(app.classList.contains('chat-on'))toggleChat()}return}
  if(k==='ArrowRight'||c==='KeyD'){stop();go(cur+1)}else if(k==='ArrowLeft'||c==='KeyA'){stop();go(cur-1)}else if(k==='Home'){stop();go(0)}else if(k==='End'){stop();go(N-1)}else if(c==='KeyS')play();
  else if(c==='KeyQ'){e.preventDefault();toggleChat()}else if(k===' '){e.preventDefault();timer?stop():play()}else if(c==='Digit1')setMode('scene');else if(c==='Digit2')setMode('razbor');else if(c==='Digit3')setMode('konspekt')});
addEventListener('pointerdown',()=>window.focus());
window.__ponder={version:'1.2.0',go,setMode,N,lang:LANG,get cur(){return cur}};
requestAnimationFrame(()=>{moveSw(false);requestAnimationFrame(()=>$('#sw').classList.add('a'))});addEventListener('resize',()=>moveSw(false));
    // ===== AI TUTOR CHAT: localized context-aware Gemini API calls inside Canvas =====
const esc=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const clean=t=>t.replace(/^(Конечно|Отличный вопрос|Хороший вопрос|Звісно|Чудове запитання|Sure|Of course|Great question|Certainly|¡Claro|Por supuesto|Bien sûr|Natürlich|もちろん|물론이죠|当然)[!,.:\s]*/i,'').replace(/\$/g,'').replace(/\\sqrt\{([^}]*)\}/g,'√($1)').replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g,'($1)/($2)').replace(/\\cdot/g,'·').replace(/\\times/g,'×').replace(/\\([a-zA-Z]+)/g,'$1').replace(/[{}]/g,'').trim();
const fmt=t=>esc(clean(t)).replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/^\* /gm,'• ').replace(/→\s*(?:step|paso|passo|schritt|étape|шаг\w*|крок\w*|ステップ|단계|第)?\s*(\d+)\s*(?:步|단계)?/gi,(_,n)=>`<a class="lk" data-s="${n}">→ ${L10N.sw} ${n}</a>`).replace(/\n/g,'<br>');
function say(cls,html){const d=document.createElement('div');d.className=cls;d.innerHTML=html;$('#log').appendChild(d);$('#log').scrollTop=1e9;
  if(D(1))d.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'none'}],{duration:D(380),easing:OUT});return d}
async function ask(text){text=text.trim();if(!text)return;$('#inp').value='';say('q','› '+esc(text));const w=say('','<span class="m k">'+L10N.thk+'</span>');
  const pulse=D(1)?w.animate([{opacity:.35},{opacity:1}],{duration:700,iterations:Infinity,direction:'alternate',easing:IO}):null;
  const st=S.steps[cur],plain=nt(st).replace(/<[^>]+>/g,' ');
  const sys=`You are a math tutor inside an interactive step-by-step walkthrough. Problem: ${S.title}, given: ${S.given}. Currently viewing step ${cur+1} of ${N}: "${st.cap}". Step explanation: ${plain}. Respond strictly in the same language as the user's question (or the problem language "${LANG}" if ambiguous). Start directly with the explanation — never use conversational filler like "Sure!", "Great question!", or "Of course!". Explain clearly and thoroughly without cutting important details. Use plain text without Markdown headers or LaTeX: write powers and roots with Unicode symbols (², √, ·). When referring to another step, write exactly "→ ${L10N.sw} 3".`;
  hist.push({role:'user',parts:[{text}]});
  try{const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({contents:hist,systemInstruction:{parts:[{text:sys}]}})});
   const j=await r.json(),a=j?.candidates?.[0]?.content?.parts?.[0]?.text;if(!a)throw 0;hist.push({role:'model',parts:[{text:a}]});
   pulse&&pulse.cancel();w.innerHTML=fmt(a);if(D(1))w.animate([{opacity:0},{opacity:1}],{duration:D(380),easing:IO})}
  catch(e){hist.pop();pulse&&pulse.cancel();w.innerHTML='<span class="m">'+L10N.err+'</span>'}
  $('#log').scrollTop=1e9}
$('#snd').onclick=()=>ask($('#inp').value);$('#inp').onkeydown=e=>{if(e.key==='Enter')ask($('#inp').value)};
$('.qa').innerHTML=S.quick.map(q=>`<button class="t">${q}</button>`).join('');
document.querySelectorAll('.qa .t').forEach(b=>b.onclick=()=>ask(b.textContent));
$('#log').onclick=e=>{const l=e.target.closest('.lk');if(l){stop();go(+l.dataset.s-1)}};
render();
  }
  window.Ponder={boot};
  function auto(){
    if(window.__ponder)return;
    const e=typeof E!=='undefined'?E:window.E, s=typeof S!=='undefined'?S:window.S;
    if(e&&s)boot(e,s);
  }
  if(document.readyState==='loading')addEventListener('DOMContentLoaded',auto);
  else setTimeout(auto,0);
})();
