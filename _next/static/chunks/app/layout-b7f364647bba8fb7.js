(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9864:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,9324,23)),Promise.resolve().then(n.bind(n,6928)),Promise.resolve().then(n.bind(n,5354)),Promise.resolve().then(n.bind(n,9983)),Promise.resolve().then(n.bind(n,6556)),Promise.resolve().then(n.bind(n,8289)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,4619,23))},5354:(e,t,n)=>{"use strict";n.d(t,{default:()=>ed});var r=n(5155),a=n(8173),s=n.n(a),i=n(6046),o=n(2115),l=n(3610),d=n(8068),c=n(8166),u=n(7668),p=n(1488),m=n(9674),f=n(196),h=n(7323),x=n(7028),v=n(3360),g=n(2292),y=n(4065),N=n(5587),w=n(2317),j="Dialog",[b,R]=(0,c.A)(j),[P,E]=b(j),C=e=>{let{__scopeDialog:t,children:n,open:a,defaultOpen:s,onOpenChange:i,modal:l=!0}=e,d=o.useRef(null),c=o.useRef(null),[m=!1,f]=(0,p.i)({prop:a,defaultProp:s,onChange:i});return(0,r.jsx)(P,{scope:t,triggerRef:d,contentRef:c,contentId:(0,u.B)(),titleId:(0,u.B)(),descriptionId:(0,u.B)(),open:m,onOpenChange:f,onOpenToggle:o.useCallback(()=>f(e=>!e),[f]),modal:l,children:n})};C.displayName=j;var M="DialogTrigger",I=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,s=E(M,n),i=(0,d.s)(t,s.triggerRef);return(0,r.jsx)(v.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":Q(s.open),...a,ref:i,onClick:(0,l.m)(e.onClick,s.onOpenToggle)})});I.displayName=M;var O="DialogPortal",[D,k]=b(O,{forceMount:void 0}),_=e=>{let{__scopeDialog:t,forceMount:n,children:a,container:s}=e,i=E(O,t);return(0,r.jsx)(D,{scope:t,forceMount:n,children:o.Children.map(a,e=>(0,r.jsx)(x.C,{present:n||i.open,children:(0,r.jsx)(h.Z,{asChild:!0,container:s,children:e})}))})};_.displayName=O;var A="DialogOverlay",F=o.forwardRef((e,t)=>{let n=k(A,e.__scopeDialog),{forceMount:a=n.forceMount,...s}=e,i=E(A,e.__scopeDialog);return i.modal?(0,r.jsx)(x.C,{present:a||i.open,children:(0,r.jsx)(T,{...s,ref:t})}):null});F.displayName=A;var T=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,s=E(A,n);return(0,r.jsx)(y.A,{as:w.DX,allowPinchZoom:!0,shards:[s.contentRef],children:(0,r.jsx)(v.sG.div,{"data-state":Q(s.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),U="DialogContent",z=o.forwardRef((e,t)=>{let n=k(U,e.__scopeDialog),{forceMount:a=n.forceMount,...s}=e,i=E(U,e.__scopeDialog);return(0,r.jsx)(x.C,{present:a||i.open,children:i.modal?(0,r.jsx)(L,{...s,ref:t}):(0,r.jsx)(S,{...s,ref:t})})});z.displayName=U;var L=o.forwardRef((e,t)=>{let n=E(U,e.__scopeDialog),a=o.useRef(null),s=(0,d.s)(t,n.contentRef,a);return o.useEffect(()=>{let e=a.current;if(e)return(0,N.Eq)(e)},[]),(0,r.jsx)(W,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,l.m)(e.onFocusOutside,e=>e.preventDefault())})}),S=o.forwardRef((e,t)=>{let n=E(U,e.__scopeDialog),a=o.useRef(!1),s=o.useRef(!1);return(0,r.jsx)(W,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),a.current=!1,s.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(s.current=!0));let o=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(o))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&s.current&&t.preventDefault()}})}),W=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:i,...l}=e,c=E(U,n),u=o.useRef(null),p=(0,d.s)(t,u);return(0,g.Oh)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.n,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:s,onUnmountAutoFocus:i,children:(0,r.jsx)(m.qW,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Q(c.open),...l,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{titleId:c.titleId}),(0,r.jsx)($,{contentRef:u,descriptionId:c.descriptionId})]})]})}),B="DialogTitle",H=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,s=E(B,n);return(0,r.jsx)(v.sG.h2,{id:s.titleId,...a,ref:t})});H.displayName=B;var q="DialogDescription",G=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,s=E(q,n);return(0,r.jsx)(v.sG.p,{id:s.descriptionId,...a,ref:t})});G.displayName=q;var V="DialogClose",X=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,s=E(V,n);return(0,r.jsx)(v.sG.button,{type:"button",...a,ref:t,onClick:(0,l.m)(e.onClick,()=>s.onOpenChange(!1))})});function Q(e){return e?"open":"closed"}X.displayName=V;var Y="DialogTitleWarning",[J,Z]=(0,c.q)(Y,{contentName:U,titleName:B,docsSlug:"dialog"}),K=e=>{let{titleId:t}=e,n=Z(Y),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},$=e=>{let{contentRef:t,descriptionId:n}=e,r=Z("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return o.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},ee=n(1027),et=n(4057);let en=(0,et.A)("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);var er=n(9602);let ea=o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(F,{className:(0,er.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a,ref:t})});ea.displayName=F.displayName;let es=(0,ee.F)("fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),ei=o.forwardRef((e,t)=>{let{side:n="right",className:a,children:s,...i}=e;return(0,r.jsxs)(_,{children:[(0,r.jsx)(ea,{}),(0,r.jsxs)(z,{ref:t,className:(0,er.cn)(es({side:n}),a),...i,children:[s,(0,r.jsxs)(X,{className:"absolute top-8 right-8 transition-opacity outline-none focus:outline-none",children:[(0,r.jsx)(en,{className:"text-3xl text-accent"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});ei.displayName=z.displayName,o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(H,{ref:t,className:(0,er.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50",n),...a})}).displayName=H.displayName,o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(G,{ref:t,className:(0,er.cn)("text-sm text-slate-500 dark:text-slate-400",n),...a})}).displayName=G.displayName;let eo=(0,et.A)("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]),el=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}],ed=()=>{let e=(0,i.usePathname)();return(0,r.jsxs)(C,{children:[(0,r.jsx)(I,{className:"flex justify-center items-center",children:(0,r.jsx)(eo,{className:"text-[32px] text-accent"})}),(0,r.jsxs)(ei,{className:"flex flex-col gap-4 p-8",children:[(0,r.jsx)("div",{className:"mt-32 mb-40 text-accent text-2xl",children:(0,r.jsx)(s(),{href:"/",className:"flex items-center gap-2 cursor-pointer",children:(0,r.jsxs)("h1",{className:"text-4xl font-semibold cursor-pointer",children:["Hik Hik ",(0,r.jsx)("span",{className:"text-accent",children:"."})]})})}),(0,r.jsx)("nav",{className:"flex flex-col gap-4",children:el.map((t,n)=>(0,r.jsx)(s(),{href:t.path,className:"".concat(e===t.path&&"text-accent border-b-2 border-accent"," capitalize font-medium hover:text-accent transition-all"),children:t.name},n))})]})]})}},9983:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),a=n(8173),s=n.n(a),i=n(6046);let o=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}],l=()=>{let e=(0,i.usePathname)();return(0,r.jsx)("nav",{className:"flex gap-8",children:o.map((t,n)=>(0,r.jsx)(s(),{href:t.path,className:"".concat(e===t.path&&"text-accent border-b-2 border-accent"," capitalize font-medium hover:text-accent transition-all"),children:t.name},n))})}},6556:(e,t,n)=>{"use strict";n.d(t,{default:()=>o});var r=n(5155),a=n(5683),s=n(9124),i=n(6046);let o=e=>{let{children:t}=e,n=(0,i.usePathname)();return(0,r.jsx)(a.N,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(s.P.div,{initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}},className:"h-screen w-screen fixed top-0 left-0 bg-primary z-50 pointer-events-none"}),t]},n)})}},8289:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var r=n(5155),a=n(5683),s=n(9124),i=n(6046);let o={initial:{top:" 0%"},animate:{top:"100%"},exit:{top:["100%","0%"]}},l=e=>6-e-1,d=()=>(0,r.jsx)(r.Fragment,{children:[...Array(6)].map((e,t)=>(0,r.jsx)(s.P.div,{variants:o,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.4,ease:"easeInOut",delay:.1*l(t)},className:"h-full w-full bg-white relative"},t))}),c=()=>{let e=(0,i.usePathname)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.N,{mode:"wait",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex",children:(0,r.jsx)(d,{})}),(0,r.jsx)(s.P.div,{className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none",initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}}})]},e)})})}},6928:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(5155),a=n(2115);let s=e=>{let{children:t}=e,n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=n.current;if(!e)return;let t=e.getContext("2d"),r=[],a=()=>{e.width=window.innerWidth,e.height=window.innerHeight},s=()=>{t&&(t.clearRect(0,0,e.width,e.height),r.forEach(n=>{n.x+=n.speedX,n.y+=n.speedY,(n.x<0||n.x>e.width)&&(n.speedX*=-1),(n.y<0||n.y>e.height)&&(n.speedY*=-1),t.beginPath(),t.arc(n.x,n.y,n.radius,0,2*Math.PI),t.fillStyle="white",t.fill()})),requestAnimationFrame(s)};return a(),(()=>{r.length=0;for(let t=0;t<100;t++)r.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:2*Math.random(),speedX:.5*Math.random()-.25,speedY:.5*Math.random()-.25})})(),s(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),(0,r.jsxs)("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[(0,r.jsx)("canvas",{ref:n,id:"dustCanvas",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}}),(0,r.jsx)("div",{style:{position:"relative",zIndex:1},children:t})]})}},9602:(e,t,n)=>{"use strict";n.d(t,{cn:()=>s});var r=n(3463),a=n(9795);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.QP)((0,r.$)(t))}},6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},9324:()=>{},4619:e=>{e.exports={style:{fontFamily:"'JetBrains Mono', 'JetBrains Mono Fallback'",fontStyle:"normal"},className:"__className_c5dbd7",variable:"__variable_c5dbd7"}},7028:(e,t,n)=>{"use strict";n.d(t,{C:()=>i});var r=n(2115),a=n(8068),s=n(6611),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[a,i]=r.useState(),l=r.useRef({}),d=r.useRef(e),c=r.useRef("none"),[u,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=o(l.current);c.current="mounted"===u?e:"none"},[u]),(0,s.N)(()=>{let t=l.current,n=d.current;if(n!==e){let r=c.current,a=o(t);e?p("MOUNT"):"none"===a||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==a?p("ANIMATION_OUT"):p("UNMOUNT"),d.current=e}},[e,p]),(0,s.N)(()=>{if(a){var e;let t;let n=null!==(e=a.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=o(l.current).includes(e.animationName);if(e.target===a&&r&&(p("ANIMATION_END"),!d.current)){let e=a.style.animationFillMode;a.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===a.style.animationFillMode&&(a.style.animationFillMode=e)})}},s=e=>{e.target===a&&(c.current=o(l.current))};return a.addEventListener("animationstart",s),a.addEventListener("animationcancel",r),a.addEventListener("animationend",r),()=>{n.clearTimeout(t),a.removeEventListener("animationstart",s),a.removeEventListener("animationcancel",r),a.removeEventListener("animationend",r)}}p("ANIMATION_END")},[a,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),l="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),d=(0,a.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,a=r&&"isReactWarning"in r&&r.isReactWarning;return a?e.ref:(a=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof n||i.isPresent?r.cloneElement(l,{ref:d}):null};function o(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},5683:(e,t,n)=>{"use strict";n.d(t,{N:()=>v});var r=n(5155),a=n(2115),s=n(4710),i=n(9234),o=n(9656),l=n(7249);class d extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n}=e,s=(0,a.useId)(),i=(0,a.useRef)(null),o=(0,a.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,a.useContext)(l.Q);return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:a}=o.current;if(n||!i.current||!e||!t)return;i.current.dataset.motionPopId=s;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(a,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,r.jsx)(d,{isPresent:n,childRef:i,sizeRef:o,children:a.cloneElement(t,{ref:i})})}let u=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:l,custom:d,presenceAffectsLayout:u,mode:m}=e,f=(0,i.M)(p),h=(0,a.useId)(),x=(0,a.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;l&&l()},[f,l]),v=(0,a.useMemo)(()=>({id:h,initial:n,isPresent:s,custom:d,onExitComplete:x,register:e=>(f.set(e,!1),()=>f.delete(e))}),u?[Math.random(),x]:[s,x]);return(0,a.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[s]),a.useEffect(()=>{s||f.size||!l||l()},[s]),"popLayout"===m&&(t=(0,r.jsx)(c,{isPresent:s,children:t})),(0,r.jsx)(o.t.Provider,{value:v,children:t})};function p(){return new Map}var m=n(5087);let f=e=>e.key||"";function h(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var x=n(5403);let v=e=>{let{children:t,custom:n,initial:o=!0,onExitComplete:l,presenceAffectsLayout:d=!0,mode:c="sync",propagate:p=!1}=e,[v,g]=(0,m.xQ)(p),y=(0,a.useMemo)(()=>h(t),[t]),N=p&&!v?[]:y.map(f),w=(0,a.useRef)(!0),j=(0,a.useRef)(y),b=(0,i.M)(()=>new Map),[R,P]=(0,a.useState)(y),[E,C]=(0,a.useState)(y);(0,x.E)(()=>{w.current=!1,j.current=y;for(let e=0;e<E.length;e++){let t=f(E[e]);N.includes(t)?b.delete(t):!0!==b.get(t)&&b.set(t,!1)}},[E,N.length,N.join("-")]);let M=[];if(y!==R){let e=[...y];for(let t=0;t<E.length;t++){let n=E[t],r=f(n);N.includes(r)||(e.splice(t,0,n),M.push(n))}"wait"===c&&M.length&&(e=M),C(h(e)),P(y);return}let{forceRender:I}=(0,a.useContext)(s.L);return(0,r.jsx)(r.Fragment,{children:E.map(e=>{let t=f(e),a=(!p||!!v)&&(y===E||N.includes(t));return(0,r.jsx)(u,{isPresent:a,initial:(!w.current||!!o)&&void 0,custom:a?void 0:n,presenceAffectsLayout:d,mode:c,onExitComplete:a?void 0:()=>{if(!b.has(t))return;b.set(t,!0);let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(null==I||I(),C(j.current),p&&(null==g||g()),l&&l())},children:e},t)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,152,345,173,937,441,517,358],()=>t(9864)),_N_E=e.O()}]);