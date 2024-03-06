import{o as c,c as d,D as Z,u as e,Q as X,_ as Y,r as S,a as _,t as g,F as m,a9 as ee,al as se,ap as C,bb as w,aq as ae,ab as te,b8 as le,y as ne,z as ie,aE as oe,b as s,w as a,aC as q,b9 as E,C as n,g as v,T as ce,B as h,b0 as re,b1 as de,b2 as T,b3 as j,ba as z,b4 as M,b5 as U,b6 as ue,b7 as _e,az as F,as as N,at as G,au as K,av as W,aw as H,G as fe,ax as he,ay as J,bc as ge,ae as pe,af as me,ag as ke,d as ve}from"./index-YXoIurfv.js";import{_ as O}from"./Checkbox-RT80Dx4u.js";import{_ as $e}from"./Label-NVXyNRcs.js";import{_ as ye,a as Ce,b as Se,c as be,d as we}from"./PaginationPrev-boglATWC.js";import{_ as Be,a as B,b as $,c as Le,d as u,e as Ie}from"./TableRow-OctWhb9j.js";import{_ as Pe}from"./TableCaption-IIrriuVK.js";import{_ as L,a as I,b as P,c as R,d as x,e as p,f as A}from"./SelectLabel-v-ryAvYo.js";import"./check-I0_A8tlr.js";import"./more-horizontal-wIMTy_8v.js";const y={__name:"Skeleton",props:{class:{type:String,required:!1}},setup(l){const t=l;return(o,k)=>(c(),d("div",{class:Z(e(X)("animate-pulse rounded-md bg-secondary",t.class))},null,2))}},Re={props:["concertSongs"]};function xe(l,t,o,k,i,r){return c(!0),d(m,null,S(o.concertSongs,(b,V)=>(c(),d("h6",{key:b.id,class:"py-4"},[_("span",null,g(V+1)+". ",1),_("span",null,g(b.name),1)]))),128)}const Q=Y(Re,[["render",xe]]),{setIsLoading:f}=ee(),D=se("songsStore",{state:()=>({selectReview:"未審閱",sortInitial:!0,controlCheckAll:!0,songCheckList:[],songs:[],concertSongs:[],backupDatas:[],mapSongs:{},pagination:{},concerts:[],searchText:"",searchPage:1,concertId:"0"}),actions:{getSongs(l=1){f(),C.get(`${w.songs}/?page=${l}`).then(t=>{this.songs=[...t.data.data],this.pagination={...t.data.pagination},this.backupDatas=[...t.data.data]}).catch(t=>{console.error(t)}).finally(()=>{f()})},getSongsByConcert(l){f(),C.get(`${ae.concerts}/${l}`).then(t=>{this.concertSongs=[...t.data.data.songs]}).catch(t=>{console.error(t)}).finally(()=>{f()})},checkReview(l){const t=this.songs.find(o=>o.id===l);t.is_reviewed=!0},chagneCheckList(l){const t=this.songs.find(k=>k.id===l),o=this.songCheckList.findIndex(k=>k.id===l);o===-1?this.songCheckList.push(t):this.songCheckList.splice(o,1)},checkAllList(){if(!this.controlCheckAll)return;const l=document.querySelectorAll('[role="checkbox"]');l.forEach((t,o)=>{if(o!==0){if(t.dataset.state!==l[0].dataset.state)return;t.click()}})},checkSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.checkReview(t.id)}),l.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.deleteSong(t.id)}),l.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortSongByDownVotes(){this.sortInitial=!this.sortInitial,this.sortInitial?this.songs.sort((l,t)=>l.down_votes-t.down_votes):this.songs.sort((l,t)=>t.down_votes-l.down_votes)},searchSong:te(function(l){this.searchText=l.target.value,this.searchPage=1,f(),C.get(`${w.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&?page=${this.searchPage}`).then(t=>{this.songs=[...t.data.data],this.pagination={...t.data.pagination},console.log(t)}).catch(t=>{console.error(t)}).finally(()=>{f()})},500,{maxWait:2e3}),searchSongsByConcert(){this.searchPage=1,f(),C.get(`${w.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&?page=1`).then(l=>{this.songs=[...l.data.data],this.pagination={...l.data.pagination}}).catch(l=>{console.error(l)}).finally(()=>{f()})},searchSongsByPage(l){this.searchPage=l,f(),C.get(`${w.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&page=${l}`).then(t=>{this.songs=[...t.data.data],this.pagination={...t.data.pagination}}).catch(t=>{console.error(t)}).finally(()=>{f()})},getConcerts(){f(),C.get(`${w.concerts}`).then(l=>{this.concerts=[...l.data.data]}).catch(l=>{console.error(l)}).finally(()=>{f()})},resetState(){this.searchText="",this.searchPage=1,this.concertId="0"},deleteSong(l){console.log(l);const t=this.songs.findIndex(o=>o.id===l);this.songs.splice(t,1),this.alertMessage("success","評論已刪除")},warnUser(l){this.deleteSong(l),this.alertMessage("success",`對${this.userId1.email}使用者警告已送出`)},alertMessage(l,t){le.fire({icon:l,text:t})}},getters:{filterDatas(){return this.selectReview==="全部"?this.songs:this.selectReview==="未審閱"?this.songs.filter(l=>!l.is_reviewed):this.songs.filter(l=>l.is_reviewed)}}}),Ae={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},De={class:"col-span-2 lg:col-span-1"},Ve={class:"col-span-2 lg:col-span-1"},qe={class:"flex col-span-1"},Ee=_("span",{class:"material-symbols-outlined absolute"}," search ",-1),Te={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},je={key:0},ze={key:1},Me={key:0,class:"material-symbols-outlined"},Ue={key:1,class:"material-symbols-outlined"},Fe=_("span",{class:"material-symbols-outlined"},"delete",-1),Ne={class:"flex justify-center py-12"},Ge=_("h2",null,"哇! 找不到資料~",-1),Ke=[Ge],We={class:"flex justify-center"},He={components:{SongList:Q},inject:["http","path","adminPath"],methods:{...ne(D,["getSongs","getSongsByConcert","checkReview","checkSelectReview","chagneCheckList","checkAllList","searchSong","sortSongByDownVotes","deleteSong","warnUser","alertMessage","deleteSelectReview","getConcerts","searchSongsByConcert","searchSongsByPage","resetState"])},computed:{...ie(D,["songs","mapSongs","concertSongs","songCheckList","sortInitial","filterDatas","pagination","concerts","searchPage"]),...oe(D,["selectReview","concertId"])},watch:{concertId(){this.searchSongsByConcert()}},mounted(){this.getSongs(this.adminPath.songs),this.getConcerts()},unmounted(){this.resetState()}},ts=Object.assign(He,{__name:"AdminPlaylistsView",setup(l){return(t,o)=>{const k=ve("RouterLink");return c(),d(m,null,[_("div",Ae,[_("div",De,[s(e(A),{modelValue:t.selectReview,"onUpdate:modelValue":o[0]||(o[0]=i=>t.selectReview=i)},{default:a(()=>[s(e(L),null,{default:a(()=>[s(e(I),{placeholder:"未審閱"})]),_:1}),s(e(P),null,{default:a(()=>[s(e(R),null,{default:a(()=>[s(e(x),null,{default:a(()=>[n("評論審閱")]),_:1}),s(e(p),{value:"未審閱"},{default:a(()=>[n(" 未審閱 ")]),_:1}),s(e(p),{value:"已審閱"},{default:a(()=>[n(" 已審閱 ")]),_:1}),s(e(p),{value:"全部"},{default:a(()=>[n(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_("div",Ve,[s(e(A),{modelValue:t.concertId,"onUpdate:modelValue":o[1]||(o[1]=i=>t.concertId=i)},{default:a(()=>[s(e(L),null,{default:a(()=>[s(e(I),{placeholder:"選擇演唱會"})]),_:1}),s(e(P),null,{default:a(()=>[s(e(R),null,{default:a(()=>[s(e(x),null,{default:a(()=>[n("選擇演唱會")]),_:1}),s(e(p),{value:"0"},{default:a(()=>[n(" 全部演唱會 ")]),_:1}),(c(!0),d(m,null,S(t.concerts,i=>(c(),v(e(p),{value:i.id.toString(),key:i.id},{default:a(()=>[n(g(i.title),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_("div",qe,[s(e(ce),{type:"text",placeholder:"輸入用戶信箱查詢...",onKeyup:t.searchSong,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onKeyup"]),s(e(h),{class:"rounded-l-none"},{default:a(()=>[Ee]),_:1})]),_("div",Te,[_("p",null,"歌曲數量: "+g(t.pagination.total),1),_("div",null,[s(e(h),{class:"bg-lime-500 hover:bg-lime-700",disabled:!t.songCheckList.length,onClick:t.checkSelectReview},{default:a(()=>[n("已審閱")]),_:1},8,["disabled","onClick"]),s(e(_e),null,{default:a(()=>[s(e(re),null,{default:a(()=>[s(e(h),{class:"ml-4",variant:"destructive",disabled:!t.songCheckList.length},{default:a(()=>[n("刪除")]),_:1},8,["disabled"])]),_:1}),s(e(de),null,{default:a(()=>[t.songCheckList.length?(c(),d("div",je,[s(e(T),null,{default:a(()=>[s(e(j),null,{default:a(()=>[n("是否刪除以下歌曲")]),_:1}),s(e(z),null,{default:a(()=>[(c(!0),d(m,null,S(t.songCheckList,i=>(c(),d("p",{key:i.id},g(i.name),1))),128))]),_:1})]),_:1}),s(e(M),null,{default:a(()=>[s(e(U),null,{default:a(()=>[n("Cancel")]),_:1}),s(e(ue),{onClick:t.deleteSelectReview},{default:a(()=>[n("Continue")]),_:1},8,["onClick"])]),_:1})])):(c(),d("div",ze,[s(e(T),null,{default:a(()=>[s(e(j),{class:"text-center"},{default:a(()=>[n("請先點取歌曲")]),_:1}),s(e(z))]),_:1}),s(e(M),null,{default:a(()=>[s(e(U),null,{default:a(()=>[n("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),q(s(e(Ie),{class:"bg-white rounded-lg text-md mb-10"},{default:a(()=>[s(e(Pe),null,{default:a(()=>[n("歌單管理控制面板")]),_:1}),s(e(Be),null,{default:a(()=>[s(e(B),{class:"hover:bg-white",style:{color:"black !important"}},{default:a(()=>[s(e($),null,{default:a(()=>[s(e(O),{onClick:t.checkAllList},null,8,["onClick"])]),_:1}),s(e($),null,{default:a(()=>[s(e(h),{variant:"ghost",onClick:t.sortSongByDownVotes},{default:a(()=>[n("倒推人數"),t.sortInitial?(c(),d("span",Me," stat_1 ")):(c(),d("span",Ue," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),s(e($),null,{default:a(()=>[n("歌曲")]),_:1}),s(e($),null,{default:a(()=>[n("全部歌單")]),_:1}),s(e($),null,{default:a(()=>[n("演唱會")]),_:1}),s(e($),null,{default:a(()=>[n("用戶名")]),_:1}),s(e($))]),_:1})]),_:1}),s(e(Le),{class:"text-gray-600"},{default:a(()=>[(c(),v(ge,null,{default:a(()=>[(c(!0),d(m,null,S(t.filterDatas,i=>(c(),v(e(B),{class:"py-8",key:i.id.toString()},{default:a(()=>[s(e(u),{class:"text-purple-primary"},{default:a(()=>[s(e(O),{id:i.id.toString(),onClick:r=>t.chagneCheckList(i.id),class:"checkboxList"},null,8,["id","onClick"]),s(e($e),{for:i.id.toString(),class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,["for"])]),_:2},1024),s(e(u),{class:"text-purple-primary text-center"},{default:a(()=>[n(g(i.down_votes),1)]),_:2},1024),s(e(u),null,{default:a(()=>[n(g(i.name),1)]),_:2},1024),s(e(u),null,{default:a(()=>[s(e(F),null,{default:a(()=>[s(e(N),null,{default:a(()=>[s(e(h),{onClick:r=>t.getSongsByConcert(i.concert.id)},{default:a(()=>[n(" 檢視 ")]),_:2},1032,["onClick"])]),_:2},1024),s(e(G),{class:"p-12"},{default:a(()=>[s(e(K),{class:"border-b-2 pb-4"},{default:a(()=>[s(e(W),null,{default:a(()=>[n(g(i.concert.title),1)]),_:2},1024),s(e(H),null,{default:a(()=>[n(" 歌單列表 ")]),_:1})]),_:2},1024),s(e(fe),{class:"h-[300px] rounded-md border p-4"},{default:a(()=>[s(Q,{concertSongs:t.concertSongs},null,8,["concertSongs"])]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024),s(e(u),null,{default:a(()=>[s(k,{to:`/concerts/${i.concert.id}`},{default:a(()=>[n(g(i.concert.title),1)]),_:2},1032,["to"])]),_:2},1024),s(e(u),null,{default:a(()=>[n(g(i.user.email),1)]),_:2},1024),s(e(u),{class:"space-x-4 flex"},{default:a(()=>[i.is_reviewed?(c(),v(e(h),{key:1,class:"bg-lime-500"},{default:a(()=>[n("已審閱")]),_:1})):(c(),v(e(h),{key:0,class:"bg-gray-200",onClick:r=>t.checkReview(i.id)},{default:a(()=>[n("未審閱")]),_:2},1032,["onClick"])),s(e(F),null,{default:a(()=>[s(e(N),null,{default:a(()=>[s(e(h),{variant:"destructive"},{default:a(()=>[Fe]),_:1})]),_:1}),s(e(G),null,{default:a(()=>[s(e(K),null,{default:a(()=>[s(e(W),{class:"text-center"},{default:a(()=>[n("是否要警告使用者？")]),_:1}),s(e(H),null,{default:a(()=>[s(e(A),null,{default:a(()=>[s(e(L),null,{default:a(()=>[s(e(I),{placeholder:"警告原因"})]),_:1}),s(e(P),null,{default:a(()=>[s(e(R),null,{default:a(()=>[s(e(x),null,{default:a(()=>[n("警告原因")]),_:1}),s(e(p),{value:"不實評論"},{default:a(()=>[n(" 不實評論 ")]),_:1}),s(e(p),{value:"惡意評論"},{default:a(()=>[n(" 惡意評論 ")]),_:1}),s(e(p),{value:"腥羶色內容"},{default:a(()=>[n(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(e(he),null,{default:a(()=>[s(e(J),null,{default:a(()=>[s(e(h),{class:"bg-lime-500",onClick:r=>t.deleteSong(i.id)},{default:a(()=>[n("不警告")]),_:2},1032,["onClick"])]),_:2},1024),s(e(J),null,{default:a(()=>[s(e(h),{variant:"destructive",onClick:r=>t.warnUser(i.user.email)},{default:a(()=>[n("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),fallback:a(()=>[(c(),d(m,null,S(10,i=>s(e(B),{class:"py-8",key:i},{default:a(()=>[s(e(u),{class:"text-purple-primary"},{default:a(()=>[s(e(y),{class:"size-5 rounded-xl"})]),_:1}),s(e(u),{class:"text-purple-primary text-center"},{default:a(()=>[s(e(y),{class:"h-5"})]),_:1}),s(e(u),null,{default:a(()=>[s(e(y),{class:"h-5"})]),_:1}),s(e(u),null,{default:a(()=>[s(e(y),{class:"h-5"})]),_:1}),s(e(u),null,{default:a(()=>[s(e(y),{class:"h-5"})]),_:1}),s(e(u),null,{default:a(()=>[s(e(y),{class:"h-5"})]),_:1}),s(e(u),null,{default:a(()=>[s(e(y),{class:"h-5"})]),_:1})]),_:2},1024)),64))]),_:1}))]),_:1})]),_:1},512),[[E,t.filterDatas.length!==0]]),q(_("div",Ne,Ke,512),[[E,!t.filterDatas.length]]),_("div",We,[s(e(ke),{total:t.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:a(()=>[s(e(pe),{class:"flex items-center md:gap-1"},{default:a(({items:i})=>[s(e(ye),{onClick:o[2]||(o[2]=r=>t.searchSongsByPage(1))}),s(e(Ce),{onClick:o[3]||(o[3]=r=>t.searchSongsByPage(t.pagination.current_page-1))}),(c(!0),d(m,null,S(i,(r,b)=>(c(),d(m,null,[r.type==="page"?(c(),v(e(me),{key:b,value:r.value,"as-child":""},{default:a(()=>[s(e(h),{class:"w-10 h-10 p-0",variant:r.value===t.searchPage?"default":"page",onClick:V=>t.searchSongsByPage(r.value)},{default:a(()=>[n(g(r.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(c(),v(e(Se),{key:r.type,index:b,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),s(e(be),{onClick:o[4]||(o[4]=r=>t.searchSongsByPage(t.pagination.current_page+1))}),s(e(we),{onClick:o[5]||(o[5]=r=>t.searchSongsByPage(t.pagination.total_pages))})]),_:1})]),_:1},8,["total"])])],64)}}});export{ts as default};
