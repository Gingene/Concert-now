import{j as M,N as l,b9 as F,M as c,ae as C,ab as T,K as b,ax as k,ad as p}from"./index-WU9oAnbs.js";import{h as g}from"./moment-WSJ9un1t.js";const w=()=>{let t;const e=M(null);return{state:t,err:e,timeCountryFilter:async(n,o="",r="",u="",y=1)=>{const d=o==="本日"?"day":o==="本週"?"week":"month",$=g().startOf(d).format("YYYY-MM-DD"),A=g().endOf(d).format("YYYY-MM-DD");let m=(n==="front"?l.concerts:F.concerts)+"?";const P=`start=${$}&end=${A}`,Y=`country=${r}`,v=`q=${u}`,x=`page=${y}`,i=[];return u!==""&&i.push(v),r!==""&&i.push(Y),o!==""&&i.push(P),i.push(x),m+=i.join("&"),new Promise((S,D)=>{c.get(m).then(h=>{t=h.data,S(t)}).catch(h=>{console.error(h),e.value=h,D(e)})})}}},{timeCountryFilter:f}=w(),{getUserSavedAndFollowed:j}=C(),{setIsLoading:a}=T(),{toast:q}=b(),K=k("concerts",{state:()=>({concerts:[],adminConcerts:[],singleConcert:{},pagination:{},timeFactor:"",countryFactor:"",textFactor:"",pageFactor:1}),actions:{searchConcerts:p(function(t){this.textFactor=t,this.getFilterConcerts()},300),searchAdminConcerts:p(function(t){this.textFactor=t,this.getFilterAdminConcerts()},300),getAllConcerts(){a(),c.get(l.concerts).then(t=>{this.concerts=t.data.data,this.pagination=t.data.pagination}).catch(t=>{console.error(t)}).finally(()=>{a()})},getFilterConcerts(t,e,s=1){t==="time"&&(e==="all"?this.timeFactor="":this.timeFactor=e),t==="country"&&(e==="all"?this.countryFactor="":this.countryFactor=e),this.pageFactor=s,f("front",this.timeFactor,this.countryFactor,this.textFactor,s).then(n=>{this.concerts=n.data,this.pagination=n.pagination})},getSingleConcert(t){a(),c.get(`${l.concerts}/${t}`).then(e=>{this.singleConcert=e.data.data}).catch(e=>{console.error(e)}).finally(()=>{a()})},getAllAdminConcerts(){a(),c.get(F.concerts).then(t=>{this.adminConcerts=t.data.data,this.pagination=t.data.pagination}).catch(t=>{console.error(t)}).finally(()=>{a()})},getFilterAdminConcerts(t,e,s=1){t==="time"&&(e==="全部"?this.timeFactor="":this.timeFactor=e),t==="country"&&(e==="全部"?this.countryFactor="":this.countryFactor=e),this.pageFactor=s,f("admin",this.timeFactor,this.countryFactor,this.textFactor,this.pageFactor).then(n=>{this.adminConcerts=[...n.data].sort((o,r)=>r.id-o.id),this.pagination=n.pagination})},callSaveAction(t){const{savedConcerts:e,AccessToken:s}=C();if(s===void 0)return;let n="";[...e].some(o=>o.id===t)?n="delete":n="post",c[n](`${l.concerts}/${t}/${n==="post"?"save":"unsave"}`).then(o=>{}).then(()=>{j(n),q({title:n==="post"?"已加入收藏":"已取消收藏"})}).catch(o=>{console.error(o)})}}});export{K as u};
