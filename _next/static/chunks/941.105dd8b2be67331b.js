"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{80941:function(e,i,t){t.r(i),t.d(i,{default:function(){return j}});var o=t(85893),n=t(41686);let r=n.ZP.div.withConfig({componentId:"sc-b9e2294f-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    height: calc(100% - 56px - 80px);
    overflow-y: scroll;
  }

  h2,
  h4 {
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    height: 56px;
    padding: 16px 24px;
  }

  h4 {
    padding: 0 0 6px 23px;
  }

  nav {
    background-color: #fff;
    height: 80px;
    width: 100%;

    button {
      background-color: rgb(204, 204, 204);
      font-size: 15px;
      font-weight: 600;
      height: 32px;
      margin: 24px;
      position: absolute;
      right: 0;
      width: 200px;

      &:hover {
        background-color: rgb(216, 216, 216);
      }

      &:active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`,c=n.ZP.ul.withConfig({componentId:"sc-67e445d0-0"})`
  border-top: 1px solid transparent;
  padding-bottom: 9px;
  position: relative;
  width: 100%;

  &::before {
    border-top: ${({$hideBorder:e})=>"1px solid "+(e?"transparent":"rgb(192, 192, 194)")};
    content: "";
    height: 1px;
    left: 17px;
    position: absolute;
    top: -1px;
    width: calc(100% - 34px);
  }

  li {
    &:active {
      scale: 0.975;
    }

    &:first-child {
      margin-top: 2px;
    }

    &:hover {
      background-color: rgb(222, 222, 222);
    }

    figure {
      display: flex;
      padding: 0 23px;

      figcaption {
        font-size: 15px;
        padding: 0 12px;
      }

      picture {
        background-color: rgb(0, 120, 215);
        display: flex;
        height: 40px;
        place-content: center;
        place-items: center;
        width: 40px;
      }
    }

    &.selected {
      background-color: rgb(12, 131, 218);

      figcaption {
        color: #fff;
      }
    }

    padding: 5px 0;
  }
`;var l=t(79281),s=t(13275),d=t(21023),p=t(38246),a=t(67294),h=t(44714),x=t(1545),f=t(49108),g=t(46499);let u=new Set(["BoxedWine","JSDOS","Marked","MonacoEditor","OpenType","PDF","Paint","Photos","Ruffle","TinyMCE","V86","VideoPlayer","Vim","Webamp"]),b=({icon:e,onClick:i,selected:t,title:n})=>(0,o.jsx)("li",{className:t?"selected":"",children:(0,o.jsx)(h.Z,{onClick:i,children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(x.Z,{alt:n,displaySize:24,imgSize:32,src:e}),(0,o.jsx)("figcaption",{children:n})]})})});var j=(0,a.memo)((({id:e})=>{let{closeWithTransition:i,open:t,processes:{[e]:n}={}}=(0,s.z)(),{foregroundId:x,setForegroundId:j}=(0,p.k)(),{url:k}=n||{},m=k?(0,g.RT)(k):"",w=(0,l.Wd)(m),{title:C,icon:v}=w&&d.Z[w]||{},[y,O]=(0,a.useState)(w),[S,Z]=(0,a.useState)(!1),z=(0,a.useRef)(""),E=(0,a.useCallback)((o=>{t(o,{url:k}),i(e)}),[i,e,t,k]),I=(0,a.useCallback)((e=>{z.current===e?E(e):(z.current=e,setTimeout((()=>{z.current=""}),f.jx.DOUBLE_CLICK),O(e))}),[E]);return(0,a.useEffect)((()=>{let t=x===e;S?t||i(e):(t||j(e),setTimeout((()=>Z(!0)),f.jx.WINDOW))}),[S,i,x,e,j]),(0,o.jsxs)(r,{onContextMenu:g.nK,children:[(0,o.jsx)("h2",{children:"How do you want to open this file?"}),(0,o.jsxs)("div",{children:[C&&v&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Keep using this app"}),(0,o.jsx)(c,{children:(0,o.jsx)(b,{icon:v,onClick:()=>I(w),selected:y===w,title:C},C)}),(0,o.jsx)("h4",{children:"Other options"})]}),(0,o.jsx)(c,{$hideBorder:!C||!v,children:Object.entries(d.Z).filter((([e])=>u.has(e)&&e!==w)).map((([e,{icon:i,title:t}])=>(0,o.jsx)(b,{icon:i,onClick:()=>I(e),selected:y===e,title:t},t)))})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(h.Z,{onClick:()=>E(y),children:"OK"})})]})}))}}]);