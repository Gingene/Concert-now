import{T as z}from"./TitleComponent-rlzhNArs.js";import{a as y,b as k,_ as w}from"./HoverCardContent-p-zuIONw.js";import{_ as L,a9 as R,z as U,y as E,ah as G,ai as J,aj as P,ak as W,c as l,a as e,F as f,r as h,b as m,w as i,u as d,t as r,ac as q,o as a,D as K,g as p,C as c,h as A,I as Q,J as X,d as Z}from"./index-7wLsdYKd.js";import{u as tt}from"./useDarkAlert-idugOM1U.js";import{h as v}from"./moment-WSJ9un1t.js";import{u as et}from"./artists-it1-aaRp.js";import"./sweetalert2.all-iE1biFAu.js";import"./_commonjsHelpers-5-cIlDoe.js";const g=o=>(Q("data-v-b2e0000a"),o=o(),X(),o),st={class:"container py-16"},ot={class:"artist-intro mb-10 md:mb-[6.5rem] lg:mb-40"},at={class:"flex justify-between mb-5"},nt={class:"flex"},lt={class:"w-[85%] lg:w-[63%] mx-auto xl:relative"},rt=["src","alt"],it={class:"flex justify-center xl:absolute bottom-[-13%] right-[-12%]"},dt={class:"relative"},ct={class:"bg-artistName absolute top-[-1rem] left-[1rem] text-stroke-light z-[-1]"},xt={class:"bg-artistName"},mt={class:"md:flex md:justify-between md:items-center md:mb-2.5 lg:w-[70%] lg:mx-auto"},pt={class:"mb-[150px] md:mb-0 md:w-[45%]"},_t={class:"break-all text-justify pb-10 md:pb-6 md:text-[12px] lg:text-[13px]"},ut=g(()=>e("hr",{class:"pb-10 md:pb-6"},null,-1)),ft=g(()=>e("p",{class:"hidden font-semibold pb-4"},"HITS",-1)),ht={class:"gap-3 flex flex-row md:flex-col flex-wrap items-center md:items-end"},gt={class:"artist-honors-relative md:w-[50%]"},bt=g(()=>e("p",{class:"honors text-stroke-light bg-artistName text-4xl md:text-[4.5rem] xl:text-7xl"},"HONORS",-1)),vt={class:"bg-shadow-trans-text artist-honors w-[90%] md:w-[100%] ml-auto text-center break-keep py-[50px] px-[10px] md:py-[60px] rounded-[31px] z-[-1]"},yt=g(()=>e("br",null,null,-1)),kt=g(()=>e("br",null,null,-1)),wt={class:"flex items-center"},At={class:"concert-box-time mr-3.5 md:mr-[45px] xl:mr-[120px]"},Ct={class:"text-[12px] sm:text-[15px] md:text-[19px]"},St={class:"text-[14px] sm:text-[18px] md:text-[22px]"},Dt={class:"text-[14px] sm:text-[17px] md:text-[21px]"},Tt={class:"text-[13px] sm:text-[16px] md:text-[18px] text-gray-300"},jt=["onClick"],Nt={key:1,class:"concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto"},Bt={class:"mb-[150px]"},It={class:"flex items-center"},Yt={class:"concert-box-time mr-3.5 md:mr-[45px] xl:mr-[120px]"},Ft={class:"text-[12px] sm:text-[15px] md:text-[19px]"},Mt={class:"text-[14px] sm:text-[18px] md:text-[22px]"},$t={class:"text-[14px] sm:text-[17px] md:text-[21px]"},Vt={class:"text-[13px] sm:text-[16px] md:text-[18px] text-gray-300"},zt=["onClick"],Ot={key:1,class:"concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto"},{setIsLoading:O}=R(),{swalWithStylingButtons:H}=tt(),Ht={data(){return{checkData:null,singleArtist:null,savedConcertsData:null}},computed:{...U(q,["AccessToken"]),saveState(){return this.savedConcertsData}},methods:{...E(et,["postFollowConcetsData","deleteFollowConcetsData"]),async getSingleArtistData(o){try{O();const t=await G(o);this.singleArtist=t.data.data}catch(t){console.log(t)}finally{O()}},toggleFollowArtist(o,t){if(!this.AccessToken){H.fire({title:"登入後才能用追蹤功能喔！",showCancelButton:!0,confirmButtonText:"前往登入"}).then(x=>{x.isConfirmed&&(window.location.href="login#/login")});return}if(o)this.deleteFollowConcetsData(t).then(()=>this.getSingleArtistData(t));else{this.postFollowConcetsData(t).then(()=>this.getSingleArtistData(t));return}},changeSaveConcertsMode(o){var t;if(this.AccessToken===void 0){H.fire({title:"登入後才能用收藏功能喔！",showCancelButton:!0,confirmButtonText:"前往登入"}).then(x=>{x.isConfirmed&&(window.location.href="login#/login")});return}(t=this.savedConcertsData)!=null&&t.some(x=>x.id===o)?this.deleteSaveConcertsData(o).then(()=>this.getSavedConcertsData()):this.postSaveConcertsData(o).then(()=>this.getSavedConcertsData())},async getSavedConcertsData(){try{const o=await J();this.savedConcertsData=o.data.data.saved_concerts}catch(o){console.log(o)}},async postSaveConcertsData(o){try{const t=await P(o);console.log(t)}catch(t){console.log(t)}},async deleteSaveConcertsData(o){try{const t=await W(o);console.log(t)}catch(t){console.log(t)}},updateData(o){this.getSingleArtistData(o)}},mounted(){this.getSingleArtistData(Number(this.$route.params.id)),this.AccessToken&&this.getSavedConcertsData()}},Lt=Object.assign(Ht,{__name:"ArtistSingleView",setup(o){return(t,x)=>{var C,S,D,T,j,N,B,I,Y,F,M,$,V;const b=Z("font-awesome-icon");return a(),l("div",st,[e("section",ot,[e("div",at,[e("div",nt,[(a(!0),l(f,null,h((C=t.singleArtist)==null?void 0:C.keywords,(s,n)=>(a(),l("p",{class:"mr-3",key:n},r(s)+" /",1))),128))]),m(d(w),null,{default:i(()=>[m(d(y),null,{default:i(()=>{var s,n;return[(a(),l("button",{key:(s=t.singleArtist)==null?void 0:s.id,class:K(["basic text-base",(n=t.singleArtist)!=null&&n.is_followed?"tiffany-follow":"tiffany-outline"]),onClick:x[0]||(x[0]=_=>t.toggleFollowArtist(t.singleArtist.is_followed,t.singleArtist.id))}," follow ",2))]}),_:1}),t.AccessToken===void 0?(a(),p(d(k),{key:0},{default:i(()=>[c(" 請登入開啟追蹤功能 ")]),_:1})):A("",!0)]),_:1})]),e("div",lt,[e("img",{class:"rounded-xl mb-5",src:(D=(S=t.singleArtist)==null?void 0:S.cover_urls)==null?void 0:D.horizontal,alt:(T=t.singleArtist)==null?void 0:T.name},null,8,rt),e("div",it,[e("div",dt,[e("div",ct,r((j=t.singleArtist)==null?void 0:j.name),1),e("div",xt,r((N=t.singleArtist)==null?void 0:N.name),1)])])])]),e("div",mt,[e("section",pt,[e("p",_t,r((B=t.singleArtist)==null?void 0:B.description),1),ut,ft,e("div",ht,[(a(!0),l(f,null,h((I=t.singleArtist)==null?void 0:I.popular_songs,(s,n)=>(a(),l("div",{key:n,class:"song border text-center rounded-2xl py-[8px] px-[11px]"},r(s),1))),128))])]),e("section",gt,[bt,e("p",vt,[(a(!0),l(f,null,h((Y=t.singleArtist)==null?void 0:Y.honors,(s,n)=>(a(),l("span",{key:n},[c(r(s)+" ",1),yt,c("-"),kt]))),128))])])]),e("div",null,[m(z,{class:"flex justify-center mb-[30px] space-y-[20px] md:space-y-[58px] lg:space-y-[117px] pb-[128px] lg:pb-[192px]"},{subTitle:i(()=>[c("UPCOMING")]),mainTitle:i(()=>[c("即將舉辦")]),_:1}),((F=t.singleArtist)==null?void 0:F.upcoming_concerts.length)>0?(a(!0),l(f,{key:0},h((M=t.singleArtist)==null?void 0:M.upcoming_concerts,s=>{var n;return a(),l("div",{key:s.id,class:"concert-box border rounded-[25px] py-[10px] px-[9px] mb-6 flex justify-between items-center lg:w-[70%] lg:mx-auto"},[e("div",wt,[e("div",At,[e("p",Ct,r(d(v)(s.holding_time).format("MM/DD")),1),e("p",St,r(d(v)(s.holding_time).format("YYYY")),1)]),e("div",null,[e("p",Dt,r(s==null?void 0:s.title),1),e("p",Tt,r((n=s==null?void 0:s.venue)==null?void 0:n.title),1)])]),m(d(w),null,{default:i(()=>[m(d(y),null,{default:i(()=>{var _;return[e("button",{class:"mb-auto",onClick:u=>t.changeSaveConcertsMode(s.id)},[(_=t.saveState)!=null&&_.some(u=>u.id===(s==null?void 0:s.id))?(a(),p(b,{key:0,icon:"fa-solid fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})):(a(),p(b,{key:1,icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"}))],8,jt)]}),_:2},1024),t.AccessToken===void 0?(a(),p(d(k),{key:0},{default:i(()=>[c(" 登入開啟收藏功能 ")]),_:1})):A("",!0)]),_:2},1024)])}),128)):(a(),l("div",Nt,"目前沒有資料 ~ ~ ~"))]),e("div",Bt,[m(z,{class:"flex justify-center mb-[30px] space-y-[20px] md:space-y-[58px] lg:space-y-[117px] pb-[128px] lg:pb-[192px]"},{subTitle:i(()=>[c("HISTORY")]),mainTitle:i(()=>[c("已結束")]),_:1}),(($=t.singleArtist)==null?void 0:$.historical_concerts.length)>0?(a(!0),l(f,{key:0},h((V=t.singleArtist)==null?void 0:V.historical_concerts,s=>{var n;return a(),l("div",{key:s.id,class:"concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-between items-center lg:w-[70%] lg:mx-auto"},[e("div",It,[e("div",Yt,[e("p",Ft,r(d(v)(s.holding_time).format("MM/DD")),1),e("p",Mt,r(d(v)(s.holding_time).format("YYYY")),1)]),e("div",null,[e("p",$t,r(s==null?void 0:s.title),1),e("p",Vt,r((n=s==null?void 0:s.venue)==null?void 0:n.title),1)])]),m(d(w),null,{default:i(()=>[m(d(y),null,{default:i(()=>{var _;return[e("button",{class:"mb-auto",onClick:u=>t.changeSaveConcertsMode(s.id)},[(_=t.saveState)!=null&&_.some(u=>u.id===(s==null?void 0:s.id))?(a(),p(b,{key:0,icon:"fa-solid fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"})):(a(),p(b,{key:1,icon:"fa-regular fa-bookmark",class:"text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]"}))],8,zt)]}),_:2},1024),t.AccessToken===void 0?(a(),p(d(k),{key:0},{default:i(()=>[c(" 請登入開啟收藏功能 ")]),_:1})):A("",!0)]),_:2},1024)])}),128)):(a(),l("div",Ot,"目前沒有資料 ~ ~ ~"))])])}}}),Kt=L(Lt,[["__scopeId","data-v-b2e0000a"]]);export{Kt as default};
