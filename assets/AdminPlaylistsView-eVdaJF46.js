import{o,c as d,O as X,u as e,P as H,_ as J,r as y,a as r,t as f,F as k,a0 as K,aj as Q,a7 as Z,U as ee,V as se,ah as le,b as s,w as l,af as x,ag as L,j as n,S as te,k as _,h as C,ad as A,a8 as R,a9 as D,aa as B,ab as I,ai as V,ac as ae,ak as ne,W as ie,Y as ce,X as oe,d as ue}from"./index-6jqG1WDG.js";import{a as de,b as re,c as j,d as E,e as q,f as U,g as _e,h as fe,i as T,_ as P}from"./AlertDialogCancel-0lI5dVCI.js";import{_ as he}from"./ScrollArea-UpM9-ex5.js";import{_ as me,a as pe,b as ge}from"./PaginationPrev-s_QPWyFr.js";import{_ as ke,a as ve}from"./PaginationLast-csquQqG_.js";import{_ as Ce,a as $,b as p,c as we,d as u,e as ye}from"./TableRow-G8loN_hN.js";import{_ as $e}from"./TableCaption-dfv-mkZT.js";import{_ as z,a as M,b as N,c as O,d as W,e as w,f as F}from"./SelectLabel-mOV3FxFl.js";import{_ as G}from"./AlertDialogDescription-DNM7uaBY.js";import{u as be}from"./useApiData-LJLfHIsY.js";const g={__name:"Skeleton",props:{class:{type:String,required:!1}},setup(a){const t=a;return(c,h)=>(o(),d("div",{class:X(e(H)("animate-pulse rounded-md bg-secondary",t.class))},null,2))}},Se={props:["mapSongs","concertTitle"]};function xe(a,t,c,h,i,v){return o(!0),d(k,null,y(c.mapSongs[c.concertTitle],m=>(o(),d("h6",{key:m.id,class:"py-4"},[r("span",null,f(m.id)+". ",1),r("span",null,f(m.name),1)]))),128)}const Y=J(Se,[["render",xe]]),{httpData:Le}=be(),b=K("songsStore",{state:()=>({selectReview:"未審閱",sortInitial:!0,controlCheckAll:!0,songCheckList:[],songs:[],backupDatas:[],mapSongs:{},pagination:{}}),actions:{getSongs(a){Le("get",a).then(t=>{for(const c of t.data)c.id=c.id.toString();this.songs=[...t.data],this.pagination={...t.pagination},console.log(this.pagination),this.backupDatas=[...t.data],this.mapSongs=Object.groupBy([...t.data],({concert:c})=>c.title)})},checkReview(a){const t=this.songs.find(c=>c.id===a);t.is_reviewed=!0},chagneCheckList(a){const t=this.songs.find(h=>h.id===a),c=this.songCheckList.findIndex(h=>h.id===a);c===-1?this.songCheckList.push(t):this.songCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.checkReview(t.id)}),a.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0},checkAllList(){if(!this.controlCheckAll)return;const a=document.querySelectorAll('[role="checkbox"]');a.forEach((t,c)=>{if(c!==0){if(t.dataset.state!==a[0].dataset.state)return;t.click()}})},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.checkReview(t.id)}),a.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.deleteSong(t.id)}),a.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortSongByDownVotes(){this.sortInitial=!this.sortInitial,this.sortInitial?this.songs.sort((a,t)=>a.down_votes-t.down_votes):this.songs.sort((a,t)=>t.down_votes-a.down_votes)},searchSong:Q(function(a){if(this.songs=[...this.backupDatas],a.target.value==="")return;const t=new RegExp(a.target.value,"i"),c=this.songs.filter(i=>t.test(i.name)),h=this.songs.filter(()=>t.test(this.userId1.email));this.songs=[...c,...h]},500,{maxWait:2e3}),deleteSong(a){console.log(a);const t=this.songs.findIndex(c=>c.id===a);this.songs.splice(t,1),this.alertMessage("success","評論已刪除")},warnUser(a){console.log(a),this.deleteSong(a),this.alertMessage("success",`對${this.userId1.email}使用者警告已送出`)},alertMessage(a,t){Z.fire({icon:a,text:t})}},getters:{filterDatas(){return this.selectReview==="全部"?this.songs:this.selectReview==="未審閱"?this.songs.filter(a=>!a.is_reviewed):this.songs.filter(a=>a.is_reviewed)}}}),Ae={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},Re={class:"col-span-2 lg:col-span-1"},De={class:"flex col-span-2"},Be=r("span",{class:"material-symbols-outlined absolute"}," search ",-1),Ie={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},Ve={key:0},je={key:1},Ee={key:0,class:"material-symbols-outlined"},qe={key:1,class:"material-symbols-outlined"},Ue=["for"],Te=r("span",{class:"material-symbols-outlined"},"delete",-1),Pe={class:"flex justify-center py-12"},ze=r("h2",null,"哇! 找不到資料~",-1),Me=[ze],Ne={class:"flex justify-center"},Oe={components:{SongList:Y},inject:["http","path","adminPath"],methods:{...ee(b,["getSongs","checkReview","checkSelectReview","chagneCheckList","checkAllList","searchSong","sortSongByDownVotes","deleteSong","warnUser","alertMessage","deleteSelectReview"])},computed:{...se(b,["songs","mapSongs","songCheckList","sortInitial","filterDatas","pagination"]),...le(b,["selectReview"])},mounted(){this.getSongs(this.adminPath.songs)}},es=Object.assign(Oe,{__name:"AdminPlaylistsView",setup(a){return(t,c)=>{const h=ue("router-link");return o(),d(k,null,[r("div",Ae,[r("div",Re,[s(e(F),{modelValue:t.selectReview,"onUpdate:modelValue":c[0]||(c[0]=i=>t.selectReview=i)},{default:l(()=>[s(e(z),null,{default:l(()=>[s(e(M),{placeholder:"未審閱"})]),_:1}),s(e(N),null,{default:l(()=>[s(e(O),null,{default:l(()=>[s(e(W),null,{default:l(()=>[n("評論審閱")]),_:1}),s(e(w),{value:"未審閱"},{default:l(()=>[n(" 未審閱 ")]),_:1}),s(e(w),{value:"已審閱"},{default:l(()=>[n(" 已審閱 ")]),_:1}),s(e(w),{value:"全部"},{default:l(()=>[n(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),r("div",De,[s(e(te),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:t.searchSong,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),s(e(_),{class:"rounded-l-none"},{default:l(()=>[Be]),_:1})]),r("div",Ie,[r("p",null,"列表數量: "+f(t.filterDatas.length),1),r("div",null,[s(e(_),{class:"bg-lime-500 hover:bg-lime-700",disabled:!t.songCheckList.length,onClick:t.checkSelectReview},{default:l(()=>[n("已審閱")]),_:1},8,["disabled","onClick"]),s(e(fe),null,{default:l(()=>[s(e(de),null,{default:l(()=>[s(e(_),{class:"ml-4",variant:"destructive",disabled:!t.songCheckList.length},{default:l(()=>[n("刪除")]),_:1},8,["disabled"])]),_:1}),s(e(re),null,{default:l(()=>[t.songCheckList.length?(o(),d("div",Ve,[s(e(j),null,{default:l(()=>[s(e(E),null,{default:l(()=>[n("是否刪除以下歌曲")]),_:1}),s(e(G),null,{default:l(()=>[(o(!0),d(k,null,y(t.songCheckList,i=>(o(),d("p",{key:i.id},f(i.name),1))),128))]),_:1})]),_:1}),s(e(q),null,{default:l(()=>[s(e(U),null,{default:l(()=>[n("Cancel")]),_:1}),s(e(_e),{onClick:t.deleteSelectReview},{default:l(()=>[n("Continue")]),_:1},8,["onClick"])]),_:1})])):(o(),d("div",je,[s(e(j),null,{default:l(()=>[s(e(E),{class:"text-center"},{default:l(()=>[n("請先點取歌曲")]),_:1}),s(e(G))]),_:1}),s(e(q),null,{default:l(()=>[s(e(U),null,{default:l(()=>[n("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),x(s(e(ye),{class:"bg-white rounded-lg text-md mb-10"},{default:l(()=>[s(e($e),null,{default:l(()=>[n("歌單管理控制面板")]),_:1}),s(e(Ce),null,{default:l(()=>[s(e($),{class:"hover:bg-white",style:{color:"black !important"}},{default:l(()=>[s(e(p),null,{default:l(()=>[s(e(T),{onClick:t.checkAllList},null,8,["onClick"])]),_:1}),s(e(p),null,{default:l(()=>[s(e(_),{variant:"ghost",onClick:t.sortSongByDownVotes},{default:l(()=>[n("倒推人數"),t.sortInitial?(o(),d("span",Ee," stat_1 ")):(o(),d("span",qe," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),s(e(p),null,{default:l(()=>[n("歌曲")]),_:1}),s(e(p),null,{default:l(()=>[n("全部歌單")]),_:1}),s(e(p),null,{default:l(()=>[n("演唱會")]),_:1}),s(e(p),null,{default:l(()=>[n("用戶名")]),_:1}),s(e(p))]),_:1})]),_:1}),s(e(we),{class:"text-gray-600"},{default:l(()=>[(o(),C(ne,null,{default:l(()=>[(o(!0),d(k,null,y(t.filterDatas,i=>(o(),C(e($),{class:"py-8",key:i.id},{default:l(()=>[s(e(u),{class:"text-purple-primary"},{default:l(()=>[s(e(T),{id:i.id,onClick:v=>t.chagneCheckList(i.id),class:"checkboxList"},null,8,["id","onClick"]),r("label",{for:i.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,Ue)]),_:2},1024),s(e(u),{class:"text-purple-primary text-center"},{default:l(()=>[n(f(i.down_votes),1)]),_:2},1024),s(e(u),null,{default:l(()=>[n(f(i.name),1)]),_:2},1024),s(e(u),null,{default:l(()=>[s(e(A),null,{default:l(()=>[s(e(R),null,{default:l(()=>[s(e(_),null,{default:l(()=>[n(" 檢視 ")]),_:1})]),_:1}),s(e(D),{class:"p-12"},{default:l(()=>[s(e(B),{class:"border-b-2 pb-4"},{default:l(()=>[s(e(I),null,{default:l(()=>[n(f(i.concert.title),1)]),_:2},1024),s(e(V),null,{default:l(()=>[n(" 歌單列表 ")]),_:1})]),_:2},1024),s(e(he),{class:"h-[300px] rounded-md border p-4"},{default:l(()=>[s(Y,{mapSongs:t.mapSongs,concertTitle:i.concert.title},null,8,["mapSongs","concertTitle"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),s(e(u),null,{default:l(()=>[s(h,{class:"text-purple-500 hover:text-purple-800",to:"/concert/4"},{default:l(()=>[n(f(i.concert.title),1)]),_:2},1024)]),_:2},1024),s(e(u),null,{default:l(()=>[n(f(i.user.email),1)]),_:2},1024),s(e(u),{class:"space-x-4 flex"},{default:l(()=>[i.is_reviewed?(o(),C(e(_),{key:1,class:"bg-lime-500"},{default:l(()=>[n("已審閱")]),_:1})):(o(),C(e(_),{key:0,class:"bg-gray-200",onClick:v=>t.checkReview(i.id)},{default:l(()=>[n("未審閱")]),_:2},1032,["onClick"])),s(e(A),null,{default:l(()=>[s(e(R),null,{default:l(()=>[s(e(_),{variant:"destructive"},{default:l(()=>[Te]),_:1})]),_:1}),s(e(D),null,{default:l(()=>[s(e(B),null,{default:l(()=>[s(e(I),{class:"text-center"},{default:l(()=>[n("是否要警告使用者？")]),_:1}),s(e(V),null,{default:l(()=>[s(e(F),null,{default:l(()=>[s(e(z),null,{default:l(()=>[s(e(M),{placeholder:"警告原因"})]),_:1}),s(e(N),null,{default:l(()=>[s(e(O),null,{default:l(()=>[s(e(W),null,{default:l(()=>[n("警告原因")]),_:1}),s(e(w),{value:"不實評論"},{default:l(()=>[n(" 不實評論 ")]),_:1}),s(e(w),{value:"惡意評論"},{default:l(()=>[n(" 惡意評論 ")]),_:1}),s(e(w),{value:"腥羶色內容"},{default:l(()=>[n(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(e(ae),null,{default:l(()=>[s(e(P),null,{default:l(()=>[s(e(_),{class:"bg-lime-500",onClick:v=>t.deleteSong(i.id)},{default:l(()=>[n("不警告")]),_:2},1032,["onClick"])]),_:2},1024),s(e(P),null,{default:l(()=>[s(e(_),{variant:"destructive",onClick:v=>t.warnUser(i.user.email)},{default:l(()=>[n("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),fallback:l(()=>[(o(),d(k,null,y(10,i=>s(e($),{class:"py-8",key:i},{default:l(()=>[s(e(u),{class:"text-purple-primary"},{default:l(()=>[s(e(g),{class:"size-5 rounded-xl"})]),_:1}),s(e(u),{class:"text-purple-primary text-center"},{default:l(()=>[s(e(g),{class:"h-5"})]),_:1}),s(e(u),null,{default:l(()=>[s(e(g),{class:"h-5"})]),_:1}),s(e(u),null,{default:l(()=>[s(e(g),{class:"h-5"})]),_:1}),s(e(u),null,{default:l(()=>[s(e(g),{class:"h-5"})]),_:1}),s(e(u),null,{default:l(()=>[s(e(g),{class:"h-5"})]),_:1}),s(e(u),null,{default:l(()=>[s(e(g),{class:"h-5"})]),_:1})]),_:2},1024)),64))]),_:1}))]),_:1})]),_:1},512),[[L,t.filterDatas.length!==0]]),x(r("div",Pe,Me,512),[[L,!t.filterDatas.length]]),r("div",Ne,[s(e(oe),{total:t.pagination.total*10,"sibling-count":1,"show-edges":"","default-page":1},{default:l(({page:i})=>[s(e(ie),{class:"flex items-center md:gap-1"},{default:l(({items:v})=>[s(e(ke)),s(e(me)),(o(!0),d(k,null,y(v,(m,S)=>(o(),d(k,null,[m.type==="page"?(o(),C(e(ce),{key:S,value:m.value,"as-child":""},{default:l(()=>[s(e(_),{class:"w-10 h-10 p-0",variant:m.value===i?"default":"page"},{default:l(()=>[n(f(m.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),C(e(pe),{key:m.type,index:S,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),s(e(ge)),s(e(ve))]),_:2},1024)]),_:1},8,["total"])])],64)}}});export{es as default};