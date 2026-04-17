"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6643],{96643:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(85893);let r=n(41686).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
  height: 100%;
  width: 100%;

  &.drop {
    &::before {
      color: #ffad33;
      content: "Drop SWF/SPL file here";
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
  }

  ruffle-player {
    height: 100%;
    width: 100%;
  }
`;var i=n(25471),l=n(29222),o=n(13275),s=n(1864),c=n(67294),d=n(46499),u=({containerRef:e,id:t,setLoading:n,url:a})=>{let{linkElement:r,processes:{[t]:{libs:u=[]}={}}={}}=(0,o.z)(),[f,p]=(0,c.useState)(),{appendFileToTitle:m}=(0,i.Z)(t),{readFile:h}=(0,l.o)(),b=(0,c.useCallback)((async()=>{e.current?.classList.remove("drop");try{await(f?.load({data:await h(a)}))}catch{}m((0,s.basename)(a,(0,s.extname)(a)))}),[m,e,f,h,a]);(0,c.useEffect)((()=>{(0,d.mb)(u).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},p(window.RufflePlayer.newest().createPlayer()),a||e.current?.classList.add("drop"))}))}),[e,u,a]),(0,c.useEffect)((()=>(e.current&&f&&(e.current.append(f),r(t,"peekElement",f),n(!1)),()=>f?.remove())),[e,t,r,f,n]),(0,c.useEffect)((()=>{e.current&&f&&a&&b()}),[e,b,f,a])},f=n(74293),p=({id:e})=>(0,a.jsx)(f.Z,{StyledComponent:r,id:e,useHook:u})},74293:function(e,t,n){var a=n(85893),r=n(7316),i=n(13275),l=n(5152),o=n.n(l),s=n(67294);let c=o()((()=>n.e(7952).then(n.bind(n,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,s.memo)((({id:e,useHook:t,StyledComponent:n,children:l})=>{let{processes:{[e]:{url:o=""}={}}}=(0,i.z)(),d=(0,s.useRef)(null),[u,f]=(0,s.useState)(!0),p=(0,s.useMemo)((()=>({contain:"strict",visibility:u?"hidden":"visible"})),[u]);return t({containerRef:d,id:e,loading:u,setLoading:f,url:o}),(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)(c,{}),(0,a.jsx)(n,{ref:d,style:p,...(0,r.Z)({id:e}),children:l})]})}))},7316:function(e,t,n){var a=n(73260),r=n(82973),i=n(60480),l=n(29222),o=n(13275),s=n(38246),c=n(1864),d=n(67294),u=n(49108),f=n(46499);t.Z=({callback:e,directory:t=u.Ll,id:n,onDragLeave:p,onDragOver:m,updatePositions:h})=>{let{url:b}=(0,o.z)(),{iconPositions:y,sortOrders:w,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:v,updateFolder:k,writeFile:$}=(0,l.o)(),L=(0,d.useCallback)((async(e,t,a)=>{if(n)if(t){let r=(0,c.join)(u.Ll,e);if(await v(u.Ll),await $(r,t,!0))return a===i.v.UPDATE_URL&&b(n,r),k(u.Ll,e),(0,c.basename)(r)}else a===i.v.UPDATE_URL&&b(n,e);return""}),[n,v,k,b,$]),{openTransferDialog:x}=(0,a.Z)();return{onDragLeave:p,onDragOver:e=>{m?.(e),(0,f.nK)(e)},onDrop:a=>{if(!u.my.has((0,f.RT)(t))){if(h&&a.target instanceof HTMLElement){let{files:e,text:n}=(0,r.p4)(a);if(0===e.length&&""===n)return;let i={x:a.clientX,y:a.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!y[`${t}/${e}`])return e;let n=0,a="";do{n+=1,a=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${n})${(0,c.extname)(e)}`}while(y[a]);return(0,c.basename)(a)})),(0,f.vi)(t,a.target,y,w,i,l,g)}(0,r.WG)(a,e||L,t,x,!!n)}}}}},25471:function(e,t,n){var a=n(13275),r=n(21023),i=n(67294),l=n(49108);t.Z=e=>{let{title:t}=(0,a.z)(),[n]=e.split(l.CC),{title:o}=r.Z[n]||{},s=(0,i.useCallback)(((n,a)=>{let r=n?` - ${n}${a?` ${l.xy}`:""}`:"";t(e,`${o}${r}`)}),[e,o,t]),c=(0,i.useCallback)(((n,a,r)=>{let i=n?`${a?`${l.xy} `:""}${n}${r?" ":" - "}`:"";t(e,`${i}${o}`)}),[e,o,t]);return{appendFileToTitle:s,prependFileToTitle:c}}}}]);