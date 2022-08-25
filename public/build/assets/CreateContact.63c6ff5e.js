import{u as h,r as b,B as w,o as r,d as a,a as s,b as c,w as p,f as t,F as C,s as g,i as d,G as u,t as l,e as i,h as k}from"./app.7ae5ce4e.js";import{f as V,A as j,o as _,L as U,W as A}from"./transition.570b6f94.js";const B=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"10"}),s("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),s("line",{x1:"8",y1:"12",x2:"16",y2:"12"})],-1),F=k(" Contact "),N=[B,F],M=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),z={class:"fixed inset-0 overflow-y-auto"},D={class:"flex min-h-full items-center justify-center p-4 text-center"},E=s("h3",{class:"text-lg font-medium leading-6 mb-2"}," Add contact ",-1),L={class:"mt-2 flex justify-between"},S={class:"flex justify-start pr-2 pb-2"},P=["textContent"],T={class:"flex justify-end"},W=["textContent"],G={class:"form-control"},H=["textContent"],O={class:"form-control mt-2"},R=["textContent"],q={class:"form-control mt-2"},I=["textContent"],J={class:"mt-2 flex justify-between"},K={class:"flex justify-start pr-2"},Q=["textContent"],X={class:"flex justify-end"},Y=["textContent"],Z={class:"mt-2 flex justify-between"},$={class:"flex justify-start pr-2"},tt=["textContent"],et={class:"flex justify-end"},st=["textContent"],ot={class:"mt-2"},nt=["textContent"],rt={class:"mt-4"},at={class:"flex justify-between"},lt={class:"flex justify-end"},it=["disabled"],mt={__name:"CreateContact",setup(dt){let e=h({first_name:"",last_name:"",email:"",phone:"",address:"",city:"",region:"",country:"",postal_code:"",info:""}),f=()=>{e.post("/contacts",{forceFormData:!0,onSuccess:()=>[e.reset("first_name","last_name","email","phone","address","city","region","country","postal_code","info"),m.value=!1]})};const m=b(!1);function x(){m.value=!1}function y(){m.value=!0}return(ut,o)=>{const v=w("resize-textarea");return r(),a(C,null,[s("button",{type:"button",onClick:y,class:"btn btn-primary gap-2"},N),c(t(V),{appear:"",show:m.value,as:"template"},{default:p(()=>[c(t(j),{as:"div",onClose:x,class:"relative z-10"},{default:p(()=>[c(t(_),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>[M]),_:1}),s("div",z,[s("div",D,[c(t(_),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[c(t(U),{class:"w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:p(()=>[c(t(A),{as:"h3",class:"text-gray-900 flex justify-between"},{default:p(()=>[E]),_:1}),s("form",{onSubmit:o[10]||(o[10]=g((...n)=>t(f)&&t(f)(...n),["prevent"]))},[s("div",L,[s("div",S,[d(s("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).first_name=n),id:"firstname",name:"firstname",type:"text",placeholder:"Firstname",class:"input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0"},null,512),[[u,t(e).first_name]]),t(e).errors.first_name?(r(),a("div",{key:0,textContent:l(t(e).errors.first_name),class:"text-red-500 mt-2"},null,8,P)):i("",!0)]),s("div",T,[d(s("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).last_name=n),id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",class:"input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0"},null,512),[[u,t(e).last_name]]),t(e).errors.last_name?(r(),a("div",{key:0,textContent:l(t(e).errors.last_name),class:"text-red-500 mt-2"},null,8,W)):i("",!0)])]),s("div",G,[d(s("input",{"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).email=n),id:"email",name:"email",type:"email",placeholder:"Email Address",class:"input input-bordered input-primary w-full focus:border-transparent focus:ring-0"},null,512),[[u,t(e).email]]),t(e).errors.email?(r(),a("div",{key:0,textContent:l(t(e).errors.email),class:"text-red-500 mt-2"},null,8,H)):i("",!0)]),s("div",O,[d(s("input",{"onUpdate:modelValue":o[3]||(o[3]=n=>t(e).phone=n),id:"phone",name:"email",type:"tel",placeholder:"Phone Number",class:"input input-bordered input-primary w-full focus:border-transparent focus:ring-0"},null,512),[[u,t(e).phone]]),t(e).errors.phone?(r(),a("div",{key:0,textContent:l(t(e).errors.phone),class:"text-red-500 mt-2"},null,8,R)):i("",!0)]),s("div",q,[d(s("input",{"onUpdate:modelValue":o[4]||(o[4]=n=>t(e).address=n),id:"address",name:"address",type:"text",placeholder:"Address details",class:"input input-bordered input-primary w-full focus:border-transparent focus:ring-0"},null,512),[[u,t(e).address]]),t(e).errors.address?(r(),a("div",{key:0,textContent:l(t(e).errors.address),class:"text-red-500 mt-2"},null,8,I)):i("",!0)]),s("div",J,[s("div",K,[d(s("input",{"onUpdate:modelValue":o[5]||(o[5]=n=>t(e).city=n),id:"city",name:"city",type:"text",placeholder:"City",class:"input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0"},null,512),[[u,t(e).city]]),t(e).errors.city?(r(),a("div",{key:0,textContent:l(t(e).errors.city),class:"text-red-500 mt-2"},null,8,Q)):i("",!0)]),s("div",X,[d(s("input",{"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).region=n),id:"region",name:"region",type:"text",placeholder:"Region",class:"input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0"},null,512),[[u,t(e).region]]),t(e).errors.region?(r(),a("div",{key:0,textContent:l(t(e).errors.region),class:"text-red-500 mt-2"},null,8,Y)):i("",!0)])]),s("div",Z,[s("div",$,[d(s("input",{"onUpdate:modelValue":o[7]||(o[7]=n=>t(e).country=n),id:"country",name:"country",type:"text",placeholder:"Country Code",class:"input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0"},null,512),[[u,t(e).country]]),t(e).errors.country?(r(),a("div",{key:0,textContent:l(t(e).errors.country),class:"text-red-500 mt-2"},null,8,tt)):i("",!0)]),s("div",et,[d(s("input",{"onUpdate:modelValue":o[8]||(o[8]=n=>t(e).postal_code=n),id:"postal_code",name:"postal_code",type:"text",placeholder:"Postal Code",class:"input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0"},null,512),[[u,t(e).postal_code]]),t(e).errors.postal_code?(r(),a("div",{key:0,textContent:l(t(e).errors.postal_code),class:"text-red-500 mt-2"},null,8,st)):i("",!0)])]),s("div",ot,[c(v,{modelValue:t(e).info,"onUpdate:modelValue":o[9]||(o[9]=n=>t(e).info=n),rows:2,maxHeight:100,class:"textarea textarea-primary w-full focus:border-transparent focus:ring-0",placeholder:"Extra info"},null,8,["modelValue"]),t(e).errors.info?(r(),a("div",{key:0,textContent:l(t(e).errors.info),class:"text-red-500 mt-2"},null,8,nt)):i("",!0)]),s("div",rt,[s("div",at,[s("div",{class:"flex justify-start"},[s("button",{type:"button",class:"btn btn-error",onClick:x}," Close ")]),s("div",lt,[s("button",{class:"btn btn-success",type:"submit",disabled:t(e).processing}," Create ",8,it)])])])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}};export{mt as default};