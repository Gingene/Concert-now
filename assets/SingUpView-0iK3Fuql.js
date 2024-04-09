import{t as p,o as c,s as o,_ as u}from"./vee-validate-zod.esm-hXRjwxI7.js";import{u as l}from"./vee-validate.esm-DPQ1WQoG.js";import{K as d,L as f,e as _,y as h,M as g,N as S,o as q}from"./index-EVngkGWf.js";import"./CardTitle-8ywkyuIH.js";import"./CardDescription-xBEKyoJD.js";import"./CardContent-5to5pBbv.js";import"./Label-dkdGK6TG.js";import"./PopoverContent-wad6YX8p.js";const j={__name:"SingUpView",setup(y){const{toast:t}=d(),a=f(),m=p(c({name:o({required_error:"必填"}).min(3,{message:"名稱至少3個字"}).max(20,{message:"需要少於20個字"}),email:o({required_error:"必填"}).email("信箱格式不正確"),password:o({required_error:"必填"}).min(8,{message:"密碼至少為8碼"}),confirm:o({required_error:"必填"})}).refine(e=>e.password===e.confirm,{message:"密碼不相符",path:["confirm"]})),s=l({validationSchema:m}),n=e=>{g.post(S.register,e).then(r=>{t({title:"註冊成功！可以去登入了ヽ(●´∀`●)ﾉ"}),a.push({name:"login"})}).catch(()=>{t({title:"註冊失敗，請再次確認資料是否正確。"}),alert("註冊失敗！")})},i=s.handleSubmit(e=>{const r={...e};delete r.confirm,n(r),s.resetForm()});return(e,r)=>(q(),_(u,{defaultPage:"signup",onMethod:h(i)},null,8,["onMethod"]))}};export{j as default};