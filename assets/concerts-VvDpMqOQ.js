import{j as x,al as u,ak as h,aZ as S,ag as m,aC as $}from"./index-Hxe7G9cU.js";import{h as d}from"./moment-WSJ9un1t.js";const k=()=>{let t;const e=x(null);return{state:t,err:e,timeCountryFilter:async(o,s="",r="",y=1)=>{const g=s==="本日"?"day":s==="本週"?"week":"month",b=d().startOf(g).format("YYYY-MM-DD"),v=d().endOf(g).format("YYYY-MM-DD"),c=o==="concerts"?u.concerts:u.artists;let i="";const p=`&start=${b}&end=${v}`,f=`&country=${r}`,l=`&page=${y}`;return s!==""&&r!==""?i=c+"?"+p+f+l:s!==""&&r===""?i=c+"?"+p+l:r!==""&&s===""?i=c+"?"+f+l:i=c+"?"+l,new Promise((w,C)=>{h.get(i).then(a=>{console.log(a),t=a.data,w(t)}).catch(a=>{console.log(a),e.value=a,C(e)})})}}};function Y(){return{swalWithStylingButtons:S.mixin({customClass:{popup:"px-6 py-10 rounded-md bg-black-90 text-white text-nowrap",confirmButton:"mt-4 mr-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-[3px] border-tiffany bg-tiffany text-primary p-2 md:py-2 md:px-4 lg:py-2 lg:px-6 rounded-btn1",cancelButton:"mt-4 ml-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-[3px] border-black-80 bg-black-80 text-primary text-white p-2 md:py-2 md:px-4 lg:py-2 lg:px-6 rounded-btn1"},buttonsStyling:!1})}}const{timeCountryFilter:B}=k(),{getUserSavedAndFollowed:P}=m(),{swalWithStylingButtons:D}=Y(),U=$("concerts",{state:()=>({concerts:[],singleConcert:{},pagination:{},timeFactor:"",countryFactor:"",pageFactor:""}),actions:{getConcerts(t,e,n=1){t==="time"&&(e==="all"?this.timeFactor="":this.timeFactor=e),t==="country"&&(e==="all"?this.countryFactor="":this.countryFactor=e),this.pageFactor=n,B("concerts",this.timeFactor,this.countryFactor,this.pageFactor).then(o=>{this.concerts=o.data,this.pagination=o.pagination})},getSingleConcert(t){h.get(`${u.concerts}/${t}`).then(e=>{this.singleConcert=e.data.data}).catch(e=>{console.log(e)})},saveUnSavedConcert(t,e){h[t](`${u.concerts}/${e}/${t==="post"?"save":"unsave"}`).then(n=>{console.log(n)}).then(()=>{P()}).catch(n=>{console.log(n)})},callSaveAction(t){const{savedConcerts:e,AccessToken:n}=m();if(n===void 0){D.fire({title:"登入後才能用收藏功能喔！",showCancelButton:!0,confirmButtonText:"前往登入"}).then(o=>{o.isConfirmed&&(window.location.href="login#/login")});return}[...e].some(o=>o.id===t)?this.saveUnSavedConcert("delete",t):this.saveUnSavedConcert("post",t)}}});export{Y as a,U as u};
