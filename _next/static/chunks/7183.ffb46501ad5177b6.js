"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7183],{77183:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=i(85893),r=i(91386),o=i(71183),a=i(41686),s=i(49108);let c=(0,a.ZP)(o.m.div).withConfig({componentId:"sc-b2b41f69-0"})`
  background-color: ${({theme:e})=>e.colors.taskbar.background};
  border: ${({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  bottom: ${s.bK}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  transform: ${({$offsetX:e})=>e?`translateX(${e}px)`:void 0};

  ${r.Z}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${({theme:e})=>e.colors.taskbar.activeForeground};
    }
  }

  img {
    height: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.height}px;
    margin: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.margin}px;
    max-height: ${s.yM}px;
    max-width: ${s.yM}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20);
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }
`;var l=()=>{let{sizes:{taskbar:e}}=(0,a.Fg)(),t=e.entry.peekImage.height+2*e.entry.peekImage.margin;return{animate:"active",exit:"initial",initial:"initial",transition:{duration:s.Nb.WINDOW,ease:"easeInOut"},variants:{active:{height:t,opacity:1},initial:{height:0,opacity:0}}}},h=i(13275),u=i(67294),d=i(46499);let m=async(e,t,i)=>{let n;if(!t.current)return;let r=()=>window.requestAnimationFrame((()=>m(e,t,i))),o=await(0,d.mZ)();try{n=await(o?.toCanvas(e,{...e.clientWidth>s.yM&&{canvasHeight:Math.round(s.yM/e.clientWidth*e.clientHeight),canvasWidth:s.yM},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0"}}))}catch{}if(n&&n.width>0&&n.height>0)if((0,d.H5)(n)){let e=new Image,o=n.toDataURL();e.addEventListener("load",(()=>{t.current&&(i(o),window.setTimeout(r,s.i2/15))}),s.K7),e.src=o}else r()};var g=i(81705),w=i(91367),p=i(38246),v=i(44714),f=(0,u.memo)((({id:e})=>{let{minimize:t,processes:{[e]:{minimized:i=!1,title:r=e}={}}}=(0,h.z)(),{setForegroundId:o}=(0,p.k)(),{onClose:a}=(0,w.Z)(e),[f,x]=(0,u.useState)(0),b=(e=>{let{processes:{[e]:t}}=(0,h.z)(),{peekElement:i,componentWindow:n}=t||{},r=(0,u.useRef)(),[o,a]=(0,u.useState)(""),c=(0,u.useRef)(!0);return(0,u.useEffect)((()=>{let e=i||n;return!r.current&&e&&(r.current=window.setTimeout((()=>window.requestAnimationFrame((()=>m(e,c,a)))),document.querySelector(".peekWindow")?0:s.i2/2),c.current=!0),()=>{r.current&&(clearTimeout(r.current),r.current=void 0),c.current=!1}}),[n,i]),o})(e),k=l(),y=(0,u.useRef)(null);return(0,u.useLayoutEffect)((()=>{if(b){let{left:e=0,right:t=0}=y.current?.getBoundingClientRect()||{},i=(0,d.E9)();e<0?x(Math.abs(e)):t>i&&x(i-t)}}),[b]),b?(0,n.jsxs)(c,{ref:y,$offsetX:f,className:"peekWindow",onClick:()=>{i&&t(e),o(e)},...k,...s.LL,children:[(0,n.jsx)("img",{alt:r,decoding:"async",loading:"eager",src:b,...s.h7}),(0,n.jsx)(v.Z,{onClick:a,...(0,d.PS)("Close"),children:(0,n.jsx)(g.Tw,{})})]}):null}))},81705:function(e,t,i){i.d(t,{J6:function(){return s},Tw:function(){return c},bJ:function(){return a},dO:function(){return o}});var n=i(85893),r=i(67294);let o=(0,r.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0h10v1H0z"})}))),a=(0,r.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})}))),s=(0,r.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})}))),c=(0,r.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})})))}}]);