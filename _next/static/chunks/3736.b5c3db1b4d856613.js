"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3736],{3736:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var i=r(85893),n=r(20121),s=r(13275),o=({id:e,onClick:t})=>{let{closeWithTransition:r}=(0,s.z)();return(0,i.jsxs)("nav",{className:"buttons",children:[(0,i.jsx)(n.Z,{onClick:t,children:"OK"}),(0,i.jsx)(n.Z,{onClick:()=>r(e),children:"Cancel"})]})},l=r(29222),c=r(67294),a=e=>{let{stat:t}=(0,l.o)(),[r,i]=(0,c.useState)();return(0,c.useEffect)((()=>{!r&&e&&t(e).then(i)}),[t,r,e]),r},d=r(7195),p=r(79281),x=r(82973),h=r(21023),u=r(38246),f=r(1864),g=r(1545),b=r(49108),m=r(46499);let j=e=>e?.toLocaleString(b.ZW,{dateStyle:"long",timeStyle:"medium"}).replace(" at ",", ")||"";var y=(0,c.memo)((({icon:e,id:t,isShortcut:r,pid:n,url:y})=>{let{closeWithTransition:w}=(0,s.z)(),{setIconPositions:$}=(0,u.k)(),C=(0,c.useMemo)((()=>(0,m.RT)(y||"")),[y]),{type:k}=d.Z[C]||{},S=k||`${C.toUpperCase().replace(".","")} File`,Z=(0,c.useRef)(null),{readdir:v,rename:z,stat:T,updateFolder:F}=(0,l.o)(),E=a(y),[L,R]=(0,c.useState)(0),[M,N]=(0,c.useState)(0),[D,I]=(0,c.useState)(0),P=(0,c.useMemo)((()=>E?.isDirectory()),[E]),W=D||(P?0:E?.size),A=(0,c.useRef)(!1),_=(0,c.useRef)();return(0,c.useEffect)((()=>{if(!A.current&&!r&&P){A.current=!0,_.current=new AbortController;let e=async t=>{if(_.current?.signal.aborted)return;let r=await v(t),i=0,n=0,s=0;for(let o of r){let r=await T((0,f.join)(t,o));r.isDirectory()?(n+=1,await e((0,f.join)(t,o))):(i+=1,s+=r.size)}I((e=>e+s)),R((e=>e+i)),N((e=>e+n))};e(y)}}),[P,r,v,T,y]),(0,c.useEffect)((()=>()=>_.current?.abort()),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"header",children:[(0,i.jsxs)("th",{scope:"row",children:[(0,i.jsx)(g.Z,{imgSize:32,src:e}),r&&(0,i.jsx)(g.Z,{imgSize:48,src:b.MB})]}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:Z,autoComplete:"off",defaultValue:(0,f.basename)(y,r?(0,f.extname)(y):void 0),spellCheck:"false",type:"text"})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:P?"Type:":"Type of file:"}),(0,i.jsx)("td",{children:P?"File folder":r||S?`${r?"Shortcut":S} (${C})`:"File"})]}),!P&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:n?"Opens with:":"Description:"}),(0,i.jsxs)("td",{children:[n&&h.Z[n]?.icon&&(0,i.jsx)(g.Z,{imgSize:16,src:h.Z[n].icon}),n?h.Z[n]?.title||n:(0,f.basename)(y||"")]})]}),!P&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Location:"}),(0,i.jsx)("td",{children:(0,f.dirname)(y)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Size"}),(0,i.jsx)("td",{children:W?`${(0,m.UR)(W)} (${W.toLocaleString()} byte${1===W?"":"s"})`:"0 bytes"})]}),P&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Contains"}),(0,i.jsx)("td",{children:`${L.toLocaleString()} Files, ${M.toLocaleString()} Folders`})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Created:"}),(0,i.jsx)("td",{children:j(E?.ctime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Modified:"}),(0,i.jsx)("td",{children:E&&j(new Date((0,p.GA)(y,E)))})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Accessed:"}),(0,i.jsx)("td",{children:j(E?.atime)})]})]})}),(0,i.jsx)(o,{id:t,onClick:async()=>{if(Z.current&&y&&Z.current.value!==(0,f.basename)(y)){let e=(0,x.gL)(Z.current.value).trim();if(e?.endsWith(".")&&(e=e.slice(0,-1)),e){let t=(0,f.dirname)(y),i=`${(0,f.join)(t,e)}${r?(0,f.extname)(y):""}`;await z(y,i)&&F(t,i,y),(0,f.dirname)(y)===b.Ll&&$((e=>{let{[y]:t,...r}=e;return t&&(r[i]=t),r}))}}w(t)}})]})}));let w=r(41686).ZP.div.withConfig({componentId:"sc-88286a86-0"})`
  padding: 0 8px 0 6px;

  table {
    background-color: #fff;
    border: 1px solid rgb(217, 217, 217);
    height: calc(100% - 36px - 28px);
    padding-top: 14px;
    position: relative;
    top: -1px;
    width: 100%;

    tbody {
      display: flex;
      flex-direction: column;
      font-size: 11.5px;
      gap: 11px;

      tr {
        display: flex;
        padding: 0 12px;
        place-content: center;
        place-items: center;

        &.header {
          margin-bottom: -4px;
          margin-top: -2px;
          padding: 0 10px 0 12px;
        }
      }

      th {
        font-weight: 400;
        text-align: left;
        width: 74px;

        picture:nth-child(2) {
          position: absolute;
          top: -2px;
        }
      }

      td {
        cursor: text;
        display: flex;
        user-select: text;
        width: calc(100% - 70px);

        &.spacer {
          border-bottom: 1px solid rgb(160, 160, 160);
          display: block;
          width: 100%;
        }

        input {
          border: 1px solid rgb(122, 122, 122);
          font-size: 11px;
          height: 23px;
          padding: 3px;
          width: 100%;
        }

        img {
          margin-right: 7px;
        }
      }
    }
  }

  nav {
    &.tabs {
      display: flex;
      height: 28px;
      padding-top: 7px;
      position: relative;
      z-index: 1;

      button {
        background-color: #fff;
        border: 1px solid rgb(217, 217, 217);
        border-bottom-width: 0;
        display: flex;
        font-size: 11px;
        height: 21px;
        padding: 1px 7px;
        place-content: center;
        width: auto;
      }
    }

    &.buttons {
      display: flex;
      gap: 8px;
      height: 35px;
      margin-right: -1px;
      place-content: flex-end;
      place-items: center;

      button {
        height: 21px;
        line-height: 19px;
      }
    }
  }
`;var $=r(18124),C=r(25471),k=({id:e})=>{let{closeWithTransition:t,icon:r,processes:{[e]:o}={}}=(0,s.z)(),{shortcutPath:l,url:d}=o||{},p=l||d||"",x=a(p),[{getIcon:h,icon:u,pid:g}]=(0,$.Z)(p,x?.isDirectory()),{prependFileToTitle:j}=(0,C.Z)(e),k=(0,c.useRef)(),S=(0,c.useRef)(null);return(0,c.useEffect)((()=>{r(e,u),"function"==typeof h&&(k.current=new AbortController,h(k.current.signal)),p&&j((0,f.basename)(p,l?(0,f.extname)(p):void 0),!1,!0)}),[p,h,u,e,j,r,l]),(0,c.useEffect)((()=>()=>{try{k?.current?.abort?.()}catch{}}),[]),(0,c.useEffect)((()=>S.current?.focus()),[]),(0,i.jsxs)(w,{ref:S,onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,m.nK)(e)},onKeyDownCapture:({key:r})=>{"Escape"===r&&t(e)},...b.LL,children:[(0,i.jsx)("nav",{className:"tabs",children:(0,i.jsx)(n.Z,{children:"General"})}),(0,i.jsx)(y,{icon:u,id:e,isShortcut:!!o?.shortcutPath,pid:g,url:p})]})}},20121:function(e,t,r){let i=r(41686).ZP.button.withConfig({componentId:"sc-59a750f5-0"})`
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
`;t.Z=i},18124:function(e,t,r){var i=r(79281),n=r(29222),s=r(5059),o=r(67294),l=r(49108),c=r(46499);t.Z=(e,t=!1,r=!1)=>{let[a,d]=(0,o.useState)((()=>({icon:"",pid:"",url:""}))),p=(0,o.useRef)(!1),x=e=>{d(e),p.current=!1},{fs:h,rootFs:u}=(0,n.o)();return(0,o.useEffect)((()=>{if(!p.current&&h&&u){p.current=!0;let n=(0,c.RT)(e);n&&(!t||l.my.has(n)||(0,s.isMountedFolder)(u.mntMap[e]))?(0,i.Z7)(h,e,n,x):(0,i.g7)(h,u,e,t,r,x)}}),[h,r,t,e,u]),[a,d]}},25471:function(e,t,r){var i=r(13275),n=r(21023),s=r(67294),o=r(49108);t.Z=e=>{let{title:t}=(0,i.z)(),[r]=e.split(o.CC),{title:l}=n.Z[r]||{},c=(0,s.useCallback)(((r,i)=>{let n=r?` - ${r}${i?` ${o.xy}`:""}`:"";t(e,`${l}${n}`)}),[e,l,t]),a=(0,s.useCallback)(((r,i,n)=>{let s=r?`${i?`${o.xy} `:""}${r}${n?" ":" - "}`:"";t(e,`${s}${l}`)}),[e,l,t]);return{appendFileToTitle:c,prependFileToTitle:a}}}}]);