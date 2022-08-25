import{r as u,u as f,o as y,c as w,w as e,a as c,b as t,f as a,U as h,n as v,h as s}from"./app.4a7e69ff.js";import{_ as k}from"./Modal.395254c0.js";import{_ as x}from"./DialogModal.f86cf470.js";import{_}from"./DangerButton.1a9d0fe6.js";import{_ as g,a as C}from"./InputError.d81adc7f.js";import{_ as D}from"./SecondaryButton.a94c7c17.js";import"./SectionTitle.cc7ce9ee.js";const b=s(" Delete Account "),U=s(" Permanently delete your account. "),V=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),$={class:"mt-5"},A=s(" Delete Account "),B=s(" Delete Account "),F=s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),K={class:"mt-4"},N=s(" Cancel "),P=s(" Delete Account "),G={__name:"DeleteUserForm",setup(I){const r=u(!1),n=u(null),o=f({password:""}),m=()=>{r.value=!0,setTimeout(()=>n.value.focus(),250)},d=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>n.value.focus(),onFinish:()=>o.reset()})},l=()=>{r.value=!1,o.reset()};return(O,i)=>(y(),w(k,null,{title:e(()=>[b]),description:e(()=>[U]),content:e(()=>[V,c("div",$,[t(_,{onClick:m},{default:e(()=>[A]),_:1})]),t(x,{show:r.value,onClose:l},{title:e(()=>[B]),content:e(()=>[F,c("div",K,[t(g,{ref_key:"passwordInput",ref:n,modelValue:a(o).password,"onUpdate:modelValue":i[0]||(i[0]=p=>a(o).password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:h(d,["enter"])},null,8,["modelValue","onKeyup"]),t(C,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(D,{onClick:l},{default:e(()=>[N]),_:1}),t(_,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:d},{default:e(()=>[P]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{G as default};