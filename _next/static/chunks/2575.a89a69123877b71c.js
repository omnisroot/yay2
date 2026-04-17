"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2575,7952],{2575:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(85893);let r=[["Libera.Chat","web.libera.chat/webirc/websocket/"],["ErgoTestnet","testnet.ergo.chat/webirc"],["InspIRCd Testnet","testnet.inspircd.org",8097]],o=e=>{let t=`${e}${[9,9,9,9].map((e=>Math.floor(Math.random()*e))).join("")}`;return{networks:r.map((([e,n,i=443],r)=>({buffers:[{enabled:!0,name:"*",settings:{}}],connection:{direct:!0,encoding:"utf8",nick:t,port:i,server:n,tls:!0},id:r+1,name:e,settings:{show_raw_caps:!1}})))}};var c=n(87952),s=n(13275),a=n(21023),l=n(67294),f=n(49108),d=({id:e})=>{let{linkElement:t,processes:{[e]:{libs:[n=""]=[]}={}}={},title:r}=(0,s.z)(),[d,u]=(0,l.useState)(!1),[w,h]=(0,l.useState)([]),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{window.localStorage.getItem("kiwiirc")||window.localStorage.setItem("kiwiirc",JSON.stringify(o("Guest")))}),[]),(0,l.useEffect)((()=>{if(d&&p.current?.contentWindow){let n=p.current.contentWindow;n?.kiwi.on("irc.join",(({channel:e},{name:t})=>h((n=>[...new Set([...n,`${e}/${t}`])])))),n?.kiwi.on("irc.part",(({channel:e},{name:t})=>h((n=>n.filter((n=>n!==`${e}/${t}`)))))),t(e,"peekElement",p.current)}}),[e,t,d]),(0,l.useEffect)((()=>{r(e,`${a.Z.IRC.title}${0===w.length?"":` - ${w.join(", ")}`}`)}),[w,e,r]),(0,i.jsxs)("div",{children:[!d&&(0,i.jsx)(c.default,{}),(0,i.jsx)("iframe",{ref:p,height:"100%",onLoad:()=>u(!0),src:n,title:e,width:"100%",...f.v0})]})}},87952:function(e,t,n){n.r(t);let i=n(41686).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
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
`;t.default=i}}]);