import{M as y,o as i,h as u,w as o,N as n,O as _,P as q,u as e,aE as g,x as c,a as h,a8 as B,S as p,R as f,aF as b,aG as v,aH as w,b as m,aI as C,aJ as P,i as S,aK as $}from"./index-bAjc-hai.js";const V={__name:"Accordion",props:{type:{type:String,required:!0},modelValue:{type:[String,Array],required:!1},defaultValue:{type:[String,Array],required:!1},collapsible:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:a}){const s=y(t,a);return(d,x)=>(i(),u(e(g),_(q(e(s))),{default:o(()=>[n(d.$slots,"default")]),_:3},16))}},k={__name:"AccordionContent",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const a=t,l=c(()=>{const{class:r,...s}=a;return s});return(r,s)=>(i(),u(e(b),f(l.value,{class:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:o(()=>[h("div",{class:B(e(p)("pb-4 pt-0",a.class))},[n(r.$slots,"default")],2)]),_:3},16))}},I={__name:"AccordionItem",props:{disabled:{type:Boolean,required:!1},value:{type:String,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const a=t,l=c(()=>{const{class:s,...d}=a;return d}),r=v(l);return(s,d)=>(i(),u(e(w),f(e(r),{class:e(p)("border-b",a.class)}),{default:o(()=>[n(s.$slots,"default")]),_:3},16,["class"]))}},N={__name:"AccordionTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1},hideIcon:{type:Boolean,required:!1}},setup(t){const a=t,l=c(()=>{const{class:r,...s}=a;return s});return(r,s)=>(i(),u(e($),{class:"flex"},{default:o(()=>[m(e(C),f(l.value,{class:e(p)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a.class)}),{default:o(()=>[n(r.$slots,"default"),t.hideIcon?S("",!0):n(r.$slots,"icon",{key:0},()=>[m(e(P),{class:"h-4 w-4 shrink-0 transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}};export{I as _,N as a,k as b,V as c};
