(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("taskInput"),e=document.getElementById("addButton"),n=document.getElementById("list"),o=[];if(console.log(localStorage.getItem("tasks")),localStorage.getItem("tasks")){const t=JSON.parse(localStorage.getItem("tasks"));console.log(t),t.forEach((t=>{let e=document.createElement("li");e.classList.add("liElement"),e.innerHTML=`\n        <span>${t}</span>\n        <button class="editButton">Edit</button>\n        <button class="deleteButton">X</button>\n        `,n.append(e)}))}e.addEventListener("click",(()=>{s(t.value),l(),a()}));const s=t=>{o.push(t),localStorage.setItem("tasks",JSON.stringify(o));let e=document.createElement("li");e.classList.add("liElement"),e.innerHTML=`\n        <span>${t}</span>\n           <button class="editButton">Edit</button>\n            <button class="deleteButton">X</button>\n    `,n.append(e)},l=()=>{document.querySelectorAll(".deleteButton").forEach((t=>{t.addEventListener("click",(function(){const t=this.parentElement.querySelector("span").innerText,e=o.filter((e=>e!==t));localStorage.setItem("tasks",e),console.log(localStorage.getItem("tasks")),this.parentElement.remove()}))}))},a=()=>{document.querySelectorAll(".editButton").forEach((t=>{t.addEventListener("click",(function(){const t=this.parentElement;if("Edit"===this.innerText){this.innerText="Done";const e=t.querySelector("span"),n=e.innerText;e.remove();const o=document.createElement("input");o.value=n,t.prepend(o)}else{this.innerText="Edit";const e=t.querySelector("input"),n=e.value;e.remove();const o=document.createElement("span");o.innerText=n,t.prepend(o)}}))}))}}))})();
//# sourceMappingURL=index.3f6629ceb40d33fe7648.bundle.js.map