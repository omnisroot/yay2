"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1199],{21199:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t=r(85893);let i=r(41686).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
  .eruda-container {
    position: relative !important;
    z-index: 1 !important;

    .eruda-dev-tools {
      height: 100% !important;
      opacity: 100% !important;

      .eruda-nav-bar-container {
        .eruda-nav-bar {
          overflow: hidden;
        }
      }
    }

    .eruda-entry-btn {
      display: none;
    }
  }
`;var a=r(13275),o=r(67294),s=r(46499);let d={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var l=({containerRef:e,id:n,loading:r,setLoading:t,url:i})=>{let{processes:{[n]:{closing:l=!1,libs:u=[]}={}}={}}=(0,a.z)();(0,o.useEffect)((()=>{(0,s.mb)(u).then((()=>{if(window.eruda&&e.current){let n=e.current.querySelector("div"),r=(0,s.E9)();n&&(window.eruda.init({...d,container:n}),window.eruda.remove("info"),window.eruda.remove("snippets"),r<395&&window.eruda.remove("resources"),r<321&&window.eruda.remove("sources"),window.eruda.show(),t(!1))}}))}),[e,u,t]),(0,o.useEffect)((()=>(window.eruda&&i&&!r&&!l&&window.eruda.show(i),()=>{l&&window.eruda?.destroy()})),[l,r,i])},u=r(74293),c=({id:e})=>(0,t.jsx)(u.Z,{StyledComponent:i,id:e,useHook:l,children:(0,t.jsx)("div",{})})},74293:function(e,n,r){var t=r(85893),i=r(7316),a=r(13275),o=r(5152),s=r.n(o),d=r(67294);let l=s()((()=>r.e(7952).then(r.bind(r,87952))),{loadableGenerated:{webpack:()=>[87952]}});n.Z=(0,d.memo)((({id:e,useHook:n,StyledComponent:r,children:o})=>{let{processes:{[e]:{url:s=""}={}}}=(0,a.z)(),u=(0,d.useRef)(null),[c,f]=(0,d.useState)(!0),m=(0,d.useMemo)((()=>({contain:"strict",visibility:c?"hidden":"visible"})),[c]);return n({containerRef:u,id:e,loading:c,setLoading:f,url:s}),(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)(l,{}),(0,t.jsx)(r,{ref:u,style:m,...(0,i.Z)({id:e}),children:o})]})}))},7316:function(e,n,r){var t=r(73260),i=r(82973),a=r(60480),o=r(29222),s=r(13275),d=r(38246),l=r(1864),u=r(67294),c=r(49108),f=r(46499);n.Z=({callback:e,directory:n=c.Ll,id:r,onDragLeave:m,onDragOver:w,updatePositions:p})=>{let{url:v}=(0,s.z)(),{iconPositions:h,sortOrders:b,setIconPositions:y}=(0,d.k)(),{mkdirRecursive:g,updateFolder:k,writeFile:L}=(0,o.o)(),x=(0,u.useCallback)((async(e,n,t)=>{if(r)if(n){let i=(0,l.join)(c.Ll,e);if(await g(c.Ll),await L(i,n,!0))return t===a.v.UPDATE_URL&&v(r,i),k(c.Ll,e),(0,l.basename)(i)}else t===a.v.UPDATE_URL&&v(r,e);return""}),[r,g,k,v,L]),{openTransferDialog:D}=(0,t.Z)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,f.nK)(e)},onDrop:t=>{if(!c.my.has((0,f.RT)(n))){if(p&&t.target instanceof HTMLElement){let{files:e,text:r}=(0,i.p4)(t);if(0===e.length&&""===r)return;let a={x:t.clientX,y:t.clientY},o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(n)&&(0,l.basename)(e)===(0,l.relative)(n,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!h[`${n}/${e}`])return e;let r=0,t="";do{r+=1,t=`${n}/${(0,l.basename)(e,(0,l.extname)(e))} (${r})${(0,l.extname)(e)}`}while(h[t]);return(0,l.basename)(t)})),(0,f.vi)(n,t.target,h,b,a,o,y)}(0,i.WG)(t,e||x,n,D,!!r)}}}}}}]);