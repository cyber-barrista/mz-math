(()=>{var l="side-menu",d=()=>{let t=document.querySelector(".side-menu");if(!t)return;let e=window.location.pathname,o=t.querySelector(`a[href='${e}']`);!o||o.scrollIntoView({block:"center"})},u=()=>{let t=window.localStorage.getItem(l);if(!t)return[];let e=[];try{e=JSON.parse(t)||[]}catch(o){}return e},g=()=>{let t=document.querySelectorAll(".side-menu [data-collapsible-title]"),e=[];for(let o of t){let n=o.getAttribute("data-id")||"";if(!n)continue;let i=o.getAttribute("data-opened")==="true";e.push({id:n,opened:i})}window.localStorage.setItem(l,JSON.stringify(e))},b=()=>{let t=u();if(!!Array.isArray(t))for(let e of t){let o=document.querySelector(`.side-menu [data-id="${e.id}"]`);c(o,e.opened,!1)}},c=(t,e,o)=>{var i;t.setAttribute("data-opened",e.toString());let n=t.querySelector("[data-arrow]");!n||(n.classList.toggle("rotate-90",e),(i=t.nextElementSibling)==null||i.classList.toggle("hidden",!e),o&&g())},r=()=>{let t=document.querySelectorAll(".side-menu [data-collapsible-title]");for(let e of t)e.addEventListener("click",()=>{let o=e.getAttribute("data-opened")==="true";c(e,!o,!0)});b()};var a=()=>{let t=document.getElementById("mobile-menu-btn");if(!t)return;t.addEventListener("click",n=>{n.stopPropagation(),document.body.classList.toggle("mobile-menu-opened")}),document.body.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")});let e=document.getElementById("side-menu");if(!e)return;e.addEventListener("click",n=>{n.stopPropagation()});let o=document.getElementById("mobile-menu-close-btn");!o||o.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")})};var s="mode",m=()=>{let t=window.localStorage.getItem(s)||"light";document.documentElement.classList.toggle("dark",t==="dark");let e=document.getElementById("move-to-dark-mode-btn"),o=document.getElementById("move-to-light-mode-btn"),n=()=>{document.documentElement.classList.add("dark"),e.classList.add("hidden"),o.classList.remove("hidden"),window.localStorage.setItem(s,"dark")},i=()=>{document.documentElement.classList.remove("dark"),o.classList.add("hidden"),e.classList.remove("hidden"),window.localStorage.setItem(s,"light")};t==="dark"?n():i(),e==null||e.addEventListener("click",n),o==null||o.addEventListener("click",i)};var p=()=>{a(),d(),r(),m()};document.addEventListener("DOMContentLoaded",()=>{p()});})();
//# sourceMappingURL=index.1681421636861.js.map
