"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3e3],{44628:function(e,t,n){n.d(t,{$3:function(){return l},QC:function(){return r},YH:function(){return i},dI:function(){return a},ov:function(){return o},vF:function(){return s}});let r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},a={COASTAL_LANDSCAPE:()=>n.e(5482).then(n.bind(n,45482)),HEXELLS:()=>n.e(4152).then(n.bind(n,14152)),MATRIX:()=>n.e(8746).then(n.bind(n,28746)),STABLE_DIFFUSION:()=>n.e(1498).then(n.bind(n,41498)),VANTA:()=>n.e(8091).then(n.bind(n,88091))},i={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(5183),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(3191),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(9629),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(2349),n.b)),{name:"Wallpaper (Vanta Waves)"+(e?` [${e}]`:"")})},o=[{id:"APOD",startsWith:!0},{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (Beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],l=":scope > canvas",s=":scope > video"},70565:function(e,t,n){n.d(t,{Z:function(){return G}});var r=n(85893),a=n(41686);let i=a.ZP.figure.withConfig({componentId:"sc-5e52ee6b-0"})`
  pointer-events: ${({$renaming:e})=>e?"all":void 0};

  figcaption {
    pointer-events: none;
  }
`;var o=n(22505),l=n(67294),s=n(1545),c=n(49108);let u=(0,l.memo)((({baseIcon:e,icon:t,isFirstImage:n,name:a,totalSubIcons:i,view:u})=>{let d=(0,l.useMemo)((()=>o.k[[c.MB,c.EV].includes(t)||t.startsWith("blob:")?u:"sub"]),[t,u]),m=(0,l.useMemo)((()=>{if(t===c.EV)return{zIndex:3};if(e===c._l){return{objectFit:"cover",transform:`${n&&i-1>1?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)"} translateZ(0px)`,zIndex:n?2:1}}}),[e,t,n,i]);return(0,r.jsx)(s.Z,{$eager:t===c.MB,alt:a,src:t,style:m,...d})}));var d=(0,l.memo)((({icon:e,name:t,showShortcutIcon:n,subIcons:a,view:i})=>{let o=(0,l.useMemo)((()=>n?a?.filter((e=>e!==c.MB)):a),[n,a]),s=(0,l.useMemo)((()=>o?.filter((t=>t!==e))||[]),[e,o]);return(0,r.jsx)(r.Fragment,{children:s.map(((n,a)=>(0,r.jsx)(u,{baseIcon:e,icon:n,isFirstImage:0===a,name:t,totalSubIcons:s.length,view:i},n)))})})),m=n(7195),f=n(79281),b=n(29222),g=n(13275),p=n(21023),h=n(38246),v=n(41987),w=n(1864),y=e=>{let{setForegroundId:t}=(0,h.k)(),{createPath:r,updateFolder:a}=(0,b.o)(),{minimize:i,open:o,url:s}=(0,g.z)(),u=(0,v.R)();return(0,l.useCallback)((async(l,d)=>{let{preferProcessIcon:m,singleton:f,icon:b}=p.Z[l]||{},g=f?Object.keys(u.current).find((e=>e.startsWith(`${l}${c.CC}`))):"",h=e;if(e.startsWith("ipfs://")){let{getIpfsFileName:t,getIpfsResource:i}=await n.e(7788).then(n.bind(n,7788)),o=await i(e);h=(0,w.join)(c.Ll,await r(await t(e,o),c.Ll,o)),a(c.Ll,(0,w.basename)(h))}g?(s(g,h),u.current[g].minimized&&i(g),t(g)):o(l||"OpenWith",{url:h},f||d===c._l||m?b:d)}),[r,i,o,u,t,s,a,e])},A=n(5059),E=n(18849);let k=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),x=[".aac",".mp3",".ogg",".wav"],S=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),$=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"];var F=n(46499);let M=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),L=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var O=n(48764).Buffer;let{alias:C}=c.PACKAGE_DATA;var T=(e,t,r,a,{archiveFiles:i,deleteLocalPath:o,downloadFiles:s,extractFiles:u,newShortcut:d},{blurEntry:T,focusEntry:R},D,I,j)=>{let{minimize:P,open:Z,url:z}=(0,g.z)(),W=(0,v.R)(),{setCursor:B,setForegroundId:N,setWallpaper:U}=(0,h.k)(),H=(0,w.basename)(r),K=D.includes(H),V=y(e),{copyEntries:G,createPath:Q,lstat:X,mapFs:_,moveEntries:Y,readFile:q,rootFs:J,unMapFs:ee,updateFolder:te}=(0,b.o)(),{contextMenu:ne}=(0,E.H)(),{onContextMenuCapture:re,...ae}=(0,l.useMemo)((()=>ne?.((()=>{let l=F.RT(e),{process:b=[]}=l in m.Z?m.Z[l]:{},g=b.filter((e=>e!==t)),h=g.filter((e=>e!==t)),v=1===D.length,y=()=>v||!K?[r]:[...new Set([r,...D.map((e=>w.join(w.dirname(r),e)))])],E=[],T=F.RT(r),R=T===c.zm,ne=J?.mountList.some((e=>e===r&&A.isMountedFolder(J?.mntMap[e])));if(!j&&!ne){let b=f.Wd(l);if(E.push({action:()=>Y(y()),label:"Cut"},{action:()=>G(y()),label:"Copy"},c.Os),(b||R||!T&&!l)&&E.push({action:()=>y().forEach((async e=>{let t=b&&!(await X(e)).isDirectory()?b:"FileExplorer";d(e,t)})),label:"Create shortcut"}),E.push({action:()=>y().forEach((e=>o(e))),label:"Delete"},{action:()=>a(H),label:"Rename"},c.Os,{action:()=>{let t=Object.keys(W.current).find((t=>t===`Properties${c.CC}${e}`));t?(W.current[t].minimized&&P(t),N(t)):Z("Properties",{shortcutPath:R?r:void 0,url:R?r:e})},label:"Properties"}),r)if(r===w.join(c.Ll,c.Bb)){if("function"==typeof FileSystemHandle){let e=(e,t)=>{_(e,t).then((e=>{te("/",e),Z("FileExplorer",{url:w.join("/",e)})})).catch((()=>{}))},t="showDirectoryPicker"in window,n="function"==typeof navigator.storage?.getDirectory&&!F.vU()&&!F.G6();E.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[c.Os]:[])}}else{E.unshift(c.Os);let a=k.has(T),o=M.has(T),l=S.has(T);if(a||o||l){let e=a||l;E.unshift(c.Os,{label:"Convert to",menu:(e?a?x:$:L).filter((e=>e!==T)).map((t=>{let a=t.replace(".","");return{action:async()=>{let t=await Promise.all(y().map((async e=>[e,await q(e)]))),i=e?(await n.e(9586).then(n.bind(n,89586))).transcode:(await n.e(5506).then(n.bind(n,55506))).convert,o=await i(t,a);await Promise.all(o.map((async([e,t])=>{let n=w.basename(e),a=w.dirname(r);te(a,await Q(n,a,t))})))},label:a.toUpperCase()}}))})}c.Tj.includes(T)&&E.unshift(c.Os,{label:"Convert to",menu:c.Tj.filter((e=>e!==T)).map((e=>{let t=e.replace(".","");return{action:()=>{y().forEach((async e=>{let a=`${w.dirname(e)}/${w.basename(e,w.extname(e))}.${t}`,{convertSheet:i}=await n.e(7280).then(n.bind(n,17280)),o=await i(await q(e),t),l=w.dirname(r);te(l,await Q(w.basename(a),l,O.from(o)))}))},label:t.toUpperCase()}}))}),".m3u"!==T&&c.uH.has(T)&&E.unshift(c.Os,{action:()=>{y().forEach((async e=>{let t=`${w.dirname(e)}/${w.basename(e,w.extname(e))}.m3u`,{createM3uPlaylist:a,tracksFromPlaylist:i}=await n.e(7494).then(n.bind(n,37494)),o=a(await i((await q(e)).toString(),F.RT(e))),l=w.dirname(r);te(l,await Q(w.basename(t),l,O.from(o)))}))},label:"Convert to M3U"});let d="FileExplorer"===t;if(v&&!d&&!F.yk(e)){let t=w.basename(e),n={text:`${t} - ${C}`,title:t,url:`${window.location.origin}?url=${e}`};try{navigator.canShare?.(n)&&E.unshift({action:()=>navigator.share(n),label:"Share",share:!0})}catch{}}E.unshift({action:()=>i(y()),label:"Add to archive..."},...c.Ao.has(T)||c.my.has(T)?[{action:()=>u(r),label:"Extract Here"}]:[],{action:()=>s(y()),label:"Download"}),R||d||m.y.forEach((e=>{e===b||h.includes(e)||h.push(e)}))}E.unshift(c.Os)}ne&&E.push(c.Os,{action:()=>ee(r,"FileSystemAccess"!==J?.mntMap[r].getName()),label:"Disconnect"}),c.ru.has(l)&&E.unshift({action:()=>{Z("Paint",{url:e})},label:"Edit"});let re=c.qy.has(T);if(c._r.has(T)&&E.unshift({action:()=>B(r),label:"Set as mouse pointer"}),(re||c.lM.has(T)&&!c.GM.has(T)&&!c._r.has(T))&&E.unshift({label:"Set as desktop background",...re?{action:()=>U(r)}:{menu:[{action:()=>U(r,"fill"),label:"Fill"},{action:()=>U(r,"fit"),label:"Fit"},{action:()=>U(r,"stretch"),label:"Stretch"},{action:()=>U(r,"tile"),label:"Tile"},{action:()=>U(r,"center"),label:"Center"}]}}),h.length>0&&E.unshift({label:"Open with",menu:[...h.map((e=>{let{icon:t,title:n}=p.Z[e]||{};return{action:()=>{V(e,t)},icon:t,label:n}})),c.Os,{action:()=>Z("OpenWith",{url:e}),label:"Choose another app"}],primary:!t}),t){let{icon:n}=p.Z[t]||{};if(R&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")&&!e.startsWith("nostr:")){let t=""===l||".zip"===l;E.unshift({action:()=>Z("FileExplorer",{url:w.dirname(e)},""),label:`Open ${t?"folder":"file"} location`})}I&&"FileExplorer"===t&&!c.my.has(l)&&E.unshift({action:()=>{V(t,n)},label:"Open in new window"}),E.unshift({action:()=>{"FileExplorer"===t&&I&&!c.my.has(l)?z(I,e):V(t,n)},icon:n,label:"Open",primary:!0})}return E[0]===c.Os?E.slice(1):E}))),[i,H,z,ne,G,Q,o,s,u,I,D,K,X,_,P,Y,d,Z,V,r,t,W,q,j,J?.mntMap,J?.mountList,B,N,a,U,ee,te,e]);return{onContextMenuCapture:e=>{K||(T(),R(H)),re(e)},...ae}},R=n(18124),D=n(13525);var I=n(7316),j=n(71183),P=n(99786),Z=n(5152),z=n.n(Z),W=n(44714),B=n(23678),N=n(48764).Buffer;let U=z()((()=>n.e(6137).then(n.bind(n,56137)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[56137]}}),H=z()((()=>n.e(4621).then(n.bind(n,74621))),{loadableGenerated:{webpack:()=>[74621]}}),K=[],V=[];var G=({fileActions:e,fileManagerId:t,fileManagerRef:n,focusedEntries:u,focusFunctions:p,hideShortcutIcon:h,isHeading:v,isLoadingFileManager:A,loadIconImmediately:E,name:k,path:x,readOnly:S,renaming:$,selectionRect:M,setRenaming:L,stats:O,hasNewFolderIcon:C,view:Z,iconOverride:z})=>{let{blurEntry:G,focusEntry:Q}=p,{url:X}=(0,g.z)(),[{comment:_,getIcon:Y,icon:q,pid:J,subIcons:ee,url:te},ne]=(0,R.Z)(x,O.isDirectory(),C),re=z||q,ae=y(te),{createPath:ie,exists:oe,mkdirRecursive:le,pasteList:se,readFile:ce,stat:ue,unlink:de,updateFolder:me,writeFile:fe}=(0,b.o)(),[be,ge]=(0,l.useState)(!1),{formats:pe,sizes:he}=(0,a.Fg)(),ve="list"===Z,we=(0,l.useRef)(null),ye=(0,w.basename)(x),Ae=(0,F.RT)(te),Ee=(0,l.useMemo)((()=>c.lM.has(Ae)||c.qy.has(Ae)||(0,F.yk)(te)),[te,Ae]),ke=1===u.length&&u[0]===ye,xe=(0,F.RT)(x),Se=xe===c.zm,$e=Se?te:x,Fe=(0,I.Z)({callback:async(e,t)=>{if(!u.includes(ye)){let n=await ie(e,$e,t);if(n)return me($e,n),n}return""},directory:$e,onDragLeave:()=>we.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>we.current?.parentElement?.classList.add("focus-within")}),Me="FileExplorer"===J,Le=(0,l.useMemo)((()=>((e,t,n,r)=>{let a=e.replace(/-/g,c.Zf),{lines:i}=(0,f.oc)(a,t,n,r);if(i.length>2)return`${(e.includes(" ")?i.slice(0,2).join(""):i[0]).slice(0,-3)}...`;return a})(k,he.fileEntry.fontSize,pe.systemFont,he.fileEntry[ve?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[pe.systemFont,ve,k,he.fileEntry]),Oe=(0,l.useRef)(null),Ce=(0,l.useRef)(!1),Te=(0,l.useRef)(!1),Re=(0,l.useRef)(),De=(0,l.useCallback)((async()=>{if(O.isDirectory())return"";if(Se){if(_)return _;if(te){if(te.startsWith("http:")||te.startsWith("https:"))return decodeURIComponent(te);let e=(0,w.dirname)(te);return`Location: ${(0,w.basename)(te,(0,w.extname)(te))}${e&&"."!==e?` (${(0,w.dirname)(te)})`:""}`}return""}let e=m.Z[xe]?.type||`${xe.toUpperCase().replace(".","")} File`,t=O.size<0?await ue(x):O,{size:n}=t,r=(0,f.GA)(x,t),a=(0,F.UR)(n);return`${`Type: ${e}${"-1 bytes"===a?"":`\nSize: ${a}`}`}\nDate modified: ${`${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(c.ZW,pe.dateModified).format(r)}`}`}),[_,xe,pe.dateModified,Se,x,ue,O,te]),[Ie,je]=(0,l.useState)(),Pe=(0,l.useCallback)((()=>{Me&&t&&!window.globalKeyStates?.ctrlKey&&!c.my.has(Ae)?(X(t,te),G()):Me&&ve?ge((e=>!e)):ae(J,Ee?void 0:re)}),[G,X,t,re,Ee,ve,ae,Me,J,te,Ae]);return(0,l.useEffect)((()=>{if(!A&&!Ce.current){let e=async()=>{if(re.startsWith("blob:")||re.startsWith("data:")){if(re.startsWith("data:image/jpeg;base64,"))return;Ce.current=!0;let e=(0,w.join)(c.Xo,`${x}${c.Qy}`);if(".ico"!==Ae&&!te.startsWith(c.OT)&&!te.startsWith(c.P7)&&!await oe(e)&&Oe.current instanceof HTMLImageElement){let t=async()=>{if(Oe.current instanceof HTMLImageElement){let n=()=>(V.shift(),V[0]?.()),r="";if(Oe.current.currentSrc.startsWith("data:image/gif;base64,"))r=Oe.current.currentSrc;else{let e,n,a,{clientHeight:i,clientWidth:o}=Oe.current,{naturalHeight:l,naturalWidth:s}=Oe.current,u=s/l;u!==o/i&&(s>l?e=i/u:n=o*u);let d=await(0,F.mZ)();try{a=await(d?.toCanvas(Oe.current,{height:e,skipAutoScale:!0,style:{objectPosition:e?"top":n?"left":void 0},width:n}))}catch{}a&&(0,F.H5)(a)?r=a.toDataURL("image/png"):setTimeout(t,c.jx.WINDOW)}r&&V.push((async()=>{let t=(0,w.dirname)(e);await le(t);let a=N.from(r.replace(/data:(.*);base64,/,""),"base64");return await fe(e,a,!0),ne((e=>({...e,icon:(0,F.YS)(a)}))),me(t,(0,w.basename)(e)),n()})),1===V.length&&await V[0]()}};Oe.current.complete?t():Oe.current.addEventListener("load",t,c.K7)}}else{if(Ce.current)return;let e=(0,w.join)(c.Xo,`${x}${c.Qy}`);if(await oe(e)){let t=await ce(e);if(t.length>=c.zj)Ce.current||(Ce.current=!0,ne((e=>({...e,icon:(0,F.YS)(t)}))));else try{await de(e)&&me((0,w.dirname)(x))}catch{}}else!Te.current&&we.current&&"function"==typeof Y&&(Te.current=!0,new IntersectionObserver(((e,t)=>e.forEach((({isIntersecting:e})=>{e&&(t.disconnect(),Re.current=new AbortController,Y(Re.current.signal))}))),{root:n.current,rootMargin:"5px"}).observe(we.current))}};e()}}),[oe,n,Y,re,A,le,x,ce,ne,de,me,te,Ae,fe]),(0,l.useEffect)((()=>()=>{try{Re?.current?.abort?.()}catch{}}),[]),(0,l.useLayoutEffect)((()=>{if(we.current&&n.current){let e=u.includes(ye),t=K.includes(ye),r=e||t;if(e&&t&&K.splice(K.indexOf(ye),1),M){let e=((e,t,n,r)=>{let{x:a=0,y:i=0,width:o=0,height:l=0}=n,s=new DOMRect(a,i,Number(o),Number(l));return!(e.left-t.left>=s.right||e.top-t.top>=s.bottom||e.right-t.left<=s.left||e.bottom-t.top+r<=s.top)})(we.current.getBoundingClientRect(),n.current.getBoundingClientRect(),M,n.current.scrollTop);e&&!r?(K.push(ye),Q(ye),we.current.focus(c.eS)):!e&&r&&G(ye)}else r&&1===u.length&&!we.current.contains(document.activeElement)&&(G(),Q(ye),we.current.focus(c.eS))}}),[G,n,ye,Q,u,M]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W.Z,{ref:we,"aria-label":k,onMouseOver:()=>De().then(je),title:Ie,...ve&&{...c.Cz,as:j.m.button},...(0,P.Z)(Pe,ve),...Me&&Fe,...T(te,J,x,L,e,p,u,t,S),children:(0,r.jsxs)(i,{ref:(0,l.useCallback)((e=>ve&&(0,B.G)(e)),[ve]),$renaming:$,children:[(0,r.jsx)(s.Z,{ref:Oe,$eager:E,$moving:"move"===se[x],alt:k,src:re,...o.k[Z]}),(0,r.jsx)(d,{icon:re,name:k,showShortcutIcon:!(!h&&!O.systemShortcut),subIcons:ee,view:Z}),$?(0,r.jsx)(H,{name:k,path:x,renameFile:(t,n)=>{e.renameFile(t,n),L("")}}):(0,r.jsx)("figcaption",{...v&&{"aria-level":1,role:"heading"},children:ke&&k.length!==Le.length?k:Le}),ve&&Me&&(0,r.jsx)(U,{flip:be})]})}),be&&(0,r.jsx)(D.Z,{url:te,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})}},18124:function(e,t,n){var r=n(79281),a=n(29222),i=n(5059),o=n(67294),l=n(49108),s=n(46499);t.Z=(e,t=!1,n=!1)=>{let[c,u]=(0,o.useState)((()=>({icon:"",pid:"",url:""}))),d=(0,o.useRef)(!1),m=e=>{u(e),d.current=!1},{fs:f,rootFs:b}=(0,a.o)();return(0,o.useEffect)((()=>{if(!d.current&&f&&b){d.current=!0;let a=(0,s.RT)(e);a&&(!t||l.my.has(a)||(0,i.isMountedFolder)(b.mntMap[e]))?(0,r.Z7)(f,e,a,m):(0,r.g7)(f,b,e,t,n,m)}}),[f,n,t,e,b]),[c,u]}},50438:function(e,t,n){var r=n(85893),a=n(41686);let i=a.vJ`
  body {
    pointer-events: none;
  }
`,o=a.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${({theme:e})=>e.colors.highlightBackground};
  border: ${({theme:e})=>`1px solid ${e.colors.highlight}`};
  position: absolute;
  z-index: 2;
`;t.Z=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(o,{...e})]})},85028:function(e,t,n){var r=n(18849),a=n(67294);let i=n(49108).i2/60;t.Z=(e,t,{blurEntry:n})=>{let[o,l]=(0,a.useState)((()=>Object.create(null))),[s,c]=(0,a.useState)((()=>Object.create(null))),{x:u,y:d}=o,{height:m,width:f}=s,b=(0,a.useRef)(),{menu:g,setMenu:p}=(0,r.H)(),h=Object.keys(g).length>0,v="number"==typeof u&&"number"==typeof d,w=()=>{c(Object.create(null)),l(Object.create(null))},y=!h&&"number"==typeof f&&"number"==typeof m&&v,A=y?{height:`${Math.abs(Number(m))}px`,transform:`translate(\n            ${Number(u)+(0>Number(f)?Number(f):0)}px,\n            ${Number(d)+(0>Number(m)?Number(m):0)}px)`,width:`${Math.abs(Number(f))}px`}:{};return{isSelecting:y,selectionEvents:{onMouseDown:({clientX:r,clientY:a,target:i})=>{if(i===e.current){let{scrollTop:i}=e.current,{x:o=0,y:s=0}=e.current.getBoundingClientRect();c(Object.create(null)),l({x:r-o,y:a-s+i}),g&&p(Object.create(null)),t.length>0&&n()}},...v?{onMouseLeave:w,onMouseMove:({clientX:t,clientY:n})=>{let{scrollTop:r=0}=e.current||{},{x:a=0,y:o=0}=e.current?.getBoundingClientRect()||{};b.current||(c({height:n-o-(d||0)+r,width:t-a-(u||0)}),b.current=window.setTimeout((()=>{b.current=void 0}),i))},onMouseUp:w}:{}},selectionRect:y?{...o,...s}:void 0,selectionStyling:A}}},13525:function(e,t,n){var r=n(85893),a=n(70565),i=n(50438),o=n(85028),l=n(34355),s=n(7316),c=n(2891),u=n(97769),d=n(60480),m=n(43820),f=n(22505),b=n(29222),g=n(5152),p=n.n(g),h=n(1864),v=n(67294),w=n(49108),y=n(46499);let A=p()((()=>n.e(2061).then(n.bind(n,82061))),{loadableGenerated:{webpack:()=>[82061]}}),E=p()((()=>n.e(7952).then(n.bind(n,87952))),{loadableGenerated:{webpack:()=>[87952]}});t.Z=(0,v.memo)((({allowMovingDraggableEntries:e,hideFolders:t,hideLoading:g,hideScrolling:p,hideShortcutIcons:k,id:x,isDesktop:S,isStartMenu:$,loadIconsImmediately:F,preloadShortcuts:M,readOnly:L,showStatusBar:O,skipFsWatcher:C,skipSorting:T,url:R,view:D})=>{let[I,j]=(0,v.useState)(R),[P,Z]=(0,v.useState)(""),[z,W]=(0,v.useState)(!1),B=(0,v.useRef)(null),{focusedEntries:N,focusableEntry:U,...H}=(0,u.Z)(B),{fileActions:K,files:V,folderActions:G,isLoading:Q,updateFiles:X}=(0,d.Z)(R,Z,H,{hideFolders:t,hideLoading:g,preloadShortcuts:M,skipFsWatcher:C,skipSorting:T}),{mountFs:_,rootFs:Y,stat:q}=(0,b.o)(),{StyledFileEntry:J,StyledFileManager:ee}=f.c[D],{isSelecting:te,selectionRect:ne,selectionStyling:re,selectionEvents:ae}=(0,o.Z)(B,N,H),ie=(0,l.Z)(N,H,B,te,e),oe=(0,s.Z)({callback:G.newPath,directory:R,updatePositions:e}),le=(0,m.Z)(R,G,S),se=!g&&Q||R!==I,ce=(0,c.Z)(V,R,N,Z,H,G,X,B,x,D),[ue,de]=(0,v.useState)("prompt"),me=(0,v.useRef)(!1),fe=(0,v.useMemo)((()=>""===P?ce():void 0),[ce,P]);return(0,v.useEffect)((()=>{me.current||"granted"===ue||"FileSystemAccess"!==Y?.mntMap[I]?.getName()||(me.current=!0,Promise.resolve().then(n.bind(n,5059)).then((({requestPermission:e})=>e(I).then((e=>{let t="granted"===e;(!e||t)&&(de("granted"),t&&X())})).catch((e=>{"Permission already granted"===e.message&&de("granted")})).finally((()=>{me.current=!1})))))}),[I,ue,Y?.mntMap,X]),(0,v.useEffect)((()=>{if(!z&&w.my.has((0,y.RT)(R))){let e=async()=>{(await q(R)).isDirectory()||W((e=>(e||_(R).then((()=>setTimeout(X,100))).catch((()=>{})),!0)))};e()}}),[_,z,q,X,R]),(0,v.useEffect)((()=>{R!==I&&(G.resetFiles(),j(R),de("denied"))}),[I,G,R]),(0,v.useEffect)((()=>{se||S||$||B.current?.focus(w.eS)}),[S,$,se]),(0,r.jsxs)(r.Fragment,{children:[se?(0,r.jsx)(E,{}):(0,r.jsxs)(ee,{ref:B,$scrollable:!p,onKeyDown:fe,...L?{onContextMenu:y.nK}:{$selecting:te,...oe,...le,...ae},...w.LL,children:[te&&(0,r.jsx)(i.Z,{style:re}),Object.keys(V).map((e=>(0,r.jsx)(J,{$selecting:te,$visible:!Q,...!L&&ie(R,e,P===e),...""===P&&{onKeyDown:ce(e)},...U(e),children:(0,r.jsx)(a.Z,{fileActions:K,fileManagerId:x,fileManagerRef:B,focusFunctions:H,focusedEntries:N,hasNewFolderIcon:$,hideShortcutIcon:k,isHeading:S&&V[e].systemShortcut,isLoadingFileManager:Q,loadIconImmediately:F,name:(0,h.basename)(e,w.zm),path:(0,h.join)(R,e),readOnly:L,renaming:P===e,selectionRect:ne,setRenaming:Z,stats:V[e],view:D})},e)))]}),O&&(0,r.jsx)(A,{count:se?0:Object.keys(V).length,directory:R,fileDrop:oe,selected:N})]})}))},34355:function(e,t,n){var r=n(79281),a=n(38246),i=n(1864),o=n(67294),l=n(49108),s=n(46499);t.Z=(e,{focusEntry:t},n,c,u)=>{let d=(0,o.useRef)(n.current?.lastElementChild),[m,f]=(0,o.useState)(-1),{iconPositions:b,sortOrders:g,setIconPositions:p,setSortOrder:h}=(0,a.k)(),v=(0,o.useRef)(),w=(0,o.useRef)(Object.create(null)),y=(0,o.useRef)(!1),A=({clientX:e,clientY:t})=>{w.current={...w.current,x:e,y:t}},E="MAIN"===n.current?.parentElement?.tagName,k=t=>r=>{(0,s.nK)(r),u&&e.length>0?((0,s.vi)(t,n.current,b,g,w.current,e,p),n.current?.removeEventListener("dragover",A)):-1!==m&&h(t,(t=>{let n=t.filter((t=>!e.includes(t)));return n.splice(m,0,...e),n}))},x=t=>({target:n})=>{if(!u&&n instanceof HTMLLIElement){let{children:r=[]}=n.parentElement||{},a=e.includes(t);f(a?-1:[...r].indexOf(n))}},S=(a,o,l)=>c=>{if(l)return void(0,s.nK)(c);t(o);let m=e.length<=1;if(c.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(m?[i.join(a,o)]:e.map((e=>i.join(a,e))))),m&&c.nativeEvent.dataTransfer?.setData("DownloadURL",`${r.bh(o)||"application/octet-stream"}:${o}:${window.location.href}${i.join(a,o)}`),!m&&v.current){let t=Object.keys(b);u&&!y.current&&(d.current&&n.current?.lastElementChild&&n.current.lastElementChild!==d.current||e.every((e=>t.includes(`${a}/${e}`))))&&(y.current=!0);let r=E?c.nativeEvent.clientX:c.nativeEvent.offsetX,i=y.current?c.nativeEvent.clientY:c.nativeEvent.offsetY;c.nativeEvent.dataTransfer?.setDragImage(v.current,r,i),u&&!y.current&&(y.current=!0)}Object.assign(c.dataTransfer,{effectAllowed:"move"}),u&&(w.current=e.length>1?{offsetX:c.nativeEvent.offsetX,offsetY:c.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",A,{passive:!0}))},$=(0,o.useCallback)((async()=>{if(n.current){let e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){let t;v.current?v.current.src="":v.current=new Image;let r=await(0,s.mZ)();try{t=await(r?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:l.RJ,skipAutoScale:!0}))}catch{}t&&(v.current.src=t)}}}),[n]),F=(0,o.useRef)();return(0,o.useEffect)((()=>{n.current?.lastElementChild&&!d.current&&(d.current=n.current.lastElementChild)}),[n,e]),(0,o.useEffect)((()=>{F.current&&window.clearTimeout(F.current),F.current=window.setTimeout((()=>{F.current=void 0,$()}),l.i2/2)}),[e,$]),(0,o.useEffect)((()=>{!c&&e.length>1&&$()}),[e.length,c,$]),(e,t,n)=>({draggable:!0,onDragEnd:k(e),onDragOver:x(t),onDragStart:S(e,t,n),style:E?b[(0,i.join)(e,t)]:void 0})}},7316:function(e,t,n){var r=n(73260),a=n(82973),i=n(60480),o=n(29222),l=n(13275),s=n(38246),c=n(1864),u=n(67294),d=n(49108),m=n(46499);t.Z=({callback:e,directory:t=d.Ll,id:n,onDragLeave:f,onDragOver:b,updatePositions:g})=>{let{url:p}=(0,l.z)(),{iconPositions:h,sortOrders:v,setIconPositions:w}=(0,s.k)(),{mkdirRecursive:y,updateFolder:A,writeFile:E}=(0,o.o)(),k=(0,u.useCallback)((async(e,t,r)=>{if(n)if(t){let a=(0,c.join)(d.Ll,e);if(await y(d.Ll),await E(a,t,!0))return r===i.v.UPDATE_URL&&p(n,a),A(d.Ll,e),(0,c.basename)(a)}else r===i.v.UPDATE_URL&&p(n,e);return""}),[n,y,A,p,E]),{openTransferDialog:x}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{b?.(e),(0,m.nK)(e)},onDrop:r=>{if(!d.my.has((0,m.RT)(t))){if(g&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,a.p4)(r);if(0===e.length&&""===n)return;let i={x:r.clientX,y:r.clientY},o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!h[`${t}/${e}`])return e;let n=0,r="";do{n+=1,r=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${n})${(0,c.extname)(e)}`}while(h[r]);return(0,c.basename)(r)})),(0,m.vi)(t,r.target,h,v,i,o,w)}(0,a.WG)(r,e||k,t,x,!!n)}}}}},2891:function(e,t,n){var r=n(73260),a=n(82973),i=n(29222),o=n(13275),l=n(38246),s=n(1864),c=n(67294),u=n(49108),d=n(46499);t.Z=(e,t,n,m,{blurEntry:f,focusEntry:b},{newPath:g,pasteToFolder:p},h,v,w,y)=>{let{copyEntries:A,deletePath:E,moveEntries:k}=(0,i.o)(),{url:x}=(0,o.z)(),{openTransferDialog:S}=(0,r.Z)(),{foregroundId:$}=(0,l.k)();return(0,c.useEffect)((()=>{let e=e=>{e.clipboardData?.files?.length&&(!$&&t===u.Ll||$===w)&&(e.stopImmediatePropagation?.(),(0,a.W)(e.clipboardData.files,t,g).then(S))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[$,w,g,S,t]),(0,c.useCallback)((r=>a=>{if("list"===y)return;let{ctrlKey:i,key:o,target:l,shiftKey:c}=a;if(!c)if(i){switch(o.toLowerCase()){case"a":if((0,d.nK)(a),l instanceof HTMLOListElement){let[e]=l.querySelectorAll("button");e?.focus(u.eS)}Object.keys(e).forEach((e=>b(e)));break;case"c":(0,d.nK)(a),A(n.map((e=>(0,s.join)(t,e))));break;case"x":(0,d.nK)(a),k(n.map((e=>(0,s.join)(t,e))));break;case"v":a.stopPropagation(),p()}}else switch(o){case"F2":r&&((0,d.nK)(a),m(r));break;case"F5":w&&((0,d.nK)(a),h());break;case"Delete":n.length>0&&((0,d.nK)(a),n.forEach((async e=>{let n=(0,s.join)(t,e);await E(n)&&h(void 0,n)})),f());break;case"Backspace":w&&((0,d.nK)(a),x(w,(0,s.dirname)(t)));break;case"Enter":l instanceof HTMLButtonElement&&((0,d.nK)(a),(0,d.TF)(l,2));break;default:if(o.startsWith("Arrow")){if((0,d.nK)(a),!(l instanceof HTMLElement))return;let e=l;if(!(l instanceof HTMLButtonElement||(e=l.querySelector("button"))))return;let{x:t,y:n,height:r,width:i}=e.getBoundingClientRect(),s="ArrowUp"===o||"ArrowDown"===o?document.elementFromPoint(t,n+("ArrowUp"===o?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===o?-i:2*i),n);if(s instanceof HTMLOListElement){let t=e.closest("li");if(t instanceof HTMLLIElement){let e=[...s.children],n=e.indexOf(t);("ArrowUp"===o||"ArrowDown"===o)&&(s=e["ArrowUp"===o?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}let c=s?.closest("button"),u=c;c instanceof HTMLButtonElement&&v?.current?.contains(c)||(u=e),u?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[f,x,A,E,v,e,b,n,w,k,p,m,h,t,y])}},97769:function(e,t,n){var r=n(67294),a=n(49108),i=n(46499);t.Z=e=>{let[t,n]=(0,r.useState)([]),o=(0,r.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),l=(0,r.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),s=(0,r.useRef)(!1),c=(0,r.useCallback)((t=>{let{relatedTarget:n,target:r}=t,l=e.current===n;l&&s.current?((0,i.nK)(t),r?.focus(a.eS)):(l||e.current?.contains(n))&&n instanceof HTMLElement||o()}),[o,e]),u=(0,r.useCallback)((()=>{s.current=!0,window.requestAnimationFrame((()=>{s.current=!1}))}),[]);return{blurEntry:o,focusEntry:l,focusableEntry:e=>{let n=t.includes(e),r=1===t.length&&t[0]===e;return{className:(0,i.Wy)({"focus-within":n,"only-focused":r}),onBlurCapture:c,onFocusCapture:u,onMouseDown:({ctrlKey:t})=>{t?n?o(e):l(e):n||(o(),l(e))}}},focusedEntries:t}}},43820:function(e,t,n){let r,a;var i=n(44628),o=n(79281),l=n(29222),s=n(18849),c=n(13275),u=n(38246),d=n(41987),m=n(46548),f=n(1864),b=n(67294),g=n(49108),p=n(46499),h=n(48764).Buffer;let v=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),w=(0,o.sK)(".whtml"),y=(0,o.sK)(".txt"),A="video/webm",E="video/mp4",k=2;t.Z=(e,{addToFolder:t,newPath:o,pasteToFolder:x,sortByOrder:[[S,$],F]},M)=>{let{contextMenu:L}=(0,s.H)(),{exists:O,mapFs:C,pasteList:T={},readFile:R,writeFile:D,updateFolder:I}=(0,l.o)(),{iconPositions:j,setForegroundId:P,setWallpaper:Z,setIconPositions:z,sortOrders:W,wallpaperImage:B}=(0,u.k)(),N=(0,b.useCallback)((e=>{if("VANTA"===e){k-=1;let e=0===k;Z("VANTA"+(e?" WIREFRAME":"")),e&&(k=2)}else k=2,Z(e)}),[Z]),{minimize:U,open:H}=(0,c.z)(),K=(0,b.useCallback)(((t,n)=>{z((t=>Object.fromEntries(Object.entries(t).filter((([t])=>(0,f.dirname)(t)!==e))))),F(""===t?([e])=>[e,n]:((e,t)=>([n,r])=>[e,n===e?!r:t])(t,n))}),[z,F,e]),V=(0,b.useMemo)((()=>M&&"function"==typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(A)||window?.MediaRecorder?.isTypeSupported(E))),[M]),G=(0,b.useCallback)((async()=>{if(a&&r){let{active:e}=r;try{a.requestData(),r.getTracks().forEach((e=>e.stop()))}catch{}if(a=void 0,r=void 0,e)return}let e=(0,p.vU)()||(0,p.G6)(),t={video:{frameRate:30},...!e&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}};r=await navigator.mediaDevices.getDisplayMedia(t);let[i]=r.getVideoTracks(),{height:o,width:l}=i.getSettings(),s=MediaRecorder.isTypeSupported(A),c=`Screen Capture ${(0,p.gE)()}.${s?"webm":"mp4"}`;a=new MediaRecorder(r,{bitsPerSecond:o&&l?o*l*30:void 0,mimeType:s?A:E});let u=(0,f.join)(g.Ll,c),d=Date.now(),m=!1;a.start(),a.addEventListener("dataavailable",(async t=>{let{data:r}=t;if(r?.size){let t=h.from(await r.arrayBuffer());if(await D(u,m?h.concat([await R(u),t]):t,m),!s||e||a&&"inactive"!==a.state)I(g.Ll,c);else{let{default:e}=await n.e(6027).then(n.t.bind(n,86027,23));e((0,p.V4)(await R(u)),Date.now()-d,(async e=>{await D(u,h.from(await e.arrayBuffer()),!0),I(g.Ll,c)}))}m=!0}}))}),[R,I,D]),Q=(0,m.Z)(),X=(0,d.R)(),_=(0,b.useCallback)(((e,t)=>{if(t&&M){let{clientX:n,clientY:r}=t.nativeEvent instanceof TouchEvent?t.nativeEvent.touches[0]:t.nativeEvent;(0,p.vi)(g.Ll,t.target,j,W,{x:n,y:r},e,z)}}),[j,M,z,W]),Y=(0,b.useCallback)((async(e,t,n)=>_([await o(e,t,"rename")],n)),[o,_]);return(0,b.useMemo)((()=>L?.((n=>{let a=[{action:()=>t().then((e=>_(e,n))),label:"Add file(s)"},...p.df()?[{action:()=>C(e).then((t=>{_([t],n),I(e,t),H("FileExplorer",{url:f.join(e,t)})})).catch((()=>{})),label:"Map directory"}]:[]],o=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement,l=g.my.has(p.RT(e));return[{label:"Sort by",menu:[{action:()=>K("name",!0),label:"Name",toggle:"name"===S},{action:()=>K("size",!1),label:"Size",toggle:"size"===S},{action:()=>K("type",!0),label:"Item type",toggle:"type"===S},{action:()=>K("date",!1),label:"Date modified",toggle:"date"===S},g.Os,{action:()=>K("",!0),label:"Ascending",toggle:$},{action:()=>K("",!1),label:"Descending",toggle:!$}]},{action:()=>I(e),label:"Refresh"},...M?[g.Os,{label:"Background",menu:i.ov.filter((({requiresWebGPU:e})=>!e||Q)).reduce(((e,t)=>[...e,{action:()=>{o&&v?.(),t.id&&N(t.id)},label:t.name||t.id,toggle:t.startsWith?B.startsWith(t.id):B===t.id}]),o?[{action:v,checked:!0,label:"Music Visualization"},g.Os]:[])},...V?[{action:G,label:r?.active?"Stop screen capture":"Capture screen"}]:[]]:[],...l?[]:[g.Os,...a,{action:()=>H("Terminal",{url:e}),label:"Open Terminal here"},g.Os,{action:()=>x(),disabled:0===Object.keys(T).length,label:"Paste"},g.Os,{label:"New",menu:[{action:()=>Y("New folder",void 0,n),icon:g.XN,label:"Folder"},g.Os,{action:()=>Y("New Rich Text Document.whtml",h.from(""),n),icon:w,label:"Rich Text Document"},{action:()=>Y("New Text Document.txt",h.from(""),n),icon:y,label:"Text Document"}]},...M?[]:[g.Os,{action:()=>{let t=Object.keys(X.current).find((t=>t===`Properties${g.CC}${e}`));t?(X.current[t].minimized&&U(t),P(t)):H("Properties",{url:e})},label:"Properties"}]],...M?[g.Os,{action:async()=>{if(!await O(g.AV)){let e=await fetch(document.location.href),t=h.from(await e.arrayBuffer());await D(g.AV,t),I(f.dirname(g.AV),f.basename(g.AV))}H("MonacoEditor",{url:g.AV})},label:"View page source"},{action:()=>H("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[t,V,G,L,O,Q,$,M,C,U,Y,H,T,x,X,P,N,S,_,I,K,e,B,D])}},67240:function(e,t,n){let r=n(41686).ZP.li.withConfig({componentId:"sc-2dc7a614-0"})`
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
        color: ${({theme:e})=>e.colors.fileEntry.text};
        font-size: ${({theme:e})=>e.sizes.fileEntry.fontSize};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        text-shadow: ${({theme:e})=>e.colors.fileEntry.textShadow};
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
`;t.Z=r},65739:function(e,t,n){var r=n(41686),a=n(45949),i=n(49108);let o=r.ZP.ol.withConfig({componentId:"sc-f8d2b97a-0"})`
  ${({$scrollable:e})=>e?(0,a.Z)():void 0};

  column-gap: ${({theme:e})=>e.sizes.fileManager.columnGap};
  contain: strict;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${({theme:e})=>`repeat(auto-fill, ${e.sizes.fileManager.gridEntryWidth})`};
  grid-template-rows: ${({theme:e})=>`repeat(auto-fill, ${e.sizes.fileManager.gridEntryHeight})`};
  height: 100%;
  overflow: ${({$scrollable:e})=>e?void 0:"hidden"};
  padding: ${({theme:e})=>e.sizes.fileManager.padding};
  place-content: flex-start;
  pointer-events: ${({$selecting:e})=>e?"auto":void 0};
  row-gap: ${({theme:e})=>e.sizes.fileManager.rowGap};

  main > & {
    grid-auto-flow: column;
    height: calc(100% - ${i.bK}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`;t.Z=o},40995:function(e,t,n){let r=n(41686).ZP.ol.withConfig({componentId:"sc-b9b2a10d-0"})`
  margin-left: 7px;
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`;t.Z=r},22505:function(e,t,n){n.d(t,{k:function(){return s},c:function(){return l}});var r=n(67240),a=n(65739);let i=n(41686).ZP.li.withConfig({componentId:"sc-7f64d0dd-0"})`
  display: flex;
  flex-direction: column;

  figure {
    border: 1px solid transparent;
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: rgb(210, 210, 210);
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      width: 8px;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }
    }

    &:hover {
      background-color: hsla(0, 0%, 35%, 70%);
      border: 1px solid hsla(0, 0%, 45%, 70%);
    }
  }
`;var o=n(40995);let l={icon:{StyledFileEntry:r.Z,StyledFileManager:a.Z},list:{StyledFileEntry:i,StyledFileManager:o.Z}},s={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}}},99786:function(e,t,n){var r=n(67294),a=n(49108);t.Z=(e,t=!1)=>{let n=(0,r.useRef)(),i=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{let o=()=>{r.stopPropagation(),e(r)},l=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},s=()=>{i.current>=5&&l(),void 0===n.current?(r.target.removeEventListener("pointermove",s),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(l,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",s,{passive:!0})):(l(),o())}),[e,t]);return{onClick:o}}},46548:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);let a=()=>{let[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1073741824>(e.limits.maxBufferSize??0)||1073741824>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},45949:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(41686),a=n(49108);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=(e=a.BQ,t=0,n=0,o="dark")=>r.iv`
  overflow: auto;
  scrollbar-color: ${i[o].thumb} ${i[o].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[o].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[o].buttonHover};
    }

    &:active {
      background-color: ${i[o].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
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
    background-blend-mode: ${i[o].blendMode};
  }
`},23678:function(e,t,n){n.d(t,{G:function(){return r}});let r=(e,t=!1,n=1)=>{e&&(e.addEventListener("mouseleave",(()=>e.removeAttribute("style")),{passive:!0}),e.addEventListener("mousemove",(({clientX:r,clientY:a,target:i})=>{if(e.contains(i)){let{left:i,top:o}=e.getBoundingClientRect(),l=r-i,s=a-o;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${l}px ${s}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${l}px ${s}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / ${n}px / 0px stretch`})}}),{passive:!0}))}}}]);