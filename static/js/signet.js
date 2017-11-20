(function(){var t,n,e,o,r,l,i,A,a,u,g;null!=(null!=(g=window.console)?g.log:void 0)&&(r=function(t){var n,e,o,r;return o=document.head||document.getElementsByTagName("head")[0],n=null!=(r=o.querySelector("meta[name='"+t+"']"))?r.content:void 0,n?(function(){var t,o,r,l;for(r=n.split(","),l=[],t=0,o=r.length;o>t;t++)e=r[t],l.push("function"==typeof e.trim?e.trim():void 0);return l})():void 0},t=r("signet:authors"),l=r("signet:links"),a='400 12px "Helvetica Neue", Helvetica, Arial, sans-serif',12,u=16,A=(function(){var t,n,e,o,r,l;return n=function(){return/MSIE/.test(navigator.userAgent)},t=function(){return/Firefox/.test(navigator.userAgent)},e=function(){return/OPR/.test(navigator.userAgent)&&/Opera/.test(navigator.vendor)},o=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},l=function(){var t;return!!(t=navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/))&&537.38<=parseInt(t[1],10)+parseInt(t[2],10)/100},r=function(){var t;return!!(t=navigator.userAgent.match(/OPR\/(\d+)\./))&&15<=parseInt(t[1],10)},!n()&&!t()&&(!e()||r())&&(!o()||l())})(),n=function(t){var n,e,o,r,l,i,A,a,u;for(i=["log","debug","warn","error"],r={},n={},o=[],e=i.length,A=function(t){return r[t]=console[t],n[t]=function(){return r[t].apply(console,arguments)},console[t]=function(){return void o.push([t,arguments])}},e=a=0,u=i.length;u>a;e=++a)l=i[e],A(l);return setTimeout((function(){var n,e,A,a,u;for(A=0,a=i.length;a>A;A++)l=i[A],console[l]=r[l];for(t(),u=[];o.length;)n=o.shift(),l=n[0],e=n[1],u.push(console[l].apply(console,e));return u}),0)},o=function(){var n,e,o,r,l,i,u,g,c,s,f,h,p,d,v,m,x,E,b,C,w,R,M,B,k,S,z,D,Q;if(null!=t?t.length:void 0){if(A){for(480,u=(null!=(Q=document.body)?Q.clientWidth:void 0)||480,e=20,o=e/2,l=60,h=t.length*e+25,R=14,w=-35,b=-24,i=document.createElement("canvas"),i.height=1e3,i.width=u,c=i.getContext("2d"),c.font=a,s=function(t,n,e,o,r){return c.fillStyle=r,c.fillRect(t,n+R,e,o)},f=function(t,n){return c.fillStyle="#444",c.fillText(t,l+10,n+R)},s(0,-R,u,h,"white"),d=B=0,z=t.length;z>B;d=++B)for(n=t[d],f(n,e*d+14),g=n.replace(/\s/g,""),r=e*d+(e-o)/2,E=k=0,D=g.length;D>k;E=++k)C=g[E],m=Math.floor(l*E/g.length),x=Math.ceil(l*(E+1)/g.length-m),p=(2*C.toLowerCase().charCodeAt(0)+5*g.toLowerCase().charCodeAt(0))%256,s(m,r,x,o,"hsl("+p+", 80%, 80%)");return v="font-size: 0; line-height: "+(h+w)+"px; padding: "+Math.floor(h/2)+"px "+u+"px "+Math.ceil(h/2)+'px 0; background-image: url("'+i.toDataURL()+'"); margin-left: '+b+"px",console.log("%c ",v)}for(console.log("Author"+(1===t.length?"":"s")+":"),M=0,S=t.length;S>M;M++)n=t[M],console.log(n)}},e=function(){var t,n,e,o,r,g,c,s,f,h,p,d,v,m,x,E,b;if(null!=l?l.length:void 0){if(A){for(t={"twitter.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGFBMVEWEu/Tf7fxirPK41vg3nPABj+4omO/+//+b16fMAAAAVklEQVR42lXNQRJEUQRDUSRh/ztu8QZd/46cokrMpz/zMR+CBSwrzFBLlbFDYYbdlLegxFq2crzlTu3MrH6p7hF0onDM4inGtJs+PaK0EdYdA8iD+ekHsEgEIt/uHNUAAAAASUVORK5CYII=","github.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGFBMVEVCQUIsKyu8u7ugn6B7envc29wSERH+/v6nd/awAAAAWklEQVQIHT3BiQ0CQBDEsNkv6b9jEDphR70tqD01Ojyjcfgbc9C9M9sNl4Xz52BTxCdUYH0WAuuzkILz54rKUpnT68Dm2GV0+Lo4TJ820EanqrWhNert6c2pH7EtBBOlbNv9AAAAAElFTkSuQmCC","plus.google.com":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAFVBMVEXic2r88vHLOCDzzMnpoJvVDQDdSzg1eZqZAAAAWklEQVR42lXPORIDQAgDQV3o/082a5x4qhR0QADaajb1hRWy4bhyTEbHMb/rHzHJPIau3bdlG9MDksZSConCRlHFfr7bCTNTerodC+fYmrbTHtUk0I/SfXB9AElwAxEwF7nBAAAAAElFTkSuQmCC"},h=["%c\n","line-height: 0; font-size: 0"],r=x=0,b=l.length;b>x;r=++x){f=l[r],e=f.replace(/(https?:\/\/[^\/]+(\/|$))(.*)/,"$1"),p=f.substr(e.length),o=i(e),d=i(p),g=null;for(n in t)if(c=t[n],new RegExp("^(https?://)?(www.)?"+n+"/","i").test(f)){g=c;break}g?(h[0]+="%c"+f+"%c %c %c\n",s=-o/2):(h[0]+="%c"+f+"\n",s=0),h.push("-webkit-font-smoothing: antialiased; font: "+a+"; margin-left: "+s+"px"),g&&(v=42,s=-d-v,h.push("background: #fff; line-height: "+u+"px; padding: "+(u/2+2)+"px "+v/2+"px "+(u/2+2)+"px "+v/2+"px; font-size: 0; margin-left: "+s+"px"),s=-v/2+2,h.push("background: #fff url("+g+"); line-height: "+u+"px; padding: 11px 14px 3px 0; font-size: 0; margin-left: "+s+"px"),h.push(""))}return console.log.apply(console,h)}for(m=0,E=l.length;E>m;m++)f=l[m],console.log(f)}},i=function(t){var n,e;return n=document.createElement("canvas"),e=n.getContext("2d"),e.font=a,e.measureText(t).width},n((function(){return o(),e()})))}).call(this);
//# sourceMappingURL=signet.js.map