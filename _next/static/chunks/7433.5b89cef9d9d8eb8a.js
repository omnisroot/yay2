"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7433,7788,5345],{13473:function(e,t,r){r.d(t,{P:function(){return n},w:function(){return i}});let i={0:{name:"Black",rgb:[12,12,12]},1:{name:"Blue",rgb:[0,55,218]},2:{name:"Green",rgb:[19,161,14]},3:{name:"Aqua",rgb:[58,150,221]},4:{name:"Red",rgb:[197,15,31]},5:{name:"Purple",rgb:[136,23,152]},6:{name:"Yellow",rgb:[193,156,0]},7:{name:"White",rgb:[204,204,204]},8:{name:"Gray",rgb:[118,118,118]},9:{name:"Light Blue",rgb:[59,120,255]},A:{name:"Light Green",rgb:[22,198,12]},B:{name:"Light Aqua",rgb:[97,214,214]},C:{name:"Light Red",rgb:[231,72,86]},D:{name:"Light Purple",rgb:[180,0,158]},E:{name:"Light Yellow",rgb:[249,241,165]},F:{name:"Bright White",rgb:[242,242,242]}},n=(e,t,r,i=!1)=>`[${i?"48":"38"};2;${e};${t};${r}m`},7433:function(e,t,r){r.d(t,{$4:function(){return m},CN:function(){return c},JF:function(){return h},R_:function(){return s},hR:function(){return w},j3:function(){return p},j5:function(){return f},lO:function(){return g},vR:function(){return y},xy:function(){return d}});var i=r(13473),n=r(20153),o=r(64443),a=r(21023),l=r(49108);let s=(e,t,r)=>{Object.entries(t).forEach((([t,r])=>{e?.println(`${t.padEnd(14)} ${r}`)})),r&&(e?.println("\r\nAliases:\r\n"),Object.entries(r).forEach((([r,i])=>{i.forEach((i=>{e?.println(`${i.padEnd(14)} ${t[r]}`)}))})))},c={cd:"Changes the current directory.",clear:"Clears the screen.",color:"Specifies color attribute of console output.",copy:"Copies a file to another location.",date:"Displays the date.",del:"Deletes a file.",dir:"Displays list of entries in current directory.",echo:"Displays messages that are passed to it.",exit:"Quits the command interpreter.",ffmpeg:"Convert audio or video file to another format.",file:"Detects the MIME type of the file.",find:"Searches for a text string in a file or files.",git:"Read from git repositories.",help:"Provides Help information for commands.",history:"Displays command history list.",imagemagick:"Convert an image file to another format.",ipconfig:"Displays current IP.",license:"Displays license.",md:"Creates a directory.",mount:"Mounts a local file system directory.",move:"Moves file or directory.",neofetch:"Displays system information.",pwd:"Prints the working directory.",python:"Run code through Python interpreter.",rd:"Removes a directory.",ren:"Renames a file or directory.",rm:"Removes a file or directory.",sheep:"Spawn a new sheep",shutdown:"Allows proper local shutdown of machine.",taskkill:"Kill or stop a running process or application.",tasklist:"Displays all currently running processes.",time:"Displays the system time.",title:"Sets the window title for the command interpreter.",touch:"Create empty file.",type:"Displays the contents of a file.",uptime:"Display the current uptime of the local system.",ver:"Displays the system version.",wapm:"Run universal Wasm binaries.",weather:"Weather forecast service",whoami:"Displays user information.",xlsx:"Convert a spreadsheet file to another format."},p={cd:["chdir"],clear:["cls"],copy:["cp"],del:["erase"],dir:["ls"],exit:["quit"],find:["search"],git:["isogit"],ipconfig:["ifconfig","whatsmyip"],md:["mkdir"],move:["mv"],neofetch:["systeminfo"],python:["py"],rd:["rmdir"],ren:["rename"],sheep:["esheep"],shutdown:["logout","restart"],taskkill:["kill"],tasklist:["ps"],type:["cat"],ver:["version"],wapm:["wax"],weather:["wttr"]},u=new Set(["cat","cd","chdir","copy","cp","del","dir","erase","ffmpeg","file","imagemagick","ls","md","mkdir","move","mv","py","python","rd","ren","rename","rm","rmdir","touch","type","vim","xlsx"]),d=e=>`'${e}' is not recognized as an internal or external command, operable program or batch file.`,h=(e,t)=>{let{_autocompleteHandlers:r}=t;r.forEach((({fn:e})=>t.removeAutocompleteHandler(e))),t.addAutocompleteHandler(((t,[r])=>{if(0===t)return[...Object.keys(c),...e];if(1===t){let t=r.toLowerCase();if("git"===t)return Object.keys(n.C);if(u.has(t))return e;let i=Object.keys(a.Z).map((e=>e.toLowerCase()));if(i.includes(t)||Object.keys(o.resourceAliasMap).includes(t))return e}return[]}))},m=e=>{let t=!1,r="",i=e=>{r&&e.push(r),r=""},n=[...e].reduce(((e,n)=>(" "!==n||t?'"'===n?(t=!t)||i(e):r+=n:i(e),e)),[]);return r?[...n,r]:n},f=(e,t,r,i,n="=")=>{if(!i){let t=e.map((([e,t])=>e.padEnd(t," "))).join(" "),i=e.map((([,e])=>n.repeat(e))).join(" ");r?.println(t),r?.println(i)}let o=t.map((t=>t.map(((r,i)=>{let[,n,o,a]=e[i],l=i===t.length-1?r:r.slice(0,n);return a&&(l=a(l)),o?l.padStart(n," "):l.padEnd(n," ")})).join(" ")));o.length>0&&o.forEach((e=>r?.println(e)))},g=async()=>{let{quota:e=0,usage:t=0}=await(navigator.storage?.estimate?.())||{};return 0===e?"":`  ${(e-t).toLocaleString()} bytes`},w=(e=!1)=>{if(window.performance){let[{duration:t}]=window.performance.getEntriesByType("navigation"),r=window.performance.timeOrigin+t,i=Math.ceil(Date.now()-r),n=Math.floor(i/l.y8),o=new Date(i),a=o.getUTCHours(),s=o.getUTCMinutes(),c=o.getUTCSeconds();return[...n?[`${n} day${1===n?"":"s"}`]:[],...a?[`${a} hour${1===a?"":"s"}`]:[],...s?[`${s} ${e?"min":"minute"}${1===s?"":"s"}`]:[],...c?[`${c} ${e?"sec":"second"}${1===c?"":"s"}`]:[]].join(", ")}return"Unknown"},y=(e,t)=>`${(0,i.P)(...i.w[e].rgb,!0)}${(0,i.P)(...i.w[e].rgb)}|||${t?.join("")||`${(0,i.P)(...i.w[0].rgb,!0)}${(0,i.P)(...i.w[7].rgb)}`}[0m`},20153:function(e,t,r){r.d(t,{C:function(){return a}});var i=r(7433),n=r(1864);let o=new Set(["checkout","clone","fetch","init","merge","pull"]),a={add:"Add a file to the git index (aka staging area)",branch:"Create a branch",checkout:"Checkout a branch",clone:"Clone a repository",commit:"Create a new commit",fetch:"Fetch commits from a remote repository",init:"Initialize a new repository",log:"Get commit descriptions from the git history",merge:"Merge two branches",pull:"Fetch and merge commits from a remote repository",push:"Push a branch or tag",status:"Tell whether a file has been changed",tag:"Create a lightweight tag",version:"Return the version number of isomorphic-git"};t.Z=async([e,...t],l,s,c,p)=>{let u=await Promise.all([r.e(8375),r.e(7320)]).then(r.bind(r,10764));if(e in u){let i=await r.e(246).then(r.bind(r,80246)),{default:a}=await r.e(6562).then(r.t.bind(r,96562,23)),{username:d,password:h,...m}=a(t),f=[],g={...m,corsProxy:"https://cors.isomorphic-git.org",dir:l,fs:c,http:i,onAuth:()=>({password:h,username:d}),onMessage:(e="")=>s.println(`remote: ${e.trim()}`),onProgress:({phase:e})=>{f[f.length-1]!==e&&(s.println(e),f.push(e))}};if("clone"===e){if(!g.url&&m._&&Array.isArray(m._)&&1===m._.length){let[e]=m._;g.url=e}let e=g.url?.split("/").pop()?.replace(/\.git$/,"")||"";e&&(s.println(`Cloning into '${e}'...`),g.dir=(0,n.join)(l,e))}try{let t=await(u[e]?.(g));"string"==typeof t&&s.println(t)}catch(e){s.println(e.message)}o.has(e)&&p(l)}else(0,i.R_)(s,a)}},64443:function(e,t,r){r.r(t),r.d(t,{default:function(){return C},resourceAliasMap:function(){return x}});var i=r(85893),n=r(7433),o=r(20121);let a=r(41686).ZP.div.withConfig({componentId:"sc-5da4e109-0"})`
  background-color: #fff;
  border: 1px solid rgb(240, 240, 240);
  font-size: 12px;

  figure {
    display: flex;
    flex-direction: row;
    padding: 20px 11px 14px;

    figcaption {
      line-height: 15px;
      margin-bottom: 4px;
    }

    img {
      height: 32px;
      margin-right: 19px;
      width: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    label {
      margin-top: 3px;
      padding: 0 11px;
    }

    div {
      position: relative;
      width: 100%;

      input,
      select {
        border: 1px solid rgb(122, 122, 122);
        border-radius: 0;
        font-family: ${({theme:e})=>e.formats.systemFont};
        font-size: 12px;
        height: 23px;
        line-height: 16px;
        margin: 0 13px 21px 8px;
        padding-bottom: 2px;
        padding-left: 5px;
        width: 100%;
      }

      select {
        background-color: #fff;
        clip-path: inset(0 0 0 calc(100% - 20px));
        position: absolute;
        width: calc(100% - 21px);

        &:disabled {
          border: 1px solid rgb(122, 122, 122);
          opacity: 100%;
        }
      }

      input {
        border-right: 0;
        margin-right: 33px;

        &:focus {
          border: 1px solid rgb(0, 120, 215);
          border-right: 0;

          + select {
            border-color: rgb(0, 120, 215);
          }
        }
      }
    }
  }

  nav {
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    height: 100%;

    ${o.Z} {
      height: 24px;
      margin-top: 19px;
      position: absolute;
      right: 12px;
      width: 86px;

      &:first-child {
        right: 107px;
      }
    }
  }
`;var l=r(79281),s=r(7316),c=r(29222),p=r(13275),u=r(21023),d=r(38246),h=r(1864),m=r(67294),f=r(49108),g=r(46499),w=r(7788),y=r(5345);let b="open",x={cmd:"Terminal",code:"MonacoEditor",dos:"JSDOS",explorer:"FileExplorer",monaco:"MonacoEditor",mspaint:"Paint",vlc:"VideoPlayer"},v=`Type the name of a program, folder, document, or Internet resource, and ${f.PACKAGE_DATA.alias} will open it for you.`,k=e=>alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),$={esheep:y.default,sheep:y.default};var C=({id:e})=>{let{open:t,closeWithTransition:r,processes:{Run:y}={}}=(0,p.z)(),{createPath:C,exists:P,readFile:S,stat:j,updateFolder:L}=(0,c.o)(),{foregroundId:D,runHistory:E,setRunHistory:F}=(0,d.k)(),R=(0,m.useRef)(null),[_,A]=(0,m.useState)(!0),[M,T]=(0,m.useState)(!E[0]),[I,O]=(0,m.useState)(!1),B=({target:e})=>T(!e?.value),z=(0,m.useCallback)((async i=>{if(!i)return;O(!0);let o=()=>F((e=>e[0]===i?e:[i,...e])),[a,...s]=(0,n.$4)(i),c=i,p=!0,d=await P(c);d||(c=s.length>0?s.join(" "):a);let m=c.startsWith("nostr:");m&&t("Messenger",{url:c});let y=c.startsWith("ipfs://");if(d||m||y||await P(c)){if(y)try{let e=await(0,w.getIpfsResource)(c);c=(0,h.join)(f.Ll,await C(await(0,w.getIpfsFileName)(c,e),f.Ll,e)),L(f.Ll,(0,h.basename)(c))}catch{}if((await j(c)).isDirectory())t("FileExplorer",{url:c},""),o();else if(a&&s.length>0&&c!==i){let e=Object.keys(u.Z).find((e=>e.toLowerCase()===a.toLowerCase()));e?(t(e,{url:"Browser"===e&&y?s.join(" "):c}),o()):(k(a),p=!1)}else{let e=(0,g.RT)(c);if(e===f.zm){let{pid:e,url:r}=(0,l.OE)(await S(c));e&&t(e,{url:r})}else{let r=(0,l.Wd)(e);r&&t(r,{url:"Browser"===r&&y?i:c})}o()}}else{let e=Object.keys(u.Z).find((e=>e.toLowerCase()===(x[c.toLowerCase()]||c).toLowerCase()));e?(t(e),o()):$[i.toLowerCase()]?($[i.toLowerCase()](),o()):(k(i),p=!1)}O(!1),p&&r(e)}),[r,C,P,e,t,S,F,j,L]);return(0,m.useLayoutEffect)((()=>{D===e&&(R.current?.focus(f.eS),R.current?.value&&R.current?.select())}),[D,e]),(0,m.useLayoutEffect)((()=>{y?.url&&R.current&&(R.current.value=`${R.current.value.trimEnd()} ${y.url}`.trim(),T(!1))}),[y?.url]),(0,i.jsxs)(a,{...(0,s.Z)({id:e}),onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,g.nK)(e)},children:[(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{alt:"Run",src:"/System/Icons/32x32/run.webp"}),(0,i.jsx)("figcaption",{children:v})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:b,children:"Open:"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{ref:R,autoComplete:"off",defaultValue:E[0],disabled:I,enterKeyHint:"go",id:b,onBlurCapture:({relatedTarget:e})=>{!y?.componentWindow||y.componentWindow.contains(e)?R.current?.focus(f.eS):A(!1)},onChange:B,onFocusCapture:()=>A(!0),onKeyDownCapture:t=>{let{key:i}=t;"Enter"===i&&z(R.current?.value.trim()),"Escape"===i&&((0,g.nK)(t),r(e))},onKeyUp:B,spellCheck:"false",type:"text"}),(0,i.jsx)("select",{disabled:0===E.length,onChange:({target:e})=>{R.current&&(R.current.value=e.value,T(!1))},onClick:({target:e})=>{e instanceof HTMLSelectElement&&-1!==e.selectedIndex&&(e.selectedIndex=-1)},children:E.map(((e,t)=>(0,i.jsx)("option",{value:e,children:e},`${e}-${t}`)))})]})]}),(0,i.jsxs)("nav",{children:[(0,i.jsx)(o.Z,{className:_?"focus":"",disabled:M||I,onClick:()=>z(R.current?.value.trim()),children:"OK"}),(0,i.jsx)(o.Z,{disabled:I,onClick:()=>r(e),children:"Cancel"})]})]})}},20121:function(e,t,r){let i=r(41686).ZP.button.withConfig({componentId:"sc-59a750f5-0"})`
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
`;t.Z=i},7316:function(e,t,r){var i=r(73260),n=r(82973),o=r(60480),a=r(29222),l=r(13275),s=r(38246),c=r(1864),p=r(67294),u=r(49108),d=r(46499);t.Z=({callback:e,directory:t=u.Ll,id:r,onDragLeave:h,onDragOver:m,updatePositions:f})=>{let{url:g}=(0,l.z)(),{iconPositions:w,sortOrders:y,setIconPositions:b}=(0,s.k)(),{mkdirRecursive:x,updateFolder:v,writeFile:k}=(0,a.o)(),$=(0,p.useCallback)((async(e,t,i)=>{if(r)if(t){let n=(0,c.join)(u.Ll,e);if(await x(u.Ll),await k(n,t,!0))return i===o.v.UPDATE_URL&&g(r,n),v(u.Ll,e),(0,c.basename)(n)}else i===o.v.UPDATE_URL&&g(r,e);return""}),[r,x,v,g,k]),{openTransferDialog:C}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:i=>{if(!u.my.has((0,d.RT)(t))){if(f&&i.target instanceof HTMLElement){let{files:e,text:r}=(0,n.p4)(i);if(0===e.length&&""===r)return;let o={x:i.clientX,y:i.clientY},a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!w[`${t}/${e}`])return e;let r=0,i="";do{r+=1,i=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${r})${(0,c.extname)(e)}`}while(w[i]);return(0,c.basename)(i)})),(0,d.vi)(t,i.target,w,y,o,a,b)}(0,n.WG)(i,e||$,t,C,!!r)}}}}},7788:function(e,t,r){r.d(t,{getIpfsFileName:function(){return s},getIpfsGatewayUrl:function(){return l},getIpfsResource:function(){return c}});var i=r(49108),n=r(48764).Buffer;let o="",a=e=>new Promise((t=>{let r=window.setTimeout((()=>t(!1)),i.i2),n=new Image;n.addEventListener("load",(()=>{window.clearTimeout(r),t(!0)}),i.K7),n.addEventListener("error",(()=>{window.clearTimeout(r),t(!1)}),i.K7),n.src=`${e.replace("<CID>","bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`})),l=async(e,t)=>{if(!o||t){let e=t?i.i6.filter((e=>e!==o)):i.i6;for(let t of e)if(await a(t)){o=t;break}if(!o)return""}let{pathname:n,protocol:l,search:s}=new URL(e);if("ipfs:"!==l)return"";let[c="",...p]=n.split("/").filter(Boolean),{CID:u}=await r.e(8060).then(r.bind(r,38060));return`${o.replace("<CID>",u.parse(c).toV1().toString())}${p.join("/")}${s}`},s=async(e,t)=>{let{pathname:i,searchParams:n}=new URL(e),o=n.get("filename");if(o)return o;let{fileTypeFromBuffer:a}=await Promise.all([r.e(3575),r.e(9748),r.e(4155)]).then(r.bind(r,49748)),{ext:l=""}=await a(t)||{};return`${i.split("/").filter(Boolean).join("_")}${l?`.${l}`:""}`},c=async e=>{let t,r={...i.P8,cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null};try{t=await fetch(await l(e),r)}catch(i){"Failed to fetch"===i.message&&(t=await fetch(await l(e,!0),r))}return t instanceof Response?n.from(await t.arrayBuffer()):n.from("")}},5345:function(e,t,r){var i=r(46499);let n={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]},o=!1;t.default=()=>(0,i.mb)(["/Program Files/eSheep/eSheep.js"]).then((()=>{if(window.Sheep){let e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});o?e.Start((()=>{let e=Object.keys(n).flatMap((e=>{let[,t]=n[e];return Array.from({length:t}).fill(e)})),t=Math.floor(Math.random()*e.length),[r]=n[e[t]];return r})()):(o=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}}))}}]);