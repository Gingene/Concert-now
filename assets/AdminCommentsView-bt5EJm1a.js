import{I as T,S as j,m as N,i as V,Q as q,c as d,e as m,d as t,w as l,u as e,C as f,R as $,T as R,F as k,o,f as i,g as u,B as C,L as M,N as U,a as g,Y as F}from"./index-dx1mPyCW.js";import{_ as Q,a as b,b as W,c as Y}from"./TableCaption-XQVZXoDf.js";import{u as z,_ as G}from"./Input-7LSRXDAj.js";import{_ as O,a as y,b as _,c as H,e as J,f as K,g as P,d as h,h as X}from"./TableRow-ewTkxG4d.js";import{_ as L,a as S,b as x,c as D,d as A,f as p,e as B}from"./SelectLabel-KD_FlYSn.js";import{_ as Z,a as ee,b as te,c as le,d as se,e as ae,f as ie,g as ne,h as ce,i as oe,j as me,k as ue,l as re,m as de,n as fe,o as _e,p as E}from"./AlertDialogCancel-1Z1qFij9.js";import"./createLucideIcon-u4MERs3Q.js";import"./x-gVcJk1Kx.js";const w=T("commentStore",{state:()=>({commentCheckList:[],selectReview:"未審閱",sortInitial:!0,controlCheckAll:!1,backupDatas:[],comments:[{id:"1",report_num:0,comment:"距離非常近，可以握到手！",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"1@gmail.com"}},{id:"2",report_num:0,comment:"場地佈置太爛的吧，超大布條擋住視線1",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"2@gmail.com"}},{id:"3",report_num:1,comment:"有點遠，建議帶望遠鏡",isReview:!1,venueId:{title:"台北國際會議中心TICC"},userId1:{email:"3@gmail.com"}},{id:"4",report_num:0,comment:"前面有柱子擋住，根本看不太到舞台，傻眼",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"1@gmail.com"}},{id:"5",report_num:0,comment:"接得到舞台丟下來的禮物！超讚的！",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"4@gmail.com"}},{id:"6",report_num:31,comment:"我喜歡吃可麗餅",isReview:!1,venueId:{title:"新北工商展覽中心"},userId1:{email:"5@gmail.com"}},{id:"7",report_num:1,comment:"靠近右邊離音響好近，好大聲，不舒服",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"7@gmail.com"}},{id:"8",report_num:0,comment:"視野很好，而且是有座位的，很不錯",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"8@gmail.com"}},{id:"9",report_num:0,comment:"空間寬敞，也看得很清楚",isReview:!1,venueId:{title:"台北流行音樂中心"},userId1:{email:"9@gmail.com"}},{id:"10",report_num:0,comment:"空間寬敞，站在噴霧旁邊超衰的",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"10@gmail.com"}},{id:"11",report_num:25,comment:"香雞排好香，想ㄘ",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"11@gmail.com"}},{id:"12",report_num:0,comment:"很遠，要帶望遠鏡。而且很偏，看不是很清楚",isReview:!1,venueId:{title:"高雄流行音樂中心"},userId1:{email:"12@gmail.com"}},{id:"13",report_num:0,comment:"場地不大，前面好擠",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"13@gmail.com"}},{id:"14",report_num:0,comment:"視野很不錯，離舞台好近好讚",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"14@gmail.com"}},{id:"15",report_num:0,comment:"好遠，應援布條舞台應該看不太到QQ",isReview:!1,venueId:{title:"Legacy Taichung"},userId1:{email:"15@gmail.com"}}]}),actions:{getComments(a){httpData("get",a).then(s=>{for(const c of s.data)c.id=c.id.toString();this.comments=[...s.data],this.backupDatas=[...this.comments]})},checkReview(a){const s=this.comments.find(c=>c.id===a);s.isReview=!0},chagneCheckList(a){const s=this.comments.find(n=>n.id===a),c=this.commentCheckList.findIndex(n=>n.id===a);c===-1?this.commentCheckList.push(s):this.commentCheckList.splice(c,1)},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.checkReview(s.id)}),a.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0},allCheckList(){if(!this.controlCheckAll)return;const a=document.querySelectorAll('[role="checkbox"]');a.forEach((s,c)=>{if(c!==0){if(s.dataset.state!==a[0].dataset.state)return;s.click()}})},checkSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.checkReview(s.id)}),a.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0},deleteSelectReview(){this.controlCheckAll=!1;const a=document.querySelectorAll('[role="checkbox"]');this.commentCheckList.forEach(s=>{this.deleteComment(s.id)}),a.forEach(s=>{s.dataset.state==="checked"&&s.click()}),this.controlCheckAll=!0,this.alertMessage("success","已刪除")},sortCommentByReportNum(){this.sortInitial=!this.sortInitial,this.sortInitial?this.comments.sort((a,s)=>a.report_num-s.report_num):this.comments.sort((a,s)=>s.report_num-a.report_num)},backupData(){this.backupDatas=[...this.comments]},searchComment:z(function(a){if(this.comments=[...this.backupDatas],a.target.value==="")return;console.log(this.comments);const s=new RegExp(a.target.value,"i"),c=this.comments.filter(r=>s.test(r.venueId.title)),n=this.comments.filter(r=>s.test(r.userId1.email));this.comments=[...c,...n]},500,{maxWait:2e3}),deleteComment(a){console.log(a);const s=this.comments.findIndex(c=>c.id===a);this.comments.splice(s,1),this.alertMessage("success","評論已刪除")},warnUser(a,s){console.log(s),this.deleteComment(a),this.alertMessage("success",`對${s.email}使用者警告已送出`)},alertMessage(a,s){j.fire({icon:a,text:s})}},getters:{filterDatas(){return this.selectReview==="全部"?this.comments:this.selectReview==="未審閱"?this.comments.filter(a=>!a.isReview):this.comments.filter(a=>a.isReview)}}}),he={class:"grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8"},pe={class:"col-span-2 lg:col-span-1"},ve={class:"flex col-span-2"},ke=m("span",{class:"material-symbols-outlined absolute"}," search ",-1),ge={class:"flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between"},Ce={key:0,class:"material-symbols-outlined"},we={key:1,class:"material-symbols-outlined"},Ie=["for"],$e=m("span",{class:"material-symbols-outlined"},"delete",-1),Re={class:"flex justify-center py-12"},be=m("h2",null,"哇! 找不到資料~",-1),ye=[be],Le={class:"flex justify-center"},Se={methods:{...N(w,["getComments","checkReview","chagneCheckList","checkSelectReview","allCheckList","checkSelectReview","deleteSelectReview","sortCommentByReportNum","searchComment","deleteComment","warnUser","alertMessage","backupData"])},computed:{...V(w,["comments","commentCheckList","sortInitial","filterDatas"]),...q(w,["selectReview"])},mounted(){this.backupData()}},Ve=Object.assign(Se,{__name:"AdminCommentsView",setup(a){return(s,c)=>(o(),d(k,null,[m("div",he,[m("div",pe,[t(e(B),{modelValue:s.selectReview,"onUpdate:modelValue":c[0]||(c[0]=n=>s.selectReview=n)},{default:l(()=>[t(e(L),null,{default:l(()=>[t(e(S),{placeholder:"未審閱"})]),_:1}),t(e(x),null,{default:l(()=>[t(e(D),null,{default:l(()=>[t(e(A),null,{default:l(()=>[i("評論審閱")]),_:1}),t(e(p),{value:"未審閱"},{default:l(()=>[i(" 未審閱 ")]),_:1}),t(e(p),{value:"已審閱"},{default:l(()=>[i(" 已審閱 ")]),_:1}),t(e(p),{value:"全部"},{default:l(()=>[i(" 全部 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),m("div",ve,[t(e(G),{type:"text",placeholder:"輸入會場、用戶名稱查詢...",onInput:s.searchComment,class:"bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0"},null,8,["onInput"]),t(e(u),{class:"rounded-l-none"},{default:l(()=>[ke]),_:1})]),m("div",ge,[m("p",null,"列表數量: "+f(s.filterDatas.length),1),m("div",null,[t(e(u),{class:"bg-lime-500 hover:bg-lime-700",onClick:s.checkSelectReview},{default:l(()=>[i("已審閱")]),_:1},8,["onClick"]),t(e(ce),null,{default:l(()=>[t(e(Z),null,{default:l(()=>[t(e(u),{class:"ml-4",variant:"destructive"},{default:l(()=>[i("刪除")]),_:1})]),_:1}),t(e(ee),null,{default:l(()=>[t(e(te),null,{default:l(()=>[t(e(le),null,{default:l(()=>[i("是否刪除以下評論")]),_:1}),t(e(se),null,{default:l(()=>[(o(!0),d(k,null,C(s.commentCheckList,n=>(o(),d("p",{key:n.id},f(n.comment),1))),128))]),_:1})]),_:1}),t(e(ae),null,{default:l(()=>[t(e(ie),null,{default:l(()=>[i("Cancel")]),_:1}),t(e(ne),{onClick:s.deleteSelectReview},{default:l(()=>[i("Continue")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])])]),m("div",null,f(s.commentCheckList),1),$(t(e(J),{class:"bg-white rounded-lg text-md mb-10"},{default:l(()=>[t(e(Q),null,{default:l(()=>[i("評論管理控制面板")]),_:1}),t(e(O),null,{default:l(()=>[t(e(y),{class:"hover:bg-white",style:{color:"black !important"}},{default:l(()=>[t(e(_),null,{default:l(()=>[t(e(b),{onClick:s.allCheckList},null,8,["onClick"])]),_:1}),t(e(_),null,{default:l(()=>[t(e(u),{variant:"ghost",onClick:s.sortCommentByReportNum},{default:l(()=>[i("檢舉人數"),s.sortInitial?(o(),d("span",Ce," stat_1 ")):(o(),d("span",we," stat_minus_1 "))]),_:1},8,["onClick"])]),_:1}),t(e(_),null,{default:l(()=>[i("評論內容")]),_:1}),t(e(_),null,{default:l(()=>[i("場地名稱")]),_:1}),t(e(_),null,{default:l(()=>[i("用戶名")]),_:1}),t(e(_))]),_:1})]),_:1}),t(e(H),{class:"text-gray-600"},{default:l(()=>[(o(!0),d(k,null,C(s.filterDatas,n=>(o(),g(e(y),{class:"py-8",key:n.id},{default:l(()=>[t(e(h),{class:"text-purple-primary"},{default:l(()=>[t(e(b),{id:n.id,onClick:r=>s.chagneCheckList(n.id),class:"checkboxList"},null,8,["id","onClick"]),m("label",{for:n.id,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,8,Ie)]),_:2},1024),t(e(h),{class:"text-purple-primary text-center"},{default:l(()=>[i(f(n.report_num),1)]),_:2},1024),t(e(h),null,{default:l(()=>[i(f(n.comment),1)]),_:2},1024),t(e(h),null,{default:l(()=>[i(f(n.venueId.title),1)]),_:2},1024),t(e(h),null,{default:l(()=>[i(f(n.userId1.email),1)]),_:2},1024),t(e(h),{class:"space-x-4 flex"},{default:l(()=>[n.isReview?(o(),g(e(u),{key:1,class:"bg-lime-500 hover:bg-lime-700"},{default:l(()=>[i("已審閱")]),_:1})):(o(),g(e(u),{key:0,class:"bg-gray-200",onClick:r=>s.checkReview(n.id)},{default:l(()=>[i("未審閱")]),_:2},1032,["onClick"])),t(e(oe),null,{default:l(()=>[t(e(me),null,{default:l(()=>[t(e(u),{variant:"destructive"},{default:l(()=>[$e]),_:1})]),_:1}),t(e(ue),null,{default:l(()=>[t(e(re),null,{default:l(()=>[t(e(de),{class:"text-center"},{default:l(()=>[i("是否要警告使用者？")]),_:1}),t(e(fe),null,{default:l(()=>[t(e(B),null,{default:l(()=>[t(e(L),null,{default:l(()=>[t(e(S),{placeholder:"警告原因"})]),_:1}),t(e(x),null,{default:l(()=>[t(e(D),null,{default:l(()=>[t(e(A),null,{default:l(()=>[i("警告原因")]),_:1}),t(e(p),{value:"不實評論"},{default:l(()=>[i(" 不實評論 ")]),_:1}),t(e(p),{value:"惡意評論"},{default:l(()=>[i(" 惡意評論 ")]),_:1}),t(e(p),{value:"腥羶色內容"},{default:l(()=>[i(" 腥羶色內容 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(e(_e),null,{default:l(()=>[t(e(E),null,{default:l(()=>[t(e(u),{class:"bg-lime-500",onClick:r=>s.deleteComment(n.id)},{default:l(()=>[i("不警告")]),_:2},1032,["onClick"])]),_:2},1024),t(e(E),null,{default:l(()=>[t(e(u),{variant:"destructive",onClick:r=>s.warnUser(n.id,n.userId1)},{default:l(()=>[i("送出警告")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[R,s.filterDatas.length!==0]]),$(m("div",Re,ye,512),[[R,!s.filterDatas.length]]),m("div",Le,[t(e(U),{total:100,"sibling-count":1,"show-edges":"","default-page":1},{default:l(({page:n})=>[t(e(M),{class:"flex items-center gap-1"},{default:l(({items:r})=>[t(e(W)),t(e(K)),(o(!0),d(k,null,C(r,(v,I)=>(o(),d(k,null,[v.type==="page"?(o(),g(e(F),{key:I,value:v.value,"as-child":""},{default:l(()=>[t(e(u),{class:"w-10 h-10 p-0",variant:v.value===n?"default":"page"},{default:l(()=>[i(f(v.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(o(),g(e(X),{key:v.type,index:I,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),t(e(P)),t(e(Y))]),_:2},1024)]),_:1})])],64))}});export{Ve as default};
