import{_ as y,aw as k,af as $,ag as V,c as u,a as l,b as e,w as s,u as a,F as d,r as _,o as r,E as p,D as f,h,t as m,G as x,ai as C,aj as B,ak as j,A as S,I as z,K as A,L as T,d as q}from"./index-bAjc-hai.js";import{a as E,b as P,_ as I}from"./CardTitle-rtSV0wSb.js";import{_ as L}from"./CardDescription-NlyM7kMd.js";import{_ as N}from"./CardContent-fijCNJEn.js";import{_ as F}from"./CardFooter-gjHhK0j_.js";import{_ as R,a as H,b as D,c as Z,d as K}from"./PaginationPrev-aPU_JqDp.js";import{a as M,b as U,_ as G,c as O}from"./AccordionTrigger-XLzBpyZw.js";import{_ as X}from"./BannerComponent-hsKlSrVc.js";import{T as J}from"./TitleComponent-Tx5uq7X5.js";import{u as v}from"./venues-4cFwr4bN.js";import"./more-horizontal-bCTm9HMx.js";import"./chevron-right-CNeymuCM.js";const w=n=>(A("data-v-7e6b7f1a"),n=n(),T(),n),Q={class:"container relative"},W={class:"space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-60”"},Y={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},ee={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"},te=["src","alt"],ae={class:"text-tiny"},se=w(()=>l("span",{class:"text-sm lg:text-base"},"查看評論",-1)),ie={class:"pt-[20px] md:pt-[58px] lg:pt-[117px] pb-[128px] lg:pb-[192px]"},oe={class:"container"},le={class:"flex space-x-10 font-black"},ne={class:"-mb-[48px] pt-2 lg:pt-[42px]"},re=["src","alt"],ce=w(()=>l("div",{class:"bg-black-100 h-[50px] relative z-10"},null,-1)),ue={data(){return{cities:["台北市","新北市","台中市","高雄市"],bannerInputPlaceholder:"輸入場地/縣市名稱",accordionItems:[{value:"item-1",id:1,title:"台北國際會議中心TICC",city:"台北市",picture:{horizontal:"https://www.ticc.com.tw/wSite/xslgip/style1/images/sp13/section_14.jpg",square:"https://lh3.googleusercontent.com/p/AF1QipPsHmLZ2gTtSxCtqT4HGPFRNloBKRqX0q6rtpzy=w1080-h608-p-no-v0"}},{value:"item-2",id:2,title:"Zepp New Taipei",city:"新北市",picture:{horizontal:"https://www.richhonour.com/images/project/commercial/c22/3.jpg",square:"https://www.heavenraven.com/wp-content/uploads/2020/10/Zepp-New-Taipei-director-%E6%9C%AC%E5%A4%9A%E7%9C%9F%E4%B8%80%E9%83%8E-interview-13.jpg"}},{value:"item-3",id:3,title:"台北流行音樂中心",city:"台北市",picture:{horizontal:"https://tmc.taipei/wp-content/uploads/2022/01/DSC05413.jpg",square:"https://www.travel.taipei/image/193182"}},{value:"item-4",id:4,title:"高雄流行音樂中心",city:"高雄市",picture:{horizontal:"https://www.musicmusic.com.tw/domain/www/upload/file/210420172132f2710.jpg",square:"https://www.habitech.com.tw/storage/2022/02/MAI_4137.jpg"}},{value:"item-5",id:5,title:"Legacy Taichung",city:"台中市",picture:{horizontal:"https://res.klook.com/image/upload/x_0,y_5,w_1042,h_678,c_crop/events/hubpage/etskq5ygkmrgugmur71w.jpg",square:"https://live.staticflickr.com/4663/25588455987_993fd71bb0_b.jpg"}},{value:"item-6",id:6,title:"台北小巨蛋",city:"台北市",picture:{horizontal:"https://s3.beautimode.com/upload/media/9019eeb78c5c4a27f44317e3d804750b.jpg",square:"https://i.imgur.com/VTeXfKF.jpeg"}}],defaultValue:"item-1"}},inject:["http","path"],methods:{debounceClick:k(function(n){n==null||n.currentTarget.click()},1e3),simulatorAccordionButtonHover(n,i){n.addEventListener(i,this.debounceClick)},installAccordionButtonHover(){document.querySelectorAll(".accordionButton").forEach(i=>{this.simulatorAccordionButtonHover(i,"mouseover")})},...$(v,["getVenues","getVenue","getVenuesByCity","searchVenues","getVenuesByPage","resetState"])},computed:{...V(v,["venues","pagination","searchPage"])},mounted(){this.getVenues()},updated(){this.installAccordionButtonHover()},unmounted(){this.resetState()}},pe=Object.assign(ue,{__name:"VenuesView",setup(n){return(i,c)=>{const g=q("RouterLink");return r(),u(d,null,[l("section",Q,[e(X,{"prop-placeholder":i.bannerInputPlaceholder,onSearchMethod:i.searchVenues},{mainTitle:s(()=>[p("VENUES")]),_:1},8,["prop-placeholder","onSearchMethod"]),l("main",W,[l("div",null,[l("div",Y,[e(a(f),{variant:"tiffany-outline",size:"base",class:"me-4 city-button active",onClick:c[0]||(c[0]=t=>i.getVenuesByCity("",t))},{default:s(()=>[p(" 全部 ")]),_:1}),(r(!0),u(d,null,_(i.cities,t=>(r(),h(a(f),{key:t.id,variant:"tiffany-outline",size:"base",onClick:o=>i.getVenuesByCity(t,o),class:"city-button"},{default:s(()=>[p(m(t),1)]),_:2},1032,["onClick"]))),128))])]),l("ul",ee,[(r(!0),u(d,null,_(i.venues,t=>(r(),u("li",{key:t.id},[e(a(I),{class:"border-black-60"},{default:s(()=>[e(a(E),{class:"rounded-t-2xl space-y-0 p-0"},{default:s(()=>[e(g,{to:`/venues/${t.id}`},{default:s(()=>[l("img",{src:t.picture.square,alt:t.title,class:"aspect-square rounded-2xl object-cover min-w-full"},null,8,te)]),_:2},1032,["to"]),e(a(P),{class:"border-x-2 pt-6 px-6 border-black-60 text-base lg:text-lg"},{default:s(()=>[e(g,{to:`/venues/${t.id}`},{default:s(()=>[p(m(t.title),1)]),_:2},1032,["to"])]),_:2},1024),e(a(L),{class:"hidden"})]),_:2},1024),e(a(N),{class:"border-x-2 border-black-60 text-black-60 pt-2"},{default:s(()=>[l("div",ae,m(t.city),1)]),_:2},1024),e(a(F),{class:"text-end border-x-2 border-b-2 border-black-60 rounded-b-2xl"},{default:s(()=>[e(g,{to:`/venues/${t.id}`},{default:s(()=>[e(a(f),{variant:"white-outline",size:"base",onClick:o=>i.getVenue(t.id)},{default:s(()=>[se,e(a(x),{class:"size-6 ms-2 lg:ms-4"})]),_:2},1032,["onClick"])]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))]),e(a(j),{total:i.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:s(()=>[e(a(C),{class:"flex items-center justify-center gap-1"},{default:s(({items:t})=>[e(a(R),{onClick:c[1]||(c[1]=o=>i.getVenuesByPage(1))}),e(a(H),{onClick:c[2]||(c[2]=o=>i.getVenuesByPage(i.pagination.current_page-1))}),(r(!0),u(d,null,_(t,(o,b)=>(r(),u(d,null,[o.type==="page"?(r(),h(a(B),{key:b,value:o.value,"as-child":""},{default:s(()=>[e(a(f),{class:"w-10 h-10 p-0",variant:i.searchPage===o.value?"default":"outline",onClick:de=>i.getVenuesByPage(o.value)},{default:s(()=>[p(m(o.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(r(),h(a(D),{key:o.type,index:b},null,8,["index"]))],64))),256)),e(a(Z),{onClick:c[3]||(c[3]=o=>i.getVenuesByPage(i.pagination.current_page+1))}),e(a(K),{onClick:c[4]||(c[4]=o=>i.getVenuesByPage(i.pagination.total_pages))})]),_:1})]),_:1},8,["total"])])]),l("section",ie,[l("div",null,[e(J,{class:"flex justify-center"},{subTitle:s(()=>[p(" POPULAR ")]),mainTitle:s(()=>[p(" VENUES ")]),_:1})]),l("div",oe,[e(a(O),{type:"single",collapsible:""},{default:s(()=>[(r(!0),u(d,null,_(i.accordionItems,(t,o)=>(r(),h(a(G),{class:"lg:relative",key:t.id,value:t.value},{default:s(()=>[e(a(M),{hideIcon:!0,class:"accordionButton bg-black-100 hover:text-black-100 hover:bg-white",value:t.id},{default:s(()=>[l("div",le,[e(a(S),{class:"size-10 lg:size-16"}),l("span",ne,m(t.title),1)])]),_:2},1032,["value"]),e(a(U),{class:"lg:flex lg:justify-end"},{default:s(()=>[e(g,{to:`/venues/${t.id}`},{default:s(()=>[l("img",{src:t.picture.horizontal,alt:t.title,class:"h-[300px] lg:absolute lg:-top-[200px] object-cover right-[20px]",style:z({right:`${o*20}px`})},null,12,re)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),ce])])],64)}}}),xe=y(pe,[["__scopeId","data-v-7e6b7f1a"]]);export{xe as default};
