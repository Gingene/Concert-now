import{o as c,c as d,D as Z,u as e,Q as X,_ as Y,r as S,a as _,t as g,F as m,a9 as ee,al as ae,az as C,ba as b,aA as se,ab as te,ao as le,y as ne,z as ie,aQ as oe,b as a,w as s,aO as q,bb as E,C as n,g as v,T as ce,B as h,aq as re,ar as de,as as T,at as j,au as z,av as F,aw as M,ax as ue,ap as _e,aJ as U,aC as G,aD as N,aE as H,aF as J,aG as K,G as fe,aH as he,aI as O,bc as ge,ae as pe,af as me,ag as ke,d as ve}from"./index-L6S9KTCk.js";import{_ as Q}from"./Checkbox-CVWClja4.js";import{_ as $e}from"./Label-PYmNCqKD.js";import{_ as ye,a as Ce,b as Se,c as we,d as be}from"./PaginationPrev-m02Lm-Mn.js";import{_ as Be,a as B,b as $,c as Le,d as u,e as Ie}from"./TableRow-4wBbk4NO.js";import{_ as Pe}from"./TableCaption-QyinHtII.js";import{_ as L,a as I,b as P,c as R,d as x,e as p,f as A}from"./SelectLabel-NDGqNtTH.js";import"./check-c-V2msX_.js";import"./more-horizontal-Z0IMcTdE.js";const y={__name:"Skeleton",props:{class:{type:String,required:!1}},setup(l){const t=l;return(o,k)=>(c(),d("div",{class:Z(e(X)("animate-pulse rounded-md bg-secondary",t.class))},null,2))}},Re={props:["concertSongs"]};function xe(l,t,o,k,i,r){return c(!0),d(m,null,S(o.concertSongs,(w,V)=>(c(),d("h6",{key:w.id,class:"py-4"},[_("span",null,g(V+1)+". ",1),_("span",null,g(w.name),1)]))),128)}const W=Y(Re,[["render",xe]]),{setIsLoading:f}=ee(),D=ae("songsStore",{state:()=>({selectReview:"未審閱",sortInitial:!0,controlCheckAll:!0,songCheckList:[],songs:[],concertSongs:[],backupDatas:[],mapSongs:{},pagination:{},concerts:[],searchText:"",searchPage:1,concertId:"0"}),actions:{getSongs(l=1){f(),C.get(`${b.songs}/?page=${l}`).then(t=>{this.songs=[...t.data.data],this.pagination={...t.data.pagination},this.backupDatas=[...t.data.data]}).catch(t=>{console.error(t)}).finally(()=>{f()})},getSongsByConcert(l){f(),C.get(`${se.concerts}/${l}`).then(t=>{this.concertSongs=[...t.data.data.songs]}).catch(t=>{console.error(t)}).finally(()=>{f()})},checkReview(l){const t=this.songs.find(o=>o.id===l);t.is_reviewed=!0},chagneCheckList(l){const t=this.songs.find(k=>k.id===l),o=this.songCheckList.findIndex(k=>k.id===l);o===-1?this.songCheckList.push(t):this.songCheckList.splice(o,1)},checkAllList(){if(!this.controlCheckAll)return;const l=document.querySelectorAll('[role="checkbox"]');l.forEach((t,o)=>{if(o!==0){if(t.dataset.state!==l[0].dataset.state)return;t.click()}})},checkSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.checkReview(t.id)}),l.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(t=>{this.deleteSong(t.id)}),l.forEach(t=>{t.dataset.state==="checked"&&t.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortSongByDownVotes(){this.sortInitial=!this.sortInitial,this.sortInitial?this.songs.sort((l,t)=>l.down_votes-t.down_votes):this.songs.sort((l,t)=>t.down_votes-l.down_votes)},searchSong:te(function(l){this.searchText=l.target.value,this.searchPage=1,f(),C.get(`${b.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&?page=${this.searchPage}`).then(t=>{this.songs=[...t.data.data],this.pagination={...t.data.pagination},console.log(t)}).catch(t=>{console.error(t)}).finally(()=>{f()})},500,{maxWait:2e3}),searchSongsByConcert(){this.searchPage=1,f(),C.get(`${b.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&?page=1`).then(l=>{this.songs=[...l.data.data],this.pagination={...l.data.pagination}}).catch(l=>{console.error(l)}).finally(()=>{f()})},searchSongsByPage(l){this.searchPage=l,f(),C.get(`${b.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&page=${l}`).then(t=>{this.songs=[...t.data.data],this.pagination={...t.data.pagination}}).catch(t=>{console.error(t)}).finally(()=>{f()})},getConcerts(){f(),C.get(`${b.concerts}`).then(l=>{this.concerts=[...l.data.data]}).catch(l=>{console.error(l)}).finally(()=>{f()})},resetState(){this.searchText="",this.searchPage=1,this.concertId="0"},deleteSong(l){console.log(l);const t=this.songs.findIndex(o=>o.id===l);this.songs.splice(t,1),this.alertMessage("success","評論已刪除")},warnUser(l){this.deleteSong(l),this.alertMessage("success",`對${this.userId1.email}使用者警告已送出`)},alertMessage(l,t){le.fire({icon:l,text:t})}},getters:{filterDatas(){return this.selectReview==="全部"?this.songs:this.selectReview==="未審閱"?this.songs.filter(l=>!l.is_reviewed):this.songs.filter(l=>l.is_reviewed)}}}),Ae={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},De={class:"col-span-2 lg:col-span-1"},Ve={class:"col-span-2 lg:col-span-1"},qe={class:"flex col-span-1"},Ee=_("span",{class:"material-symbols-outlined absolute"}," search ",-1),Te={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},je={key:0},ze={key:1},Fe={key:0,class:"material-symbols-outlined"},Me={key:1,class:"material-symbols-outlined"},Ue=_("span",{class:"material-symbols-outlined"},"delete",-1),Ge={class:"flex justify-center py-12"},Ne=_("h2",null,"哇! 找不到資料~",-1),He=[Ne],Je={class:"flex justify-center"},Ke={components:{SongList:W},inject:["http","path","adminPath"],methods:{...ne(D,["getSongs","getSongsByConcert","checkReview","checkSelectReview","chagneCheckList","checkAllList","searchSong","sortSongByDownVotes","deleteSong","warnUser","alertMessage","deleteSelectReview","getConcerts","searchSongsByConcert","searchSongsByPage","resetState"])},computed:{...ie(D,["songs","mapSongs","concertSongs","songCheckList","sortInitial","filterDatas","pagination","concerts","searchPage"]),...oe(D,["selectReview","concertId"])},watch:{concertId(){this.searchSongsByConcert()}},mounted(){this.getSongs(this.adminPath.songs),this.getConcerts()},unmounted(){this.resetState()}},ta=Object.assign(Ke,{__name:"AdminPlaylistsView",setup(l){return(t,o)=>{const k=ve("RouterLink");return c(),d(m,null,[_("div",Ae,[_("div",De,[a(e(A),{modelValue:t.selectReview,"onUpdate:modelValue":o[0]||(o[0]=i=>t.selectReview=i)},{default:s(()=>[a(e(L),null,{default:s(()=>[a(e(I),{placeholder:"未審閱"})]),_:1}),a(e(P),null,{default:s(()=>[a(e(R),null,{default:s(()=>[a(e(x),null,{default:s(()=>[n("評論審閱")]),_:1}),a(e(p),{value:"未審閱"},{default:s(()=>[n(" 未審閱 ")]),_:1}),a(e(p),{value:"已審閱"},{default:s(()=>[n(" 已審閱 ")]),_:1}),a(e(p),{value:"全部"},{default:s(()=>[n(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_("div",Ve,[a(e(A),{modelValue:t.concertId,"onUpdate:modelValue":o[1]||(o[1]=i=>t.concertId=i)},{default:s(()=>[a(e(L),null,{default:s(()=>[a(e(I),{placeholder:"選擇演唱會"})]),_:1}),a(e(P),null,{default:s(()=>[a(e(R),null,{default:s(()=>[a(e(x),null,{default:s(()=>[n("選擇演唱會")]),_:1}),a(e(p),{value:"0"},{default:s(()=>[n(" 全部演唱會 ")]),_:1}),(c(!0),d(m,null,S(t.concerts,i=>(c(),v(e(p),{value:i.id.toString(),key:i.id},{default:s(()=>[n(g(i.title),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_("div",qe,[a(e(ce),{type:"text",placeholder:"輸入用戶信箱查詢...",onKeyup:t.searchSong,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onKeyup"]),a(e(h),{class:"rounded-l-none"},{default:s(()=>[Ee]),_:1})]),_("div",Te,[_("p",null,"歌曲數量: "+g(t.pagination.total),1),_("div",null,[a(e(h),{class:"bg-lime-500 hover:bg-lime-700",disabled:!t.songCheckList.length,onClick:t.checkSelectReview},{default:s(()=>[n("已審閱")]),_:1},8,["disabled","onClick"]),a(e(_e),null,{default:s(()=>[a(e(re),null,{default:s(()=>[a(e(h),{class:"ml-4",variant:"destructive",disabled:!t.songCheckList.length},{default:s(()=>[n("刪除")]),_:1},8,["disabled"])]),_:1}),a(e(de),null,{default:s(()=>[t.songCheckList.length?(c(),d("div",je,[a(e(T),null,{default:s(()=>[a(e(j),null,{default:s(()=>[n("是否刪除以下歌曲")]),_:1}),a(e(z),null,{default:s(()=>[(c(!0),d(m,null,S(t.songCheckList,i=>(c(),d("p",{key:i.id},g(i.name),1))),128))]),_:1})]),_:1}),a(e(F),null,{default:s(()=>[a(e(M),null,{default:s(()=>[n("Cancel")]),_:1}),a(e(ue),{onClick:t.deleteSelectReview},{default:s(()=>[n("Continue")]),_:1},8,["onClick"])]),_:1})])):(c(),d("div",ze,[a(e(T),null,{default:s(()=>[a(e(j),{class:"text-center"},{default:s(()=>[n("請先點取歌曲")]),_:1}),a(e(z))]),_:1}),a(e(F),null,{default:s(()=>[a(e(M),null,{default:s(()=>[n("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),q(a(e(Ie),{class:"bg-white rounded-lg text-md mb-10"},{default:s(()=>[a(e(Pe),null,{default:s(()=>[n("歌單管理控制面板")]),_:1}),a(e(Be),null,{default:s(()=>[a(e(B),{class:"hover:bg-white",style:{color:"black !important"}},{default:s(()=>[a(e($),null,{default:s(()=>[a(e(Q),{onClick:t.checkAllList},null,8,["onClick"])]),_:1}),a(e($),null,{default:s(()=>[a(e(h),{variant:"ghost",onClick:t.sortSongByDownVotes},{default:s(()=>[n("倒推人數"),t.sortInitial?(c(),d("span",Fe," stat_1 ")):(c(),d("span",Me," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),a(e($),null,{default:s(()=>[n("歌曲")]),_:1}),a(e($),null,{default:s(()=>[n("全部歌單")]),_:1}),a(e($),null,{default:s(()=>[n("演唱會")]),_:1}),a(e($),null,{default:s(()=>[n("用戶名")]),_:1}),a(e($))]),_:1})]),_:1}),a(e(Le),{class:"text-gray-600"},{default:s(()=>[(c(),v(ge,null,{default:s(()=>[(c(!0),d(m,null,S(t.filterDatas,i=>(c(),v(e(B),{class:"py-8",key:i.id.toString()},{default:s(()=>[a(e(u),{class:"text-purple-primary"},{default:s(()=>[a(e(Q),{id:i.id.toString(),onClick:r=>t.chagneCheckList(i.id),class:"checkboxList"},null,8,["id","onClick"]),a(e($e),{for:i.id.toString(),class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,["for"])]),_:2},1024),a(e(u),{class:"text-purple-primary text-center"},{default:s(()=>[n(g(i.down_votes),1)]),_:2},1024),a(e(u),null,{default:s(()=>[n(g(i.name),1)]),_:2},1024),a(e(u),null,{default:s(()=>[a(e(U),null,{default:s(()=>[a(e(G),null,{default:s(()=>[a(e(h),{onClick:r=>t.getSongsByConcert(i.concert.id)},{default:s(()=>[n(" 檢視 ")]),_:2},1032,["onClick"])]),_:2},1024),a(e(N),{class:"p-12"},{default:s(()=>[a(e(H),{class:"border-b-2 pb-4"},{default:s(()=>[a(e(J),null,{default:s(()=>[n(g(i.concert.title),1)]),_:2},1024),a(e(K),null,{default:s(()=>[n(" 歌單列表 ")]),_:1})]),_:2},1024),a(e(fe),{class:"h-[300px] rounded-md border p-4"},{default:s(()=>[a(W,{concertSongs:t.concertSongs},null,8,["concertSongs"])]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024),a(e(u),null,{default:s(()=>[a(k,{to:`/concerts/${i.concert.id}`},{default:s(()=>[n(g(i.concert.title),1)]),_:2},1032,["to"])]),_:2},1024),a(e(u),null,{default:s(()=>[n(g(i.user.email),1)]),_:2},1024),a(e(u),{class:"space-x-4 flex"},{default:s(()=>[i.is_reviewed?(c(),v(e(h),{key:1,class:"bg-lime-500"},{default:s(()=>[n("已審閱")]),_:1})):(c(),v(e(h),{key:0,class:"bg-gray-200",onClick:r=>t.checkReview(i.id)},{default:s(()=>[n("未審閱")]),_:2},1032,["onClick"])),a(e(U),null,{default:s(()=>[a(e(G),null,{default:s(()=>[a(e(h),{variant:"destructive"},{default:s(()=>[Ue]),_:1})]),_:1}),a(e(N),null,{default:s(()=>[a(e(H),null,{default:s(()=>[a(e(J),{class:"text-center"},{default:s(()=>[n("是否要警告使用者？")]),_:1}),a(e(K),null,{default:s(()=>[a(e(A),null,{default:s(()=>[a(e(L),null,{default:s(()=>[a(e(I),{placeholder:"警告原因"})]),_:1}),a(e(P),null,{default:s(()=>[a(e(R),null,{default:s(()=>[a(e(x),null,{default:s(()=>[n("警告原因")]),_:1}),a(e(p),{value:"不實評論"},{default:s(()=>[n(" 不實評論 ")]),_:1}),a(e(p),{value:"惡意評論"},{default:s(()=>[n(" 惡意評論 ")]),_:1}),a(e(p),{value:"腥羶色內容"},{default:s(()=>[n(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(he),null,{default:s(()=>[a(e(O),null,{default:s(()=>[a(e(h),{class:"bg-lime-500",onClick:r=>t.deleteSong(i.id)},{default:s(()=>[n("不警告")]),_:2},1032,["onClick"])]),_:2},1024),a(e(O),null,{default:s(()=>[a(e(h),{variant:"destructive",onClick:r=>t.warnUser(i.user.email)},{default:s(()=>[n("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),fallback:s(()=>[(c(),d(m,null,S(10,i=>a(e(B),{class:"py-8",key:i},{default:s(()=>[a(e(u),{class:"text-purple-primary"},{default:s(()=>[a(e(y),{class:"size-5 rounded-xl"})]),_:1}),a(e(u),{class:"text-purple-primary text-center"},{default:s(()=>[a(e(y),{class:"h-5"})]),_:1}),a(e(u),null,{default:s(()=>[a(e(y),{class:"h-5"})]),_:1}),a(e(u),null,{default:s(()=>[a(e(y),{class:"h-5"})]),_:1}),a(e(u),null,{default:s(()=>[a(e(y),{class:"h-5"})]),_:1}),a(e(u),null,{default:s(()=>[a(e(y),{class:"h-5"})]),_:1}),a(e(u),null,{default:s(()=>[a(e(y),{class:"h-5"})]),_:1})]),_:2},1024)),64))]),_:1}))]),_:1})]),_:1},512),[[E,t.filterDatas.length!==0]]),q(_("div",Ge,He,512),[[E,!t.filterDatas.length]]),_("div",Je,[a(e(ke),{total:t.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:s(()=>[a(e(pe),{class:"flex items-center md:gap-1"},{default:s(({items:i})=>[a(e(ye),{onClick:o[2]||(o[2]=r=>t.searchSongsByPage(1))}),a(e(Ce),{onClick:o[3]||(o[3]=r=>t.searchSongsByPage(t.pagination.current_page-1))}),(c(!0),d(m,null,S(i,(r,w)=>(c(),d(m,null,[r.type==="page"?(c(),v(e(me),{key:w,value:r.value,"as-child":""},{default:s(()=>[a(e(h),{class:"w-10 h-10 p-0",variant:r.value===t.searchPage?"default":"page",onClick:V=>t.searchSongsByPage(r.value)},{default:s(()=>[n(g(r.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(c(),v(e(Se),{key:r.type,index:w,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),a(e(we),{onClick:o[4]||(o[4]=r=>t.searchSongsByPage(t.pagination.current_page+1))}),a(e(be),{onClick:o[5]||(o[5]=r=>t.searchSongsByPage(t.pagination.total_pages))})]),_:1})]),_:1},8,["total"])])],64)}}});export{ta as default};