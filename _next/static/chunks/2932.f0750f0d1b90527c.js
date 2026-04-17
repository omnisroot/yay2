"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2932],{3191:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(85893),i=r(67294);let a=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})}))),l=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 17H0v-2h32v2z"})}))),o=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})}))),s=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})})));var c=r(41686);let d=c.ZP.nav.withConfig({componentId:"sc-8d1911a-0"})`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
  display: flex;
  height: 40px;
  position: absolute;
  top: ${({theme:e})=>e.sizes.titleBar.height}px;
  width: 100%;
  z-index: 1;

  .side-menu {
    display: flex;
    overflow: hidden;
    place-items: center;
    white-space: nowrap;
    width: 100%;

    span {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:first-child {
      color: #fff;
      font-size: 14px;
      margin-left: 16px;
      place-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      place-content: flex-end;
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    font-size: 24px;
    height: 30px;
    place-content: center;
    place-items: center;
    width: 30px;

    &#subtract {
      margin-right: 7px;
    }

    &#add {
      margin-left: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }

    &:hover {
      background-color: rgb(66, 70, 73);
    }

    svg {
      fill: #fff;
      height: 12px;
      stroke: #fff;
      width: 12px;
    }

    &:disabled {
      background-color: initial;

      svg {
        fill: rgb(110, 112, 114);
        stroke: rgb(110, 112, 114);
      }
    }

    &#download {
      svg {
        margin-left: 1px;
        scale: 1.15;
        stroke-width: 1.75;
        transform: scale(1.25, 1);
      }
    }
  }

  ol {
    display: flex;
    flex-direction: row;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;

    li {
      color: #fff;
      display: flex;
      flex-direction: row;
      font-size: 14px;

      input {
        background-color: rgb(25, 27, 28);
        color: #fff;
        height: 20px;
        text-align: center;

        &:disabled {
          color: rgb(110, 112, 114);
        }
      }

      &:not(:last-child)::after {
        background-color: rgb(112, 115, 117);
        content: "";
        margin-left: 20px;
        width: 1px;
      }

      &.pages {
        letter-spacing: 1.5px;
        line-height: 20px;
        padding-right: 10px;
        width: max-content;

        input {
          margin: 0 5px;
          width: 24px;
        }
      }

      &#scale {
        display: flex;
        place-items: center;

        input {
          width: 45px;
        }
      }
    }
  }
`;var b=r(25471),g=r(29222),u=r(13275),p=r(1864),h=r(49108),m=r(46499);let x=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],A=(e=0,t=0)=>{let r=e-h.BQ;if(r>=t)return 1;let n=r/t,i=x.findIndex((e=>e>=n));return i>0?x[i-1]:1};var w=({containerRef:e,id:t,setLoading:r,url:n})=>{let{readFile:a}=(0,g.o)(),{argument:l,processes:{[t]:o}={}}=(0,u.z)(),{libs:s=[],scale:c}=o||{},[d,x]=(0,i.useState)([]),w=(0,i.useCallback)((async(r,n)=>{let i,a=document.createElement("canvas"),o=a.getContext("2d",h.KU),s=await n.getPage(r);if(c)i=s.getViewport({scale:c});else{let r=s.getViewport().viewBox[2],a=A(e.current?.clientWidth,r),{info:o}=await n.getMetadata();l(t,"scale",a),o?.Title&&l(t,"subTitle",o.Title),i=s.getViewport({scale:a})}return a.height=i.height,a.width=i.width,await s.render({canvasContext:o,viewport:i}).promise,a}),[l,e,t,c]),{prependFileToTitle:f}=(0,b.Z)(t),v=(0,i.useRef)(!1),k=(0,i.useRef)(null),$=(0,i.useCallback)((async()=>{if(window.pdfjsLib&&n&&e.current&&!v.current){v.current=!0,e.current.scrollTop=0,x([]),r(!0);let i=await window.pdfjsLib.getDocument(await a(n)).promise;l(t,"count",i.numPages),f((0,p.basename)(n)),k.current=new AbortController;for(let e=0;e<i.numPages&&!k.current.signal.aborted;e+=1){let t=await w(e+1,i);x((e=>[...e,t]))}v.current=!1}r(!1)}),[l,e,t,f,a,w,r,n]);(0,i.useEffect)((()=>{(0,m.mb)(s).then((()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Program Files/PDF.js/pdf.worker.js",$())}))}),[s,$]),(0,i.useEffect)((()=>{if(d.length>0){let r=e.current?.querySelector("#pages");r&&([...r.children].forEach((e=>e.remove())),d.forEach(((n,i)=>{let a=document.createElement("li"),o=new IntersectionObserver((e=>e.forEach((({isIntersecting:e})=>{e&&l(t,"page",i+1)}))),{root:e.current,threshold:.4});a.append(n),r.append(a),o.observe(a)})))}}),[l,e,t,d]),(0,i.useEffect)((()=>()=>k.current?.abort()),[])},f=r(44714),v=({id:e})=>{let{readFile:t}=(0,g.o)(),{argument:i,processes:{[e]:c}={}}=(0,u.z)(),{count:b=0,page:A=1,componentWindow:w,scale:v=1,subTitle:k="",url:$=""}=c||{};return(0,n.jsxs)(d,{children:[(0,n.jsx)("div",{className:"side-menu",children:(0,n.jsx)("span",{children:k||(0,p.basename)($)})}),(0,n.jsxs)("ol",{children:[0!==b&&(0,n.jsxs)("li",{className:"pages",children:[(0,n.jsx)("input",{enterKeyHint:"go",onChange:({target:t})=>{let r=Number(t.value);Number.isNaN(r)||r<1||r>b||(i(e,"page",r),w?.querySelectorAll("li")[r-1].scrollIntoView())},value:A})," ","/ ",b]}),(0,n.jsxs)("li",{id:"scale",children:[(0,n.jsx)(f.Z,{disabled:.25===v||0===b,id:"subtract",onClick:()=>i(e,"scale",x[x.indexOf(v)-1]),...(0,m.PS)("Zoom out"),children:(0,n.jsx)(l,{})}),(0,n.jsx)("input",{disabled:0===b,enterKeyHint:"done",onChange:({target:t})=>{if(!t.value.endsWith("%")||t.value.length>4||t.value.length<2)return;let r=Number(t.value.replace("%",""))/100;Number.isNaN(r)||r>x[x.length-1]||r<x[0]||i(e,"scale",x[x.findIndex((e=>e>=r))])},value:`${Math.round(100*v)}%`}),(0,n.jsx)(f.Z,{disabled:5===v||0===b,id:"add",onClick:()=>i(e,"scale",x[x.indexOf(v)+1]),...(0,m.PS)("Zoom in"),children:(0,n.jsx)(a,{})})]})]}),(0,n.jsxs)("div",{className:"side-menu",children:[(0,n.jsx)(f.Z,{disabled:0===b,id:"download",onClick:async()=>{let e=document.createElement("a");e.href=(0,m.YS)(await t($)),e.download=(0,p.basename)($),e.click()},...(0,m.PS)("Download"),children:(0,n.jsx)(o,{})}),(0,n.jsx)(f.Z,{disabled:0===b,onClick:async()=>{(0,m.G6)()&&(window.InstallTrigger=!0,setTimeout((()=>{delete window.InstallTrigger}),5*h.i2));let{default:e}=await r.e(8607).then(r.t.bind(r,68607,23));e({base64:!0,printable:(await t($)).toString("base64"),type:"pdf"})},...(0,m.PS)("Print"),children:(0,n.jsx)(s,{})})]})]})},k=r(45949);let $=c.ZP.div.withConfig({componentId:"sc-943551f4-0"})`
  ${(0,k.Z)()};

  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  && {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px - 40px)`};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }
`;var j=r(74293),y=({id:e})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{StyledComponent:$,id:e,useHook:w,children:(0,n.jsx)("ol",{id:"pages"})}),(0,n.jsx)(v,{id:e})]})},74293:function(e,t,r){var n=r(85893),i=r(7316),a=r(13275),l=r(5152),o=r.n(l),s=r(67294);let c=o()((()=>r.e(7952).then(r.bind(r,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,s.memo)((({id:e,useHook:t,StyledComponent:r,children:l})=>{let{processes:{[e]:{url:o=""}={}}}=(0,a.z)(),d=(0,s.useRef)(null),[b,g]=(0,s.useState)(!0),u=(0,s.useMemo)((()=>({contain:"strict",visibility:b?"hidden":"visible"})),[b]);return t({containerRef:d,id:e,loading:b,setLoading:g,url:o}),(0,n.jsxs)(n.Fragment,{children:[b&&(0,n.jsx)(c,{}),(0,n.jsx)(r,{ref:d,style:u,...(0,i.Z)({id:e}),children:l})]})}))},7316:function(e,t,r){var n=r(73260),i=r(82973),a=r(60480),l=r(29222),o=r(13275),s=r(38246),c=r(1864),d=r(67294),b=r(49108),g=r(46499);t.Z=({callback:e,directory:t=b.Ll,id:r,onDragLeave:u,onDragOver:p,updatePositions:h})=>{let{url:m}=(0,o.z)(),{iconPositions:x,sortOrders:A,setIconPositions:w}=(0,s.k)(),{mkdirRecursive:f,updateFolder:v,writeFile:k}=(0,l.o)(),$=(0,d.useCallback)((async(e,t,n)=>{if(r)if(t){let i=(0,c.join)(b.Ll,e);if(await f(b.Ll),await k(i,t,!0))return n===a.v.UPDATE_URL&&m(r,i),v(b.Ll,e),(0,c.basename)(i)}else n===a.v.UPDATE_URL&&m(r,e);return""}),[r,f,v,m,k]),{openTransferDialog:j}=(0,n.Z)();return{onDragLeave:u,onDragOver:e=>{p?.(e),(0,g.nK)(e)},onDrop:n=>{if(!b.my.has((0,g.RT)(t))){if(h&&n.target instanceof HTMLElement){let{files:e,text:r}=(0,i.p4)(n);if(0===e.length&&""===r)return;let a={x:n.clientX,y:n.clientY},l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!x[`${t}/${e}`])return e;let r=0,n="";do{r+=1,n=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${r})${(0,c.extname)(e)}`}while(x[n]);return(0,c.basename)(n)})),(0,g.vi)(t,n.target,x,A,a,l,w)}(0,i.WG)(n,e||$,t,j,!!r)}}}}},25471:function(e,t,r){var n=r(13275),i=r(21023),a=r(67294),l=r(49108);t.Z=e=>{let{title:t}=(0,n.z)(),[r]=e.split(l.CC),{title:o}=i.Z[r]||{},s=(0,a.useCallback)(((r,n)=>{let i=r?` - ${r}${n?` ${l.xy}`:""}`:"";t(e,`${o}${i}`)}),[e,o,t]),c=(0,a.useCallback)(((r,n,i)=>{let a=r?`${n?`${l.xy} `:""}${r}${i?" ":" - "}`:"";t(e,`${a}${o}`)}),[e,o,t]);return{appendFileToTitle:s,prependFileToTitle:c}}},45949:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(41686),i=r(49108);let a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var l=(e=i.BQ,t=0,r=0,l="dark")=>n.iv`
  overflow: auto;
  scrollbar-color: ${a[l].thumb} ${a[l].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${a[l].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${a[l].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${a[l].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${a[l].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${a[l].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${a[l].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${a[l].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${a[l].buttonHover};
    }

    &:active {
      background-color: ${a[l].active};
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
    background-blend-mode: ${a[l].blendMode};
  }
`}}]);