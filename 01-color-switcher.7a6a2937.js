const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let r=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(()=>{d.style.backgroundColor=l(),r=setInterval((()=>{d.style.backgroundColor=l()}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(r),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.7a6a2937.js.map