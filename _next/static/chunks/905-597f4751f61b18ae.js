(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},4619:e=>{e.exports={style:{fontFamily:"'JetBrains Mono', 'JetBrains Mono Fallback'",fontStyle:"normal"},className:"__className_c5dbd7",variable:"__variable_c5dbd7"}},6217:(e,t,n)=>{"use strict";n.d(t,{UC:()=>et,VY:()=>er,ZL:()=>$,bL:()=>X,bm:()=>eo,hE:()=>en,hJ:()=>ee,l9:()=>Y});var r=n(2115),o=n(3610),a=n(8068),i=n(8166),s=n(7668),l=n(1488),u=n(9674),d=n(196),c=n(7323),m=n(7028),p=n(3360),f=n(2292),h=n(4065),g=n(5587),y=n(2317),v=n(5155),w="Dialog",[b,x]=(0,i.A)(w),[C,E]=b(w),N=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:u=!0}=e,d=r.useRef(null),c=r.useRef(null),[m=!1,p]=(0,l.i)({prop:o,defaultProp:a,onChange:i});return(0,v.jsx)(C,{scope:t,triggerRef:d,contentRef:c,contentId:(0,s.B)(),titleId:(0,s.B)(),descriptionId:(0,s.B)(),open:m,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:u,children:n})};N.displayName=w;var k="DialogTrigger",M=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=E(k,n),s=(0,a.s)(t,i.triggerRef);return(0,v.jsx)(p.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":V(i.open),...r,ref:s,onClick:(0,o.m)(e.onClick,i.onOpenToggle)})});M.displayName=k;var R="DialogPortal",[A,D]=b(R,{forceMount:void 0}),I=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=E(R,t);return(0,v.jsx)(A,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,v.jsx)(m.C,{present:n||i.open,children:(0,v.jsx)(c.Z,{asChild:!0,container:a,children:e})}))})};I.displayName=R;var T="DialogOverlay",j=r.forwardRef((e,t)=>{let n=D(T,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=E(T,e.__scopeDialog);return a.modal?(0,v.jsx)(m.C,{present:r||a.open,children:(0,v.jsx)(O,{...o,ref:t})}):null});j.displayName=T;var O=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=E(T,n);return(0,v.jsx)(h.A,{as:y.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,v.jsx)(p.sG.div,{"data-state":V(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),P="DialogContent",S=r.forwardRef((e,t)=>{let n=D(P,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=E(P,e.__scopeDialog);return(0,v.jsx)(m.C,{present:r||a.open,children:a.modal?(0,v.jsx)(_,{...o,ref:t}):(0,v.jsx)(F,{...o,ref:t})})});S.displayName=P;var _=r.forwardRef((e,t)=>{let n=E(P,e.__scopeDialog),i=r.useRef(null),s=(0,a.s)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,g.Eq)(e)},[]),(0,v.jsx)(L,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault())})}),F=r.forwardRef((e,t)=>{let n=E(P,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,v.jsx)(L,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let s=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(s))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),L=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:s,...l}=e,c=E(P,n),m=r.useRef(null),p=(0,a.s)(t,m);return(0,f.Oh)(),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.n,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:s,children:(0,v.jsx)(u.qW,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":V(c.open),...l,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z,{titleId:c.titleId}),(0,v.jsx)(Q,{contentRef:m,descriptionId:c.descriptionId})]})]})}),U="DialogTitle",W=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=E(U,n);return(0,v.jsx)(p.sG.h2,{id:o.titleId,...r,ref:t})});W.displayName=U;var B="DialogDescription",q=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=E(B,n);return(0,v.jsx)(p.sG.p,{id:o.descriptionId,...r,ref:t})});q.displayName=B;var H="DialogClose",z=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=E(H,n);return(0,v.jsx)(p.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>a.onOpenChange(!1))})});function V(e){return e?"open":"closed"}z.displayName=H;var G="DialogTitleWarning",[J,K]=(0,i.q)(G,{contentName:P,titleName:U,docsSlug:"dialog"}),Z=e=>{let{titleId:t}=e,n=K(G),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},Q=e=>{let{contentRef:t,descriptionId:n}=e,o=K("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},X=N,Y=M,$=I,ee=j,et=S,en=W,er=q,eo=z},7028:(e,t,n)=>{"use strict";n.d(t,{C:()=>i});var r=n(2115),o=n(8068),a=n(6611),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=r.useState(),l=r.useRef({}),u=r.useRef(e),d=r.useRef("none"),[c,m]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=s(l.current);d.current="mounted"===c?e:"none"},[c]),(0,a.N)(()=>{let t=l.current,n=u.current;if(n!==e){let r=d.current,o=s(t);e?m("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):n&&r!==o?m("ANIMATION_OUT"):m("UNMOUNT"),u.current=e}},[e,m]),(0,a.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=s(l.current).includes(e.animationName);if(e.target===o&&r&&(m("ANIMATION_END"),!u.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(d.current=s(l.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}m("ANIMATION_END")},[o,m]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),l="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),u=(0,o.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof n||i.isPresent?r.cloneElement(l,{ref:u}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},5683:(e,t,n)=>{"use strict";n.d(t,{N:()=>y});var r=n(5155),o=n(2115),a=n(4710),i=n(9234),s=n(9656),l=n(7249);class u extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:n}=e,a=(0,o.useId)(),i=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,o.useContext)(l.Q);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:o}=s.current;if(n||!i.current||!e||!t)return;i.current.dataset.motionPopId=a;let l=document.createElement("style");return d&&(l.nonce=d),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,r.jsx)(u,{isPresent:n,childRef:i,sizeRef:s,children:o.cloneElement(t,{ref:i})})}let c=e=>{let{children:t,initial:n,isPresent:a,onExitComplete:l,custom:u,presenceAffectsLayout:c,mode:p}=e,f=(0,i.M)(m),h=(0,o.useId)(),g=(0,o.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;l&&l()},[f,l]),y=(0,o.useMemo)(()=>({id:h,initial:n,isPresent:a,custom:u,onExitComplete:g,register:e=>(f.set(e,!1),()=>f.delete(e))}),c?[Math.random(),g]:[a,g]);return(0,o.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[a]),o.useEffect(()=>{a||f.size||!l||l()},[a]),"popLayout"===p&&(t=(0,r.jsx)(d,{isPresent:a,children:t})),(0,r.jsx)(s.t.Provider,{value:y,children:t})};function m(){return new Map}var p=n(5087);let f=e=>e.key||"";function h(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var g=n(5403);let y=e=>{let{children:t,custom:n,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:d="sync",propagate:m=!1}=e,[y,v]=(0,p.xQ)(m),w=(0,o.useMemo)(()=>h(t),[t]),b=m&&!y?[]:w.map(f),x=(0,o.useRef)(!0),C=(0,o.useRef)(w),E=(0,i.M)(()=>new Map),[N,k]=(0,o.useState)(w),[M,R]=(0,o.useState)(w);(0,g.E)(()=>{x.current=!1,C.current=w;for(let e=0;e<M.length;e++){let t=f(M[e]);b.includes(t)?E.delete(t):!0!==E.get(t)&&E.set(t,!1)}},[M,b.length,b.join("-")]);let A=[];if(w!==N){let e=[...w];for(let t=0;t<M.length;t++){let n=M[t],r=f(n);b.includes(r)||(e.splice(t,0,n),A.push(n))}"wait"===d&&A.length&&(e=A),R(h(e)),k(w);return}let{forceRender:D}=(0,o.useContext)(a.L);return(0,r.jsx)(r.Fragment,{children:M.map(e=>{let t=f(e),o=(!m||!!y)&&(w===M||b.includes(t));return(0,r.jsx)(c,{isPresent:o,initial:(!x.current||!!s)&&void 0,custom:o?void 0:n,presenceAffectsLayout:u,mode:d,onExitComplete:o?void 0:()=>{if(!E.has(t))return;E.set(t,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(null==D||D(),R(C.current),m&&(null==v||v()),l&&l())},children:e},t)})})}},3943:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(4057).A)("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]])},5575:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(4057).A)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]])},8482:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(4057).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},7285:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(4057).A)("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]])},6535:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(4057).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},7113:(e,t,n)=>{"use strict";n.d(t,{D:()=>d,N:()=>c});var r=n(2115),o=(e,t,n,r,o,a,i,s)=>{let l=document.documentElement,u=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?o.map(e=>a[e]||e):o;n?(l.classList.remove(...r),l.classList.add(t)):l.setAttribute(e,t)}),s&&u.includes(t)&&(l.style.colorScheme=t)}if(r)d(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(r)}catch(e){}},a=["light","dark"],i="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=r.createContext(void 0),u={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=r.useContext(l))?e:u},c=e=>r.useContext(l)?r.createElement(r.Fragment,null,e.children):r.createElement(p,{...e}),m=["light","dark"],p=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:d=m,defaultTheme:c=o?"system":"light",attribute:p="data-theme",value:v,children:w,nonce:b,scriptProps:x}=e,[C,E]=r.useState(()=>h(u,c)),[N,k]=r.useState(()=>h(u)),M=v?Object.values(v):d,R=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=y());let r=v?v[t]:t,i=n?g(b):null,l=document.documentElement,u=e=>{"class"===e?(l.classList.remove(...M),r&&l.classList.add(r)):e.startsWith("data-")&&(r?l.setAttribute(e,r):l.removeAttribute(e))};if(Array.isArray(p)?p.forEach(u):u(p),s){let e=a.includes(c)?c:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==i||i()},[b]),A=r.useCallback(e=>{let t="function"==typeof e?e(C):e;E(t);try{localStorage.setItem(u,t)}catch(e){}},[C]),D=r.useCallback(e=>{k(y(e)),"system"===C&&o&&!t&&R("system")},[C,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(D),D(e),()=>e.removeListener(D)},[D]),r.useEffect(()=>{let e=e=>{e.key===u&&(e.newValue?E(e.newValue):A(c))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),r.useEffect(()=>{R(null!=t?t:C)},[t,C]);let I=r.useMemo(()=>({theme:C,setTheme:A,forcedTheme:t,resolvedTheme:"system"===C?N:C,themes:o?[...d,"system"]:d,systemTheme:o?N:void 0}),[C,A,t,N,o,d]);return r.createElement(l.Provider,{value:I},r.createElement(f,{forcedTheme:t,storageKey:u,attribute:p,enableSystem:o,enableColorScheme:s,defaultTheme:c,value:v,themes:d,nonce:b,scriptProps:x}),w)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:i,enableColorScheme:s,defaultTheme:l,value:u,themes:d,nonce:c,scriptProps:m}=e,p=JSON.stringify([a,n,l,t,d,u,i,s]).slice(1,-1);return r.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(p,")")}})}),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);