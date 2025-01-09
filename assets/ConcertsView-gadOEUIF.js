import{K as x,x as A,y as F,c as u,b as s,w as a,a as d,D as v,z as t,F as _,r as k,g,f as m,a8 as w,o as l,G as i,C as f,t as p,ai as T,aa as z,ab as R,ac as j,ad as N,ae as V,af as D,ag as M,ah as Y,at as L,aj as U,ak as q,al as E,d as $}from"./index-LBBJRyy4.js";import{a as O,b as P,_ as G}from"./CardTitle-woliVK9s.js";import{_ as J}from"./CardDescription-HtF7WCyI.js";import{_ as K}from"./CardFooter-fGRwKjnF.js";import{_ as Z,a as H,b as Q,c as W,d as X}from"./PaginationPrev-aqqHTmyy.js";import{_ as ee}from"./BannerComponent-pdfCGkAa.js";import{_ as te}from"./index-ThRGrSAI.js";import{u as B}from"./concerts-FDr_i5bF.js";import{h as S}from"./moment-WSJ9un1t.js";import"./more-horizontal-KASLBe8b.js";const se={class:"container relative pb-[128px] lg:pb-[192px]"},ae={class:"space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-40"},ne={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},le={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},oe={key:0,class:"p-14 font-semibold tracking-tighter text-base lg:text-lg text-white text-center"},re={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"},ie=["src"],ce={class:"text-tiny text-black-60"},ue={class:"absolute pt-1 md:pt-2 pb-4 text-black-60 text-tiny"},de=["onClick"],me={key:0},fe=d("span",{class:"text-sm"},"查看更多",-1),{toast:pe}=x(),_e={data(){return{bannerInputPlaceholder:"輸入演唱會名稱",timeRanges:["本日","本週","本月"],countryRanges:["台灣","日本","韓國","歐美","其它"],timeButtonIsActive:"stateAll",countryButtonIsActive:"stateAll"}},inject:["http","path"],methods:{...A(B,["getAllConcerts","getFilterFrontConcerts","callSaveAction","searchConcerts"]),...A(w,["getUserSavedAndFollowed"]),showToast(y){pe({title:y})}},computed:{...F(B,["concerts","pagination","toastActive","pagination","pageFactor"]),...F(w,["AccessToken","savedConcerts"]),isSaved(){return[...this.savedConcerts]},pagination2(){return this.pagination}},watch:{},mounted(){this.getAllConcerts(),this.AccessToken!==void 0&&this.getUserSavedAndFollowed()}},Be=Object.assign(_e,{__name:"ConcertsView",setup(y){return(e,r)=>{const b=$("router-link"),h=$("font-awesome-icon"),I=$("RouterLink");return l(),u("section",se,[s(ee,{"prop-placeholder":e.bannerInputPlaceholder,onSearchMethod:e.searchConcerts},{mainTitle:a(()=>[i("CONCERTS")]),_:1},8,["prop-placeholder","onSearchMethod"]),d("main",ae,[d("div",null,[d("div",ne,[s(t(f),{variant:"tiffany-outline",size:"base",class:v(["me-4",{active:e.timeButtonIsActive==="stateAll"}]),onClick:r[0]||(r[0]=n=>{e.getFilterFrontConcerts("time","all"),e.timeButtonIsActive="stateAll"})},{default:a(()=>[i(" 全部 ")]),_:1},8,["class"]),(l(!0),u(_,null,k(e.timeRanges,(n,c)=>(l(),m(t(f),{key:n,variant:"tiffany-outline",size:"base",class:v({active:e.timeButtonIsActive===`state${c}`}),onClick:o=>{e.getFilterFrontConcerts("time",n),e.timeButtonIsActive=`state${c}`}},{default:a(()=>[i(p(n),1)]),_:2},1032,["class","onClick"]))),128))]),d("div",le,[s(t(f),{variant:"pink-outline",size:"base",class:v(["me-4",{active:e.countryButtonIsActive==="stateAll"}]),onClick:r[1]||(r[1]=n=>{e.getFilterFrontConcerts("country","all"),e.countryButtonIsActive="stateAll"})},{default:a(()=>[i(" 全部 ")]),_:1},8,["class"]),(l(!0),u(_,null,k(e.countryRanges,(n,c)=>(l(),m(t(f),{key:n,variant:"pink-outline",size:"base",class:v({active:e.countryButtonIsActive===`state${c}`}),onClick:o=>{e.getFilterFrontConcerts("country",n),e.countryButtonIsActive=`state${c}`}},{default:a(()=>[i(p(n),1)]),_:2},1032,["class","onClick"]))),128))])]),e.concerts.length?g("",!0):(l(),u("p",oe,"抱歉，搜尋不到相關資源")),d("ul",re,[(l(!0),u(_,null,k(e.concerts,n=>(l(),u("li",{key:n.id},[s(t(G),{class:"border-black-80"},{default:a(()=>[s(t(O),{class:"rounded-t-2xl space-y-0 p-0"},{default:a(()=>[s(b,{to:`/concerts/${n.id}`},{default:a(()=>[d("img",{src:n.cover_urls.square,alt:"演唱會圖片",class:"brightness-90 h-[18rem] xs:h-[26rem] sm:h-[20rem] md:h-[15rem] lg:h-[20rem] rounded-2xl object-cover min-w-full"},null,8,ie)]),_:2},1032,["to"]),s(t(J),{class:"h-[8rem] sm:h-[10rem] md:h-[13rem] lg:h-[12rem] border-x-2 pt-6 px-6 border-black-80 flex justify-between align-top"},{default:a(()=>{var c;return[d("div",null,[d("p",ce,[i(p(n.holding_time.substring(0,10))+" ",1),t(S).duration(t(S)(n.holding_time,"YYYY-MM-DD hh:mm:ss").diff()).minutes()<=0?(l(),m(t(te),{key:0,class:"ml-1 bg-black-85 hover:bg-black-85"},{default:a(()=>[i("已結束")]),_:1})):g("",!0)]),s(b,{to:`/concerts/${n.id}`},{default:a(()=>[s(t(P),{class:"text-base lg:text-lg text-white"},{default:a(()=>[i(p(n.title),1)]),_:2},1024)]),_:2},1032,["to"]),d("p",ue,p((c=n.venue)==null?void 0:c.title),1)]),e.AccessToken!==void 0?(l(),u("button",{key:0,onClick:o=>e.callSaveAction(n.id),class:"flex ml-auto"},[e.isSaved.some(o=>o.id===n.id)?(l(),m(h,{key:0,icon:"fa-solid fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})):(l(),m(h,{key:1,icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"}))],8,de)):g("",!0),s(t(T),null,{default:a(()=>[s(t(z),{class:"flex mb-auto"},{default:a(()=>[e.AccessToken===void 0?(l(),u("button",me,[s(h,{icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})])):g("",!0)]),_:1}),s(t(R),null,{default:a(()=>[s(t(j),null,{default:a(()=>[s(t(N),null,{default:a(()=>[i("登入才能收藏 ᓫ(°⌑°)ǃ")]),_:1}),s(t(V))]),_:1}),s(t(D),null,{default:a(()=>[s(t(M),null,{default:a(()=>[i("取消")]),_:1}),s(t(Y),{asChild:""},{default:a(()=>[s(b,{to:"/login"},{default:a(()=>[i(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]}),_:2},1024)]),_:2},1024),s(t(K),{class:"text-end border-x-2 border-b-2 border-black-80 rounded-b-2xl"},{default:a(()=>[s(I,{to:`/concerts/${n.id}`},{default:a(()=>[s(t(f),{variant:"white-outline",size:"base2",class:"border-black-80 hover:border-white"},{default:a(()=>[fe,s(t(L),{class:"size-6 ms-2 lg:ms-4"})]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))]),e.concerts.length?(l(),m(t(E),{key:1,page:e.pageFactor,total:e.pagination2.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:a(({page:n})=>[s(t(q),{class:"flex items-center justify-center gap-1 pt-16"},{default:a(({items:c})=>[s(t(Z),{onClick:r[2]||(r[2]=o=>e.getFilterFrontConcerts("","",1))}),s(t(H),{onClick:r[3]||(r[3]=o=>e.getFilterFrontConcerts("","",e.pagination2.current_page-1))}),(l(!0),u(_,null,k(c,(o,C)=>(l(),u(_,null,[o.type==="page"?(l(),m(t(U),{key:C,value:o.value,"as-child":""},{default:a(()=>[s(t(f),{class:"w-10 h-10 p-0",variant:n===o.value?"default":"outline",onClick:ge=>e.getFilterFrontConcerts("","",C+1),disabled:o.value===n},{default:a(()=>[i(p(o.value),1)]),_:2},1032,["variant","onClick","disabled"])]),_:2},1032,["value"])):(l(),m(t(Q),{key:o.type,index:C},null,8,["index"]))],64))),256)),s(t(W),{onClick:r[4]||(r[4]=o=>e.getFilterFrontConcerts("","",e.pagination2.current_page+1))}),s(t(X),{onClick:r[5]||(r[5]=o=>e.getFilterFrontConcerts("","",e.pagination2.total_pages))})]),_:2},1024)]),_:1},8,["page","total"])):g("",!0)])])}}});export{Be as default};