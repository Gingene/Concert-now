import{ac as j,ad as L,ae as q,u as t,o as d,c as u,K as N,a0 as U,y as R,_ as D,af as M,ag as E,a3 as B,a4 as H,ah as F,a as e,n as P,t as r,b as a,w as o,F as p,r as _,k as c,h,ai as O,l as v,aj as K,ak as W,al as G,am as J,D as Q,an as X,ao as Y,i as Z,A as ee,d as se,a9 as te,aa as le}from"./index-gVOA7aRD.js";import{_ as A}from"./Label-3yqybE_N.js";import{_ as ae}from"./ScrollArea-gsgnUsde.js";import{_ as y,a as x,b as w,c as k,d as V,e as b,f as S}from"./SelectLabel-OY-vXJBS.js";import{a as oe,b as ne,_ as ie,c as re}from"./AccordionTrigger-l3ib-_nz.js";import{T as C}from"./TitleComponent-XjA0QFdN.js";import{u as $}from"./venues-DrOq8zNK.js";import{M as de}from"./more-horizontal-j7FBjEI2.js";import"./check-RoihOutX.js";const ce={__name:"Textarea",props:{class:{type:null,required:!1},defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],setup(i,{emit:s}){const n=i,g=j(n,"modelValue",s,{passive:!0,defaultValue:n.defaultValue});return(l,m)=>L((d(),u("textarea",{"onUpdate:modelValue":m[0]||(m[0]=f=>N(g)?g.value=f:null),class:U(t(R)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n.class))},null,2)),[[q,t(g)]])}},T=i=>(te("data-v-b06ab6e2"),i=i(),le(),i),ue={class:"container pb-20 lg:pb-32 pt-[400px] md:pt-[600px] lg:pt-[850px] space-y-6 lg:space-y-10"},pe={class:"text-center"},me={class:"text-2xl font-display lg:text-3xl 2xl:text-5xl font-black"},_e={class:"space-y-6 lg:space-y-10"},fe={class:"py-6 lg:hidden text-center"},ge={class:"collapse-left py-6"},he={class:"col-start-2 py-6"},be={class:"collapse-right py-6"},ve={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},ye={class:"lg:order-2 flex items-center"},xe=["src","alt"],we={class:"space-y-6 lg:space-y-10 box-shadow-light2 p-6 lg:p-10 rounded-btn2 col-span-2"},ke={class:"flex justify-between border-black-0 border-b-2 pb-6 lg:pb-10"},Ve={class:"text-center"},Se=T(()=>e("span",null,"留下評論",-1)),$e={class:"flex items-center"},Te={class:"flex items-center"},Ie=T(()=>e("div",{class:"border-y border-l border-white whitespace-nowrap py-2 px-10 lg:py-3 rounded-btn1 -mr-8"},"演唱會",-1)),Ae={class:"flex items-center mb-4"},Ce=T(()=>e("div",{class:"space-y-4"},[e("span",null,"圖片至多可傳三張"),e("div",{class:"flex space-x-4"},[e("img",{id:"commentImage1",class:"size-[120px]",src:"http://placehold.it/120",alt:"your image"}),e("img",{id:"commentImage2",class:"size-[120px]",src:"http://placehold.it/120",alt:"your image"}),e("img",{id:"commentImage3",class:"size-[120px]",src:"http://placehold.it/120",alt:"your image"})])],-1)),ze={class:"col-span-2 sm:col-span-1"},je=["src","alt"],Le={class:"col-span-8 sm:col-span-9 md:col-span-10 flex flex-col space-y-4"},qe={class:"space-x-3"},Ne={class:"text-black-40"},Ue={class:"text-sm md:text-base flex flex-wrap md:justify-between"},Re={class:"mb-4 md:mb-0"},De={key:0,class:"flex space-x-3 w-full md:w-auto"},Me=["src"],Ee={class:"text-tiny truncate"},Be={class:"text-tiny"},He={class:"col-span-2 md:col-span-1"},Fe={class:"marquee-type bg-tiffany"},Pe={class:"flex text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] font-black text-black tracking-widest whitespace-nowrap overflow-x-auto marquee scrollbar-none mb-6 lg:mb-10 leading-[1]"},Oe={class:"marquee space-x-8"},Ke={class:"text-stroke-black font-display uppercase"},We={class:"marquee space-x-8"},Ge={class:"text-stroke-black font-display uppercase"},Je={class:"container"},Qe={class:"mt-4 lg:mt-6"},Xe={class:"mb-4 lg:mb-6"},Ye=["src"],Ze={class:"space-y-6 lg:space-y-10"},es={class:"flex space-x-10 font-black"},ss={class:"-mb-8 pt-2 lg:pt-8"},ts={class:"list-disc px-6 space-y-4 -mt-12 lg:w-3/4 lg:opacity-0"},ls={class:"list-disc px-6 space-y-4 mt-2 lg:w-3/4 lg:absolute lg:top-0"},{setIsLoading:z}=M(),as={data(){return{commentSeatArea:"",concertId:"",commentContent:""}},props:["id"],inject:["http","path"],methods:{hoverTitle(i){i.currentTarget.childNodes.forEach((s,n)=>{n!==1&&s.classList.remove("hidden","collapse-left","collapse-right"),n===0?s.classList.add("collapse-left","show"):n===2&&s.classList.add("collapse-right","show")})},removeHoverTitle(i){i.currentTarget.childNodes.forEach((s,n)=>{n!==1&&s.classList.remove("w-auto","collapse-left","collapse-right","show"),n===0?s.classList.add("collapse-left"):n===2&&s.classList.add("collapse-right")})},readURL(i){if(console.log(i.target.files),i.target.files&&i.target.files[0]){const s=new FileReader;console.log(s),s.onload=function(n){console.log(n),document.querySelector("#commentImage1").setAttribute("src",n.target.result),document.querySelector("#commentImage2").setAttribute("src",n.target.result),document.querySelector("#commentImage3").setAttribute("src",n.target.result)},s.readAsDataURL(...i.target.files)}},onSubmit(i){i.preventDefault(),console.dir(i.target),this.postComment()},postComment(){const i={concert_id:this.concertId,seat_area:this.commentSeatArea,comment:this.commentContent};z(),E.post(`${this.path.venues}/${this.concertId}/comment`,i).then(s=>{console.log(s),this.getVenue()}).catch(s=>{console.log(s)}).finally(()=>{z()})},...B($,["getVenue"])},computed:{...H($,["venue","pagination","filterSeatComment"]),...F($,["seatArea"])},watch:{id(i){this.getVenue(i)}},mounted(){this.getVenue(this.id)}},os=Object.assign(as,{__name:"VenueSingleView",setup(i){return(s,n)=>{var g;const I=se("font-awesome-icon");return d(),u(p,null,[e("div",{class:"w-full h-[400px] md:h-[600px] lg:h-[850px] bg-no-repeat bg-cover absolute top-0 -z-10 bg-center 2xl:bg-bottom",style:P(`background-image: url(${(g=s.venue.picture)==null?void 0:g.horizontal})`)},null,4),e("section",ue,[e("div",pe,[e("h2",me,r(s.venue.title),1)]),e("main",_e,[e("div",fe,r(s.venue.address),1),e("div",{class:"hidden lg:grid grid-cols-3 text-lg text-center",onMouseover:n[0]||(n[0]=(...l)=>s.hoverTitle&&s.hoverTitle(...l)),onMouseleave:n[1]||(n[1]=(...l)=>s.removeHoverTitle&&s.removeHoverTitle(...l))},[e("div",ge,r(s.venue.seat_amount)+" 席次",1),e("div",he,r(s.venue.eng_title),1),e("div",be,r(s.venue.address),1)],32),a(C,{class:"flex justify-center"},{subTitle:o(()=>[c(" VENUES ")]),mainTitle:o(()=>[c(" 場地體驗 ")]),_:1}),e("div",ve,[e("div",ye,[e("img",{src:s.venue.seat_picture,alt:s.venue.title,class:"w-full"},null,8,xe)]),e("div",we,[e("div",ke,[a(t(S),{modelValue:s.seatArea,"onUpdate:modelValue":n[2]||(n[2]=l=>s.seatArea=l)},{default:o(()=>[a(t(y),{class:"w-1/3 border-0 text-primary bg-pink box-shadow-pink-blur box-shadow-pink-blur-hover focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 lg:py-6 lg:px-8 rounded-btn1"},{default:o(()=>[a(t(x),{placeholder:"座位區"})]),_:1}),a(t(w),null,{default:o(()=>[a(t(k),null,{default:o(()=>[a(t(V),null,{default:o(()=>[c("座位區")]),_:1}),a(t(b),{value:"all"},{default:o(()=>[c(" 全部座位區 ")]),_:1}),(d(!0),u(p,null,_(s.venue.seat_areas,l=>(d(),h(t(b),{value:l,key:l},{default:o(()=>[c(r(l),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",Ve,[a(t(Y),null,{default:o(()=>[a(t(O),{"as-child":""},{default:o(()=>[a(t(v),{variant:"ghost",class:"space-x-4 md:text-lg lg:text-xl"},{default:o(()=>[Se,a(I,{icon:"fa-solid fa-plus"})]),_:1})]),_:1}),a(t(K),{class:"p-12"},{default:o(()=>[a(t(W),{class:"mb-6"},{default:o(()=>[a(t(G),null,{default:o(()=>[c("留下評論")]),_:1}),a(t(J))]),_:1}),e("form",{onSubmit:n[6]||(n[6]=(...l)=>s.onSubmit&&s.onSubmit(...l)),class:"space-y-6 lg:space-y-10"},[e("div",$e,[a(t(A),{class:"border-y border-l border-white whitespace-nowrap py-2 px-10 lg:py-3 rounded-btn1 -mr-10"},{default:o(()=>[c("座位區")]),_:1}),a(t(S),{modelValue:s.commentSeatArea,"onUpdate:modelValue":n[3]||(n[3]=l=>s.commentSeatArea=l)},{default:o(()=>[a(t(y),{class:"border-0 bg-black-80 focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 lg:py-6 lg:px-8 rounded-btn1"},{default:o(()=>[a(t(x),{placeholder:"選取座位區"})]),_:1}),a(t(w),null,{default:o(()=>[a(t(k),null,{default:o(()=>[a(t(V),null,{default:o(()=>[c("選取座位區")]),_:1}),(d(!0),u(p,null,_(s.venue.seat_areas,l=>(d(),h(t(b),{value:l,key:l},{default:o(()=>[c(r(l),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),e("div",Te,[Ie,a(t(S),{modelValue:s.concertId,"onUpdate:modelValue":n[4]||(n[4]=l=>s.concertId=l)},{default:o(()=>[a(t(y),{class:"border-0 bg-black-80 focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 lg:py-6 lg:px-8 rounded-btn1"},{default:o(()=>[a(t(x),{placeholder:"選取演唱會"})]),_:1}),a(t(w),null,{default:o(()=>[a(t(k),null,{default:o(()=>[a(t(V),null,{default:o(()=>[c("選取演唱會")]),_:1}),(d(!0),u(p,null,_(s.venue.concerts,l=>(d(),h(t(b),{value:l.id.toString(),key:l.id},{default:o(()=>[c(r(l.title),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),e("div",null,[e("div",Ae,[a(t(A),{for:"commentPicture",class:"border-y border-l border-white whitespace-nowrap py-2 px-10 lg:py-3 rounded-btn1 -mr-8"},{default:o(()=>[c("評論圖片")]),_:1}),a(t(Q),{id:"commentPicture",multiple:"",placeholder:"選擇檔案",class:"border-0 bg-black-80 h-10 lg:h-12 rounded-btn1",type:"file",accept:"image/png, image/jpeg",onChange:s.readURL},null,8,["onChange"])]),Ce]),e("div",null,[a(t(ce),{modelValue:s.commentContent,"onUpdate:modelValue":n[5]||(n[5]=l=>s.commentContent=l)},null,8,["modelValue"])]),a(t(X),{class:"justify-center sm:justify-center"},{default:o(()=>[a(t(v),{variant:"tiffany-blur"},{default:o(()=>[c("送出評論")]),_:1})]),_:1})],32)]),_:1})]),_:1})])]),a(t(ae),{class:"lg:h-[280px] xl:h-[350px] 2xl:h-[500px]"},{default:o(()=>[(d(!0),u(p,null,_(s.filterSeatComment,l=>(d(),u("div",{key:l.id,class:"grid grid-cols-12 gap-x-4 min-h-[150px] mt-6"},[e("div",ze,[e("img",{src:l.user.profile_image_url,alt:l.user.name,class:"rounded-full size-8 2xl:size-12"},null,8,je)]),e("div",Le,[e("div",qe,[e("span",null,r(l.user.name),1),e("span",Ne,r(l.seat_area),1)]),e("div",Ue,[e("p",Re,r(l.comment),1),l.images.length?(d(),u("div",De,[(d(!0),u(p,null,_(l.images,(m,f)=>(d(),u("img",{key:f,src:m,alt:""},null,8,Me))),128))])):Z("",!0)]),e("div",Ee,[e("span",null,r(l.concert.title),1)]),e("div",Be,[e("span",null,r(l.created_at),1)])]),e("div",He,[a(t(v),{variant:"ghost",class:"p-1"},{default:o(()=>[a(t(de))]),_:1})])]))),128))]),_:1})])])])]),e("div",null,[e("div",Fe,[e("div",Pe,[e("p",Oe,[e("span",null,r(s.venue.title),1),e("span",Ke,r(s.venue.eng_title),1)]),e("p",We,[e("span",null,r(s.venue.title),1),e("span",Ge,r(s.venue.eng_title),1)])])])]),e("section",Je,[a(C,{class:"overflow-x-hidden"},{subTitle:o(()=>[c(" TRANSPORT ")]),mainTitle:o(()=>[c(" 交通方式 ")]),_:1}),e("div",Qe,[e("div",Xe,[e("iframe",{src:s.venue.map_link,frameborder:"0",class:"w-full h-[375px] md:h-[600px] grayscale"},null,8,Ye)]),e("div",Ze,[(d(!0),u(p,null,_(s.venue.transportation,l=>(d(),h(t(re),{key:l.type,type:"single",collapsible:""},{default:o(()=>[a(t(ie),{value:"item-1",class:"lg:relative"},{default:o(()=>[a(t(oe),{hideIcon:!0},{default:o(()=>[e("div",es,[a(t(ee),{class:"size-10 lg:size-16"}),e("span",ss,r(l.type),1)])]),_:2},1024),a(t(ne),{class:"lg:flex lg:justify-end"},{default:o(()=>[e("ul",ts,[(d(!0),u(p,null,_(l.info,(m,f)=>(d(),u("li",{key:f},r(m),1))),128))]),e("ul",ls,[(d(!0),u(p,null,_(l.info,(m,f)=>(d(),u("li",{key:f},r(m),1))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])])])],64)}}}),fs=D(os,[["__scopeId","data-v-b06ab6e2"]]);export{fs as default};
