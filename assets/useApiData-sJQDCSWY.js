import{ak as i,I as p,aC as u}from"./index-WSDsTdfa.js";const{setIsLoading:e}=i(),f=()=>{let a;const s=p(null);return{state:a,err:s,httpData:async(n,o,l)=>(e(l),new Promise((r,c)=>{u[n](o).then(t=>{a=t.data,r(a)}).catch(t=>{console.log(t),s.value=t,c(s)}).finally(()=>{e()})}))}};export{f as u};
