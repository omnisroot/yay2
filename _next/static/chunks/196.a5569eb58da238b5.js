"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{20196:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(85893),r=n(41686);let a=r.ZP.div.withConfig({componentId:"sc-9c70fec5-0"})`
  font-size: 13px;
  overflow-x: hidden;
  overflow-y: scroll;

  ${({$drop:e})=>e&&r.iv`
      &::before {
        content: "Drop OTF/TTF/WOFF file here";
        display: flex;
        font-size: 16px;
        font-weight: 600;
        height: 100%;
        left: 0;
        place-content: center;
        place-items: center;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `}

  ol {
    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }

    padding: 2px 0;
  }

  figure {
    align-items: center;
    display: flex;
    padding-top: 2px;

    figcaption {
      padding-right: 15px;
    }
  }
`;var l=n(7316),s=n(29222),o=n(13275),c=n(21023),u=n(67294),f=n(46499);let d=[12,18,24,36,48,60,72],p=4/3,h=e=>e?e.en||Object.values(e)[0]:"",x=(0,u.memo)((({font:e,fontSize:t,hideLabel:n,text:r})=>{let a=(0,u.useRef)(null),l=(0,i.jsx)("canvas",{ref:a});return(0,u.useEffect)((()=>{if(!e||!a.current)return;let n=Math.ceil(t*p),i=e.getPath(r||"The quick brown fox jumps over the lazy dog. 1234567890",0,n,n),{x2:l,y2:s}=i.getBoundingBox();a.current.setAttribute("height",`${Math.ceil(s)}`),a.current.setAttribute("width",`${Math.ceil(l)}`),i.draw(a.current.getContext("2d"))}),[e,t,r]),n?l:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:t}),l]})}));var m=(0,u.memo)((({id:e})=>{let{processes:{[e]:{url:t=""}={}}={},title:r}=(0,o.z)(),{readFile:p}=(0,s.o)(),[m,g]=(0,u.useState)(),[b,v]=(0,u.useState)(!0),y=(0,u.useCallback)((async e=>{v(!1);let{default:t}=await Promise.all([n.e(3257),n.e(6102)]).then(n.bind(n,44422)),{buffer:i}=await p(e);try{g(t.parse(i))}catch{v(!0)}}),[p]),{name:j,types:w,version:L}=(0,u.useMemo)((()=>{let e=[];return m?.supported&&e.push("OpenType Layout"),"truetype"===m?.outlinesFormat&&e.push("TrueType Outlines"),{name:h(m?.names.fullName),types:e.join(", "),version:h(m?.names.version)}}),[m]);return(0,u.useEffect)((()=>{t&&y(t)}),[y,t]),(0,u.useEffect)((()=>r(e,j?`${j} (${c.Z.OpenType.title})`:c.Z.OpenType.title)),[e,j,r]),(0,i.jsx)(a,{$drop:b,...(0,l.Z)({id:e}),onContextMenuCapture:f.nK,children:m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Font name: ",j]}),(0,i.jsxs)("li",{children:["Version: ",L]}),(0,i.jsx)("li",{children:w})]}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(x,{font:m,fontSize:15,text:"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",hideLabel:!0})}),(0,i.jsx)("li",{children:(0,i.jsx)(x,{font:m,fontSize:15,text:"1234567890.:,; ' \" (!?) +-*/=",hideLabel:!0})})]}),(0,i.jsx)("ol",{children:d.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(x,{font:m,fontSize:e})},e)))})]})})}))},7316:function(e,t,n){var i=n(73260),r=n(82973),a=n(60480),l=n(29222),s=n(13275),o=n(38246),c=n(1864),u=n(67294),f=n(49108),d=n(46499);t.Z=({callback:e,directory:t=f.Ll,id:n,onDragLeave:p,onDragOver:h,updatePositions:x})=>{let{url:m}=(0,s.z)(),{iconPositions:g,sortOrders:b,setIconPositions:v}=(0,o.k)(),{mkdirRecursive:y,updateFolder:j,writeFile:w}=(0,l.o)(),L=(0,u.useCallback)((async(e,t,i)=>{if(n)if(t){let r=(0,c.join)(f.Ll,e);if(await y(f.Ll),await w(r,t,!0))return i===a.v.UPDATE_URL&&m(n,r),j(f.Ll,e),(0,c.basename)(r)}else i===a.v.UPDATE_URL&&m(n,e);return""}),[n,y,j,m,w]),{openTransferDialog:T}=(0,i.Z)();return{onDragLeave:p,onDragOver:e=>{h?.(e),(0,d.nK)(e)},onDrop:i=>{if(!f.my.has((0,d.RT)(t))){if(x&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,r.p4)(i);if(0===e.length&&""===n)return;let a={x:i.clientX,y:i.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!g[`${t}/${e}`])return e;let n=0,i="";do{n+=1,i=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${n})${(0,c.extname)(e)}`}while(g[i]);return(0,c.basename)(i)})),(0,d.vi)(t,i.target,g,b,a,l,v)}(0,r.WG)(i,e||L,t,T,!!n)}}}}}}]);