"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4500],{34500:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var i=r(85893);let o=r(41686).ZP.div.withConfig({componentId:"sc-b37157c0-0"})`
  display: flex;
  height: 100%;
  width: 100%;

  .video-js {
    height: 100%;
    width: 100%;

    .vjs-big-play-button {
      display: none;
    }

    .vjs-control-bar {
      background-color: rgb(240, 240, 240);
      padding: 0 1;

      &:not(.no-interaction) {
        display: flex !important;
        opacity: 100% !important;
      }

      .no-interaction {
        display: none !important;
        opacity: 0% !important;
        pointer-events: none !important;
      }
    }

    &.vjs-youtube,
    &.vjs-fullscreen.vjs-user-inactive {
      .vjs-control-bar {
        opacity: 0% !important;
      }
    }

    .vjs-button {
      color: rgb(116, 116, 116);
      height: 28px;
      position: relative;
      width: 28px;
      z-index: 0;

      &::after {
        background-color: rgb(225, 225, 225);
        border: 1px solid rgb(173, 173, 173);
        content: "";
        height: calc(100% - 4px);
        left: 0;
        margin: 2px 0 0 2px;
        position: absolute;
        top: 1px;
        width: calc(100% - 4px);
        z-index: -1;
      }

      &:hover {
        &::after {
          background-color: rgb(229, 241, 251);
          border-color: rgb(0, 120, 215);
        }
      }

      &:active {
        &::after {
          background-color: rgb(204, 228, 247);
          border-color: rgb(0, 84, 153);
        }
      }
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }

    .vjs-current-time {
      padding-left: 8px;
      padding-right: 2px;
    }

    .vjs-duration {
      padding-left: 2px;
      padding-right: 8px;
    }

    .vjs-current-time-display,
    .vjs-duration-display {
      color: #000;
      font-family: sans-serif;
      font-size: 11px;
    }

    .vjs-picture-in-picture-control {
      margin: 0 -2px;
    }

    .vjs-load-progress {
      border-radius: 5px;

      div {
        background: linear-gradient(
          180deg,
          rgb(189, 189, 189) 0%,
          rgb(219, 219, 219) 100%
        );
        border-radius: 5px;
      }
    }

    .vjs-play-progress {
      background: linear-gradient(
        180deg,
        rgb(44, 137, 224) 0%,
        rgb(40, 125, 204) 100%
      );
      border-radius: 5px;

      &::before {
        color: rgb(237, 237, 237);
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
        top: 1px;
      }
    }

    .vjs-progress-holder {
      border-radius: 5px;
      font-size: 1.7em !important;
      height: 9px;
    }

    .vjs-volume-control {
      background-color: rgb(240, 240, 240);
      border-radius: 5px 5px 0 0;
      left: -28px !important;
      position: relative;

      .vjs-volume-bar {
        height: 5.5em;
        margin: 1.5em auto;
      }

      .vjs-volume-level {
        background: linear-gradient(
          180deg,
          rgb(247, 76, 100) 0%,
          rgb(125, 210, 125) 50%
        );
        border-radius: 5px;
        color: rgb(237, 237, 237);
        font-size: 1.5em;
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
      }
    }

    .vjs-volume-panel {
      width: 28px !important;
    }

    .vjs-fullscreen-control,
    .vjs-play-control {
      .vjs-icon-placeholder {
        &::before {
          font-size: 2.4em;
          top: -5px;
        }
      }
    }

    .vjs-poster {
      background-size: contain;
    }

    video {
      background-image: url("/System/Icons/48x48/vlc.webp");
      background-position: center calc(50% - 15px);
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }
  }
`,n="video/youtube",a={1:4,2:2,3:1,4:.5},l={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}};var s=r(79281),c=r(25471),d=r(12824),p=r(29222),u=r(13275),h=r(1864),g=r(67294),b=r(49108),m=r(46499),x=({containerRef:e,id:t,loading:r,setLoading:i,url:o})=>{let{readFile:x}=(0,p.o)(),{linkElement:f,processes:{[t]:{closing:v=!1,libs:y=[]}={}}}=(0,u.z)(),{updateWindowSize:w}=(0,d.Z)(t),[k,j]=(0,g.useState)(),{prependFileToTitle:T}=(0,c.Z)(t),z=(0,g.useCallback)((()=>{let{src:e=[]}=k?.getMedia()||{};if(Array.isArray(e)&&e.length>0){let[{src:t,url:r}]=e;t.startsWith("blob:")&&(r!==o||v)&&(0,m.EK)(t)}}),[v,k,o]),L=(0,g.useCallback)((async()=>{z();let e=(0,m.yk)(o),t=e?n:(0,s.bh)(o)||b.iS;return{src:e?o:(0,m.YS)(await x(o),(0,m.G6)()?t:void 0),type:t,url:o}}),[z,x,o]),C=(0,g.useCallback)((()=>{let[r]=e.current?.childNodes??[],n=window.videojs(r,l,(()=>{n.on("firstplay",(()=>{let[e,t]=[n.videoHeight(),n.videoWidth()],[r,i]=[(0,m.sI)(),(0,m.E9)()];if(e&&t){let o=30+e;o>r||t>i?w(i*(o/t),i):w(o,t)}}));let l=()=>{try{n.isFullscreen()?n.exitFullscreen():n.requestFullscreen()}catch{}};r.addEventListener("dblclick",l),r.addEventListener("mousewheel",(e=>{n.volume(n.volume()+(e.deltaY>0?-.1:.1))}),{passive:!0}),e.current?.closest("section")?.addEventListener("keydown",(({key:e,altKey:t,ctrlKey:r})=>{if(t)a[e]?w(n.videoHeight()/a[e],n.videoWidth()/a[e]):"Enter"===e&&l();else if(!r)switch(e){case" ":n.paused()?n.play():n.pause();break;case"ArrowUp":n.volume(n.volume()+.1);break;case"ArrowDown":n.volume(n.volume()-.1);break;case"ArrowLeft":n.currentTime(n.currentTime()-10);break;case"ArrowRight":n.currentTime(n.currentTime()+10)}})),j(n),i(!1),(0,m.yk)(o)||f(t,"peekElement",r)}))}),[e,t,f,i,w,o]),$=(0,g.useCallback)((t=>{let r=e.current?.querySelector(".vjs-control-bar");r instanceof HTMLElement&&(t===n?r.classList.add("no-interaction"):r.classList.remove("no-interaction"))}),[e]),E=(0,g.useCallback)((async()=>{if(k&&o)try{let e=await L();k.src(e),$(e.type),T((0,m.yk)(o)?"YouTube":(0,h.basename)(o))}catch{}}),[L,$,k,T,o]);(0,g.useEffect)((()=>(r&&!k&&(0,m.mb)(y).then((()=>{void 0!==window.videojs&&C()})),()=>{v&&(z(),k?.dispose())})),[z,v,y,C,r,k]),(0,g.useEffect)((()=>{!r&&!v&&k&&o&&E()}),[v,E,r,k,o])},f=r(74293),v=({id:e})=>(0,i.jsx)(f.Z,{StyledComponent:o,id:e,useHook:x,children:(0,i.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})},74293:function(e,t,r){var i=r(85893),o=r(7316),n=r(13275),a=r(5152),l=r.n(a),s=r(67294);let c=l()((()=>r.e(7952).then(r.bind(r,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,s.memo)((({id:e,useHook:t,StyledComponent:r,children:a})=>{let{processes:{[e]:{url:l=""}={}}}=(0,n.z)(),d=(0,s.useRef)(null),[p,u]=(0,s.useState)(!0),h=(0,s.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return t({containerRef:d,id:e,loading:p,setLoading:u,url:l}),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(c,{}),(0,i.jsx)(r,{ref:d,style:h,...(0,o.Z)({id:e}),children:a})]})}))},7316:function(e,t,r){var i=r(73260),o=r(82973),n=r(60480),a=r(29222),l=r(13275),s=r(38246),c=r(1864),d=r(67294),p=r(49108),u=r(46499);t.Z=({callback:e,directory:t=p.Ll,id:r,onDragLeave:h,onDragOver:g,updatePositions:b})=>{let{url:m}=(0,l.z)(),{iconPositions:x,sortOrders:f,setIconPositions:v}=(0,s.k)(),{mkdirRecursive:y,updateFolder:w,writeFile:k}=(0,a.o)(),j=(0,d.useCallback)((async(e,t,i)=>{if(r)if(t){let o=(0,c.join)(p.Ll,e);if(await y(p.Ll),await k(o,t,!0))return i===n.v.UPDATE_URL&&m(r,o),w(p.Ll,e),(0,c.basename)(o)}else i===n.v.UPDATE_URL&&m(r,e);return""}),[r,y,w,m,k]),{openTransferDialog:T}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{g?.(e),(0,u.nK)(e)},onDrop:i=>{if(!p.my.has((0,u.RT)(t))){if(b&&i.target instanceof HTMLElement){let{files:e,text:r}=(0,o.p4)(i);if(0===e.length&&""===r)return;let n={x:i.clientX,y:i.clientY},a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!x[`${t}/${e}`])return e;let r=0,i="";do{r+=1,i=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${r})${(0,c.extname)(e)}`}while(x[i]);return(0,c.basename)(i)})),(0,u.vi)(t,i.target,x,f,n,a,v)}(0,o.WG)(i,e||j,t,T,!!r)}}}}},29546:function(e,t,r){r.d(t,{BS:function(){return a},FC:function(){return o},F_:function(){return i},wV:function(){return n}});let i={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,a=166,l={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=l},10803:function(e,t,r){r.d(t,{Rf:function(){return l},b$:function(){return d},hu:function(){return a},ix:function(){return c},mZ:function(){return s}});var i=r(29546),o=r(49108),n=r(46499);let a=(e,t,r=[],i=0)=>{let[a]=e.split(o.CC),l=`${a}${o.CC}`,s=r.find((e=>e.startsWith(l)))||"",{componentWindow:c}=t?.[s]||{},{x:d=0,y:p=0,width:u=0,height:h=0}=c?.getBoundingClientRect()||{};return d+i+u>(0,n.E9)()||p+i+h>(0,n.sI)()||!d&&!p?void 0:{x:d+i,y:p+i}},l=({height:e,width:t})=>{let[r,i]=[(0,n.sI)(),(0,n.E9)()];return{x:Math.floor(i/2-(0,n.Vy)(t)/2),y:Math.floor((r-o.bK)/2-(0,n.Vy)(e)/2)}},s={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=(e,t,r=!1)=>{let{position:i,size:o}=e||{},{x:a=0,y:l=0}=i||{},{height:c=0,width:d=0}=o||{};return r?a+s.RIGHT>t.x||a+(0,n.Vy)(d)-s.LEFT<0||l+s.BOTTOM>t.y||l+s.TOP<0:a<0||l<0||a+(0,n.Vy)(d)>t.x||l+(0,n.Vy)(c)>t.y},d=(e,t)=>{let r=Number(e.height),a=Number(e.width),[l,s]=[(0,n.sI)(),(0,n.E9)()],c=l-o.bK,d=Math.max(i.wV,Math.min(r,c)),p=Math.max(i.BS,Math.min(a,s));if(!t)return{height:d,width:p};let u=r===d,h=a===p;return u||h?u?h?{height:d,width:p}:{height:Math.round(d/(a/p)),width:p}:{height:d,width:Math.round(p/(r/d))}:r>a?{height:d,width:Math.round(p/(c/d))}:{height:Math.round(d/(s/p)),width:p}}},25471:function(e,t,r){var i=r(13275),o=r(21023),n=r(67294),a=r(49108);t.Z=e=>{let{title:t}=(0,i.z)(),[r]=e.split(a.CC),{title:l}=o.Z[r]||{},s=(0,n.useCallback)(((r,i)=>{let o=r?` - ${r}${i?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),c=(0,n.useCallback)(((r,i,o)=>{let n=r?`${i?`${a.xy} `:""}${r}${o?" ":" - "}`:"";t(e,`${n}${l}`)}),[e,l,t]);return{appendFileToTitle:s,prependFileToTitle:c}}},12824:function(e,t,r){var i=r(10803),o=r(13275),n=r(38246),a=r(67294),l=r(41686);t.Z=e=>{let{setWindowStates:t}=(0,n.k)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:s=!1}={}}={}}=(0,o.z)(),{sizes:{titleBar:c}}=(0,l.Fg)(),d=(0,a.useCallback)(((o,n)=>t((t=>({...t,[e]:{...t?.[e],maximized:s,size:(0,i.b$)({height:o+c.height,width:n},r)}})))),[e,r,s,t,c.height]);return{updateWindowSize:d}}}}]);