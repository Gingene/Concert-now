import{a5 as X,K as Y,x as ee,b4 as w,M as D,N as te,y as le,c as V,a as o,b as t,z as e,w as a,f as c,g as B,F as $,o as p,a4 as m,G as r,r as T,t as C,az as ae,au as se,C as y,aT as ie,av as ne,aw as R,ax as oe,U as v,aJ as _,b5 as h,ay as re,aa as E,ab as N,ac as P,ad as M,ae as J,af as K,ag as G,ah as I,ai as Z,aj as de,ak as ue,al as pe}from"./index-_RvT_BAk.js";import{_ as me}from"./Checkbox-BtMUxAN8.js";import{_ as g}from"./Label-YAIM5sW7.js";import{_ as ce,a as H,b as k,c as fe,d as b,e as ge}from"./TableRow-u4wmdAX_.js";import{_ as L,a as A,b as F,c as q,d as z,e as x,f as O}from"./SelectLabel-nB6RFm8i.js";import{_ as _e}from"./DialogClose-NF51Pzkv.js";import{_ as he,a as Ce,b as ve,c as Ve,d as $e}from"./PaginationPrev-JtXwE4jC.js";import{u as Q}from"./concerts--zJDdTtK.js";import{g as ye,e as f,h as ke}from"./vee-validate.esm-f70EDSay.js";import{A as W}from"./vee-validate-rules.esm-Zc1KTaAK.js";import"./check-nKYEjpTf.js";import"./more-horizontal-mwEclTVT.js";import"./moment-WSJ9un1t.js";const be={class:"flex gap-6 mb-8 relative"},Te={class:"w-[36%] lg:w-[290px] relative lg:pt-6"},Ue=o("span",{class:"material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),we={class:"w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5"},De={class:"w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5"},Le={class:"lg:pt-5 mt-auto"},Ae={class:"grid grid-cols-2 place-items-start gap-8"},Fe={class:"grid gap-4 py-4 w-full"},qe={class:"grid grid-cols-4 items-center gap-x-3"},ze={class:"errorText"},xe={class:"grid grid-cols-4 items-center gap-x-3"},Oe={class:"errorText"},je={class:"grid grid-cols-4 items-center gap-x-3"},Se={class:"errorText"},Be={class:"grid grid-cols-4 items-center gap-x-3"},Re={class:"errorText"},Ee=o("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以半形逗號區隔",-1),Ne={class:"grid grid-cols-4 items-center gap-x-3"},Pe={class:"errorText"},Me={class:"grid grid-cols-4 items-center gap-x-3"},Je={class:"errorText"},Ke=o("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以此格式撰寫 19:00",-1),Ge={class:"grid grid-cols-4 items-center gap-x-3"},Ie={class:"errorText"},Ze={class:"errorText"},He={class:"grid grid-cols-4 items-center gap-x-3"},Qe={class:"errorText"},We=o("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以此格式撰寫 19:00",-1),Xe={class:"grid grid-cols-4 items-center gap-x-3"},Ye={class:"errorText"},et=o("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以半形逗號區隔",-1),tt={class:"grid gap-4 py-4"},lt={class:"grid grid-cols-4 items-center gap-x-3"},at={class:"errorText"},st={class:"grid grid-cols-4 items-center gap-x-3"},it={class:"errorText"},nt={class:"grid grid-cols-4 items-center gap-x-3"},ot={class:"errorText"},rt=o("span",{class:"-mt-3 text-tiny text-black-60"},"※ 圖片尺寸不得大於3MB，僅接受 .jpg/.png/.webp 格式",-1),dt={key:0,class:"-mt-3 text-tiny text-black-60"},ut=o("hr",null,null,-1),pt={class:"grid grid-cols-4 items-center gap-x-3"},mt={class:"errorText"},ct={class:"grid grid-cols-4 items-center gap-x-3"},ft={class:"grid grid-cols-4 items-center gap-x-3"},gt=o("span",{class:"-mt-3 text-tiny text-black-60"},"※ 請以半形逗號區隔購票網站名稱與網站連結",-1),_t={class:"lg:pt-5 mt-auto"},ht=o("span",{class:"material-symbols-outlined"},"edit",-1),Ct=o("span",{class:"material-symbols-outlined"},"delete",-1),{setIsLoading:j}=X(),{toast:U}=Y();Object.keys(W).forEach(u=>{ye(u,W[u])});const vt={data(){return{timeRanges:["全部","本日","本週","本月"],countryRanges:["全部","台灣","日本","韓國","歐美","其它"],searchText:"",venueOptions:[],artistOptions:[],tempConcert:{},concert:{},deleteList:[],open:!1,openAddDialog:!1,dialogTopic:"edit"}},methods:{...ee(Q,["getAllAdminConcerts","getFilterAdminConcerts","searchAdminConcerts"]),readFile(u,l,i){if(i&&i(u),u.target.files[0].size>1048576*3){U({title:"圖片尺寸不得大於 3MB"});return}this.tempConcert[`cover_${l}`]=u.target.files[0]},submitConcert(){var l,i,s,d;if(j(),this.tempConcert.price_list=(l=this.tempConcert.priceList)==null?void 0:l.split(","),this.tempConcert.holding_time=`${this.tempConcert.holdingDate} ${this.tempConcert.holdingTime}:00`,this.tempConcert.sales_time=`${this.tempConcert.salesDate} ${this.tempConcert.salesTime}:00`,this.tempConcert.organizers=(i=this.tempConcert.organizerList)==null?void 0:i.split(","),this.tempConcert.foreignUrl0||this.tempConcert.foreignUrl1||this.tempConcert.foreignUrl2){this.tempConcert.foreign_urls=[];for(let n=0;n<3;n++)this.tempConcert[`foreignUrl${n}`]&&this.tempConcert.foreign_urls.push({name:(s=this.tempConcert[`foreignUrl${n}`])==null?void 0:s.split(",")[0],url:(d=this.tempConcert[`foreignUrl${n}`])==null?void 0:d.split(",")[1]})}let u=w.concerts;this.dialogTopic==="edit"&&(u=`${w.concerts}/${this.tempConcert.id}`,this.tempConcert._method="PUT"),D.post(u,{...this.tempConcert}).then(n=>{this.getFilterAdminConcerts(),U({title:`演唱會${this.dialogTopic==="add"?"新增":"編輯"}成功`}),this.openAddDialog=!1}).catch(n=>{console.error(n),U({title:`演唱會${this.dialogTopic==="add"?"新增":"編輯"}失敗`})}).finally(()=>{j()})},validate:async function(){(await this.$refs.form.validate()).valid&&this.submitConcert()},getVenuesOptions(){D.get(w.venues).then(u=>{this.venueOptions=u.data.data.map(l=>({id:l.id.toString(),title:l.title}))}).catch(u=>{console.error(u)})},getArtistOptions(){D.get(w.artists).then(u=>{this.artistOptions=u.data.data.map(l=>({id:l.id.toString(),name:l.name}))}).catch(u=>{console.error(u)})},openEditDialog(u){this.dialogTopic="edit",D.get(`${te.concerts}/${u}`).then(l=>{const i=l.data.data;this.tempConcert={id:i.id,title:i.title,artist_id:i.artist.id.toString(),venue_id:i.venue.id.toString(),priceList:i.price_list.join(","),holdingDate:i.holding_time.split(" ")[0],holdingTime:i.holding_time.split(" ")[1].slice(0,5),salesDate:i.sales_time.split(" ")[0],salesTime:i.sales_time.split(" ")[1].slice(0,5),organizerList:i.organizers.join(",")},i.foreign_urls.forEach((s,d)=>{this.tempConcert[`foreignUrl${d.toString()}`]=`${s.name},${s.url}`})}).then(()=>{this.openAddDialog=!0}).catch(l=>{console.error(l)})},changeDeleteList(u){this.deleteList.indexOf(u)!==-1?delete this.deleteList[this.deleteList.indexOf(u)]:this.deleteList.push(u)},deleteConcert(){j();const u={ids:[...this.deleteList],_method:"delete"};D.post(`${w.concerts}`,u).then(l=>{this.getAllAdminConcerts(),this.deleteList.length===l.data.data.delete_count?U({title:`已刪除${l.data.data.delete_count}筆演唱會`}):U({title:`已刪除${l.data.data.delete_count}筆演唱會`,description:`有${this.deleteList.length-l.data.data.delete_count}筆資料無法刪除，因該筆資料已有會員收藏或已建立歌單。`}),this.deleteList=[]}).catch(l=>{console.error(l),l.response.data.message==="無法刪除演唱會"&&U({title:"演唱會刪除失敗",description:"因該筆資料已有會員收藏或已建立歌單。"}),this.deleteList=[]}).finally(()=>{j()})}},computed:{...le(Q,["adminConcerts","pagination","pageFactor"]),pagination2(){return this.pagination}},mounted(){this.getAllAdminConcerts(),this.getVenuesOptions(),this.getArtistOptions()}},xt=Object.assign(vt,{__name:"AdminConcertsView",setup(u){return(l,i)=>(p(),V($,null,[o("div",be,[o("div",Te,[t(e(m),{type:"text",placeholder:"輸入演唱會名稱",modelValue:l.searchText,"onUpdate:modelValue":i[0]||(i[0]=s=>l.searchText=s),onKeyup:i[1]||(i[1]=s=>l.searchAdminConcerts(l.searchText))},null,8,["modelValue"]),Ue]),o("div",we,[t(e(O),null,{default:a(()=>[t(e(L),null,{default:a(()=>[t(e(A),{placeholder:"表演者國籍"})]),_:1}),t(e(F),null,{default:a(()=>[t(e(q),null,{default:a(()=>[t(e(z),{class:"tracking-wide"},{default:a(()=>[r("表演者國籍")]),_:1}),(p(!0),V($,null,T(l.countryRanges,s=>(p(),c(e(x),{key:s,value:s,onClick:d=>l.getFilterAdminConcerts("country",s)},{default:a(()=>[r(C(s),1)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),o("div",De,[t(e(O),null,{default:a(()=>[t(e(L),null,{default:a(()=>[t(e(A),{placeholder:"演唱會時間"})]),_:1}),t(e(F),null,{default:a(()=>[t(e(q),null,{default:a(()=>[t(e(z),null,{default:a(()=>[r("演唱會時間")]),_:1}),(p(!0),V($,null,T(l.timeRanges,s=>(p(),c(e(x),{key:s,value:s,onClick:d=>l.getFilterAdminConcerts("time",s)},{default:a(()=>[r(C(s),1)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),o("div",Le,[t(e(ke),{ref:"form"},{default:a(()=>[t(e(ae),{open:l.openAddDialog,"onUpdate:open":i[28]||(i[28]=s=>l.openAddDialog=s)},{default:a(()=>[t(e(se),{"as-child":""},{default:a(()=>[t(e(y),{variant:"outline",class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white",onClick:i[2]||(i[2]=s=>{l.dialogTopic="add",l.tempConcert={}})},{default:a(()=>[r(" 新增演唱會 ")]),_:1})]),_:1}),t(e(ie),{class:"sm:max-w-[850px]"},{default:a(()=>[t(e(ne),null,{default:a(()=>[l.dialogTopic==="edit"?(p(),c(e(R),{key:0,class:"text-center"},{default:a(()=>[r("編輯演唱會")]),_:1})):(p(),c(e(R),{key:1,class:"text-center"},{default:a(()=>[r("新增演唱會")]),_:1})),t(e(oe))]),_:1}),o("div",Ae,[o("div",Fe,[o("div",qe,[t(e(g),{for:"title",class:"text-left"},{default:a(()=>[r(" 演唱會名稱 ")]),_:1}),t(e(f),{name:"title",rules:"required",modelValue:l.tempConcert.title,"onUpdate:modelValue":i[4]||(i[4]=s=>l.tempConcert.title=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"text",class:"col-span-3",modelValue:l.tempConcert.title,"onUpdate:modelValue":i[3]||(i[3]=n=>l.tempConcert.title=n)},d,{value:l.tempConcert.title}),null,16,["modelValue","value"]),_(o("span",ze,"演唱會名稱必填",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),o("div",xe,[t(e(g),{for:"artist",class:"text-left"},{default:a(()=>[r(" 表演者名稱 ")]),_:1}),t(e(f),{name:"artist",rules:"required",modelValue:l.tempConcert.artist_id,"onUpdate:modelValue":i[6]||(i[6]=s=>l.tempConcert.artist_id=s)},{default:a(({errors:s,field:d})=>[t(e(O),v(d,{modelValue:l.tempConcert.artist_id,"onUpdate:modelValue":i[5]||(i[5]=n=>l.tempConcert.artist_id=n)}),{default:a(()=>[t(e(L),{class:"w-full col-span-3"},{default:a(()=>[t(e(A),{placeholder:"表演者"})]),_:1}),t(e(F),null,{default:a(()=>[t(e(q),null,{default:a(()=>[t(e(z),null,{default:a(()=>[r("表演者")]),_:1}),(p(!0),V($,null,T(l.artistOptions,n=>(p(),c(e(x),{value:n.id,key:n.id},{default:a(()=>[r(C(n.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:2},1040,["modelValue"]),_(o("span",Oe,"表演者必填",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),o("div",je,[t(e(g),{for:"location",class:"text-left"},{default:a(()=>[r(" 舉辦場地 ")]),_:1}),t(e(f),{name:"location",rules:"required",modelValue:l.tempConcert.venue_id,"onUpdate:modelValue":i[8]||(i[8]=s=>l.tempConcert.venue_id=s)},{default:a(({errors:s,field:d})=>[t(e(O),v(d,{modelValue:l.tempConcert.venue_id,"onUpdate:modelValue":i[7]||(i[7]=n=>l.tempConcert.venue_id=n)}),{default:a(()=>[t(e(L),{class:"w-full col-span-3"},{default:a(()=>[t(e(A),{placeholder:"場地"})]),_:1}),t(e(F),null,{default:a(()=>[t(e(q),null,{default:a(()=>[t(e(z),null,{default:a(()=>[r("場地")]),_:1}),(p(!0),V($,null,T(l.venueOptions,n=>(p(),c(e(x),{value:n.id,key:n.id},{default:a(()=>[r(C(n.title),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:2},1040,["modelValue"]),_(o("span",Se,"場地必填",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),o("div",Be,[t(e(g),{for:"price",class:"text-left"},{default:a(()=>[r(" 演唱會價格 ")]),_:1}),t(e(f),{name:"price",rules:"required",modelValue:l.tempConcert.priceList,"onUpdate:modelValue":i[10]||(i[10]=s=>l.tempConcert.priceList=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"text",class:"col-span-3"},d,{modelValue:l.tempConcert.priceList,"onUpdate:modelValue":i[9]||(i[9]=n=>l.tempConcert.priceList=n)}),null,16,["modelValue"]),_(o("span",Re,"演唱會價格必填",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),Ee,o("div",Ne,[t(e(g),{for:"holdingDate",class:"text-left"},{default:a(()=>[r(" 舉辦日期 ")]),_:1}),t(e(f),{name:"holdingDate",rules:"required",modelValue:l.tempConcert.holdingDate,"onUpdate:modelValue":i[12]||(i[12]=s=>l.tempConcert.holdingDate=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"date",class:"col-span-3"},d,{modelValue:l.tempConcert.holdingDate,"onUpdate:modelValue":i[11]||(i[11]=n=>l.tempConcert.holdingDate=n)}),null,16,["modelValue"]),_(o("span",Pe,"舉辦日期必填",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),o("div",Me,[t(e(g),{for:"holdingTime",class:"text-left"},{default:a(()=>[r(" 舉辦時間 ")]),_:1}),t(e(f),{name:"holdingTime",rules:"required|length:5",modelValue:l.tempConcert.holdingTime,"onUpdate:modelValue":i[14]||(i[14]=s=>l.tempConcert.holdingTime=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"text",class:"col-span-3",placeholder:"00:00"},d,{modelValue:l.tempConcert.holdingTime,"onUpdate:modelValue":i[13]||(i[13]=n=>l.tempConcert.holdingTime=n)}),null,16,["modelValue"]),_(o("span",Je,"舉辦時間必填，需為5碼",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),Ke,o("div",Ge,[t(e(g),{for:"salesDate",class:"text-left"},{default:a(()=>[r(" 售票日期 ")]),_:1}),t(e(f),{name:"salesDate",rules:"required",modelValue:l.tempConcert.salesDate,"onUpdate:modelValue":i[16]||(i[16]=s=>l.tempConcert.salesDate=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"date",class:"col-span-3"},d,{modelValue:l.tempConcert.salesDate,"onUpdate:modelValue":i[15]||(i[15]=n=>l.tempConcert.salesDate=n)}),null,16,["modelValue"]),_(o("span",Ie,"售票日期必填",512),[[h,s[0]]]),_(o("span",Ze,"售票日期不得於舉辦日期之後",512),[[h,l.tempConcert.salesDate>=l.tempConcert.holdingDate]])]),_:1},8,["modelValue"])]),o("div",He,[t(e(g),{for:"salesTime",class:"text-left"},{default:a(()=>[r(" 售票時間 ")]),_:1}),t(e(f),{name:"salesTime",rules:"required|length:5",modelValue:l.tempConcert.salesTime,"onUpdate:modelValue":i[18]||(i[18]=s=>l.tempConcert.salesTime=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"text",class:"col-span-3",placeholder:"00:00"},d,{modelValue:l.tempConcert.salesTime,"onUpdate:modelValue":i[17]||(i[17]=n=>l.tempConcert.salesTime=n)}),null,16,["modelValue"]),_(o("span",Qe,"售票時間必填，需為5碼",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),We,o("div",Xe,[t(e(g),{for:"organizerList",class:"text-left"},{default:a(()=>[r(" 主辦單位 ")]),_:1}),t(e(f),{name:"organizerList",rules:"required",modelValue:l.tempConcert.organizerList,"onUpdate:modelValue":i[20]||(i[20]=s=>l.tempConcert.organizerList=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"text",class:"col-span-3",placeholder:"00:00"},d,{modelValue:l.tempConcert.organizerList,"onUpdate:modelValue":i[19]||(i[19]=n=>l.tempConcert.organizerList=n)}),null,16,["modelValue"]),_(o("span",Ye,"主辦單位必填",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),et]),o("div",tt,[o("div",lt,[t(e(g),{for:"pictures-horizontal",class:"text-left"},{default:a(()=>[r(" 圖片 - 橫圖 ")]),_:1}),l.dialogTopic==="add"?(p(),c(e(f),{key:0,name:"pictures-horizontal",rules:"required"},{default:a(({errors:s,handleChange:d})=>[t(e(m),{type:"file",id:"pictures-horizontal",class:"col-span-3 hover:bg-accent",accept:"image/png, image/jpeg, image/webp",onChange:n=>l.readFile(n,"horizontal",d)},null,8,["onChange"]),_(o("span",at,"圖片必填",512),[[h,s[0]]])]),_:1})):(p(),c(e(f),{key:1,name:"pictures-horizontal"},{default:a(()=>[t(e(m),{type:"file",id:"pictures-horizontal",class:"col-span-3 hover:bg-accent",onChange:i[21]||(i[21]=s=>l.readFile(s,"horizontal"))})]),_:1}))]),o("div",st,[t(e(g),{for:"pictures-square",class:"text-left"},{default:a(()=>[r(" 圖片 - 方圖 ")]),_:1}),l.dialogTopic==="add"?(p(),c(e(f),{key:0,name:"pictures-square",rules:"required"},{default:a(({errors:s,handleChange:d})=>[t(e(m),{type:"file",id:"pictures-square",class:"col-span-3 hover:bg-accent",accept:"image/png, image/jpeg, image/webp",onChange:n=>l.readFile(n,"square",d)},null,8,["onChange"]),_(o("span",it,"圖片必填",512),[[h,s[0]]])]),_:1})):(p(),c(e(f),{key:1,name:"pictures-square"},{default:a(()=>[t(e(m),{type:"file",id:"pictures-square",class:"col-span-3 hover:bg-accent",onChange:i[22]||(i[22]=s=>l.readFile(s,"square"))})]),_:1}))]),o("div",nt,[t(e(g),{for:"pictures-straight",class:"text-left"},{default:a(()=>[r(" 圖片 - 直圖 ")]),_:1}),l.dialogTopic==="add"?(p(),c(e(f),{key:0,name:"pictures-straight",rules:"required"},{default:a(({errors:s,handleChange:d})=>[t(e(m),{type:"file",id:"pictures-straight",class:"col-span-3 hover:bg-accent",accept:"image/png, image/jpeg, image/webp",onChange:n=>l.readFile(n,"straight",d)},null,8,["onChange"]),_(o("span",ot,"圖片必填",512),[[h,s[0]]])]),_:1})):(p(),c(e(f),{key:1,name:"pictures-straight"},{default:a(()=>[t(e(m),{type:"file",id:"pictures-straight",class:"col-span-3 hover:bg-accent",onChange:i[23]||(i[23]=s=>l.readFile(s,"straight"))})]),_:1}))]),rt,l.dialogTopic==="edit"?(p(),V("span",dt,"※ 如需更換圖片，再上傳檔案")):B("",!0),ut,o("div",pt,[t(e(g),{for:"foreignUrl0",class:"text-left"},{default:a(()=>[r(" 購票網站 1 ")]),_:1}),t(e(f),{name:"foreignUrl0",rules:"required",modelValue:l.tempConcert.foreignUrl0,"onUpdate:modelValue":i[25]||(i[25]=s=>l.tempConcert.foreignUrl0=s)},{default:a(({errors:s,field:d})=>[t(e(m),v({type:"text",class:"col-span-3"},d,{modelValue:l.tempConcert.foreignUrl0,"onUpdate:modelValue":i[24]||(i[24]=n=>l.tempConcert.foreignUrl0=n)}),null,16,["modelValue"]),_(o("span",mt,"必填1個購票網站",512),[[h,s[0]]])]),_:1},8,["modelValue"])]),o("div",ct,[t(e(g),{for:"foreignUrl1",class:"text-left"},{default:a(()=>[r(" 購票網站 2 ")]),_:1}),t(e(m),{type:"text",class:"col-span-3",modelValue:l.tempConcert.foreignUrl1,"onUpdate:modelValue":i[26]||(i[26]=s=>l.tempConcert.foreignUrl1=s)},null,8,["modelValue"])]),o("div",ft,[t(e(g),{for:"foreignUrl2",class:"text-left"},{default:a(()=>[r(" 購票網站 3 ")]),_:1}),t(e(m),{type:"text",class:"col-span-3",modelValue:l.tempConcert.foreignUrl2,"onUpdate:modelValue":i[27]||(i[27]=s=>l.tempConcert.foreignUrl2=s)},null,8,["modelValue"])]),gt])]),t(e(re),null,{default:a(()=>[t(e(_e),null,{default:a(()=>[t(e(y),{variant:"outline",class:"px-6"},{default:a(()=>[r("取消")]),_:1})]),_:1}),t(e(y),{type:"button",onClick:l.validate},{default:a(()=>[r("送出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open"])]),_:1},512)]),o("div",_t,[t(e(Z),null,{default:a(()=>[t(e(E),{"as-child":""},{default:a(()=>[t(e(y),{variant:"outline",class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:a(()=>[r(" 刪除資料 ")]),_:1})]),_:1}),t(e(N),null,{default:a(()=>[t(e(P),null,{default:a(()=>[t(e(M),null,{default:a(()=>[r("確定要刪除"+C(l.deleteList.length)+"資料?",1)]),_:1})]),_:1}),t(e(J)),t(e(K),null,{default:a(()=>[t(e(G),{class:"bg-black-60"},{default:a(()=>[r("取消")]),_:1}),t(e(I),{class:"text-black-100 bg-tiffany",onClick:i[29]||(i[29]=s=>l.deleteConcert())},{default:a(()=>[r("確定")]),_:1})]),_:1})]),_:1})]),_:1})])]),t(e(ge),{class:"bg-white rounded-lg text-md mb-10"},{default:a(()=>[t(e(ce),null,{default:a(()=>[t(e(H),{class:"hover:bg-white text-nowrap",style:{color:"black !important"}},{default:a(()=>[t(e(k)),t(e(k),null,{default:a(()=>[r("表演者名稱")]),_:1}),t(e(k),null,{default:a(()=>[r("演唱會標題")]),_:1}),t(e(k),null,{default:a(()=>[r("演唱會日期")]),_:1}),t(e(k),null,{default:a(()=>[r("演唱會地點")]),_:1}),t(e(k),null,{default:a(()=>[r("收藏數")]),_:1}),t(e(k))]),_:1})]),_:1}),t(e(fe),{class:"text-gray-600"},{default:a(()=>[(p(!0),V($,null,T(l.adminConcerts,(s,d)=>(p(),c(e(H),{key:s.id},{default:a(()=>[t(e(b),{class:"text-purple-primary"},{default:a(()=>[t(e(me),{id:""+s.id,"onUpdate:checked":n=>l.changeDeleteList(s.id)},null,8,["id","onUpdate:checked"])]),_:2},1024),t(e(b),{class:"text-purple-primary"},{default:a(()=>{var n;return[r(C((n=s.artist)==null?void 0:n.name),1)]}),_:2},1024),t(e(b),null,{default:a(()=>[r(C(s.title),1)]),_:2},1024),t(e(b),null,{default:a(()=>[r(C(s.holding_time.slice(0,16)),1)]),_:2},1024),t(e(b),null,{default:a(()=>{var n;return[r(C((n=s.venue)==null?void 0:n.title),1)]}),_:2},1024),t(e(b),null,{default:a(()=>[r(C(s.saver_count*7/6*258*(d+4)),1)]),_:2},1024),t(e(b),null,{default:a(()=>[t(e(y),{variant:"none",class:"hover:text-[#6366f1]",onClick:n=>l.openEditDialog(s.id)},{default:a(()=>[ht]),_:2},1032,["onClick"]),t(e(Z),null,{default:a(()=>[t(e(E),{"as-child":""},{default:a(()=>[t(e(y),{variant:"none",class:"hover:text-[#6366f1]"},{default:a(()=>[Ct]),_:1})]),_:1}),t(e(N),null,{default:a(()=>[t(e(P),null,{default:a(()=>[t(e(M),null,{default:a(()=>[r("確定要刪除該筆資料?")]),_:1}),t(e(J))]),_:1}),t(e(K),null,{default:a(()=>[t(e(G),null,{default:a(()=>[r("取消")]),_:1}),t(e(I),{onClick:n=>{l.changeDeleteList(s.id),l.deleteConcert()}},{default:a(()=>[r("確定")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l.adminConcerts.length?(p(),c(e(pe),{key:0,page:l.pageFactor,total:l.pagination2.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:a(s=>[t(e(ue),{class:"flex items-center justify-center gap-1 pt-16"},{default:a(({items:d})=>[t(e(he),{onClick:i[30]||(i[30]=n=>l.getFilterAdminConcerts("","",1))}),t(e(Ce),{onClick:i[31]||(i[31]=n=>l.getFilterAdminConcerts("","",l.pagination2.current_page-1))}),(p(!0),V($,null,T(d,(n,S)=>(p(),V($,null,[n.type==="page"?(p(),c(e(de),{key:S,value:n.value,"as-child":""},{default:a(()=>[t(e(y),{class:"w-10 h-10 p-0",variant:s===n.value?"default":"outline",onClick:Vt=>l.getFilterAdminConcerts("","",S+1),disabled:l.pageFactor===n.value},{default:a(()=>[r(C(n.value),1)]),_:2},1032,["variant","onClick","disabled"])]),_:2},1032,["value"])):(p(),c(e(ve),{key:n.type,index:S},null,8,["index"]))],64))),256)),t(e(Ve),{onClick:i[32]||(i[32]=n=>l.getFilterAdminConcerts("","",l.pagination2.current_page+1))}),t(e($e),{onClick:i[33]||(i[33]=n=>l.getFilterAdminConcerts("","",l.pagination2.total_pages))})]),_:2},1024)]),_:1},8,["page","total"])):B("",!0)],64))}});export{xt as default};
