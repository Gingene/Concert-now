import{v as O,k as j}from"./vee-validate.esm-b1yLca2Y.js";/**
  * vee-validate v4.12.5
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */const a={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,kz:/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},c={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,kz:/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},f={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,kz:/^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},$={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,kz:/^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i},y=r=>{if(r)return Array.isArray(r)?r[0]:r.locale};function o(r,e){return Array.isArray(r)?r[0]:r[e]}function s(r){return!!(r==null||r===""||Array.isArray(r)&&r.length===0)}const m=(r,e)=>{if(s(r))return!0;const t=y(e);if(Array.isArray(r))return r.every(i=>m(i,{locale:t}));const n=String(r);return t?(a[t]||a.en).test(n):Object.keys(a).some(i=>a[i].test(n))},h=(r,e)=>{if(s(r))return!0;const t=y(e);if(Array.isArray(r))return r.every(i=>h(i,{locale:t}));const n=String(r);return t?($[t]||$.en).test(n):Object.keys($).some(i=>$[i].test(n))},p=(r,e)=>{if(s(r))return!0;const t=y(e);if(Array.isArray(r))return r.every(i=>p(i,{locale:t}));const n=String(r);return t?(f[t]||f.en).test(n):Object.keys(f).some(i=>f[i].test(n))},_=(r,e)=>{if(s(r))return!0;const t=y(e);if(Array.isArray(r))return r.every(i=>_(i,{locale:t}));const n=String(r);return t?(c[t]||c.en).test(n):Object.keys(c).some(i=>c[i].test(n))};function R(r){return Array.isArray(r)?{min:r[0],max:r[1]}:r}const b=(r,e)=>{if(s(r))return!0;const{min:t,max:n}=R(e);if(Array.isArray(r))return r.every(u=>b(u,{min:t,max:n}));const i=Number(r);return Number(t)<=i&&Number(n)>=i},D=(r,e)=>{const t=o(e,"target");return String(r)===String(t)},x=(r,e)=>{if(s(r))return!0;const t=o(e,"length");if(Array.isArray(r))return r.every(i=>x(i,{length:t}));const n=String(r);return/^[0-9]*$/.test(n)&&n.length===Number(t)},F=(r,e,t)=>{const n=window.URL||window.webkitURL;return new Promise(i=>{const u=new Image;u.onerror=()=>i(!1),u.onload=()=>i(u.width===e&&u.height===t),u.src=n.createObjectURL(r)})};function q(r){return r?Array.isArray(r)?{width:Number(r[0]),height:Number(r[1])}:{width:Number(r.width),height:Number(r.height)}:{width:0,height:0}}const B=(r,e)=>{if(s(r))return!0;const{width:t,height:n}=q(e),i=[],u=Array.isArray(r)?r:[r];for(let A=0;A<u.length;A++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(u[A].name))return Promise.resolve(!1);i.push(u[A])}return Promise.all(i.map(A=>F(A,t,n))).then(A=>A.every(z=>z))},d=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,L=r=>s(r)?!0:Array.isArray(r)?r.every(e=>d.test(String(e))):d.test(String(r)),P=(r,e)=>{if(s(r))return!0;const t=new RegExp(`\\.(${e.join("|")})$`,"i");return Array.isArray(r)?r.every(n=>t.test(n.name)):t.test(r.name)},U=r=>{if(s(r))return!0;const e=/\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;return Array.isArray(r)?r.every(t=>e.test(t.name)):e.test(r.name)},C=r=>s(r)?!0:Array.isArray(r)?r.every(e=>/^-?[0-9]+$/.test(String(e))):/^-?[0-9]+$/.test(String(r)),I=(r,e)=>{const t=o(e,"other");return r===t},M=(r,e)=>{const t=o(e,"other");return r!==t},T=(r,e)=>{if(s(r))return!0;const t=o(e,"length");return typeof r=="number"&&(r=String(r)),r.length||(r=Array.from(r)),r.length===Number(t)},V=(r,e)=>{if(s(r))return!0;const t=o(e,"length");return Array.isArray(r)?r.every(n=>V(n,{length:t})):[...String(r)].length<=Number(t)},S=(r,e)=>{if(s(r))return!0;const t=o(e,"max");return Array.isArray(r)?r.length>0&&r.every(n=>S(n,{max:t})):Number(r)<=Number(t)},Z=/\+(.+)?/;function G(r){let e=r;return Z.test(r)&&(e=r.replace(Z,"(\\+$1)?")),new RegExp(e.replace("*",".+"),"i")}const H=(r,e)=>{if(s(r))return!0;e||(e=[]);const t=e.map(G);return Array.isArray(r)?r.every(n=>t.some(i=>i.test(n.type))):t.some(n=>n.test(r.type))},N=(r,e)=>{if(s(r))return!0;const t=o(e,"length");return Array.isArray(r)?r.every(n=>N(n,{length:t})):[...String(r)].length>=Number(t)},k=(r,e)=>{if(s(r))return!0;const t=o(e,"min");return Array.isArray(r)?r.length>0&&r.every(n=>k(n,{min:t})):Number(r)>=Number(t)},g=(r,e)=>s(r)?!0:Array.isArray(r)?r.every(t=>g(t,e)):Array.from(e).some(t=>t==r),J=(r,e)=>s(r)?!0:!g(r,e),K=/^[٠١٢٣٤٥٦٧٨٩]+$/,Q=/^[0-9]+$/,W=r=>{if(s(r))return!0;const e=t=>{const n=String(t);return Q.test(n)||K.test(n)};return Array.isArray(r)?r.every(e):e(r)},E=(r,e)=>{if(s(r))return!0;let t=o(e,"regex");return typeof t=="string"&&(t=new RegExp(t)),Array.isArray(r)?r.every(n=>E(n,{regex:t})):t.test(String(r))};function X(r){return r==null}function Y(r){return Array.isArray(r)&&r.length===0}const w=r=>r!==null&&!!r&&typeof r=="object"&&!Array.isArray(r),v=r=>X(r)||Y(r)||r===!1?!1:!!String(r).trim().length,rr=(r,e)=>{if(s(r))return!0;let t=o(e,"size");if(t=Number(t),isNaN(t))return!1;const n=t*1024;if(!Array.isArray(r))return r.size<=n;for(let i=0;i<r.length;i++)if(r[i].size>n)return!1;return!0},tr=(r,e)=>{var t;if(s(r))return!0;let n=o(e,"pattern");typeof n=="string"&&(n=new RegExp(n));try{new URL(r)}catch{return!1}return(t=n==null?void 0:n.test(r))!==null&&t!==void 0?t:!0};function er(r){return Object.keys(r)}function nr(r){return{__type:"VVTypedSchema",async parse(t){if(typeof r=="string")return{errors:[{errors:(await O(t,r)).errors}]};const n=await j(r,t);return{errors:er(n.errors).map(i=>{var u;return{path:i,errors:((u=n.results[i])===null||u===void 0?void 0:u.errors)||[]}})}},describe(t){return t?w(r)&&t in r?l(r[t]):{required:!1,exists:!1}:l(r)}}}function l(r){return typeof r=="string"?{exists:!0,required:r.includes("required")}:w(r)?{exists:!0,required:!!r.required}:{required:!1,exists:!0}}const sr=Object.freeze(Object.defineProperty({__proto__:null,alpha:m,alpha_dash:h,alpha_num:p,alpha_spaces:_,between:b,confirmed:D,digits:x,dimensions:B,email:L,ext:P,image:U,integer:C,is:I,is_not:M,length:T,max:V,max_value:S,mimes:H,min:N,min_value:k,not_one_of:J,numeric:W,one_of:g,regex:E,required:v,size:rr,toTypedSchema:nr,url:tr},Symbol.toStringTag,{value:"Module"}));export{sr as A,h as a,W as n,v as r,rr as s,tr as u};