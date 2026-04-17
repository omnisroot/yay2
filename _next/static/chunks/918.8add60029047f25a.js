"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{20121:function(e,r,t){let o=t(41686).ZP.button.withConfig({componentId:"sc-59a750f5-0"})`
  background-color: rgb(225, 225, 225);
  border: 1px solid rgb(173, 173, 173);
  display: grid;
  font-family: ${({theme:e})=>e.formats.systemFont};
  font-size: 12px;
  height: 23px;
  line-height: ${21}px;
  transition: background-color 0.25s ease;
  width: 73px;

  &:focus,
  &.focus {
    border: 2px solid rgb(0, 120, 215);
    line-height: ${19}px;
  }

  &:hover {
    background-color: rgb(229, 241, 251);
    border: 1px solid rgb(0, 120, 215);
    line-height: ${21}px;
  }

  &:active {
    background-color: rgb(204, 228, 247);
    border: 1px solid rgb(0, 84, 153);
    line-height: ${21}px;
    transition: none;
  }

  &:disabled {
    background-color: rgb(204, 204, 204);
    border: 1px solid rgb(191, 191, 191);
    line-height: ${21}px;
  }
`;r.Z=o},40918:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var o=t(85893),i=t(20121),n=t(41686);let s=n.iv`
  animation: gradient 5s ease-in-out alternate infinite;
  background: ${({theme:e})=>`linear-gradient(-45deg, #fff, ${e.colors.progressBarRgb}, #fff)`};
  background-size: 300% 300%;
  content: "";
  inset: 0;
  position: absolute;
`,a=n.ZP.div.withConfig({componentId:"sc-f70c3ec6-0"})`
  h1,
  div {
    align-items: baseline;
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px - 41px - 2px);
    justify-content: space-around;
    padding: 0 22px;

    progress {
      border: 1px solid rgb(188, 188, 188);
      height: 15px;
      overflow: hidden;
      position: relative;
      width: 100%;

      &::-webkit-progress-bar {
        background: rgb(230, 230, 230);
      }

      &::-webkit-progress-value {
        background: ${({theme:e})=>e.colors.progressBarRgb};
      }

      &::-moz-progress-bar {
        background: ${({theme:e})=>e.colors.progressBarRgb};
      }

      &:indeterminate {
        /* stylelint-disable-next-line block-no-empty */
        &::-moz-progress-bar {
          ${s}
        }

        /* stylelint-disable-next-line block-no-empty */
        &::after {
          ${s}
        }
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  div {
    margin-top: -3px;
  }

  h1 {
    background: linear-gradient(
      to right,
      rgb(220, 229, 244),
      rgb(155, 192, 227),
      rgb(0, 43, 85)
    );
    display: flex;
    font-size: 15px;
    font-weight: 400;
    height: 40px;
    place-items: flex-start;
    white-space: nowrap;
    width: 100%;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
  }

  nav {
    background-color: rgb(240, 240, 240);
    border-top: 1px solid rgb(223, 223, 223);
    bottom: 0;
    box-sizing: content-box;
    display: flex;
    height: 41px;
    padding-bottom: 1px;
    place-items: center;
    position: absolute;
    width: 100%;

    ${i.Z} {
      padding-bottom: 1px;
      position: absolute;
      right: 23px;
    }
  }
`;var l=t(13275),d=t(1864),c=t(67294),g=t(49108),b=t(46499);let p=e=>Array.isArray(e?.[0]);var h=({id:e})=>{let{argument:r,closeWithTransition:t,processes:{[e]:n}={},title:s}=(0,l.z)(),{closing:h,fileReaders:u,url:f}=n||{},[x,m]=(0,c.useState)(),[k="",{name:v=""}={}]=x||[],[$,y]=(0,c.useState)(0),w=(0,c.useMemo)((()=>f&&!u?"Extracting":"Copying"),[u,f]),E=(0,c.useRef)(!1),I=(0,c.useCallback)((()=>{E.current=!1,t(e)}),[t,e]),C=(0,c.useCallback)((([e,...r])=>{let t=0===r.length;e.read().then((()=>{if(y((e=>e+1)),t)e.done?.(),I();else{let[{directory:e,name:t}]=r;m([e,{name:t}])}})),t||C(r)}),[I]),z=(0,c.useCallback)((([[e,r,t],...o])=>{let i=0;m([r,e]),t.addEventListener("progress",(({loaded:e=0})=>{let r=e-i;y((e=>e+r)),i=e}),{passive:!0}),t.addEventListener("loadend",(()=>{o.length>0?z(o):I()}),g.K7),t.readAsArrayBuffer(e)}),[I]),j=(0,c.useMemo)((()=>p(u)?u.reduce(((e,[{size:r=0}])=>e+r),0):u?.length||Number.POSITIVE_INFINITY),[u]);return(0,c.useEffect)((()=>{if(!E.current)if(u)if(u?.length>0)if(E.current=!0,p(u))z(u);else{let[{directory:e,name:r}]=u;m([e,{name:r}]),C(u)}else t(e);else f&&m([(0,d.dirname)(f),{name:(0,d.basename)(f)}])}),[t,u,e,z,C,f]),(0,c.useEffect)((()=>{if(E.current){let t=Math.floor($/j*100);r(e,"progress",t),s(e,`${t}% complete`)}}),[r,e,$,s,j]),(0,c.useEffect)((()=>s(e,`${w}...`)),[w,e,s]),(0,c.useEffect)((()=>()=>{h&&E.current&&(p(u)?u.forEach((([,,e])=>e.abort())):(u?.forEach((e=>e.abort())),u?.[0]?.done?.()))}),[h,u]),(0,o.jsxs)(a,{onContextMenu:b.nK,children:[(0,o.jsx)("h1",{children:v?`${w} '${v.length>=37?`${v.slice(0,37)}...`:v}'`:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:k?`To '${k}'`:""}),(0,o.jsx)("progress",{max:j,value:j===Number.POSITIVE_INFINITY?void 0:$})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(i.Z,{onClick:()=>t(e),children:"Cancel"})})]})}}}]);