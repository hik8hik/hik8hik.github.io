(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7528:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,9324,23)),Promise.resolve().then(a.bind(a,1585)),Promise.resolve().then(a.bind(a,9983)),Promise.resolve().then(a.bind(a,6556)),Promise.resolve().then(a.bind(a,8289)),Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.t.bind(a,4619,23))},1585:(e,t,a)=>{"use strict";a.d(t,{default:()=>j});var s=a(5155),n=a(8173),i=a.n(n),r=a(6046),l=a(2115),o=a(6095),c=a(1027),d=a(7285),m=a(9602);let h=o.bL,x=o.l9;o.bm;let p=o.ZL,u=l.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(o.hJ,{className:(0,m.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n,ref:t})});u.displayName=o.hJ.displayName;let f=(0,c.F)("fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),b=l.forwardRef((e,t)=>{let{side:a="right",className:n,children:i,...r}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(o.UC,{ref:t,className:(0,m.cn)(f({side:a}),n),...r,children:[i,(0,s.jsxs)(o.bm,{className:"absolute top-8 right-8 transition-opacity outline-none focus:outline-none",children:[(0,s.jsx)(d.A,{className:"text-3xl text-accent"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});b.displayName=o.UC.displayName,l.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(o.hE,{ref:t,className:(0,m.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50",a),...n})}).displayName=o.hE.displayName,l.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(o.VY,{ref:t,className:(0,m.cn)("text-sm text-slate-500 dark:text-slate-400",a),...n})}).displayName=o.VY.displayName;var v=a(3943);let N=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}],j=()=>{let e=(0,r.usePathname)();return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{className:"flex justify-center items-center",children:(0,s.jsx)(v.A,{className:"text-[32px] text-accent"})}),(0,s.jsxs)(b,{className:"flex flex-col gap-4 p-8",children:[(0,s.jsx)("div",{className:"mt-32 mb-40 text-accent text-2xl",children:(0,s.jsx)(i(),{href:"/",className:"flex items-center gap-2 cursor-pointer",children:(0,s.jsxs)("h1",{className:"text-4xl font-semibold cursor-pointer",children:["Hik Hik ",(0,s.jsx)("span",{className:"text-accent",children:"."})]})})}),(0,s.jsx)("nav",{className:"flex flex-col gap-4",children:N.map((t,a)=>(0,s.jsx)(i(),{href:t.path,className:"".concat(e===t.path&&"text-accent border-b-2 border-accent"," capitalize font-medium hover:text-accent transition-all"),children:t.name},a))})]})]})}},9983:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(5155),n=a(8173),i=a.n(n),r=a(6046);let l=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}],o=()=>{let e=(0,r.usePathname)();return(0,s.jsx)("nav",{className:"flex gap-8",children:l.map((t,a)=>(0,s.jsx)(i(),{href:t.path,className:"".concat(e===t.path&&"text-accent border-b-2 border-accent"," capitalize font-medium hover:text-accent transition-all"),children:t.name},a))})}},6556:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var s=a(5155),n=a(5683),i=a(9124),r=a(6046);let l=e=>{let{children:t}=e,a=(0,r.usePathname)();return(0,s.jsx)(n.N,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(i.P.div,{initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}},className:"h-screen w-screen fixed top-0 left-0 bg-primary z-50 pointer-events-none"}),t]},a)})}},8289:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var s=a(5155),n=a(5683),i=a(9124),r=a(6046);let l={initial:{top:" 0%"},animate:{top:"100%"},exit:{top:["100%","0%"]}},o=e=>6-e-1,c=()=>(0,s.jsx)(s.Fragment,{children:[...Array(6)].map((e,t)=>(0,s.jsx)(i.P.div,{variants:l,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.4,ease:"easeInOut",delay:.1*o(t)},className:"h-full w-full bg-white relative"},t))}),d=()=>{let e=(0,r.usePathname)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.N,{mode:"wait",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex",children:(0,s.jsx)(c,{})}),(0,s.jsx)(i.P.div,{className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none",initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}}})]},e)})})}},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(3463),n=a(9795);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.QP)((0,s.$)(t))}},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[970,368,892,441,517,358],()=>t(7528)),_N_E=e.O()}]);