(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4331:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interested",function(){return a(5925)}])},5925:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var l=a(5893),n=a(7294),s=a(9473),i=a(5049),o=a(3023);a(5675);var r=a(6704),d=a(5379),c=a(8711),u=a(7435),m=a(1192),v=a(1163),p=a(5121),x=a(1800),h=a(9471),j=e=>{let{data:t}=e,a=(0,s.I0)(),i=(0,v.useRouter)(),o=(0,s.v9)(e=>{var t;return null===(t=e.login.userToken)||void 0===t?void 0:t.token}),[r,c]=(0,n.useState)((null==t?void 0:t.status)||"");return(0,s.v9)(e=>e.recallApi.recallApi),(0,l.jsx)("div",{className:"dataTables_filter mb-1",children:(0,l.jsx)("select",{className:"form-select ",onChange:e=>{(async function(){if(r!=(null==t?void 0:t.admin_status)){var l,n,s,d;try{let s="".concat("https://demo.gpropertypay.com","/","interested/update","/").concat(t._id),r=await p.Z.put(s,{...t,status:e.target.value},{headers:{Authorization:"Bearer ".concat(o),Accept:"application/json"}});(null==r?void 0:null===(l=r.data)||void 0===l?void 0:l.success)?(a((0,m.d)(!0)),(0,x.ZP)(x.Vp,null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.message)):401===r.data.status&&(a((0,h.gy)()),null==i||i.push("/login"))}catch(e){return a((0,m.d)(!0)),(0,x.ZP)(x.vU,null==e?void 0:null===(d=e.response)||void 0===d?void 0:null===(s=d.data)||void 0===s?void 0:s.message),e}}})()},"aria-label":"Default select example",children:d.KA.map((e,t)=>(0,l.jsx)("option",{value:d.xt[e],selected:r===d.xt[e],children:e},t))})})},b=a(1873),k=a(4779),y=a(5292),N=a(2175),f=a(3408),_=a(1191),g=a(6310),Z=e=>{let{id:t,onClose:a,isActive:i,data:o,type:r,urls:d,path:c}=e,u={note:g.Z_().min(2,"Notes must be at least 2 characters")},[p]=(0,n.useState)({note:o.note}),x=(0,s.I0)();(0,v.useRouter)();let h=async e=>{let l;x((0,y.N)(!0));try{l=await k.Z.put(d,{note:e.note},t,!0),200==l.status&&(x((0,y.N)(!1)),x((0,m.d)(!0)),a(""))}catch(e){x((0,y.N)(!1))}finally{x((0,y.N)(!1))}};return(0,l.jsxs)(_.Z,{show:i,onHide:()=>a(""),dialogClassName:"modal-lg",style:{marginLeft:"23px"},backdrop:"static",children:[(0,l.jsx)(_.Z.Header,{closeButton:!0,children:(0,l.jsx)(_.Z.Title,{children:(0,l.jsx)("h3",{children:"Create Notes"})})}),(0,l.jsx)(_.Z.Body,{children:(0,l.jsx)(N.J9,{enableReinitialize:!0,onSubmit:h,initialValues:p,validationSchema:g.Ry().shape(u),children:e=>{let{values:t,setFieldValue:n}=e;return(0,l.jsxs)(N.l0,{children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(f.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"Note"})}),(0,l.jsx)(N.gN,{as:"textarea",rows:4,type:"textarea",placeholder:"Notes",id:"note",name:"note",className:"form-control-alternative form-control"}),(0,l.jsx)(N.Bc,{className:"text-danger",name:"note",component:"div"})]})})}),(0,l.jsx)("div",{className:"w-100 d-flex justify-content-center",children:t.note?(0,l.jsx)("button",{type:"submit",className:"btn btn-primary mt-5 d-block text-uppercase",children:"create note"}):(0,l.jsx)("div",{className:"btn bg-warning mt-5 d-block text-uppercase",onClick:()=>{a("")},children:"Go Back"})})]})}})})]})};let w=["name","city","number","zip_code","call","leads","is_fake","email_sent","type","status"];var P=()=>{var e;let t="interested";u.Z.path=t;let a=(0,s.I0)(),m=(0,s.v9)(e=>{var t;return null===(t=e.login.userToken)||void 0===t?void 0:t.token}),{recallApi:v}=(0,s.v9)(e=>e.recallApi),[p,x]=(0,n.useState)(d.Wh),[h,k]=(0,n.useState)({list:[],pagination:{total:0}}),[y,N]=(0,n.useState)(1),[f,_]=(0,n.useState)({}),[g,P]=(0,n.useState)("");(0,n.useEffect)(()=>{u.Z.get(y,p,k)},[p,m,a,y,v]);let S=[{value:"S.No",index:!0},{key:"Id",value:"Id",component:e=>{var t,a;let{data:n}=e;return(0,l.jsx)(l.Fragment,{children:null===(a=(null==n?void 0:n.unique_id)||"")||void 0===a?void 0:null===(t=a.slice(-6))||void 0===t?void 0:t.toUpperCase()})}},{key:"name",value:"name"},{key:"number",value:"number"},{key:"city",value:"city"},{key:"type",value:"type"},{value:"call",component:e=>{let{data:t}=e;return(0,l.jsx)(o.OF,{data:t,url:"update",keyData:"call"})}},{value:"Leads",component:e=>{let{data:t}=e;return(0,l.jsx)(o.OF,{data:t,url:"update",keyData:"leads"})}},{value:"Is fake",component:e=>{let{data:t}=e;return(0,l.jsx)(o.OF,{data:t,url:"update",keyData:"is_fake"})}},{value:"Email Sent",component:e=>{let{data:t}=e;return(0,l.jsx)(o.OF,{data:t,url:"update",keyData:"email_sent"})}},{value:"status",component:e=>{let{data:t}=e;return(0,l.jsx)(j,{data:t})}},{value:"Status",combine:["is_active"],component:e=>{let{data:t}=e;return(0,l.jsx)(o.OF,{data:t})}},{value:"Action",component:e=>{let{data:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:()=>{_(t),P(d.bk)},className:"btn btn-success","data-tooltip":"Edit",children:(0,l.jsx)(b.lp0,{size:20})}),"\xa0",(0,l.jsx)(o.EY,{data:t,setSelected:_,setEdit:P,id:t._id,disable:[o.dm]})]})}}];return(0,l.jsxs)(l.Fragment,{children:[(g===d.P7||g===d.bk)&&(0,l.jsx)(Z,{id:f._id||0,isActive:g===d.P7||g===d.bk,onClose:P,data:{...f,id:f._id},type:g==d.P7?d.P7:d.bk,urls:g==d.P7?"".concat(t,"/add"):"".concat(t,"/update"),path:t}),(0,l.jsx)("div",{className:"card bg-glass",children:(0,l.jsx)("div",{className:"card-datatable ",children:(0,l.jsxs)("div",{className:"dataTables_wrapper dt-bootstrap5",children:[(0,l.jsx)(c.ZP,{title:"List of ".concat(t),onAddClick:()=>P(d.P7),onExportClick:()=>{u.Z.download()},disable:[c.aO]}),(0,l.jsx)(i.ZP,{filter:p,setFilter:x,orderBy:w,disable:[i.dd,i.e_]}),(0,l.jsx)(o.ZP,{tableCustomize:S,data:h&&h.list||[],StartIndex:+p.limit*(+y-1)+1||1}),(0,l.jsx)(r.Z,{currentPage:y,limit:p.limit,setCurrentPage:N,total:(null===(e=h.pagination)||void 0===e?void 0:e.total)||0})]})})})]})}}},function(e){e.O(0,[86,958,585,752,191,291,774,888,179],function(){return e(e.s=4331)}),_N_E=e.O()}]);