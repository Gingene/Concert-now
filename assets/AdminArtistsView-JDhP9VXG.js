import{M as $,a5 as W,K as Y,c as g,a,b as s,z as e,w as i,aJ as Z,b5 as H,F as w,a7 as Q,am as X,o as u,a4 as ee,G as d,r as V,f as h,t as _,az as te,au as se,C as y,av as le,aw as M,ax as ae,U as T,g as k,ay as oe,aa as C,ab as q,ac as F,ad as I,ae as z,af as O,ag as B,ah as P,ai as D,ak as ie,aj as re,al as ne}from"./index-mLlWXRmv.js";import{_ as de}from"./Checkbox-3pcMjvuM.js";import{_ as ue,a as j,b as v,c as me,d as x,e as ce}from"./TableRow-2Eh7jGAs.js";import{_ as N,a as E,b as S,c as R,d as L,e as G,f as J}from"./SelectLabel-fl3EwShr.js";import{_ as pe,a as fe,b as he,c as ge,d as _e}from"./PaginationPrev-Hgi895Hw.js";import{_ as ye}from"./DialogClose-rPuOw75r.js";import{_ as we}from"./DialogContent-_bOK95JE.js";import{g as ve,j as xe,e as m,E as f,h as Ae}from"./vee-validate.esm-leK_LBCJ.js";import{A as K}from"./vee-validate-rules.esm-RxggV2Bc.js";import{l as be,s as ke}from"./vee-validate-i18n.esm-ZqaKjB89.js";import"./check-SIhV_yg-.js";import"./more-horizontal-IUQJm4PV.js";const Ve=async r=>{const t=`/admin/artists?page=${r}`;try{return await $.get(t)}catch(l){throw console.error("[GetAdminArtists Failed]",l),new Error("error")}},$e=async(r,t)=>{const l=`/admin/artists?q=${r}&country=&page=${t}`;try{return await $.get(l)}catch(n){throw console.error("[FilterAdminArtists Failed]",n),new Error("error")}},Ue="zh_TW",Me={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},Te={code:Ue,messages:Me},Ce={class:"flex flex-wrap gap-x-5 gap-y-6 md:gap-6 mb-8 relative"},qe={class:"w-full xs:w-[290px] relative lg:pt-6"},Fe=a("span",{class:"material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),Ie={class:"w-full xs:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5"},ze={class:"flex flex-row gap-6"},Oe={class:"lg:pt-5 mt-auto"},Be={class:"grid gap-4 py-4 overflow-y-auto px-6"},Pe={class:"grid grid-cols-2 gap-9 px-2 h-[50dvh]"},De={class:"flex flex-col space-y-5 py-4"},je={class:"flex items-center gap-5 whitespace-nowrap"},Ne=a("label",{for:"name",class:"text-left mr-[52px]"},"名稱",-1),Ee={class:"flex items-center gap-5 whitespace-nowrap"},Se=a("label",{for:"country",class:"text-left mr-[52px]"}," 國籍 ",-1),Re={class:"flex items-start gap-5 whitespace-nowrap"},Le=a("label",{for:"description",class:"text-left mr-[52px]"}," 介紹 ",-1),Ge={class:"flex items-center gap-5 whitespace-nowrap"},Je=a("label",{for:"hornorOne",class:"text-left mr-2"}," 榮譽獎項 1 ",-1),Ke=a("p",{class:"text-cyan-400 mt-1"},"範例: 2010 Mnet 亞洲音樂 (MAMA) 最佳樂隊獎",-1),We={class:"flex items-center gap-5 whitespace-nowrap"},Ye=a("label",{for:"hornorTwo",class:"text-left mr-2"}," 榮譽獎項 2 ",-1),Ze={class:"flex items-center gap-5 whitespace-nowrap"},He=a("label",{for:"hornorThree",class:"text-left mr-2"}," 榮譽獎項 3 ",-1),Qe={class:"flex items-center gap-5 whitespace-nowrap"},Xe=a("label",{for:"hornorFour",class:"text-left mr-2"}," 榮譽獎項 4 ",-1),et={class:"flex items-center gap-5 whitespace-nowrap"},tt=a("label",{for:"songOne",class:"text-left mr-6"}," 主打歌 1 ",-1),st={class:"flex items-center gap-5 whitespace-nowrap"},lt=a("label",{for:"songTwo",class:"text-left mr-6"}," 主打歌 2 ",-1),at={class:"flex items-center gap-5 whitespace-nowrap"},ot=a("label",{for:"songThree",class:"text-left mr-6"}," 主打歌 3 ",-1),it={class:"flex items-center gap-5 whitespace-nowrap"},rt=a("label",{for:"songFour",class:"text-left mr-6"}," 主打歌 4 ",-1),nt={class:"flex items-center gap-5 whitespace-nowrap"},dt=a("label",{for:"songFive",class:"text-left mr-6"},[a("span",null,"主打歌 5")],-1),ut={class:"flex flex-col space-y-5 py-4"},mt={class:"flex items-center gap-5 whitespace-nowrap"},ct=a("label",{for:"keywordOne",class:"text-left mr-6"}," 關鍵字 1 ",-1),pt=a("p",{class:"text-cyan-400 mt-1"},"範例: YOASOBI，關鍵字: 日本、J-POP、Vocaloid",-1),ft={class:"flex items-center gap-5 whitespace-nowrap"},ht=a("label",{for:"keywordTwo",class:"text-left mr-6"},[a("span",null,"關鍵字 2")],-1),gt={class:"flex items-center gap-5 whitespace-nowrap"},_t=a("label",{for:"keywordTwo",class:"text-left mr-6"},[a("span",null,"關鍵字 3")],-1),yt={class:"flex items-center gap-5 whitespace-nowrap"},wt=a("label",{for:"imgTwo",class:"text-left mr-4"}," 圖片-橫圖 ",-1),vt={key:1,class:"pt-3"},xt=a("p",{class:"mb-2"},"預覽橫圖",-1),At={class:"w-auto w-h-[200px] mb-5"},bt=["src"],kt={class:"flex items-center gap-5 whitespace-nowrap"},Vt=a("label",{for:"imgTwo",class:"text-left mr-4"}," 圖片-方圖 ",-1),$t={key:1,class:"pt-3"},Ut=a("p",{class:"mb-2"},"預覽方圖",-1),Mt={class:"w-[200px] h-[200px]"},Tt=["src"],Ct={class:"lg:pt-5 mt-auto"},qt=a("label",{for:"terms",class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},null,-1),Ft=a("span",{class:"material-symbols-outlined"},"edit",-1),It=a("span",{class:"material-symbols-outlined"}," delete ",-1),zt={class:"flex justify-center"},Ot={class:"flex justify-center py-12"},Bt=a("h2",null,"哇! 找不到資料~",-1),Pt=[Bt],{setIsLoading:A}=W(),{toast:Dt}=Y();Object.keys(K).forEach(r=>{ve(r,K[r])});xe({generateMessage:be({zh_TW:Te}),validateOnInput:!0});ke("zh_TW");const jt={data(){return{searchText:"",selectCountry:"",searchPage:1,selectIdBoolean:[],checkedMap:{},pagination:{},adminArtists:[],imgUrls:[],isNew:!1,dialogOpen:!1,changeId:null,countryRanges:[{id:1,type:"全部國籍"},{id:2,type:"台灣"},{id:3,type:"日本"},{id:4,type:"韓國"},{id:5,type:"歐美"},{id:6,type:"其它"}],countryTypes:[{id:1,type:"台灣"},{id:2,type:"日本"},{id:3,type:"韓國"},{id:4,type:"歐美"},{id:5,type:"其它"}],tempArtist:{name:"",country:"",description:"",honors:[],songs:[],keywords:[],coverUrl:{horizontal:null,square:null}}}},computed:{filteredData(){var t;const r=this.selectCountry;return r==="全部國籍"?this.adminArtists:(t=this.adminArtists)==null?void 0:t.filter(l=>{let n=!0;return r!=null&&r.length>0&&(n=l.country===r),n})}},methods:{searchInput:Q(async function(r=1){this.searchPage=r;try{const t=await $e(this.searchText,r);this.adminArtists=t.data.data,this.pagination=t.data.pagination,t.data.data.forEach(l=>{this.checkedMap[`${l.id}`]=!1})}catch(t){console.error(t)}},300),FilterByPage(r){A(),this.searchInput(r),setTimeout(()=>{A()},500)},async getAdminArtistData(r=1){this.searchPage=r,A(!0);try{const t=await Ve(r);this.adminArtists=t.data.data,this.pagination=t.data.pagination,t.data.data.forEach(l=>{this.checkedMap[`${l.id}`]=!1})}catch(t){console.error(t)}finally{A(!1)}},async getOnSubmitData(r,t){A();try{const n=(await $.post(r,t)).data.message;this.getAdminArtistData(),this.toastMsg(n),this.dialogOpen=!1}catch(l){console.error(l)}finally{A()}},onFileUpload(r,t,l){const n=r.target.files[0],o=["image/jpeg","image/png","image/webp"];if(!n)return;if(!o.includes(n.type)){this.toastMsg("只能上傳 PNG 或 JPEG 格式的圖片");return}const c=3*1024*1024;if(n.size>c){this.toastMsg("圖片大小不能超過3MB");return}this.tempArtist.coverUrl[`${l}`]=n,this.imgUrls[t]=URL.createObjectURL(this.tempArtist.coverUrl[`${l}`])},async openDialog(r,t){if(r==="新增")this.isNew=!0,this.tempArtist={name:"",country:"",description:"",honors:[],songs:[],keywords:[],coverUrl:{horizontal:null,square:null}};else{this.resetTempArtist(),this.imgUrls=[],this.isNew=!1,this.dialogOpen=!0;try{const n=(await X(t)).data.data;this.changeId=n.id,this.tempArtist={name:n.name,country:n.country,description:n.description,honors:n.honors,songs:n.popular_songs,keywords:n.keywords},this.imgUrls[0]=n.cover_urls.horizontal,this.imgUrls[1]=n.cover_urls.square}catch(l){console.error(l)}}},async onSubmit(){var p,U;const r=await this.$refs.form.validate();if(this.isNew&&!r.valid){this.toastMsg("請填寫必填欄位");return}const t=this.tempArtist.honors.filter(b=>b.trim().length>0),l=this.tempArtist.songs.filter(b=>b.trim().length>0),n=this.tempArtist.keywords.filter(b=>b.trim().length>0),o={name:this.tempArtist.name,country:this.tempArtist.country,description:this.tempArtist.description,honors:t,popular_songs:l,keywords:n};(p=this.tempArtist.coverUrl)!=null&&p.horizontal&&(o.cover_horizontal=this.tempArtist.coverUrl.horizontal),(U=this.tempArtist.coverUrl)!=null&&U.square&&(o.cover_square=this.tempArtist.coverUrl.square);let c="/admin/artists";this.isNew||(c=`/admin/artists/${this.changeId}`,o._method="PUT"),this.getOnSubmitData(c,o),this.resetTempArtist(),this.imgUrls=[]},updateChecked(r,t=!0){this.checkedMap[`${r}`]=t,this.selectIdBoolean=Object.keys(this.checkedMap).filter(l=>this.checkedMap[l])},async deleteSelectedItems(){const r="/admin/artists",t={ids:[...this.selectIdBoolean],_method:"DELETE"};this.selectIdBoolean.forEach(l=>{delete this.checkedMap[l]});try{(await $.post(r,t)).data.success&&(this.getAdminArtistData(this.searchPage),setTimeout(()=>{this.toastMsg("表演者已刪除")},1e3),this.selectIdBoolean=[])}catch(l){console.error(l),l.response.data.message&&this.toastMsg("因表演者資料有其他資料，不能刪除")}},async deleteItem(r){this.updateChecked(r),this.deleteSelectedItems()},resetTempArtist(){this.tempArtist={name:"",country:"",description:"",honors:[],songs:[],keywords:[],coverUrl:{horizontal:null,square:null}}},toastMsg(r){Dt({title:r,description:""})}},mounted(){this.getAdminArtistData()}},Qt=Object.assign(jt,{__name:"AdminArtistsView",setup(r){return(t,l)=>{var n;return u(),g(w,null,[a("div",Ce,[a("div",qe,[s(e(ee),{type:"text",placeholder:"請輸入表演者名稱",modelValue:t.searchText,"onUpdate:modelValue":l[0]||(l[0]=o=>t.searchText=o),modelModifiers:{trim:!0},onKeyup:t.searchInput},null,8,["modelValue","onKeyup"]),Fe]),a("div",Ie,[s(e(J),{modelValue:t.selectCountry,"onUpdate:modelValue":l[1]||(l[1]=o=>t.selectCountry=o)},{default:i(()=>[s(e(N),null,{default:i(()=>[s(e(E),{placeholder:"請選擇表演者國籍"})]),_:1}),s(e(S),null,{default:i(()=>[s(e(R),null,{default:i(()=>[s(e(L),{class:"tracking-wide"},{default:i(()=>[d("表演者國籍")]),_:1}),(u(!0),g(w,null,V(t.countryRanges,o=>(u(),h(e(G),{key:o.id,value:o.type},{default:i(()=>[d(_(o.type),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a("div",ze,[a("div",Oe,[s(e(Ae),{ref:"form"},{default:i(()=>[s(e(te),{open:t.dialogOpen,"onUpdate:open":l[20]||(l[20]=o=>t.dialogOpen=o)},{default:i(()=>[s(e(se),{"as-child":""},{default:i(()=>[s(e(y),{variant:"outline",onClick:l[2]||(l[2]=o=>t.openDialog("新增")),class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:i(()=>[d(" 新增表演者 ")]),_:1})]),_:1}),s(e(we),{class:"sm:max-w-[900px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"},{default:i(()=>[s(e(le),{class:"p-6 pb-0"},{default:i(()=>[t.isNew?(u(),h(e(M),{key:0,class:"text-center mb-3"},{default:i(()=>[d(" 新增表演者 ")]),_:1})):(u(),h(e(M),{key:1,class:"text-center mb-3"},{default:i(()=>[d(" 編輯表演者 ")]),_:1})),s(e(ae),null,{default:i(()=>[d(" 以下請填入表演者的相關資訊 ")]),_:1})]),_:1}),a("div",Be,[a("div",Pe,[a("div",De,[a("div",null,[a("div",je,[Ne,s(e(m),{id:"name",name:"名稱",type:"text",placeholder:"請輸入表演者名稱",modelValue:t.tempArtist.name,"onUpdate:modelValue":l[3]||(l[3]=o=>t.tempArtist.name=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"名稱",class:"error-text text-xs"})]),a("div",null,[a("div",Ee,[Se,s(e(m),{id:"country",name:"國籍",class:"correct-input",rules:"required"},{default:i(({field:o})=>[s(e(J),T({modelValue:t.tempArtist.country,"onUpdate:modelValue":l[4]||(l[4]=c=>t.tempArtist.country=c),modelModifiers:{trim:!0}},o,{class:"text-input"}),{default:i(()=>[s(e(N),{class:"w-full col-span-3"},{default:i(()=>[s(e(E),{placeholder:"請選擇表演者國籍"})]),_:1}),s(e(S),null,{default:i(()=>[s(e(R),null,{default:i(()=>[s(e(L),null,{default:i(()=>[d("表演者")]),_:1}),(u(!0),g(w,null,V(t.countryTypes,c=>(u(),h(e(G),{key:c.id,value:c.type},{default:i(()=>[d(_(c.type),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:2},1040,["modelValue"])]),_:1})]),t.isNew?k("",!0):(u(),h(e(f),{key:0,name:"國籍",class:"error-text text-xs"}))]),a("div",null,[a("div",Re,[Le,s(e(m),{name:"介紹",modelValue:t.tempArtist.description,"onUpdate:modelValue":l[5]||(l[5]=o=>t.tempArtist.description=o),modelModifiers:{trim:!0},rules:"required|max:300"},{default:i(({field:o})=>[a("textarea",T(o,{name:"介紹",maxlength:"300",placeholder:"請輸入表演者介紹",class:"correct-textrea"})," ",16)]),_:1},8,["modelValue"])]),s(e(f),{name:"介紹",class:"error-text text-xs"})]),a("div",null,[a("div",null,[a("div",Ge,[Je,s(e(m),{id:"hornorOne",type:"text",name:"榮譽獎項 1",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[0],"onUpdate:modelValue":l[6]||(l[6]=o=>t.tempArtist.honors[0]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required|min:5"},null,8,["modelValue"])]),s(e(f),{name:"榮譽獎項 1",class:"error-text text-xs"})]),Ke]),a("div",null,[a("div",We,[Ye,s(e(m),{id:"hornorTwo",type:"text",name:"榮譽獎項 2",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[1],"onUpdate:modelValue":l[7]||(l[7]=o=>t.tempArtist.honors[1]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required|min:5"},null,8,["modelValue"])]),s(e(f),{name:"榮譽獎項 2",class:"error-text text-xs"})]),a("div",null,[a("div",Ze,[He,s(e(m),{id:"hornorThree",name:"榮譽獎項 3",type:"text",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[2],"onUpdate:modelValue":l[8]||(l[8]=o=>t.tempArtist.honors[2]=o),modelModifiers:{trim:!0},class:"correct-input"},null,8,["modelValue"])])]),a("div",null,[a("div",Qe,[Xe,s(e(m),{id:"hornorFour",name:"榮譽獎項 4",type:"text",placeholder:"請輸入表演者榮譽獎項",modelValue:t.tempArtist.honors[3],"onUpdate:modelValue":l[9]||(l[9]=o=>t.tempArtist.honors[3]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"min:5"},null,8,["modelValue"])]),s(e(f),{name:"榮譽獎項 4",class:"error-text text-xs"})]),a("div",null,[a("div",et,[tt,s(e(m),{id:"songOne",name:"主打歌 1",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[0],"onUpdate:modelValue":l[10]||(l[10]=o=>t.tempArtist.songs[0]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"主打歌 1",class:"error-text text-xs"})]),a("div",null,[a("div",st,[lt,s(e(m),{id:"songTwo",name:"主打歌 2",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[1],"onUpdate:modelValue":l[11]||(l[11]=o=>t.tempArtist.songs[1]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"主打歌 2",class:"error-text text-xs"})]),a("div",null,[a("div",at,[ot,s(e(m),{id:"songThree",name:"主打歌 3",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[2],"onUpdate:modelValue":l[12]||(l[12]=o=>t.tempArtist.songs[2]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"主打歌 3",class:"error-text text-xs"})]),a("div",null,[a("div",it,[rt,s(e(m),{id:"songFour",name:"主打歌 4",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[3],"onUpdate:modelValue":l[13]||(l[13]=o=>t.tempArtist.songs[3]=o),modelModifiers:{trim:!0},class:"correct-input"},null,8,["modelValue"])])]),a("div",null,[a("div",nt,[dt,s(e(m),{id:"songFive",name:"主打歌 5",type:"text",placeholder:"請輸入主打歌",modelValue:t.tempArtist.songs[4],"onUpdate:modelValue":l[14]||(l[14]=o=>t.tempArtist.songs[4]=o),modelModifiers:{trim:!0},class:"correct-input"},null,8,["modelValue"])])])]),a("div",ut,[a("div",null,[a("div",null,[a("div",mt,[ct,s(e(m),{id:"keywordOne",name:"關鍵字 1",type:"text",placeholder:"請輸入表演者主打歌",modelValue:t.tempArtist.keywords[0],"onUpdate:modelValue":l[15]||(l[15]=o=>t.tempArtist.keywords[0]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"關鍵字 1",class:"error-text text-xs"})]),pt]),a("div",null,[a("div",ft,[ht,s(e(m),{id:"keywordTwo",name:"關鍵字 2",type:"text",placeholder:"請輸入表演者關鍵字",modelValue:t.tempArtist.keywords[1],"onUpdate:modelValue":l[16]||(l[16]=o=>t.tempArtist.keywords[1]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])]),s(e(f),{name:"關鍵字 2",class:"error-text text-xs"})]),a("div",null,[a("div",gt,[_t,s(e(m),{id:"keywordThree",name:"關鍵字 3",type:"text",placeholder:"請輸入表演者關鍵字",modelValue:t.tempArtist.keywords[2],"onUpdate:modelValue":l[17]||(l[17]=o=>t.tempArtist.keywords[2]=o),modelModifiers:{trim:!0},class:"correct-input",rules:"required"},null,8,["modelValue"])])]),a("div",null,[a("div",yt,[wt,s(e(m),{id:"imgTwo",name:"橫圖",type:"file",class:"correct-input",accept:"image/png, image/jpeg ,image/webp",onChange:l[18]||(l[18]=o=>t.onFileUpload(o,0,"horizontal")),rules:"required"})]),t.isNew?(u(),h(e(f),{key:0,name:"橫圖",class:"error-text text-xs"})):k("",!0),t.imgUrls[0]?(u(),g("div",vt,[xt,a("div",At,[a("img",{id:"horizontal",class:"w-full h-full object-cover",src:t.imgUrls[0],alt:"Preview Image"},null,8,bt)])])):k("",!0)]),a("div",null,[a("div",kt,[Vt,s(e(m),{id:"imgTwo",name:"方圖",type:"file",class:"correct-input",accept:"image/png, image/jpeg",onChange:l[19]||(l[19]=o=>t.onFileUpload(o,1,"square")),rules:"required"})]),t.isNew?(u(),h(e(f),{key:0,name:"方圖",class:"error-text text-xs"})):k("",!0),t.imgUrls[1]?(u(),g("div",$t,[Ut,a("div",Mt,[a("img",{id:"square",class:"w-full h-full object-cover",src:t.imgUrls[1],alt:"Preview Image"},null,8,Tt)])])):k("",!0)])])])]),s(e(oe),{class:"p-6 pt-0"},{default:i(()=>[s(e(ye),null,{default:i(()=>[s(e(y),{variant:"outline",class:"px-6"},{default:i(()=>[d("取消")]),_:1})]),_:1}),s(e(y),{type:"button",onClick:t.onSubmit},{default:i(()=>[d("送出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open"])]),_:1},512)]),a("div",Ct,[s(e(D),null,{default:i(()=>[s(e(C),{"as-child":""},{default:i(()=>[s(e(y),{variant:"outline",disabled:t.selectIdBoolean.length===0,class:"bg-primary text-white hover:bg-[#6366f1] hover:text-white"},{default:i(()=>[d(" 刪除資料 ")]),_:1},8,["disabled"])]),_:1}),s(e(q),null,{default:i(()=>[s(e(F),null,{default:i(()=>[s(e(I),null,{default:i(()=>[d("確定要刪除資料?")]),_:1})]),_:1}),s(e(z)),s(e(O),null,{default:i(()=>[s(e(B),{class:"bg-black-60"},{default:i(()=>[d("取消")]),_:1}),s(e(P),{class:"text-black-100 bg-tiffany",onClick:l[21]||(l[21]=o=>t.deleteSelectedItems())},{default:i(()=>[d(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1})])])]),s(e(ce),{class:"bg-white rounded-lg text-md mb-10 whitespace-nowrap"},{default:i(()=>[s(e(ue),null,{default:i(()=>[s(e(j),{class:"hover:bg-white text-nowrap",style:{color:"black !important"}},{default:i(()=>[s(e(v)),s(e(v),{class:"font-semibold"},{default:i(()=>[d("表演者名稱")]),_:1}),s(e(v),{class:"font-semibold"},{default:i(()=>[d("表演者國籍")]),_:1}),s(e(v),{class:"font-semibold"},{default:i(()=>[d("即將舉辦演唱會數")]),_:1}),s(e(v),{class:"font-semibold"},{default:i(()=>[d("追蹤人數")]),_:1}),s(e(v),{class:"w-[100px]"})]),_:1})]),_:1}),s(e(me),{class:"text-gray-600"},{default:i(()=>[(u(!0),g(w,null,V(t.filteredData,o=>(u(),h(e(j),{key:o.id},{default:i(()=>[s(e(x),{class:"text-purple-primary"},{default:i(()=>[s(e(de),{id:"terms",checked:t.checkedMap[o.id],"onUpdate:checked":c=>t.updateChecked(o.id,c)},null,8,["checked","onUpdate:checked"]),qt]),_:2},1024),s(e(x),{class:"text-purple-primary"},{default:i(()=>[d(_(o==null?void 0:o.name),1)]),_:2},1024),s(e(x),{class:"pl-10"},{default:i(()=>[d(_(o.country),1)]),_:2},1024),s(e(x),{class:"pl-[70px]"},{default:i(()=>[d(_(o.concert_count),1)]),_:2},1024),s(e(x),{class:"pl-7"},{default:i(()=>[d(_(o.follower_count),1)]),_:2},1024),s(e(x),{class:"text-center"},{default:i(()=>[s(e(y),{variant:"none",onClick:c=>t.openDialog("編輯",o.id),class:"hover:text-[#6366f1]"},{default:i(()=>[Ft]),_:2},1032,["onClick"]),s(e(D),null,{default:i(()=>[s(e(C),{"as-child":""},{default:i(()=>[s(e(y),{variant:"none",class:"hover:text-[#6366f1]"},{default:i(()=>[It]),_:1})]),_:1}),s(e(q),null,{default:i(()=>[s(e(F),null,{default:i(()=>[s(e(I),null,{default:i(()=>[d("確定要刪除該筆資料?")]),_:1}),s(e(z))]),_:1}),s(e(O),null,{default:i(()=>[s(e(B),null,{default:i(()=>[d("取消")]),_:1}),s(e(P),{onClick:c=>t.deleteItem(o.id)},{default:i(()=>[d(" 確定 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),a("div",zt,[s(e(ne),{total:t.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:i(({page:o})=>[s(e(ie),{class:"flex items-center md:gap-1"},{default:i(({items:c})=>[s(e(pe),{onClick:l[22]||(l[22]=p=>t.FilterByPage(1))}),s(e(fe),{onClick:l[23]||(l[23]=p=>t.FilterByPage(t.pagination.current_page-1))}),(u(!0),g(w,null,V(c,p=>(u(),g(w,null,[p.type==="page"?(u(),h(e(re),{key:p,value:p.value,"as-child":""},{default:i(()=>[s(e(y),{class:"w-10 h-10 p-0",variant:p.value===o?"default":"page",onClick:U=>t.FilterByPage(p.value)},{default:i(()=>[d(_(p.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(u(),h(e(he),{key:p.type,index:t.index,class:"hidden sm:flex"},null,8,["index"]))],64))),256)),s(e(ge),{onClick:l[24]||(l[24]=p=>t.FilterByPage(t.pagination.current_page+1))}),s(e(_e),{onClick:l[25]||(l[25]=p=>t.FilterByPage(t.pagination.total_pages))})]),_:2},1024)]),_:1},8,["total"])]),Z(a("div",Ot,Pt,512),[[H,!((n=t.filteredData)!=null&&n.length)]])],64)}}});export{Qt as default};
