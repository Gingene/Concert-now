import{_ as V,aJ as B,y as j,z,c as d,a as i,b as t,w as a,u as s,F as m,r as g,o as n,E as p,B as h,g as w,t as _,aA as T,ap as A,aq as S,ar as q,A as k,D as x,I as P,J as E,d as $}from"./index-WU9oAnbs.js";import{a as I,b as F,_ as L}from"./CardTitle-SLosMO5w.js";import{_ as N}from"./CardDescription-jRdsY2Dj.js";import{_ as R}from"./CardContent-Z330j6fZ.js";import{_ as H}from"./CardFooter-B3OftZQp.js";import{_ as D,a as Z,b as J,c as M,d as K}from"./PaginationPrev-ETJwK-sZ.js";import{_ as O}from"./BannerComponent-bS-ZaGEm.js";import{T as U}from"./TitleComponent-x3FXibZW.js";import{a as X,b as G,_ as Q}from"./HoverCardContent-Gw-SfsWz.js";import{u as C}from"./venues-MvkPl0QX.js";import{a as W}from"./aos-Z4Voj8e5.js";import"./more-horizontal-Lgz2fTTo.js";const b=l=>(P("data-v-3812d113"),l=l(),E(),l),Y={class:"container relative"},ee={class:"space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-40"},te={class:"space-y-4 space-x-4 space-x-reverse -m-1 p-1"},se={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"},ae=["src","alt"],oe={class:"text-tiny"},ie=b(()=>i("span",{class:"text-sm"},"查看評論",-1)),le={class:"pt-[20px] md:pt-[58px] lg:pt-[117px] pb-[128px] lg:pb-[192px]"},re={class:"container"},ne=["value"],ce={class:"text-4xl -mb-[10px] lg:-mb-[15px] bg-black-100 hover:bg-white pt-8 lg:pt-[42px] flex space-x-10"},de=b(()=>i("div",{class:"border-t-4 border-t-white border-b-[8px] border-b-black w-full"},null,-1)),pe=["src","alt"],ue={class:"flex flex-col lg:hidden font-black"},me={class:"text-base xs:text-lg sm:text-2xl flex gap-0 xs:gap-2"},_e=["src","alt"],ge=b(()=>i("div",{class:"border-t-4 border-t-white w-full border-b-4 border-b-black-100"},null,-1)),he=b(()=>i("div",{class:"bg-black-400 h-[6px] relative z-10"},null,-1)),be={data(){return{cities:["台北市","新北市","台中市","高雄市"],bannerInputPlaceholder:"輸入場地/縣市名稱",accordionItems:[{value:"item-1",id:1,title:"台北國際會議中心TICC",city:"台北市",picture:{horizontal:"https://www.ticc.com.tw/wSite/xslgip/style1/images/sp13/section_14.jpg",square:"https://lh3.googleusercontent.com/p/AF1QipPsHmLZ2gTtSxCtqT4HGPFRNloBKRqX0q6rtpzy=w1080-h608-p-no-v0"}},{value:"item-2",id:2,title:"Zepp New Taipei",city:"新北市",picture:{horizontal:"https://www.richhonour.com/images/project/commercial/c22/3.jpg",square:"https://www.heavenraven.com/wp-content/uploads/2020/10/Zepp-New-Taipei-director-%E6%9C%AC%E5%A4%9A%E7%9C%9F%E4%B8%80%E9%83%8E-interview-13.jpg"}},{value:"item-3",id:3,title:"台北流行音樂中心",city:"台北市",picture:{horizontal:"https://tmc.taipei/wp-content/uploads/2022/01/DSC05413.jpg",square:"https://www.travel.taipei/image/193182"}},{value:"item-4",id:4,title:"Legacy Taichung",city:"台中市",picture:{horizontal:"https://res.klook.com/image/upload/x_0,y_5,w_1042,h_678,c_crop/events/hubpage/etskq5ygkmrgugmur71w.jpg",square:"https://live.staticflickr.com/4663/25588455987_993fd71bb0_b.jpg"}},{value:"item-5",id:5,title:"高雄流行音樂中心",city:"高雄市",picture:{horizontal:"https://www.musicmusic.com.tw/domain/www/upload/file/210420172132f2710.jpg",square:"https://www.habitech.com.tw/storage/2022/02/MAI_4137.jpg"}},{value:"item-6",id:6,title:"台北小巨蛋",city:"台北市",picture:{horizontal:"https://s3.beautimode.com/upload/media/9019eeb78c5c4a27f44317e3d804750b.jpg",square:"https://i.imgur.com/VTeXfKF.jpeg"}}],defaultValue:"item-1"}},inject:["http","path"],methods:{ThrottleClick:B(function(l){l==null||l.currentTarget.click()},1e3),simulatorAccordionButtonHover(l,o){l.addEventListener(o,this.ThrottleClick)},installAccordionButtonHover(){document.querySelectorAll(".accordionButton").forEach(o=>{this.simulatorAccordionButtonHover(o,"mouseover")})},...j(C,["getVenues","getVenue","getVenuesByCity","searchVenues","getVenuesByPage","resetState"])},computed:{...z(C,["venues","pagination","searchPage"])},mounted(){this.getVenues(),W.init()},updated(){this.installAccordionButtonHover()},unmounted(){this.resetState()}},fe=Object.assign(be,{__name:"VenuesView",setup(l){return(o,c)=>{const f=$("RouterLink"),v=$("router-link");return n(),d(m,null,[i("section",Y,[t(O,{"prop-placeholder":o.bannerInputPlaceholder,onSearchMethod:o.searchVenues},{mainTitle:a(()=>[p("VENUES")]),_:1},8,["prop-placeholder","onSearchMethod"]),i("main",ee,[i("div",null,[i("div",te,[t(s(h),{variant:"tiffany-outline",size:"base",class:"me-4 city-button active",onClick:c[0]||(c[0]=e=>o.getVenuesByCity("",e))},{default:a(()=>[p(" 全部 ")]),_:1}),(n(!0),d(m,null,g(o.cities,e=>(n(),w(s(h),{key:e.id,variant:"tiffany-outline",size:"base",onClick:u=>o.getVenuesByCity(e,u),class:"city-button"},{default:a(()=>[p(_(e),1)]),_:2},1032,["onClick"]))),128))])]),i("ul",se,[(n(!0),d(m,null,g(o.venues,e=>(n(),d("li",{key:e.id},[t(s(L),{class:"border-black-80"},{default:a(()=>[t(s(I),{class:"rounded-t-2xl space-y-0 p-0"},{default:a(()=>[t(f,{to:`/venues/${e.id}`},{default:a(()=>[i("img",{src:e.picture.square,alt:e.title,class:"brightness-90 aspect-square rounded-2xl h-[18rem] xs:h-[26rem] sm:h-[20rem] md:h-[15rem] lg:h-[20rem] object-cover min-w-full"},null,8,ae)]),_:2},1032,["to"]),t(s(F),{class:"border-x-2 pt-6 px-6 border-black-80 text-base lg:text-lg"},{default:a(()=>[t(f,{to:`/venues/${e.id}`},{default:a(()=>[p(_(e.title),1)]),_:2},1032,["to"])]),_:2},1024),t(s(N),{class:"hidden"})]),_:2},1024),t(s(R),{class:"border-x-2 border-black-80 text-black-60 pt-2"},{default:a(()=>[i("div",oe,_(e.city),1)]),_:2},1024),t(s(H),{class:"text-end border-x-2 border-b-2 border-black-80 rounded-b-2xl"},{default:a(()=>[t(f,{to:`/venues/${e.id}`},{default:a(()=>[t(s(h),{variant:"white-outline",size:"base2",onClick:u=>o.getVenue(e.id),class:"border-black-80 hover:border-white"},{default:a(()=>[ie,t(s(T),{class:"size-6 ms-2 lg:ms-4"})]),_:2},1032,["onClick"])]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))]),t(s(q),{page:o.searchPage,total:o.pagination.total_pages*10,"sibling-count":1,"show-edges":"","default-page":1},{default:a(({page:e})=>[t(s(A),{class:"flex items-center justify-center gap-1 pt-16"},{default:a(({items:u})=>[t(s(D),{onClick:c[1]||(c[1]=r=>o.getVenuesByPage(1))}),t(s(Z),{onClick:c[2]||(c[2]=r=>o.getVenuesByPage(o.pagination.current_page-1))}),(n(!0),d(m,null,g(u,(r,y)=>(n(),d(m,null,[r.type==="page"?(n(),w(s(S),{key:y,value:r.value,"as-child":""},{default:a(()=>[t(s(h),{class:"w-10 h-10 p-0",variant:r.value===e?"default":"outline",onClick:we=>o.getVenuesByPage(r.value,e),disabled:r.value===e},{default:a(()=>[p(_(r.value),1)]),_:2},1032,["variant","onClick","disabled"])]),_:2},1032,["value"])):(n(),w(s(J),{key:r.type,index:y},null,8,["index"]))],64))),256)),t(s(M),{onClick:c[3]||(c[3]=r=>o.getVenuesByPage(o.pagination.current_page+1))}),t(s(K),{onClick:c[4]||(c[4]=r=>o.getVenuesByPage(o.pagination.total_pages))})]),_:2},1024)]),_:1},8,["page","total"])])]),i("section",le,[i("div",null,[t(U,{class:"flex justify-center mb-8"},{subTitle:a(()=>[p(" POPULAR ")]),mainTitle:a(()=>[p(" 熱門場地 ")]),_:1})]),i("div",re,[(n(!0),d(m,null,g(o.accordionItems,(e,u)=>(n(),d("div",{key:e.id,value:e.value},[t(s(Q),{openDelay:200},{default:a(()=>[t(s(X),{class:"hidden lg:flex flex-col bg-black-100 hover:text-black-100 hover:bg-white font-black",value:e.id},{default:a(()=>[i("div",ce,[t(s(k),{class:"size-16 pb-2"}),i("span",null,_(e.title),1)]),de]),_:2},1032,["value"]),t(s(G),{class:"w-[400px] h-full relative border-0 bg-transparent shadow-none"},{default:a(()=>[t(v,{to:`/venues/${e.id}`},{default:a(()=>[i("img",{"data-aos":"fade-up",src:e.picture.horizontal,alt:e.title,class:"w-[400px] h-[250px] object-cover absolute bottom-12 rounded-md",style:x({left:`${70-u*12}%`})},null,12,pe)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024),i("div",ue,[i("div",{class:"flex items-end justify-between pt-4 gap-2 xs:gap-4",style:x({"flex-direction":`${u%2==1?"row-reverse":"row"}`})},[t(v,{to:`/venues/${e.id}`},{default:a(()=>[i("div",me,[p(_(e.title)+" ",1),t(s(k),{class:"pb-2 sm:pb-0 size-10"})])]),_:2},1032,["to"]),i("img",{src:e.picture.horizontal,alt:e.title,class:"w-[220px] h-[130px] md:w-[350px] md:h-[170px] object-cover rounded-md"},null,8,_e)],4),ge])],8,ne))),128)),he])])],64)}}}),Se=V(fe,[["__scopeId","data-v-3812d113"]]);export{Se as default};
