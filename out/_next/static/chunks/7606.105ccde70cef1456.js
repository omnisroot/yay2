"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7606],{37606:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i=n(85893);let a=n(41686).ZP.div.withConfig({componentId:"sc-b6b7aa62-0"})`
  height: 100%;

  [role="application"] {
    border-radius: 0;
    height: 100% !important;

    button:disabled {
      pointer-events: none;
    }

    &[aria-disabled="true"] {
      .tox-editor-header {
        height: 39px;
        overflow: hidden;
        padding: 0;
        position: relative;

        &::before {
          background-color: rgba(255, 255, 255, 80%);
          content: "Click to switch into design mode.";
          cursor: pointer;
          display: flex;
          height: calc(100% - 1px);
          place-content: center;
          place-items: center;
          position: absolute;
          text-shadow: 0 0 25px rgba(0, 0, 0, 80%);
          width: 100%;
          z-index: 1;
        }

        .tox-toolbar-overlord {
          display: none;
        }
      }
    }
  }
`;var o=n(49108);let r={base_url:"/Program Files/TinyMCE/",branding:!1,draggable_modal:!0,image_advtab:!0,plugins:"\n  code help image link lists media\n  preview save searchreplace table wordcount",promotion:!1,suffix:".min",toolbar:"\n  save undo redo | formatselect | bold italic underline | forecolor backcolor |\n  alignleft aligncenter alignright | bullist outdent indent | code | help"},l=`${o.Ll}/New Rich Text Document.whtml`,s=e=>e?.mode.isReadOnly()||!e?.getContent();var d=n(79281),c=n(7316),u=n(25471),m=n(29222),p=n(13275),f=n(38246),b=n(1864),h=n(67294),g=n(46499),v=({containerRef:e,id:t,setLoading:i,url:a})=>{let{open:v,processes:{[t]:{libs:w=[]}={}}={},url:y}=(0,p.z)(),[x,k]=(0,h.useState)(),{prependFileToTitle:E}=(0,u.Z)(t),{readFile:L,stat:T,updateFolder:$,writeFile:C}=(0,m.o)(),{onDragOver:D,onDrop:F}=(0,c.Z)({id:t}),{setForegroundId:R}=(0,f.k)(),S=(0,h.useCallback)((async e=>{let t=new Date((0,d.GA)(e,await T(e))),n=new Intl.DateTimeFormat(o.ZW,{dateStyle:"medium"}).format(t);E(`${(0,b.basename)(e,(0,b.extname)(e))} (${n})`)}),[E,T]),W=(0,h.useCallback)((()=>{let t=e.current?.querySelector("iframe");t?.contentWindow&&[...t.contentWindow.document.links].forEach((e=>e.addEventListener("click",(t=>{let n=e.dataset.mceHref||"";if(""===(0,b.relative)(n.startsWith("/")?n:`/${n}`,e.pathname)&&x?.mode.isReadOnly()){(0,g.nK)(t);let n=(0,d.Wd)((0,g.RT)(e.pathname));n&&v(n,{url:e.pathname})}}))))}),[e,x?.mode,v]),Z=(0,h.useCallback)((async()=>{if(x){let e=await L(a);if(e.length>0&&(e=>{let t=e.editorContainer?.querySelector(".tox-editor-header");t instanceof HTMLDivElement&&t.addEventListener("click",(()=>{t.removeAttribute("title"),e.mode.set("design")}),o.K7),e.mode.set("readonly")})(x),".rtf"===(0,g.RT)(a)){let{RTFJS:t}=await Promise.all([n.e(8705),n.e(3131)]).then(n.bind(n,83131)),i=new t.Document(e),a=await i.render();x.setContent(a.map((e=>e.outerHTML)).join(""))}else x.setContent(e.toString());W(),S(a),x.iframeElement?.contentDocument&&(x.iframeElement.contentDocument.documentElement.scrollTop=0)}}),[x,W,L,S,a]);(0,h.useEffect)((()=>{x&&x.options.set("save_onsavecallback",(async()=>{let e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},t=a||l;try{await C(".rtf"===(0,g.RT)(t)?t.replace(".rtf",".whtml"):t,x.getContent(),!0),$((0,b.dirname)(t),(0,b.basename)(t)),S(t)}catch{e.text="Error occurred while saving.",e.type="error"}x.notificationManager.open(e)}))}),[x,$,S,a,C]),(0,h.useEffect)((()=>{x||(0,g.mb)(w).then((()=>{window.tinymce&&e.current&&(window.tinymce.remove(),window.tinymce.init({selector:`.${[...e.current.classList].join(".")} div`,setup:e=>{e.on("ExecCommand",(({command:e})=>{"mceNewDocument"===e&&(y(t,""),E(""))}))},...r}).then((([n])=>{let a=e.current?.querySelector("iframe");a?.contentWindow&&(a.contentWindow.addEventListener("dragover",(e=>{s(n)&&D(e)})),a.contentWindow.addEventListener("drop",(e=>{s(n)&&F(e)})),a.contentWindow.addEventListener("blur",(()=>R((e=>e===t?"":e)))),a.contentWindow.addEventListener("focus",(()=>R(t)))),k(n),i(!1)})))}))}),[e,x,t,w,D,F,E,R,i,y]),(0,h.useEffect)((()=>{a&&x&&Z()}),[x,Z,L,a]),(0,h.useEffect)((()=>()=>{window.setTimeout((()=>x?.destroy()),0)}),[x])},w=n(74293),y=({id:e})=>(0,i.jsx)(w.Z,{StyledComponent:a,id:e,useHook:v,children:(0,i.jsx)("div",{})})},74293:function(e,t,n){var i=n(85893),a=n(7316),o=n(13275),r=n(5152),l=n.n(r),s=n(67294);let d=l()((()=>n.e(7952).then(n.bind(n,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,s.memo)((({id:e,useHook:t,StyledComponent:n,children:r})=>{let{processes:{[e]:{url:l=""}={}}}=(0,o.z)(),c=(0,s.useRef)(null),[u,m]=(0,s.useState)(!0),p=(0,s.useMemo)((()=>({contain:"strict",visibility:u?"hidden":"visible"})),[u]);return t({containerRef:c,id:e,loading:u,setLoading:m,url:l}),(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsx)(d,{}),(0,i.jsx)(n,{ref:c,style:p,...(0,a.Z)({id:e}),children:r})]})}))},7316:function(e,t,n){var i=n(73260),a=n(82973),o=n(60480),r=n(29222),l=n(13275),s=n(38246),d=n(1864),c=n(67294),u=n(49108),m=n(46499);t.Z=({callback:e,directory:t=u.Ll,id:n,onDragLeave:p,onDragOver:f,updatePositions:b})=>{let{url:h}=(0,l.z)(),{iconPositions:g,sortOrders:v,setIconPositions:w}=(0,s.k)(),{mkdirRecursive:y,updateFolder:x,writeFile:k}=(0,r.o)(),E=(0,c.useCallback)((async(e,t,i)=>{if(n)if(t){let a=(0,d.join)(u.Ll,e);if(await y(u.Ll),await k(a,t,!0))return i===o.v.UPDATE_URL&&h(n,a),x(u.Ll,e),(0,d.basename)(a)}else i===o.v.UPDATE_URL&&h(n,e);return""}),[n,y,x,h,k]),{openTransferDialog:L}=(0,i.Z)();return{onDragLeave:p,onDragOver:e=>{f?.(e),(0,m.nK)(e)},onDrop:i=>{if(!u.my.has((0,m.RT)(t))){if(b&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,a.p4)(i);if(0===e.length&&""===n)return;let o={x:i.clientX,y:i.clientY},r=[];if(n){try{r=JSON.parse(n)}catch{}if(!Array.isArray(r))return;let[e]=r;if(!e||e.startsWith(t)&&(0,d.basename)(e)===(0,d.relative)(t,e))return;r=r.map((e=>(0,d.basename)(e)))}else r=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!g[`${t}/${e}`])return e;let n=0,i="";do{n+=1,i=`${t}/${(0,d.basename)(e,(0,d.extname)(e))} (${n})${(0,d.extname)(e)}`}while(g[i]);return(0,d.basename)(i)})),(0,m.vi)(t,i.target,g,v,o,r,w)}(0,a.WG)(i,e||E,t,L,!!n)}}}}},25471:function(e,t,n){var i=n(13275),a=n(21023),o=n(67294),r=n(49108);t.Z=e=>{let{title:t}=(0,i.z)(),[n]=e.split(r.CC),{title:l}=a.Z[n]||{},s=(0,o.useCallback)(((n,i)=>{let a=n?` - ${n}${i?` ${r.xy}`:""}`:"";t(e,`${l}${a}`)}),[e,l,t]),d=(0,o.useCallback)(((n,i,a)=>{let o=n?`${i?`${r.xy} `:""}${n}${a?" ":" - "}`:"";t(e,`${o}${l}`)}),[e,l,t]);return{appendFileToTitle:s,prependFileToTitle:d}}}}]);