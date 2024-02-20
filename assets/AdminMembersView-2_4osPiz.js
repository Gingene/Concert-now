import{c as _,a as d,b as t,u as e,w as l,j as s,t as r,af as h,ag as p,F as g,o,S as T,r as w,h as b}from"./index-6jqG1WDG.js";import{_ as v,a as x,b as $,c as y,d as V,e as c,f as S}from"./SelectLabel-mOV3FxFl.js";import{_ as D,a as k,b as m,c as j,d as f,e as B}from"./TableRow-G8loN_hN.js";import{_ as U}from"./TableCaption-dfv-mkZT.js";const F={class:"flex gap-6 mt-3 mb-8 relative"},N={class:"w-[36%] lg:w-[290px] relative pt-8 lg:pt-6"},M=d("span",{class:"material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"}," search ",-1),A={class:"w-[20%] lg:w-[250px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5"},C=d("label",{for:"status",class:"pt-2 font-semibold lg:w-[50%]"}," 會員狀態 ",-1),E={class:"w-[33%] lg:w-[330px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5"},I=d("label",{for:"member-time",class:"pt-2 font-semibold lg:w-[50%]"},"加入會員時間",-1),L={class:"mb-4 pl-2"},O=d("strong",null,"會員人數: ",-1),q={key:0,class:"material-symbols-outlined mr-1"},z={key:1,class:"material-symbols-outlined mr-1 text-violet-800"},G={class:"flex justify-center py-12"},H=d("h2",null,"哇! 找不到資料~",-1),J=[H],K={data(){return{searchText:"",selectStatus:"全部",selectTime:"",changeFilter:"true",filteredUsers:[],users:[{id:1,username:"小明",email:"01@gamail.com",status:"啟用中",created_at:"2022-01-05",warning_list:[]},{id:2,username:"明明",email:"02@gamail.com",status:"啟用中",created_at:"2020-05-06",warning_list:["不實評論","惡意評論","腥羶色內容","不實評論","不實評論"]},{id:3,username:"小華",email:"03@gamail.com",status:"停權中",created_at:"2020-03-06",warning_list:["不實評論","惡意評論","腥羶色內容"]},{id:4,username:"小壯",email:"04@gamail.com",status:"停權中",created_at:"2020-03-29",warning_list:["不實評論","惡意評論","腥羶色內容"]},{id:5,username:"阿嬌",email:"05@gamail.com",status:"啟用中",created_at:"2023-07-15",warning_list:["不實評論","惡意評論"]}],jointimes:[{id:1,time:"2023/01-2023/02"},{id:2,time:"2023/02-2023/03"},{id:3,time:"2023/03-2023/04"},{id:4,time:"2023/04-2023/05"},{id:5,time:"2023/05-2023/06"}]}},computed:{filteredData(){const u=this.searchText,i=this.selectStatus;return u?this.users.filter(n=>n.username.match(u)||n.email.match(u)):i==="全部"?this.users:this.users.filter(n=>{let a=!0;return i&&i.length>0&&(a=n.status===i),a})},filterSelect(){const u=this.selectStatus;return u==="全部"?this.users:this.users.filter(i=>{let n=!0;return u&&u.length>0&&(n=i.status===u),n})}},mounted(){}},X=Object.assign(K,{__name:"AdminMembersView",setup(u){return(i,n)=>(o(),_(g,null,[d("div",null,[d("div",F,[d("div",N,[t(e(T),{type:"text",placeholder:"請輸入姓名及信箱查詢",modelValue:i.searchText,"onUpdate:modelValue":n[0]||(n[0]=a=>i.searchText=a),modelModifiers:{trim:!0}},null,8,["modelValue"]),M]),d("div",A,[t(e(S),{modelValue:i.selectStatus,"onUpdate:modelValue":n[1]||(n[1]=a=>i.selectStatus=a)},{default:l(()=>[C,t(e(v),null,{default:l(()=>[t(e(x),{placeholder:"全部"})]),_:1}),t(e($),null,{default:l(()=>[t(e(y),null,{default:l(()=>[t(e(V),{class:"tracking-wide"},{default:l(()=>[s("會員狀態")]),_:1}),t(e(c),{value:"全部"},{default:l(()=>[s(" 全部 ")]),_:1}),t(e(c),{value:"啟用中"},{default:l(()=>[s(" 啟用中")]),_:1}),t(e(c),{value:"停權中"},{default:l(()=>[s("停權中")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d("div",E,[t(e(S),{modelValue:i.selectTime,"onUpdate:modelValue":n[2]||(n[2]=a=>i.selectTime=a)},{default:l(()=>[I,t(e(v),null,{default:l(()=>[t(e(x),{placeholder:"全部"})]),_:1}),t(e($),null,{default:l(()=>[t(e(y),null,{default:l(()=>[t(e(V),null,{default:l(()=>[s("加入會員時間")]),_:1}),t(e(c),{value:"全部"},{default:l(()=>[s(" 全部 ")]),_:1}),(o(!0),_(g,null,w(i.jointimes,a=>(o(),b(e(c),{key:a.id,value:a.time},{default:l(()=>[s(r(a.time),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),d("div",L,[O,s(" "+r(i.filteredData.length)+" 人",1)]),h(t(e(B),{class:"w-[700px] lg:w-full overflow-x-auto bg-white rounded-lg text-md mb-10"},{default:l(()=>[t(e(U),null,{default:l(()=>[s("會員管理")]),_:1}),t(e(D),null,{default:l(()=>[t(e(k),null,{default:l(()=>[t(e(m),{class:"w-[100px] font-semibold"},{default:l(()=>[s(" 名稱 ")]),_:1}),t(e(m),{class:"font-semibold"},{default:l(()=>[s("信箱")]),_:1}),t(e(m),{class:"font-semibold pl-6"},{default:l(()=>[s("會員狀態")]),_:1}),t(e(m),{class:"font-semibold"},{default:l(()=>[s(" 警告次數 ")]),_:1}),t(e(m),{class:"font-semibold"},{default:l(()=>[s(" 會員編號 ")]),_:1}),t(e(m),{class:"font-semibold"},{default:l(()=>[s(" 加入會員日期 ")]),_:1})]),_:1})]),_:1}),t(e(j),null,{default:l(()=>[(o(!0),_(g,null,w(i.filteredData,a=>(o(),b(e(k),{key:a.id},{default:l(()=>[t(e(f),{class:"font-medium"},{default:l(()=>[s(r(a.username),1)]),_:2},1024),t(e(f),null,{default:l(()=>[s(r(a.email),1)]),_:2},1024),t(e(f),{class:"flex items-center"},{default:l(()=>[a.status==="啟用中"?(o(),_("span",q," check_circle ")):(o(),_("span",z," warning ")),s(" "+r(a.status),1)]),_:2},1024),t(e(f),{class:"pl-10"},{default:l(()=>[s(r(a.warning_list.length),1)]),_:2},1024),t(e(f),{class:"pl-10"},{default:l(()=>[s(r(a.id),1)]),_:2},1024),t(e(f),null,{default:l(()=>[s(r(a.created_at),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},512),[[p,i.filteredData.length!==0]]),h(d("div",G,J,512),[[p,!i.filteredData.length]])],64))}});export{X as default};
