import{i as Z,aR as ee,aS as te,aT as se,u as t,o as r,c as u,$ as ae,C as S,U as V,O as le,g as f,w as s,P as w,Q as oe,R as ne,aU as ie,s as U,a as l,T as M,aV as re,aK as de,aW as ce,b as a,aX as ue,aY as pe,h as k,aZ as me,_ as fe,ab as _e,K as he,M as ge,y as be,z as L,a_ as ve,D as ye,t as d,F as _,r as g,ae as xe,E as c,B as b,ag as R,ai as N,aj as D,ak as E,al as F,am as H,an as G,ah as O,ao as K,aB as ke,aD as we,aE as $e,aF as Ce,aG as Se,aH as Ve,aC as qe,aI as Ae,G as Te,A as ze,I as Ie,J as je,d as Q}from"./index-YQxMthNK.js";import{_ as q}from"./Label-HFHDryMu.js";import{_ as A,a as T,b as z,c as I,d as j,e as C,f as B}from"./SelectLabel-na0sStmt.js";import{b as Be,_ as Pe,a as Ue}from"./PopoverContent-FzhaMmHc.js";import{T as W}from"./TitleComponent-TbaKNQUH.js";import{u as P}from"./venues-Ld5BbVyD.js";import{M as Me}from"./more-horizontal-B0LHj9Iw.js";import"./check-iLxjNcnL.js";/**
 * @license lucide-vue-next v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=Z("AlertCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Le={__name:"Textarea",props:{class:{type:null,required:!1},defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],setup(n,{emit:e}){const i=n,p=ee(i,"modelValue",e,{passive:!0,defaultValue:i.defaultValue});return(v,o)=>te((r(),u("textarea",{"onUpdate:modelValue":o[0]||(o[0]=h=>ae(p)?p.value=h:null),class:S(t(V)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",i.class))},null,2)),[[se,t(p)]])}},Re={__name:"Accordion",props:{type:{type:String,required:!0},modelValue:{type:[String,Array],required:!1},defaultValue:{type:[String,Array],required:!1},collapsible:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(n,{emit:e}){const p=le(n,e);return(v,o)=>(r(),f(t(ie),oe(ne(t(p))),{default:s(()=>[w(v.$slots,"default")]),_:3},16))}},Ne={__name:"AccordionContent",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(n){const e=n,i=U(()=>{const{class:m,...p}=e;return p});return(m,p)=>(r(),f(t(re),M(i.value,{class:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:s(()=>[l("div",{class:S(t(V)("pb-4 pt-0",e.class))},[w(m.$slots,"default")],2)]),_:3},16))}},De={__name:"AccordionItem",props:{disabled:{type:Boolean,required:!1},value:{type:String,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(n){const e=n,i=U(()=>{const{class:p,...v}=e;return v}),m=de(i);return(p,v)=>(r(),f(t(ce),M(t(m),{class:t(V)("border-b",e.class)}),{default:s(()=>[w(p.$slots,"default")]),_:3},16,["class"]))}},Ee={__name:"AccordionTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1},hideIcon:{type:Boolean,required:!1}},setup(n){const e=n,i=U(()=>{const{class:m,...p}=e;return p});return(m,p)=>(r(),f(t(me),{class:"flex"},{default:s(()=>[a(t(ue),M(i.value,{class:t(V)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e.class)}),{default:s(()=>[w(m.$slots,"default"),n.hideIcon?k("",!0):w(m.$slots,"icon",{key:0},()=>[a(t(pe),{class:"h-4 w-4 shrink-0 transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}},$=n=>(Ie("data-v-c208ffd6"),n=n(),je(),n),Fe={class:"container pb-20 lg:pb-32 pt-[400px] md:pt-[460px] lg:pt-[600px] 2xl:pt-[700px] space-y-6 lg:space-y-10"},He={class:"space-y-6 lg:space-y-10"},Ge={class:"text-center"},Oe={class:"text-4xl lg:text-5xl font-black"},Ke={class:"py-4 lg:hidden text-center text-black-40"},Qe={class:"collapse-left py-4"},We={class:"col-start-2 py-4"},Je={class:"collapse-right py-4"},Xe={class:"grid grid-cols-1 lg:grid-cols-5 gap-6"},Ye={class:"lg:order-2 lg:col-span-2 py-10 sm:py-14 px-7 xs:px-9 sm:px-12 lg:px-14 rounded-[40px] bg-shadow-trans-text venue-section"},Ze=$(()=>l("p",{class:"text-gray-500 text-base sm:text-xl lg:pt-5 font-lato text-center"},"_____ STAGE _____",-1)),et={class:"h-[200px] sm:h-[300px] w-[80%] xl:w-[60%] text-sm sm:text-base grid grid-flow-row auto-row-max gap-2 md:gap-4 mx-auto my-3 lg:my-5"},tt=["onClick"],st={class:"space-y-6 lg:space-y-10 box-shadow-light2 px-6 py-10 sm:p-10 rounded-btn2 lg:col-span-3"},at={class:"flex justify-between items-center"},lt={class:"text-center"},ot=$(()=>l("p",{class:"text-sm text-black-60 pb-4"},"※ 座位區、演唱會與評論皆需填寫，若有缺漏會新增失敗。",-1)),nt={class:"relative flex items-center"},it={class:"flex items-center"},rt={class:"text-black-40"},dt={class:"relative flex items-center mb-4"},ct={key:0},ut={key:1},pt={class:"space-y-4"},mt=$(()=>l("span",{class:"text-sm text-black-60"},"圖片至多可傳三張(單一圖檔不能超過3MB)",-1)),ft={class:"flex justify-center space-x-4"},_t={key:0,id:"commentImage1",class:"size-[80px] lg:size-[150px]",src:"http://placehold.it/150",alt:"your image"},ht={key:1,id:"commentImage2",class:"size-[80px] lg:size-[150px]",src:"http://placehold.it/150",alt:"your image"},gt={key:2,id:"commentImage3",class:"size-[80px] lg:size-[150px]",src:"http://placehold.it/150",alt:"your image"},bt={class:"flex justify-center items-center"},vt={class:"flex justify-center items-center space-x-2"},yt={class:"col-span-2 sm:col-span-1 lg:col-span-1"},xt=["src","alt"],kt={class:"col-span-8 sm:col-span-10 lg:col-span-10 xl:col-span-10 flex flex-col space-y-4"},wt={class:"space-x-3"},$t={class:"text-black-40"},Ct={class:"text-sm md:text-base lg:flex lg:flex-wrap lg:justify-between"},St={class:"mb-4 lg:mb-0"},Vt={key:0,class:"flex space-x-3 w-full lg:w-auto"},qt=["src"],At={class:"text-tiny text-black-60"},Tt={class:"truncate"},zt={class:"col-span-2 sm:col-span-1 lg:col-span-1 lg:-ml-4 xl:ml-0"},It=$(()=>l("span",null,"檢舉該名使用者",-1)),jt=$(()=>l("span",null,"檢舉該名使用者",-1)),Bt={class:"marquee-type bg-tiffany"},Pt={ref:"marquee",class:"flex text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-black text-black tracking-[-1px] whitespace-nowrap overflow-x-auto scrollbar-none mb-6 lg:mb-10 leading-[1]"},Ut={class:"marquee space-x-4"},Mt={class:"text-stroke-black font-display uppercase"},Lt={class:"text-stroke-black font-display uppercase"},Rt={class:"marquee space-x-4"},Nt={class:"text-stroke-black font-display uppercase"},Dt={class:"text-stroke-black font-display uppercase"},Et={class:"container"},Ft={class:"mt-4 lg:mt-6"},Ht={class:"mb-4 lg:mb-6"},Gt=["src"],Ot={class:"space-y-6 lg:space-y-10"},Kt={class:"flex gap-4 font-black -mb-[18px] lg:-mb-[33px] pt-8 lg:pt-[42px]"},Qt={class:"text-lg sm:text-2xl lg:text-4xl"},Wt={class:"list-disc text-base px-6 space-y-4 lg:-mt-16 lg:w-3/4 hidden lg:block lg:opacity-0"},Jt={class:"list-disc text-base px-6 lg:px-0 space-y-4 mt-6 lg:mt-4 lg:w-2/3 lg:absolute lg:top-0"},{setIsLoading:X}=_e(),{toast:y}=he(),Xt={data(){return{commentSeatArea:"",concertId:"",commentContent:"",images:[],checkPolicy:!0,openCommentModal:!1,accordionItems:[]}},props:["id"],inject:["http","path"],methods:{hoverTitle(n){n.currentTarget.childNodes.forEach((e,i)=>{i!==1&&e.classList.remove("hidden","collapse-left","collapse-right"),i===0?e.classList.add("collapse-left","show"):i===2&&e.classList.add("collapse-right","show")})},removeHoverTitle(n){n.currentTarget.childNodes.forEach((e,i)=>{i!==1&&e.classList.remove("w-auto","collapse-left","collapse-right","show"),i===0?e.classList.add("collapse-left"):i===2&&e.classList.add("collapse-right")})},readURL(n){if(n.target.files&&n.target.files[0]){if(n.target.files.length>3){y({title:"圖片最多3張",description:""});return}for(let e=0;e<n.target.files.length;e++){const i=new FileReader;if(n.target.files[e].size>3*1024**2){y({title:"圖片不得超過3MB",description:""});return}i.onload=function(m){document.querySelector("#commentImage"+(e+1)).setAttribute("src",m.target.result)},i.readAsDataURL(n.target.files[e])}this.images=[...n.target.files]}},handleFileButton(){document.querySelector("#commentPictures").click()},onSubmit(n){n.preventDefault(),this.postComment()},postComment(){if(this.concertId===""){y({title:"請選擇演唱會",description:""});return}if(this.commentSeatArea===""){y({title:"請選擇座位區",description:""});return}if(this.commentContent===""){y({title:"請輸入評論",description:""});return}if(!this.checkPolicy){y({title:"請先勾選同意評論規範",description:""});return}const n={concert_id:this.concertId,seat_area:this.commentSeatArea,comment:this.commentContent,images:this.images};this.images.length===0&&delete n.images,X(),ge.post(`${this.path.venues}/${this.$route.params.id}/comment`,n).then(e=>{this.resetComment(),y({title:"已新增評論",description:""}),this.getVenue(this.$route.params.id),this.openCommentModal=!1}).catch(e=>{console.error(e)}).finally(()=>{X()})},resetComment(){this.concertId="",this.commentSeatArea="",this.commentContent="",this.images=[]},showCommentPolicy(){y({title:"評論規範",description:"(1)請勿留言不實評論 (2)請物留言惡意評論 (3)請勿留言腥羶色內容。請注意警告五次將被永久停權。"})},openModal(n){this.openCommentModal=n,n===!1&&this.resetComment()},handleMarQuee(){this.$refs.marquee.childNodes.forEach(e=>{e.textContent.length<=90&&e.textContent.length>60?e.style.animationDuration="80s":e.textContent.length<=120&&e.textContent.length>90&&(e.style.animationDuration="90s")})},activeArea(n){this.seatArea=n},...be(P,["getVenue","reportUser"])},computed:{...L(P,["venue","pagination","filterSeatComment","transportation"]),...L(xe,["AccessToken"]),...ve(P,["seatArea"])},watch:{id(n){this.getVenue(n),this.seatArea=""},concertId(n){}},mounted(){this.getVenue(this.id)},updated(){document.querySelectorAll(".accordion-button").forEach(e=>{var i;((i=e==null?void 0:e.dataset)==null?void 0:i.state)==="open"&&(e==null||e.click())})}},Yt=Object.assign(Xt,{__name:"VenueSingleView",setup(n){return(e,i)=>{var v;const m=Q("font-awesome-icon"),p=Q("router-link");return r(),u(_,null,[l("div",{class:"w-full h-[400px] md:h-[460px] lg:h-[600px] 2xl:h-[700px] bg-no-repeat bg-cover absolute top-0 -z-10 bg-bottom shadow",style:ye(`background-image: url(${(v=e.venue.picture)==null?void 0:v.horizontal})`)},null,4),l("section",Fe,[l("main",He,[l("div",Ge,[l("h1",Oe,d(e.venue.title),1),l("div",Ke,d(e.venue.address),1),l("div",{class:"hidden lg:grid grid-cols-3 text-lg text-center text-black-40",onMouseover:i[0]||(i[0]=(...o)=>e.hoverTitle&&e.hoverTitle(...o)),onMouseleave:i[1]||(i[1]=(...o)=>e.removeHoverTitle&&e.removeHoverTitle(...o))},[l("div",Qe,d(e.venue.seat_amount)+" 席次",1),l("div",We,d(e.venue.eng_title),1),l("div",Je,d(e.venue.address),1)],32)]),a(W,{class:"flex justify-center"},{subTitle:s(()=>[c(" VENUES ")]),mainTitle:s(()=>[c(" 場地體驗 ")]),_:1}),l("div",Xe,[l("article",Ye,[Ze,l("div",et,[(r(!0),u(_,null,g(e.venue.seat_areas,(o,h)=>(r(),u("div",{onClick:x=>e.activeArea(o),key:`${h+123}`,class:S(["text-[12px] md:text-base lg:text-lg gradient-border flex justify-center items-center transition-transform hover:-translate-x-1 hover:-translate-y-1",o===e.seatArea?"active":""])},[l("p",null,d(o),1)],10,tt))),128))])]),l("div",st,[l("div",at,[a(t(B),{modelValue:e.seatArea,"onUpdate:modelValue":i[2]||(i[2]=o=>e.seatArea=o)},{default:s(()=>[a(t(A),{class:"w-2/3 sm:w-1/3 border-2 text-white border-black-40 hover:text-black hover:bg-white hover:box-shadow-light1-hover focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 rounded-btn1"},{default:s(()=>[a(t(T),{placeholder:"座位區"})]),_:1}),a(t(z),null,{default:s(()=>[a(t(I),null,{default:s(()=>[a(t(j),null,{default:s(()=>[c("座位區")]),_:1}),a(t(C),{value:"all"},{default:s(()=>[c(" 全部座位區 ")]),_:1}),(r(!0),u(_,null,g(e.venue.seat_areas,o=>(r(),f(t(C),{value:o,key:o},{default:s(()=>[c(d(o),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),l("div",lt,[e.AccessToken===void 0?(r(),f(t(K),{key:0},{default:s(()=>[a(t(R),{"as-child":""},{default:s(()=>[a(t(b),{variant:"white-outline",class:"rounded-full p-2 hover:bg-pink hover:text-primary hover:box-shadow-pink-blur-hover hover:border-pink hover:text-white"},{default:s(()=>[a(m,{icon:"fa-solid fa-plus",class:"text-xl size-6"})]),_:1})]),_:1}),a(t(O),null,{default:s(()=>[a(t(N),null,{default:s(()=>[a(t(D),null,{default:s(()=>[c("登入才能進行評論 ᓫ(°⌑°)ǃ")]),_:1}),a(t(E))]),_:1}),a(t(F),null,{default:s(()=>[a(t(H),null,{default:s(()=>[c("取消")]),_:1}),a(t(G),{asChild:""},{default:s(()=>[a(p,{to:"/login"},{default:s(()=>[c(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(r(),f(t(Ae),{key:1,open:e.openCommentModal,"onUpdate:open":e.openModal},{default:s(()=>[a(t(ke),{"as-child":""},{default:s(()=>[a(t(b),{variant:"white-outline",class:"rounded-full p-2 hover:bg-pink hover:text-primary hover:box-shadow-pink-blur-hover hover:border-pink hover:text-white"},{default:s(()=>[a(m,{icon:"fa-solid fa-plus",class:"text-xl size-6"})]),_:1})]),_:1}),a(t(qe),{class:"max-w-sm md:max-w-3xl"},{default:s(()=>[a(t(we),{class:"mb-6"},{default:s(()=>[a(t($e),null,{default:s(()=>[c("留下評論")]),_:1}),a(t(Ce),null,{default:s(()=>[ot]),_:1})]),_:1}),l("form",{onSubmit:i[7]||(i[7]=(...o)=>e.onSubmit&&e.onSubmit(...o)),class:"space-y-6 lg:space-y-10",ref:"modalForm"},[l("div",nt,[a(t(q),{for:"seat-select",class:"absolute text-white bg-black-85 border-black-85 border rounded-md pl-6 pr-20 -z-10 py-2 px-3"},{default:s(()=>[c("座位區")]),_:1}),a(t(B),{modelValue:e.commentSeatArea,"onUpdate:modelValue":i[3]||(i[3]=o=>e.commentSeatArea=o),id:"seat-select"},{default:s(()=>[a(t(A),{class:"ml-[7rem] border-white w-[220px] md:w-full"},{default:s(()=>[a(t(T),{placeholder:"選取座位區"})]),_:1}),a(t(z),null,{default:s(()=>[a(t(I),null,{default:s(()=>[a(t(j),null,{default:s(()=>[c("選取座位區")]),_:1}),(r(!0),u(_,null,g(e.venue.seat_areas,o=>(r(),f(t(C),{value:o,key:o},{default:s(()=>[c(d(o),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),l("div",it,[a(t(q),{for:"concert-select",class:"absolute text-white bg-black-85 border-black-85 border rounded-md pl-6 pr-20 -z-10 py-2 px-3"},{default:s(()=>[c("演唱會")]),_:1}),a(t(B),{id:"concert-select",modelValue:e.concertId,"onUpdate:modelValue":i[4]||(i[4]=o=>e.concertId=o)},{default:s(()=>[a(t(A),{class:"ml-[7rem] border-white w-[220px] md:w-full"},{default:s(()=>[a(t(T),{placeholder:"選取演唱會"})]),_:1}),a(t(z),null,{default:s(()=>[a(t(I),null,{default:s(()=>[a(t(j),null,{default:s(()=>[c("選取演唱會")]),_:1}),(r(!0),u(_,null,g(e.venue.concerts,o=>(r(),f(t(C),{value:o.id.toString(),key:o.id},{default:s(()=>[c(d(o.title)+" ",1),l("time",rt,d(o.holding_time.split(" ")[0]),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),l("div",null,[l("div",dt,[a(t(q),{for:"commentPictures",class:"absolute text-white bg-black-85 border-black-85 border rounded-md pl-6 pr-20 -z-10 py-2 px-3"},{default:s(()=>[c("評論圖片")]),_:1}),l("input",{id:"commentPictures",multiple:"",class:"hidden",type:"file",accept:"image/png, image/jpeg",onChange:i[5]||(i[5]=(...o)=>e.readURL&&e.readURL(...o))},null,32),a(t(b),{type:"button",class:"ml-[7rem] border-white border w-[220px] md:w-full rounded-md justify-start text-sm px-3",onClick:e.handleFileButton},{default:s(()=>[e.images.length?(r(),u("span",ut,"已選擇"+d(e.images.length)+"個檔案",1)):(r(),u("span",ct,"未選擇任何檔案"))]),_:1},8,["onClick"])]),l("div",pt,[mt,l("div",ft,[e.images[0]?(r(),u("img",_t)):k("",!0),e.images[1]?(r(),u("img",ht)):k("",!0),e.images[2]?(r(),u("img",gt)):k("",!0)])])]),l("div",null,[a(t(Le),{modelValue:e.commentContent,"onUpdate:modelValue":i[6]||(i[6]=o=>e.commentContent=o),placeholder:"留下你的評論..."},null,8,["modelValue"])]),a(t(Se),{class:"justify-center sm:justify-center flex-col sm:flex-col space-y-2"},{default:s(()=>[l("div",bt,[a(t(b),{for:"commentPolicy",type:"button",class:"text-sm text-black-60 text-right cursor-pointer px-0",onClick:e.showCommentPolicy},{default:s(()=>[c("送出即代表您同意遵守評論規範")]),_:1},8,["onClick"])]),l("div",vt,[a(t(Ve),{"as-child":""},{default:s(()=>[a(t(b),{type:"button",size:"base",class:"bg-black-80 hover:bg-black-80 px-14 md:px-14 lg:px-14"},{default:s(()=>[c("取消")]),_:1})]),_:1}),a(t(b),{variant:"tiffany-fill",size:"base",type:"submit",class:"px-14 md:px-14 lg:px-14"},{default:s(()=>[c("送出評論")]),_:1})])]),_:1})],544)]),_:1})]),_:1},8,["open","onUpdate:open"]))])]),a(t(Te),{class:"lg:h-[350px]"},{default:s(()=>[(r(!0),u(_,null,g(e.filterSeatComment,(o,h)=>(r(),u("div",{key:o.id,class:S(["grid grid-cols-12 gap-x-3 border-b border-black-60 py-4 min-h-[150px]",{"border-t":h===0}])},[l("div",yt,[l("img",{src:o.user.profile_image_url,alt:o.user.name,class:"rounded-full size-8 bg-white/25 object-cover"},null,8,xt)]),l("div",kt,[l("div",wt,[l("span",null,d(o.user.name),1),l("span",$t,d(o.seat_area),1)]),l("div",Ct,[l("p",St,d(o.comment),1),o.images.length?(r(),u("div",Vt,[(r(!0),u(_,null,g(o.images,(x,Y)=>(r(),u("img",{key:Y,src:x,alt:"",class:"size-20 object-cover rounded-xl"},null,8,qt))),128))])):k("",!0)]),l("div",At,[l("p",Tt,d(o.concert.title),1),l("time",null,d(o.created_at),1)])]),l("div",zt,[a(t(Be),null,{default:s(()=>[a(t(Pe),{"as-child":""},{default:s(()=>[a(t(b),{variant:"ghost",class:"p-1"},{default:s(()=>[a(t(Me))]),_:1})]),_:1}),a(t(Ue),null,{default:s(()=>[e.AccessToken===void 0?(r(),f(t(K),{key:0},{default:s(()=>[a(t(R),{"as-child":""},{default:s(()=>[a(t(b),{class:"justify-between w-full"},{default:s(()=>[It,a(t(J))]),_:1})]),_:1}),a(t(O),null,{default:s(()=>[a(t(N),null,{default:s(()=>[a(t(D),null,{default:s(()=>[c("登入才能檢舉 ᓫ(°⌑°)ǃ")]),_:1}),a(t(E))]),_:1}),a(t(F),null,{default:s(()=>[a(t(H),null,{default:s(()=>[c("取消")]),_:1}),a(t(G),{asChild:""},{default:s(()=>[a(p,{to:"/login"},{default:s(()=>[c(" 前往登入 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(r(),f(t(b),{key:1,onClick:x=>e.reportUser(o.user.name),class:"justify-between w-full"},{default:s(()=>[jt,a(t(J))]),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)])],2))),128))]),_:1})])])])]),l("div",null,[l("div",Bt,[l("div",Pt,[l("p",Ut,[l("span",null,d(e.venue.title),1),l("span",Mt,d(e.venue.eng_title),1),l("span",null,d(e.venue.title),1),l("span",Lt,d(e.venue.eng_title),1)]),l("p",Rt,[l("span",null,d(e.venue.title),1),l("span",Nt,d(e.venue.eng_title),1),l("span",null,d(e.venue.title),1),l("span",Dt,d(e.venue.eng_title),1)])],512)])]),l("section",Et,[a(W,{class:"overflow-x-hidden"},{subTitle:s(()=>[c(" TRANSPORT ")]),mainTitle:s(()=>[c(" 交通方式 ")]),_:1}),l("div",Ft,[l("div",Ht,[l("iframe",{src:e.venue.map_link,frameborder:"0",class:"w-full h-[375px] md:h-[600px] rounded-md"},null,8,Gt)]),l("div",Ot,[a(t(Re),{type:"single",collapsible:""},{default:s(()=>[(r(!0),u(_,null,g(e.transportation,o=>(r(),f(t(De),{class:"lg:relative border-b-4",key:o.type,value:o.value},{default:s(()=>[a(t(Ee),{hideIcon:!0,value:o.value,class:"accordion-button hover:no-underline"},{default:s(()=>[l("div",Kt,[a(t(ze),{class:"size-10 lg:size-16 pb-2 sm:pb-0 lg:pb-2"}),l("span",Qt,d(o.type),1)])]),_:2},1032,["value"]),a(t(Ne),{class:"lg:flex lg:justify-end"},{default:s(()=>[l("ul",Wt,[(r(!0),u(_,null,g(o.info,(h,x)=>(r(),u("li",{key:x},d(h),1))),128))]),l("ul",Jt,[(r(!0),u(_,null,g(o.info,(h,x)=>(r(),u("li",{key:x},d(h),1))),128))])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})])])])],64)}}}),is=fe(Yt,[["__scopeId","data-v-c208ffd6"]]);export{is as default};
