"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2415],{42415:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(85893),a=n(41686);let o=a.ZP.footer.withConfig({componentId:"sc-e5795db7-0"})`
  background-color: rgb(25, 25, 25);
  border-top: 1px solid rgb(19, 19, 19);
  bottom: 0;
  color: rgb(108, 103, 106);
  display: flex;
  font-size: 16px;
  height: 30px;
  place-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;

  ol {
    display: flex;
    place-content: flex-end;
    place-items: center;

    &:first-of-type {
      padding-left: 8px;
    }

    &:last-of-type {
      padding-right: 8px;
    }

    li {
      margin: 0 4px;
      padding: 4px 8px;
      white-space: nowrap;

      button {
        color: inherit;
        font-size: inherit;
        padding: 4px 8px;

        &.pretty {
          position: relative;
          top: -2px;
        }

        svg {
          fill: rgb(108, 103, 106);
          height: 16px;
          width: 16px;
        }
      }

      &:hover {
        background-color: rgb(37, 37, 37);
      }

      &:active {
        background-color: rgb(34, 34, 34);
      }

      &.clickable {
        padding: 0;
      }

      &#save {
        svg {
          margin-top: 4px;
        }
      }
    }
  }
`,s={paths:{vs:"/Program Files/MonacoEditor/vs"}},l={".whtml":".html"};var r=n(21334),d=n(49108);let c=e=>{let t=l[e]||e;if(!r._.has(t))return"";let{id:n=""}=window.monaco.languages.getLanguages().find((e=>e.extensions?.includes(t)))||{};return n},u=({relatedTarget:e})=>{if(e instanceof HTMLElement){let t;"actions-container"===e.classList.value?t=e.closest(".monaco-menu-container"):"shadow-root-host"===e.classList.value&&e.shadowRoot instanceof ShadowRoot&&(t=e),t instanceof HTMLElement&&t.closest("section")&&t.closest("section")?.parentNode?.prepend(t)}},p=(e,t)=>{if(!t)return[];let{uri:n}=t.getModel()||{},[i]=n?.path.split("|")||[],a="file"===n?.scheme?i:e||d.$Z;return e&&e!==i?[]:[a,t.getValue()]},g=new Set(["json","css","sass","less","html","markdown","xml"]),f=e=>g.has(e.toLowerCase()),h=async(e,t)=>{let i=e.toLowerCase();if("json"===i)try{return JSON.stringify(JSON.parse(t),void 0,2)}catch{return t}return(await n.e(4935).then(n.bind(n,94935))).format(t,await(async e=>["css","sass","less"].includes(e)?{parser:e,plugins:[await n.e(1285).then(n.bind(n,71285))]}:"html"===e?{parser:"html",plugins:[await n.e(226).then(n.bind(n,80226))]}:"xml"===e?{parser:"xml",plugins:[(await n.e(2717).then(n.bind(n,22717))).default]}:"markdown"===e?{parser:"markdown",plugins:[await n.e(2149).then(n.bind(n,22149))]}:void 0)(i))};var m=n(25471),w=n(29222),b=n(13275),x=n(1864),v=n(67294),y=n(44714),k=n(46499);let C=(0,v.memo)((()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z",fillRule:"evenodd"})})));var L=({id:e})=>{let{processes:{[e]:t}}=(0,b.z)(),{editor:n,url:a}=t||{},{updateFolder:s,writeFile:l}=(0,w.o)(),{prependFileToTitle:r}=(0,m.Z)(e),[d,c]=(0,v.useState)(""),[u,g]=(0,v.useState)("Ln 1, Col 1"),[L,$]=(0,v.useState)(1);return(0,v.useEffect)((()=>{let e=()=>{let e=n?.getSelection(),{positionColumn:t=0,positionLineNumber:i=0}=e||{},a=e?n?.getModel()?.getValueInRange(e):"";g(`Ln ${i}, Col ${t}${a?` (${a.length} selected)`:""}`)},t=()=>$(n?.getModel()?.getLineCount()||0);n?.onDidChangeModelContent(t),n?.onDidChangeCursorPosition(e),n?.onDidChangeModel((()=>{let i=n?.getModel(),a=i?.getLanguageId();a&&c(window.monaco?.languages.getLanguages().reduce(((e,{id:t,aliases:n})=>t===a&&n?.[0]||e),a)),t(),e()}))}),[n]),(0,i.jsx)(o,{onContextMenuCapture:k.nK,children:n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{children:(0,i.jsxs)("li",{children:["Lines ",L]})}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"clickable",id:"save",children:(0,i.jsx)(y.Z,{onClick:async()=>{let[e,t]=p(a,n);e&&t&&(await l(e,t,!0),s((0,x.dirname)(e),(0,x.basename)(e)),r((0,x.basename)(e)))},...(0,k.PS)("Save"),children:(0,i.jsx)(C,{})})}),a&&f(d)&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(y.Z,{className:"pretty",onClick:async()=>n?.setValue(await h(d,n.getValue())),...(0,k.PS)(`Pretty print ${(0,x.basename)(a)}`),children:"{ }"})}),u&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(y.Z,{onClick:()=>{try{n?.focus(),n?.getAction("editor.action.gotoLine")?.run()}catch{}},...(0,k.PS)("Go to Line/Column"),children:u})}),""!==d&&(0,i.jsx)("li",{children:d})]})]})})};let $=a.ZP.div.withConfig({componentId:"sc-792c2bb4-0"})`
  color: ${({theme:e})=>e.colors.text};
  width: 100%;

  && {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px - 31px)`};
  }
`;var j=n(63764),S=n(15632),M=({containerRef:e,id:t,setLoading:n,url:i})=>{let{readFile:a,updateFolder:o,writeFile:l}=(0,w.o)(),{argument:r}=(0,b.z)(),{prependFileToTitle:g}=(0,m.Z)(t),[f,h]=(0,v.useState)(),[y,C]=(0,v.useState)(),L=(0,v.useCallback)(((e,t=0)=>{let n=`${e}|${t}`,i=y?.editor.getModels();return i?.some((e=>e._associatedResource.path===n))?L(e,t+1):y?.Uri.parse(n)}),[y?.Uri,y?.editor]),$=(0,v.useCallback)((async()=>{let e=y?.editor.createModel((await a(i)).toString(),c(k.RT(i)),L(i));return e?.onDidChangeContent((()=>g(x.basename(i),!0))),e}),[L,y?.editor,g,a,i]),M=(0,v.useCallback)((async()=>{y&&f&&i.startsWith("/")&&((0,S.H3)("define"),f.getModel()?.dispose(),f.setModel(await $()),window.setTimeout((()=>(0,S.wz)("define")),2.5*d.i2)),g((0,x.basename)(i||d.$Z))}),[$,f,y,g,i]);(0,v.useEffect)((()=>{y||((0,S.H3)("define"),j._m.config(s),j._m.init().then((e=>{(0,S.wz)("define"),C(e)})))}),[y]),(0,v.useEffect)((()=>{f?.onKeyDown((async e=>{let{ctrlKey:t,code:n,keyCode:a}=e;if(t&&("KeyS"===n||83===a)){e.preventDefault();let[t,n]=p(i,f);t&&"string"==typeof n&&(await l(t,n,!0),o(x.dirname(t),x.basename(t)),g(x.basename(t)))}}))}),[f,g,o,i,l]),(0,v.useEffect)((()=>{if(y&&!f&&e.current){let i=y.editor.create(e.current,{automaticLayout:!0,theme:"vs-dark"});e.current?.closest("section")?.addEventListener("focus",(()=>i.focus()),{passive:!0}),e.current?.addEventListener("blur",u,{capture:!0,passive:!0}),h(i),r(t,"editor",i),n(!1)}return()=>{f&&y&&(f.getModel()?.dispose(),f.dispose(),(0,S.wz)("define"))}}),[e,f,t,y,r,n]),(0,v.useEffect)((()=>{y&&f&&i&&M()}),[f,M,y,g,i])},T=n(74293),F=({id:e})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T.Z,{StyledComponent:$,id:e,useHook:M}),(0,i.jsx)(L,{id:e})]})},74293:function(e,t,n){var i=n(85893),a=n(7316),o=n(13275),s=n(5152),l=n.n(s),r=n(67294);let d=l()((()=>n.e(7952).then(n.bind(n,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,r.memo)((({id:e,useHook:t,StyledComponent:n,children:s})=>{let{processes:{[e]:{url:l=""}={}}}=(0,o.z)(),c=(0,r.useRef)(null),[u,p]=(0,r.useState)(!0),g=(0,r.useMemo)((()=>({contain:"strict",visibility:u?"hidden":"visible"})),[u]);return t({containerRef:c,id:e,loading:u,setLoading:p,url:l}),(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsx)(d,{}),(0,i.jsx)(n,{ref:c,style:g,...(0,a.Z)({id:e}),children:s})]})}))},7316:function(e,t,n){var i=n(73260),a=n(82973),o=n(60480),s=n(29222),l=n(13275),r=n(38246),d=n(1864),c=n(67294),u=n(49108),p=n(46499);t.Z=({callback:e,directory:t=u.Ll,id:n,onDragLeave:g,onDragOver:f,updatePositions:h})=>{let{url:m}=(0,l.z)(),{iconPositions:w,sortOrders:b,setIconPositions:x}=(0,r.k)(),{mkdirRecursive:v,updateFolder:y,writeFile:k}=(0,s.o)(),C=(0,c.useCallback)((async(e,t,i)=>{if(n)if(t){let a=(0,d.join)(u.Ll,e);if(await v(u.Ll),await k(a,t,!0))return i===o.v.UPDATE_URL&&m(n,a),y(u.Ll,e),(0,d.basename)(a)}else i===o.v.UPDATE_URL&&m(n,e);return""}),[n,v,y,m,k]),{openTransferDialog:L}=(0,i.Z)();return{onDragLeave:g,onDragOver:e=>{f?.(e),(0,p.nK)(e)},onDrop:i=>{if(!u.my.has((0,p.RT)(t))){if(h&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,a.p4)(i);if(0===e.length&&""===n)return;let o={x:i.clientX,y:i.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,d.basename)(e)===(0,d.relative)(t,e))return;s=s.map((e=>(0,d.basename)(e)))}else s=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!w[`${t}/${e}`])return e;let n=0,i="";do{n+=1,i=`${t}/${(0,d.basename)(e,(0,d.extname)(e))} (${n})${(0,d.extname)(e)}`}while(w[i]);return(0,d.basename)(i)})),(0,p.vi)(t,i.target,w,b,o,s,x)}(0,a.WG)(i,e||C,t,L,!!n)}}}}},25471:function(e,t,n){var i=n(13275),a=n(21023),o=n(67294),s=n(49108);t.Z=e=>{let{title:t}=(0,i.z)(),[n]=e.split(s.CC),{title:l}=a.Z[n]||{},r=(0,o.useCallback)(((n,i)=>{let a=n?` - ${n}${i?` ${s.xy}`:""}`:"";t(e,`${l}${a}`)}),[e,l,t]),d=(0,o.useCallback)(((n,i,a)=>{let o=n?`${i?`${s.xy} `:""}${n}${a?" ":" - "}`:"";t(e,`${o}${l}`)}),[e,l,t]);return{appendFileToTitle:r,prependFileToTitle:d}}},15632:function(e,t,n){n.d(t,{H3:function(){return s},od:function(){return i},wz:function(){return o}});let i=e=>e.forEach((e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}})),a=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},o=e=>a(e,!0),s=e=>{Object.getOwnPropertyDescriptor(window,e)||(e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})})(e),a(e,!1)}}}]);