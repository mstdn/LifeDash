import{u as h,B as _,o as p,c as w,w as l,b as e,a as r,f as t,d as v,e as y,L as x,n as k,s as V,h as m}from"./app.7ae5ce4e.js";import{J as b}from"./AuthenticationCard.549e9947.js";import{_ as U}from"./Button.b721ddd4.js";import{_ as i,a as d}from"./InputError.5acac2bd.js";import{_ as C}from"./Checkbox.6ccf8501.js";import{_ as n}from"./Label.ed017814.js";const L=r("h2",{class:"font-semibold text-xl text-gray-900 dark:text-white leading-tight"}," Signup for free ",-1),P=["onSubmit"],$={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4"},N={class:"mt-4"},S={key:0,class:"mt-4"},A={class:"flex items-center"},F={class:"ml-2"},I=m(" I agree to the "),R=m("Terms of Service"),T=m(" and "),j=m("Privacy Policy"),E={class:"flex items-center justify-end mt-4"},G=m(" Already registered? "),J=m(" Register "),W={__name:"Register",setup(z){const s=h({name:"",username:"",email:"",password:"",password_confirmation:"",terms:!1}),f=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(u,a)=>{const c=_("InertiaLink"),g=_("GuestLayout");return p(),w(g,{title:"Register"},{header:l(()=>[L]),default:l(()=>[e(b,null,{default:l(()=>[r("form",{onSubmit:V(f,["prevent"])},[r("div",null,[e(n,{for:"name",value:"Name"}),e(i,{id:"name",modelValue:t(s).name,"onUpdate:modelValue":a[0]||(a[0]=o=>t(s).name=o),type:"text",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.name},null,8,["message"])]),r("div",$,[e(n,{for:"username",value:"Username"}),e(i,{id:"username",modelValue:t(s).username,"onUpdate:modelValue":a[1]||(a[1]=o=>t(s).username=o),type:"text",required:"",autocomplete:"username"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.username},null,8,["message"])]),r("div",q,[e(n,{for:"email",value:"Email"}),e(i,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":a[2]||(a[2]=o=>t(s).email=o),type:"email",required:""},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),r("div",B,[e(n,{for:"password",value:"Password"}),e(i,{id:"password",modelValue:t(s).password,"onUpdate:modelValue":a[3]||(a[3]=o=>t(s).password=o),type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),r("div",N,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(i,{id:"password_confirmation",modelValue:t(s).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=o=>t(s).password_confirmation=o),type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.password_confirmation},null,8,["message"])]),u.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(p(),v("div",S,[e(n,{for:"terms"},{default:l(()=>[r("div",A,[e(C,{id:"terms",checked:t(s).terms,"onUpdate:checked":a[5]||(a[5]=o=>t(s).terms=o),name:"terms"},null,8,["checked"]),r("div",F,[I,e(c,{target:"_blank",href:u.route("terms"),class:"underline text-sm text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"},{default:l(()=>[R]),_:1},8,["href"]),T,e(c,{target:"_blank",href:u.route("privacy"),class:"underline text-sm text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"},{default:l(()=>[j]),_:1},8,["href"])])])]),_:1})])):y("",!0),r("div",E,[e(t(x),{href:u.route("login"),class:"underline text-sm dark:text-white text-gray-600 hover:text-gray-900 dark:hover:text-gray-300"},{default:l(()=>[G]),_:1},8,["href"]),e(U,{class:k(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:l(()=>[J]),_:1},8,["class","disabled"])])],40,P)]),_:1})]),_:1})}}};export{W as default};