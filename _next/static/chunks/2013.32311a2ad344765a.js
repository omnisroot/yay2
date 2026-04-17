"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2013],{32013:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var o=t(85893),n=t(41686),i=t(45949),a=t(49108);let l=n.ZP.div.withConfig({componentId:"sc-90a781bf-0"})`
  article {
    ${(0,i.Z)(a.BQ,0,0,"light")};
    background-color: #f9f9f9;
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-y: scroll;
    padding: 16px 32px;
    width: 100%;
    word-wrap: break-word;

    * {
      all: revert;
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
        monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgba(27, 31, 35, 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }
  }
`;var b=t(25471),d=t(29222),c=t(13275),s=t(1864),g=t(67294),u=t(46499),A=({containerRef:e,id:r,loading:t,setLoading:o,url:n})=>{let{readFile:i}=(0,d.o)(),{prependFileToTitle:a}=(0,b.Z)(r),{open:l,processes:{[r]:{libs:A=[]}={}}={}}=(0,c.z)(),p=(0,g.useCallback)((async()=>{let r=await i(n),t=e.current?.querySelector("article");t instanceof HTMLElement&&(t.innerHTML=window.DOMPurify.sanitize(window.marked.parse(r.toString(),{headerIds:!1})),t.querySelectorAll("a").forEach((e=>e.addEventListener("click",(r=>{(0,u.nK)(r),(0,u.yk)(e.href)?l("VideoPlayer",{url:e.href}):window.open(e.href,"_blank","noopener, noreferrer")})))),t.scrollTop=0),a((0,s.basename)(n))}),[e,l,a,i,n]);(0,g.useEffect)((()=>{t&&(0,u.mb)(A).then((()=>{window.marked&&o(!1)}))}),[A,t,o]),(0,g.useEffect)((()=>{!t&&n&&p()}),[p,t,n])},p=t(74293),k=({id:e})=>(0,o.jsx)(p.Z,{StyledComponent:l,id:e,useHook:A,children:(0,o.jsx)("article",{})})},74293:function(e,r,t){var o=t(85893),n=t(7316),i=t(13275),a=t(5152),l=t.n(a),b=t(67294);let d=l()((()=>t.e(7952).then(t.bind(t,87952))),{loadableGenerated:{webpack:()=>[87952]}});r.Z=(0,b.memo)((({id:e,useHook:r,StyledComponent:t,children:a})=>{let{processes:{[e]:{url:l=""}={}}}=(0,i.z)(),c=(0,b.useRef)(null),[s,g]=(0,b.useState)(!0),u=(0,b.useMemo)((()=>({contain:"strict",visibility:s?"hidden":"visible"})),[s]);return r({containerRef:c,id:e,loading:s,setLoading:g,url:l}),(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsx)(d,{}),(0,o.jsx)(t,{ref:c,style:u,...(0,n.Z)({id:e}),children:a})]})}))},7316:function(e,r,t){var o=t(73260),n=t(82973),i=t(60480),a=t(29222),l=t(13275),b=t(38246),d=t(1864),c=t(67294),s=t(49108),g=t(46499);r.Z=({callback:e,directory:r=s.Ll,id:t,onDragLeave:u,onDragOver:A,updatePositions:p})=>{let{url:k}=(0,l.z)(),{iconPositions:m,sortOrders:h,setIconPositions:f}=(0,b.k)(),{mkdirRecursive:x,updateFolder:w,writeFile:v}=(0,a.o)(),$=(0,c.useCallback)((async(e,r,o)=>{if(t)if(r){let n=(0,d.join)(s.Ll,e);if(await x(s.Ll),await v(n,r,!0))return o===i.v.UPDATE_URL&&k(t,n),w(s.Ll,e),(0,d.basename)(n)}else o===i.v.UPDATE_URL&&k(t,e);return""}),[t,x,w,k,v]),{openTransferDialog:y}=(0,o.Z)();return{onDragLeave:u,onDragOver:e=>{A?.(e),(0,g.nK)(e)},onDrop:o=>{if(!s.my.has((0,g.RT)(r))){if(p&&o.target instanceof HTMLElement){let{files:e,text:t}=(0,n.p4)(o);if(0===e.length&&""===t)return;let i={x:o.clientX,y:o.clientY},a=[];if(t){try{a=JSON.parse(t)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(r)&&(0,d.basename)(e)===(0,d.relative)(r,e))return;a=a.map((e=>(0,d.basename)(e)))}else a=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!m[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,d.basename)(e,(0,d.extname)(e))} (${t})${(0,d.extname)(e)}`}while(m[o]);return(0,d.basename)(o)})),(0,g.vi)(r,o.target,m,h,i,a,f)}(0,n.WG)(o,e||$,r,y,!!t)}}}}},25471:function(e,r,t){var o=t(13275),n=t(21023),i=t(67294),a=t(49108);r.Z=e=>{let{title:r}=(0,o.z)(),[t]=e.split(a.CC),{title:l}=n.Z[t]||{},b=(0,i.useCallback)(((t,o)=>{let n=t?` - ${t}${o?` ${a.xy}`:""}`:"";r(e,`${l}${n}`)}),[e,l,r]),d=(0,i.useCallback)(((t,o,n)=>{let i=t?`${o?`${a.xy} `:""}${t}${n?" ":" - "}`:"";r(e,`${i}${l}`)}),[e,l,r]);return{appendFileToTitle:b,prependFileToTitle:d}}},45949:function(e,r,t){t.d(r,{Z:function(){return a}});var o=t(41686),n=t(49108);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=(e=n.BQ,r=0,t=0,a="dark")=>o.iv`
  overflow: auto;
  scrollbar-color: ${i[a].thumb} ${i[a].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[a].buttonHover};
    }

    &:active {
      background-color: ${i[a].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===r?"center":`${r}px`};
    background-position-y: ${0===t?"center":`${t}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${i[a].blendMode};
  }
`}}]);