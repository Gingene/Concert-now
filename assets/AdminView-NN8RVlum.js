import{_ as v,o as l,c as m,a as e,b as s,w as t,u as a,b7 as k,b8 as N,B as d,C as _,F as p,r as b,g as h,t as g,b9 as S,d as u,I as A,J as B,y as C,ac as w,f as I}from"./index-L6S9KTCk.js";const i=c=>(A("data-v-ab856050"),c=c(),B(),c),R={class:"absolute pl-12 pt-12 lg:hidden"},L=i(()=>e("span",{class:"material-symbols-outlined lg:p-0"}," menu ",-1)),O={class:"flex flex-col space-x-0 space-y-1"},T=i(()=>e("div",{class:"w-[205px] font-semibold py-8 flex text-xl"},"CONCERTS NOW.",-1)),V=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),z=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),E={class:"hidden lg:flex lg:flex-col lg:space-x-0 lg:space-y-1"},j=i(()=>e("div",{class:"w-[205px] font-semibold pl-5 py-8 flex text-xl"},"CONCERTS NOW.",-1)),D=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),F=i(()=>e("span",{class:"material-symbols-outlined pe-6"}," location_on ",-1)),W={data(){return{sidebarNavItems:[{title:"分析報表",href:"/admin/analysis"},{title:"會員管理",href:"/admin/members"},{title:"評論管理",href:"/admin/comments"},{title:"歌單管理",href:"/admin/playlists"},{title:"設定",href:"/admin/settings"}]}}},J=Object.assign(W,{__name:"AdminSideBar",setup(c){return(r,f)=>{const n=u("RouterLink");return l(),m(p,null,[e("div",R,[s(a(S),null,{default:t(()=>[s(a(k),{class:"lg:hidden"},{default:t(()=>[L]),_:1}),s(a(N),{side:"left"},{default:t(()=>[e("nav",O,[T,s(n,{to:"/admin/concerts"},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[V,_(" 演唱會資訊管理 ")]),_:1})]),_:1}),(l(!0),m(p,null,b(r.sidebarNavItems,o=>(l(),h(n,{key:o.title,to:o.href},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[z,_(" "+g(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})]),_:1})]),e("nav",E,[j,s(n,{to:"/admin/concerts"},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[D,_(" 演唱會資訊管理 ")]),_:1})]),_:1}),(l(!0),m(p,null,b(r.sidebarNavItems,o=>(l(),h(n,{key:o.title,to:o.href},{default:t(()=>[s(a(d),{variant:"side-bar",size:"side-bar"},{default:t(()=>[F,_(" "+g(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])],64)}}}),U=v(J,[["__scopeId","data-v-ab856050"]]),q={class:"space-x-4 text-end"},G=e("div",{class:"inline-block"},[e("span",{class:"material-symbols-outlined mr-px"}," account_circle "),e("span",{class:"inline-block align-super"},"管理者")],-1),H=e("span",{class:"material-symbols-outlined"}," logout ",-1),K=e("span",{class:"material-symbols-outlined"}," logout ",-1),M={methods:{...C(w,["adminLogout"])}},P=Object.assign(M,{__name:"AdminNav",setup(c){return(r,f)=>{const n=u("RouterLink");return l(),m("div",q,[G,s(a(d),{class:"mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50",onClick:r.adminLogout},{default:t(()=>[H,_("登出 ")]),_:1},8,["onClick"]),s(n,{to:"/"},{default:t(()=>[s(a(d),{class:"mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50"},{default:t(()=>[K,_(" 回前台 ")]),_:1})]),_:1})])}}}),{toggleDarkTheme:Q,toggleTheme:X}=I(),Y={components:{AdminSideBar:U,AdminNav:P},mounted(){Q(!1),X("theme-admin")}},Z={class:"grid grid-cols-5 gap-0 min-h-screen"},ee={class:"col-span-5 lg:col-span-4 p-12 bg-primary-foreground"};function se(c,r,f,n,o,te){const x=u("AdminSideBar"),y=u("AdminNav"),$=u("RouterView");return l(),m("div",Z,[s(x),e("div",ee,[s(y),s($)])])}const oe=v(Y,[["render",se]]);export{oe as default};