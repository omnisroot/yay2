"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8224],{98224:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(85893),a=n(67294);let i=(0,a.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}))),o=(0,a.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}))),s=(0,a.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}))),l=(0,a.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})})));let c="48px",d="32px",u=n(41686).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${d};
  padding-top: ${c};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${d} ${d};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    div {
      color: rgb(167, 167, 167);
      font-size: 13px;
      padding: 0 38px;
      text-align: center;
    }

    img {
      display: ${({$showImage:e})=>e?"block":"none"};
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${c};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${c};
      width: ${c};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 50%);
      }

      &:active {
        background-color: rgba(100, 100, 100, 50%);
      }
    }
  }
`;var m=n(4534),h=n(25471),f=n(13275),v=n(80137),p=n(1864);let g={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var w=(e,t,n)=>{let[r,i]=(0,a.useState)(),{getScale:o,reset:s,zoomIn:l,zoomOut:c,zoomToPoint:d,zoomWithWheel:u}=r||{},{processes:{[e]:w}}=(0,f.z)(),{closing:x,componentWindow:b,url:T=""}=w||{},{prependFileToTitle:L}=(0,h.Z)(e),$=(0,a.useCallback)((e=>{let{detail:{scale:t=0,x:n=0,y:a=0}={}}=e||{};if(T&&t){let{minScale:e,step:i}=g,o=t<e+i;o&&(n||a)&&window.setTimeout((()=>r?.reset()),50),x||L(o?(0,p.basename)(T):`${(0,p.basename)(T)} (${Math.floor(100*t)}%)`)}}),[x,r,L,T]),y=(0,a.useCallback)((e=>u?.(e,{step:.3})),[u]);return(0,v.Z)(b,s),(0,a.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",$),n.addEventListener("wheel",y)),()=>{t?.removeEventListener("panzoomchange",$),n?.removeEventListener("wheel",y)})),[n,t,$,y]),(0,a.useEffect)((()=>(t&&!r&&i((0,m.Z)(t,g)),()=>r?.destroy())),[t,r]),{reset:s,scale:o?.(),zoomIn:l,zoomOut:c,zoomToPoint:d}},x=n(7316),b=n(29222),T=n(81510),L=n(99786),$=n(44714),y=n(49108),j=n(46499),k=n(48764).Buffer;let{maxScale:z,minScale:E}=g,C=async e=>{let t=await(0,j.iQ)(),{parseAni:r}=await n.e(396).then(n.bind(n,70396)),a=[];try{({images:a}=r(e))}catch{return e}return await Promise.all(a.map((e=>new Promise((n=>{let r=new Image,a=(0,j.YS)(k.from(e));r.addEventListener("load",(()=>{t.addFrame(r),(0,j.EK)(a),n()}),y.K7),r.src=a}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(k.from(t)))))).render()}))};var Z=({id:e})=>{let{processes:{[e]:t}={},url:c}=(0,f.z)(),{componentWindow:d,closing:m=!1,url:v=""}=t||{},[g,k]=(0,a.useState)({}),[Z,P]=(0,a.useState)(!1),{prependFileToTitle:S}=(0,h.Z)(e),{readFile:R,readdir:M}=(0,b.o)(),q=(0,a.useRef)(null),F=(0,a.useRef)(null),O=(0,a.useRef)(null),{reset:H,scale:I,zoomIn:A,zoomOut:B,zoomToPoint:D}=w(e,F.current,O.current),{fullscreenElement:U,toggleFullscreen:W}=(0,T.S)(),_=(0,a.useCallback)((async()=>{let e=await R(v),t=(0,j.RT)(v);if([".ani",".cur"].includes(t))e=await C(e);else if(".jxl"===t)e=(0,j.fv)(await(0,j.dU)(e));else if(".qoi"===t){let{decodeQoi:t}=await n.e(4397).then(n.bind(n,44397));e=t(e)}else y.M0.has(t)&&(e=(await n.e(6173).then(n.t.bind(n,66173,23))).bufferToURI(e).replace("data:image/png;base64,",""));k((t=>{let[n]=Object.keys(t);if(n){if(n===v)return t;H?.()}return{[v]:(0,j.wB)(v,e)}})),S((0,p.basename)(v))}),[S,R,H,v]),K=(0,a.useCallback)((async({key:t})=>{switch(t){case"ArrowRight":case"ArrowLeft":{let n=await M((0,p.dirname)(v)),r=n.indexOf((0,p.basename)(v)),a=(t,r)=>{if(-1===t)return;let i=t+(r?1:-1);if(-1===i||i===n.length)return;let o=n[i];y.lM.has((0,j.RT)(o))?c(e,(0,p.join)((0,p.dirname)(v),o)):a(i,r)};a(r,"ArrowRight"===t)}}}),[e,M,c,v]);return(0,a.useEffect)((()=>{!v||g[v]||m||_()}),[m,_,g,v]),(0,a.useEffect)((()=>(d?.addEventListener("keydown",K),()=>d?.removeEventListener("keydown",K))),[d,K]),(0,r.jsxs)(u,{ref:q,$showImage:!(!g[v]||Z),onContextMenu:j.nK,...(0,x.Z)({id:e}),children:[(0,r.jsxs)("nav",{className:"top",children:[(0,r.jsx)($.Z,{disabled:!v||I===z||Z,onClick:A,...(0,j.PS)("Zoom in"),children:(0,r.jsx)(s,{})}),(0,r.jsx)($.Z,{disabled:!v||I===E||Z,onClick:B,...(0,j.PS)("Zoom out"),children:(0,r.jsx)(l,{})})]}),(0,r.jsxs)("figure",{ref:O,...(0,L.Z)((e=>{I===E?D?.(2*E,e,{animate:!0}):H?.()})),children:[(0,r.jsx)("img",{ref:F,alt:(0,p.basename)(v,(0,p.extname)(v)),decoding:"async",loading:"eager",onError:()=>P(!0),onLoad:()=>P(!1),src:g[v],...y.h7}),Z&&(0,r.jsxs)("div",{children:[(0,p.basename)(v),(0,r.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,r.jsx)("nav",{className:"bottom",children:(0,r.jsx)($.Z,{disabled:!v,onClick:()=>W(q.current,"show"),...(0,j.PS)("Full-screen"),children:U===q.current?(0,r.jsx)(o,{}):(0,r.jsx)(i,{})})})]})}},7316:function(e,t,n){var r=n(73260),a=n(82973),i=n(60480),o=n(29222),s=n(13275),l=n(38246),c=n(1864),d=n(67294),u=n(49108),m=n(46499);t.Z=({callback:e,directory:t=u.Ll,id:n,onDragLeave:h,onDragOver:f,updatePositions:v})=>{let{url:p}=(0,s.z)(),{iconPositions:g,sortOrders:w,setIconPositions:x}=(0,l.k)(),{mkdirRecursive:b,updateFolder:T,writeFile:L}=(0,o.o)(),$=(0,d.useCallback)((async(e,t,r)=>{if(n)if(t){let a=(0,c.join)(u.Ll,e);if(await b(u.Ll),await L(a,t,!0))return r===i.v.UPDATE_URL&&p(n,a),T(u.Ll,e),(0,c.basename)(a)}else r===i.v.UPDATE_URL&&p(n,e);return""}),[n,b,T,p,L]),{openTransferDialog:y}=(0,r.Z)();return{onDragLeave:h,onDragOver:e=>{f?.(e),(0,m.nK)(e)},onDrop:r=>{if(!u.my.has((0,m.RT)(t))){if(v&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,a.p4)(r);if(0===e.length&&""===n)return;let i={x:r.clientX,y:r.clientY},o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!g[`${t}/${e}`])return e;let n=0,r="";do{n+=1,r=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${n})${(0,c.extname)(e)}`}while(g[r]);return(0,c.basename)(r)})),(0,m.vi)(t,r.target,g,w,i,o,x)}(0,a.WG)(r,e||$,t,y,!!n)}}}}},25471:function(e,t,n){var r=n(13275),a=n(21023),i=n(67294),o=n(49108);t.Z=e=>{let{title:t}=(0,r.z)(),[n]=e.split(o.CC),{title:s}=a.Z[n]||{},l=(0,i.useCallback)(((n,r)=>{let a=n?` - ${n}${r?` ${o.xy}`:""}`:"";t(e,`${s}${a}`)}),[e,s,t]),c=(0,i.useCallback)(((n,r,a)=>{let i=n?`${r?`${o.xy} `:""}${n}${a?" ":" - "}`:"";t(e,`${i}${s}`)}),[e,s,t]);return{appendFileToTitle:l,prependFileToTitle:c}}},99786:function(e,t,n){var r=n(67294),a=n(49108);t.Z=(e,t=!1)=>{let n=(0,r.useRef)(),i=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{let o=()=>{r.stopPropagation(),e(r)},s=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},l=()=>{i.current>=5&&s(),void 0===n.current?(r.target.removeEventListener("pointermove",l),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(s,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",l,{passive:!0})):(s(),o())}),[e,t]);return{onClick:o}}},80137:function(e,t,n){var r=n(67294);t.Z=(e,t)=>{let[n,a]=(0,r.useState)();(0,r.useEffect)((()=>{t&&a(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);