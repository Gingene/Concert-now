import{M as $,a4 as v,c as u,a as o,b as s,y as t,w as l,aI as g,aZ as w,F as p,o as c,a1 as x,E as n,r as b,e as y,t as _}from"./index-EVngkGWf.js";import{_ as V,a as E,b as S,c as I,d as k,e as M,f as T}from"./SelectLabel-Vk35q0lS.js";import{_ as P,a as A,b as m,c as B,d as f,e as F}from"./TableRow-imt5IqEW.js";import"./check-VGhKudaz.js";var R={VITE_APP_SERVICE_API:"https://concert-now.dewed.one",VITE_SITE_KEY:"0x4AAAAAAAVmpuOyGsYwDpXZ",BASE_URL:"/Concert-now/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SERVICE_API:D}=R,j=async i=>{const a=`${D}/api/admin/users?page=${i}`;try{return await $.get(a)}catch(r){throw console.error("[GetAdminMembers Failed]",r),new Error("error")}},C=async(i,a)=>{const r=`${D}/api/admin/users?q=${i}&status=&page=${a}`;try{return await $.get(r)}catch(d){throw console.error("[GetAdminMembers Failed]",d),new Error("error")}},O={class:"flex gap-6 mb-8 relative"},G={class:"w-[36%] lg:w-[290px] relative lg:pt-6"},K=o("span",{class:"material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),N={class:"w-[20%] lg:w-[250px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5"},U=o("label",{for:"status",class:"pb-2 font-semibold lg:w-[50%]"}," 會員狀態 ",-1),L={class:"flex items-center"},Y=["src"],Z={class:"ml-3"},q={class:"flex items-center"},z={key:0,class:"material-symbols-outlined mr-1"},X={key:1,class:"material-symbols-outlined mr-1 text-violet-800"},H={class:"flex justify-center py-12"},J=o("h2",null,"哇! 找不到資料~",-1),Q=[J],W={data(){return{searchText:"",selectStatus:"",selectTime:"",usersData:null,allstatus:[{id:1,type:"全部"},{id:2,type:"啟用中"},{id:3,type:"停權中"}],jointimes:[{id:1,time:"2023/01-2023/02"},{id:2,time:"2023/02-2023/03"},{id:3,time:"2023/03-2023/04"},{id:4,time:"2023/04-2023/05"},{id:5,time:"2023/05-2023/06"}]}},computed:{filteredData(){var a;const i=this.selectStatus;return i==="全部"?this.usersData:(a=this.usersData)==null?void 0:a.filter(r=>{let d=!0;return i&&i.length>0&&(d=r.status===i),d})}},methods:{async getAdminMembersData(i=1){try{const a=await j(i);this.usersData=a.data.data}catch(a){console.error(a)}},searchInput:v(async function(i=1){try{const a=await C(this.searchText,this.selectStatus,i);this.usersData=a.data.data}catch(a){console.error(a)}},300)},mounted(){this.getAdminMembersData()}},le=Object.assign(W,{__name:"AdminMembersView",setup(i){return(a,r)=>{var d,h;return c(),u(p,null,[o("div",null,[o("div",O,[o("div",G,[s(t(x),{type:"text",placeholder:"請輸入信箱查詢",modelValue:a.searchText,"onUpdate:modelValue":r[0]||(r[0]=e=>a.searchText=e),modelModifiers:{trim:!0},onKeyup:a.searchInput},null,8,["modelValue","onKeyup"]),K]),o("div",N,[s(t(T),{modelValue:a.selectStatus,"onUpdate:modelValue":r[1]||(r[1]=e=>a.selectStatus=e)},{default:l(()=>[U,s(t(V),null,{default:l(()=>[s(t(E),{placeholder:"全部"})]),_:1}),s(t(S),null,{default:l(()=>[s(t(I),null,{default:l(()=>[s(t(k),{class:"tracking-wide"},{default:l(()=>[n("會員狀態")]),_:1}),(c(!0),u(p,null,b(a.allstatus,e=>(c(),y(t(M),{key:e.id,value:e.type},{default:l(()=>[n(_(e.type),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),g(s(t(F),{class:"w-[700px] lg:w-full overflow-x-auto bg-white rounded-lg text-md mb-10"},{default:l(()=>[s(t(P),null,{default:l(()=>[s(t(A),null,{default:l(()=>[s(t(m),{class:"font-semibold w-[200px]"},{default:l(()=>[n(" 名稱 ")]),_:1}),s(t(m),{class:"font-semibold"},{default:l(()=>[n("信箱")]),_:1}),s(t(m),{class:"font-semibold pl-6"},{default:l(()=>[n("會員狀態")]),_:1}),s(t(m),{class:"font-semibold"},{default:l(()=>[n(" 警告次數 ")]),_:1}),s(t(m),{class:"font-semibold"},{default:l(()=>[n(" 會員編號 ")]),_:1}),s(t(m),{class:"font-semibold"},{default:l(()=>[n(" 加入會員日期 ")]),_:1})]),_:1})]),_:1}),s(t(B),null,{default:l(()=>[(c(!0),u(p,null,b(a.filteredData,e=>(c(),y(t(A),{key:e.id},{default:l(()=>[s(t(f),{class:"font-medium w-[200px]"},{default:l(()=>[o("div",L,[o("img",{class:"size-[56px] border-2 rounded-full bg-white p-1",src:e==null?void 0:e.profile_image_url,alt:"使用者大頭貼"},null,8,Y),o("p",Z,_(e==null?void 0:e.name),1)])]),_:2},1024),s(t(f),null,{default:l(()=>[n(_(e==null?void 0:e.email),1)]),_:2},1024),s(t(f),null,{default:l(()=>[o("div",q,[e.status==="啟用中"?(c(),u("span",z," check_circle ")):(c(),u("span",X," warning ")),n(" "+_(e.status),1)])]),_:2},1024),s(t(f),{class:"pl-10"},{default:l(()=>[n(_(e==null?void 0:e.warning_list.length),1)]),_:2},1024),s(t(f),{class:"pl-10"},{default:l(()=>[n(_(e==null?void 0:e.id),1)]),_:2},1024),s(t(f),null,{default:l(()=>[n(_(e==null?void 0:e.created_at),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[w,((d=a.filteredData)==null?void 0:d.length)!==0]]),g(o("div",H,Q,512),[[w,!((h=a.filteredData)!=null&&h.length)]])],64)}}});export{le as default};