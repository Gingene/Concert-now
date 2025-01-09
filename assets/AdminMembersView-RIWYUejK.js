import{x as y,y as x,aS as M,c,a as o,b as t,z as e,w as l,f,g as C,F as p,a8 as b,o as i,a4 as A,G as n,r as h,t as m,aj as V,C as S,ak as T,al as j}from"./index-LBBJRyy4.js";import{_ as B}from"./ScrollArea-Q8KPzvoc.js";import{_ as N,a as U,b as z,c as F,d as P,e as q,f as D}from"./SelectLabel-JAFaY8J_.js";import{_ as E,a as v,b as u,c as G,d as r,e as J}from"./TableRow-BNWLNBwi.js";import{_ as L}from"./TableCaption-bqK5SnSO.js";import{_ as O,a as W,b as Z,c as H,d as I}from"./PaginationPrev-aqqHTmyy.js";import"./check-PgXZKuJj.js";import"./more-horizontal-KASLBe8b.js";const K={class:"flex flex-wrap gap-6 mt-[115px] mb-8 relative"},Q={class:"w-full xs:w-[290px] relative"},R=o("span",{class:"material-symbols-outlined absolute top-1 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),X={class:"w-full xs:w-[250px]"},Y={class:"flex items-center mr-2"},ee=["src"],ae={class:"ml-3"},te={class:"flex items-center"},le={key:0,class:"material-symbols-outlined mr-1"},se={key:1,class:"material-symbols-outlined mr-1 text-violet-800"},ne={key:2,class:"flex justify-center py-12"},ie=o("h2",null,"哇! 找不到資料~",-1),de=[ie],oe={methods:{...y(b,["getAdminMembers"])},computed:{...x(b,["adminMembers","allstatus"]),...M(b,["searchText","selectStatus","page","pageTotal"])},watch:{searchText:"getAdminMembers",selectStatus:"getAdminMembers"},mounted(){this.getAdminMembers()},unmounted(){this.selectStatus="",this.searchText=""}},ke=Object.assign(oe,{__name:"AdminMembersView",setup(me){return(s,_)=>{var k,$;return i(),c(p,null,[o("div",null,[o("div",K,[o("div",Q,[t(e(A),{type:"text",placeholder:"請輸入信箱查詢",modelValue:s.searchText,"onUpdate:modelValue":_[0]||(_[0]=a=>s.searchText=a)},null,8,["modelValue"]),R]),o("div",X,[t(e(D),{modelValue:s.selectStatus,"onUpdate:modelValue":_[1]||(_[1]=a=>s.selectStatus=a)},{default:l(()=>[t(e(N),null,{default:l(()=>[t(e(U),{placeholder:"選擇會員狀態"})]),_:1}),t(e(z),null,{default:l(()=>[t(e(F),null,{default:l(()=>[t(e(P),{class:"tracking-wide"},{default:l(()=>[n("會員狀態")]),_:1}),(i(!0),c(p,null,h(s.allstatus,(a,g)=>(i(),f(e(q),{key:g,value:a},{default:l(()=>[n(m(a),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),t(e(L),{class:"block py-2 text-start"},{default:l(()=>[n(" 搜尋結果："+m(s.pageTotal)+" 筆資料 ",1)]),_:1}),(k=s.adminMembers)!=null&&k.length?(i(),f(e(B),{key:0,class:"h-[380px]"},{default:l(()=>[t(e(J),{class:"bg-white rounded-lg text-md mb-10 whitespace-nowrap"},{default:l(()=>[t(e(E),{class:"sticky top-0"},{default:l(()=>[t(e(v),null,{default:l(()=>[t(e(u),{class:"font-semibold bg-slate-600 text-white w-[200px]"},{default:l(()=>[n(" 名稱 ")]),_:1}),t(e(u),{class:"font-semibold bg-slate-600 text-white"},{default:l(()=>[n("信箱")]),_:1}),t(e(u),{class:"font-semibold bg-slate-600 text-white pl-6"},{default:l(()=>[n("會員狀態")]),_:1}),t(e(u),{class:"font-semibold bg-slate-600 text-white"},{default:l(()=>[n(" 警告次數 ")]),_:1}),t(e(u),{class:"font-semibold bg-slate-600 text-white"},{default:l(()=>[n(" 會員編號 ")]),_:1}),t(e(u),{class:"font-semibold bg-slate-600 text-white"},{default:l(()=>[n(" 加入會員日期 ")]),_:1})]),_:1})]),_:1}),t(e(G),null,{default:l(()=>[(i(!0),c(p,null,h(s.adminMembers,a=>(i(),f(e(v),{key:a.id},{default:l(()=>[t(e(r),{class:"font-medium w-[200px]"},{default:l(()=>[o("div",Y,[o("img",{class:"size-[56px] border-2 rounded-full bg-white p-1",src:a==null?void 0:a.profile_image_url,alt:"使用者大頭貼"},null,8,ee),o("p",ae,m(a==null?void 0:a.name),1)])]),_:2},1024),t(e(r),null,{default:l(()=>[n(m(a==null?void 0:a.email),1)]),_:2},1024),t(e(r),null,{default:l(()=>[o("div",te,[a.status==="啟用中"?(i(),c("span",le," check_circle ")):(i(),c("span",se," warning ")),n(" "+m(a.status),1)])]),_:2},1024),t(e(r),{class:"pl-10"},{default:l(()=>[n(m(a==null?void 0:a.warning_list.length),1)]),_:2},1024),t(e(r),{class:"pl-10"},{default:l(()=>[n(m(a==null?void 0:a.id),1)]),_:2},1024),t(e(r),null,{default:l(()=>[n(m(a==null?void 0:a.created_at),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):C("",!0),($=s.adminMembers)!=null&&$.length?(i(),f(e(j),{key:1,page:s.page,itemsPerPage:15,total:s.pageTotal,"sibling-count":1,"show-edges":"","default-page":1,disabled:s.pageTotal<=15,class:"flex justify-center mt-10"},{default:l(({page:a})=>[t(e(T),{class:"flex items-center gap-1"},{default:l(({items:g})=>[t(e(O),{onClick:_[2]||(_[2]=d=>s.getAdminMembers("page",1))}),t(e(W),{onClick:d=>s.getAdminMembers("page",a-1)},null,8,["onClick"]),(i(!0),c(p,null,h(g,(d,w)=>(i(),c(p,null,[d.type==="page"?(i(),f(e(V),{key:w,value:d.value,"as-child":""},{default:l(()=>[t(e(S),{class:"w-10 h-10 p-0",variant:d.value===a?"default":"outline",onClick:ce=>s.getAdminMembers("page",d.value)},{default:l(()=>[n(m(d.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(i(),f(e(Z),{key:d.type,index:w},null,8,["index"]))],64))),256)),t(e(H),{onClick:d=>s.getAdminMembers("page",a+1)},null,8,["onClick"]),t(e(I),{onClick:d=>s.getAdminMembers("page",g.length)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["page","total","disabled"])):(i(),c("div",ne,de))],64)}}});export{ke as default};