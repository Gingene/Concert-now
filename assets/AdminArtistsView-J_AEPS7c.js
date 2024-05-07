import{M as $,a5 as W,K as Y,c as g,a as l,b as s,z as e,w as i,aJ as Z,b5 as H,F as w,a7 as Q,am as X,o as u,a4 as ee,G as d,r as V,f as h,t as _,az as te,au as se,C as y,av as le,aw as M,ax as ae,U as T,g as k,ay as oe,aa as C,ab as q,ac as F,ad as z,ae as I,af as O,ag as B,ah as P,ai as D,ak as ie,aj as re,al as ne}from"./index-Z0lY0pmQ.js";import{_ as de}from"./Checkbox-D00Q53WW.js";import{_ as ue,a as j,b as v,c as me,d as x,e as ce}from"./TableRow--f2G0a6o.js";import{_ as N,a as E,b as S,c as R,d as L,e as G,f as J}from"./SelectLabel-8QEMeGKc.js";import{_ as pe,a as fe,b as he,c as ge,d as _e}from"./PaginationPrev--dSUMzgg.js";import{_ as ye}from"./DialogClose-cqj3KO-d.js";import{_ as we}from"./DialogContent-_NtRaxD5.js";import{g as ve,j as xe,e as m,E as f,h as Ae}from"./vee-validate.esm-YUx3g_vp.js";import{A as K}from"./vee-validate-rules.esm-Z6Kmo-Wn.js";import{l as be,s as ke}from"./vee-validate-i18n.esm-ZqaKjB89.js";import"./check-i1SmmkvQ.js";import"./more-horizontal-d5i05Gn3.js";const Ve=async r=>{const t=`/admin/artists?page=${r}`;try{return await $.get(t)}catch(a){throw console.error("[GetAdminArtists Failed]",a),new Error("error")}},$e=async(r,t)=>{const a=`/admin/artists?q=${r}&country=&page=${t}`;try{return await $.get(a)}catch(n){throw console.error("[FilterAdminArtists Failed]",n),new Error("error")}},Ue="zh_TW",Me={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},Te={code:Ue,messages:Me},Ce={class:"flex flex-wrap gap-x-5 gap-y-6 md:gap-6 mb-8 relative"},qe={class:"w-full xs:w-[290px] relative lg:pt-6"},Fe=l("span",{class:"material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),ze={class:"w-full xs:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5"},Ie={class:"flex flex-row gap-6"},Oe={class:"lg:pt-5 mt-auto"},Be={class:"grid gap-4 py-4 overflow-y-auto px-6"},Pe={class:"grid grid-cols-2 gap-9 px-2 h-[50dvh]"},De={class:"flex flex-col space-y-5 py-4"},je={class:"flex items-center gap-5 whitespace-nowrap"},Ne=l("label",{for:"name",class:"text-left mr-[52px]"},"名稱",-1),Ee={class:"flex items-center gap-5 whitespace-nowrap"},Se=l("label",{for:"country",class:"text-left mr-[52px]"}," 國籍 ",-1),Re={class:"flex items-start gap-5 whitespace-nowrap"},Le=l("label",{for:"description",class:"text-left mr-[52px]"}," 介紹 ",-1),Ge={class:"flex items-center gap-5 whitespace-nowrap"},Je=l("label",{for:"hornorOne",class:"text-left mr-2"}," 榮譽獎項 1 ",-1),Ke=l("p",{class:"mt-1 text-tiny text-black-60"},"※範例: 2010 Mnet 亞洲音樂 (MAMA) 最佳樂隊獎",-1),We={class:"flex items-center gap-5 whitespace-nowrap"},Ye=l("label",{for:"hornorTwo",class:"text-left mr-2"}," 榮譽獎項 2 ",-1),Ze={class:"flex items-center gap-5 whitespace-nowrap"},He=l("label",{for:"hornorThree",class:"text-left mr-2"}," 榮譽獎項 3 ",-1),Qe={class:"flex items-center gap-5 whitespace-nowrap"},Xe=l("label",{for:"hornorFour",class:"text-left mr-2"}," 榮譽獎項 4 ",-1),et={class:"flex items-center gap-5 whitespace-nowrap"},tt=l("label",{for:"songOne",class:"text-left mr-6"}," 主打歌 1 ",-1),st={class:"flex items-center gap-5 whitespace-nowrap"},lt=l("label",{for:"songTwo",class:"text-left mr-6"}," 主打歌 2 ",-1),at={class:"flex items-center gap-5 whitespace-nowrap"},ot=l("label",{for:"songThree",class:"text-left mr-6"}," 主打歌 3 ",-1),it={class:"flex items-center gap-5 whitespace-nowrap"},rt=l("label",{for:"songFour",class:"text-left mr-6"}," 主打歌 4 ",-1),nt={class:"flex items-center gap-5 whitespace-nowrap"},dt=l("label",{for:"songFive",class:"text-left mr-6"},[l("span",null,"主打歌 5")],-1),ut={class:"flex flex-col space-y-5 py-4"},mt={class:"flex items-center gap-5 whitespace-nowrap"},ct=l("label",{for:"keywordOne",class:"text-left mr-6"}," 關鍵字 1 ",-1),pt=l("p",{class:"mt-1 text-tiny text-black-60"},"※範例: YOASOBI，關鍵字: 日本、J-POP、Vocaloid",-1),ft={class:"flex items-center gap-5 whitespace-nowrap"},ht=l("label",{for:"keywordTwo",class:"text-left mr-6"},[l("span",null,"關鍵字 2")],-1),gt={class:"flex items-center gap-5 whitespace-nowrap"},_t=l("label",{for:"keywordTwo",class:"text-left mr-6"},[l("span",null,"關鍵字 3")],-1),yt={class:"flex items-center gap-5 whitespace-nowrap"},wt=l("label",{for:"imgTwo",class:"text-left mr-4"}," 圖片-橫圖 ",-1),vt={key:1,class:"pt-3"},xt=l("p",{class:"mb-2"},"預覽橫圖",-1),At={class:"w-auto w-h-[200px] mb-5"},bt=["src"],kt={class:"flex items-center gap-5 whitespace-nowrap"},Vt=l("label",{for:"imgTwo",class:"text-left mr-4"}," 圖片-方圖 ",-1),$t={key:1,class:"pt-3"},Ut=l("p",{class:"mb-2"},"預覽方圖",-1),Mt={class:"w-[200px] h-[200px]"},Tt=["src"],Ct={class:"lg:pt-5 mt-auto"},qt=l("label",{for:"terms",class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,-1),Ft=l("span",{class:"material-symbols-outlined"},"edit",-1),zt=l("span",{class:"material-symbols-outlined"}," delete ",-1),It={class:"flex justify-center"},Ot={class:"flex justify-center py-12"},Bt=l("h2",null,"哇! 找不到資料~",-1),Pt=[Bt],{setIsLoading:A}=W(),{toast:Dt}=Y();Object.keys(K).forEach(r=>{ve(r,K[r])});xe({generateMessage:be({zh_TW:Te}),validateOnInput:!0});ke("zh_TW");const jt={data(){return{searchText:"",selectCountry:"",searchPage:1,selectIdBoolean:[],checkedMap:{},pagination:{},adminArtists:[],imgUrls:[],isNew:!1,dialogOpen:!1,changeId:null,countryRanges:[{id:1,type:"全部國籍"},{id:2,type:"台灣"},{id:3,type:"日本"},{id:4,type:"韓國"},{id:5,type:"歐美"},{id:6,type:"其它"}],countryTypes:[{id:1,type:"台灣"},{id:2,type:"日本"},{id:3,type:"韓國"},{id:4,type:"歐美"},{id:5,type:"其它"}],tempArtist:{name:"",country:"",description:"",honors:[],songs:[],keywords:[],coverUrl:{horizontal:null,square:null}}}},computed:{filteredData(){var t;const r=this.selectCountry;return r==="全部國籍"?this.adminArtists:(t=this.adminArtists)==null?void 0:t.filter(a=>{let n=!0;return r!=null&&r.length>0&&(n=a.country===r),n})}},methods:{searchInput:Q(async function(r=1){this.searchPage=r;try{const t=await $e(this.searchText,r);this.adminArtists=t.data.data,this.pagination=t.data.pagination,t.data.data.forEach(a=>{this.checkedMap[`${a.id}`]=!1})}catch(t){console.error(t)}},300),FilterByPage(r){A(),this.searchInput(r),setTimeout(()=>{A()},500)},async getAdminArtistData(r=1){this.searchPage=r,A(!0);try{const t=await Ve(r);this.adminArtists=t.data.data,this.pagination=t.data.pagination,t.data.data.forEach(a=>{this.checkedMap[`${a.id}`]=!1})}catch(t){console.error(t)}finally{A(!1)}},async getOnSubmitData(r,t){A();try{const n=(await $.post(r,t)).data.message;this.getAdminArtistData(),this.toastMsg(n),this.dialogOpen=!1}catch(a){console.error(a)}finally{A()}},onFileUpload(r,t,a){const n=r.target.files[0],o=["image/jpeg","image/png","image/webp"];if(!n){this.toastMsg("請選擇圖片");return}if(!o.includes(n.type)){this.toastMsg("只能上傳 PNG 或 JPEG 格式的圖片");return}const c=3*1024*1024;if(n.size>c){this.toastMsg("圖片大小不能超過3MB");return}this.tempArtist.coverUrl[`${a}`]=n,this.imgUrls[t]=URL.createObjectURL(n)},async openDialog(r,t){if(r==="新增")this.isNew=!0,this.imgUrls=[],this.tempArtist={name:"",country:"",description:"",honors:[],songs:[],keywords:[],coverUrl:{horizontal:null,square:null}};else{this.resetTempArtist(),this.imgUrls=[],this.isNew=!1,this.dialogOpen=!0;try{const n=(await X(t)).data.data;this.changeId=n.id,this.tempArtist={name:n.name,country:n.country,description:n.description,honors:n.honors,songs:n.popular_songs,keywords:n.keywords,coverUrl:{horizontal:null,square:null}},this.imgUrls[0]=n.cover_urls.horizontal,this.imgUrls[1]=n.cover_urls.square}catch(a){console.error(a)}}},async onSubmit(){var p,U;const r=await this.$refs.form.validate();if(this.isNew&&!r.valid){this.toastMsg("請填寫必填欄位");return}const t=this.tempArtist.honors.filter(b=>b.trim().length>0),a=this.tempArtist.songs.filter(b=>b.trim().length>0),n=this.tempArtist.keywords.filter(b=>b.trim().length>0),o={name:this.tempArtist.name,country:this.tempArtist.country,description:this.tempArtist.description,honors:t,popular_songs:a,keywords:n};(p=this.tempArtist.coverUrl)!=null&&p.horizontal&&(o.cover_horizontal=this.tempArtist.coverUrl.horizontal),(U=this.tempArtist.coverUrl)!=null&&U.square&&(o.cover_square=this.tempArtist.coverUrl.square);let c="/admin/artists";this.isNew||(c=`/admin/artists/${this.changeId}`,o._method="PUT"),this.getOnSubmitData(c,o),this.resetTempArtist(),this.imgUrls=[]},updateChecked(r,t=!0){this.checkedMap[`${r}`]=t,this.selectIdBoolean=Object.keys(this.checkedMap).filter(a=>this.checkedMap[a])},async deleteSelectedItems(){const r="/admin/artists",t={ids:[...this.selectIdBoolean],_method:"DELETE"};this.selectIdBoolean.forEach(a=>{delete this.checkedMap[a]});try{(await $.post(r,t)).data.success&&(this.getAdminArtistData(this.searchPage),setTimeout(()=>{this.toastMsg("表演者已刪除")},1e3),this.selectIdBoolean=[])}catch(a){console.error(a),a.response.data.message&&this.toastMsg("因表演者資料有其他資料，不能刪除")}},async deleteItem(r){this.updateChecked(r),this.deleteSelectedItems()},resetTempArtist(){this.tempArtist={name:"",country:"",description:"",honors:[],songs:[],keywords:[],coverUrl:{horizontal:null,square:null}}},toastMsg(r){Dt({title:r,description:""})}},mounted(){this.getAdminArtistData()}},Qt=Object.assign(jt,{__name:"AdminArtistsView",setup(r){return(t,a)=>{var n;return u(),g(w,null,[l("div",Ce,[l("div",qe,[s(e(ee),{type:"text",placeholder:"請輸入表演者名稱",modelValue:t.searchText,"onUpdate:modelValue":a[0]||(a[0]=o=>t.searchText=o),modelModifiers:{trim:!0},onKeyup:t.searchInput},null,8,["modelValue","onKeyup"]),Fe]),l("div",ze,[s(e(J),{modelValue:t.selectCountry,"onUpdate:modelValue":a[1]||(a[1]=o=>t.selectCountry=o)},{default:i(()=>[s(e(N),null,{default:i(()=>[s(e(E),{placeholder:"請選擇表演者國籍"})]),_:1}),s(e(S),null,{default:i(()=>[s(e(R),null,{default:i(()=>[s(e(L),{class:"tracking-wide"},{default:i(()=>[d("表演者國籍")]),_:1}),(u(!0),g(w,null,V(t.countryRanges,o=>(u(),h(e(G),{key:o.id,value:o.type},{default:i(()=>[d(_(o.type),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),l("div",Ie,[l("div",Oe,[s(e(Ae),{ref:"form"},{default:i(()=>[s(e(te),{open:t.dialogOpen,"onUpdate:open":a[20]||(a[20]=o=>t.dialogOpen=o)},{default:i(()=>[s(e(se),{"as-child":""},{default:i(()=>[s(e(y),{variant:"outline",onClick:a[2]||(a[2]=o=>t.openDialog("新增")),class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:i(()=>[d(" 新增表演者 ")]),_:1})]),_:1}),s(e(we),{class:"sm:max-w-[900px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"},{default:i(()=>[s(e(le),{class:"p-6 pb-0"},{default:i(()=>[t.isNew?(u(),h(e(M),{key:0,class:"text-center mb-3"},{default:i(()=>[d(" 新增表演者 ")]),_:1})):(u(),h(e(M),{key:1,class:"text-center mb-3"},{default:i(()=>[d(" 編輯表演者 ")]),_:1})),s(e(ae),null,{default:i(()=>[d(" 以下請填入表演者的相關資訊 ")]),_:1})]),_:1}),l("div",Be,[l("div",Pe,[l("div",De,[l("div",null,[l("div",je,[Ne,s(e(m),{id:"name",name:"名稱",type:"text",placeholder:"請輸入表演者名稱",modelValue:t.tempArtist.name,"onUpdate:modelValue":a[3]||(a[3]=o=>t.tempArtist.name=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"名稱",class:"error-text text-xs"})]),l("div",null,[l("div",Ee,[Se,s(e(m),{id:"country",name:"國籍",class:"correct-input",rules:"required"},{default:i(({field:o})=>[s(e(J),T({modelValue:t.tempArtist.country,"onUpdate:modelValue":a[4]||(a[4]=c=>t.tempArtist.country=c),modelModifiers:{trim:!0}},o,{class:"text-input"}),{default:i(()=>[s(e(N),{class:"w-full col-span-3"},{default:i(()=>[s(e(E),{placeholder:"請選擇表演者國籍"})]),_:1}),s(e(S),null,{default:i(()=>[s(e(R),null,{default:i(()=>[s(e(L),null,{default:i(()=>[d("表演者")]),_:1}),(u(!0),g(w,null,V(t.countryTypes,c=>(u(),h(e(G),{key:c.id,value:c.type},{default:i(()=>[d(_(c.type),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:2},1040,["modelValue"])]),_:1})]),t.isNew?k("",!0):(u(),h(e(f),{key:0,name:"國籍",class:"error-text text-xs"}))]),l("div",null,[l("div",Re,[Le,s(e(m),{name:"介紹",modelValue:t.tempArtist.description,"onUpdate:modelValue":a[5]||(a[5]=o=>t.tempArtist.description=o),modelModifiers:{trim:!0},rules:"required|max:300"},{default:i(({field:o})=>[l("textarea",T(o,{name:"介紹",maxlength:"300",placeholder:"請輸入表演者介紹",class:"correct-textrea"})," ",16)]),_:1},8,["modelValue"])]),s(e(f),{name:"介紹",class:"error-text text-xs"})]),l("div",null,[l("div",null,[l("div",Ge,[Je,s(e(m),{id:"hornorOne",type:"text",name:"榮譽獎項 1",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[0],"onUpdate:modelValue":a[6]||(a[6]=o=>t.tempArtist.honors[0]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required|min:5"},null,8,["modelValue"])]),s(e(f),{name:"榮譽獎項 1",class:"error-text text-xs"})]),Ke]),l("div",null,[l("div",We,[Ye,s(e(m),{id:"hornorTwo",type:"text",name:"榮譽獎項 2",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[1],"onUpdate:modelValue":a[7]||(a[7]=o=>t.tempArtist.honors[1]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required|min:5"},null,8,["modelValue"])]),s(e(f),{name:"榮譽獎項 2",class:"error-text text-xs"})]),l("div",null,[l("div",Ze,[He,s(e(m),{id:"hornorThree",name:"榮譽獎項 3",type:"text",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[2],"onUpdate:modelValue":a[8]||(a[8]=o=>t.tempArtist.honors[2]=o),modelModifiers:{trim:!0},class:"correct-input"},null,8,["modelValue"])])]),l("div",null,[l("div",Qe,[Xe,s(e(m),{id:"hornorFour",name:"榮譽獎項 4",type:"text",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[3],"onUpdate:modelValue":a[9]||(a[9]=o=>t.tempArtist.honors[3]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"min:5"},null,8,["modelValue"])]),s(e(f),{name:"榮譽獎項 4",class:"error-text text-xs"})]),l("div",null,[l("div",et,[tt,s(e(m),{id:"songOne",name:"主打歌 1",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[0],"onUpdate:modelValue":a[10]||(a[10]=o=>t.tempArtist.songs[0]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"主打歌 1",class:"error-text text-xs"})]),l("div",null,[l("div",st,[lt,s(e(m),{id:"songTwo",name:"主打歌 2",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[1],"onUpdate:modelValue":a[11]||(a[11]=o=>t.tempArtist.songs[1]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"主打歌 2",class:"error-text text-xs"})]),l("div",null,[l("div",at,[ot,s(e(m),{id:"songThree",name:"主打歌 3",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[2],"onUpdate:modelValue":a[12]||(a[12]=o=>t.tempArtist.songs[2]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"主打歌 3",class:"error-text text-xs"})]),l("div",null,[l("div",it,[rt,s(e(m),{id:"songFour",name:"主打歌 4",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[3],"onUpdate:modelValue":a[13]||(a[13]=o=>t.tempArtist.songs[3]=o),modelModifiers:{trim:!0},class:"correct-input"},null,8,["modelValue"])])]),l("div",null,[l("div",nt,[dt,s(e(m),{id:"songFive",name:"主打歌 5",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[4],"onUpdate:modelValue":a[14]||(a[14]=o=>t.tempArtist.songs[4]=o),modelModifiers:{trim:!0},class:"correct-input"},null,8,["modelValue"])])])]),l("div",ut,[l("div",null,[l("div",null,[l("div",mt,[ct,s(e(m),{id:"keywordOne",name:"關鍵字 1",type:"text",placeholder:"請輸入表演者主打歌",modelValue:t.tempArtist.keywords[0],"onUpdate:modelValue":a[15]||(a[15]=o=>t.tempArtist.keywords[0]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"關鍵字 1",class:"error-text text-xs"})]),pt]),l("div",null,[l("div",ft,[ht,s(e(m),{id:"keywordTwo",name:"關鍵字 2",type:"text",placeholder:"請輸入表演者關鍵字",modelValue:t.tempArtist.keywords[1],"onUpdate:modelValue":a[16]||(a[16]=o=>t.tempArtist.keywords[1]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"關鍵字 2",class:"error-text text-xs"})]),l("div",null,[l("div",gt,[_t,s(e(m),{id:"keywordThree",name:"關鍵字 3",type:"text",placeholder:"請輸入表演者關鍵字",modelValue:t.tempArtist.keywords[2],"onUpdate:modelValue":a[17]||(a[17]=o=>t.tempArtist.keywords[2]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])])]),l("div",null,[l("div",yt,[wt,s(e(m),{id:"imgTwo",name:"橫圖",type:"file",class:"correct-input",accept:"image/png, image/jpeg ,image/webp",onChange:a[18]||(a[18]=o=>t.onFileUpload(o,0,"horizontal")),rules:"required"})]),t.isNew?(u(),h(e(f),{key:0,name:"橫圖",class:"error-text text-xs"})):k("",!0),t.imgUrls[0]?(u(),g("div",vt,[xt,l("div",At,[l("img",{id:"horizontal",class:"w-full h-full object-cover",src:t.imgUrls[0],alt:"Preview Image"},null,8,bt)])])):k("",!0)]),l("div",null,[l("div",kt,[Vt,s(e(m),{id:"imgTwo",name:"方圖",type:"file",class:"correct-input",accept:"image/png, image/jpeg",onChange:a[19]||(a[19]=o=>t.onFileUpload(o,1,"square")),rules:"required"})]),t.isNew?(u(),h(e(f),{key:0,name:"方圖",class:"error-text text-xs"})):k("",!0),t.imgUrls[1]?(u(),g("div",$t,[Ut,l("div",Mt,[l("img",{id:"square",class:"w-full h-full object-cover",src:t.imgUrls[1],alt:"Preview Image"},null,8,Tt)])])):k("",!0)])])])]),s(e(oe),{class:"p-6 pt-0"},{default:i(()=>[s(e(ye),null,{default:i(()=>[s(e(y),{variant:"outline",class:"px-6"},{default:i(()=>[d("取消")]),_:1})]),_:1}),s(e(y),{type:"button",onClick:t.onSubmit},{default:i(()=>[d("送出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open"])]),_:1},512)]),l("div",Ct,[s(e(D),null,{default:i(()=>[s(e(C),{"as-child":""},{default:i(()=>[s(e(y),{variant:"outline",disabled:t.selectIdBoolean.length===0,class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:i(()=>[d(" 刪除資料 ")]),_:1},8,["disabled"])]),_:1}),s(e(q),null,{default:i(()=>[s(e(F),null,{default:i(()=>[s(e(z),null,{default:i(()=>[d("確定要刪除資料?")]),_:1})]),_:1}),s(e(I)),s(e(O),null,{default:i(()=>[s(e(B),{class:"bg-black-60"},{default:i(()=>[d("取消")]),_:1}),s(e(P),{class:"text-black-100 bg-tiffany",onClick:a[21]||(a[21]=o=>t.deleteSelectedItems())},{default:i(()=>[d(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1})])])]),s(e(ce),{class:"bg-white rounded-lg text-md mb-10 whitespace-nowrap"},{default:i(()=>[s(e(ue),null,{default:i(()=>[s(e(j),{class:"hover:bg-white text-nowrap",style:{color:"black !important"}},{default:i(()=>[s(e(v)),s(e(v),{class:"font-semibold"},{default:i(()=>[d("表演者名稱")]),_:1}),s(e(v),{class:"font-semibold"},{default:i(()=>[d("表演者國籍")]),_:1}),s(e(v),{class:"font-semibold"},{default:i(()=>[d("即將舉辦演唱會數")]),_:1}),s(e(v),{class:"font-semibold"},{default:i(()=>[d("追蹤人數")]),_:1}),s(e(v),{class:"w-[100px]"})]),_:1})]),_:1}),s(e(me),{class:"text-gray-600"},{default:i(()=>[(u(!0),g(w,null,V(t.filteredData,o=>(u(),h(e(j),{key:o.id},{default:i(()=>[s(e(x),{class:"text-purple-primary"},{default:i(()=>[s(e(de),{id:"terms",checked:t.checkedMap[o.id],"onUpdate:checked":c=>t.updateChecked(o.id,c)},null,8,["checked","onUpdate:checked"]),qt]),_:2},1024),s(e(x),{class:"text-purple-primary"},{default:i(()=>[d(_(o==null?void 0:o.name),1)]),_:2},1024),s(e(x),{class:"pl-10"},{default:i(()=>[d(_(o.country),1)]),_:2},1024),s(e(x),{class:"pl-[70px]"},{default:i(()=>[d(_(o.concert_count),1)]),_:2},1024),s(e(x),{class:"pl-7"},{default:i(()=>[d(_(o.follower_count),1)]),_:2},1024),s(e(x),{class:"text-center"},{default:i(()=>[s(e(y),{variant:"none",onClick:c=>t.openDialog("編輯",o.id),class:"hover:text-[#6366f1]"},{default:i(()=>[Ft]),_:2},1032,["onClick"]),s(e(D),null,{default:i(()=>[s(e(C),{"as-child":""},{default:i(()=>[s(e(y),{variant:"none",class:"hover:text-[#6366f1]"},{default:i(()=>[zt]),_:1})]),_:1}),s(e(q),null,{default:i(()=>[s(e(F),null,{default:i(()=>[s(e(z),null,{default:i(()=>[d("確定要刪除該筆資料?")]),_:1}),s(e(I))]),_:1}),s(e(O),null,{default:i(()=>[s(e(B),null,{default:i(()=>[d("取消")]),_:1}),s(e(P),{onClick:c=>t.deleteItem(o.id)},{default:i(()=>[d(" 確定 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l("div",It,[s(e(ne),{total:t.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:i(({page:o})=>[s(e(ie),{class:"flex items-center md:gap-1"},{default:i(({items:c})=>[s(e(pe),{onClick:a[22]||(a[22]=p=>t.FilterByPage(1))}),s(e(fe),{onClick:a[23]||(a[23]=p=>t.FilterByPage(t.pagination.current_page-1))}),(u(!0),g(w,null,V(c,p=>(u(),g(w,null,[p.type==="page"?(u(),h(e(re),{key:p,value:p.value,"as-child":""},{default:i(()=>[s(e(y),{class:"w-10 h-10 p-0",variant:p.value===o?"default":"page",onClick:U=>t.FilterByPage(p.value)},{default:i(()=>[d(_(p.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(u(),h(e(he),{key:p.type,index:t.index,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),s(e(ge),{onClick:a[24]||(a[24]=p=>t.FilterByPage(t.pagination.current_page+1))}),s(e(_e),{onClick:a[25]||(a[25]=p=>t.FilterByPage(t.pagination.total_pages))})]),_:2},1024)]),_:1},8,["total"])]),Z(l("div",Ot,Pt,512),[[H,!((n=t.filteredData)!=null&&n.length)]])],64)}}});export{Qt as default};
