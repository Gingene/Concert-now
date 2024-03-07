import{a8 as T,y as A,z as x,c as u,b as t,w as s,a as c,D as v,u as e,F as f,r as g,ac as w,o as n,C as o,B as m,g as d,t as _,h as b,ap as z,aq as R,ar as j,as as N,at as V,au as q,av as D,aw as F,ax as M,ay as Y,ae as L,af as U,ag as E,d as y}from"./index-Nwj6HwkL.js";import{a as O,b as P,_ as J}from"./CardTitle-TXfzi-h-.js";import{_ as Z}from"./CardDescription-yvkfex8Q.js";import{_ as G}from"./CardFooter-OoLAyD2l.js";import{_ as H,a as K,b as Q,c as W,d as X}from"./PaginationPrev-1uOfMS14.js";import{_ as ee}from"./BannerComponent-DlY1Pmae.js";import{_ as te}from"./index-fds1pShz.js";import{u as B}from"./concerts-hX1_T9Tc.js";import{h as S}from"./moment-WSJ9un1t.js";import"./more-horizontal-FGl3YHUz.js";const se={class:"container relative pb-[128px] lg:pb-[192px]"},ae={class:"space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-60"},le={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},ne={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},oe={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"},ie=["src","alt"],re={class:"text-tiny lg:text-sm"},ce={class:"absolute pt-2 pb-4 text-black-60 text-tiny"},ue=["onClick"],de={key:1},me=c("span",{class:"text-sm"},"查看更多",-1),{toast:_e}=T(),fe={data(){return{bannerInputPlaceholder:"請輸入演唱會名稱",timeRanges:["本日","本週","本月"],countryRanges:["台灣","日本","韓國","歐美","其它"],timeButtonIsActive:"stateAll",countryButtonIsActive:"stateAll"}},inject:["http","path"],methods:{...A(B,["getConcerts","callSaveAction","searchConcerts"]),...A(w,["getUserSavedAndFollowed"]),showToast($){_e({title:$})}},computed:{...x(B,["concerts","pagination"]),...x(w,["AccessToken","savedConcerts"]),isSaved(){return[...this.savedConcerts]}},mounted(){this.getConcerts("country","all"),this.getConcerts("time","all"),this.AccessToken!==void 0&&this.getUserSavedAndFollowed(),console.log(this.AccessToken),console.log(this.savedConcerts)}},xe=Object.assign(fe,{__name:"ConcertsView",setup($){return(l,p)=>{const h=y("router-link"),k=y("font-awesome-icon"),I=y("RouterLink");return n(),u("section",se,[t(ee,{"prop-placeholder":l.bannerInputPlaceholder,onSearchMethod:l.searchConcerts},{mainTitle:s(()=>[o("CONCERTS")]),_:1},8,["prop-placeholder","onSearchMethod"]),c("main",ae,[c("div",null,[c("div",le,[t(e(m),{variant:"tiffany-outline",size:"base",class:v(["me-4",{active:l.timeButtonIsActive==="stateAll"}]),onClick:p[0]||(p[0]=a=>{l.getConcerts("time","all"),l.timeButtonIsActive="stateAll"})},{default:s(()=>[o(" 全部 ")]),_:1},8,["class"]),(n(!0),u(f,null,g(l.timeRanges,(a,i)=>(n(),d(e(m),{key:a,variant:"tiffany-outline",size:"base",class:v({active:l.timeButtonIsActive===`state${i}`}),onClick:r=>{l.getConcerts("time",a),l.timeButtonIsActive=`state${i}`}},{default:s(()=>[o(_(a),1)]),_:2},1032,["class","onClick"]))),128))]),c("div",ne,[t(e(m),{variant:"pink-outline",size:"base",class:v(["me-4",{active:l.countryButtonIsActive==="stateAll"}]),onClick:p[1]||(p[1]=a=>{l.getConcerts("country","all"),l.countryButtonIsActive="stateAll"})},{default:s(()=>[o(" 全部 ")]),_:1},8,["class"]),(n(!0),u(f,null,g(l.countryRanges,(a,i)=>(n(),d(e(m),{key:a,variant:"pink-outline",size:"base",class:v({active:l.countryButtonIsActive===`state${i}`}),onClick:r=>{l.getConcerts("country",a),l.countryButtonIsActive=`state${i}`}},{default:s(()=>[o(_(a),1)]),_:2},1032,["class","onClick"]))),128))])]),c("ul",oe,[(n(!0),u(f,null,g(l.concerts,a=>(n(),u("li",{key:a.id},[t(e(J),{class:"border-black-60"},{default:s(()=>[t(e(O),{class:"rounded-t-2xl space-y-0 p-0"},{default:s(()=>[t(h,{to:`/concerts/${a.id}`},{default:s(()=>[c("img",{src:a.cover_urls.square,alt:a.title,class:"aspect-square rounded-2xl object-cover min-w-full"},null,8,ie)]),_:2},1032,["to"]),t(e(Z),{class:"h-[10rem] md:h-[13rem] lg:h-[12rem] xl:h-[13rem] border-x-2 pt-6 px-6 border-black-60 flex justify-between align-top"},{default:s(()=>{var i;return[c("div",null,[c("p",re,[o(_(a.holding_time.substring(0,10))+" ",1),e(S).duration(e(S)(a.holding_time,"YYYY-MM-DD hh:mm:ss").diff()).minutes()<=0?(n(),d(e(te),{key:0,class:"ml-1 bg-black-85"},{default:s(()=>[o("已結束")]),_:1})):b("",!0)]),t(h,{to:`/concerts/${a.id}`},{default:s(()=>[t(e(P),{class:"pt-1 text-base lg:text-lg text-white"},{default:s(()=>[o(_(a.title),1)]),_:2},1024)]),_:2},1032,["to"]),c("p",ce,_((i=a.venue)==null?void 0:i.title),1)]),t(e(z),null,{default:s(()=>[t(e(R),{class:"flex"},{default:s(()=>[l.AccessToken!==void 0?(n(),u("button",{key:0,onClick:r=>l.callSaveAction(a.id)},[l.isSaved.some(r=>r.id===a.id)?(n(),d(k,{key:0,icon:"fa-solid fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})):(n(),d(k,{key:1,icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"}))],8,ue)):b("",!0),l.AccessToken===void 0?(n(),u("button",de,[t(k,{icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})])):b("",!0)]),_:2},1024),t(e(j),null,{default:s(()=>[t(e(N),null,{default:s(()=>[t(e(V),null,{default:s(()=>[o("登入才能收藏 ᓫ(°⌑°)ǃ")]),_:1}),t(e(q))]),_:1}),t(e(D),null,{default:s(()=>[t(e(F),null,{default:s(()=>[o("取消")]),_:1}),t(e(M),{asChild:""},{default:s(()=>[t(h,{to:"/login"},{default:s(()=>[o(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1024)]}),_:2},1024)]),_:2},1024),t(e(G),{class:"text-end border-x-2 border-b-2 border-black-60 rounded-b-2xl"},{default:s(()=>[t(I,{to:`/concerts/${a.id}`},{default:s(()=>[t(e(m),{variant:"white-outline",size:"base2"},{default:s(()=>[me,t(e(Y),{class:"size-6 ms-2 lg:ms-4"})]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))]),t(e(E),{total:l.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:s(({page:a})=>[t(e(L),{class:"flex items-center justify-center gap-1"},{default:s(({items:i})=>[t(e(H)),t(e(K)),(n(!0),u(f,null,g(i,(r,C)=>(n(),u(f,null,[r.type==="page"?(n(),d(e(U),{key:C,value:r.value,"as-child":""},{default:s(()=>[t(e(m),{class:"w-10 h-10 p-0",variant:r.value===a?"default":"outline"},{default:s(()=>[o(_(r.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(n(),d(e(Q),{key:r.type,index:C},null,8,["index"]))],64))),256)),t(e(W)),t(e(X))]),_:2},1024)]),_:1},8,["total"])])])}}});export{xe as default};
