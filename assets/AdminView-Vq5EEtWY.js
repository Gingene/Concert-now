import{_ as x,o as l,c as r,a as e,b as s,w as t,u as a,aQ as k,aR as N,D as d,E as _,F as u,r as h,h as b,t as g,aS as S,d as m,K as A,L as R,f as w}from"./index-bAjc-hai.js";const i=c=>(A("data-v-df076906"),c=c(),R(),c),B={class:"lg:hidden"},I=i(()=>e("span",{class:"material-symbols-outlined p-5 lg:p-0"}," menu ",-1)),C={class:"flex flex-col space-x-0 space-y-1"},L=i(()=>e("div",{class:"w-[205px] font-semibold py-8 flex text-xl"},"CNCERTS NOW!",-1)),T=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),V=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),z={class:"hidden lg:flex lg:flex-col lg:space-x-0 lg:space-y-1"},E=i(()=>e("div",{class:"w-[205px] font-semibold pl-5 py-8 flex text-xl"},"CNCERTS NOW!",-1)),D=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),O=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),F={data(){return{sidebarNavItems:[{title:"分析報表",href:"/admin/analysis"},{title:"會員管理",href:"/admin/members"},{title:"評論管理",href:"/admin/comments"},{title:"歌單管理",href:"/admin/playlists"},{title:"設定",href:"/admin/settings"}]}}},W=Object.assign(F,{__name:"AdminSideBar",setup(c){return(p,f)=>{const n=m("RouterLink");return l(),r(u,null,[e("div",B,[s(a(S),null,{default:t(()=>[s(a(k),{class:"lg:hidden"},{default:t(()=>[I]),_:1}),s(a(N),{side:"left"},{default:t(()=>[e("nav",C,[L,s(n,{to:"/admin/concerts"},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[T,_(" 演唱會資訊管理 ")]),_:1})]),_:1}),(l(!0),r(u,null,h(p.sidebarNavItems,o=>(l(),b(n,{key:o.title,to:o.href},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[V,_(" "+g(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1})]),e("nav",z,[E,s(n,{to:"/admin/concerts"},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[D,_(" 演唱會資訊管理 ")]),_:1})]),_:1}),(l(!0),r(u,null,h(p.sidebarNavItems,o=>(l(),b(n,{key:o.title,to:o.href},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[O,_(" "+g(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])],64)}}}),j=x(W,[["__scopeId","data-v-df076906"]]),K={class:"space-x-4 text-end"},Q=e("div",{class:"inline-block"},[e("span",{class:"material-symbols-outlined mr-px"}," account_circle "),e("span",{class:"inline-block align-super"},"管理者")],-1),q=e("span",{class:"material-symbols-outlined"}," logout ",-1),G=e("span",{class:"material-symbols-outlined"}," logout ",-1),H={__name:"AdminNav",setup(c){return(p,f)=>{const n=m("RouterLink");return l(),r("div",K,[Q,s(a(d),{class:"mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50"},{default:t(()=>[q,_("登出 ")]),_:1}),s(a(d),{class:"mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50"},{default:t(()=>[G,s(n,{to:"/"},{default:t(()=>[_(" 回前台(暫時) ")]),_:1})]),_:1})])}}},{toggleDarkTheme:J,toggleTheme:M}=w(),P={components:{AdminSideBar:j,AdminNav:H},mounted(){J(!1),M("theme-admin")}},U={class:"grid grid-cols-5 gap-0 min-h-screen"},X={class:"col-span-5 lg:col-span-4 p-12 bg-primary-foreground"};function Y(c,p,f,n,o,Z){const v=m("AdminSideBar"),y=m("AdminNav"),$=m("RouterView");return l(),r("div",U,[s(v),e("div",X,[s(y),s($)])])}const se=x(P,[["render",Y]]);export{se as default};
