(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{3881:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ads/edit",function(){return i(6220)}])},6220:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return x}});var n=i(5893),o=i(4779),s=i(5292),a=i(2175),r=i(3408),l=i(7294),c=i(9473),d=i(6310),h=i(1192),p=i(1441),u=i(1800),m=i(7582),f=i(5810),v=i(1163),b=i(9471),x=e=>{var t,i;let x=(0,v.useRouter)(),y=(0,c.I0)(),w=x.query.id,[g,j]=(0,l.useState)({}),[N,_]=(0,l.useState)({lat:((null==g?void 0:g.coordinates)||[])[0]||22,lng:((null==g?void 0:g.coordinates)||[])[1]||78}),[k,S]=(0,l.useState)(null==g?void 0:g.banner);(0,l.useEffect)(()=>{try{if(w){let e=async()=>{var e,t;let i=await o.Z.get("ads",w,!0);(null==i?void 0:i.status)==200?(null==i?void 0:i.data)&&j((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.ads)||{}):(null==i?void 0:null===(e=i.data)||void 0===e?void 0:e.status)===401&&(y((0,b.gy)()),null==x||x.push("/login"))};e()}}catch(e){y((0,s.N)(!1))}finally{y((0,s.N)(!1))}},[w]);let C={ads_name:d.Z_().required("Name is required"),title:d.Z_().required("Title is required"),description:d.Z_().required("Description is required"),show_number:d.O7().default(!0),show_map:d.O7().default(!0),number:d.Z_().required("Number is required"),city:d.Z_().required("City is required"),zip_code:d.Rx().required("Zip code is required"),expiry_date:d.hT()},[T,D]=(0,l.useState)({ads_name:g.ads_name,title:g.title,description:g.description,show_number:g.show_number,show_map:g.show_map,number:g.number,city:g.city,zip_code:g.zip_code,expiry_date:g.expiry_date?((null===(t=new Date(g.expiry_date).toISOString())||void 0===t?void 0:t.split("T"))||[])[0]:null===(i=new Date().toISOString())||void 0===i?void 0:i.split("T")[0],coordinates:{lat:((null==g?void 0:g.coordinates)||[])[0]||22,lng:((null==g?void 0:g.coordinates)||[])[1]||78}}),[E,M]=(0,l.useState)(g.galleryUrls),[I,O]=(0,l.useState)([]),[Z,z]=(0,l.useState)([]);(0,l.useEffect)(()=>{var e,t;D({ads_name:g.ads_name,title:g.title,description:g.description,show_number:g.show_number,show_map:g.show_map,number:g.number,city:g.city,zip_code:g.zip_code,expiry_date:g.expiry_date?((null===(e=new Date(g.expiry_date).toISOString())||void 0===e?void 0:e.split("T"))||[])[0]:null===(t=new Date().toISOString())||void 0===t?void 0:t.split("T")[0],coordinates:{lat:((null==g?void 0:g.coordinates)||[])[0]||22,lng:((null==g?void 0:g.coordinates)||[])[1]||78}})},[g]);let B=async e=>{let t;y((0,s.N)(!0));try{let i=new FormData;if(i.append("ads_name",e.ads_name.trim()),i.append("title",e.title.trim()),i.append("description",e.description.trim()),i.append("number",e.number),i.append("city",e.city),i.append("zip_code",e.zip_code),i.append("expiry_date",e.expiry_date),i.append("show_number",e.show_number),i.append("show_map",e.show_map),k&&i.append("banner",k),N.lat&&N.lng)Object.values(N||{}).map(e=>{i.append("coordinates[]",e)});else throw(0,u.ZP)(u.vU,"coordinates is required"),Error("coordinates is required");I.length&&Object.values(I||{}).map(e=>{i.append("images",e)}),(null==E?void 0:E.length)?E.map((e,t)=>{(null==I?void 0:I.length)<=t&&i.append("gallery[]",e)}):(i.append("gallery[]",""),i.delete("banner"),i.append("banner","")),I&&Z&&Z.map(e=>[i.append("oldImages[]",e)]),t=await o.Z.put("ads",i,w,!0),200==t.status&&(y((0,s.N)(!1)),y((0,h.d)(!0)),setTimeout(()=>{x.back()},200))}catch(e){y((0,s.N)(!1))}finally{y((0,s.N)(!1))}};return(0,n.jsx)("div",{className:"card bg-white p-5",children:0!=Object.keys(T).length?(0,n.jsx)(a.J9,{enableReinitialize:!0,onSubmit:B,initialValues:T,validationSchema:d.Ry().shape(C),children:e=>{let{values:t,setValues:i}=e;return(0,n.jsxs)(a.l0,{children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"Ad name"})}),(0,n.jsx)(a.gN,{type:"text",id:"ads_name",placeholder:"Ad Name",name:"ads_name",className:"form-control-alternative form-control w-100"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"ads_name",component:"div"})]}),(0,n.jsx)("div",{className:"w-100",children:(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"number"})}),(0,n.jsx)(a.gN,{type:"text",id:"number",placeholder:"number",name:"number",className:"form-control-alternative form-control w-100"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"number",component:"div"})]})}),(0,n.jsx)("div",{className:"w-100",children:(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"Zip code"})}),(0,n.jsx)(a.gN,{type:"text",id:"zip_code",placeholder:"zip code",name:"zip_code",className:"form-control-alternative form-control w-100"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"zip_code",component:"div"})]})}),(0,n.jsxs)("div",{className:"d-flex mt-3",children:[(0,n.jsxs)("div",{className:"mt-2 me-5",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"show number in Ad"})}),(0,n.jsx)("div",{children:(0,n.jsx)(f.Z,{name:"show_number",onChange:()=>i({...t,show_number:!(null==t?void 0:t.show_number)}),checked:(null==t?void 0:t.show_number)||!1,uncheckedIcon:!1,checkedIcon:!1,onColor:"#009EFB",offColor:"#dcdcdc",className:"status-switch"})}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"show_number",component:"div"})]}),(0,n.jsxs)("div",{className:"mt-2",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"show map in Ad"})}),(0,n.jsx)("div",{children:(0,n.jsx)(f.Z,{onChange:()=>i({...t,show_map:!(null==t?void 0:t.show_map)}),checked:(null==t?void 0:t.show_map)||!1,uncheckedIcon:!1,checkedIcon:!1,onColor:"#009EFB",offColor:"#dcdcdc",className:"status-switch"})}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"show_map",component:"div"})]})]})]}),(0,n.jsxs)("div",{className:"w-50",children:[(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"title"})}),(0,n.jsx)(a.gN,{type:"text",id:"title",placeholder:"Title",name:"title",className:"form-control-alternative form-control w-100"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"title",component:"div"})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"Description"})}),(0,n.jsx)(a.gN,{as:"textarea",rows:4,type:"textarea",placeholder:"Description",id:"description",name:"description",className:"form-control-alternative form-control"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"description",component:"div"})]}),(0,n.jsx)("div",{className:"w-100",children:(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"city"})}),(0,n.jsx)(a.gN,{type:"text",id:"city",placeholder:"city",name:"city",className:"form-control-alternative form-control w-100"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"city",component:"div"})]})}),(0,n.jsx)("div",{className:"w-100",children:(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)(r.Z.Label,{className:"form-control-label",children:(0,n.jsx)("h6",{children:"expiry date"})}),(0,n.jsx)(a.gN,{type:"date",id:"expiry_date",placeholder:"expiry date",name:"expiry_date",className:"form-control-alternative form-control w-100"}),(0,n.jsx)(a.Bc,{className:"text-danger",name:"expiry_date",component:"div"})]})})]})]}),(0,n.jsx)("hr",{}),(0,n.jsx)(m.Z,{Coordinates:N,setCoordinates:_}),(0,n.jsx)(p.Z,{selectedFile:E,setSelectedFile:M,setFiles:O,Files:I,setDeletedFile:z,banner:k,setBanner:S}),(0,n.jsx)("div",{className:"w-100 d-flex justify-content-center",children:(0,n.jsx)("button",{type:"submit",className:"btn btn-primary mt-5 d-block text-uppercase",children:"Update"})})]})}}):(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"},children:(0,n.jsx)("h1",{children:"data Not Found"})})})}},5810:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(7294);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(e){if(7===e.length)return e;for(var t="#",i=1;i<4;i+=1)t+=e[i]+e[i];return t}function l(e,t,i,n,o){return function(e,t,i,n,o){var s=(e-i)/(t-i);if(0===s)return n;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var l=Math.round((1-s)*parseInt(n.substr(r,2),16)+s*parseInt(o.substr(r,2),16)).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(e,t,i,r(n),r(o))}var c=function(e){function t(t){e.call(this,t);var i=t.height,n=t.width,o=t.checked;this.t=t.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,i=t.R,n=t.h,o=(this.props.checked?this.i:this.o)+e-i;t.N||e===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},t.prototype.U=function(e){var t=this.state,i=t.h,n=t.N,o=t.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!n||r<250||s&&i<=a||!s&&i>=a)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.m=function(e){this.L(e.touches[0].clientX)},t.prototype.M=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,i=e.disabled,s=e.className,a=e.offColor,r=e.onColor,c=e.offHandleColor,d=e.onHandleColor,h=e.checkedIcon,p=e.uncheckedIcon,u=e.checkedHandleIcon,m=e.uncheckedHandleIcon,f=e.boxShadow,v=e.activeBoxShadow,b=e.height,x=e.width,y=e.borderRadius,w=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(i[n]=e[n]);return i}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),g=this.state,j=g.h,N=g.N,_=g.j,k={height:b,width:x,margin:Math.max(0,(this.t-b)/2),position:"relative",background:l(j,this.i,this.o,a,r),borderRadius:"number"==typeof y?y:b/2,cursor:i?"default":"pointer",WebkitTransition:N?null:"background 0.25s",MozTransition:N?null:"background 0.25s",transition:N?null:"background 0.25s"},S={height:b,width:Math.min(1.5*b,x-(this.t+b)/2+1),position:"relative",opacity:(j-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},C={height:b,width:Math.min(1.5*b,x-(this.t+b)/2+1),position:"absolute",opacity:1-(j-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},T={height:this.t,width:this.t,background:l(j,this.i,this.o,c,d),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+j+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:_?v:f,border:0,WebkitTransition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},D={height:this.t,width:this.t,opacity:Math.max(2*(1-(j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:{position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}},n.createElement("div",{className:"react-switch-bg",style:k,onClick:i?null:this.T,onMouseDown:function(e){return e.preventDefault()}},h&&n.createElement("div",{style:S},h),p&&n.createElement("div",{style:C},p)),n.createElement("div",{className:"react-switch-handle",style:T,onClick:function(e){return e.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.m,onTouchEnd:i?null:this.M,onTouchCancel:i?null:this.O},m&&n.createElement("div",{style:D},m),u&&n.createElement("div",{style:E},u)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},w,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(n.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56}}},function(e){e.O(0,[255,958,585,544,889,774,888,179],function(){return e(e.s=3881)}),_N_E=e.O()}]);