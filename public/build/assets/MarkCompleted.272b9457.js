import{u as p,o as m,d,a,i as n,y as u,f as t}from"./app.4a7e69ff.js";const b={__name:"MarkCompleted",props:{task:Object},setup(c){const s=c;let o=p({completed:s.task.completed}),l=()=>{o.patch(route("task.completed",s.task.id),{preserveScroll:!0,preserveState:!0})};return(i,e)=>(m(),d("div",null,[a("form",{onClick:e[1]||(e[1]=(...r)=>t(l)&&t(l)(...r))},[n(a("input",{id:"completed",name:"completed","onUpdate:modelValue":e[0]||(e[0]=r=>t(o).completed=r),type:"checkbox",class:"checkbox checkbox-primary checkbox-sm"},null,512),[[u,t(o).completed]])])]))}};export{b as default};