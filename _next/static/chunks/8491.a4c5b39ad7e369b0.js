"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8491],{18491:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var s=r(85893),o=(r(93220),r(87952)),i=r(67240),n=r(65739),a=r(41686);let l=a.ZP.div.withConfig({componentId:"sc-a2b07cfc-0"})`
  ${n.Z} {
    column-gap: 2px;
    height: ${({theme:e,showNavigation:t,showStatusBar:r})=>`calc(100% - ${t?(e=>e.sizes.fileExplorer.navBarHeight)(e):0} - ${r?(e=>e.sizes.fileExplorer.statusBarHeight)(e):0})`};
    padding-left: 5px;
    padding-right: 5px;
    backdrop-filter: ${({theme:e})=>e.colors.fileExplorer?.backdropFilter||"none"};
  }

  ${o.default} {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`};
  }

  ${i.Z} {
    &:hover {
      &::before {
        border-width: 0;
      }
    }

    &::before {
      border-width: 0;
    }
  }
`;var c=r(79281),u=r(13525),p=r(29222),f=r(5059),d=r(13275),h=r(1864),w=r(67294),g=r(49108),b=r(46499),m=({id:e})=>{let{icon:t,title:r,processes:{[e]:o},url:i}=(0,d.z)(),{componentWindow:n,closing:a,icon:m="",url:v=""}=o||{},{fs:E,rootFs:$}=(0,p.o)(),[k,x]=(0,w.useState)(v),S=(0,w.useRef)(null),B=(0,h.basename)(v),y=!(!$?.mntMap[v]||!B),z=(0,w.useCallback)((e=>{e.altKey&&"D"===e.key.toUpperCase()&&((0,b.nK)(e),S?.current?.focus(g.eS))}),[]);return(0,w.useEffect)((()=>{v&&(r(e,B||g.SP),(!m||v!==k||y&&m!==g.iR)&&(y?t(e,(0,f.isMountedFolder)($?.mntMap[v])?g.iR:g.Wc):E&&(t(e,`/System/Icons/${B?"folder":"pc"}.webp`),(0,c.nR)(E,v).then((r=>{r&&t(e,r)}))),x(v)))}),[k,B,E,m,e,y,$?.mntMap,t,i,r,v]),(0,w.useEffect)((()=>{!n||a||v||(i(e,"/"),t(e,"/System/Icons/pc.webp"))}),[a,e,n,t,i,v]),(0,w.useEffect)((()=>(n?.addEventListener("keydown",z),()=>n?.removeEventListener("keydown",z))),[n,z]),v?(0,s.jsxs)(l,{showNavigation:!1,showStatusBar:!1,children:[!1,(0,s.jsx)(u.Z,{id:e,showStatusBar:!1,url:v,view:"icon"})]}):null}}}]);