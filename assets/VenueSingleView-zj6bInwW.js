import{_ as y,a9 as k,aa as w,c as i,a as s,n as S,t as n,b as t,w as a,u as l,F as _,r as d,ag as g,o,k as r,l as u,h,ae as V,af as $,d as T}from"./index-5s7QOI7o.js";import{_ as B}from"./ScrollArea-pd-E0jks.js";import{a as I,b as N,c as z,_ as C}from"./CardContent-wWrEXv3a.js";import{_ as E}from"./CardDescription-fPEukfxy.js";import{_ as j}from"./CardFooter-6NxbZpGj.js";import{T as F}from"./TitleComponent-cKw4Tdfe.js";const f=p=>(V("data-v-5a0a0018"),p=p(),$(),p),A={class:"container pb-20 lg:pb-32 space-y-6 lg:space-y-10 mt-[550px]"},D={class:"text-center"},L={class:"text-2xl font-display lg:text-3xl 2xl:text-5xl font-black"},O={class:"space-y-6 lg:space-y-10"},U={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},q={class:"lg:order-2"},G=["src","alt"],H={class:"space-y-6 lg:space-y-10"},J={class:"space-x-4 overflow-x-auto whitespace-nowrap"},K=["src","alt"],M={class:"ms-4"},P={class:"text-center mt-6 lg:mt-10"},Q=f(()=>s("span",null,"留下評論",-1)),R=f(()=>s("span",{class:"inline-block w-10 h-[1px] lg:w-12 bg-black-0 hover:bg-black"},null,-1)),W={class:"container"},X=f(()=>s("h3",{class:"text-2xl font-display md:text-5xl 2xl:text-display-3 font-black mb-6 lg:mb-10"},"交通方式",-1)),Y={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Z=["src"],ss={class:"space-y-6 lg:space-y-10"},es={class:"mb-6"},as={class:"list-disc px-6 space-y-4"},ts={inject:["http","path"],methods:{...k(g,["getVenue"])},computed:{...w(g,["venue","pagination"])}},ls=Object.assign(ts,{__name:"VenueSingleView",setup(p){return(c,ns)=>{var m;const x=T("font-awesome-icon");return o(),i(_,null,[s("div",{class:"w-full h-[800px] bg-no-repeat bg-cover absolute top-0 -z-10",style:S(`background-image: url(${(m=c.venue.picture)==null?void 0:m.horizontal})`)},null,4),s("section",A,[s("div",D,[s("h2",L,n(c.venue.title),1)]),s("main",O,[t(F,null,{subTitle:a(()=>[r(" VENUES ")]),mainTitle:a(()=>[r(" 場地體驗 ")]),_:1}),s("div",U,[s("div",q,[s("img",{src:c.venue.seat_picture,alt:c.venue.title,class:"w-full"},null,8,G)]),s("div",H,[s("div",J,[t(l(u),{variant:"pink-outline"},{default:a(()=>[r(" 全部 ")]),_:1}),(o(!0),i(_,null,d(c.venue.seat_areas,e=>(o(),h(l(u),{key:e,variant:"pink-outline"},{default:a(()=>[r(n(e),1)]),_:2},1024))),128))]),t(l(B),{class:"lg:h-[280px] xl:h-[350px] 2xl:h-[500px] p-4"},{default:a(()=>[(o(!0),i(_,null,d(c.venue.comments,e=>(o(),h(l(C),{key:e.id,class:"border-2 border-black-60 mb-4 lg:mb-6"},{default:a(()=>[t(l(I),null,{default:a(()=>[t(l(N),null,{default:a(()=>[s("img",{src:e.user.profile_image_url,alt:e.user.name},null,8,K),s("span",M,n(e.user.name),1)]),_:2},1024),t(l(E),null,{default:a(()=>[r(n(e.seat_area),1)]),_:2},1024)]),_:2},1024),t(l(z),null,{default:a(()=>[r(n(e.comment),1)]),_:2},1024),t(l(j),{class:"flex flex-col text-sm text-black-60 space-y-4"},{default:a(()=>[s("span",null,n(e.concert.title),1),s("span",null,n(e.created_at),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),s("div",P,[t(l(u),{variant:"btn1",class:"px-10 py-6 space-x-2 md:text-lg lg:text-xl"},{default:a(()=>[Q,R,t(x,{icon:"fa-solid fa-plus"})]),_:1})])])])])]),s("section",W,[X,s("div",Y,[s("div",null,[s("iframe",{src:c.venue.map_link,frameborder:"0",class:"w-full h-[375px] md:h-[600px]"},null,8,Z)]),s("div",ss,[(o(!0),i(_,null,d(c.venue.transportation,e=>(o(),i("div",{key:e.type,class:"box-shadow-light2 p-6 rounded-btn2"},[s("h4",es,n(e.type),1),s("ul",as,[(o(!0),i(_,null,d(e.info,(b,v)=>(o(),i("li",{key:v},n(b),1))),128))])]))),128))])])])],64)}}}),ds=y(ls,[["__scopeId","data-v-5a0a0018"]]);export{ds as default};
