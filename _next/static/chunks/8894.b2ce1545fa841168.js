"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8894],{80144:function(e,t,n){let r=n(41686).ZP.div.withConfig({componentId:"sc-8ce3e3c2-0"})`
  iframe {
    background-color: ${({$hasSrcDoc:e})=>e?"#fff":"initial"};
    border: 0;
    height: calc(100% - 36px - 33px);
    width: 100%;
  }

  nav {
    background-color: rgb(87, 87, 87);
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    div {
      display: flex;
      justify-content: space-around;
      min-width: 102px;
      padding-left: 6px;
      width: 102px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: rgb(240, 240, 240);
        height: 22px;
        width: 22px;
      }

      &:hover {
        background-color: rgb(103, 103, 103);
      }

      &:active {
        background-color: rgb(110, 110, 110);
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(152, 152, 152);
        }
      }
    }

    &:not(:first-child) {
      border-bottom: 1px solid rgb(118, 115, 118);
      height: 33px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-bottom: 4px;
        margin-right: 4px;
      }
    }

    input {
      background-color: rgb(64, 62, 65);
      border-radius: 18px;
      color: rgb(255, 255, 255);
      font-family: ${({theme:e})=>e.formats.systemFont};
      font-size: 13px;
      height: 28px;
      letter-spacing: 0.2px;
      line-height: 26px;
      margin: 0 6px;
      padding: 0 13px;
      width: 100%;

      &:focus {
        outline: 2px solid rgb(138, 180, 248);
      }
    }
  }
`;t.Z=r},38894:function(e,t,n){n.r(t),n.d(t,{default:function(){return b},defaultRuntimeConfig:function(){return x}});var r=n(85893),o=n(29222),i=n(13275),s=n(21023),c=n(14269),a=n(67294),l=n(44714),d=n(46499);let g=(e,t,n="*")=>{t?.postMessage(e,{targetOrigin:n})};var p=n(80144);let u=()=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}),f=()=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}),h={referrerPolicy:"no-referrer",sandbox:"allow-same-origin allow-scripts"},x={libs:[],runtime:"{\n  const terminal = document.createElement('pre');\n  document.body.appendChild(terminal);\n  const _console = { ...console };\n  const createLogger = (type) => {\n    if (!(type in console)) {\n      throw new Error(`Invalid console type: ${type}`);\n    }\n    return (...args) => {\n      _console[type](...args);\n      terminal.innerText += `${type}: ${args.join()}\n`;\n    }\n  }\n  console.log = createLogger('log');\n  console.warn = createLogger('warn');\n  console.error = createLogger('error');\n  console.info = createLogger('info');\n  console.debug = createLogger('debug');\n  console.dir = createLogger('dir');\n}",transformInputSource:e=>e};var b=({id:e,runtimeConfig:t=x,onMessage:n})=>{let{icon:b,processes:{[e]:w}}=(0,i.z)(),{transformInputSource:v=e=>e}=t,y=w?.url||"",{history:k,position:j}=(0,c.Z)(y,e),{exists:S,readFile:C}=(0,o.o)(),L=(0,a.useRef)(null);((e,t)=>{let n=(0,a.useCallback)((n=>{let{origin:r,source:o}=n;t&&t.current?.contentWindow!==o||"function"!=typeof e||e(n,(e=>{g(e,o,r)}))}),[e]);(0,a.useEffect)((()=>(globalThis.addEventListener("message",n),()=>globalThis.removeEventListener("message",n))),[n])})(n,L);let[$,E]=(0,a.useState)(!1),[Z,_]=(0,a.useState)(""),[z,M]=(0,a.useState)(""),B=(0,a.useCallback)((async n=>{let{contentWindow:r}=L.current||{};if(r?.location){let r=await S(n);if(E(!0),_(""),r){let e=(await C(n)).toString(),r=v(e),o=t.runtime,i=Array.prototype.map.call(t.libs,(e=>`<script src="${e}"><\/script>`)).join("\n"),s=`\n          <html>\n            <head>\n            ${i}\n            </head>\n            <body></body>\n            <script>${m(o)}<\/script>\n            <script>${m(r)}<\/script>\n          </html>`;_(s)}b(e,s.Z.Browser.icon)}}),[S,e,C,b,t]),I=(0,a.useMemo)((()=>({backgroundColor:Z?"#fff":"initial"})),[Z]);return(0,a.useEffect)((()=>{w&&k[j]!==z&&(B(k[j]),M(k[j]))}),[z,k,j,w,B]),(0,r.jsxs)(p.Z,{$hasSrcDoc:!!Z,children:[(0,r.jsx)("nav",{children:(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{disabled:$,onClick:()=>B(k[j]),...(0,d.PS)("Reload this page"),children:$?(0,r.jsx)(f,{}):(0,r.jsx)(u,{})})})}),(0,r.jsx)("iframe",{ref:L,onLoad:()=>E(!1),srcDoc:Z||void 0,style:I,title:e,...h})]})};function m(e){return e.replace(/<\/script>/gi,"<\\/script>")}},14269:function(e,t,n){var r=n(13275),o=n(67294);t.Z=(e,t)=>{let{url:n}=(0,r.z)(),[i,s]=(0,o.useState)(e),[c,a]=(0,o.useState)((()=>[e])),[l,d]=(0,o.useState)(0),g=(0,o.useCallback)((e=>{let r=l+e;d(r),s(c[r]),n(t,c[r])}),[n,c,t,l]);return(0,o.useEffect)((()=>{e!==i&&(d(l+1),s(e),a([...c.slice(0,l+1),e]))}),[i,c,l,e]),{canGoBack:l>0,canGoForward:l<c.length-1,currentUrl:i,history:c,moveHistory:g,position:l}}}}]);