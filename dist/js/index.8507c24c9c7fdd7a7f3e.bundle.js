(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){const s=document.querySelectorAll(".board-cell"),c=document.querySelector(".turn"),n=document.querySelector(".reset");function e(s,c,n){this.id=s,this.img=c,this.className=n}const t=new e(1,"images/cross.svg","cross"),i=new e(2,"images/circle.svg","circle");s.forEach((e=>{e.addEventListener("click",(function(){!function(s){1===a?(s.querySelector("img").src=t.img,s.classList.add(t.className)):(s.querySelector("img").src=i.img,s.classList.add(i.className));a=1===a?2:1,c.innerHTML=`Player <span class="active-turn">${a}</span> turn`}(this),function(){const e=[];for(let c=0;c<s.length;c++)e.push(s[c]);e.every((s=>s.classList.contains(t.className)||s.classList.contains(i.className)))&&(c.innerHTML="Draw!",n.classList.add("active"));for(let e=0;e<l.length;e++){let a=s[l[e][0]],o=s[l[e][1]],d=s[l[e][2]];a.classList.contains("cross")&&o.classList.contains("cross")&&d.classList.contains("cross")?(c.innerHTML=`<div class="winner">Player ${t.id} won!</div>`,r([a,o,d]),n.classList.add("active")):a.classList.contains("circle")&&o.classList.contains("circle")&&d.classList.contains("circle")&&(c.innerHTML=`<div class="winner">Player ${i.id} won!</div>`,r([a,o,d]),n.classList.add("active"))}}()}))})),n.addEventListener("click",(function(){location.reload()}));let a=1;c.innerHTML=`Player <span class="active-turn">${a}</span> turn`;const l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function r(s){s.forEach((s=>{s.classList.add("winning-cell")}))}}))})();
//# sourceMappingURL=index.8507c24c9c7fdd7a7f3e.bundle.js.map