import{j as l}from"./index-brEfUqJP.js";function m(){const a=l(!0),s=l(""),e=document.querySelector(":root");return{toggleDarkTheme:t=>{a.value=t,a.value?e.classList.add("dark"):e.classList.remove("dark")},toggleTheme:t=>{s.value=t,e.className="",a.value&&(e==null||e.classList.add("dark")),s.value!=="theme-default"&&(e==null||e.classList.add(s.value))}}}export{m as u};
