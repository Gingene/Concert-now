import{_ as f,A as $,o,c as r,a as e,F as p,r as g,b as l,w as v,t as h,d as n,u as w,H as y,e as b,f as N,g as T}from"./index--T_9Bc3L.js";const R={components:{ArrowDownRight:$},data(){return{footNavList:[{title:"演唱會",enTitle:"CONCERTS",href:"/concerts"},{title:"表演者",enTitle:"ARTISTS",href:"/artists"},{title:"場地",enTitle:"VENUE",href:"/venues"},{title:"關於我們",enTitle:"ABOUT US",href:"/about"}]}}},k={class:"container"},C={class:"uppercase"},F={class:"flex flex-col lg:flex-row"},S={class:"pt-0 md:pt-4 text-sm lg:text-4xl lg:order-2"},V={class:"text-5xl font-lato lg:font-lato-display3 lg:order-1 lg:me-5"};function A(t,_,i,d,s,m){const u=n("ArrowDownRight"),c=n("RouterLink");return o(),r("nav",k,[e("ul",C,[(o(!0),r(p,null,g(s.footNavList,a=>(o(),r("li",{class:"footer-nav flex flex-col border-b-2 border-black-80 py-6",key:a.enTitle},[l(c,{to:a.href,class:"flex justify-between items-end w-full"},{default:v(()=>[e("div",F,[e("div",S,h(a.title),1),e("div",V,h(a.enTitle),1)]),l(u,{class:"footer-nav-arrow size-10 lg:size-24"})]),_:2},1032,["to"])]))),128))])])}const D=f(R,[["render",A]]),L={data(){return{socialIcon:[{icon:"fa-brands fa-facebook"},{icon:"fa-brands fa-line"},{icon:"fa-brands fa-instagram"}]}}},B={class:"container py-6"},E={id:"sns",class:"mb-6 lg:mb-10"},j={class:"flex justify-end space-x-2"},H={class:"inline-flex justify-center items-center size-10"},z=e("div",{class:"flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between lg:items-end"},[e("div",{class:"lg:order-3 flex space-x-6"},[e("span",null,"隱私權政策"),e("span",null,"智慧財產權")]),e("div",{class:"lg:order-2"},[e("p",null,"Copyright © 2024")]),e("div",{class:"lg:order-1"},[e("p",null,"本網站為作品集，僅用來學習，非商業用途。")])],-1);function I(t,_,i,d,s,m){const u=n("font-awesome-icon");return o(),r("footer",B,[e("nav",E,[e("ul",j,[(o(!0),r(p,null,g(s.socialIcon,c=>(o(),r("li",{key:c.icon},[e("div",H,[l(u,{icon:c.icon,class:"text-xl"},null,8,["icon"])])]))),128))])]),z])}const O=f(L,[["render",I]]),{toggleDarkTheme:U,toggleTheme:q}=w(),X={components:{HeaderNav:y,FooterNav:D,FooterCopyRight:O},watch:{"$route.path":{handler(){const t=b();t.value=`Concert now - ${this.$route.meta.title??""}`}}},mounted(){U(!0),q("theme-default");const t=document.querySelector("[data-cursor-dot]"),_=document.querySelector("[data-cursor-outline]");window.addEventListener("mousemove",i=>{const d=i.clientX,s=i.clientY;t.style.left=`${d}px`,t.style.top=`${s}px`,_.animate({left:`${d}px`,top:`${s}px`},{duration:500,fill:"forwards"})})}},Y=e("div",{class:"cursor-dot","data-cursor-dot":""},null,-1),G=e("div",{class:"cursor-outline","data-cursor-outline":""},null,-1);function J(t,_,i,d,s,m){const u=n("HeaderNav"),c=n("RouterView"),a=n("FooterNav"),x=n("FooterCopyRight");return o(),r(p,null,[Y,G,l(u),l(c),t.$route.meta.showFooterNav?(o(),N(a,{key:0})):T("",!0),l(x)],64)}const M=f(X,[["render",J]]);export{M as default};
