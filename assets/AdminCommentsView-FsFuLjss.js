import{a0 as M,a3 as N,T as F,U as Q,aa as W,c as r,a as m,d as t,w as l,u as e,t as f,a8 as R,a9 as b,F as k,o,j as i,k as d,r as C,a4 as z,a5 as G,h as g,a6 as O}from"./index-nJP6UPh9.js";import{g as Y,h as H,i as $,j as y,k as L,l as S,m as J,n as K,o as x,p as P,q as X,f as Z,_ as ee,a as te,b as le,c as se,d as ae,e as D}from"./AlertDialogCancel-3FMNqHTa.js";import{u as ie,_ as ne}from"./Input-h3YhEL3-.js";import{_ as ce,a as oe,b as me}from"./PaginationPrev-4eD-QuJ1.js";import{_ as ue,a as A,b as _,c as re,e as de,d as h}from"./TableRow-2vPjsre3.js";import{_ as fe}from"./TableCaption-SpXsuzpv.js";import{_ as B,a as V,b as E,c as j,d as T,f as v,e as U}from"./SelectLabel-ORrFYF6J.js";import{_ as q,a as _e}from"./AlertDialogDescription-wYnIeOhs.js";const w=M("commentStore",{state:()=>({commentCheckList:[],selectReview:"未審閱",warningReason:"",sortInitial:!0,controlCheckAll:!0,backupDatas:[],comments:[{id:"1",report_num:0,comment:"距離非常近，可以握到手！",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"1@gmail.com"}},{id:"2",report_num:0,comment:"場地佈置太爛的吧，超大布條擋住視線1",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"2@gmail.com"}},{id:"3",report_num:1,comment:"有點遠，建議帶望遠鏡",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"3@gmail.com"}},{id:"4",report_num:0,comment:"前面有柱子擋住，根本看不太到舞台，傻眼",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"1@gmail.com"}},{id:"5",report_num:0,comment:"接得到舞台丟下來的禮物！超讚的！",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"4@gmail.com"}},{id:"6",report_num:31,comment:"我喜歡吃可麗餅",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"5@gmail.com"}},{id:"7",report_num:1,comment:"靠近右邊離音響好近，好大聲，不舒服",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"7@gmail.com"}},{id:"8",report_num:0,comment:"視野很好，而且是有座位的，很不錯",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"8@gmail.com"}},{id:"9",report_num:0,comment:"空間寬敞，也看得很清楚",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"9@gmail.com"}},{id:"10",report_num:0,comment:"空間寬敞，站在噴霧旁邊超衰的",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"10@gmail.com"}},{id:"11",report_num:25,comment:"香雞排好香，想ㄘ",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"11@gmail.com"}},{id:"12",report_num:0,comment:"很遠，要帶望遠鏡。而且很偏，看不是很清楚",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"12@gmail.com"}},{id:"13",report_num:0,comment:"場地不大，前面好擠",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"13@gmail.com"}},{id:"14",report_num:0,comment:"視野很不錯，離舞台好近好讚",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"14@gmail.com"}},{id:"15",report_num:0,comment:"好遠，應援布條舞台應該看不太到QQ",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"15@gmail.com"}}]}),actions:{getComments(a){httpData("get",a).then(s=>{for(const c of s.data)c.id=c.id.toString();this.comments=[...s.data],this.backupDatas=[...this.comments]})},checkReview(a){const s=this.comments.find(c=>c.id===a);s.isReview=!0},chagneCheckList(a){const s=this.comments.find(n=>n.id===a),c=this.commentCheckList.findIndex(n=>n.id===a);c===-1?this.commentCheckList.push(s):this.commentCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.checkReview(s.id)}),a.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0},allCheckList(){if(!this.controlCheckAll)return;const a=document.querySelectorAll('[role="checkbox"]');a.forEach((s,c)=>{if(c!==0){if(s.dataset.state!==a[0].dataset.state)return;s.click()}})},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.checkReview(s.id)}),a.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.deleteComment(s.id)}),a.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortCommentByReportNum(){this.sortInitial=!this.sortInitial,this.sortInitial?this.comments.sort((a,s)=>a.report_num-s.report_num):this.comments.sort((a,s)=>s.report_num-a.report_num)},backupData(){this.backupDatas=[...this.comments]},searchComment:ie(function(a){if(this.comments=[...this.backupDatas],a.target.value==="")return;const s=new RegExp(a.target.value,"i"),c=this.comments.filter(u=>s.test(u.venueId.title)),n=this.comments.filter(u=>s.test(u.userId1.email));this.comments=[...c,...n]},500,{maxWait:2e3}),deleteComment(a){const s=this.comments.findIndex(c=>c.id===a);this.comments.splice(s,1),this.alertMessage("success","評論已刪除")},warnUser(a,s){if(this.warningReason===""){this.alertMessage("error","請輸入警告理由");return}this.deleteComment(a),this.alertMessage("success",`對${s.email}使用者警告已送出`)},alertMessage(a,s){N.fire({icon:a,text:s})}},getters:{filterDatas(){return this.selectReview==="全部"?this.comments:this.selectReview==="未審閱"?this.comments.filter(a=>!a.isReview):this.comments.filter(a=>a.isReview)}}}),he={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},ve={class:"col-span-2 lg:col-span-1"},pe={class:"flex col-span-2"},ke=m("span",{class:"material-symbols-outlined absolute"}," search ",-1),ge={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},Ce={key:0},we={key:1},Ie={key:0,class:"material-symbols-outlined"},Re={key:1,class:"material-symbols-outlined"},be=["for"],$e=m("span",{class:"material-symbols-outlined"},"delete",-1),ye={class:"flex justify-center py-12"},Le=m("h2",null,"哇! 找不到資料~",-1),Se=[Le],xe={class:"flex justify-center"},De={methods:{...F(w,["getComments","checkReview","chagneCheckList","checkSelectReview","allCheckList","checkSelectReview","deleteSelectReview","sortCommentByReportNum","searchComment","deleteComment","warnUser","alertMessage","backupData"])},computed:{...Q(w,["comments","commentCheckList","sortInitial","filterDatas"]),...W(w,["selectReview","warningReason"])},mounted(){this.backupData()}},Me=Object.assign(De,{__name:"AdminCommentsView",setup(a){return(s,c)=>(o(),r(k,null,[m("div",he,[m("div",ve,[t(e(U),{modelValue:s.selectReview,"onUpdate:modelValue":c[0]||(c[0]=n=>s.selectReview=n)},{default:l(()=>[t(e(B),null,{default:l(()=>[t(e(V),{placeholder:"未審閱"})]),_:1}),t(e(E),null,{default:l(()=>[t(e(j),null,{default:l(()=>[t(e(T),null,{default:l(()=>[i("評論審閱")]),_:1}),t(e(v),{value:"未審閱"},{default:l(()=>[i(" 未審閱 ")]),_:1}),t(e(v),{value:"已審閱"},{default:l(()=>[i(" 已審閱 ")]),_:1}),t(e(v),{value:"全部"},{default:l(()=>[i(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),m("div",pe,[t(e(ne),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:s.searchComment,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),t(e(d),{class:"rounded-l-none"},{default:l(()=>[ke]),_:1})]),m("div",ge,[m("p",null,"列表數量: "+f(s.filterDatas.length),1),m("div",null,[t(e(d),{class:"bg-lime-500 hover:bg-lime-700",onClick:s.checkSelectReview,disabled:!s.commentCheckList.length},{default:l(()=>[i("已審閱")]),_:1},8,["onClick","disabled"]),t(e(K),null,{default:l(()=>[t(e(Y),null,{default:l(()=>[t(e(d),{class:"ml-4",variant:"destructive",disabled:!s.commentCheckList.length},{default:l(()=>[i("刪除")]),_:1},8,["disabled"])]),_:1}),t(e(H),null,{default:l(()=>[s.commentCheckList.length?(o(),r("div",Ce,[t(e($),null,{default:l(()=>[t(e(y),null,{default:l(()=>[i("是否刪除以下評論")]),_:1}),t(e(q),null,{default:l(()=>[(o(!0),r(k,null,C(s.commentCheckList,n=>(o(),r("p",{key:n.id},f(n.comment),1))),128))]),_:1})]),_:1}),t(e(L),null,{default:l(()=>[t(e(S),null,{default:l(()=>[i("Cancel")]),_:1}),t(e(J),{onClick:s.deleteSelectReview,class:"bg-destructive hover:bg-destructive/90"},{default:l(()=>[i("刪除")]),_:1},8,["onClick"])]),_:1})])):(o(),r("div",we,[t(e($),null,{default:l(()=>[t(e(y),{class:"text-center"},{default:l(()=>[i("請先點取評論")]),_:1}),t(e(q))]),_:1}),t(e(L),null,{default:l(()=>[t(e(S),null,{default:l(()=>[i("Cancel")]),_:1})]),_:1})]))]),_:1})]),_:1})])])]),R(t(e(de),{class:"bg-white rounded-lg text-md mb-10"},{default:l(()=>[t(e(fe),null,{default:l(()=>[i("評論管理控制面板")]),_:1}),t(e(ue),null,{default:l(()=>[t(e(A),{class:"hover:bg-white",style:{color:"black !important"}},{default:l(()=>[t(e(_),null,{default:l(()=>[t(e(x),{onClick:s.allCheckList},null,8,["onClick"])]),_:1}),t(e(_),null,{default:l(()=>[t(e(d),{variant:"ghost",onClick:s.sortCommentByReportNum},{default:l(()=>[i("檢舉人數"),s.sortInitial?(o(),r("span",Ie," stat_1 ")):(o(),r("span",Re," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),t(e(_),null,{default:l(()=>[i("評論內容")]),_:1}),t(e(_),null,{default:l(()=>[i("場地名稱")]),_:1}),t(e(_),null,{default:l(()=>[i("用戶名")]),_:1}),t(e(_))]),_:1})]),_:1}),t(e(re),{class:"text-gray-600"},{default:l(()=>[(o(!0),r(k,null,C(s.filterDatas,n=>(o(),g(e(A),{class:"py-8",key:n.id},{default:l(()=>[t(e(h),{class:"text-purple-primary"},{default:l(()=>[t(e(x),{id:n.id,onClick:u=>s.chagneCheckList(n.id),class:"checkboxList"},null,8,["id","onClick"]),m("label",{for:n.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,be)]),_:2},1024),t(e(h),{class:"text-purple-primary text-center"},{default:l(()=>[i(f(n.report_num),1)]),_:2},1024),t(e(h),null,{default:l(()=>[i(f(n.comment),1)]),_:2},1024),t(e(h),null,{default:l(()=>[i(f(n.venueId.title),1)]),_:2},1024),t(e(h),null,{default:l(()=>[i(f(n.userId1.email),1)]),_:2},1024),t(e(h),{class:"space-x-4 flex"},{default:l(()=>[n.isReview?(o(),g(e(d),{key:1,class:"bg-lime-500 hover:bg-lime-700"},{default:l(()=>[i("已審閱")]),_:1})):(o(),g(e(d),{key:0,class:"bg-gray-200",onClick:u=>s.checkReview(n.id)},{default:l(()=>[i("未審閱")]),_:2},1032,["onClick"])),t(e(Z),null,{default:l(()=>[t(e(ee),null,{default:l(()=>[t(e(d),{variant:"destructive"},{default:l(()=>[$e]),_:1})]),_:1}),t(e(te),null,{default:l(()=>[t(e(le),null,{default:l(()=>[t(e(se),{class:"text-center"},{default:l(()=>[i("是否要警告使用者？")]),_:1}),t(e(_e),null,{default:l(()=>[t(e(U),{modelValue:s.warningReason,"onUpdate:modelValue":c[1]||(c[1]=u=>s.warningReason=u)},{default:l(()=>[t(e(B),null,{default:l(()=>[t(e(V),{placeholder:"警告原因"})]),_:1}),t(e(E),null,{default:l(()=>[t(e(j),null,{default:l(()=>[t(e(T),null,{default:l(()=>[i("警告原因")]),_:1}),t(e(v),{value:"不實評論"},{default:l(()=>[i(" 不實評論 ")]),_:1}),t(e(v),{value:"惡意評論"},{default:l(()=>[i(" 惡意評論 ")]),_:1}),t(e(v),{value:"腥羶色內容"},{default:l(()=>[i(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(e(ae),null,{default:l(()=>[t(e(D),null,{default:l(()=>[t(e(d),{class:"bg-lime-500",onClick:u=>s.deleteComment(n.id)},{default:l(()=>[i("不警告")]),_:2},1032,["onClick"])]),_:2},1024),t(e(D),null,{default:l(()=>[t(e(d),{variant:"destructive",onClick:u=>s.warnUser(n.id,n.userId1)},{default:l(()=>[i("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[b,s.filterDatas.length!==0]]),R(m("div",ye,Se,512),[[b,!s.filterDatas.length]]),m("div",xe,[t(e(G),{total:100,"sibling-count":1,"show-edges":"","default-page":1},{default:l(({page:n})=>[t(e(z),{class:"flex items-center gap-1"},{default:l(({items:u})=>[t(e(P)),t(e(ce)),(o(!0),r(k,null,C(u,(p,I)=>(o(),r(k,null,[p.type==="page"?(o(),g(e(O),{key:I,value:p.value,"as-child":""},{default:l(()=>[t(e(d),{class:"w-10 h-10 p-0",variant:p.value===n?"default":"page"},{default:l(()=>[i(f(p.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),g(e(me),{key:p.type,index:I,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),t(e(oe)),t(e(X))]),_:2},1024)]),_:1})])],64))}});export{Me as default};
