import{h as B,c as y,a as t,t as f,b as s,w as l,z as a,o as p,au as m,C as n,G as e,av as h,aw as g,a4 as d,ay as b,az as v,aa as x,ab as $,ac as k,ad as S,af as F,ag as U,ah as j,ai as D,F as C,r as I,f as V}from"./index-WGqYpbGs.js";import{_ as c}from"./DialogClose-gICWO7_n.js";import{_ as w}from"./DialogContent-hmQb4isq.js";import{_ as o}from"./Label-6LeFY91Z.js";import{_ as q,a as E,b as _,c as z,d as r,e as L}from"./TableRow-1Uy6DqIf.js";import{_ as N}from"./Checkbox-1HcBvOyD.js";import"./check-KkemQIJi.js";/**
 * @license lucide-vue-next v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=B("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Z={class:"grid grid-cols-1 lg:grid-cols-4 lg:grid-flow-col gap-4"},M={class:"flex lg:flex-col justify-center lg:justify-start"},O=["src"],A={class:"ms-6 lg:ms-0"},J={class:"font-bold"},T={class:"pb-3 lg:pb-6"},W={class:"grid gap-4 py-4"},G={class:"grid grid-cols-4 items-center gap-4"},H={class:"grid grid-cols-4 items-center gap-4"},K={class:"lg:col-span-3 flex flex-col"},P={class:"flex"},X={class:"grid gap-4 py-4"},Q={class:"grid grid-cols-4 items-center gap-4"},Y={class:"grid grid-cols-4 items-center gap-4"},aa={class:"grid grid-cols-4 items-center gap-4"},sa={class:"grid grid-cols-4 items-center gap-4"},la={class:"border-2 rounded-full w-14 h-14 bg-white p-1"},ea=["src","alt"],ta={class:"ml-4"},ia=t("span",{class:"material-symbols-outlined hover:text-[#D595F1] hover:cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300"}," edit ",-1),na={class:"grid gap-4 pb-4"},da={class:"grid grid-cols-subgrid pb-4 relative"},oa={class:"border-2 rounded-full w-24 h-24 bg-white p-1 col-start-2 relative"},ca=["src","alt"],_a={class:"grid grid-cols-4 items-center gap-4"},ra={class:"grid grid-cols-4 items-center gap-4"},ua=t("span",{class:"material-symbols-outlined hover:text-[#D595F1] transition ease-in-out hover:-translate-y-1 duration-300"}," delete ",-1),fa={data(){return{members:[{id:1,name:"豪豪",email:"b0936486128@gmail.com",avatar:"https://blush.design/api/download?shareUri=aMylVqvsAIdbUCWF&c=Skin_0%7Eedb98a&w=300&h=300&fm=png"},{id:2,name:"銀光菇",email:"ginx2618@gmail.com",avatar:"https://blush.design/api/download?shareUri=Ot4kL7W8vXaZuIln&c=Skin_0%7Effdbb4&w=300&h=300&fm=png"},{id:3,name:"Celine 510",email:"celinewu1010@gmail.com",avatar:"https://blush.design/api/download?shareUri=SrcR-6gR3qxMRiBp&c=Skin_0%7Eedb98a&w=300&h=300&fm=png"},{id:4,name:"Celine",email:"celine41104@gmail.com",avatar:"https://blush.design/api/download?shareUri=r7SbaqZLzqnnhy1b&c=Skin_0%7Effdbb4&w=300&h=300&fm=png"},{id:5,name:"人平",email:"chen.jen.ping@hotmail.com",avatar:"https://blush.design/api/download?shareUri=ZK0hThocjZ27JP1R&c=Skin_0%7Eedb98a&w=300&h=300&fm=png"}],user:{}}},mounted(){this.user=JSON.parse(localStorage.getItem("user"))}},$a=Object.assign(fa,{__name:"AdminSettingsView",setup(pa){return(u,ma)=>(p(),y("div",Z,[t("section",M,[t("img",{class:"border-2 rounded-full w-[130px] h-[140px]",src:u.user.profile_image_url},null,8,O),t("div",A,[t("h2",J,f(u.user.name),1),t("p",T,f(u.user.email),1),s(a(v),null,{default:l(()=>[s(a(m),{"as-child":""},{default:l(()=>[s(a(n),{class:"hover:bg-[#D595F1] text-white transition ease-in-out hover:-translate-y-1 duration-300"},{default:l(()=>[e(" 重設密碼 ")]),_:1})]),_:1}),s(a(w),{class:"sm:max-w-[425px]"},{default:l(()=>[s(a(h),null,{default:l(()=>[s(a(g),{class:"text-center py-4"},{default:l(()=>[e(" 請輸入以下資料 ")]),_:1})]),_:1}),t("div",W,[t("div",G,[s(a(o),{for:"old-password"},{default:l(()=>[e("舊密碼")]),_:1}),s(a(d),{id:"old-password",type:"password",class:"col-span-3"})]),t("div",H,[s(a(o),{for:"new-password"},{default:l(()=>[e("新密碼")]),_:1}),s(a(d),{id:"new-password",type:"password",class:"col-span-3"})])]),s(a(b),null,{default:l(()=>[s(a(c),{"as-child":""},{default:l(()=>[s(a(n),{type:"button",variant:"secondary"},{default:l(()=>[e("放棄變更")]),_:1})]),_:1}),s(a(c),null,{default:l(()=>[s(a(n),{type:"button"},{default:l(()=>[e("確認送出")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),t("main",K,[t("div",P,[s(a(v),null,{default:l(()=>[s(a(m),{"as-child":""},{default:l(()=>[s(a(n),{class:"hover:bg-[#D595F1] text-white transition ease-in-out hover:-translate-y-1 duration-300"},{default:l(()=>[e(" 新增成員 ")]),_:1})]),_:1}),s(a(w),{class:"sm:max-w-[425px]"},{default:l(()=>[s(a(h),null,{default:l(()=>[s(a(g),{class:"text-center py-4"},{default:l(()=>[e(" 新增成員 ")]),_:1})]),_:1}),t("div",X,[t("div",Q,[s(a(o),{for:"name"},{default:l(()=>[e("姓名")]),_:1}),s(a(d),{id:"name",class:"col-span-3"})]),t("div",Y,[s(a(o),{for:"email"},{default:l(()=>[e("信箱")]),_:1}),s(a(d),{id:"email",class:"col-span-3"})]),t("div",aa,[s(a(o),{for:"password"},{default:l(()=>[e("密碼")]),_:1}),s(a(d),{id:"password",type:"password",class:"col-span-3"})]),t("div",sa,[s(a(o),{for:"photo"},{default:l(()=>[e("上傳大頭照")]),_:1}),s(a(d),{id:"photo",type:"file",class:"col-span-3"})])]),s(a(b),null,{default:l(()=>[s(a(c),{"as-child":""},{default:l(()=>[s(a(n),{type:"button",variant:"secondary"},{default:l(()=>[e(" 捨棄編輯 ")]),_:1})]),_:1}),s(a(c),{"as-child":""},{default:l(()=>[s(a(n),{type:"button"},{default:l(()=>[e("確認新增")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(a(D),null,{default:l(()=>[s(a(x),null,{default:l(()=>[s(a(n),{class:"ml-4 hover:bg-[#D595F1] text-white transition ease-in-out hover:-translate-y-1 duration-300"},{default:l(()=>[e(" 刪除成員 ")]),_:1})]),_:1}),s(a($),null,{default:l(()=>[s(a(k),null,{default:l(()=>[s(a(S),null,{default:l(()=>[e("確定要刪除成員嗎？")]),_:1})]),_:1}),s(a(F),null,{default:l(()=>[s(a(U),{class:"bg-black-60"},{default:l(()=>[e("取消")]),_:1}),s(a(j),{class:"text-black-100 bg-tiffany"},{default:l(()=>[e("確定")]),_:1})]),_:1})]),_:1})]),_:1})]),s(a(L),{class:"my-6 bg-white text-base text-gray-800 rounded-lg"},{default:l(()=>[s(a(q),null,{default:l(()=>[s(a(E),{class:"hover:bg-inherit"},{default:l(()=>[s(a(_),{class:"w-[100px]"}),s(a(_),null,{default:l(()=>[e("姓名")]),_:1}),s(a(_),null,{default:l(()=>[e("信箱")]),_:1}),s(a(_)),s(a(_))]),_:1})]),_:1}),s(a(z),null,{default:l(()=>[(p(!0),y(C,null,I(u.members,i=>(p(),V(a(E),{key:i.id},{default:l(()=>[s(a(r),null,{default:l(()=>[s(a(N),{class:"ml-3"})]),_:1}),s(a(r),{class:"flex items-center"},{default:l(()=>[t("span",la,[t("img",{src:i.avatar,alt:i.name},null,8,ea)]),t("span",ta,f(i.name),1)]),_:2},1024),s(a(r),null,{default:l(()=>[e(f(i.email),1)]),_:2},1024),s(a(r),null,{default:l(()=>[s(a(v),null,{default:l(()=>[s(a(m),{"as-child":""},{default:l(()=>[ia]),_:1}),s(a(w),{class:"sm:max-w-[425px]"},{default:l(()=>[s(a(h),null,{default:l(()=>[s(a(g),{class:"text-center py-4"},{default:l(()=>[e(" 編輯成員 ")]),_:1})]),_:1}),t("div",na,[t("div",da,[t("span",oa,[t("img",{src:i.avatar,alt:i.name,class:"w-20"},null,8,ca),s(a(R),{class:"p-2 absolute -bottom-5 -right-3 opacity-30 bg-black rounded-full",size:"40","stroke-width":"2",color:"#fff"})]),s(a(d),{type:"file",class:"absolute w-24 h-24 col-start-2 opacity-0 hover:cursor-pointer"})]),t("div",_a,[s(a(o),{for:"name"},{default:l(()=>[e("姓名")]),_:1}),s(a(d),{id:"name",class:"col-span-3",value:i.name},null,8,["value"])]),t("div",ra,[s(a(o),{for:"email"},{default:l(()=>[e("信箱")]),_:1}),s(a(d),{id:"email",class:"col-span-3",value:i.email},null,8,["value"])])]),s(a(b),null,{default:l(()=>[s(a(c),{"as-child":""},{default:l(()=>[s(a(n),{type:"button",variant:"secondary"},{default:l(()=>[e(" 捨棄編輯 ")]),_:1})]),_:1}),s(a(c),{"as-child":""},{default:l(()=>[s(a(n),{type:"button"},{default:l(()=>[e(" 確認修改 ")]),_:1})]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024),s(a(r),null,{default:l(()=>[s(a(D),null,{default:l(()=>[s(a(x),null,{default:l(()=>[ua]),_:1}),s(a($),null,{default:l(()=>[s(a(k),null,{default:l(()=>[s(a(S),null,{default:l(()=>[e("確定要刪除該成員嗎？")]),_:1})]),_:1}),s(a(F),null,{default:l(()=>[s(a(U),null,{default:l(()=>[e("取消")]),_:1}),s(a(j),null,{default:l(()=>[e("確定刪除")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1024))),128))]),_:1})]),_:1})])]))}});export{$a as default};
