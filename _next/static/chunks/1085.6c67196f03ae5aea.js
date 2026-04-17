"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1085,7952,6137],{93220:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(85893),i=r(56137),o=r(41686);let a=o.ZP.div.withConfig({componentId:"sc-4b72021-0"})`
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 5px;
  padding: 0 22px 2px 24px;
  position: relative;
  width: 100%;

  input {
    background-color: rgb(25, 25, 25);
    border-right: 1px solid rgb(21, 21, 21);
    color: #fff;
    font-family: ${({theme:e})=>e.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 6px);
  }

  img {
    left: 2px;
    position: absolute;
    top: 5px;
  }

  #refresh {
    background-color: rgb(25, 25, 25);
    height: 28px;
    margin: 0;
    position: absolute;
    right: 0;
    stroke: rgb(128, 128, 128);
    stroke-width: 3;
    top: 0;
    width: 28px;

    &:hover {
      background-color: rgb(27, 41, 49);
      border: 1px solid rgb(34, 114, 153);
    }

    &:active {
      background-color: rgb(28, 57, 71);
      border: 1px solid rgb(38, 160, 218);
    }
  }
`;var s=r(18849),l=r(67294),A=e=>{let{contextMenu:t}=(0,s.H)();return(0,l.useMemo)((()=>t?.((()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]))),[e,t])},c=r(29222),u=r(13275),d=r(1864),p=r(44714),h=r(1545),g=r(49108),x=r(46499);let m=(0,l.forwardRef)((({id:e},t)=>{let{url:r,processes:{[e]:{icon:o,url:s=""}}}=(0,u.z)(),m=(0,d.basename)(s)||g.SP,[f,w]=(0,l.useState)(m),{exists:b,updateFolder:v}=(0,c.o)();return(0,l.useEffect)((()=>{t.current&&(f===s?t.current.select():f===m?window.getSelection()?.removeAllRanges():document.activeElement!==t.current&&w(m))}),[f,t,m,s]),(0,n.jsxs)(a,{children:[(0,n.jsx)(h.Z,{alt:m,imgSize:16,src:o}),(0,n.jsx)("input",{ref:t,"aria-label":"Address",enterKeyHint:"go",onBlurCapture:()=>w(m),onChange:({target:e})=>w(e.value),onFocusCapture:()=>w(s),onKeyDown:async({key:n})=>{if("Enter"===n&&t.current){let{value:n}=t.current;n&&await b(n)&&r(e,n),t.current.blur()}},spellCheck:!1,type:"text",value:f,...A(s)}),(0,n.jsx)(p.Z,{id:"refresh",onClick:()=>v(s),...(0,x.PS)(`Refresh "${m}" (F5)`),children:(0,n.jsx)(i.Refresh,{})})]})})),f=o.ZP.div.withConfig({componentId:"sc-22fbf6bc-0"})`
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 0;
  max-width: 148px;
  padding: 0;
  position: relative;
  width: 100%;

  svg {
    fill: rgb(113, 113, 113);
    height: 12px;
    left: 14px;
    pointer-events: none;
    position: absolute;
    stroke: rgb(113, 113, 113);
    stroke-width: 1;
    top: 8px;
  }

  input {
    background-color: rgb(25, 25, 25);
    color: #fff;
    font-family: ${({theme:e})=>e.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    padding-left: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`;var w=r(7195),b=r(79281),v=r(6326),C=(0,l.memo)((({id:e})=>{let[t,r]=(0,l.useState)(""),o=(0,l.useRef)(!1),{open:a,processes:{[e]:{url:A=""}}}=(0,u.z)(),p=(0,l.useRef)(null),h=(0,v.Rx)(t),{contextMenu:m}=(0,s.H)(),{exists:C,fs:k,readFile:B}=(0,c.o)();return(0,l.useEffect)((()=>{p.current&&o.current&&Promise.all([...h.filter((({ref:e})=>e.startsWith(A))),...h.filter((({ref:e})=>!e.startsWith(A)))].slice(0,9).map((async({ref:e})=>{let{icon:t,pid:n=w.y[0],url:i}=await new Promise((t=>{(0,b.Z7)(k,e,(0,x.RT)(e),(e=>t(e)))})),o=(0,x.yk)(i),s=(0,d.join)(o?g.Rm:g.Xo,`${o?new URL(i).pathname.replace("/",""):i}${g.Qy}`),l="";return await C(s)&&(l=(0,x.YS)(await B(s))),{action:()=>{a(n,{url:i||e}),r(""),p.current&&(p.current.value="",p.current.blur())},icon:l||t,label:(0,d.basename)(e,g.zm)}}))).then((e=>m?.((()=>e)).onContextMenuCapture(void 0,p.current?.getBoundingClientRect())))}),[m,C,k,a,B,h,A]),(0,l.useEffect)((()=>{p.current&&(p.current.value="",r(""))}),[A]),(0,n.jsxs)(f,{children:[(0,n.jsx)(i.Search,{}),(0,n.jsx)("input",{ref:p,"aria-label":"Search box",enterKeyHint:"search",onChange:({target:e})=>{o.current=!0,r(e.value)},onFocus:()=>(0,x.Q4)(v.O9),placeholder:"Search",spellCheck:!1,type:"text"})]})}));let k=o.ZP.nav.withConfig({componentId:"sc-b01bb8a2-0"})`
  background-color: rgb(25, 25, 25);
  display: flex;
  height: ${({theme:e})=>e.sizes.fileExplorer.navBarHeight};

  button {
    height: 16px;
    margin: 13px 9px;
    width: 16px;

    svg {
      color: #fff;
      fill: currentColor;
      height: 16px;
      width: 16px;

      &:hover {
        color: rgb(50, 152, 254);
        transition: fill 0.5s ease;
      }

      &:active {
        color: rgb(54, 116, 178);
        transition: none;
      }
    }

    &[title^="Up"] {
      margin-right: 8px;
      position: relative;
      right: -8px;
    }

    &[title="Recent locations"] {
      left: 56px;
      position: absolute;

      svg {
        stroke: currentColor;
        stroke-width: 3px;
        width: 6px;
      }
    }

    &:disabled {
      svg {
        color: rgb(140, 140, 140);

        &:hover,
        &:active {
          color: rgb(140, 140, 140);
        }
      }
    }
  }
`;var B=r(67844),S=r(14269);let j=(0,l.forwardRef)((({hideSearch:e,id:t},r)=>{let{url:o,processes:{[t]:{url:a=""}}}=(0,u.z)(),A="/"===a?"":(0,d.basename)((0,d.dirname)(a)),{contextMenu:c}=(0,s.H)(),{canGoBack:h,canGoForward:f,history:w,moveHistory:b,position:v}=(0,S.Z)(a,t),{onContextMenuCapture:j}=(0,l.useMemo)((()=>c?.((()=>w.map(((e,t)=>({action:()=>b(t-v),checked:v===t,label:d.basename(e)||g.SP,primary:v===t}))).reverse()))),[c,w,b,v]);return(0,n.jsxs)(k,{...(0,B.Z)(t),onDragOver:x.nK,onDrop:x.nK,children:[(0,n.jsx)(p.Z,{disabled:!h,onClick:()=>b(-1),...(0,x.PS)(h?`Back to ${(0,d.basename)(w[v-1])||g.SP}`:"Back"),children:(0,n.jsx)(i.Back,{})}),(0,n.jsx)(p.Z,{disabled:!f,onClick:()=>b(1),...(0,x.PS)(f?`Forward to ${(0,d.basename)(w[v+1])||g.SP}`:"Forward"),children:(0,n.jsx)(i.Forward,{})}),(0,n.jsx)(p.Z,{disabled:1===w.length,onClick:j,...(0,x.PS)("Recent locations"),children:(0,n.jsx)(i.Down,{})}),(0,n.jsx)(p.Z,{disabled:"/"===a,onClick:()=>o(t,(0,d.dirname)(a)),...(0,x.PS)("/"===a?"Up one level":`Up to "${""===A?g.SP:A}"`),children:(0,n.jsx)(i.Up,{})}),(0,n.jsx)(m,{ref:r,id:t}),!e&&(0,n.jsx)(C,{id:t})]})}));var R=j},56137:function(e,t,r){r.r(t),r.d(t,{Back:function(){return o},Down:function(){return l},Forward:function(){return a},Refresh:function(){return s},Search:function(){return c},Up:function(){return A}});var n=r(85893),i=r(67294);let o=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 14v4H7.656l7.172 7.172L12 28 0 16 12 4l2.828 2.828L7.656 14H32z"})}))),a=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m20 4 12 12-12 12-2.828-2.828L24.344 18H0v-4h24.344l-7.172-7.172L20 4z"})}))),s=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.266.594q2.594.703 4.75 2.195t3.711 3.531 2.414 4.516T32 16q0 2.203-.57 4.25t-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82T.002 16q0-2.188.578-4.25t1.648-3.883T4.83 4.554t3.453-2.555H4.002v-2h8v8h-2V3.358q-1.828.875-3.305 2.195T4.174 8.522t-1.609 3.555-.563 3.922q0 1.922.5 3.711t1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414 3.719.5q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336.5-3.719q0-2.344-.758-4.516T27.127 7.53t-3.242-3.086-4.148-1.93l.531-1.922z"})}))),l=(0,i.memo)((({flip:e})=>{let t=(0,i.useMemo)((()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0),[e]);return(0,n.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m28.109 5.453 3.781 3.766L15.999 25.11.108 9.219l3.781-3.766 12.109 12.109L28.107 5.453z"})})})),A=(0,i.memo)((()=>{let e=(0,i.useMemo)((()=>({marginTop:"-1px"})),[]);return(0,n.jsx)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m16 0 12 12-2.828 2.828L18 7.656V32h-4V7.656l-7.172 7.172L4 12 16 0z"})})})),c=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})})))},87952:function(e,t,r){r.r(t);let n=r(41686).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=n},67844:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(91367),i=r(18849),o=r(13275),a=r(67294),s=r(49108),l=e=>{let{contextMenu:t}=(0,i.H)(),{onClose:r,onMaximize:l,onMinimize:A}=(0,n.Z)(e),{processes:{[e]:c}}=(0,o.z)(),{allowResizing:u=!0,hideMaximizeButton:d,hideMinimizeButton:p,maximized:h,minimized:g}=c||{};return(0,a.useMemo)((()=>t?.((()=>{let e=h||g,t=!d||!p;return[t&&{action:g?A:l,disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!p&&{action:A,disabled:g,icon:g?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!d&&{action:l,disabled:e||!u,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},t&&s.Os,{action:r,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}))),[u,t,d,p,h,g,r,l,A])}},91367:function(e,t,r){var n=r(11941),i=r(13275),o=r(38246),a=r(67294);t.Z=e=>{let t=(0,n.Z)(e),{setForegroundId:r,removeFromStack:s}=(0,o.k)(),{closeWithTransition:l,maximize:A,minimize:c}=(0,i.z)();return{onClose:(0,a.useCallback)((()=>{s(e),l(e),r(t)}),[l,e,t,s,r]),onMaximize:()=>A(e),onMinimize:()=>{c(e),r(t)}}}},11941:function(e,t,r){var n=r(13275),i=r(38246);t.Z=e=>{let{stackOrder:t=[]}=(0,i.k)(),{processes:r}=(0,n.z)();return t.find((t=>t!==e&&!r?.[t]?.minimized))||""}},14269:function(e,t,r){var n=r(13275),i=r(67294);t.Z=(e,t)=>{let{url:r}=(0,n.z)(),[o,a]=(0,i.useState)(e),[s,l]=(0,i.useState)((()=>[e])),[A,c]=(0,i.useState)(0),u=(0,i.useCallback)((e=>{let n=A+e;c(n),a(s[n]),r(t,s[n])}),[r,s,t,A]);return(0,i.useEffect)((()=>{e!==o&&(c(A+1),a(e),l([...s.slice(0,A+1),e]))}),[o,s,A,e]),{canGoBack:A>0,canGoForward:A<s.length-1,currentUrl:o,history:s,moveHistory:u,position:A}}},6326:function(e,t,r){r.d(t,{O9:function(){return A},Kk:function(){return p},Rx:function(){return h}});var n=r(29222),i=r(1864),o=r(67294),a=JSON.parse('{"I":[".cache",".json"],"K":[".md",".txt",".whtml"]}'),s=r(49108),l=r(46499);let A=["/System/lunr/lunr.min.js"],c=Object.create(null),u=async(e,t)=>{if(window.lunr||await(0,l.mb)(A),!t&&!c?.search){let e=await fetch("/.index/search.lunr.json",s.P8);try{c=window.lunr?.Index.load(JSON.parse(await e.text()))}catch{}}let r=t??c,n=[];try{n=r.search?.(e),0===n?.length&&(n=r.search?.(`${e}*`))}catch{}return n??[]},d=async(e,t)=>{let r=t?._getFs("/")?.fs,n=r?.getOverlayedFileSystems(),o=n?.writable,s=Object.keys(o?._cache?.map??{}).filter((e=>{let t=(0,l.RT)(e);return!!t&&!a.I.includes(t)})),A=await Promise.all(s.map((async t=>({name:(0,i.basename)(t,(0,i.extname)(t)),path:t,text:a.K.includes((0,l.RT)(t))?(await e(t)).toString():void 0})))),c=window.lunr?.((function(){this.ref("path"),this.field("name"),this.field("text"),A.forEach((e=>this.add(e)))}));return window.lunr?.Index.load(c.toJSON())},p=async(e,t,r)=>{let n=await u(e),i=await d(t,r);return[...n,...await u(e,i)].sort(((e,t)=>t.score-e.score))},h=e=>{let[t,r]=(0,o.useState)([]),{readFile:i,rootFs:a}=(0,n.o)();return(0,o.useEffect)((()=>{(async()=>{e.length>0?(window.lunr||await(0,l.mb)(A),u(e).then(r),d(i,a).then((t=>u(e,t).then((e=>r((t=>[...t,...e].sort(((e,t)=>t.score-e.score))))))))):r([])})()}),[i,a,e]),t}}}]);