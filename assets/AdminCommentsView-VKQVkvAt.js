import{a9 as F,j as Q,ap as W,al as J,ab as O,b8 as P,y as Z,z as G,aE as H,c as d,a as u,b as t,w as s,u as e,t as _,aC as y,b9 as R,F as g,o,C as i,T as K,B as r,b0 as X,b1 as Y,b2 as $,b3 as L,ba as D,r as b,b4 as S,b5 as x,b6 as ee,b7 as te,g as k,az as se,as as ae,at as le,au as ie,av as ne,aw as ce,ax as oe,ay as A,ae as me,af as ue,ag as de}from"./index-YXoIurfv.js";import{_ as B}from"./Checkbox-RT80Dx4u.js";import{_ as re,a as fe,b as _e,c as he,d as pe}from"./PaginationPrev-boglATWC.js";import{_ as ve,a as V,b as h,c as ge,d as p,e as ke}from"./TableRow-OctWhb9j.js";import{_ as Ce}from"./TableCaption-IIrriuVK.js";import{_ as E,a as T,b as j,c as M,d as N,e as v,f as U}from"./SelectLabel-v-ryAvYo.js";import"./check-I0_A8tlr.js";import"./more-horizontal-wIMTy_8v.js";const{setIsLoading:q}=F(),we=()=>{let l;const a=Q(null);return{state:l,err:a,httpData:async(n,m,f)=>(q(f),new Promise((C,z)=>{W[n](m).then(w=>{l=w.data,C(l)}).catch(w=>{console.log(w),a.value=w,z(a)}).finally(()=>{q()})}))}},{httpData:be}=we(),I=J("commentStore",{state:()=>({commentCheckList:[],selectReview:"未審閱",warningReason:"",sortInitial:!0,controlCheckAll:!0,backupDatas:[],comments:[{id:"1",report_num:0,comment:"距離非常近，可以握到手！",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"1@gmail.com"}},{id:"2",report_num:0,comment:"場地佈置太爛的吧，超大布條擋住視線1",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"2@gmail.com"}},{id:"3",report_num:1,comment:"有點遠，建議帶望遠鏡",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"3@gmail.com"}},{id:"4",report_num:0,comment:"前面有柱子擋住，根本看不太到舞台，傻眼",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"1@gmail.com"}},{id:"5",report_num:0,comment:"接得到舞台丟下來的禮物！超讚的！",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"4@gmail.com"}},{id:"6",report_num:31,comment:"我喜歡吃可麗餅",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"5@gmail.com"}},{id:"7",report_num:1,comment:"靠近右邊離音響好近，好大聲，不舒服",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"7@gmail.com"}},{id:"8",report_num:0,comment:"視野很好，而且是有座位的，很不錯",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"8@gmail.com"}},{id:"9",report_num:0,comment:"空間寬敞，也看得很清楚",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"9@gmail.com"}},{id:"10",report_num:0,comment:"空間寬敞，站在噴霧旁邊超衰的",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"10@gmail.com"}},{id:"11",report_num:25,comment:"香雞排好香，想ㄘ",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"11@gmail.com"}},{id:"12",report_num:0,comment:"很遠，要帶望遠鏡。而且很偏，看不是很清楚",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"12@gmail.com"}},{id:"13",report_num:0,comment:"場地不大，前面好擠",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"13@gmail.com"}},{id:"14",report_num:0,comment:"視野很不錯，離舞台好近好讚",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"14@gmail.com"}},{id:"15",report_num:0,comment:"好遠，應援布條舞台應該看不太到QQ",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"15@gmail.com"}}]}),actions:{getComments(l){be("get",l).then(a=>{for(const c of a.data)c.id=c.id.toString();this.comments=[...a.data],this.backupDatas=[...this.comments]})},checkReview(l){const a=this.comments.find(c=>c.id===l);a.isReview=!0},chagneCheckList(l){const a=this.comments.find(n=>n.id===l),c=this.commentCheckList.findIndex(n=>n.id===l);c===-1?this.commentCheckList.push(a):this.commentCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(a=>{this.checkReview(a.id)}),l.forEach(a=>{a.dataset.state==="checked"&&a.click()}),this.controlCheckAll=!0},allCheckList(){if(!this.controlCheckAll)return;const l=document.querySelectorAll('[role="checkbox"]');l.forEach((a,c)=>{if(c!==0){if(a.dataset.state!==l[0].dataset.state)return;a.click()}})},deleteSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(a=>{this.deleteComment(a.id)}),l.forEach(a=>{a.dataset.state==="checked"&&a.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortCommentByReportNum(){this.sortInitial=!this.sortInitial,this.sortInitial?this.comments.sort((l,a)=>l.report_num-a.report_num):this.comments.sort((l,a)=>a.report_num-l.report_num)},backupData(){this.backupDatas=[...this.comments]},searchComment:O(function(l){if(this.comments=[...this.backupDatas],l.target.value==="")return;const a=new RegExp(l.target.value,"i"),c=this.comments.filter(m=>a.test(m.venueId.title)),n=this.comments.filter(m=>a.test(m.userId1.email));this.comments=[...c,...n]},500,{maxWait:2e3}),deleteComment(l){const a=this.comments.findIndex(c=>c.id===l);this.comments.splice(a,1),this.alertMessage("success","評論已刪除")},warnUser(l,a){if(this.warningReason===""){this.alertMessage("error","請輸入警告理由");return}this.deleteComment(l),this.alertMessage("success",`對${a.email}使用者警告已送出`)},alertMessage(l,a){P.fire({icon:l,text:a})}},getters:{filterDatas(){return this.selectReview==="全部"?this.comments:this.selectReview==="未審閱"?this.comments.filter(l=>!l.isReview):this.comments.filter(l=>l.isReview)}}}),Ie={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},ye={class:"col-span-2 lg:col-span-1"},Re={class:"flex col-span-2"},$e=u("span",{class:"material-symbols-outlined absolute"}," search ",-1),Le={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},De={key:0},Se={key:1},xe={key:0,class:"material-symbols-outlined"},Ae={key:1,class:"material-symbols-outlined"},Be=["for"],Ve=u("span",{class:"material-symbols-outlined"},"delete",-1),Ee={class:"flex justify-center py-12"},Te=u("h2",null,"哇! 找不到資料~",-1),je=[Te],Me={class:"flex justify-center"},Ne={methods:{...Z(I,["getComments","checkReview","chagneCheckList","checkSelectReview","allCheckList","checkSelectReview","deleteSelectReview","sortCommentByReportNum","searchComment","deleteComment","warnUser","alertMessage","backupData"])},computed:{...G(I,["comments","commentCheckList","sortInitial","filterDatas"]),...H(I,["selectReview","warningReason"])},mounted(){this.backupData()}},Pe=Object.assign(Ne,{__name:"AdminCommentsView",setup(l){return(a,c)=>(o(),d(g,null,[u("div",Ie,[u("div",ye,[t(e(U),{modelValue:a.selectReview,"onUpdate:modelValue":c[0]||(c[0]=n=>a.selectReview=n)},{default:s(()=>[t(e(E),null,{default:s(()=>[t(e(T),{placeholder:"未審閱"})]),_:1}),t(e(j),null,{default:s(()=>[t(e(M),null,{default:s(()=>[t(e(N),null,{default:s(()=>[i("評論審閱")]),_:1}),t(e(v),{value:"未審閱"},{default:s(()=>[i(" 未審閱 ")]),_:1}),t(e(v),{value:"已審閱"},{default:s(()=>[i(" 已審閱 ")]),_:1}),t(e(v),{value:"全部"},{default:s(()=>[i(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),u("div",Re,[t(e(K),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:a.searchComment,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),t(e(r),{class:"rounded-l-none"},{default:s(()=>[$e]),_:1})]),u("div",Le,[u("p",null,"列表數量: "+_(a.filterDatas.length),1),u("div",null,[t(e(r),{class:"bg-lime-500 hover:bg-lime-700",onClick:a.checkSelectReview,disabled:!a.commentCheckList.length},{default:s(()=>[i("已審閱")]),_:1},8,["onClick","disabled"]),t(e(te),null,{default:s(()=>[t(e(X),null,{default:s(()=>[t(e(r),{class:"ml-4",variant:"destructive",disabled:!a.commentCheckList.length},{default:s(()=>[i("刪除")]),_:1},8,["disabled"])]),_:1}),t(e(Y),null,{default:s(()=>[a.commentCheckList.length?(o(),d("div",De,[t(e($),null,{default:s(()=>[t(e(L),null,{default:s(()=>[i("是否刪除以下評論")]),_:1}),t(e(D),null,{default:s(()=>[(o(!0),d(g,null,b(a.commentCheckList,n=>(o(),d("p",{key:n.id},_(n.comment),1))),128))]),_:1})]),_:1}),t(e(S),null,{default:s(()=>[t(e(x),null,{default:s(()=>[i("Cancel")]),_:1}),t(e(ee),{onClick:a.deleteSelectReview,class:"bg-destructive hover:bg-destructive/90"},{default:s(()=>[i("刪除")]),_:1},8,["onClick"])]),_:1})])):(o(),d("div",Se,[t(e($),null,{default:s(()=>[t(e(L),{class:"text-center"},{default:s(()=>[i("請先點取評論")]),_:1}),t(e(D))]),_:1}),t(e(S),null,{default:s(()=>[t(e(x),null,{default:s(()=>[i("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),y(t(e(ke),{class:"bg-white rounded-lg text-md mb-10"},{default:s(()=>[t(e(Ce),null,{default:s(()=>[i("評論管理控制面板")]),_:1}),t(e(ve),null,{default:s(()=>[t(e(V),{class:"hover:bg-white",style:{color:"black !important"}},{default:s(()=>[t(e(h),null,{default:s(()=>[t(e(B),{onClick:a.allCheckList},null,8,["onClick"])]),_:1}),t(e(h),null,{default:s(()=>[t(e(r),{variant:"ghost",onClick:a.sortCommentByReportNum},{default:s(()=>[i("檢舉人數"),a.sortInitial?(o(),d("span",xe," stat_1 ")):(o(),d("span",Ae," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),t(e(h),null,{default:s(()=>[i("評論內容")]),_:1}),t(e(h),null,{default:s(()=>[i("場地名稱")]),_:1}),t(e(h),null,{default:s(()=>[i("用戶名")]),_:1}),t(e(h))]),_:1})]),_:1}),t(e(ge),{class:"text-gray-600"},{default:s(()=>[(o(!0),d(g,null,b(a.filterDatas,n=>(o(),k(e(V),{class:"py-8",key:n.id},{default:s(()=>[t(e(p),{class:"text-purple-primary"},{default:s(()=>[t(e(B),{id:n.id,onClick:m=>a.chagneCheckList(n.id),class:"checkboxList"},null,8,["id","onClick"]),u("label",{for:n.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,Be)]),_:2},1024),t(e(p),{class:"text-purple-primary text-center"},{default:s(()=>[i(_(n.report_num),1)]),_:2},1024),t(e(p),null,{default:s(()=>[i(_(n.comment),1)]),_:2},1024),t(e(p),null,{default:s(()=>[i(_(n.venueId.title),1)]),_:2},1024),t(e(p),null,{default:s(()=>[i(_(n.userId1.email),1)]),_:2},1024),t(e(p),{class:"space-x-4 flex"},{default:s(()=>[n.isReview?(o(),k(e(r),{key:1,class:"bg-lime-500 hover:bg-lime-700"},{default:s(()=>[i("已審閱")]),_:1})):(o(),k(e(r),{key:0,class:"bg-gray-200",onClick:m=>a.checkReview(n.id)},{default:s(()=>[i("未審閱")]),_:2},1032,["onClick"])),t(e(se),null,{default:s(()=>[t(e(ae),null,{default:s(()=>[t(e(r),{variant:"destructive"},{default:s(()=>[Ve]),_:1})]),_:1}),t(e(le),null,{default:s(()=>[t(e(ie),null,{default:s(()=>[t(e(ne),{class:"text-center"},{default:s(()=>[i("是否要警告使用者？")]),_:1}),t(e(ce),null,{default:s(()=>[t(e(U),{modelValue:a.warningReason,"onUpdate:modelValue":c[1]||(c[1]=m=>a.warningReason=m)},{default:s(()=>[t(e(E),null,{default:s(()=>[t(e(T),{placeholder:"警告原因"})]),_:1}),t(e(j),null,{default:s(()=>[t(e(M),null,{default:s(()=>[t(e(N),null,{default:s(()=>[i("警告原因")]),_:1}),t(e(v),{value:"不實評論"},{default:s(()=>[i(" 不實評論 ")]),_:1}),t(e(v),{value:"惡意評論"},{default:s(()=>[i(" 惡意評論 ")]),_:1}),t(e(v),{value:"腥羶色內容"},{default:s(()=>[i(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(e(oe),null,{default:s(()=>[t(e(A),null,{default:s(()=>[t(e(r),{class:"bg-lime-500",onClick:m=>a.deleteComment(n.id)},{default:s(()=>[i("不警告")]),_:2},1032,["onClick"])]),_:2},1024),t(e(A),null,{default:s(()=>[t(e(r),{variant:"destructive",onClick:m=>a.warnUser(n.id,n.userId1)},{default:s(()=>[i("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[R,a.filterDatas.length!==0]]),y(u("div",Ee,je,512),[[R,!a.filterDatas.length]]),u("div",Me,[t(e(de),{total:10,"sibling-count":1,"show-edges":"","default-page":1},{default:s(({page:n})=>[t(e(me),{class:"flex items-center gap-1"},{default:s(({items:m})=>[t(e(re)),t(e(fe)),(o(!0),d(g,null,b(m,(f,C)=>(o(),d(g,null,[f.type==="page"?(o(),k(e(ue),{key:C,value:f.value,"as-child":""},{default:s(()=>[t(e(r),{class:"w-10 h-10 p-0",variant:f.value===n?"default":"page"},{default:s(()=>[i(_(f.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),k(e(_e),{key:f.type,index:C,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),t(e(he)),t(e(pe))]),_:2},1024)]),_:1})])],64))}});export{Pe as default};
