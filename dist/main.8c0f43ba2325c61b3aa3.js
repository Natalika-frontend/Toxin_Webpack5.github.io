(()=>{var e,t={4002:(e,t,r)=>{var n,l;n=[r(8934),r(655),r(8482),r(8924),r(6525),r(1009),r(5703),r(1786),r(1387),r(6572),r(8468),r(7881),r(6611),r(2632),r(8123),r(5594),r(8515),r(2365),r(5385),r(7178),r(8853),r(5488),r(7533),r(4581),r(461),r(2889),r(7429),r(8393),r(5356),r(5126),r(7722),r(692),r(4278)],void 0===(l=function(e){"use strict";return e}.apply(t,n))||(e.exports=l)},9666:(e,t,r)=>{"use strict";r(2380),r(7013)},7013:()=>{const e=new Date,t=e.getFullYear(),r=()=>{e.setDate(1);const r=document.querySelector(".calendar__days"),n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),l=new Date(e.getFullYear(),e.getMonth(),0).getDate(),a=e.getDay()-1,o=7-new Date(e.getFullYear(),e.getMonth()+1,0).getDay();document.querySelector(".calendar__year").innerHTML=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][e.getMonth()]+" "+t;let i="";for(let e=a;e>0;e--)i+=`<div class="prev-date">${l-e+1}</div>`;for(let t=1;t<=n;t++)t===(new Date).getDate()&&e.getMonth()===(new Date).getMonth()?i+=`<div class="active">${t}</div>`:i+=`<div>${t}</div>`;for(let e=1;e<=o;e++)i+=`<div class="next-date">${e}</div>`,r.innerHTML=i};document.querySelector(".calendar__prev").addEventListener("click",(()=>{e.setMonth(e.getMonth()-1),r()})),document.querySelector(".calendar__next").addEventListener("click",(()=>{e.setMonth(e.getMonth()+1),r()})),r()},2380:(e,t,r)=>{var n=r(4002),l=document.querySelector(".menu__list");for(let e=0;e<l.children.length;e++)l.children[e].querySelector(".menu__list-link").classList.remove("active"),l.children[e].querySelector(".menu__list-link").onclick=a;function a(){for(let e=0;e<l.children.length;e++)l.children[e].querySelector(".menu__list-link").classList.remove("active"),this.classList.add("active")}n(document).ready((function(){n(".header__burger").click((function(e){n(".header__burger,.menu").toggleClass("active"),n("body").toggleClass("lock")}))}))}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,l,a)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,l,a]=e[d],i=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,l,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[o,i,c]=r,s=0;if(o.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(c)var d=c(n)}for(t&&t(r);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[o[s]]=0;return n.O(d)},r=self.webpackChunktoxin=self.webpackChunktoxin||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=n.O(void 0,[589],(()=>n(9666)));l=n.O(l)})();
//# sourceMappingURL=main.8c0f43ba2325c61b3aa3.js.map