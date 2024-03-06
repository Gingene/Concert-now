import{y as C,z as $,c as u,b as s,w as o,a as n,D as v,u as t,F as _,r as g,ac as A,o as l,C as c,B as m,g as d,t as p,h as S,ao as x,ae as I,af as z,ag as R,d as b}from"./index-YXoIurfv.js";import{a as T,b as j,_ as N}from"./CardTitle-P5LCiTpB.js";import{_ as V}from"./CardDescription-nOd6EZoy.js";import{_ as F}from"./CardFooter-W56y5xuZ.js";import{_ as U,a as q,b as L,c as D,d as E}from"./PaginationPrev-boglATWC.js";import{_ as M,a as O,b as P}from"./HoverCardContent-W7TN9JH_.js";import{_ as J}from"./BannerComponent-GrHCzTrf.js";import{u as B}from"./concerts-PlnnEmki.js";import"./more-horizontal-wIMTy_8v.js";import"./moment-WSJ9un1t.js";import"./useDarkAlert-Uj8fcII_.js";const Z={class:"container relative pb-[128px] lg:pb-[192px]"},G={class:"space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-60"},H={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},K={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},Q={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"},W=["src","alt"],X={class:"text-tiny lg:text-sm"},Y={class:"absolute pt-2 pb-4 text-black-60 text-tiny"},ee=["onClick"],te=n("span",{class:"text-sm"},"查看更多",-1),se={data(){return{bannerInputPlaceholder:"請輸入演唱會名稱",timeRanges:["本日","本週","本月"],countryRanges:["台灣","日本","韓國","歐美","其它"],timeButtonIsActive:"stateAll",countryButtonIsActive:"stateAll"}},inject:["http","path"],methods:{...C(B,["getConcerts","saveUnSavedConcert","callSaveAction","searchConcerts"]),...C(A,["getUserSavedAndFollowed"])},computed:{...$(B,["concerts","pagination"]),...$(A,["AccessToken","savedConcerts"]),isSaved(){return[...this.savedConcerts]}},mounted(){this.getConcerts("country","all"),this.getConcerts("time","all"),this.AccessToken!==void 0&&this.getUserSavedAndFollowed(),console.log(this.AccessToken),console.log(this.savedConcerts)}},fe=Object.assign(se,{__name:"ConcertsView",setup(ae){return(a,f)=>{const h=b("router-link"),k=b("font-awesome-icon"),w=b("RouterLink");return l(),u("section",Z,[s(J,{"prop-placeholder":a.bannerInputPlaceholder,onSearchMethod:a.searchConcerts},{mainTitle:o(()=>[c("CONCERTS")]),_:1},8,["prop-placeholder","onSearchMethod"]),n("main",G,[n("div",null,[n("div",H,[s(t(m),{variant:"tiffany-outline",size:"base",class:v(["me-4",{active:a.timeButtonIsActive==="stateAll"}]),onClick:f[0]||(f[0]=e=>{a.getConcerts("time","all"),a.timeButtonIsActive="stateAll"})},{default:o(()=>[c(" 全部 ")]),_:1},8,["class"]),(l(!0),u(_,null,g(a.timeRanges,(e,i)=>(l(),d(t(m),{key:e,variant:"tiffany-outline",size:"base",class:v({active:a.timeButtonIsActive===`state${i}`}),onClick:r=>{a.getConcerts("time",e),a.timeButtonIsActive=`state${i}`}},{default:o(()=>[c(p(e),1)]),_:2},1032,["class","onClick"]))),128))]),n("div",K,[s(t(m),{variant:"pink-outline",size:"base",class:v(["me-4",{active:a.countryButtonIsActive==="stateAll"}]),onClick:f[1]||(f[1]=e=>{a.getConcerts("country","all"),a.countryButtonIsActive="stateAll"})},{default:o(()=>[c(" 全部 ")]),_:1},8,["class"]),(l(!0),u(_,null,g(a.countryRanges,(e,i)=>(l(),d(t(m),{key:e,variant:"pink-outline",size:"base",class:v({active:a.countryButtonIsActive===`state${i}`}),onClick:r=>{a.getConcerts("country",e),a.countryButtonIsActive=`state${i}`}},{default:o(()=>[c(p(e),1)]),_:2},1032,["class","onClick"]))),128))])]),n("ul",Q,[(l(!0),u(_,null,g(a.concerts,e=>(l(),u("li",{key:e.id},[s(t(N),{class:"border-black-60"},{default:o(()=>[s(t(T),{class:"rounded-t-2xl space-y-0 p-0"},{default:o(()=>[s(h,{to:`/concerts/${e.id}`},{default:o(()=>[n("img",{src:e.cover_urls.square,alt:e.title,class:"aspect-square rounded-2xl object-cover min-w-full"},null,8,W)]),_:2},1032,["to"]),s(t(V),{class:"h-[10rem] md:h-[13rem] lg:h-[12rem] xl:h-[13rem] border-x-2 pt-6 px-6 border-black-60 flex justify-between align-top"},{default:o(()=>{var i;return[n("div",null,[n("p",X,p(e.holding_time.substring(0,10)),1),s(h,{to:`/concerts/${e.id}`},{default:o(()=>[s(t(j),{class:"pt-1 text-base lg:text-lg text-white"},{default:o(()=>[c(p(e.title),1)]),_:2},1024)]),_:2},1032,["to"]),n("p",Y,p((i=e.venue)==null?void 0:i.title),1)]),s(t(M),null,{default:o(()=>[s(t(O),null,{default:o(()=>[n("button",{class:"mb-auto",onClick:r=>a.callSaveAction(e.id)},[a.isSaved.some(r=>r.id===e.id)?(l(),d(k,{key:0,icon:"fa-solid fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})):(l(),d(k,{key:1,icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"}))],8,ee)]),_:2},1024),a.AccessToken===void 0?(l(),d(t(P),{key:0,class:"mt-[-15rem] sm:mt-[-15rem]"},{default:o(()=>[c(" 登入開啟收藏功能 ")]),_:1})):S("",!0)]),_:2},1024)]}),_:2},1024)]),_:2},1024),s(t(F),{class:"text-end border-x-2 border-b-2 border-black-60 rounded-b-2xl"},{default:o(()=>[s(w,{to:`/concerts/${e.id}`},{default:o(()=>[s(t(m),{variant:"white-outline",size:"base2"},{default:o(()=>[te,s(t(x),{class:"size-6 ms-2 lg:ms-4"})]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))]),s(t(R),{total:a.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:o(({page:e})=>[s(t(I),{class:"flex items-center justify-center gap-1"},{default:o(({items:i})=>[s(t(U)),s(t(q)),(l(!0),u(_,null,g(i,(r,y)=>(l(),u(_,null,[r.type==="page"?(l(),d(t(z),{key:y,value:r.value,"as-child":""},{default:o(()=>[s(t(m),{class:"w-10 h-10 p-0",variant:r.value===e?"default":"outline"},{default:o(()=>[c(p(r.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(l(),d(t(L),{key:r.type,index:y},null,8,["index"]))],64))),256)),s(t(D)),s(t(E))]),_:2},1024)]),_:1},8,["total"])])])}}});export{fe as default};
