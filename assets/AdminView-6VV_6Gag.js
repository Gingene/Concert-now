import{_ as v,o as l,c as _,a as e,d as s,w as t,u as a,q as k,s as N,k as d,j as r,F as u,r as h,v as A,b as m,h as b,t as g,x as w,y as B,f as S}from"./index-KWujlNXJ.js";const i=c=>(w("data-v-53199dae"),c=c(),B(),c),I={class:"lg:hidden"},R=i(()=>e("span",{class:"material-symbols-outlined p-5 lg:p-0"}," menu ",-1)),V={class:"flex flex-col space-x-0 space-y-1"},L=i(()=>e("div",{class:"w-1/2 py-8 flex"},[e("img",{src:"https://via.placeholder.com/200x50",alt:""})],-1)),z=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),T=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),j={class:"hidden lg:flex lg:flex-col lg:space-x-0 lg:space-y-1"},C=i(()=>e("div",{class:"w-1/2 py-8 flex"},[e("img",{src:"https://via.placeholder.com/200x50",alt:""})],-1)),D=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),F=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),q={data(){return{sidebarNavItems:[{title:"分析報表",href:"/admin/analysis"},{title:"會員管理",href:"/admin/members"},{title:"評論管理",href:"/admin/comments"},{title:"歌單管理",href:"/admin/playlists"},{title:"設定",href:"/admin/settings"}]}}},E=Object.assign(q,{__name:"AdminSideBar",setup(c){return(p,f)=>{const n=m("RouterLink");return l(),_(u,null,[e("div",I,[s(a(A),null,{default:t(()=>[s(a(k),{class:"lg:hidden"},{default:t(()=>[R]),_:1}),s(a(N),null,{default:t(()=>[e("nav",V,[L,s(n,{to:"/admin/concerts"},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[z,r(" 演唱會資訊管理 ")]),_:1})]),_:1}),(l(!0),_(u,null,h(p.sidebarNavItems,o=>(l(),b(n,{key:o.title,to:o.href},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[T,r(" "+g(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1})]),e("nav",j,[C,s(n,{to:"/admin/concerts"},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[D,r(" 演唱會資訊管理 ")]),_:1})]),_:1}),(l(!0),_(u,null,h(p.sidebarNavItems,o=>(l(),b(n,{key:o.title,to:o.href},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[F,r(" "+g(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])],64)}}}),O=v(E,[["__scopeId","data-v-53199dae"]]),G={class:"space-x-4 text-end"},H=e("div",{class:"inline-block"},[e("span",{class:"material-symbols-outlined mr-px"}," account_circle "),e("span",{class:"inline-block align-super"},"管理者")],-1),J=e("span",{class:"material-symbols-outlined"}," logout ",-1),K=e("span",{class:"material-symbols-outlined"}," logout ",-1),M={__name:"AdminNav",setup(c){return(p,f)=>{const n=m("RouterLink");return l(),_("div",G,[H,s(a(d),{class:"mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50"},{default:t(()=>[J,r("登出 ")]),_:1}),s(a(d),{class:"mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50"},{default:t(()=>[K,s(n,{to:"/"},{default:t(()=>[r(" 回前台(暫時) ")]),_:1})]),_:1})])}}},{toggleDarkTheme:P,toggleTheme:Q}=S(),U={components:{AdminSideBar:O,AdminNav:M},mounted(){P(!1),Q("theme-admin")}},W={class:"grid grid-cols-5 gap-0 min-h-screen"},X={class:"col-span-5 lg:col-span-4 p-12 bg-primary-foreground"};function Y(c,p,f,n,o,Z){const x=m("AdminSideBar"),y=m("AdminNav"),$=m("RouterView");return l(),_("div",W,[s(x),e("div",X,[s(y),s($)])])}const se=v(U,[["render",Y]]);export{se as default};
