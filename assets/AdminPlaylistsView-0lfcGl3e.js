import{o as c,c as u,C as Y,u as e,P as K,_ as Q,r as y,a as _,t as h,F as v,az as ee,aI as se,ai as w,b1 as A,aj as te,a8 as ae,a_ as le,ab as ne,ac as ie,aA as oe,b as s,w as t,ax as R,a$ as B,B as n,R as ce,z as f,aS as re,aT as ue,aU as D,aV as I,b0 as V,aW as E,aX as j,aY as de,aZ as _e,g as $,as as q,al as P,am as z,an as M,ao as T,ap as U,E as fe,aq as he,ar as F,b2 as ge,af as pe,ag as me,ah as ke,d as ve}from"./index-IwGVorfi.js";import{_ as N}from"./Checkbox-IYbfNdVX.js";import{_ as $e}from"./Label-hn9DbMkP.js";import{_ as Ce,a as Se,b as ye,c as be,d as we}from"./PaginationPrev-Y3HOtFJr.js";import{_ as xe,a as x,b as m,c as Le,d as r,e as Ae}from"./TableRow-Mfq3CUuc.js";import{_ as Re}from"./TableCaption-oljjQsB0.js";import{_ as W,a as Z,b as G,c as H,d as J,e as C,f as O}from"./SelectLabel-bJA2AOh_.js";import"./check-L2bGEp9-.js";import"./more-horizontal-nNLbJ2A0.js";const k={__name:"Skeleton",props:{class:{type:String,required:!1}},setup(l){const a=l;return(o,g)=>(c(),u("div",{class:Y(e(K)("animate-pulse rounded-md bg-secondary",a.class))},null,2))}},Be={props:["concertSongs"]};function De(l,a,o,g,i,p){return c(!0),u(v,null,y(o.concertSongs,(d,b)=>(c(),u("h6",{key:d.id,class:"py-4"},[_("span",null,h(b+1)+". ",1),_("span",null,h(d.name),1)]))),128)}const X=Q(Be,[["render",De]]),{setIsLoading:S}=ee(),L=se("songsStore",{state:()=>({selectReview:"未審閱",sortInitial:!0,controlCheckAll:!0,songCheckList:[],songs:[],concertSongs:[],backupDatas:[],mapSongs:{},pagination:{},searchText:"",searchPage:1}),actions:{getSongs(l=1){S(),w.get(`${A.songs}/?page=${l}`).then(a=>{this.songs=[...a.data.data],this.pagination={...a.data.pagination},this.backupDatas=[...a.data.data],console.log(a)}).catch(a=>{console.error(a)}).finally(()=>{S()})},getSongsByConcert(l){S(),w.get(`${te.concerts}/${l}`).then(a=>{this.concertSongs=[...a.data.data.songs]}).catch(a=>{console.error(a)}).finally(()=>{S()})},checkReview(l){const a=this.songs.find(o=>o.id===l);a.is_reviewed=!0},chagneCheckList(l){const a=this.songs.find(g=>g.id===l),o=this.songCheckList.findIndex(g=>g.id===l);o===-1?this.songCheckList.push(a):this.songCheckList.splice(o,1)},checkAllList(){if(!this.controlCheckAll)return;const l=document.querySelectorAll('[role="checkbox"]');l.forEach((a,o)=>{if(o!==0){if(a.dataset.state!==l[0].dataset.state)return;a.click()}})},checkSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(a=>{this.checkReview(a.id)}),l.forEach(a=>{a.dataset.state==="checked"&&a.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.songCheckList.forEach(a=>{this.deleteSong(a.id)}),l.forEach(a=>{a.dataset.state==="checked"&&a.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortSongByDownVotes(){this.sortInitial=!this.sortInitial,this.sortInitial?this.songs.sort((l,a)=>l.down_votes-a.down_votes):this.songs.sort((l,a)=>a.down_votes-l.down_votes)},searchSong:ae(function(l,a=1){if(this.searchText=l.target.value,this.searchPage=a,this.songs=[],l.target.value===""){this.songs=[...this.backupDatas];return}this.searchAllSongs()},500,{maxWait:2e3}),searchAllSongs(){for(let l=1;l<=this.pagination.total_pages;l++)S(),w.get(`${A.songs}/?page=${l}`).then(a=>{console.log(a);const o=new RegExp(this.searchText,"i"),g=a.data.data.filter(i=>o.test(i.concert.title));this.songs=[...this.songs,...g]}).catch(a=>{console.error(a)}).finally(()=>{S()})},deleteSong(l){console.log(l);const a=this.songs.findIndex(o=>o.id===l);this.songs.splice(a,1),this.alertMessage("success","評論已刪除")},warnUser(l){console.log(l),this.deleteSong(l),this.alertMessage("success",`對${this.userId1.email}使用者警告已送出`)},alertMessage(l,a){le.fire({icon:l,text:a})}},getters:{filterDatas(){return this.selectReview==="全部"?this.songs:this.selectReview==="未審閱"?this.songs.filter(l=>!l.is_reviewed):this.songs.filter(l=>l.is_reviewed)}}}),Ie={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},Ve={class:"col-span-2 lg:col-span-1"},Ee={class:"flex col-span-2"},je=_("span",{class:"material-symbols-outlined absolute"}," search ",-1),qe={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},Pe={key:0},ze={key:1},Me={key:0,class:"material-symbols-outlined"},Te={key:1,class:"material-symbols-outlined"},Ue=_("span",{class:"material-symbols-outlined"},"delete",-1),Fe={class:"flex justify-center py-12"},Ne=_("h2",null,"哇! 找不到資料~",-1),We=[Ne],Ze={class:"flex justify-center"},Ge={components:{SongList:X},inject:["http","path","adminPath"],methods:{...ne(L,["getSongs","getSongsByConcert","checkReview","checkSelectReview","chagneCheckList","checkAllList","searchSong","sortSongByDownVotes","deleteSong","warnUser","alertMessage","deleteSelectReview"])},computed:{...ie(L,["songs","mapSongs","concertSongs","songCheckList","sortInitial","filterDatas","pagination"]),...oe(L,["selectReview"])},mounted(){this.getSongs(this.adminPath.songs)}},as=Object.assign(Ge,{__name:"AdminPlaylistsView",setup(l){return(a,o)=>{const g=ve("router-link");return c(),u(v,null,[_("div",Ie,[_("div",Ve,[s(e(O),{modelValue:a.selectReview,"onUpdate:modelValue":o[0]||(o[0]=i=>a.selectReview=i)},{default:t(()=>[s(e(W),null,{default:t(()=>[s(e(Z),{placeholder:"未審閱"})]),_:1}),s(e(G),null,{default:t(()=>[s(e(H),null,{default:t(()=>[s(e(J),null,{default:t(()=>[n("評論審閱")]),_:1}),s(e(C),{value:"未審閱"},{default:t(()=>[n(" 未審閱 ")]),_:1}),s(e(C),{value:"已審閱"},{default:t(()=>[n(" 已審閱 ")]),_:1}),s(e(C),{value:"全部"},{default:t(()=>[n(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_("div",Ee,[s(e(ce),{type:"text",placeholder:"輸入演唱會、用戶名稱查詢...",onInput:a.searchSong,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),s(e(f),{class:"rounded-l-none"},{default:t(()=>[je]),_:1})]),_("div",qe,[_("p",null,"歌曲數量: "+h(a.pagination.total),1),_("div",null,[s(e(f),{class:"bg-lime-500 hover:bg-lime-700",disabled:!a.songCheckList.length,onClick:a.checkSelectReview},{default:t(()=>[n("已審閱")]),_:1},8,["disabled","onClick"]),s(e(_e),null,{default:t(()=>[s(e(re),null,{default:t(()=>[s(e(f),{class:"ml-4",variant:"destructive",disabled:!a.songCheckList.length},{default:t(()=>[n("刪除")]),_:1},8,["disabled"])]),_:1}),s(e(ue),null,{default:t(()=>[a.songCheckList.length?(c(),u("div",Pe,[s(e(D),null,{default:t(()=>[s(e(I),null,{default:t(()=>[n("是否刪除以下歌曲")]),_:1}),s(e(V),null,{default:t(()=>[(c(!0),u(v,null,y(a.songCheckList,i=>(c(),u("p",{key:i.id},h(i.name),1))),128))]),_:1})]),_:1}),s(e(E),null,{default:t(()=>[s(e(j),null,{default:t(()=>[n("Cancel")]),_:1}),s(e(de),{onClick:a.deleteSelectReview},{default:t(()=>[n("Continue")]),_:1},8,["onClick"])]),_:1})])):(c(),u("div",ze,[s(e(D),null,{default:t(()=>[s(e(I),{class:"text-center"},{default:t(()=>[n("請先點取歌曲")]),_:1}),s(e(V))]),_:1}),s(e(E),null,{default:t(()=>[s(e(j),null,{default:t(()=>[n("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),R(s(e(Ae),{class:"bg-white rounded-lg text-md mb-10"},{default:t(()=>[s(e(Re),null,{default:t(()=>[n("歌單管理控制面板")]),_:1}),s(e(xe),null,{default:t(()=>[s(e(x),{class:"hover:bg-white",style:{color:"black !important"}},{default:t(()=>[s(e(m),null,{default:t(()=>[s(e(N),{onClick:a.checkAllList},null,8,["onClick"])]),_:1}),s(e(m),null,{default:t(()=>[s(e(f),{variant:"ghost",onClick:a.sortSongByDownVotes},{default:t(()=>[n("倒推人數"),a.sortInitial?(c(),u("span",Me," stat_1 ")):(c(),u("span",Te," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),s(e(m),null,{default:t(()=>[n("歌曲")]),_:1}),s(e(m),null,{default:t(()=>[n("全部歌單")]),_:1}),s(e(m),null,{default:t(()=>[n("演唱會")]),_:1}),s(e(m),null,{default:t(()=>[n("用戶名")]),_:1}),s(e(m))]),_:1})]),_:1}),s(e(Le),{class:"text-gray-600"},{default:t(()=>[(c(),$(ge,null,{default:t(()=>[(c(!0),u(v,null,y(a.filterDatas,i=>(c(),$(e(x),{class:"py-8",key:i.id.toString()},{default:t(()=>[s(e(r),{class:"text-purple-primary"},{default:t(()=>[s(e(N),{id:i.id.toString(),onClick:p=>a.chagneCheckList(i.id),class:"checkboxList"},null,8,["id","onClick"]),s(e($e),{for:i.id.toString(),class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,["for"])]),_:2},1024),s(e(r),{class:"text-purple-primary text-center"},{default:t(()=>[n(h(i.down_votes),1)]),_:2},1024),s(e(r),null,{default:t(()=>[n(h(i.name),1)]),_:2},1024),s(e(r),null,{default:t(()=>[s(e(q),null,{default:t(()=>[s(e(P),null,{default:t(()=>[s(e(f),{onClick:p=>a.getSongsByConcert(i.concert.id)},{default:t(()=>[n(" 檢視 ")]),_:2},1032,["onClick"])]),_:2},1024),s(e(z),{class:"p-12"},{default:t(()=>[s(e(M),{class:"border-b-2 pb-4"},{default:t(()=>[s(e(T),null,{default:t(()=>[n(h(i.concert.title),1)]),_:2},1024),s(e(U),null,{default:t(()=>[n(" 歌單列表 ")]),_:1})]),_:2},1024),s(e(fe),{class:"h-[300px] rounded-md border p-4"},{default:t(()=>[s(X,{concertSongs:a.concertSongs},null,8,["concertSongs"])]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024),s(e(r),null,{default:t(()=>[s(g,{class:"text-purple-500 hover:text-purple-800",to:"/concert/4"},{default:t(()=>[n(h(i.concert.title),1)]),_:2},1024)]),_:2},1024),s(e(r),null,{default:t(()=>[n(h(i.user.email),1)]),_:2},1024),s(e(r),{class:"space-x-4 flex"},{default:t(()=>[i.is_reviewed?(c(),$(e(f),{key:1,class:"bg-lime-500"},{default:t(()=>[n("已審閱")]),_:1})):(c(),$(e(f),{key:0,class:"bg-gray-200",onClick:p=>a.checkReview(i.id)},{default:t(()=>[n("未審閱")]),_:2},1032,["onClick"])),s(e(q),null,{default:t(()=>[s(e(P),null,{default:t(()=>[s(e(f),{variant:"destructive"},{default:t(()=>[Ue]),_:1})]),_:1}),s(e(z),null,{default:t(()=>[s(e(M),null,{default:t(()=>[s(e(T),{class:"text-center"},{default:t(()=>[n("是否要警告使用者？")]),_:1}),s(e(U),null,{default:t(()=>[s(e(O),null,{default:t(()=>[s(e(W),null,{default:t(()=>[s(e(Z),{placeholder:"警告原因"})]),_:1}),s(e(G),null,{default:t(()=>[s(e(H),null,{default:t(()=>[s(e(J),null,{default:t(()=>[n("警告原因")]),_:1}),s(e(C),{value:"不實評論"},{default:t(()=>[n(" 不實評論 ")]),_:1}),s(e(C),{value:"惡意評論"},{default:t(()=>[n(" 惡意評論 ")]),_:1}),s(e(C),{value:"腥羶色內容"},{default:t(()=>[n(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(e(he),null,{default:t(()=>[s(e(F),null,{default:t(()=>[s(e(f),{class:"bg-lime-500",onClick:p=>a.deleteSong(i.id)},{default:t(()=>[n("不警告")]),_:2},1032,["onClick"])]),_:2},1024),s(e(F),null,{default:t(()=>[s(e(f),{variant:"destructive",onClick:p=>a.warnUser(i.user.email)},{default:t(()=>[n("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),fallback:t(()=>[(c(),u(v,null,y(10,i=>s(e(x),{class:"py-8",key:i},{default:t(()=>[s(e(r),{class:"text-purple-primary"},{default:t(()=>[s(e(k),{class:"size-5 rounded-xl"})]),_:1}),s(e(r),{class:"text-purple-primary text-center"},{default:t(()=>[s(e(k),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(k),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(k),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(k),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(k),{class:"h-5"})]),_:1}),s(e(r),null,{default:t(()=>[s(e(k),{class:"h-5"})]),_:1})]),_:2},1024)),64))]),_:1}))]),_:1})]),_:1},512),[[B,a.filterDatas.length!==0]]),R(_("div",Fe,We,512),[[B,!a.filterDatas.length]]),_("div",Ze,[s(e(ke),{total:a.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:t(({page:i})=>[s(e(pe),{class:"flex items-center md:gap-1"},{default:t(({items:p})=>[s(e(Ce),{onClick:o[1]||(o[1]=d=>a.getSongs(1))}),s(e(Se),{onClick:o[2]||(o[2]=d=>a.getSongs(a.pagination.current_page-1))}),(c(!0),u(v,null,y(p,(d,b)=>(c(),u(v,null,[d.type==="page"?(c(),$(e(me),{key:b,value:d.value,"as-child":""},{default:t(()=>[s(e(f),{class:"w-10 h-10 p-0",variant:d.value===i?"default":"page",onClick:He=>a.getSongs(d.value)},{default:t(()=>[n(h(d.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(c(),$(e(ye),{key:d.type,index:b,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),s(e(be),{onClick:o[3]||(o[3]=d=>a.getSongs(a.pagination.current_page+1))}),s(e(we),{onClick:o[4]||(o[4]=d=>a.getSongs(a.pagination.total_pages))})]),_:2},1024)]),_:1},8,["total"])])],64)}}});export{as as default};
