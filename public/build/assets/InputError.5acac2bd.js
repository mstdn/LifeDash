import{r as l,l as i,o as u,d as r,i as p,v as c,a as m,t as d}from"./app.7ae5ce4e.js";const _=["value"],v={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(t,{expose:a}){const e=l(null);return i(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),a({focus:()=>e.value.focus()}),(n,s)=>(u(),r("input",{ref_key:"input",ref:e,class:"input input-bordered input-primary w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white",value:t.modelValue,onInput:s[0]||(s[0]=o=>n.$emit("update:modelValue",o.target.value))},null,40,_))}},f={class:"text-sm text-red-600"},h={__name:"InputError",props:{message:String},setup(t){return(a,e)=>p((u(),r("div",null,[m("p",f,d(t.message),1)],512)),[[c,t.message]])}};export{v as _,h as a};
