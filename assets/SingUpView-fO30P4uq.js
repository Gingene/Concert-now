import{t as _,o as y,s as n,_ as v}from"./vee-validate-zod.esm-j4hqhCuO.js";import{u as T}from"./vee-validate.esm--LFR-1UL.js";import{O as S,o as h,c as k,K as E,i as I,L as V,f as b,w as q,z as u,M as A,N as C,a as O,b as $}from"./index-OA7eRsB3.js";import"./CardTitle-4ekW0DDX.js";import"./CardDescription-X9Y_nHN4.js";import"./CardContent-DkCpGdCA.js";import"./CardFooter-ks-6Ywtp.js";import"./Label-DxfqfTBk.js";import"./PopoverContent-8yL7LCIz.js";const R="https://challenges.cloudflare.com/turnstile/v0/api.js",p="cfTurnstileOnLoad";let d=typeof window<"u"&&window.turnstile!==void 0?"ready":"unloaded",l;const j=S({name:"VueTurnstile",emits:["update:modelValue","error","unsupported"],props:{siteKey:{type:String,required:!0},modelValue:{type:String,required:!0},resetInterval:{type:Number,required:!1,default:295*1e3},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"auto"},language:{type:String,required:!1,default:"auto"},action:{type:String,required:!1,default:""},appearance:{type:String,required:!1,default:"always"},renderOnMount:{type:Boolean,required:!1,default:!0}},data(){return{resetTimeout:void 0,widgetId:void 0}},computed:{turnstileOptions(){return{sitekey:this.siteKey,theme:this.theme,language:this.language,size:this.size,callback:this.callback,action:this.action,appearance:this.appearance,"error-callback":this.errorCallback,"unsupported-callback":this.unsupportedCallback}}},methods:{unsupportedCallback(){this.$emit("unsupported")},errorCallback(t){this.$emit("error",t)},callback(t){this.$emit("update:modelValue",t),this.startResetTimeout()},reset(){window.turnstile&&(this.$emit("update:modelValue",""),window.turnstile.reset())},remove(){this.widgetId&&(window.turnstile.remove(this.widgetId),this.widgetId=void 0)},render(){this.widgetId=window.turnstile.render(this.$refs.turnstile,this.turnstileOptions)},startResetTimeout(){this.resetTimeout=setTimeout(()=>{this.reset()},this.resetInterval)}},async mounted(){const t=new Promise((r,e)=>{l={resolve:r,reject:e},d==="ready"&&r(void 0)});window[p]=()=>{l.resolve(),d="ready"},await(()=>{if(d==="unloaded"){d="loading";const r=`${R}?onload=${p}&render=explicit`,e=document.createElement("script");e.src=r,e.async=!0,e.addEventListener("error",()=>{l.reject("Failed to load Turnstile.")}),document.head.appendChild(e)}return t})(),this.renderOnMount&&this.render()},beforeUnmount(){this.remove(),clearTimeout(this.resetTimeout)}}),x=(t,r)=>{const e=t.__vccOpts||t;for(const[s,a]of r)e[s]=a;return e},B={ref:"turnstile"};function L(t,r,e,s,a,c){return h(),k("div",B,null,512)}const M=x(j,[["render",L]]);var P={VITE_APP_SERVICE_API:"https://concert-now.dewed.one",VITE_SITE_KEY:"0x4AAAAAAAW25_upzfHrgLyh",VITE_CLIENT_ID:"1025367409648-3obi0crdef5qos8cjpqnpm3l2se4j944.apps.googleusercontent.com",BASE_URL:"/Concert-now/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G={__name:"SingUpView",setup(t){const{VITE_SITE_KEY:r}=P,{toast:e}=E(),s=I(""),a=V(),c=_(y({name:n({required_error:"必填"}).min(3,{message:"名稱至少3個字"}).max(20,{message:"需要少於20個字"}),email:n({required_error:"必填"}).email("信箱格式不正確"),password:n({required_error:"必填"}).min(8,{message:"密碼至少為8碼"}),confirm:n({required_error:"必填"})}).refine(o=>o.password===o.confirm,{message:"密碼不相符",path:["confirm"]})),m=T({validationSchema:c}),f=o=>{A.post(C.register,{...o,token:s.value}).then(()=>{e({title:"註冊成功！可以去登入了ヽ(●´∀`●)ﾉ"}),a.push({name:"login"})}).catch(()=>{e({title:"註冊失敗，請再次確認資料是否正確。"}),alert("註冊失敗！")})},g=m.handleSubmit(o=>{const i={...o};delete i.confirm,f(i),m.resetForm()});return(o,i)=>(h(),b(v,{defaultPage:"signup",onMethod:u(g)},{default:q(()=>[O("div",null,[$(u(M),{theme:"dark","site-key":u(r),modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=w=>s.value=w)},null,8,["site-key","modelValue"])])]),_:1},8,["onMethod"]))}};export{G as default};
