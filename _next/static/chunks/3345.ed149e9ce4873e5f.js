"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3345],{23345:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(85893),o=r(41686),i=r(45949);let a=o.ZP.div.withConfig({componentId:"sc-c7345c5b-0"})`
  canvas[style*="cursor: none;"] {
    cursor: default !important;
  }

  canvas {
    height: 100%;
    width: 100%;
  }

  ol {
    ${(0,i.Z)()};
    background-color: rgb(32, 33, 36);
    color: rgb(232, 234, 237);
    font-family: "Lucida Grande", sans-serif, monospace;
    font-size: 13px;
    height: 100%;
    line-height: 19px;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;

    li {
      border-bottom: 1px solid rgb(58, 58, 58);
      padding: 0 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;var l=r(21023);let{height:c=0,width:b=0}=l.Z.BoxedWine.defaultSize||{},s={"inline-default-ondemand-root-overlay":"/wine1.7.55-v8-min-online",ondemand:"root",resolution:`${b}x${c}`,root:"/fullWine1.7.55-v8"},u=e=>[...Object.entries(s),...Object.entries(e)].map((([e,t])=>`${e}=${t}`)).join("&");var d=r(88627),g=r(25471),A=r(29222),m=r(13275),p=r(1864),k=r(67294),h=r(46499),f=r(48764).Buffer;var w=({containerRef:e,id:t,setLoading:n,url:o})=>{let{appendFileToTitle:i}=(0,g.Z)(t),{processes:{[t]:{libs:a=[]}={}}={}}=(0,m.z)(),{readFile:l}=(0,A.o)(),c=(0,d.Z)(),b=(0,k.useRef)(),s=(0,k.useRef)(),w=(0,k.useCallback)((async()=>{let t={},b=o?await l(o):f.from(""),d=(0,h.RT)(o),g=".exe"===d,{zipAsync:A}=await r.e(85).then(r.bind(r,70085)),m=(0,p.basename)(o,d),k=async()=>f.from(await A({[(0,p.basename)(o)]:b}));if(g)b=await k();else if(o){let{unzip:e}=await r.e(85).then(r.bind(r,70085));try{m=(e=>{let t=Object.entries(e),[[r]=[]]=t.filter((([e])=>e.toLowerCase().endsWith(".exe"))).sort((([,e],[,t])=>t.length-e.length));return r})(await e(b))||""}catch{b=await k(),m=""}}t={...b?{"app-payload":b.toString("base64")}:{},...m?{p:m}:{}},s.current||(e.current?.prepend(document.createElement("ol")),s.current=window.setInterval((()=>{(0,h.H5)(e.current?.querySelector("canvas"))&&(clearInterval(s.current),s.current=void 0,e.current?.querySelector("ol")?.remove())}),100)),window.BoxedWineConfig={...window.BoxedWineConfig,consoleLog:t=>{let r=e.current?.querySelector("ol");if(r){let e=document.createElement("li");e.textContent=t,r.append(e),r.scrollTop=r.scrollHeight,setTimeout((()=>r.scrollTo(0,r.scrollHeight)),10)}},urlParams:u(t)},(0,h.mb)(a).then((()=>{o&&i(m||(0,p.basename)(o));try{window.BoxedWineShell((()=>{n(!1),c(window.FS,"BoxedWine")}))}catch{}}))}),[i,e,a,c,l,n,o]);(0,k.useEffect)((()=>(b.current!==o&&(o||!b.current)&&(b.current=o,w()),()=>{window.BoxedWineConfig={...window.BoxedWineConfig,isRunning:!1}})),[w,o])},v=r(74293),x=({id:e})=>(0,n.jsx)(v.Z,{StyledComponent:a,id:e,useHook:w,children:(0,n.jsx)("canvas",{id:"boxedWineCanvas",onContextMenu:h.nK})})},74293:function(e,t,r){var n=r(85893),o=r(7316),i=r(13275),a=r(5152),l=r.n(a),c=r(67294);let b=l()((()=>r.e(7952).then(r.bind(r,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,c.memo)((({id:e,useHook:t,StyledComponent:r,children:a})=>{let{processes:{[e]:{url:l=""}={}}}=(0,i.z)(),s=(0,c.useRef)(null),[u,d]=(0,c.useState)(!0),g=(0,c.useMemo)((()=>({contain:"strict",visibility:u?"hidden":"visible"})),[u]);return t({containerRef:s,id:e,loading:u,setLoading:d,url:l}),(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)(b,{}),(0,n.jsx)(r,{ref:s,style:g,...(0,o.Z)({id:e}),children:a})]})}))},88627:function(e,t,r){var n=r(29222),o=r(67294);t.Z=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:r}=(0,n.o)(),i=(0,o.useRef)();return(0,o.useEffect)((()=>()=>{if(i.current){let e=i.current;i.current="";try{t(e,!0).then((()=>r("/",void 0,e)))}catch{}}}),[t,r]),(0,o.useCallback)((async(t,n)=>{if(!t)return;let o="";try{o=await e(t,n)}catch{}o&&(r("/",o),i.current=o)}),[e,r])}},7316:function(e,t,r){var n=r(73260),o=r(82973),i=r(60480),a=r(29222),l=r(13275),c=r(38246),b=r(1864),s=r(67294),u=r(49108),d=r(46499);t.Z=({callback:e,directory:t=u.Ll,id:r,onDragLeave:g,onDragOver:A,updatePositions:m})=>{let{url:p}=(0,l.z)(),{iconPositions:k,sortOrders:h,setIconPositions:f}=(0,c.k)(),{mkdirRecursive:w,updateFolder:v,writeFile:x}=(0,a.o)(),$=(0,s.useCallback)((async(e,t,n)=>{if(r)if(t){let o=(0,b.join)(u.Ll,e);if(await w(u.Ll),await x(o,t,!0))return n===i.v.UPDATE_URL&&p(r,o),v(u.Ll,e),(0,b.basename)(o)}else n===i.v.UPDATE_URL&&p(r,e);return""}),[r,w,v,p,x]),{openTransferDialog:y}=(0,n.Z)();return{onDragLeave:g,onDragOver:e=>{A?.(e),(0,d.nK)(e)},onDrop:n=>{if(!u.my.has((0,d.RT)(t))){if(m&&n.target instanceof HTMLElement){let{files:e,text:r}=(0,o.p4)(n);if(0===e.length&&""===r)return;let i={x:n.clientX,y:n.clientY},a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,b.basename)(e)===(0,b.relative)(t,e))return;a=a.map((e=>(0,b.basename)(e)))}else a=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!k[`${t}/${e}`])return e;let r=0,n="";do{r+=1,n=`${t}/${(0,b.basename)(e,(0,b.extname)(e))} (${r})${(0,b.extname)(e)}`}while(k[n]);return(0,b.basename)(n)})),(0,d.vi)(t,n.target,k,h,i,a,f)}(0,o.WG)(n,e||$,t,y,!!r)}}}}},25471:function(e,t,r){var n=r(13275),o=r(21023),i=r(67294),a=r(49108);t.Z=e=>{let{title:t}=(0,n.z)(),[r]=e.split(a.CC),{title:l}=o.Z[r]||{},c=(0,i.useCallback)(((r,n)=>{let o=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),b=(0,i.useCallback)(((r,n,o)=>{let i=r?`${n?`${a.xy} `:""}${r}${o?" ":" - "}`:"";t(e,`${i}${l}`)}),[e,l,t]);return{appendFileToTitle:c,prependFileToTitle:b}}},45949:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(41686),o=r(49108);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=(e=o.BQ,t=0,r=0,a="dark")=>n.iv`
  overflow: auto;
  scrollbar-color: ${i[a].thumb} ${i[a].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[a].buttonHover};
    }

    &:active {
      background-color: ${i[a].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${i[a].blendMode};
  }
`}}]);