"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5879],{45879:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var i=o(85893),n=(o(93220),o(79281)),r=o(29222),s=o(13275),a=o(1864),l=o(67294),c=o(49108),d=o(46499),u=o(70565),f=o(50438),h=o(85028),p=o(34355),g=o(7316),m=o(2891),b=o(97769),x=o(60480),w=o(43820),y=o(65739),k=o(5059),v=o(5152),$=o.n(v),S=o(41686);let z=S.ZP.li.withConfig({componentId:"sc-a8530706-0"})`
  display: ${({$visible:e})=>e?"flex":"none"};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      content: "";
      inset: -1px;
      position: absolute;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: #000;
        font-size: ${({theme:e})=>e.sizes.fileEntry.fontSize};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        word-break: break-word;
      }

      picture {
        height: ${({theme:e})=>e.sizes.fileEntry.iconSize};
        width: ${({theme:e})=>e.sizes.fileEntry.iconSize};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.fileEntry.background};

    &::before {
      border: ${({theme:e})=>`1px solid ${e.colors.fileEntry.border}`};
    }
  }

  &.focus-within {
    background-color: ${({theme:e})=>e.colors.fileEntry.backgroundFocused};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${({theme:e})=>`1px solid ${e.colors.fileEntry.borderFocused}`};
    }

    &:hover {
      background-color: ${({theme:e,$selecting:t})=>t?e.colors.fileEntry.backgroundFocused:e.colors.fileEntry.backgroundFocusedHover};

      &::before {
        border: ${({theme:e})=>`1px solid ${e.colors.fileEntry.borderFocusedHover}`};
      }
    }
  }
`,E=$()((()=>o.e(2061).then(o.bind(o,82061))),{loadableGenerated:{webpack:()=>[82061]}}),j=$()((()=>Promise.resolve().then(o.bind(o,87952))),{loadableGenerated:{webpack:()=>[87952]}});var F=({allowMovingDraggableEntries:e,hideFolders:t,hideLoading:o,hideScrolling:n,hideShortcutIcons:s,id:v,isDesktop:$,loadIconsImmediately:S,preloadShortcuts:F,readOnly:Z,showStatusBar:C,skipFsWatcher:B,skipSorting:I,url:R,hasNewFolderIcon:M,view:P})=>{let[D,N]=(0,l.useState)(R),[L,H]=(0,l.useState)(""),[O,K]=(0,l.useState)(!1),W=(0,l.useRef)(null),{focusedEntries:A,focusableEntry:T,..._}=(0,b.Z)(W),{fileActions:X,files:G,folderActions:q,isLoading:U,updateFiles:J}=(0,x.Z)(R,H,_,{hideFolders:t,hideLoading:o,preloadShortcuts:F,skipFsWatcher:B,skipSorting:I}),{mountFs:Q,rootFs:V,stat:Y}=(0,r.o)(),ee=y.Z,{isSelecting:te,selectionRect:oe,selectionStyling:ie,selectionEvents:ne}=(0,h.Z)(W,A,_),re=(0,p.Z)(A,_,W,te,e),se=(0,g.Z)({callback:q.newPath,directory:R,updatePositions:e}),ae=(0,w.Z)(R,q,$),le=!o&&U||R!==D,ce=(0,m.Z)(G,R,A,H,_,q,J,W,v,P),[de,ue]=(0,l.useState)("prompt"),fe=(0,l.useRef)(!1),he=(0,l.useMemo)((()=>""===L?ce():void 0),[ce,L]);return(0,l.useEffect)((()=>{fe.current||"granted"===de||"FileSystemAccess"!==V?.mntMap[D]?.getName()||(fe.current=!0,(0,k.requestPermission)(D).then((e=>{let t="granted"===e;(!e||t)&&(ue("granted"),t&&J())})).catch((e=>{"Permission already granted"===e.message&&ue("granted")})).finally((()=>{fe.current=!1})))}),[D,de,V?.mntMap,J]),(0,l.useEffect)((()=>{if(!O&&c.my.has((0,d.RT)(R))){let e=async()=>{(await Y(R)).isDirectory()||K((e=>(e||Q(R).then((()=>setTimeout(J,100))).catch((()=>{})),!0)))};e()}}),[Q,O,Y,J,R]),(0,l.useEffect)((()=>{R!==D&&(q.resetFiles(),N(R),ue("denied"))}),[D,q,R]),(0,l.useEffect)((()=>{le||W.current?.focus(c.eS)}),[le]),(0,i.jsxs)(i.Fragment,{children:[le?(0,i.jsx)(j,{}):(0,i.jsxs)(ee,{ref:W,$scrollable:!n,onKeyDown:he,...!Z&&{$selecting:te,...se,...ae,...ne},...c.LL,children:[te&&(0,i.jsx)(f.Z,{style:ie}),Object.keys(G).map((e=>(0,i.jsx)(z,{$selecting:te,$visible:!U,...!Z&&re(R,e,L===e),...""===L&&{onKeyDown:ce(e)},...T(e),children:(0,i.jsx)(u.Z,{fileActions:X,fileManagerId:v,fileManagerRef:W,focusFunctions:_,focusedEntries:A,hideShortcutIcon:s,iconOverride:"https://www.hypertalking.com/wp-content/themes/hypertalking/images/icon-folder.png",isLoadingFileManager:U,loadIconImmediately:S,name:(0,a.basename)(e,c.zm),path:(0,a.join)(R,e),readOnly:Z,renaming:L===e,selectionRect:oe,setRenaming:H,stats:G[e],hasNewFolderIcon:M,view:P})},e)))]}),C&&(0,i.jsx)(E,{count:le?0:Object.keys(G).length,directory:R,fileDrop:se,selected:A})]})},Z=o(87952),C=o(67240);let B=S.ZP.div.withConfig({componentId:"sc-f1cac496-0"})`
  ${y.Z} {
    column-gap: 2px;
    height: ${({theme:e,showNavigation:t,showStatusBar:o})=>`calc(100% - ${t?(e=>e.sizes.fileExplorer.navBarHeight)(e):0} - ${o?(e=>e.sizes.fileExplorer.statusBarHeight)(e):0})`};
    padding-left: 5px;
    padding-right: 5px;
  }

  ${Z.default} {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`};
  }

  ${C.Z} {
    &:hover {
      &::before {
        border-width: 0;
      }
    }

    &::before {
      border-width: 0;
    }
  }
`;var I=({id:e})=>{let{icon:t,title:o,processes:{[e]:u},url:f}=(0,s.z)(),{componentWindow:h,closing:p,icon:g="",url:m=""}=u||{},{fs:b,rootFs:x}=(0,r.o)(),[w,y]=(0,l.useState)(m),k=(0,l.useRef)(null),v=(0,a.basename)(m),$=!(!x?.mntMap[m]||!v),S=(0,l.useCallback)((e=>{e.altKey&&"D"===e.key.toUpperCase()&&((0,d.nK)(e),k?.current?.focus(c.eS))}),[]);return(0,l.useEffect)((()=>{m&&(o(e,v||c.SP),(!g||m!==w||$&&g!==c.iR)&&($?t(e,"FileSystemAccess"===x?.mntMap[m].getName()?c.iR:c.Wc):b&&(t(e,`/System/Icons/${v?"folder":"pc"}.webp`),(0,n.nR)(b,m).then((o=>{o&&t(e,o)}))),y(m)))}),[w,v,b,g,e,$,x?.mntMap,t,f,o,m]),(0,l.useEffect)((()=>{!h||p||m||(f(e,"/"),t(e,"/System/Icons/pc.webp"))}),[p,e,h,t,f,m]),(0,l.useEffect)((()=>(h?.addEventListener("keydown",S),()=>h?.removeEventListener("keydown",S))),[h,S]),m?(0,i.jsxs)(B,{showNavigation:!1,showStatusBar:!1,children:[!1,(0,i.jsx)(F,{id:e,showStatusBar:!1,url:m,view:"icon"})]}):null},R=o(31950),M=o(90331),P=o(28446),D=o(35122),N=o(38246),L=o(71183);let H=(0,S.ZP)(L.m.section).withConfig({componentId:"sc-52a23df0-0"})`
  background-color: #fff;
  box-shadow: none;
  contain: strict;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  header + * {
    height: calc(100% - 16px);
  }

  @font-face {
    font-family: "ChicagoRegular";
    src:
      url("./System/Fonts/bitchicago12-webfont.eot?iefix") format("eot"),
      url("./System/Fonts/bitchicago12-webfont.woff") format("woff"),
      url("./System/Fonts/bitchicago12-webfont.ttf") format("truetype"),
      url("./System/Fonts/bitchicago12-webfont.svg#webfontvbCjnPDX")
        format("svg");
    font-style: normal;
    font-weight: 400;
  }

  font-family: "ChicagoRegular", Sans-Serif;
`;var O=o(29546),K=o(67844),W=o(91367),A=o(99786),T=o(44714);let _=({$foreground:e,theme:t})=>e?`1px solid ${t.colors.titleBar.background}`:`1px solid ${t.colors.titleBar.backgroundInactive}`,X=S.ZP.header.withConfig({componentId:"sc-20d16d86-0"})`
  background-color: #fff;
  border-bottom: ${_};
  display: flex;
  height: 16px;
  position: relative;
  top: 0;
  z-index: 2;

  image-rendering: pixelated;
  background-image: url(//www.hypertalking.com/wp-content/themes/hypertalking/images/titlebar-bg-tile@2x.png);
  background-repeat: repeat-x;
  background-size: 1px 15px;
  line-height: 15px;
  padding: 1px;

  h1 {
    color: ${({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.textInactive};
    display: flex;
    flex-grow: 1;
    justify-content: center;
    font-size: ${({theme:e})=>e.sizes.titleBar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      position: relative;

      picture {
        height: ${({theme:e})=>e.sizes.titleBar.iconSize};
        margin-right: ${({theme:e})=>e.sizes.titleBar.iconMarginRight};
        width: ${({theme:e})=>e.sizes.titleBar.iconSize};
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #fff;
        padding: 0 6px;
        color: #000;
      }
    }
  }

  nav {
    display: flex;
    background-color: #fff;
    border: solid 1px #fff;
    display: block;
    position: absolute;
    top: 1px;
    left: 7px;

    button {
      border-left: ${_};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({theme:e})=>e.sizes.titleBar.buttonWidth};

      background-image: url(//www.hypertalking.com/wp-content/themes/hypertalking/images/close-active.png);
      background-position: -10px -10px;
      background-repeat: no-repeat;
      background-size: 9px 9px;
      border: solid 1px #000;
      display: block;
      height: 9px;
      width: 9px;
    }
  }
`;var G=({id:e})=>{let{processes:{[e]:t}}=(0,s.z)(),{allowResizing:o=!0,closing:n,componentWindow:r,hideMaximizeButton:a,hideMinimizeButton:u,title:f}=t||{},{foregroundId:h}=(0,N.k)(),p=e===h,{onClose:g,onMaximize:m}=(0,W.Z)(e),b=(0,A.Z)(m),x=(0,K.Z)(e),w=(0,l.useRef)(0),y=(0,l.useRef)(),k=(0,l.useRef)(),v=(0,l.useCallback)((e=>{let{x:t,y:o}=r?.getBoundingClientRect()||{};Date.now()-w.current>=c.XX&&y.current&&y.current.x===t&&y.current.y===o&&x.onContextMenuCapture(Object.assign(e,{touches:k.current}))}),[r,x]),$=(0,l.useCallback)((({touches:e})=>{r&&(r.blur(),r.focus(c.eS),w.current=Date.now(),y.current=r.getBoundingClientRect(),k.current=e)}),[r]);return(0,i.jsxs)(X,{$foreground:p,className:O.ZP.dragHandleClassName,onDragOver:d.nK,onDrop:d.nK,...x,children:[(0,i.jsx)("nav",{className:"cancel",children:(0,i.jsx)(T.Z,{$short:a&&u,className:"close",onClick:g,...(0,d.PS)("Close")})}),(0,i.jsx)(T.Z,{as:"h1",...o&&!n?b:{},onTouchEndCapture:v,onTouchStartCapture:$,children:(0,i.jsx)("figure",{children:(0,i.jsx)("figcaption",{children:f})})})]})},q=({children:e,id:t})=>{let{linkElement:o,processes:{[t]:n}}=(0,s.z)(),{Component:r,peekElement:a}=n||{},{foregroundId:c}=(0,N.k)(),d=t===c,{zIndex:u,...f}=(0,P.Z)(t),h=(0,D.Z)(t),p=(0,l.useCallback)((e=>r&&!a&&e&&o(t,"peekElement",e)),[r,t,o,a]);return(0,i.jsx)(M.Z,{id:t,zIndex:u,children:(0,i.jsx)(H,{$isForeground:d,...f,...h,children:(0,i.jsxs)(R.Z,{ref:p,children:[(0,i.jsx)(G,{id:t}),e]})})})},U=({id:e})=>(0,i.jsx)(q,{id:e,children:(0,i.jsx)(I,{id:e})})}}]);