"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3242],{91386:function(e,A,i){var o=i(71183);let r=(0,i(41686).ZP)(o.m.li).withConfig({componentId:"sc-59a85c77-0"})`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  width: ${({theme:e})=>e.sizes.taskbar.entry.maxWidth};

  &::before {
    background-color: ${({$foreground:e,$progress:A,theme:i})=>e?A&&A>0&&A<100?i.colors.taskbar.foregroundProgress:i.colors.taskbar.foreground:""};
    background-image: ${({$progress:e,theme:A})=>e&&e>0&&e<100?`linear-gradient(to right, ${A.colors.progressBackground} 0% ${e}%, transparent ${e}% 100%)`:""};
    border-bottom: ${({$progress:e,theme:A})=>`\n        ${A.sizes.taskbar.entry.borderSize} solid ${e&&e>0&&e<100?A.colors.progress:A.colors.highlight}\n      `};
    bottom: 0;
    content: "";
    height: ${({$foreground:e})=>e?"100%":0};
    margin: ${({$foreground:e})=>e?"":"0 4px"};
    position: absolute;
    transition-duration: 0.1s;
    transition-property: ${({$foreground:e})=>e?"all":"width"};
    width: ${({$foreground:e})=>e?"100%":"calc(100% - 8px)"};
    z-index: -1;
  }

  &:hover {
    &::before {
      background-color: ${({$foreground:e,theme:A})=>e?A.colors.taskbar.foregroundHover:A.colors.taskbar.hover};
      height: 100%;
      margin: 0;
      width: 100%;
    }
  }

  &:active {
    &::before {
      background-color: ${({$foreground:e,theme:A})=>e?A.colors.taskbar.activeForeground:A.colors.taskbar.active};
    }
  }

  figure {
    align-items: center;
    display: flex;
    margin-bottom: ${({theme:e})=>e.sizes.taskbar.entry.borderSize};
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${({theme:e})=>e.colors.text};
      font-size: ${({theme:e})=>e.sizes.taskbar.entry.fontSize};
      margin: 0 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    picture {
      height: ${({theme:e})=>e.sizes.taskbar.entry.iconSize};
      position: relative;
      top: 1px;
      width: ${({theme:e})=>e.sizes.taskbar.entry.iconSize};
    }
  }

  > div {
    align-items: center;
    display: flex;

    figure {
      width: 100%;
    }
  }
`;A.Z=r},53242:function(e,A,i){i.r(A),i.d(A,{default:function(){return z}});var o=i(85893),r=i(91386),t=i(41686),n=i(49108),a=()=>{let{sizes:{taskbar:e}}=(0,t.Fg)();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:n.Nb.WINDOW},variants:{active:{width:e.entry.maxWidth},initial:{width:0}}}},s=i(67844),l=i(11941),g=i(13275),d=i(38246),c=i(51526),m=i(5152),u=i.n(m),h=i(67294),p=i(44714),b=i(1545),f=i(46499);let k=u()((()=>i.e(7183).then(i.bind(i,77183))),{loadableGenerated:{webpack:()=>[77183]}});var z=(0,h.memo)((({icon:e,id:A,title:i})=>{let t=(0,l.Z)(A),{foregroundId:m,setForegroundId:u}=(0,d.k)(),z=A===m,{linkElement:C,minimize:E,processes:{[A]:x}}=(0,g.z)(),{minimized:B,progress:M}=x||{},$=(0,h.useCallback)((e=>e&&C(A,"taskbarEntry",e)),[A,C]),[w,Q]=(0,h.useState)(!1),R=()=>Q(!1),v=(0,h.useMemo)((()=>(0,f.G6)()?n.Yj:{}),[]);return(0,o.jsxs)(r.Z,{$foreground:z,$progress:M,onClick:R,onMouseEnter:()=>Q(!0),onMouseLeave:R,...a(),...(0,s.Z)(A),children:[(0,o.jsx)(c.M,{initial:!1,presenceAffectsLayout:!1,children:w&&(0,o.jsx)(k,{id:A})}),(0,o.jsx)(p.Z,{ref:$,onClick:()=>{(B||z)&&E(A),u(z?t:A)},...v,...(0,f.PS)(i),children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(b.Z,{alt:i,imgSize:16,src:e}),(0,o.jsx)("figcaption",{children:i})]})})]})}))},67844:function(e,A,i){i.d(A,{Z:function(){return s}});var o=i(91367),r=i(18849),t=i(13275),n=i(67294),a=i(49108),s=e=>{let{contextMenu:A}=(0,r.H)(),{onClose:i,onMaximize:s,onMinimize:l}=(0,o.Z)(e),{processes:{[e]:g}}=(0,t.z)(),{allowResizing:d=!0,hideMaximizeButton:c,hideMinimizeButton:m,maximized:u,minimized:h}=g||{};return(0,n.useMemo)((()=>A?.((()=>{let e=u||h,A=!c||!m;return[A&&{action:h?l:s,disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!m&&{action:l,disabled:h,icon:h?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!c&&{action:s,disabled:e||!d,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},A&&a.Os,{action:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}))),[d,A,c,m,u,h,i,s,l])}},91367:function(e,A,i){var o=i(11941),r=i(13275),t=i(38246),n=i(67294);A.Z=e=>{let A=(0,o.Z)(e),{setForegroundId:i,removeFromStack:a}=(0,t.k)(),{closeWithTransition:s,maximize:l,minimize:g}=(0,r.z)();return{onClose:(0,n.useCallback)((()=>{a(e),s(e),i(A)}),[s,e,A,a,i]),onMaximize:()=>l(e),onMinimize:()=>{g(e),i(A)}}}},11941:function(e,A,i){var o=i(13275),r=i(38246);A.Z=e=>{let{stackOrder:A=[]}=(0,r.k)(),{processes:i}=(0,o.z)();return A.find((A=>A!==e&&!i?.[A]?.minimized))||""}}}]);