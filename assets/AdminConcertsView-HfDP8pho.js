import{K as J,v as M,M as P,b9 as Z,x as Q,c as h,a as n,b as t,y as e,w as l,F as C,o as u,ab as r,E as a,r as y,e as x,t as m,aB as A,B as f,aC as F,aD as L,aE as D,aF as z,aG as B,aH as N,aI as j,ah as S,ai as q,aj as I,ak as K,am as R,an as E,ao as O,ap as G}from"./index-rJYs93u8.js";import{_ as W}from"./Checkbox-mCv_3zzj.js";import{_ as d}from"./Label-_bAlAMKO.js";import{_ as X,a as H,b as p,c as ee,d as _,e as te}from"./TableRow-14Hesvfw.js";import{_ as $,a as V,b,c as w,d as k,e as U,f as T}from"./SelectLabel-4T9OgB3w.js";import{u as Y}from"./concerts-9A-Df-D8.js";import"./check-X7HJnfaG.js";import"./moment-WSJ9un1t.js";const le={class:"flex gap-6 mb-8 relative"},se={class:"w-[36%] lg:w-[290px] relative lg:pt-6"},ae=n("span",{class:"material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),ie={class:"w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5"},ne={class:"w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5"},oe={class:"lg:pt-5 mt-auto"},de={class:"grid grid-cols-2 place-items-start gap-8"},re={class:"grid gap-4 py-4"},ce={class:"grid grid-cols-4 items-center gap-4"},ue={class:"grid grid-cols-4 items-center gap-4"},me={class:"grid grid-cols-4 items-center gap-4"},fe={class:"grid grid-cols-4 items-center gap-4"},pe=n("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以半形逗號區隔",-1),_e={class:"grid grid-cols-4 items-center gap-4"},ge={class:"grid grid-cols-4 items-center gap-4"},he=n("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以此格式撰寫 19:00",-1),Ce={class:"grid grid-cols-4 items-center gap-4"},ve={class:"grid grid-cols-4 items-center gap-4"},ye=n("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以此格式撰寫 19:00",-1),xe={class:"grid grid-cols-4 items-center gap-4"},$e=n("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以半形逗號區隔",-1),Ve={class:"grid gap-4 py-4"},be={class:"grid grid-cols-4 items-center gap-4"},we={class:"grid grid-cols-4 items-center gap-4"},ke={class:"grid grid-cols-4 items-center gap-4"},Ue=n("hr",null,null,-1),Te={class:"grid grid-cols-4 items-center gap-4"},Ae={class:"grid grid-cols-4 items-center gap-4"},Fe={class:"grid grid-cols-4 items-center gap-4"},Le=n("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以半形逗號區隔購票網站名稱與網站連結",-1),De={class:"lg:pt-5 mt-auto"},ze=n("label",{for:"terms",class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,-1),Be=n("span",{class:"material-symbols-outlined"},"edit",-1),Ne={class:"grid grid-cols-2 place-items-start gap-4"},je={class:"grid gap-4 py-4"},Se={class:"grid grid-cols-4 items-center gap-4"},qe={class:"grid grid-cols-4 items-center gap-4"},Ie={class:"grid grid-cols-4 items-center gap-4"},Ke={class:"grid grid-cols-4 items-center gap-4"},Re={class:"grid grid-cols-4 items-center gap-4"},Ee={class:"grid gap-4 py-4"},Oe={class:"grid grid-cols-4 items-center gap-4"},Ge=n("span",{class:"material-symbols-outlined"},"delete",-1),{toast:He}=J(),Ye={data(){return{timeRanges:["全部","本日","本週","本月"],countryRanges:["全部","台灣","日本","韓國","歐美","其它"],searchText:"",selectVenues:[{id:"1",name:"台北國際會議中心"},{id:"2",name:"Zepp New Taipei"},{id:"3",name:"台北流行音樂中心"},{id:"4",name:"高雄流行音樂中心"},{id:"5",name:"Legacy Taichung"},{id:"6",name:"台北小巨蛋"}],selectArtists:[{id:"1",name:"Tom Jones"},{id:"2",name:"Apink"},{id:"3",name:"FTIsland"},{id:"4",name:"理想混蛋"},{id:"5",name:"溫蒂漫步"},{id:"6",name:"Kodaline"},{id:"7",name:"YOASOBI"},{id:"8",name:"原子邦妮"},{id:"9",name:"HYBS"},{id:"10",name:"宇宙人"},{id:"11",name:"Itzy"},{id:"12",name:"King Gnu"}],tempConcert:{},open:!1,openTwo:!1}},methods:{...M(Y,["getAllAdminConcerts","getFilterAdminConcerts","searchAdminConcerts"]),readFile(v,i){this.tempConcert[`cover_${i}`]=v.target.files[0]},addNewConcert(){var i,o,s,g;this.tempConcert.price_list=(i=this.tempConcert.priceList)==null?void 0:i.split(","),this.tempConcert.holding_time=`${this.tempConcert.holdingDate} ${this.tempConcert.holdingTime}:00`,this.tempConcert.sales_time=`${this.tempConcert.salesDate} ${this.tempConcert.salesTime}:00`,this.tempConcert.organizers=(o=this.tempConcert.organizerList)==null?void 0:o.split(",");const v=["priceList","holdingDate","holdingTime","salesDate","salesTime","organizerList"];for(let c=0;c<v.length;c++)delete this.tempConcert[`${v[c]}`];this.tempConcert.foreign_urls=[];for(let c=0;c<3;c++)this.tempConcert[`foreignUrl${c}`]&&this.tempConcert.foreign_urls.push({name:(s=this.tempConcert[`foreignUrl${c}`])==null?void 0:s.split(",")[0],url:(g=this.tempConcert[`foreignUrl${c}`])==null?void 0:g.split(",")[1]}),delete this.tempConcert[`foreignUrl${c}`];P.post(Z.concerts,{...this.tempConcert}).then(c=>{this.getAllAdminConcerts(),He({title:"演唱會新增成功"}),this.openTwo=!1}).catch(c=>{console.error(c)})}},computed:{...Q(Y,["adminConcerts","pagination"])},mounted(){this.getAllAdminConcerts()}},tt=Object.assign(Ye,{__name:"AdminConcertsView",setup(v){return(i,o)=>(u(),h(C,null,[n("div",le,[n("div",se,[t(e(r),{type:"text",placeholder:"輸入演唱會名稱",modelValue:i.searchText,"onUpdate:modelValue":o[0]||(o[0]=s=>i.searchText=s),onKeyup:o[1]||(o[1]=s=>i.searchAdminConcerts(i.searchText))},null,8,["modelValue"]),ae]),n("div",ie,[t(e(T),null,{default:l(()=>[t(e($),null,{default:l(()=>[t(e(V),{placeholder:"表演者國籍"})]),_:1}),t(e(b),null,{default:l(()=>[t(e(w),null,{default:l(()=>[t(e(k),{class:"tracking-wide"},{default:l(()=>[a("表演者國籍")]),_:1}),(u(!0),h(C,null,y(i.countryRanges,s=>(u(),x(e(U),{key:s,value:s,onClick:g=>i.getFilterAdminConcerts("country",s)},{default:l(()=>[a(m(s),1)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),n("div",ne,[t(e(T),null,{default:l(()=>[t(e($),null,{default:l(()=>[t(e(V),{placeholder:"演唱會時間"})]),_:1}),t(e(b),null,{default:l(()=>[t(e(w),null,{default:l(()=>[t(e(k),null,{default:l(()=>[a("演唱會時間")]),_:1}),(u(!0),h(C,null,y(i.timeRanges,s=>(u(),x(e(U),{key:s,value:s,onClick:g=>i.getFilterAdminConcerts("time",s)},{default:l(()=>[a(m(s),1)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),n("div",oe,[t(e(j),{open:i.openTwo,"onUpdate:open":o[17]||(o[17]=s=>i.openTwo=s)},{default:l(()=>[t(e(A),{"as-child":""},{default:l(()=>[t(e(f),{variant:"outline",class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:l(()=>[a(" 新增演唱會 ")]),_:1})]),_:1}),t(e(F),{class:"sm:max-w-[850px]"},{default:l(()=>[t(e(L),null,{default:l(()=>[t(e(D),{class:"text-center"},{default:l(()=>[a("新增演唱會")]),_:1}),t(e(z),null,{default:l(()=>[a("請新增演唱會")]),_:1})]),_:1}),n("div",de,[n("div",re,[n("div",ce,[t(e(d),{for:"title",class:"text-left"},{default:l(()=>[a(" 演唱會名稱 ")]),_:1}),t(e(r),{type:"text",id:"title",class:"col-span-3",modelValue:i.tempConcert.title,"onUpdate:modelValue":o[2]||(o[2]=s=>i.tempConcert.title=s)},null,8,["modelValue"])]),n("div",ue,[t(e(d),{for:"artist",class:"text-left"},{default:l(()=>[a(" 表演者名稱 ")]),_:1}),t(e(T),{modelValue:i.tempConcert.artist_id,"onUpdate:modelValue":o[3]||(o[3]=s=>i.tempConcert.artist_id=s)},{default:l(()=>[t(e($),{class:"w-full col-span-3"},{default:l(()=>[t(e(V),{placeholder:"表演者"})]),_:1}),t(e(b),null,{default:l(()=>[t(e(w),null,{default:l(()=>[t(e(k),null,{default:l(()=>[a("表演者")]),_:1}),(u(!0),h(C,null,y(i.selectArtists,s=>(u(),x(e(U),{value:s.id,key:s.id},{default:l(()=>[a(m(s.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),n("div",me,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 舉辦場地 ")]),_:1}),t(e(T),{modelValue:i.tempConcert.venue_id,"onUpdate:modelValue":o[4]||(o[4]=s=>i.tempConcert.venue_id=s)},{default:l(()=>[t(e($),{class:"w-full col-span-3"},{default:l(()=>[t(e(V),{placeholder:"場地"})]),_:1}),t(e(b),null,{default:l(()=>[t(e(w),null,{default:l(()=>[t(e(k),null,{default:l(()=>[a("場地")]),_:1}),(u(!0),h(C,null,y(i.selectVenues,s=>(u(),x(e(U),{value:s.id,key:s.id},{default:l(()=>[a(m(s.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),n("div",fe,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 演唱會價格 ")]),_:1}),t(e(r),{type:"text",id:"text",class:"col-span-3",modelValue:i.tempConcert.priceList,"onUpdate:modelValue":o[5]||(o[5]=s=>i.tempConcert.priceList=s)},null,8,["modelValue"])]),pe,n("div",_e,[t(e(d),{for:"date",class:"text-left"},{default:l(()=>[a(" 舉辦日期 ")]),_:1}),t(e(r),{type:"date",id:"date",class:"col-span-3",modelValue:i.tempConcert.holdingDate,"onUpdate:modelValue":o[6]||(o[6]=s=>i.tempConcert.holdingDate=s)},null,8,["modelValue"])]),n("div",ge,[t(e(d),{for:"date",class:"text-left"},{default:l(()=>[a(" 舉辦時間 ")]),_:1}),t(e(r),{type:"text",id:"date",class:"col-span-3",placeholder:"00:00",modelValue:i.tempConcert.holdingTime,"onUpdate:modelValue":o[7]||(o[7]=s=>i.tempConcert.holdingTime=s)},null,8,["modelValue"])]),he,n("div",Ce,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 售票日期 ")]),_:1}),t(e(r),{type:"date",id:"text",class:"col-span-3",modelValue:i.tempConcert.salesDate,"onUpdate:modelValue":o[8]||(o[8]=s=>i.tempConcert.salesDate=s)},null,8,["modelValue"])]),n("div",ve,[t(e(d),{for:"date",class:"text-left"},{default:l(()=>[a(" 售票時間 ")]),_:1}),t(e(r),{type:"text",id:"date",class:"col-span-3",placeholder:"00:00",modelValue:i.tempConcert.salesTime,"onUpdate:modelValue":o[9]||(o[9]=s=>i.tempConcert.salesTime=s)},null,8,["modelValue"])]),ye,n("div",xe,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 主辦單位 ")]),_:1}),t(e(r),{type:"text",id:"text",class:"col-span-3",modelValue:i.tempConcert.organizerList,"onUpdate:modelValue":o[10]||(o[10]=s=>i.tempConcert.organizerList=s)},null,8,["modelValue"])]),$e]),n("div",Ve,[n("div",be,[t(e(d),{for:"pictures-horizontal",class:"text-left"},{default:l(()=>[a(" 圖片 - 橫圖 ")]),_:1}),t(e(r),{type:"file",id:"pictures-horizontal",class:"col-span-3 hover:bg-accent",onChange:o[11]||(o[11]=s=>i.readFile(s,"horizontal"))})]),n("div",we,[t(e(d),{for:"pictures-square",class:"text-left"},{default:l(()=>[a(" 圖片 - 方圖 ")]),_:1}),t(e(r),{type:"file",id:"pictures-square",class:"col-span-3 hover:bg-accent",onChange:o[12]||(o[12]=s=>i.readFile(s,"square"))})]),n("div",ke,[t(e(d),{for:"pictures-straight",class:"text-left"},{default:l(()=>[a(" 圖片 - 直圖 ")]),_:1}),t(e(r),{type:"file",id:"pictures-straight",class:"col-span-3 hover:bg-accent",onChange:o[13]||(o[13]=s=>i.readFile(s,"straight"))})]),Ue,n("div",Te,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 購票網站 1 ")]),_:1}),t(e(r),{type:"text",id:"text",class:"col-span-3",modelValue:i.tempConcert.foreignUrl0,"onUpdate:modelValue":o[14]||(o[14]=s=>i.tempConcert.foreignUrl0=s)},null,8,["modelValue"])]),n("div",Ae,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 購票網站 2 ")]),_:1}),t(e(r),{type:"text",id:"text",class:"col-span-3",modelValue:i.tempConcert.foreignUrl1,"onUpdate:modelValue":o[15]||(o[15]=s=>i.tempConcert.foreignUrl1=s)},null,8,["modelValue"])]),n("div",Fe,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 購票網站 3 ")]),_:1}),t(e(r),{type:"text",id:"text",class:"col-span-3",modelValue:i.tempConcert.foreignUrl2,"onUpdate:modelValue":o[16]||(o[16]=s=>i.tempConcert.foreignUrl2=s)},null,8,["modelValue"])]),Le])]),t(e(B),null,{default:l(()=>[t(e(N),null,{default:l(()=>[t(e(f),{variant:"outline",class:"px-6"},{default:l(()=>[a("取消")]),_:1})]),_:1}),t(e(f),{type:"button",onClick:i.addNewConcert},{default:l(()=>[a("新增")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open"])]),n("div",De,[t(e(G),null,{default:l(()=>[t(e(S),{"as-child":""},{default:l(()=>[t(e(f),{variant:"outline",class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:l(()=>[a(" 刪除資料 ")]),_:1})]),_:1}),t(e(q),null,{default:l(()=>[t(e(I),null,{default:l(()=>[t(e(K),null,{default:l(()=>[a("確定要刪除資料?")]),_:1})]),_:1}),t(e(R),null,{default:l(()=>[t(e(E),{class:"bg-black-60"},{default:l(()=>[a("取消")]),_:1}),t(e(O),{class:"text-black-100 bg-tiffany"},{default:l(()=>[a("確定")]),_:1})]),_:1})]),_:1})]),_:1})])]),t(e(te),{class:"bg-white rounded-lg text-md mb-10"},{default:l(()=>[t(e(X),null,{default:l(()=>[t(e(H),{class:"hover:bg-white text-nowrap",style:{color:"black !important"}},{default:l(()=>[t(e(p)),t(e(p),null,{default:l(()=>[a("表演者名稱")]),_:1}),t(e(p),null,{default:l(()=>[a("演唱會標題")]),_:1}),t(e(p),null,{default:l(()=>[a("演唱會日期")]),_:1}),t(e(p),null,{default:l(()=>[a("演唱會地點")]),_:1}),t(e(p),null,{default:l(()=>[a("收藏數")]),_:1}),t(e(p))]),_:1})]),_:1}),t(e(ee),{class:"text-gray-600"},{default:l(()=>[(u(!0),h(C,null,y(i.adminConcerts,(s,g)=>(u(),x(e(H),{key:s.id},{default:l(()=>[t(e(_),{class:"text-purple-primary"},{default:l(()=>[t(e(W),{id:"terms"}),ze]),_:1}),t(e(_),{class:"text-purple-primary"},{default:l(()=>{var c;return[a(m((c=s.artist)==null?void 0:c.name),1)]}),_:2},1024),t(e(_),null,{default:l(()=>[a(m(s.title),1)]),_:2},1024),t(e(_),null,{default:l(()=>[a(m(s.holding_time),1)]),_:2},1024),t(e(_),null,{default:l(()=>{var c;return[a(m((c=s.venue)==null?void 0:c.title),1)]}),_:2},1024),t(e(_),null,{default:l(()=>[a(m(s.saver_count*7/6*258*(g+4)),1)]),_:2},1024),t(e(_),null,{default:l(()=>[t(e(j),null,{default:l(()=>[t(e(A),{"as-child":""},{default:l(()=>[t(e(f),{variant:"none",class:"hover:text-[#6366f1]"},{default:l(()=>[Be]),_:1})]),_:1}),t(e(F),{class:"sm:max-w-[850px]"},{default:l(()=>[t(e(L),null,{default:l(()=>[t(e(D),{class:"text-center"},{default:l(()=>[a("編輯演唱會")]),_:1}),t(e(z),null,{default:l(()=>[a("請編輯演唱會")]),_:1})]),_:1}),n("div",Ne,[n("div",je,[n("div",Se,[t(e(d),{for:"title",class:"text-left"},{default:l(()=>[a(" 演唱會標題 ")]),_:1}),t(e(r),{type:"text",id:"title",class:"col-span-3"})]),n("div",qe,[t(e(d),{for:"artist",class:"text-left"},{default:l(()=>[a(" 表演者名稱 ")]),_:1}),t(e(r),{id:"artist",class:"col-span-3"})]),n("div",Ie,[t(e(d),{for:"date",class:"text-left"},{default:l(()=>[a(" 演唱會日期 ")]),_:1}),t(e(r),{id:"date",class:"col-span-3"})]),n("div",Ke,[t(e(d),{for:"location",class:"text-left"},{default:l(()=>[a(" 演唱會地點 ")]),_:1}),t(e(r),{id:"location",class:"col-span-3"})]),n("div",Re,[t(e(d),{for:"address",class:"text-left"},{default:l(()=>[a(" 演唱會地址 ")]),_:1}),t(e(r),{id:"address",class:"col-span-3"})])]),n("div",Ee,[n("div",Oe,[t(e(d),{for:"pictures",class:"text-left"},{default:l(()=>[a(" 演唱會圖片 ")]),_:1}),t(e(r),{type:"file",id:"pictures",class:"col-span-3 hover:bg-accent"})])])]),t(e(B),null,{default:l(()=>[t(e(N),null,{default:l(()=>[t(e(f),{variant:"outline",class:"px-6"},{default:l(()=>[a("取消")]),_:1})]),_:1}),t(e(f),{type:"submit"},{default:l(()=>[a("儲存資料")]),_:1})]),_:1})]),_:1})]),_:1}),t(e(G),null,{default:l(()=>[t(e(S),{"as-child":""},{default:l(()=>[t(e(f),{variant:"none",class:"hover:text-[#6366f1]"},{default:l(()=>[Ge]),_:1})]),_:1}),t(e(q),null,{default:l(()=>[t(e(I),null,{default:l(()=>[t(e(K),null,{default:l(()=>[a("確定要刪除該筆資料?")]),_:1})]),_:1}),t(e(R),null,{default:l(()=>[t(e(E),null,{default:l(()=>[a("取消")]),_:1}),t(e(O),null,{default:l(()=>[a("確定")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1024))),128))]),_:1})]),_:1})],64))}});export{tt as default};
