"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8612],{80144:function(e,t,i){let n=i(41686).ZP.div.withConfig({componentId:"sc-8ce3e3c2-0"})`
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
`;t.Z=n},78612:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var n=i(85893),r=i(67294);let o=(0,r.memo)((({direction:e})=>{let t=(0,r.useMemo)((()=>"right"===e?{transform:"scaleX(-1)"}:void 0),[e]);return(0,n.jsx)("svg",{style:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})})),s=(0,r.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}))),l=(0,r.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})));var c=i(80144),a=i(49108);let d=[{icon:"/System/Icons/Favicons/google.webp",name:"Google",url:"https://www.google.com/webhp?igu=1"},{icon:"/System/Icons/Favicons/wikipedia.webp",name:"Wikipedia",url:"https://www.wikipedia.org/"},{icon:"/System/Icons/Favicons/archive.webp",name:"Internet Archive",url:"https://archive.org/"},{icon:a.Yg,name:"daedalOS",url:"https://dustinbrett.com/"},{icon:"/System/Icons/Favicons/win96.webp",name:"Windows 96",url:"https://windows96.net/"},{icon:"/System/Icons/Favicons/aos.webp",name:"AaronOS",url:"https://aaronos.dev/"},{icon:"/System/Icons/Favicons/diablo.webp",name:"Diablo",url:"https://d07riv.github.io/diabloweb/"}];var u=i(25471),p=i(29222),h=i(13275),g=i(21023),w=i(14269),x=i(44714),m=i(1545),f=i(46499),b=({id:e})=>{let{icon:t,linkElement:i,url:b,processes:{[e]:v}}=(0,h.z)(),{prependFileToTitle:k}=(0,u.Z)(e),{url:y=""}=v||{},S=y||"https://www.google.com/webhp?igu=1",{canGoBack:j,canGoForward:$,history:C,moveHistory:F,position:Z}=(0,w.Z)(S,e),{exists:E,readFile:I}=(0,p.o)(),z=(0,r.useRef)(null),L=(0,r.useRef)(null),[R,T]=(0,r.useState)(!1),[B,G]=(0,r.useState)(""),A=e=>{F(e),z.current&&(z.current.value=C[Z+e])},D=(0,r.useRef)(""),H=(0,r.useCallback)((async i=>{let{contentWindow:n}=L.current||{};if(n?.location){let r=[".htm",".html"].includes((0,f.RT)(i))&&await E(i);if(T(!0),G(""),r&&G((await I(i)).toString()),t(e,g.Z.Browser.icon),!r){let r=await(0,f.Qv)(i);if(n.location.replace(r),r.startsWith(f.z8))k(`${i} - Google Search`);else{let{name:e=""}=d?.find((({url:e})=>e===i))||{};k(e)}if(i.startsWith("ipfs://"))t(e,"/System/Icons/Favicons/ipfs.webp");else{let i=new Image,n=`${new URL(r).origin}${a.Yg}`;i.addEventListener("error",(()=>{let{icon:i}=d?.find((({url:e})=>e===r))||{};i&&t(e,i)}),a.K7),i.addEventListener("load",(()=>t(e,n)),a.K7),i.src=n}}}}),[E,e,k,I,t]);return(0,r.useEffect)((()=>{v&&C[Z]!==D.current&&(D.current=C[Z],H(C[Z]))}),[C,Z,v,H]),(0,r.useEffect)((()=>{L?.current&&i(e,"peekElement",L.current)}),[e,i]),(0,n.jsxs)(c.Z,{$hasSrcDoc:!!B,children:[(0,n.jsxs)("nav",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{disabled:!j,onClick:()=>A(-1),...(0,f.PS)("Click to go back"),children:(0,n.jsx)(o,{direction:"left"})}),(0,n.jsx)(x.Z,{disabled:!$,onClick:()=>A(1),...(0,f.PS)("Click to go forward"),children:(0,n.jsx)(o,{direction:"right"})}),(0,n.jsx)(x.Z,{disabled:R,onClick:()=>H(C[Z]),...(0,f.PS)("Reload this page"),children:R?(0,n.jsx)(l,{}):(0,n.jsx)(s,{})})]}),(0,n.jsx)("input",{ref:z,defaultValue:S,enterKeyHint:"go",onFocusCapture:()=>z.current?.select(),onKeyDown:({key:t})=>{z.current&&"Enter"===t&&(b(e,z.current.value),window.getSelection()?.removeAllRanges(),z.current.blur())},type:"text"})]}),(0,n.jsx)("nav",{children:d.map((({name:t,icon:i,url:r})=>(0,n.jsx)(x.Z,{onClick:()=>{z.current&&(z.current.value=r),b(e,r)},...(0,f.PS)(`${t}\n${r}`),children:(0,n.jsx)(m.Z,{alt:t,imgSize:16,src:i})},t)))}),(0,n.jsx)("iframe",{ref:L,onLoad:()=>T(!1),srcDoc:B||void 0,title:e,...a.v0})]})}},25471:function(e,t,i){var n=i(13275),r=i(21023),o=i(67294),s=i(49108);t.Z=e=>{let{title:t}=(0,n.z)(),[i]=e.split(s.CC),{title:l}=r.Z[i]||{},c=(0,o.useCallback)(((i,n)=>{let r=i?` - ${i}${n?` ${s.xy}`:""}`:"";t(e,`${l}${r}`)}),[e,l,t]),a=(0,o.useCallback)(((i,n,r)=>{let o=i?`${n?`${s.xy} `:""}${i}${r?" ":" - "}`:"";t(e,`${o}${l}`)}),[e,l,t]);return{appendFileToTitle:c,prependFileToTitle:a}}},14269:function(e,t,i){var n=i(13275),r=i(67294);t.Z=(e,t)=>{let{url:i}=(0,n.z)(),[o,s]=(0,r.useState)(e),[l,c]=(0,r.useState)((()=>[e])),[a,d]=(0,r.useState)(0),u=(0,r.useCallback)((e=>{let n=a+e;d(n),s(l[n]),i(t,l[n])}),[i,l,t,a]);return(0,r.useEffect)((()=>{e!==o&&(d(a+1),s(e),c([...l.slice(0,a+1),e]))}),[o,l,a,e]),{canGoBack:a>0,canGoForward:a<l.length-1,currentUrl:o,history:l,moveHistory:u,position:a}}}}]);