import{aA as W,k as Q,al as Z,aC as z,ac as J,a$ as O,af as P,ag as X,aB as Y,c as r,a as u,b as t,w as a,u as e,t as _,ay as R,b0 as $,F as g,o,E as i,V as G,D as d,aT as H,aU as K,aV as y,aW as L,b1 as D,r as I,aX as S,aY as x,aZ as ee,a_ as te,h as k,av as ae,ao as se,ap as le,aq as ie,ar as ne,as as ce,at as oe,au as A,ai as me,aj as ue,ak as re}from"./index-bAjc-hai.js";import{_ as B}from"./Checkbox-4aGClwDz.js";import{_ as de,a as fe,b as _e,c as he,d as pe}from"./PaginationPrev-aPU_JqDp.js";import{_ as ve,a as V,b as h,c as ge,d as p,e as ke}from"./TableRow-mUDZsDKP.js";import{_ as Ce}from"./TableCaption-vwjj9A4N.js";import{_ as E,a as T,b as U,c as j,d as q,e as v,f as M}from"./SelectLabel-9iTD4sDP.js";import"./check-plfbtypl.js";import"./more-horizontal-bCTm9HMx.js";import"./chevron-right-CNeymuCM.js";const{setIsLoading:N}=W(),we=()=>{let l;const s=Q(null);return{state:l,err:s,httpData:async(n,m,f)=>(N(f),new Promise((C,F)=>{Z[n](m).then(w=>{l=w.data,C(l)}).catch(w=>{console.log(w),s.value=w,F(s)}).finally(()=>{N()})}))}},{httpData:Ie}=we(),b=z("commentStore",{state:()=>({commentCheckList:[],selectReview:"未審閱",warningReason:"",sortInitial:!0,controlCheckAll:!0,backupDatas:[],comments:[{id:"1",report_num:0,comment:"距離非常近，可以握到手！",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"1@gmail.com"}},{id:"2",report_num:0,comment:"場地佈置太爛的吧，超大布條擋住視線1",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"2@gmail.com"}},{id:"3",report_num:1,comment:"有點遠，建議帶望遠鏡",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"3@gmail.com"}},{id:"4",report_num:0,comment:"前面有柱子擋住，根本看不太到舞台，傻眼",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"1@gmail.com"}},{id:"5",report_num:0,comment:"接得到舞台丟下來的禮物！超讚的！",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"4@gmail.com"}},{id:"6",report_num:31,comment:"我喜歡吃可麗餅",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"5@gmail.com"}},{id:"7",report_num:1,comment:"靠近右邊離音響好近，好大聲，不舒服",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"7@gmail.com"}},{id:"8",report_num:0,comment:"視野很好，而且是有座位的，很不錯",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"8@gmail.com"}},{id:"9",report_num:0,comment:"空間寬敞，也看得很清楚",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"9@gmail.com"}},{id:"10",report_num:0,comment:"空間寬敞，站在噴霧旁邊超衰的",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"10@gmail.com"}},{id:"11",report_num:25,comment:"香雞排好香，想ㄘ",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"11@gmail.com"}},{id:"12",report_num:0,comment:"很遠，要帶望遠鏡。而且很偏，看不是很清楚",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"12@gmail.com"}},{id:"13",report_num:0,comment:"場地不大，前面好擠",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"13@gmail.com"}},{id:"14",report_num:0,comment:"視野很不錯，離舞台好近好讚",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"14@gmail.com"}},{id:"15",report_num:0,comment:"好遠，應援布條舞台應該看不太到QQ",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"15@gmail.com"}}]}),actions:{getComments(l){Ie("get",l).then(s=>{for(const c of s.data)c.id=c.id.toString();this.comments=[...s.data],this.backupDatas=[...this.comments]})},checkReview(l){const s=this.comments.find(c=>c.id===l);s.isReview=!0},chagneCheckList(l){const s=this.comments.find(n=>n.id===l),c=this.commentCheckList.findIndex(n=>n.id===l);c===-1?this.commentCheckList.push(s):this.commentCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.checkReview(s.id)}),l.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0},allCheckList(){if(!this.controlCheckAll)return;const l=document.querySelectorAll('[role="checkbox"]');l.forEach((s,c)=>{if(c!==0){if(s.dataset.state!==l[0].dataset.state)return;s.click()}})},deleteSelectReview(){this.controlCheckAll=!1;const l=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.deleteComment(s.id)}),l.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortCommentByReportNum(){this.sortInitial=!this.sortInitial,this.sortInitial?this.comments.sort((l,s)=>l.report_num-s.report_num):this.comments.sort((l,s)=>s.report_num-l.report_num)},backupData(){this.backupDatas=[...this.comments]},searchComment:J(function(l){if(this.comments=[...this.backupDatas],l.target.value==="")return;const s=new RegExp(l.target.value,"i"),c=this.comments.filter(m=>s.test(m.venueId.title)),n=this.comments.filter(m=>s.test(m.userId1.email));this.comments=[...c,...n]},500,{maxWait:2e3}),deleteComment(l){const s=this.comments.findIndex(c=>c.id===l);this.comments.splice(s,1),this.alertMessage("success","評論已刪除")},warnUser(l,s){if(this.warningReason===""){this.alertMessage("error","請輸入警告理由");return}this.deleteComment(l),this.alertMessage("success",`對${s.email}使用者警告已送出`)},alertMessage(l,s){O.fire({icon:l,text:s})}},getters:{filterDatas(){return this.selectReview==="全部"?this.comments:this.selectReview==="未審閱"?this.comments.filter(l=>!l.isReview):this.comments.filter(l=>l.isReview)}}}),be={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},Re={class:"col-span-2 lg:col-span-1"},$e={class:"flex col-span-2"},ye=u("span",{class:"material-symbols-outlined absolute"}," search ",-1),Le={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},De={key:0},Se={key:1},xe={key:0,class:"material-symbols-outlined"},Ae={key:1,class:"material-symbols-outlined"},Be=["for"],Ve=u("span",{class:"material-symbols-outlined"},"delete",-1),Ee={class:"flex justify-center py-12"},Te=u("h2",null,"哇! 找不到資料~",-1),Ue=[Te],je={class:"flex justify-center"},qe={methods:{...P(b,["getComments","checkReview","chagneCheckList","checkSelectReview","allCheckList","checkSelectReview","deleteSelectReview","sortCommentByReportNum","searchComment","deleteComment","warnUser","alertMessage","backupData"])},computed:{...X(b,["comments","commentCheckList","sortInitial","filterDatas"]),...Y(b,["selectReview","warningReason"])},mounted(){this.backupData()}},Pe=Object.assign(qe,{__name:"AdminCommentsView",setup(l){return(s,c)=>(o(),r(g,null,[u("div",be,[u("div",Re,[t(e(M),{modelValue:s.selectReview,"onUpdate:modelValue":c[0]||(c[0]=n=>s.selectReview=n)},{default:a(()=>[t(e(E),null,{default:a(()=>[t(e(T),{placeholder:"未審閱"})]),_:1}),t(e(U),null,{default:a(()=>[t(e(j),null,{default:a(()=>[t(e(q),null,{default:a(()=>[i("評論審閱")]),_:1}),t(e(v),{value:"未審閱"},{default:a(()=>[i(" 未審閱 ")]),_:1}),t(e(v),{value:"已審閱"},{default:a(()=>[i(" 已審閱 ")]),_:1}),t(e(v),{value:"全部"},{default:a(()=>[i(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),u("div",$e,[t(e(G),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:s.searchComment,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),t(e(d),{class:"rounded-l-none"},{default:a(()=>[ye]),_:1})]),u("div",Le,[u("p",null,"列表數量: "+_(s.filterDatas.length),1),u("div",null,[t(e(d),{class:"bg-lime-500 hover:bg-lime-700",onClick:s.checkSelectReview,disabled:!s.commentCheckList.length},{default:a(()=>[i("已審閱")]),_:1},8,["onClick","disabled"]),t(e(te),null,{default:a(()=>[t(e(H),null,{default:a(()=>[t(e(d),{class:"ml-4",variant:"destructive",disabled:!s.commentCheckList.length},{default:a(()=>[i("刪除")]),_:1},8,["disabled"])]),_:1}),t(e(K),null,{default:a(()=>[s.commentCheckList.length?(o(),r("div",De,[t(e(y),null,{default:a(()=>[t(e(L),null,{default:a(()=>[i("是否刪除以下評論")]),_:1}),t(e(D),null,{default:a(()=>[(o(!0),r(g,null,I(s.commentCheckList,n=>(o(),r("p",{key:n.id},_(n.comment),1))),128))]),_:1})]),_:1}),t(e(S),null,{default:a(()=>[t(e(x),null,{default:a(()=>[i("Cancel")]),_:1}),t(e(ee),{onClick:s.deleteSelectReview,class:"bg-destructive hover:bg-destructive/90"},{default:a(()=>[i("刪除")]),_:1},8,["onClick"])]),_:1})])):(o(),r("div",Se,[t(e(y),null,{default:a(()=>[t(e(L),{class:"text-center"},{default:a(()=>[i("請先點取評論")]),_:1}),t(e(D))]),_:1}),t(e(S),null,{default:a(()=>[t(e(x),null,{default:a(()=>[i("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),R(t(e(ke),{class:"bg-white rounded-lg text-md mb-10"},{default:a(()=>[t(e(Ce),null,{default:a(()=>[i("評論管理控制面板")]),_:1}),t(e(ve),null,{default:a(()=>[t(e(V),{class:"hover:bg-white",style:{color:"black !important"}},{default:a(()=>[t(e(h),null,{default:a(()=>[t(e(B),{onClick:s.allCheckList},null,8,["onClick"])]),_:1}),t(e(h),null,{default:a(()=>[t(e(d),{variant:"ghost",onClick:s.sortCommentByReportNum},{default:a(()=>[i("檢舉人數"),s.sortInitial?(o(),r("span",xe," stat_1 ")):(o(),r("span",Ae," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),t(e(h),null,{default:a(()=>[i("評論內容")]),_:1}),t(e(h),null,{default:a(()=>[i("場地名稱")]),_:1}),t(e(h),null,{default:a(()=>[i("用戶名")]),_:1}),t(e(h))]),_:1})]),_:1}),t(e(ge),{class:"text-gray-600"},{default:a(()=>[(o(!0),r(g,null,I(s.filterDatas,n=>(o(),k(e(V),{class:"py-8",key:n.id},{default:a(()=>[t(e(p),{class:"text-purple-primary"},{default:a(()=>[t(e(B),{id:n.id,onClick:m=>s.chagneCheckList(n.id),class:"checkboxList"},null,8,["id","onClick"]),u("label",{for:n.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,Be)]),_:2},1024),t(e(p),{class:"text-purple-primary text-center"},{default:a(()=>[i(_(n.report_num),1)]),_:2},1024),t(e(p),null,{default:a(()=>[i(_(n.comment),1)]),_:2},1024),t(e(p),null,{default:a(()=>[i(_(n.venueId.title),1)]),_:2},1024),t(e(p),null,{default:a(()=>[i(_(n.userId1.email),1)]),_:2},1024),t(e(p),{class:"space-x-4 flex"},{default:a(()=>[n.isReview?(o(),k(e(d),{key:1,class:"bg-lime-500 hover:bg-lime-700"},{default:a(()=>[i("已審閱")]),_:1})):(o(),k(e(d),{key:0,class:"bg-gray-200",onClick:m=>s.checkReview(n.id)},{default:a(()=>[i("未審閱")]),_:2},1032,["onClick"])),t(e(ae),null,{default:a(()=>[t(e(se),null,{default:a(()=>[t(e(d),{variant:"destructive"},{default:a(()=>[Ve]),_:1})]),_:1}),t(e(le),null,{default:a(()=>[t(e(ie),null,{default:a(()=>[t(e(ne),{class:"text-center"},{default:a(()=>[i("是否要警告使用者？")]),_:1}),t(e(ce),null,{default:a(()=>[t(e(M),{modelValue:s.warningReason,"onUpdate:modelValue":c[1]||(c[1]=m=>s.warningReason=m)},{default:a(()=>[t(e(E),null,{default:a(()=>[t(e(T),{placeholder:"警告原因"})]),_:1}),t(e(U),null,{default:a(()=>[t(e(j),null,{default:a(()=>[t(e(q),null,{default:a(()=>[i("警告原因")]),_:1}),t(e(v),{value:"不實評論"},{default:a(()=>[i(" 不實評論 ")]),_:1}),t(e(v),{value:"惡意評論"},{default:a(()=>[i(" 惡意評論 ")]),_:1}),t(e(v),{value:"腥羶色內容"},{default:a(()=>[i(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(e(oe),null,{default:a(()=>[t(e(A),null,{default:a(()=>[t(e(d),{class:"bg-lime-500",onClick:m=>s.deleteComment(n.id)},{default:a(()=>[i("不警告")]),_:2},1032,["onClick"])]),_:2},1024),t(e(A),null,{default:a(()=>[t(e(d),{variant:"destructive",onClick:m=>s.warnUser(n.id,n.userId1)},{default:a(()=>[i("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[$,s.filterDatas.length!==0]]),R(u("div",Ee,Ue,512),[[$,!s.filterDatas.length]]),u("div",je,[t(e(re),{total:10,"sibling-count":1,"show-edges":"","default-page":1},{default:a(({page:n})=>[t(e(me),{class:"flex items-center gap-1"},{default:a(({items:m})=>[t(e(de)),t(e(fe)),(o(!0),r(g,null,I(m,(f,C)=>(o(),r(g,null,[f.type==="page"?(o(),k(e(ue),{key:C,value:f.value,"as-child":""},{default:a(()=>[t(e(d),{class:"w-10 h-10 p-0",variant:f.value===n?"default":"page"},{default:a(()=>[i(_(f.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),k(e(_e),{key:f.type,index:C,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),t(e(he)),t(e(pe))]),_:2},1024)]),_:1})])],64))}});export{Pe as default};
