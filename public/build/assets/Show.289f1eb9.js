import{o,c,w as n,_ as p,a as i,d as s,b as t,e as r,F as l}from"./app.4a7e69ff.js";import f from"./DeleteUserForm.fadbd9a6.js";import{J as a}from"./SectionBorder.58065369.js";import d from"./LogoutOtherBrowserSessionsForm.6df373fa.js";import u from"./TwoFactorAuthenticationForm.4b907912.js";import _ from"./UpdatePasswordForm.fd054f48.js";import h from"./UpdateProfileInformationForm.fa9d9c15.js";import"./Modal.395254c0.js";import"./SectionTitle.cc7ce9ee.js";import"./DialogModal.f86cf470.js";import"./DangerButton.1a9d0fe6.js";import"./InputError.d81adc7f.js";import"./SecondaryButton.a94c7c17.js";import"./ActionMessage.26d94891.js";import"./Button.7adab878.js";import"./Label.a87ecdcc.js";import"./FormSection.b42c875c.js";const g=i("h2",{class:"font-semibold text-xl text-gray-900 dark:text-white leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},x={key:2},I={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,y)=>(o(),c(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),s("div",w,[t(h,{user:e.$page.props.user},null,8,["user"]),t(a)])):r("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),s("div",k,[t(_,{class:"mt-10 sm:mt-0"}),t(a)])):r("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),s("div",x,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(a)])):r("",!0),t(d,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),s(l,{key:3},[t(a),t(f,{class:"mt-10 sm:mt-0"})],64)):r("",!0)])])]),_:1}))}};export{I as default};