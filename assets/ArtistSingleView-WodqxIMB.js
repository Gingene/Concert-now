import{T as X}from"./TitleComponent-exPIkuRo.js";import{_ as Z,a5 as tt,K as et,y as st,x as at,am as lt,an as ot,ao as nt,ap as rt,c as i,a as s,F as _,r as v,b as a,w as l,z as n,D as it,t as d,g as m,a8 as dt,o as r,aa as S,ab as C,ac as D,ad as T,G as c,ae as $,af as F,ag as j,ah as M,ai as N,f as p,I as ct,J as xt,d as I}from"./index-cUCwgEH4.js";import{h as A}from"./moment-WSJ9un1t.js";import{u as mt}from"./artists-0A5XaXVw.js";const y=o=>(ct("data-v-765ae830"),o=o(),xt(),o),_t={class:"container space-y-[20px] md:space-y-[58px] lg:space-y-[117px] pt-16 pb-[128px] lg:pb-[192px]"},ut={class:"artist-intro mb-10 md:mb-[6.5rem] lg:mb-40"},pt={class:"flex justify-between mb-5"},ft={class:"flex"},ht={class:"mr-2"},gt=y(()=>s("span",null,"/",-1)),bt={key:0,class:"basic-follow tiffany-outline text-base"},kt={class:"w-[85%] lg:w-[63%] mx-auto xl:relative"},vt=["src","alt"],yt={class:"flex justify-center xl:absolute bottom-[-13%] right-[-12%]"},At={class:"relative"},wt={class:"bg-artistName font-lato absolute top-[-1rem] left-[1rem] text-stroke-light z-[-1]"},St={class:"bg-artistName font-lato"},Ct={class:"md:flex md:justify-between md:items-center lg:w-[70%] lg:mx-auto"},Dt={class:"mb-[150px] md:mb-0 md:w-[45%]"},Tt={class:"break-all text-justify pb-10 md:pb-6 md:text-[12px] lg:text-[13px]"},$t=y(()=>s("hr",{class:"pb-10 md:pb-6"},null,-1)),Ft=y(()=>s("p",{class:"hidden font-semibold pb-4"},"HITS",-1)),jt={class:"gap-3 flex flex-row md:flex-col flex-wrap items-center md:items-end"},Mt={class:"artist-honors-relative md:w-[50%]"},Nt=y(()=>s("p",{class:"honors text-stroke-light bg-artistName"},"HONORS",-1)),It={class:"bg-shadow-trans-text artist-honors w-[90%] md:w-[100%] ml-auto text-center break-keep py-[50px] px-[10px] md:py-[60px] rounded-[31px] z-[-1]"},Yt={class:"block mb-[5px]"},Vt=y(()=>s("hr",{class:"w-[65%] mx-auto"},null,-1)),zt={class:"flex items-center"},Ot={class:"text-black-20 mr-3.5 md:mr-[45px] xl:mr-[60px]"},Bt={class:"text-[12px] sm:text-[15px] md:text-[19px]"},Lt={class:"text-[14px] sm:text-[18px] md:text-[22px]"},Rt={class:"text-[13px] sm:text-[16px] md:text-[18px] text-black-60"},Ht=["onClick"],Gt={key:0},Ut={key:0,class:"border border-black-60 rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto text-[14px] sm:text-[17px] md:text-[21px]"},Et={class:"flex items-center"},Jt={class:"text-black-20 mr-3.5 md:mr-[45px] xl:mr-[60px]"},Kt={class:"text-[12px] sm:text-[15px] md:text-[19px]"},Pt={class:"text-[14px] sm:text-[18px] md:text-[22px]"},qt={class:"text-[12px] sm:text-[15px] md:text-[16px] text-black-60"},Qt=["onClick"],Wt={key:0},Xt={key:0,class:"border border-black-60 rounded-[25px] px-[9px] py-[10px] flex justify-center items-center lg:w-[70%] lg:mx-auto text-[14px] sm:text-[17px] md:text-[21px]"},{setIsLoading:w}=tt(),{toast:Zt}=et(),te={data(){return{checkData:null,singleArtist:null,savedConcertsData:null}},props:["id"],computed:{...st(dt,["AccessToken"]),saveState(){return this.savedConcertsData}},watch:{id(o){w(),this.getSingleArtistData(o),setTimeout(()=>{w()},300)}},methods:{...at(mt,["postFollowConcetsData","deleteFollowConcetsData"]),async getSingleArtistData(o){try{const t=await lt(o);this.singleArtist=t.data.data}catch(t){console.error(t)}},toggleFollowSingleArtist(o,t){o?this.handleFollowAction(t,"刪除","刪除追蹤成功"):this.handleFollowAction(t,"新增","追蹤成功")},changeSaveConcertsMode(o){if(!this.AccessToken||!Array.isArray(this.savedConcertsData))return;this.savedConcertsData.find(x=>x.id===o)?this.handleSaveAction(o,"刪除","已取消收藏"):this.handleSaveAction(o,"新增","已加入收藏")},async getSavedConcertsData(){try{const o=await ot();this.savedConcertsData=o.data.data.saved_concerts}catch(o){console.error(o)}},async postSaveConcertsData(o){try{await nt(o)}catch(t){console.error(t)}},async deleteSaveConcertsData(o){try{await rt(o)}catch(t){console.error(t)}},handleFollowAction(o,t,x){(t==="新增"?this.postFollowConcetsData:this.deleteFollowConcetsData)(o).then(()=>this.getSingleArtistData(o)).then(()=>{setTimeout(()=>this.toastMsg(x),300)})},handleSaveAction(o,t,x){(t==="新增"?this.postSaveConcertsData:this.deleteSaveConcertsData)(o).then(()=>this.getSavedConcertsData()).then(()=>{setTimeout(()=>this.toastMsg(x),300)})},toastMsg(o){Zt({title:o,description:""})},updateData(o){this.getSingleArtistData(o)}},mounted(){w(),this.getSingleArtistData(Number(this.$route.params.id)),setTimeout(()=>{w()},300),this.AccessToken&&this.getSavedConcertsData()},updated(){document.title=`Concert Now - ${this.singleArtist.name}`}},ee=Object.assign(te,{__name:"ArtistSingleView",setup(o){return(t,x)=>{var V,z,O,B,L,R,H,G,U,E,J,K,P,q,Q,W;const f=I("router-link"),Y=I("RouterLink"),u=I("font-awesome-icon");return r(),i("main",_t,[s("section",ut,[s("div",pt,[s("div",ft,[(r(!0),i(_,null,v((V=t.singleArtist)==null?void 0:V.keywords,e=>(r(),i("p",{class:"mr-1",key:e},[s("span",ht,d(e),1),gt]))),128))]),a(n(N),null,{default:l(()=>[a(n(S),{class:"flex"},{default:l(()=>[t.AccessToken?m("",!0):(r(),i("button",bt,"Follow"))]),_:1}),a(n(C),null,{default:l(()=>[a(n(D),null,{default:l(()=>[a(n(T),null,{default:l(()=>[c("請登入後追蹤")]),_:1}),a(n($))]),_:1}),a(n(F),null,{default:l(()=>[a(n(j),null,{default:l(()=>[c("取消")]),_:1}),a(n(M),{asChild:""},{default:l(()=>[a(f,{to:"/login"},{default:l(()=>[c(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t.AccessToken?(r(),i("button",{key:(z=t.singleArtist)==null?void 0:z.id,class:it(["basic-follow text-base",(O=t.singleArtist)!=null&&O.is_followed?"tiffany-follow":"tiffany-outline"]),onClick:x[0]||(x[0]=e=>t.toggleFollowSingleArtist(t.singleArtist.is_followed,t.singleArtist.id))},d((B=t.singleArtist)!=null&&B.is_followed?"Following":"Follow"),3)):m("",!0)]),s("div",kt,[s("img",{class:"rounded-xl mb-5",src:(R=(L=t.singleArtist)==null?void 0:L.cover_urls)==null?void 0:R.horizontal,alt:(H=t.singleArtist)==null?void 0:H.name},null,8,vt),s("div",yt,[s("div",At,[s("div",wt,d((G=t.singleArtist)==null?void 0:G.name),1),s("div",St,d((U=t.singleArtist)==null?void 0:U.name),1)])])])]),s("div",Ct,[s("section",Dt,[s("p",Tt,d((E=t.singleArtist)==null?void 0:E.description),1),$t,Ft,s("div",jt,[(r(!0),i(_,null,v((J=t.singleArtist)==null?void 0:J.popular_songs,e=>(r(),i("div",{key:e,class:"text-[11px] border text-center rounded-2xl py-[8px] px-[11px]"},d(e),1))),128))])]),s("section",Mt,[Nt,s("div",It,[(r(!0),i(_,null,v((K=t.singleArtist)==null?void 0:K.honors,e=>(r(),i("div",{key:e,class:"mb-[22px]"},[s("span",Yt,d(e),1),Vt]))),128))])])]),s("section",null,[a(X,{class:"flex justify-center mb-[30px]"},{subTitle:l(()=>[c("UPCOMING")]),mainTitle:l(()=>[c("即將舉辦")]),_:1}),(r(!0),i(_,null,v((P=t.singleArtist)==null?void 0:P.upcoming_concerts,e=>{var h,g,b;return r(),i(_,null,[((h=t.singleArtist)==null?void 0:h.upcoming_concerts.length)>0?(r(),i("div",{key:e.id,class:"border border-black-60 rounded-[25px] py-[10px] px-[9px] xs:px-[26px] mb-6 flex justify-between items-center lg:w-[70%] lg:mx-auto"},[s("div",zt,[s("div",Ot,[s("p",Bt,d(n(A)(e.holding_time).format("MM/DD")),1),s("p",Lt,d(n(A)(e.holding_time).format("YYYY")),1)]),s("div",null,[a(Y,{to:`/concerts/${e==null?void 0:e.id}`,class:"text-[14px] sm:text-[17px] md:text-[21px]"},{default:l(()=>[c(d(e==null?void 0:e.title),1)]),_:2},1032,["to"]),s("p",Rt,d((g=e==null?void 0:e.venue)==null?void 0:g.title),1)])]),t.AccessToken?(r(),i("button",{key:0,onClick:k=>t.changeSaveConcertsMode(e.id)},[(b=t.saveState)!=null&&b.some(k=>k.id===(e==null?void 0:e.id))?(r(),p(u,{key:0,class:"text-xl md:text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]",icon:"fa-solid fa-bookmark"})):(r(),p(u,{key:1,class:"text-xl md:text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]",icon:"fa-regular fa-bookmark"}))],8,Ht)):(r(),p(n(N),{key:1},{default:l(()=>[a(n(S),{class:"flex"},{default:l(()=>[t.AccessToken===void 0?(r(),i("button",Gt,[a(u,{class:"text-xl md:text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]",icon:"fa-regular fa-bookmark"})])):m("",!0)]),_:1}),a(n(C),null,{default:l(()=>[a(n(D),null,{default:l(()=>[a(n(T),null,{default:l(()=>[c("登入才能收藏 ᓫ(°⌑°)ǃ")]),_:1}),a(n($))]),_:1}),a(n(F),null,{default:l(()=>[a(n(j),null,{default:l(()=>[c("取消")]),_:1}),a(n(M),{asChild:""},{default:l(()=>[a(f,{to:"/login"},{default:l(()=>[c(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))])):m("",!0)],64)}),256)),((q=t.singleArtist)==null?void 0:q.upcoming_concerts.length)===0?(r(),i("div",Ut," 抱歉! 目前沒有資料 ")):m("",!0)]),s("section",null,[a(X,{class:"flex justify-center mb-[30px]"},{subTitle:l(()=>[c("HISTORY")]),mainTitle:l(()=>[c("已結束")]),_:1}),(r(!0),i(_,null,v((Q=t.singleArtist)==null?void 0:Q.historical_concerts,e=>{var h,g,b;return r(),i(_,null,[((h=t.singleArtist)==null?void 0:h.historical_concerts.length)>0?(r(),i("div",{key:e.id,class:"border border-black-60 rounded-[25px] py-[10px] px-[9px] xs:px-[26px] mb-6 flex justify-between items-center lg:w-[70%] lg:mx-auto"},[s("div",Et,[s("div",Jt,[s("p",Kt,d(n(A)(e.holding_time).format("MM/DD")),1),s("p",Pt,d(n(A)(e.holding_time).format("YYYY")),1)]),s("div",null,[a(Y,{to:`/concerts/${e.id}`,class:"text-[14px] sm:text-[17px] md:text-[21px]"},{default:l(()=>[c(d(e==null?void 0:e.title),1)]),_:2},1032,["to"]),s("p",qt,d((g=e==null?void 0:e.venue)==null?void 0:g.title),1)])]),t.AccessToken?(r(),i("button",{key:0,onClick:k=>t.changeSaveConcertsMode(e.id)},[(b=t.saveState)!=null&&b.some(k=>k.id===(e==null?void 0:e.id))?(r(),p(u,{key:0,class:"text-xl md:text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]",icon:"fa-solid fa-bookmark"})):(r(),p(u,{key:1,class:"text-xl md:text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]",icon:"fa-regular fa-bookmark"}))],8,Qt)):(r(),p(n(N),{key:1},{default:l(()=>[a(n(S),{class:"flex"},{default:l(()=>[t.AccessToken===void 0?(r(),i("button",Wt,[a(u,{class:"text-xl md:text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]",icon:"fa-regular fa-bookmark"})])):m("",!0)]),_:1}),a(n(C),null,{default:l(()=>[a(n(D),null,{default:l(()=>[a(n(T),null,{default:l(()=>[c("登入才能收藏 ᓫ(°⌑°)ǃ")]),_:1}),a(n($))]),_:1}),a(n(F),null,{default:l(()=>[a(n(j),null,{default:l(()=>[c("取消")]),_:1}),a(n(M),{asChild:""},{default:l(()=>[a(f,{to:"/login"},{default:l(()=>[c(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))])):m("",!0)],64)}),256)),((W=t.singleArtist)==null?void 0:W.historical_concerts.length)===0?(r(),i("div",Xt," 抱歉! 目前沒有資料 ")):m("",!0)])])}}}),ne=Z(ee,[["__scopeId","data-v-765ae830"]]);export{ne as default};