"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{635:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});var l=a(5893),r=a(5675),o=a.n(r),t=a(2175),n=a(9332),i=a(9473),c=a(5292),d=a(9471),m=a(5121);let x=e=>async s=>{try{var a,l;s((0,c.N)(!0));let r=await m.Z.post("".concat("https://demo.gpropertypay.com","/user/login"),{...e},{headers:{Accept:"application/json"}});s((0,c.N)(!1)),200===r.status&&(null==r?void 0:null===(a=r.data)||void 0===a?void 0:a.success)&&s((0,d.o4)(null==r?void 0:null===(l=r.data)||void 0===l?void 0:l.data))}catch(e){s((0,c.N)(!1))}};var h=a(2822),u=a(7294),j=a(5434),p=a(9583),w=a(1191),b=a(6310),N=a(9163),f=a(3126),g=a(4017),v=a(7261),y=a(4082),Z=a(4779),P=a(5379),C=e=>{let{onClose:s,setEmail:a}=e,[r,o]=(0,u.useState)(""),n=b.Ry().shape({email:b.Z_().email("Invalid email").required("Required")}),i=async e=>{console.log("Inside the mail");try{var l;e.email=null===(l=e.email)||void 0===l?void 0:l.trim();let r=await Z.Z.post("user/send-mail-otp",e);if(200===r.status){console.log("Response of Forgot Password",r);let e=r.email;a(e),s(P.dL)}else console.log("Mail not Sent")}catch(e){console.error("Error:",e)}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(w.Z,{show:e.show,onHide:()=>{s("none")},dialogClassName:"modal-md",backdrop:"static",style:{marginLeft:"23px"},children:[(0,l.jsx)(w.Z.Header,{closeButton:!0,children:(0,l.jsx)(w.Z.Title,{children:"Forgot Password"})}),(0,l.jsx)(w.Z.Body,{children:(0,l.jsx)(t.J9,{enableReinitialize:!0,initialValues:{email:r},validationSchema:n,onSubmit:i,children:(0,l.jsxs)(t.l0,{children:[(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("span",{style:{color:"blue"},children:"Enter your email for the verification process; we will send a 6-digit code to your email."})}),(0,l.jsx)("div",{className:"row mt-4",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsxs)(N.Z,{children:[(0,l.jsx)(f.Z,{className:"d-flex",children:" Email"}),(0,l.jsx)(g.Z,{className:"input-group-alternative",children:(0,l.jsx)(v.Z,{placeholder:"Enter Email",type:"email",name:"email",id:"email",autoComplete:"off",onChange:e=>o(e.target.value),value:r})}),(0,l.jsx)(t.Bc,{name:"email",component:"span",className:"error-message"})]}),(0,l.jsx)(y.Z,{className:"my-4 d-block mx-auto w-100",color:"primary",type:"submit",children:"Continue"})]})})]})})})]})})},k=a(8386),S=e=>{let s=e.otpData.email,[a,r]=(0,u.useState)(""),[o,t]=(0,u.useState)(10);(0,u.useEffect)(()=>{let e;return o>0&&(e=setTimeout(()=>{t(o-1)},2e3)),()=>clearTimeout(e)},[o]);let n=async l=>{try{let l=await Z.Z.post("user/check-otp",{email:s,userEnteredOtp:a});200===l.status&&(l.user.email,e.onClose(P.gq),r(""))}catch(e){console.error("Error:",e)}},i=async()=>{try{let e=await Z.Z.post("user/send-mail-otp",{email:s});200===e.status?t(10):console.log(" OTP did'nt received!!!  ")}catch(e){console.log(e)}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(w.Z,{show:e.show,onHide:()=>{e.onClose("")},dialogClassName:"modal-md",backdrop:"static",style:{marginLeft:"23px"},children:[(0,l.jsx)(w.Z.Header,{closeButton:!0,children:(0,l.jsx)(w.Z.Title,{children:"OTP Verification "})}),(0,l.jsx)(w.Z.Body,{children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4",style:{minWidth:"500px"},children:(0,l.jsx)("div",{className:"card bg-white mb-5 mt-4 border-0",style:{boxShadow:"0 12px 15px rgba(0, 0, 0, 0.02)"},children:(0,l.jsxs)("div",{className:"card-body p-5 text-center",children:[(0,l.jsx)("h4",{children:"Verify"}),(0,l.jsx)("p",{children:"Your code was sent to you via email"}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"otp-field mb-4",children:(0,l.jsx)(k.Z,{value:a,onChange:r,numInputs:6,renderSeparator:(0,l.jsx)("span",{children:" \xa0 \xa0"}),renderInput:e=>(0,l.jsx)("input",{...e,style:{width:"50px"}})})}),(0,l.jsx)("button",{className:"btn btn-primary mb-3",onClick:n,children:"Verify"}),o&&o?(0,l.jsxs)("p",{className:"resend text-muted mb-0",children:["Resend OTP"," ",(0,l.jsx)("span",{style:{color:"red"},children:"".concat(o," Sec")})]}):(0,l.jsxs)("p",{className:"resend text-muted mb-0",children:["Didn't receive code?"," ",(0,l.jsx)("a",{className:"cursor-pointer resend",onClick:()=>i(),children:"Request again"})]})]})})})})})]})})},B=a(5005),E=a(3408),_=a(6515),R=a(5762),z=a(1800),L=e=>{let[s,a]=(0,u.useState)(!1),[r,o]=(0,u.useState)(!1),[n,i]=(0,u.useState)(!0),c=e.otpData.email;console.log(c);let d=async s=>{var a,l;console.log("Out of Confirm Password Modal"),s.newPassword=null===(a=s.newPassword)||void 0===a?void 0:a.trim(),s.confirmNewPassword=null===(l=s.confirmNewPassword)||void 0===l?void 0:l.trim();try{let a=await Z.Z.post("user/forgetPassword",s);200===a.status&&((0,z.ZP)(z.Vp,"password changed"),e.onClose(""))}catch(e){console.log(e)}},m=b.Ry().shape({newPassword:b.Z_().min(8,"Password must be at least 8 characters").max(8,"Password can be at most 8 characters"),confirmNewPassword:b.Z_().oneOf([b.iH("newPassword"),null],"Passwords must match")});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(w.Z,{show:e.show,onHide:()=>{e.onClose("none")},dialogClassName:"modal-md",backdrop:"static",style:{marginLeft:"23px"},children:[(0,l.jsx)(w.Z.Header,{closeButton:!0,children:(0,l.jsx)(w.Z.Title,{children:"Enter your new Password"})}),(0,l.jsx)(w.Z.Body,{children:(0,l.jsx)(t.J9,{enableReinitialize:!0,initialValues:{email:c||"",newPassword:"",confirmNewPassword:""},validationSchema:m,onSubmit:d,children:e=>{let{values:n,handleSubmit:i}=e;return(0,l.jsxs)(E.Z,{onSubmit:i,children:[(0,l.jsx)("div",{className:"mt-2"}),(0,l.jsxs)("div",{className:"row mt-4",children:[(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)(E.Z.Group,{controlId:"newPassword",children:[(0,l.jsx)(E.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"Enter New Password"})}),(0,l.jsxs)(_.Z,{children:[(0,l.jsx)(t.gN,{type:s?"text":"password",className:"form-control-alternative form-control",name:"newPassword",autoComplete:"off",style:{backgroundColor:"#eee",border:"none"}}),(0,l.jsx)(R.Z,{onClick:()=>a(!s),style:{cursor:"pointer"},children:s?(0,l.jsx)(p.z5B,{}):(0,l.jsx)(p.tjB,{})})]}),(0,l.jsx)(t.Bc,{name:"newPassword",component:"span",className:"error-message"})]})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)(E.Z.Group,{controlId:"confirmNewPassword",children:[(0,l.jsx)(E.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"Confirm password"})}),(0,l.jsxs)(_.Z,{children:[(0,l.jsx)(t.gN,{type:r?"text":"password",className:"form-control-alternative form-control",name:"confirmNewPassword",autoComplete:"off",style:{backgroundColor:"#eee",border:"none"}}),(0,l.jsx)(R.Z,{onClick:()=>o(!r),style:{cursor:"pointer"},children:r?(0,l.jsx)(p.z5B,{}):(0,l.jsx)(p.tjB,{})})]}),(0,l.jsx)(t.Bc,{name:"confirmNewPassword",component:"span",className:"error-message"})]})})]}),(0,l.jsx)("div",{className:"row mt-4",children:(0,l.jsx)("div",{className:"col-md-12 m-auto text-center",children:(0,l.jsx)(B.Z,{className:"my-4 d-block mx-auto w-50",color:"primary",type:"submit",children:"Update Password"})})})]})}})})]})})},q=()=>{(0,n.useRouter)();let e=(0,i.I0)(),s=(0,i.v9)(e=>e.rememberme),[a,r]=(0,u.useState)({email:s.email||"",password:s.password||"",rememberme:s.rememberme||!1}),[c,d]=(0,u.useState)(!0),[m,w]=(0,u.useState)(""),[b,N]=(0,u.useState)("");return(0,u.useEffect)(()=>{r({...s})},[s]),(0,l.jsxs)(l.Fragment,{children:[b===P.r9&&(0,l.jsx)(C,{show:b===P.r9,onClose:N,otpData:"",setEmail:w}),b===P.dL&&(0,l.jsx)(S,{show:b===P.dL,onClose:N,otpData:{email:m}}),b===P.gq&&(0,l.jsx)(L,{show:b===P.gq,onClose:N,otpData:{email:m}}),(0,l.jsx)("section",{className:"background-radial-gradient overflow-hidden",children:(0,l.jsx)("div",{className:"container px-4 py-5 px-md-5  text-lg-start my-5",children:(0,l.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,l.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0 position-relative d-flex justify-content-center align-items-center",children:[(0,l.jsx)("div",{id:"radius-shape-1",className:"position-absolute rounded-circle shadow-5-strong"}),(0,l.jsx)("div",{id:"radius-shape-2",className:"position-absolute shadow-5-strong"}),(0,l.jsx)("div",{className:"card bg-glass w-70",children:(0,l.jsx)("div",{className:"card-body px-4 py-5 px-md-5",children:(0,l.jsx)(t.J9,{initialValues:a,validate:e=>{let s={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)?e.password?e.password.length<8&&(s.password="password must be at least 6 characters"):s.password="Required":s.email="Invalid email address":s.email="Required",s},onSubmit:s=>{e(x({email:s.email,password:s.password})),s.rememberme?e((0,h.Ay)({email:s.email,password:s.password,rememberme:s.rememberme})):e((0,h.bs)())},children:()=>(0,l.jsxs)(t.l0,{children:[(0,l.jsxs)("div",{className:"form-outline mb-4",children:[(0,l.jsx)("div",{className:"d-flex h-100 w-100 justify-content-center align-item-center p-5 position-relative z-index-3",children:(0,l.jsx)(o(),{src:P.sk,width:250,height:150,alt:"logo",className:"object-fit-contain"})}),(0,l.jsx)(t.Bc,{name:"email",className:"text-danger",component:"div"}),(0,l.jsxs)("div",{className:"form-control d-flex justify-content-center align-items-center",children:[(0,l.jsx)(j.ixJ,{size:18,className:"d-inline-block mr-2"}),(0,l.jsx)(t.gN,{type:"email",name:"email",className:"border-0 h-100 w-100 form-control"})]}),(0,l.jsx)("label",{className:"form-label",htmlFor:"form3Example3",children:"Email address"})]}),(0,l.jsxs)("div",{className:"form-outline mb-4",children:[(0,l.jsx)(t.Bc,{name:"password",className:"text-danger",component:"div"}),(0,l.jsxs)("div",{className:"form-control d-flex justify-content-center align-items-center",children:[(0,l.jsx)("span",{onClick:()=>d(e=>!e),children:c?(0,l.jsx)(p.tjB,{size:18,className:"d-inline-block mr-2"}):(0,l.jsx)(p.z5B,{size:18,className:"d-inline-block mr-2"})}),(0,l.jsx)(t.gN,{type:c?"password":"text",name:"password",className:"border-0 h-100 w-100 form-control"})]}),(0,l.jsx)("label",{className:"form-label",htmlFor:"form3Example4",children:"Password"})]}),(0,l.jsxs)("label",{className:"mt-4  d-flex align-items-center",children:[(0,l.jsx)(t.gN,{type:"checkbox",name:"rememberme"}),(0,l.jsx)("span",{className:"sign__in__checkbox__text",children:"Remember me"})]}),(0,l.jsx)("label",{className:"mt-4  d-flex flex-row-reverse"}),(0,l.jsx)("div",{className:"d-flex justify-content-center",children:(0,l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",children:"Login"})}),(0,l.jsx)("div",{className:"d-flex justify-content-center"})]})})})})]})})})})]})}}}]);