"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5917],{65917:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var o=i(85893),n=i(13525),s=i(41686);let r=s.ZP.nav.withConfig({componentId:"sc-94fb1622-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 7px;
  overflow: hidden;
  padding-top: 4px;
  position: absolute;
  top: 0;
  transition-duration: 150ms;
  width: ${({theme:e})=>e.sizes.startMenu.sideBar.width}px;
  z-index: 1;

  &:hover:not(&.collapsed) {
    backdrop-filter: blur(12px);
    background-color: hsla(0, 0%, 10%, 95%);
    box-shadow: 8px 0 5px -5px hsla(0, 0%, 10%, 50%);
    transition:
      all 300ms ease,
      backdrop-filter 1ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${({theme:e})=>e.sizes.startMenu.sideBar.expandedWidth};

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: hsla(0, 0%, 10%, 75%);
    }
  }
`,a=s.ZP.li.withConfig({componentId:"sc-eb029cfe-0"})`
  border: 1px solid transparent;
  display: flex;
  height: ${({theme:e})=>e.sizes.startMenu.sideBar.height};
  place-content: center;
  place-items: center;
  transition-duration: 150ms;
  width: ${({theme:e})=>e.sizes.startMenu.sideBar.width}px;

  &::before {
    border-left: ${({$active:e,theme:t})=>`4px solid ${e?t.colors.highlight:"transparent"}`};
    content: "";
    height: ${({theme:e})=>e.sizes.startMenu.sideBar.height};
    left: 0;
    position: absolute;
    width: ${({theme:e})=>e.sizes.startMenu.sideBar.width}px;
  }

  figure {
    color: ${({$active:e,theme:t})=>e?t.colors.highlight:t.colors.text};
    display: flex;
    place-items: center;

    svg {
      fill: ${({$active:e,theme:t})=>e?t.colors.highlight:t.colors.text};
      height: ${({theme:e})=>e.sizes.startMenu.sideBar.iconSize};
      left: ${({theme:e})=>e.sizes.startMenu.sideBar.iconSize};
      margin-left: 1px;
      pointer-events: none;
      position: absolute;
      width: ${({theme:e})=>e.sizes.startMenu.sideBar.iconSize};
    }

    figcaption {
      border: 1px solid transparent;
      left: ${({theme:e})=>e.sizes.startMenu.sideBar.width}px;
      position: absolute;
      white-space: nowrap;

      strong {
        font-weight: 600;
      }
    }
  }

  ${r}:hover:not(${r}.collapsed) & {
    transition: width 300ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${({theme:e})=>e.sizes.startMenu.sideBar.expandedWidth};
  }

  &:hover {
    background-color: hsla(0, 0%, 35%, 70%);
    border: 1px solid hsla(0, 0%, 45%, 70%);
  }

  &:active {
    background-color: hsla(0, 0%, 40%, 70%);
  }
`;var l=i(67294),h=i(23678),c=({action:e,active:t,heading:i,icon:n,name:s,tooltip:r})=>(0,o.jsx)(a,{ref:(0,l.useCallback)((e=>(0,h.G)(e,!0)),[]),$active:t,"aria-label":s,onClick:e,title:r,children:(0,o.jsxs)("figure",{children:[n,(0,o.jsx)("figcaption",{children:i?(0,o.jsx)("strong",{children:s}):s})]})});let d=(0,l.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0 22v-6h6v6H0zm2-4v2h2v-2H2zm-2-4V8h6v6H0zm2-4v2h2v-2H2zM0 6V0h6v6H0zm2-4v2h2V2H2zm8 10v-2h18v2H10zm14 6v2H10v-2h14zM10 2h22v2H10V2zM0 30v-6h6v6H0zm2-4v2h2v-2H2zm8 2v-2h18v2H10z"})}))),p=(0,l.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M32 10H0V8h32v2zm0 16H0v-2h32v2zm0-8.016H0V16h32v1.984z"})}))),u=(0,l.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M28 8.578V32H2V0h17.422zM20 8h4.578L20 3.422V8zm6 22V10h-8V2H4v28h22z"})}))),g=(0,l.memo)((()=>{let{colors:e}=(0,s.Fg)();return(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M17 16h-2V0h2v16zm3.313-11.312q2.156.688 3.945 2t3.063 3.078 1.977 3.875.703 4.359q0 1.938-.5 3.727t-1.414 3.344-2.188 2.828-2.828 2.188-3.344 1.414-3.727.5-3.727-.5-3.344-1.414-2.828-2.188-2.188-2.828-1.414-3.344-.5-3.727q0-2.25.703-4.359t1.977-3.875 3.063-3.078 3.945-2l.625 1.891q-1.859.609-3.391 1.734t-2.625 2.625-1.695 3.305-.602 3.758q0 1.656.43 3.188t1.211 2.867 1.875 2.43 2.43 1.875 2.867 1.211 3.188.43 3.188-.43 2.867-1.211 2.43-1.875 1.875-2.43 1.211-2.867.43-3.188q0-1.953-.602-3.758t-1.695-3.305-2.625-2.625-3.391-1.734z",stroke:e.text,strokeWidth:"1"})})})),m=(0,l.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M32 4v24H0V4h32zM2 6v10.578l7-6.984 10 10 4-4 7 6.984V6H2zm0 20h20.578L9 12.406l-7 7.016V26zm28 0v-.578l-7-7.016L20.406 21l5.016 5H30zm-5-14q-.406 0-.703-.297T24 11t.297-.703T25 10t.703.297T26 11t-.297.703T25 12z"})}))),x=(0,l.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m32 24.125-8-4V24H0V8h24v3.875l8-4v16.25zM22 10H2v12h20V10zm8 1.109-6 3.016v3.75l6 3.016V11.11z"})})));var v=i(29222),w=i(13275),b=i(38246),f=i(49108),$=i(46499);let z=({sidebarButtons:e})=>(0,o.jsx)("ol",{children:e.map((e=>(0,o.jsx)(c,{...e},e.name)))});var M=(0,l.memo)((({height:e})=>{let{rootFs:t}=(0,v.o)(),{open:n}=(0,w.z)(),{setHaltSession:a}=(0,b.k)(),[h,c]=(0,l.useState)(!0),M=(0,l.useRef)(),k=(0,l.useRef)(null),S=()=>{M.current&&clearTimeout(M.current)},j=[{heading:!0,icon:(0,o.jsx)(p,{}),name:"START",...h&&{tooltip:"Expand"}},{active:!0,icon:(0,o.jsx)(d,{}),name:"All apps",...h&&{tooltip:"All apps"}}],{sizes:H}=(0,s.Fg)(),B=(0,$.sI)(),V=(0,l.useMemo)((()=>Math.floor((B-f.bK)/H.startMenu.sideBar.width)),[H.startMenu.sideBar.width,B]),T=[V>3?{action:()=>n("FileExplorer",{url:`${f.Sd}/Documents`},"/System/Icons/documents.webp"),icon:(0,o.jsx)(u,{}),name:"Documents",...h&&{tooltip:"Documents"}}:void 0,V>4?{action:()=>n("FileExplorer",{url:`${f.Sd}/Pictures`},"/System/Icons/pictures.webp"),icon:(0,o.jsx)(m,{}),name:"Pictures",...h&&{tooltip:"Pictures"}}:void 0,V>5?{action:()=>n("FileExplorer",{url:`${f.Sd}/Videos`},"/System/Icons/videos.webp"),icon:(0,o.jsx)(x,{}),name:"Videos",...h&&{tooltip:"Videos"}}:void 0,{action:()=>{a(!0),Promise.resolve().then(i.bind(i,5059)).then((({resetStorage:e})=>e(t).finally((()=>window.location.reload()))))},icon:(0,o.jsx)(g,{}),name:"Power",tooltip:"Clears session data and reloads the page."}].filter(Boolean);return(0,l.useEffect)((()=>S),[]),(0,o.jsxs)(r,{ref:k,className:h?"collapsed":void 0,onClick:({target:e})=>{S(),e instanceof HTMLElement&&(e===k.current||k.current?.contains(e)&&"START"===e.textContent)&&c((e=>!e))},onContextMenu:$.nK,onMouseEnter:()=>{M.current=window.setTimeout((()=>c(!1)),700)},onMouseLeave:()=>{S(),c(!0)},style:{height:e},children:[(0,o.jsx)(z,{sidebarButtons:j}),(0,o.jsx)(z,{sidebarButtons:T})]})})),k=i(40995),S=i(71183),j=i(45949);let H=f.H$-3,B=s.iv`
  &::-webkit-scrollbar {
    width: ${({$showScrolling:e})=>e?f.H$:3}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${({$showScrolling:e})=>e?void 0:"transparent"};
  }

  &::-webkit-scrollbar-button:single-button {
    background-color: ${({$showScrolling:e})=>e?void 0:"transparent"};
    border: ${({$showScrolling:e})=>e?void 0:"1px solid transparent"};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: ${({$showScrolling:e})=>e?void 0:"rgb(167, 167, 167)"};
  }
`,V=(0,s.ZP)(S.m.nav).withConfig({componentId:"sc-3f83cf96-0"})`
  background-color: hsla(0, 0%, 13%, 95%);
  bottom: ${f.bK}px;
  box-shadow: 3px 0 10px 3px hsla(0, 0%, 10%, 50%);
  contain: strict;
  display: flex;
  height: 100%;
  left: 0;
  max-height: ${({theme:e})=>e.sizes.startMenu.maxHeight}px;
  max-width: ${({theme:e})=>e.sizes.startMenu.size}px;
  position: absolute;
  width: 100%;
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(0, 0%, 13%, 70%);
  }

  ${k.Z} {
    ${(0,j.Z)(f.H$,-2,-1)};
    margin-top: 0;
    padding-left: ${({theme:e})=>e.sizes.startMenu.sideBar.width}px;
    padding-right: ${f.H$}px;
    padding-top: 7px;
    scrollbar-width: none;

    ${k.Z} {
      margin: 0;
      overflow: hidden;
      padding: 0;

      figure {
        picture {
          margin-left: 9px;
        }

        &:active {
          picture {
            margin-left: 13px;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    &:hover {
      ${B};
      padding-right: ${({$showScrolling:e})=>e?0:`${H}px`};

      @supports (scrollbar-width: thin) {
        padding-right: 5px;
        scrollbar-width: thin;
      }
    }

    @media (hover: none), (pointer: coarse) {
      ${B};
      &::-webkit-scrollbar-track {
        margin: 13px 0;
      }
    }
  }
`,T=s.ZP.span.withConfig({componentId:"sc-a718d402-0"})`
  backdrop-filter: blur(12px);
  height: ${({$height:e})=>e};
  inset: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;var y=i(39608),I=({toggleStartMenu:e})=>{let t=(0,l.useRef)(null),[i,r]=(0,l.useState)(!1),{sizes:{startMenu:a}}=(0,s.Fg)(),h=(0,y.Z)(a.maxHeight),{height:c}=h.variants?.active??{};return(0,l.useLayoutEffect)((()=>t.current?.focus(f.eS)),[]),(0,o.jsxs)(V,{ref:t,$showScrolling:i,onBlurCapture:({relatedTarget:i})=>{if(!(i&&t.current?.contains(i))){let o=i===t.current?.nextSibling,n=i?.parentElement===t.current?.nextSibling;o||n?t.current?.focus(f.eS):e(!1)}},onKeyDown:({key:t})=>{"Escape"===t&&e(!1)},onMouseMove:({clientX:e=0})=>{let{width:i=0}=t.current?.getBoundingClientRect()||{};r(e>i-f.BQ)},...h,...f.LL,children:[(0,o.jsx)(T,{$height:c}),(0,o.jsx)(M,{height:c}),(0,o.jsx)(n.Z,{url:`${f.Sd}/Start Menu`,view:"list",hideLoading:!0,hideShortcutIcons:!0,isStartMenu:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})}},39608:function(e,t,i){var o=i(49108),n=i(46499);t.Z=(e,t=!0)=>{let i=Math.min(e,(0,n.sI)()-o.bK);return{animate:"active",exit:{height:.75*i+"px",transition:{duration:o.Nb.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:o.Nb.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${i}px`,paddingTop:0},initial:{height:.75*i+"px",paddingTop:t?.5*i+"px":0}}}}}}]);