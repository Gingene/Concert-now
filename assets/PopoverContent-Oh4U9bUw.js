import{P as c,o as l,f as u,w as r,Q as p,R as m,S as y,z as e,aW as q,aX as _,q as g,b as B,aY as P,U as b,V as h,aZ as w}from"./index-cUCwgEH4.js";const v={__name:"Popover",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(t,{emit:a}){const n=c(t,a);return(d,o)=>(l(),u(e(q),m(y(e(n))),{default:r(()=>[p(d.$slots,"default")]),_:3},16))}},z={__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const a=t;return(s,i)=>(l(),u(e(_),m(y(a)),{default:r(()=>[p(s.$slots,"default")]),_:3},16))}},$=Object.assign({inheritAttrs:!1},{__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1,default:4},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},updatePositionStrategy:{type:String,required:!1},onPlaced:{type:Function,required:!1},prioritizePosition:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss","openAutoFocus","closeAutoFocus"],setup(t,{emit:a}){const s=t,i=a,n=g(()=>{const{class:o,...f}=s;return f}),d=c(n,i);return(o,f)=>(l(),u(e(w),null,{default:r(()=>[B(e(P),b({...e(d),...o.$attrs},{class:e(h)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s.class)}),{default:r(()=>[p(o.$slots,"default")]),_:3},16,["class"])]),_:3}))}});export{z as _,$ as a,v as b};