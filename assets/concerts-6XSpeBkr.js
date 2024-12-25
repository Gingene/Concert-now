import{i as M,N as l,b4 as f,M as c,a8 as y,a5 as T,K as k,aq as q,a7 as p}from"./index-cUCwgEH4.js";import{h as F}from"./moment-WSJ9un1t.js";const w=()=>{let t;const e=M(null);return{state:t,err:e,timeCountryFilter:async(o,s="",r="",u="",C=1)=>{const d=s==="本日"?"day":s==="本週"?"week":"month",$=F().startOf(d).format("YYYY-MM-DD"),A=F().endOf(d).format("YYYY-MM-DD");let m=(o==="front"?l.concerts:f.concerts)+"?";const P=`start=${$}&end=${A}`,v=`country=${r}`,Y=`q=${u}`,x=`page=${C}`,a=[];return u!==""&&a.push(Y),r!==""&&a.push(v),s!==""&&a.push(P),a.push(x),m+=a.join("&"),new Promise((S,D)=>{c.get(m).then(h=>{t=h.data,S(t)}).catch(h=>{console.error(h),e.value=h,D(e)})})}}},{timeCountryFilter:g}=w(),{getUserSavedAndFollowed:b}=y(),{setIsLoading:i}=T(),{toast:O}=k(),K=q("concerts",{state:()=>({concerts:[],adminConcerts:[],singleConcert:{},pagination:{},timeFactor:"",countryFactor:"",textFactor:"",pageFactor:1}),actions:{searchConcerts:p(function(t){this.textFactor=t,this.getFilterFrontConcerts()},300),searchAdminConcerts:p(function(t){this.textFactor=t,this.getFilterAdminConcerts()},300),getAllConcerts(){this.timeFactor="",this.countryFactor="",this.textFactor="",i(),c.get(l.concerts).then(t=>{this.concerts=t.data.data,this.pagination=t.data.pagination}).catch(t=>{console.error(t)}).finally(()=>{i()})},getFilterFrontConcerts(t,e,n=1){t==="time"&&(e==="all"?this.timeFactor="":this.timeFactor=e),t==="country"&&(e==="all"?this.countryFactor="":this.countryFactor=e),this.pageFactor=n,g("front",this.timeFactor,this.countryFactor,this.textFactor,n).then(o=>{this.concerts=o.data,this.pagination=o.pagination})},getSingleConcert(t,e=null){i(),c.get(`${l.concerts}/${t}`).then(n=>{this.singleConcert=n.data.data,e&&e()}).catch(n=>{console.error(n)}).finally(()=>{i()})},callSaveAction(t){const{savedConcerts:e,AccessToken:n}=y();if(n===void 0)return;let o="";[...e].some(s=>s.id===t)?o="delete":o="post",c[o](`${l.concerts}/${t}/${o==="post"?"save":"unsave"}`).then(s=>{}).then(()=>{b(o),O({title:o==="post"?"已加入收藏":"已取消收藏"})}).catch(s=>{console.error(s)})},getAllAdminConcerts(){i(),c.get(f.concerts).then(t=>{this.adminConcerts=t.data.data.reverse(),this.pagination=t.data.pagination}).catch(t=>{console.error(t)}).finally(()=>{i()})},getFilterAdminConcerts(t,e,n=1){t==="time"&&(e==="全部"?this.timeFactor="":this.timeFactor=e),t==="country"&&(e==="全部"?this.countryFactor="":this.countryFactor=e),this.pageFactor=n,g("admin",this.timeFactor,this.countryFactor,this.textFactor,this.pageFactor).then(o=>{this.adminConcerts=[...o.data].sort((s,r)=>r.id-s.id),this.pagination=o.pagination})}}});export{K as u};