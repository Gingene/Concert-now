import{_}from"./BannerComponent-XXq_h2SN.js";import{aa as u,ab as h,c as n,a as e,b as p,w as i,F as l,r,ac as f,o as a,y as m,a7 as g,t as c,h as x,d as b}from"./index-Hxe7G9cU.js";const v={class:"container relative"},w={class:"grid grid-flow-col"},y={class:"w-full flex gap-4 mb-3.5"},k=["onClick"],B={class:"py-5"},A={class:"w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"},I={class:"w-[81%] flex items-center"},O=["src","alt"],C={class:"ml-4"},S={class:"pr-3"},D={class:"text-lg md:text-xl"},T={class:"text-[13px] text-slate-500"},V={class:"text-[13px"},j={data(){return{activeBtnOneIndex:0,bannerInputPlaceholder:"請輸入表演者名稱",artists:[],countries:[{id:1,location:"全部"},{id:2,location:"日本"},{id:3,location:"韓國"},{id:4,location:"歐美"},{id:5,location:"其他"}]}},methods:{toggleBtnOne(o){this.activeBtnOneIndex=o},async getArtistsData(){try{const o=await u();this.artists=o.data.data}catch(o){console.log(o)}},searchArtists:h(async function(o){try{const s=await f(o);this.artists=s.data.data}catch(s){console.log(s)}},300)},mounted(){this.getArtistsData()}},$=Object.assign(j,{__name:"ArtistsView",setup(o){return(s,F)=>{const d=b("RouterLink");return a(),n("section",v,[e("div",w,[p(_,{"prop-placeholder":s.bannerInputPlaceholder,onSearchMethod:s.searchArtists},{mainTitle:i(()=>[m("ARTISTS")]),_:1},8,["prop-placeholder","onSearchMethod"])]),e("div",null,[e("div",y,[(a(!0),n(l,null,r(s.countries,t=>(a(),n("button",{class:g(["basic",[s.activeBtnOneIndex===t.id?"tiffany-blur-fill":"tiffany-blur"]]),onClick:L=>s.toggleBtnOne(t.id),key:t.id},c(t.location),11,k))),128))])]),e("div",B,[e("ul",A,[(a(!0),n(l,null,r(s.artists,t=>(a(),x(d,{to:`/artists/${t.id}`,class:"flex flex-row justify-between items-center p-2.5 md:border-[1px] rounded-2xl",key:t.id},{default:i(()=>[e("div",I,[e("img",{class:"size-[70px] object-cover rounded-full",src:t.cover_urls.square,alt:t.name},null,8,O),e("div",C,[e("div",S,[e("p",D,c(t.name),1),e("p",T,c(t.follower_count)+" fans",1)]),e("p",V,c(t.concert_count)+" concerts",1)])]),(a(),n("button",{class:"basic tiffany-outline",key:t.id},"follow"))]),_:2},1032,["to"]))),128))])])])}}});export{$ as default};
