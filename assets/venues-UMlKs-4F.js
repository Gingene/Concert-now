import{ac as o,ao as r,aa as n,ab as i,ae as c,aZ as h}from"./index-8EEsLggX.js";const{setIsLoading:s}=o(),g=r("venues",{state:()=>({venueInfo:[],venues:[],venue:{},pagination:{},seatArea:"",searchText:"",city:"",searchPage:1}),actions:{getVenueInfo(){n.get(`${i.venues}?comments=1`).then(e=>{this.venueInfo=e.data.data}).catch(e=>{console.error(e)})},getVenues(e=1){s(),n.get(`${i.venues}?page=${e}`).then(t=>{window.scroll(0,0),this.venues=t.data.data,this.pagination=t.data.pagination}).catch(t=>{console.error(t)}).finally(()=>{s()})},getVenuesByCity(e,t){this.city=e,this.activeButton(t),this.page=1,s(),this.searchVenues(this.searchText,1),setTimeout(()=>{s()},500)},getVenuesByPage(e){s(),this.searchVenues(this.searchText,e),setTimeout(()=>{s()},600)},activeButton(e){document.querySelectorAll(".city-button").forEach(a=>a.classList.remove("active")),e.target.classList.add("active")},getVenue(e){s(),n.get(`${i.venues}/${e}`).then(t=>{this.venue=t.data.data}).catch(t=>{console.error(t)}).finally(()=>{setTimeout(()=>{s()},100)})},searchVenues:c(function(e,t=1){this.searchText=e,this.searchPage=t,n.get(`${i.venues}/?q=${e}&city=${this.city}&page=${t}`).then(a=>{this.venues=a.data.data,this.pagination=a.data.pagination}).catch(a=>{console.error(a)})},300),resetState(){this.searchText="",this.city="",this.searchPage=1},reportUser(e){h({title:`已檢舉該使用者${e}`,description:""})}},getters:{filterSeatComment(){return this.seatArea==="all"||this.seatArea===""?this.venue.comments:this.venue.comments.filter(e=>e.seat_area===this.seatArea)},transportation(){var e;return(e=this.venue.transportation)==null?void 0:e.map((t,a)=>({...t,value:`item-${a+1}`}))}}});export{g as u};
