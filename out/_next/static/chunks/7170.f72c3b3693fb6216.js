"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7170,7952],{47170:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var i=a(85893);let n=a(41686).ZP.div.withConfig({componentId:"sc-f808b011-0"})`
  iframe {
    opacity: ${({$loaded:e})=>e?"100%":"0%"};
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`;var r=a(87952),o=a(7316),l=a(25471),s=a(29222),f=a(13275),d=a(38246),c=a(1864),u=a(67294),p=a(49108),m=a(48764).Buffer,g=({id:e})=>{let{closeWithTransition:t,processes:{[e]:{libs:[a=""]=[],url:g=""}={}}={}}=(0,f.z)(),{createPath:w,exists:h,readFile:b,updateFolder:y,writeFile:v}=(0,s.o)(),{foregroundId:$,setForegroundId:k,setWallpaper:x}=(0,d.k)(),F=(0,u.useRef)(null),[L,T]=(0,u.useState)(!1),[D,E]=(0,u.useState)(),{prependFileToTitle:_}=(0,l.Z)(e),C=(0,u.useCallback)((e=>t=>{let a=(0,c.join)(p.dA,"wallpaper.png");t.toBlob((async t=>{await v(a,m.from(await(t?.arrayBuffer())),!0),x(a,e)}))}),[x,v]),{onDragOver:j,onDrop:P}=(0,o.Z)({id:e});return(0,u.useEffect)((()=>{_("Untitled")}),[_]),(0,u.useEffect)((()=>{$!==e&&F.current?.contentWindow?.addEventListener("click",(()=>k(e)),p.K7)}),[$,e,k]),(0,u.useEffect)((()=>{let{contentWindow:a}=F.current||{};if(L&&a&&!D){let i=a.systemHooks.showOpenFileDialog,n=a.file_new;E(a),a.file_new=()=>{_("Untitled"),n()},a.systemHooks.setWallpaperTiled=C("tile"),a.systemHooks.setWallpaperCentered=C("center"),a.systemHooks.showOpenFileDialog=async e=>{let{file:t}=await i(e);return _(t.name),{file:t}},a.close=()=>t(e),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async({defaultFileName:e,getBlob:t})=>y(p.Ll,await w(`${e}.png`,p.Ll,m.from(await(await t("image/png")).arrayBuffer()))),a.systemHooks.writeBlobToHandle=async(e,t)=>{await h(e)&&(await v(e,m.from(await t.arrayBuffer()),!0),y((0,c.dirname)(e),(0,c.basename)(e)))},a.addEventListener("dragover",j),a.addEventListener("drop",P)}}),[t,w,h,e,D,L,j,P,_,C,y,v]),(0,u.useEffect)((()=>{D&&g&&b(g).then((e=>{let t=D.onunhandledrejection;D.onunhandledrejection=e=>{t?.(e),"either options.data or options.file or options.filePath must be passed"===e?.reason?.message&&_("Untitled")},D.open_from_file(new File([e],g),g),_((0,c.basename)(g))}))}),[D,_,b,g]),(0,i.jsxs)(n,{$loaded:L,children:[!L&&(0,i.jsx)(r.default,{className:"loading"}),(0,i.jsx)("iframe",{ref:F,height:"100%",id:"jspaint-iframe",onLoad:()=>T(!0),src:a,title:e,width:"100%",...p.v0})]})}},87952:function(e,t,a){a.r(t);let i=a(41686).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
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
`;t.default=i},7316:function(e,t,a){var i=a(73260),n=a(82973),r=a(60480),o=a(29222),l=a(13275),s=a(38246),f=a(1864),d=a(67294),c=a(49108),u=a(46499);t.Z=({callback:e,directory:t=c.Ll,id:a,onDragLeave:p,onDragOver:m,updatePositions:g})=>{let{url:w}=(0,l.z)(),{iconPositions:h,sortOrders:b,setIconPositions:y}=(0,s.k)(),{mkdirRecursive:v,updateFolder:$,writeFile:k}=(0,o.o)(),x=(0,d.useCallback)((async(e,t,i)=>{if(a)if(t){let n=(0,f.join)(c.Ll,e);if(await v(c.Ll),await k(n,t,!0))return i===r.v.UPDATE_URL&&w(a,n),$(c.Ll,e),(0,f.basename)(n)}else i===r.v.UPDATE_URL&&w(a,e);return""}),[a,v,$,w,k]),{openTransferDialog:F}=(0,i.Z)();return{onDragLeave:p,onDragOver:e=>{m?.(e),(0,u.nK)(e)},onDrop:i=>{if(!c.my.has((0,u.RT)(t))){if(g&&i.target instanceof HTMLElement){let{files:e,text:a}=(0,n.p4)(i);if(0===e.length&&""===a)return;let r={x:i.clientX,y:i.clientY},o=[];if(a){try{o=JSON.parse(a)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,f.basename)(e)===(0,f.relative)(t,e))return;o=o.map((e=>(0,f.basename)(e)))}else o=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!h[`${t}/${e}`])return e;let a=0,i="";do{a+=1,i=`${t}/${(0,f.basename)(e,(0,f.extname)(e))} (${a})${(0,f.extname)(e)}`}while(h[i]);return(0,f.basename)(i)})),(0,u.vi)(t,i.target,h,b,r,o,y)}(0,n.WG)(i,e||x,t,F,!!a)}}}}},25471:function(e,t,a){var i=a(13275),n=a(21023),r=a(67294),o=a(49108);t.Z=e=>{let{title:t}=(0,i.z)(),[a]=e.split(o.CC),{title:l}=n.Z[a]||{},s=(0,r.useCallback)(((a,i)=>{let n=a?` - ${a}${i?` ${o.xy}`:""}`:"";t(e,`${l}${n}`)}),[e,l,t]),f=(0,r.useCallback)(((a,i,n)=>{let r=a?`${i?`${o.xy} `:""}${a}${n?" ":" - "}`:"";t(e,`${r}${l}`)}),[e,l,t]);return{appendFileToTitle:s,prependFileToTitle:f}}}}]);