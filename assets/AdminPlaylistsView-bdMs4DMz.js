import{o,c as u,H as Q,u as e,I as L,h as g,w as t,d as s,N as X,O as Z,P as ee,Q as se,E as te,R as le,T as ae,_ as ne,r as w,F as y,a as d,t as p,p as ie,U as ce,B as oe,z as re,S as ue,m as de,n as fe,M as _e,K as D,L as A,j as n,k as h,V as he,G as pe,D as me,b as ge,Y as ke}from"./index-Av_AIawF.js";import{_ as R,a as ve,b as ye}from"./PaginationLast-DSfevN9P.js";import{u as be,_ as we}from"./Input-5OeCq9qe.js";import{_ as Se,a as Ce,b as $e}from"./PaginationPrev-EcXzKg4m.js";import{_ as B,a as q,b as I,c as j,d as E,f as b,e as V,g as xe,h as $,i as k,j as Le,l as De,k as r}from"./SelectLabel-jq-JfmPM.js";import{_ as Ae}from"./TableCaption-WbArJVBR.js";import{_ as Re,a as Be,b as P,c as T,d as U,e as z,f as M,g as qe,h as Ie,i as N,j as G,k as H,l as O,m as F,n as W,o as je,p as Y}from"./AlertDialogCancel-y5n8X9eL.js";const v={__name:"Skeleton",props:{class:{type:String,required:!1}},setup(a){const l=a;return(c,f)=>(o(),u("div",{class:Q(e(L)("animate-pulse rounded-md bg-secondary",l.class))},null,2))}},Ee={__name:"ScrollBar",props:{orientation:{type:String,required:!1,default:"vertical"},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const l=a;return(c,f)=>(o(),g(e(ee),Z(l,{class:e(L)("flex touch-none select-none transition-colors",a.orientation==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",a.orientation==="horizontal"&&"h-2.5 border-t border-t-transparent p-[1px]",c.$attrs.class??"")}),{default:t(()=>[s(e(X),{class:"relative flex-1 rounded-full bg-border"})]),_:1},16,["class"]))}},Ve={__name:"ScrollArea",props:{type:{type:String,required:!1},dir:{type:String,required:!1},scrollHideDelay:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:String,required:!1,default:""}},setup(a){const l=a;return(c,f)=>(o(),g(e(ae),{type:a.type,class:Q(e(L)("relative overflow-hidden",l.class))},{default:t(()=>[s(e(se),{class:"h-full w-full rounded-[inherit]"},{default:t(()=>[te(c.$slots,"default")]),_:3}),s(Ee),s(e(le))]),_:3},8,["type","class"]))}},Pe={props:["mapSongs","concertTitle"]};function Te(a,l,c,f,i,m){return o(!0),u(y,null,w(c.mapSongs[c.concertTitle],_=>(o(),u("h6",{key:_.id,class:"py-4"},[d("span",null,p(_.id)+". ",1),d("span",null,p(_.name),1)]))),128)}const J=ne(Pe,[["render",Te]]),{setIsLoading:K}=ie(),Ue=()=>{let a;const l=ce(null);return{state:a,err:l,httpData:async(f,i,m)=>(K(m),new Promise((_,S)=>{oe[f](i).then(C=>{a=C.data,_(a)}).catch(C=>{console.log(C),l.value=C,S(l)}).finally(()=>{K()})}))}},{httpData:ze}=Ue(),x=re("songsStore",{state:()=>({selectReview:"未審閱",sortInitial:!0,controlCheckAll:!0,songCheckList:[],songs:[],backupDatas:[],mapSongs:{},pagination:{}}),actions:{getSongs(a){ze("get",a).then(l=>{for(const c of l.data)c.id=c.id.toString();this.songs=[...l.data],this.pagination={...l.pagination},console.log(this.pagination),this.backupDatas=[...l.data],this.mapSongs=Object.groupBy([...l.data],({concert:c})=>c.title)})},checkReview(a){const l=this.songs.find(c=>c.id===a);l.is_reviewed=!0},chagneCheckList(a){const l=this.songs.find(f=>f.id===a),c=this.songCheckList.findIndex(f=>f.id===a);c===-1?this.songCheckList.push(l):this.songCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(l=>{this.checkReview(l.id)}),a.forEach(l=>{l.dataset.state==="checked"&&l.click()}),this.controlCheckAll=!0},checkAllList(){if(!this.controlCheckAll)return;const a=document.querySelectorAll('[role="checkbox"]');a.forEach((l,c)=>{if(c!==0){if(l.dataset.state!==a[0].dataset.state)return;l.click()}})},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(l=>{this.checkReview(l.id)}),a.forEach(l=>{l.dataset.state==="checked"&&l.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(l=>{this.deleteSong(l.id)}),a.forEach(l=>{l.dataset.state==="checked"&&l.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortSongByDownVotes(){this.sortInitial=!this.sortInitial,this.sortInitial?this.songs.sort((a,l)=>a.down_votes-l.down_votes):this.songs.sort((a,l)=>l.down_votes-a.down_votes)},searchSong:be(function(a){if(this.songs=[...this.backupDatas],a.target.value==="")return;const l=new RegExp(a.target.value,"i"),c=this.songs.filter(i=>l.test(i.name)),f=this.songs.filter(()=>l.test(this.userId1.email));this.songs=[...c,...f]},500,{maxWait:2e3}),deleteSong(a){console.log(a);const l=this.songs.findIndex(c=>c.id===a);this.songs.splice(l,1),this.alertMessage("success","評論已刪除")},warnUser(a){console.log(a),this.deleteSong(a),this.alertMessage("success",`對${this.userId1.email}使用者警告已送出`)},alertMessage(a,l){ue.fire({icon:a,text:l})}},getters:{filterDatas(){return this.selectReview==="全部"?this.songs:this.selectReview==="未審閱"?this.songs.filter(a=>!a.is_reviewed):this.songs.filter(a=>a.is_reviewed)}}}),Me={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},Ne={class:"col-span-2 lg:col-span-1"},Ge={class:"flex col-span-2"},He=d("span",{class:"material-symbols-outlined absolute"}," search ",-1),Oe={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},Fe={key:0},We={key:1},Ye={key:0,class:"material-symbols-outlined"},Ke={key:1,class:"material-symbols-outlined"},Qe=["for"],Je=d("span",{class:"material-symbols-outlined"},"delete",-1),Xe={class:"flex justify-center py-12"},Ze=d("h2",null,"哇! 找不到資料~",-1),es=[Ze],ss={class:"flex justify-center"},ts={components:{SongList:J},inject:["http","path","adminPath"],methods:{...de(x,["getSongs","checkReview","checkSelectReview","chagneCheckList","checkAllList","searchSong","sortSongByDownVotes","deleteSong","warnUser","alertMessage","deleteSelectReview"])},computed:{...fe(x,["songs","mapSongs","songCheckList","sortInitial","filterDatas","pagination"]),..._e(x,["selectReview"])},mounted(){this.getSongs(this.adminPath.songs)}},us=Object.assign(ts,{__name:"AdminPlaylistsView",setup(a){return(l,c)=>{const f=ge("router-link");return o(),u(y,null,[d("div",Me,[d("div",Ne,[s(e(V),{modelValue:l.selectReview,"onUpdate:modelValue":c[0]||(c[0]=i=>l.selectReview=i)},{default:t(()=>[s(e(B),null,{default:t(()=>[s(e(q),{placeholder:"未審閱"})]),_:1}),s(e(I),null,{default:t(()=>[s(e(j),null,{default:t(()=>[s(e(E),null,{default:t(()=>[n("評論審閱")]),_:1}),s(e(b),{value:"未審閱"},{default:t(()=>[n(" 未審閱 ")]),_:1}),s(e(b),{value:"已審閱"},{default:t(()=>[n(" 已審閱 ")]),_:1}),s(e(b),{value:"全部"},{default:t(()=>[n(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d("div",Ge,[s(e(we),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:l.searchSong,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),s(e(h),{class:"rounded-l-none"},{default:t(()=>[He]),_:1})]),d("div",Oe,[d("p",null,"列表數量: "+p(l.filterDatas.length),1),d("div",null,[s(e(h),{class:"bg-lime-500 hover:bg-lime-700",disabled:!l.songCheckList.length,onClick:l.checkSelectReview},{default:t(()=>[n("已審閱")]),_:1},8,["disabled","onClick"]),s(e(Ie),null,{default:t(()=>[s(e(Re),null,{default:t(()=>[s(e(h),{class:"ml-4",variant:"destructive",disabled:!l.songCheckList.length},{default:t(()=>[n("刪除")]),_:1},8,["disabled"])]),_:1}),s(e(Be),null,{default:t(()=>[l.songCheckList.length?(o(),u("div",Fe,[s(e(P),null,{default:t(()=>[s(e(T),null,{default:t(()=>[n("是否刪除以下歌曲")]),_:1}),s(e(U),null,{default:t(()=>[(o(!0),u(y,null,w(l.songCheckList,i=>(o(),u("p",{key:i.id},p(i.name),1))),128))]),_:1})]),_:1}),s(e(z),null,{default:t(()=>[s(e(M),null,{default:t(()=>[n("Cancel")]),_:1}),s(e(qe),{onClick:l.deleteSelectReview},{default:t(()=>[n("Continue")]),_:1},8,["onClick"])]),_:1})])):(o(),u("div",We,[s(e(P),null,{default:t(()=>[s(e(T),{class:"text-center"},{default:t(()=>[n("請先點取歌曲")]),_:1}),s(e(U))]),_:1}),s(e(z),null,{default:t(()=>[s(e(M),null,{default:t(()=>[n("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),D(s(e(De),{class:"bg-white rounded-lg text-md mb-10"},{default:t(()=>[s(e(Ae),null,{default:t(()=>[n("歌單管理控制面板")]),_:1}),s(e(xe),null,{default:t(()=>[s(e($),{class:"hover:bg-white",style:{color:"black !important"}},{default:t(()=>[s(e(k),null,{default:t(()=>[s(e(R),{onClick:l.checkAllList},null,8,["onClick"])]),_:1}),s(e(k),null,{default:t(()=>[s(e(h),{variant:"ghost",onClick:l.sortSongByDownVotes},{default:t(()=>[n("倒推人數"),l.sortInitial?(o(),u("span",Ye," stat_1 ")):(o(),u("span",Ke," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),s(e(k),null,{default:t(()=>[n("歌曲")]),_:1}),s(e(k),null,{default:t(()=>[n("全部歌單")]),_:1}),s(e(k),null,{default:t(()=>[n("演唱會")]),_:1}),s(e(k),null,{default:t(()=>[n("用戶名")]),_:1}),s(e(k))]),_:1})]),_:1}),s(e(Le),{class:"text-gray-600"},{default:t(()=>[(o(),g(he,null,{default:t(()=>[(o(!0),u(y,null,w(l.filterDatas,i=>(o(),g(e($),{class:"py-8",key:i.id},{default:t(()=>[s(e(r),{class:"text-purple-primary"},{default:t(()=>[s(e(R),{id:i.id,onClick:m=>l.chagneCheckList(i.id),class:"checkboxList"},null,8,["id","onClick"]),d("label",{for:i.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,Qe)]),_:2},1024),s(e(r),{class:"text-purple-primary text-center"},{default:t(()=>[n(p(i.down_votes),1)]),_:2},1024),s(e(r),null,{default:t(()=>[n(p(i.name),1)]),_:2},1024),s(e(r),null,{default:t(()=>[s(e(N),null,{default:t(()=>[s(e(G),null,{default:t(()=>[s(e(h),null,{default:t(()=>[n(" 檢視 ")]),_:1})]),_:1}),s(e(H),{class:"p-12"},{default:t(()=>[s(e(O),{class:"border-b-2 pb-4"},{default:t(()=>[s(e(F),null,{default:t(()=>[n(p(i.concert.title),1)]),_:2},1024),s(e(W),null,{default:t(()=>[n(" 歌單列表 ")]),_:1})]),_:2},1024),s(e(Ve),{class:"h-[300px] rounded-md border p-4"},{default:t(()=>[s(J,{mapSongs:l.mapSongs,concertTitle:i.concert.title},null,8,["mapSongs","concertTitle"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),s(e(r),null,{default:t(()=>[s(f,{class:"text-purple-500 hover:text-purple-800",to:"/concert/4"},{default:t(()=>[n(p(i.concert.title),1)]),_:2},1024)]),_:2},1024),s(e(r),null,{default:t(()=>[n(p(i.user.email),1)]),_:2},1024),s(e(r),{class:"space-x-4 flex"},{default:t(()=>[i.is_reviewed?(o(),g(e(h),{key:1,class:"bg-lime-500"},{default:t(()=>[n("已審閱")]),_:1})):(o(),g(e(h),{key:0,class:"bg-gray-200",onClick:m=>l.checkReview(i.id)},{default:t(()=>[n("未審閱")]),_:2},1032,["onClick"])),s(e(N),null,{default:t(()=>[s(e(G),null,{default:t(()=>[s(e(h),{variant:"destructive"},{default:t(()=>[Je]),_:1})]),_:1}),s(e(H),null,{default:t(()=>[s(e(O),null,{default:t(()=>[s(e(F),{class:"text-center"},{default:t(()=>[n("是否要警告使用者？")]),_:1}),s(e(W),null,{default:t(()=>[s(e(V),null,{default:t(()=>[s(e(B),null,{default:t(()=>[s(e(q),{placeholder:"警告原因"})]),_:1}),s(e(I),null,{default:t(()=>[s(e(j),null,{default:t(()=>[s(e(E),null,{default:t(()=>[n("警告原因")]),_:1}),s(e(b),{value:"不實評論"},{default:t(()=>[n(" 不實評論 ")]),_:1}),s(e(b),{value:"惡意評論"},{default:t(()=>[n(" 惡意評論 ")]),_:1}),s(e(b),{value:"腥羶色內容"},{default:t(()=>[n(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(e(je),null,{default:t(()=>[s(e(Y),null,{default:t(()=>[s(e(h),{class:"bg-lime-500",onClick:m=>l.deleteSong(i.id)},{default:t(()=>[n("不警告")]),_:2},1032,["onClick"])]),_:2},1024),s(e(Y),null,{default:t(()=>[s(e(h),{variant:"destructive",onClick:m=>l.warnUser(i.user.email)},{default:t(()=>[n("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),fallback:t(()=>[(o(),u(y,null,w(10,i=>s(e($),{class:"py-8",key:i},{default:t(()=>[s(e(r),{class:"text-purple-primary"},{default:t(()=>[s(e(v),{class:"size-5 rounded-xl"})]),_:1}),s(e(r),{class:"text-purple-primary text-center"},{default:t(()=>[s(e(v),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(v),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(v),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(v),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(v),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(v),{class:"h-5"})]),_:1})]),_:2},1024)),64))]),_:1}))]),_:1})]),_:1},512),[[A,l.filterDatas.length!==0]]),D(d("div",Xe,es,512),[[A,!l.filterDatas.length]]),d("div",ss,[s(e(me),{total:l.pagination.total*10,"sibling-count":1,"show-edges":"","default-page":1},{default:t(({page:i})=>[s(e(pe),{class:"flex items-center md:gap-1"},{default:t(({items:m})=>[s(e(ve)),s(e(Se)),(o(!0),u(y,null,w(m,(_,S)=>(o(),u(y,null,[_.type==="page"?(o(),g(e(ke),{key:S,value:_.value,"as-child":""},{default:t(()=>[s(e(h),{class:"w-10 h-10 p-0",variant:_.value===i?"default":"page"},{default:t(()=>[n(p(_.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),g(e($e),{key:_.type,index:S,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),s(e(Ce)),s(e(ye))]),_:2},1024)]),_:1},8,["total"])])],64)}}});export{us as default};
