import{aC as M,ab as N,aZ as F,ae as W,af as Q,aA as Z,c as r,a as m,b as t,w as a,u as e,t as f,ax as b,a_ as R,F as g,o,y as i,S as z,B as d,aR as J,aS as O,aT as $,aU as y,a$ as L,r as C,aV as S,aW as D,aX as X,aY as Y,h as k,au as G,an as H,ao as K,ap as P,aq as ee,ar as te,as as ae,at as x,ah as se,ai as le,aj as ie}from"./index-Hxe7G9cU.js";import{_ as A}from"./Checkbox-lcxib0Lr.js";import{_ as ne,a as ce,b as oe,c as me,d as ue}from"./PaginationPrev-r90gHy_i.js";import{_ as re,a as B,b as _,c as de,d as h,e as fe}from"./TableRow-bwl4GRxr.js";import{_ as _e}from"./TableCaption-C2dS8pUD.js";import{_ as V,a as T,b as E,c as U,d as j,e as p,f as q}from"./SelectLabel--yFgsnbU.js";import{u as he}from"./useApiData-SyVv9Jhi.js";import"./check-tPObViGv.js";import"./more-horizontal-5Ed6fRQl.js";import"./chevron-right-kLHwGARO.js";const{httpData:pe}=he(),w=M("commentStore",{state:()=>({commentCheckList:[],selectReview:"未審閱",warningReason:"",sortInitial:!0,controlCheckAll:!0,backupDatas:[],comments:[{id:"1",report_num:0,comment:"距離非常近，可以握到手！",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"1@gmail.com"}},{id:"2",report_num:0,comment:"場地佈置太爛的吧，超大布條擋住視線1",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"2@gmail.com"}},{id:"3",report_num:1,comment:"有點遠，建議帶望遠鏡",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"3@gmail.com"}},{id:"4",report_num:0,comment:"前面有柱子擋住，根本看不太到舞台，傻眼",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"1@gmail.com"}},{id:"5",report_num:0,comment:"接得到舞台丟下來的禮物！超讚的！",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"4@gmail.com"}},{id:"6",report_num:31,comment:"我喜歡吃可麗餅",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"5@gmail.com"}},{id:"7",report_num:1,comment:"靠近右邊離音響好近，好大聲，不舒服",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"7@gmail.com"}},{id:"8",report_num:0,comment:"視野很好，而且是有座位的，很不錯",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"8@gmail.com"}},{id:"9",report_num:0,comment:"空間寬敞，也看得很清楚",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"9@gmail.com"}},{id:"10",report_num:0,comment:"空間寬敞，站在噴霧旁邊超衰的",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"10@gmail.com"}},{id:"11",report_num:25,comment:"香雞排好香，想ㄘ",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"11@gmail.com"}},{id:"12",report_num:0,comment:"很遠，要帶望遠鏡。而且很偏，看不是很清楚",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"12@gmail.com"}},{id:"13",report_num:0,comment:"場地不大，前面好擠",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"13@gmail.com"}},{id:"14",report_num:0,comment:"視野很不錯，離舞台好近好讚",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"14@gmail.com"}},{id:"15",report_num:0,comment:"好遠，應援布條舞台應該看不太到QQ",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"15@gmail.com"}}]}),actions:{getComments(l){pe("get",l).then(s=>{for(const c of s.data)c.id=c.id.toString();this.comments=[...s.data],this.backupDatas=[...this.comments]})},checkReview(l){const s=this.comments.find(c=>c.id===l);s.isReview=!0},chagneCheckList(l){const s=this.comments.find(n=>n.id===l),c=this.commentCheckList.findIndex(n=>n.id===l);c===-1?this.commentCheckList.push(s):this.commentCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.checkReview(s.id)}),l.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0},allCheckList(){if(!this.controlCheckAll)return;const l=document.querySelectorAll('[role="checkbox"]');l.forEach((s,c)=>{if(c!==0){if(s.dataset.state!==l[0].dataset.state)return;s.click()}})},deleteSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.deleteComment(s.id)}),l.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortCommentByReportNum(){this.sortInitial=!this.sortInitial,this.sortInitial?this.comments.sort((l,s)=>l.report_num-s.report_num):this.comments.sort((l,s)=>s.report_num-l.report_num)},backupData(){this.backupDatas=[...this.comments]},searchComment:N(function(l){if(this.comments=[...this.backupDatas],l.target.value==="")return;const s=new RegExp(l.target.value,"i"),c=this.comments.filter(u=>s.test(u.venueId.title)),n=this.comments.filter(u=>s.test(u.userId1.email));this.comments=[...c,...n]},500,{maxWait:2e3}),deleteComment(l){const s=this.comments.findIndex(c=>c.id===l);this.comments.splice(s,1),this.alertMessage("success","評論已刪除")},warnUser(l,s){if(this.warningReason===""){this.alertMessage("error","請輸入警告理由");return}this.deleteComment(l),this.alertMessage("success",`對${s.email}使用者警告已送出`)},alertMessage(l,s){F.fire({icon:l,text:s})}},getters:{filterDatas(){return this.selectReview==="全部"?this.comments:this.selectReview==="未審閱"?this.comments.filter(l=>!l.isReview):this.comments.filter(l=>l.isReview)}}}),ve={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},ge={class:"col-span-2 lg:col-span-1"},ke={class:"flex col-span-2"},Ce=m("span",{class:"material-symbols-outlined absolute"}," search ",-1),we={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},Ie={key:0},be={key:1},Re={key:0,class:"material-symbols-outlined"},$e={key:1,class:"material-symbols-outlined"},ye=["for"],Le=m("span",{class:"material-symbols-outlined"},"delete",-1),Se={class:"flex justify-center py-12"},De=m("h2",null,"哇! 找不到資料~",-1),xe=[De],Ae={class:"flex justify-center"},Be={methods:{...W(w,["getComments","checkReview","chagneCheckList","checkSelectReview","allCheckList","checkSelectReview","deleteSelectReview","sortCommentByReportNum","searchComment","deleteComment","warnUser","alertMessage","backupData"])},computed:{...Q(w,["comments","commentCheckList","sortInitial","filterDatas"]),...Z(w,["selectReview","warningReason"])},mounted(){this.backupData()}},Qe=Object.assign(Be,{__name:"AdminCommentsView",setup(l){return(s,c)=>(o(),r(g,null,[m("div",ve,[m("div",ge,[t(e(q),{modelValue:s.selectReview,"onUpdate:modelValue":c[0]||(c[0]=n=>s.selectReview=n)},{default:a(()=>[t(e(V),null,{default:a(()=>[t(e(T),{placeholder:"未審閱"})]),_:1}),t(e(E),null,{default:a(()=>[t(e(U),null,{default:a(()=>[t(e(j),null,{default:a(()=>[i("評論審閱")]),_:1}),t(e(p),{value:"未審閱"},{default:a(()=>[i(" 未審閱 ")]),_:1}),t(e(p),{value:"已審閱"},{default:a(()=>[i(" 已審閱 ")]),_:1}),t(e(p),{value:"全部"},{default:a(()=>[i(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),m("div",ke,[t(e(z),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:s.searchComment,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),t(e(d),{class:"rounded-l-none"},{default:a(()=>[Ce]),_:1})]),m("div",we,[m("p",null,"列表數量: "+f(s.filterDatas.length),1),m("div",null,[t(e(d),{class:"bg-lime-500 hover:bg-lime-700",onClick:s.checkSelectReview,disabled:!s.commentCheckList.length},{default:a(()=>[i("已審閱")]),_:1},8,["onClick","disabled"]),t(e(Y),null,{default:a(()=>[t(e(J),null,{default:a(()=>[t(e(d),{class:"ml-4",variant:"destructive",disabled:!s.commentCheckList.length},{default:a(()=>[i("刪除")]),_:1},8,["disabled"])]),_:1}),t(e(O),null,{default:a(()=>[s.commentCheckList.length?(o(),r("div",Ie,[t(e($),null,{default:a(()=>[t(e(y),null,{default:a(()=>[i("是否刪除以下評論")]),_:1}),t(e(L),null,{default:a(()=>[(o(!0),r(g,null,C(s.commentCheckList,n=>(o(),r("p",{key:n.id},f(n.comment),1))),128))]),_:1})]),_:1}),t(e(S),null,{default:a(()=>[t(e(D),null,{default:a(()=>[i("Cancel")]),_:1}),t(e(X),{onClick:s.deleteSelectReview,class:"bg-destructive hover:bg-destructive/90"},{default:a(()=>[i("刪除")]),_:1},8,["onClick"])]),_:1})])):(o(),r("div",be,[t(e($),null,{default:a(()=>[t(e(y),{class:"text-center"},{default:a(()=>[i("請先點取評論")]),_:1}),t(e(L))]),_:1}),t(e(S),null,{default:a(()=>[t(e(D),null,{default:a(()=>[i("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),b(t(e(fe),{class:"bg-white rounded-lg text-md mb-10"},{default:a(()=>[t(e(_e),null,{default:a(()=>[i("評論管理控制面板")]),_:1}),t(e(re),null,{default:a(()=>[t(e(B),{class:"hover:bg-white",style:{color:"black !important"}},{default:a(()=>[t(e(_),null,{default:a(()=>[t(e(A),{onClick:s.allCheckList},null,8,["onClick"])]),_:1}),t(e(_),null,{default:a(()=>[t(e(d),{variant:"ghost",onClick:s.sortCommentByReportNum},{default:a(()=>[i("檢舉人數"),s.sortInitial?(o(),r("span",Re," stat_1 ")):(o(),r("span",$e," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),t(e(_),null,{default:a(()=>[i("評論內容")]),_:1}),t(e(_),null,{default:a(()=>[i("場地名稱")]),_:1}),t(e(_),null,{default:a(()=>[i("用戶名")]),_:1}),t(e(_))]),_:1})]),_:1}),t(e(de),{class:"text-gray-600"},{default:a(()=>[(o(!0),r(g,null,C(s.filterDatas,n=>(o(),k(e(B),{class:"py-8",key:n.id},{default:a(()=>[t(e(h),{class:"text-purple-primary"},{default:a(()=>[t(e(A),{id:n.id,onClick:u=>s.chagneCheckList(n.id),class:"checkboxList"},null,8,["id","onClick"]),m("label",{for:n.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,ye)]),_:2},1024),t(e(h),{class:"text-purple-primary text-center"},{default:a(()=>[i(f(n.report_num),1)]),_:2},1024),t(e(h),null,{default:a(()=>[i(f(n.comment),1)]),_:2},1024),t(e(h),null,{default:a(()=>[i(f(n.venueId.title),1)]),_:2},1024),t(e(h),null,{default:a(()=>[i(f(n.userId1.email),1)]),_:2},1024),t(e(h),{class:"space-x-4 flex"},{default:a(()=>[n.isReview?(o(),k(e(d),{key:1,class:"bg-lime-500 hover:bg-lime-700"},{default:a(()=>[i("已審閱")]),_:1})):(o(),k(e(d),{key:0,class:"bg-gray-200",onClick:u=>s.checkReview(n.id)},{default:a(()=>[i("未審閱")]),_:2},1032,["onClick"])),t(e(G),null,{default:a(()=>[t(e(H),null,{default:a(()=>[t(e(d),{variant:"destructive"},{default:a(()=>[Le]),_:1})]),_:1}),t(e(K),null,{default:a(()=>[t(e(P),null,{default:a(()=>[t(e(ee),{class:"text-center"},{default:a(()=>[i("是否要警告使用者？")]),_:1}),t(e(te),null,{default:a(()=>[t(e(q),{modelValue:s.warningReason,"onUpdate:modelValue":c[1]||(c[1]=u=>s.warningReason=u)},{default:a(()=>[t(e(V),null,{default:a(()=>[t(e(T),{placeholder:"警告原因"})]),_:1}),t(e(E),null,{default:a(()=>[t(e(U),null,{default:a(()=>[t(e(j),null,{default:a(()=>[i("警告原因")]),_:1}),t(e(p),{value:"不實評論"},{default:a(()=>[i(" 不實評論 ")]),_:1}),t(e(p),{value:"惡意評論"},{default:a(()=>[i(" 惡意評論 ")]),_:1}),t(e(p),{value:"腥羶色內容"},{default:a(()=>[i(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(e(ae),null,{default:a(()=>[t(e(x),null,{default:a(()=>[t(e(d),{class:"bg-lime-500",onClick:u=>s.deleteComment(n.id)},{default:a(()=>[i("不警告")]),_:2},1032,["onClick"])]),_:2},1024),t(e(x),null,{default:a(()=>[t(e(d),{variant:"destructive",onClick:u=>s.warnUser(n.id,n.userId1)},{default:a(()=>[i("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[R,s.filterDatas.length!==0]]),b(m("div",Se,xe,512),[[R,!s.filterDatas.length]]),m("div",Ae,[t(e(ie),{total:100,"sibling-count":1,"show-edges":"","default-page":1},{default:a(({page:n})=>[t(e(se),{class:"flex items-center gap-1"},{default:a(({items:u})=>[t(e(ne)),t(e(ce)),(o(!0),r(g,null,C(u,(v,I)=>(o(),r(g,null,[v.type==="page"?(o(),k(e(le),{key:I,value:v.value,"as-child":""},{default:a(()=>[t(e(d),{class:"w-10 h-10 p-0",variant:v.value===n?"default":"page"},{default:a(()=>[i(f(v.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),k(e(oe),{key:v.type,index:I,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),t(e(me)),t(e(ue))]),_:2},1024)]),_:1})])],64))}});export{Qe as default};
