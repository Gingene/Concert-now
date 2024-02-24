import{a6 as F,a7 as z,at as E,c as d,a as u,b as a,w as l,u as e,t as o,ar as C,as as y,F as h,o as i,j as s,C as G,k as _,r as g,h as v,aq as M,al as O,am as T,an as W,ao as Y,au as H,ap as J,a8 as K,a9 as P,aa as Q}from"./index-0j9focvI.js";import{a as X,b as Z,c as w,d as R,e as L,f as D,g as ee,h as ae,i as S,_ as V}from"./AlertDialogCancel-_9esdMd0.js";import{_ as le,a as se,b as te}from"./PaginationPrev-WKM93LkZ.js";import{_ as ne,a as ie}from"./PaginationLast-mZZ0FdMz.js";import{_ as ue,a as j,b as f,c as de,d as r,e as _e}from"./TableRow-EDaEwLLp.js";import{_ as ce}from"./TableCaption-i-X7ioyq.js";import{_ as B,a as I,b as N,c as x,d as U,e as m,f as A}from"./SelectLabel-bU2cSD6J.js";import{_ as q}from"./AlertDialogDescription-SVPcVOuW.js";import{c as $}from"./comments-A70CtcM7.js";import"./useApiData-bqS6_gUH.js";const oe={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},fe={class:"col-span-2 lg:col-span-1"},re={class:"flex col-span-2"},me=u("span",{class:"material-symbols-outlined absolute"}," search ",-1),pe={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},he={key:0},ve={key:1},ke={key:0,class:"material-symbols-outlined"},ge={key:1,class:"material-symbols-outlined"},$e=["for"],be=u("span",{class:"material-symbols-outlined"},"delete",-1),Ce={class:"flex justify-center py-12"},ye=u("h2",null,"哇! 找不到資料~",-1),we=[ye],Re={class:"flex justify-center"},Le={methods:{...F($,["getComments","checkReview","chagneCheckList","checkSelectReview","allCheckList","checkSelectReview","deleteSelectReview","sortCommentByReportNum","searchComment","deleteComment","warnUser","alertMessage","backupData"])},computed:{...z($,["comments","commentCheckList","sortInitial","filterDatas"]),...E($,["selectReview","warningReason"])},mounted(){this.backupData()}},Fe=Object.assign(Le,{__name:"AdminCommentsView",setup(De){return(t,k)=>(i(),d(h,null,[u("div",oe,[u("div",fe,[a(e(A),{modelValue:t.selectReview,"onUpdate:modelValue":k[0]||(k[0]=n=>t.selectReview=n)},{default:l(()=>[a(e(B),null,{default:l(()=>[a(e(I),{placeholder:"未審閱"})]),_:1}),a(e(N),null,{default:l(()=>[a(e(x),null,{default:l(()=>[a(e(U),null,{default:l(()=>[s("評論審閱")]),_:1}),a(e(m),{value:"未審閱"},{default:l(()=>[s(" 未審閱 ")]),_:1}),a(e(m),{value:"已審閱"},{default:l(()=>[s(" 已審閱 ")]),_:1}),a(e(m),{value:"全部"},{default:l(()=>[s(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),u("div",re,[a(e(G),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:t.searchComment,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),a(e(_),{class:"rounded-l-none"},{default:l(()=>[me]),_:1})]),u("div",pe,[u("p",null,"列表數量: "+o(t.filterDatas.length),1),u("div",null,[a(e(_),{class:"bg-lime-500 hover:bg-lime-700",onClick:t.checkSelectReview,disabled:!t.commentCheckList.length},{default:l(()=>[s("已審閱")]),_:1},8,["onClick","disabled"]),a(e(ae),null,{default:l(()=>[a(e(X),null,{default:l(()=>[a(e(_),{class:"ml-4",variant:"destructive",disabled:!t.commentCheckList.length},{default:l(()=>[s("刪除")]),_:1},8,["disabled"])]),_:1}),a(e(Z),null,{default:l(()=>[t.commentCheckList.length?(i(),d("div",he,[a(e(w),null,{default:l(()=>[a(e(R),null,{default:l(()=>[s("是否刪除以下評論")]),_:1}),a(e(q),null,{default:l(()=>[(i(!0),d(h,null,g(t.commentCheckList,n=>(i(),d("p",{key:n.id},o(n.comment),1))),128))]),_:1})]),_:1}),a(e(L),null,{default:l(()=>[a(e(D),null,{default:l(()=>[s("Cancel")]),_:1}),a(e(ee),{onClick:t.deleteSelectReview,class:"bg-destructive hover:bg-destructive/90"},{default:l(()=>[s("刪除")]),_:1},8,["onClick"])]),_:1})])):(i(),d("div",ve,[a(e(w),null,{default:l(()=>[a(e(R),{class:"text-center"},{default:l(()=>[s("請先點取評論")]),_:1}),a(e(q))]),_:1}),a(e(L),null,{default:l(()=>[a(e(D),null,{default:l(()=>[s("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),C(a(e(_e),{class:"bg-white rounded-lg text-md mb-10"},{default:l(()=>[a(e(ce),null,{default:l(()=>[s("評論管理控制面板")]),_:1}),a(e(ue),null,{default:l(()=>[a(e(j),{class:"hover:bg-white",style:{color:"black !important"}},{default:l(()=>[a(e(f),null,{default:l(()=>[a(e(S),{onClick:t.allCheckList},null,8,["onClick"])]),_:1}),a(e(f),null,{default:l(()=>[a(e(_),{variant:"ghost",onClick:t.sortCommentByReportNum},{default:l(()=>[s("檢舉人數"),t.sortInitial?(i(),d("span",ke," stat_1 ")):(i(),d("span",ge," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),a(e(f),null,{default:l(()=>[s("評論內容")]),_:1}),a(e(f),null,{default:l(()=>[s("場地名稱")]),_:1}),a(e(f),null,{default:l(()=>[s("用戶名")]),_:1}),a(e(f))]),_:1})]),_:1}),a(e(de),{class:"text-gray-600"},{default:l(()=>[(i(!0),d(h,null,g(t.filterDatas,n=>(i(),v(e(j),{class:"py-8",key:n.id},{default:l(()=>[a(e(r),{class:"text-purple-primary"},{default:l(()=>[a(e(S),{id:n.id,onClick:c=>t.chagneCheckList(n.id),class:"checkboxList"},null,8,["id","onClick"]),u("label",{for:n.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,$e)]),_:2},1024),a(e(r),{class:"text-purple-primary text-center"},{default:l(()=>[s(o(n.report_num),1)]),_:2},1024),a(e(r),null,{default:l(()=>[s(o(n.comment),1)]),_:2},1024),a(e(r),null,{default:l(()=>[s(o(n.venueId.title),1)]),_:2},1024),a(e(r),null,{default:l(()=>[s(o(n.userId1.email),1)]),_:2},1024),a(e(r),{class:"space-x-4 flex"},{default:l(()=>[n.isReview?(i(),v(e(_),{key:1,class:"bg-lime-500 hover:bg-lime-700"},{default:l(()=>[s("已審閱")]),_:1})):(i(),v(e(_),{key:0,class:"bg-gray-200",onClick:c=>t.checkReview(n.id)},{default:l(()=>[s("未審閱")]),_:2},1032,["onClick"])),a(e(M),null,{default:l(()=>[a(e(O),null,{default:l(()=>[a(e(_),{variant:"destructive"},{default:l(()=>[be]),_:1})]),_:1}),a(e(T),null,{default:l(()=>[a(e(W),null,{default:l(()=>[a(e(Y),{class:"text-center"},{default:l(()=>[s("是否要警告使用者？")]),_:1}),a(e(H),null,{default:l(()=>[a(e(A),{modelValue:t.warningReason,"onUpdate:modelValue":k[1]||(k[1]=c=>t.warningReason=c)},{default:l(()=>[a(e(B),null,{default:l(()=>[a(e(I),{placeholder:"警告原因"})]),_:1}),a(e(N),null,{default:l(()=>[a(e(x),null,{default:l(()=>[a(e(U),null,{default:l(()=>[s("警告原因")]),_:1}),a(e(m),{value:"不實評論"},{default:l(()=>[s(" 不實評論 ")]),_:1}),a(e(m),{value:"惡意評論"},{default:l(()=>[s(" 惡意評論 ")]),_:1}),a(e(m),{value:"腥羶色內容"},{default:l(()=>[s(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(e(J),null,{default:l(()=>[a(e(V),null,{default:l(()=>[a(e(_),{class:"bg-lime-500",onClick:c=>t.deleteComment(n.id)},{default:l(()=>[s("不警告")]),_:2},1032,["onClick"])]),_:2},1024),a(e(V),null,{default:l(()=>[a(e(_),{variant:"destructive",onClick:c=>t.warnUser(n.id,n.userId1)},{default:l(()=>[s("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[y,t.filterDatas.length!==0]]),C(u("div",Ce,we,512),[[y,!t.filterDatas.length]]),u("div",Re,[a(e(Q),{total:100,"sibling-count":1,"show-edges":"","default-page":1},{default:l(({page:n})=>[a(e(K),{class:"flex items-center gap-1"},{default:l(({items:c})=>[a(e(ne)),a(e(le)),(i(!0),d(h,null,g(c,(p,b)=>(i(),d(h,null,[p.type==="page"?(i(),v(e(P),{key:b,value:p.value,"as-child":""},{default:l(()=>[a(e(_),{class:"w-10 h-10 p-0",variant:p.value===n?"default":"page"},{default:l(()=>[s(o(p.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(i(),v(e(se),{key:p.type,index:b,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),a(e(te)),a(e(ie))]),_:2},1024)]),_:1})])],64))}});export{Fe as default};
