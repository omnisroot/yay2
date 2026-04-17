"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2061],{82061:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(85893);let r=n(41686).ZP.footer.withConfig({componentId:"sc-753ffae9-0"})`
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: rgb(247, 247, 247);
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${({theme:e})=>e.sizes.fileExplorer.statusBarHeight};
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 10px;

    &::after {
      border-right: 1px solid rgb(247, 247, 247);
      content: "";
      height: 11px;
      margin-left: 11px;
      position: relative;
      top: 3px;
    }

    .selected {
      margin-right: 10px;
      overflow: hidden;
    }
  }
`;var s=n(29222),a=n(80137),c=n(1864),o=n(67294),l=n(46499),u=({count:e,directory:t,fileDrop:n,selected:u})=>{let{exists:f,lstat:d,stat:p}=(0,s.o)(),[h,g]=(0,o.useState)(-1),[x,w]=(0,o.useState)(!1),m=e=>w(e>225),v=(0,o.useRef)(null);return(0,o.useEffect)((()=>{(async()=>{g(await u.reduce((async(e,n)=>{let i=await e;if(-2===i)return-2;let r=(0,c.join)(t,n);try{if(await f(r))return(await d(r)).isDirectory()?-2:(-1===i?0:i)+(await p(r)).size}catch{}return e}),Promise.resolve(-1)))})()}),[t,f,d,u,p]),(0,o.useLayoutEffect)((()=>{v.current&&m(v.current.getBoundingClientRect().width)}),[]),(0,a.Z)(v.current,(0,o.useCallback)((([{contentRect:{width:e=0}={}}])=>m(e)),[])),(0,i.jsxs)(r,{ref:v,onContextMenuCapture:l.nK,...n,children:[(0,i.jsxs)("div",{...(0,l.PS)("Total item count"),children:[e," item",1===e?"":"s"]}),x&&u.length>0&&(0,i.jsxs)("div",{className:"selected",...(0,l.PS)("Selected item count and size"),children:[u.length," item",1===u.length?"":"s"," selected",-1!==h&&-2!==h?`  ${(0,l.UR)(h)}`:""]})]})}},80137:function(e,t,n){var i=n(67294);t.Z=(e,t)=>{let[n,r]=(0,i.useState)();(0,i.useEffect)((()=>{t&&r(new ResizeObserver(t))}),[t]),(0,i.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);