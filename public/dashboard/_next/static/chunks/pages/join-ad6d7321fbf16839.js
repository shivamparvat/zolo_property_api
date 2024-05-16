(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{7360:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/join",function(){return a(7138)}])},4090:function(e,t,a){"use strict";a.d(t,{i:function(){return l}});let l=e=>{let t=new Date(e),a=t.toLocaleString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",hour12:!0});return a}},7582:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var l=a(5893),n=a(7294),s=a(7054),i=a(8837),o=e=>{let{onSelect:t}=e,[a,s]=(0,n.useState)(""),o=async e=>{let a=await (0,i.NU)(e),l=await (0,i.WV)(a[0]);t(l)};return(0,l.jsx)(i.ZP,{value:a,onChange:e=>{s(e)},onSelect:o,children:e=>{let{getInputProps:t,suggestions:a,getSuggestionItemProps:s,loading:i}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{...t({placeholder:"Search Places ...",className:"location-search-input"}),className:"form-control-alternative form-control w-100"}),(0,l.jsxs)("div",{className:"autocomplete-dropdown-container ms-2",children:[i&&(0,l.jsx)("div",{children:"Loading..."}),a.map(e=>(0,n.createElement)("div",{...s(e),key:e.placeId,className:" px-2 mb-1 mt-1 form-control"},e.description))]})]})}})},c=a(4076),r=e=>{let{setCoordinates:t,Coordinates:a}=e,{isLoaded:n}=(0,s.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyDxEmw9qvtFiT7LK8GbfLqyPgv3xN7YFZs"});return n?(0,l.jsx)(c.Z,{defaultActiveKey:"1",children:(0,l.jsxs)(c.Z.Item,{eventKey:"0",children:[(0,l.jsx)(c.Z.Header,{children:"map"}),(0,l.jsx)(c.Z.Body,{children:(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsxs)("div",{className:"mt-2 mb-2",children:[(0,l.jsx)("label",{htmlFor:"",className:'className="form-control-label"',children:"Search you location"}),(0,l.jsx)(o,{onSelect:e=>{t(e),console.log(e)}})]}),(0,l.jsx)("div",{style:{height:"300px",width:"100%"},children:(0,l.jsx)(s.b6,{mapContainerStyle:{height:"100%",width:"100%"},center:{lat:(null==a?void 0:a.lat)||22,lng:(null==a?void 0:a.lng)||78},zoom:a?13:2,options:{zoomControl:!0},onClick:e=>{var a,l;let n=null===(a=e.latLng)||void 0===a?void 0:a.lat(),s=null===(l=e.latLng)||void 0===l?void 0:l.lng();t({lat:n||0,lng:s||0})},children:a&&(0,l.jsx)(s.Jx,{position:a})})})]})})]})}):null}},7138:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var l=a(5893),n=a(5049),s=a(7294),i=a(9473),o=a(3023),c=a(4090),r=a(6704),d=a(5379),m=a(8711),u=a(4779),h=a(5292),v=a(2175),x=a(3408),p=a(1191),j=a(6310),N=a(1192),b=a(7582),g=e=>{let{id:t,onClose:a,isActive:n,data:o,type:c,urls:r,path:m}=e,g=(0,i.I0)(),[y,f]=(0,s.useState)(c==d.P7?{lat:22,lng:78}:{lat:((null==o?void 0:o.coordinates)||[])[0]||22,lng:((null==o?void 0:o.coordinates)||[])[1]||78}),_={name:j.Z_().required("Name is required").min(2,"Name must be at least 2 characters").max(50,"Name can be at most 50 characters"),contact_number:j.Z_().required("Phone Number is required").min(10,"Phone Number must be at least 10 digits").max(10,"Phone Number can be at most 10 digits").matches(/^[0-9]+$/,"Phone Number must contain only digits"),city:j.Z_().required("City is required"),zip_code:j.Rx().required("Zip Code is required")},[Z]=(0,s.useState)({name:c==d.P7?"":o.name,contact_number:c==d.P7?"":o.contact_number,city:c==d.P7?"":o.city,zip_code:c==d.P7?"":o.zip_code,coordinates:c==d.P7?{lat:22,lng:78}:{lat:((null==o?void 0:o.coordinates)||[])[0]||22,lng:((null==o?void 0:o.coordinates)||[])[1]||78}}),w=async e=>{let l;g((0,h.N)(!0));try{l=c===d.P7?await u.Z.post(r,{...e,coordinates:Object.values(y)},0,!0):await u.Z.put(r,{...e,coordinates:Object.values(y)},t,!0),200==l.status&&(g((0,h.N)(!1)),g((0,N.d)(!0)),a(""))}catch(e){g((0,N.d)(!0)),g((0,h.N)(!1))}finally{g((0,N.d)(!0)),g((0,h.N)(!1))}};return(0,l.jsxs)(p.Z,{show:n,onHide:()=>a(""),dialogClassName:"modal-lg",style:{marginLeft:"23px"},backdrop:"static",children:[(0,l.jsx)(p.Z.Header,{closeButton:!0,children:(0,l.jsx)(p.Z.Title,{children:(0,l.jsxs)("h3",{children:[c===d.P7?"Add":"Edit"," ",m]})})}),(0,l.jsx)(p.Z.Body,{children:(0,l.jsx)(v.J9,{enableReinitialize:!0,onSubmit:w,initialValues:Z,validationSchema:j.Ry().shape(_),children:e=>{let{setFieldValue:t}=e;return(0,l.jsxs)(v.l0,{children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsxs)("div",{className:"w-100",children:[(0,l.jsx)(x.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"Name"})}),(0,l.jsx)(v.gN,{type:"text",id:"name",placeholder:"Name",name:"name",className:"form-control-alternative form-control w-100"}),(0,l.jsx)(v.Bc,{className:"text-danger",name:"name",component:"div"})]}),(0,l.jsxs)("div",{className:"w-100",children:[(0,l.jsx)(x.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"Phone Number"})}),(0,l.jsx)(v.gN,{type:"text",id:"contact_number",placeholder:"contact_number",name:"contact_number",className:"form-control-alternative form-control w-100"}),(0,l.jsx)(v.Bc,{className:"text-danger",name:"contact_number",component:"div"})]})]}),(0,l.jsxs)("div",{className:"w-50",children:[(0,l.jsxs)("div",{className:"w-100",children:[(0,l.jsx)(x.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"city"})}),(0,l.jsx)(v.gN,{type:"text",id:"city",placeholder:"city",name:"city",className:"form-control-alternative form-control w-100"}),(0,l.jsx)(v.Bc,{className:"text-danger",name:"city",component:"div"})]}),(0,l.jsxs)("div",{className:"w-100",children:[(0,l.jsx)(x.Z.Label,{className:"form-control-label",children:(0,l.jsx)("h6",{children:"Zip number"})}),(0,l.jsx)(v.gN,{type:"text",id:"zip_code",placeholder:"zip_code",name:"zip_code",className:"form-control-alternative form-control w-100"}),(0,l.jsx)(v.Bc,{className:"text-danger",name:"zip_code",component:"div"})]})]})]}),(0,l.jsx)(b.Z,{Coordinates:y,setCoordinates:f}),(0,l.jsx)("div",{className:"w-100 d-flex justify-content-center",children:(0,l.jsxs)("button",{type:"submit",className:"btn btn-primary mt-5 d-block text-uppercase",children:[c===d.P7?"Add":"Update"," ",m]})})]})}})})]})},y=a(7435),f=a(1163),_=a(5121),Z=a(1800),w=a(9471),P=e=>{let{data:t}=e,a=(0,i.I0)(),n=(0,f.useRouter)(),o=(0,i.v9)(e=>{var t;return null===(t=e.login.userToken)||void 0===t?void 0:t.token}),[c,r]=(0,s.useState)((null==t?void 0:t.status)||"");return(0,i.v9)(e=>e.recallApi.recallApi),(0,l.jsx)("div",{className:"dataTables_filter mb-1",children:(0,l.jsx)("select",{className:"form-select ",onChange:e=>{(async function(){if(c!=(null==t?void 0:t.admin_status)){var l,s,i,r;try{let i="".concat("https://demo.gpropertypay.com","/","contact/update","/").concat(t._id),c=await _.Z.put(i,{...t,status:e.target.value},{headers:{Authorization:"Bearer ".concat(o),Accept:"application/json"}});(null==c?void 0:null===(l=c.data)||void 0===l?void 0:l.success)?(a((0,N.d)(!0)),(0,Z.ZP)(Z.Vp,null==c?void 0:null===(s=c.data)||void 0===s?void 0:s.message)):401===c.data.status&&(a((0,w.gy)()),null==n||n.push("/login"))}catch(e){return a((0,N.d)(!0)),(0,Z.ZP)(Z.vU,null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(i=r.data)||void 0===i?void 0:i.message),e}}})()},"aria-label":"Default select example",children:d.KA.map((e,t)=>(0,l.jsx)("option",{value:d.xt[e],selected:c===d.xt[e],children:e},t))})})};let S=["name","contact_number","city","zip_code"];var k=()=>{var e;let t="contact";y.Z.path=t;let a=(0,i.I0)(),u=(0,i.v9)(e=>{var t;return null===(t=e.login.userToken)||void 0===t?void 0:t.token}),h=(0,i.v9)(e=>e.recallApi.recallApi),[v,x]=(0,s.useState)(1),[p,j]=(0,s.useState)(d.Wh),[N,b]=(0,s.useState)({list:[],pagination:{total:0}}),[f,_]=(0,s.useState)({}),[Z,w]=(0,s.useState)(""),[k,C]=(0,s.useState)(!1),[A,z]=(0,s.useState)({post_id:0});(0,s.useEffect)(()=>(y.Z.get(v,p,b),()=>{}),[p,u,a,v,h]);let L=[{value:"S.No",index:!0},{key:"name",value:"name"},{key:"contact_number",value:"Number"},{key:"address",value:"address"},{value:"Created At",component:e=>{let{data:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,c.i)(t.createdAt)})}},{value:"status",component:e=>{let{data:t}=e;return(0,l.jsx)(P,{data:t})}}];return(0,l.jsxs)(l.Fragment,{children:[(Z===d.P7||Z===d.bk)&&(0,l.jsx)(g,{id:f._id||0,isActive:Z===d.P7||Z===d.bk,onClose:w,data:{...f,id:f.post_id},type:Z==d.P7?d.P7:d.bk,urls:Z==d.P7?"".concat(t,"/add"):"".concat(t,"/update"),path:t}),(0,l.jsx)("div",{className:"card bg-white",children:(0,l.jsx)("div",{className:"card-datatable",children:(0,l.jsxs)("div",{className:"dataTables_wrapper dt-bootstrap5",children:[(0,l.jsx)(m.ZP,{title:"List of ".concat(t),onAddClick:()=>w(d.P7),onExportClick:()=>{y.Z.download()},disable:[m.bi,m.aO]}),(0,l.jsx)(n.ZP,{filter:p,disable:[n.dd,n.e_],setFilter:j,orderBy:S}),(0,l.jsx)(o.ZP,{tableCustomize:L,data:N&&(null==N?void 0:N.list),StartIndex:+p.limit*(+v-1)+1||1}),(0,l.jsx)(r.Z,{currentPage:v||0,limit:p.limit,setCurrentPage:x,total:N&&(null===(e=N.pagination)||void 0===e?void 0:e.total)||0})]})})})]})}}},function(e){e.O(0,[86,255,958,585,752,544,191,291,774,888,179],function(){return e(e.s=7360)}),_N_E=e.O()}]);