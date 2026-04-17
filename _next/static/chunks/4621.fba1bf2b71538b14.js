"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4621],{74621:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(85893),i=n(41686),a=n(49108);let s=i.ZP.textarea.attrs((()=>({autoComplete:"off",enterKeyHint:"done",maxLength:a.Zv,rows:1,spellCheck:!1}))).withConfig({componentId:"sc-fc41a6f3-0"})`
  border: 1px solid rgb(100, 100, 100);
  font-family: inherit;
  font-size: 11.5px;
  margin-bottom: 2px;
  max-width: ${({theme:e})=>e.sizes.fileEntry.renameWidth}px;
  min-height: 19px;
  min-width: 30px;
  overflow: hidden;
  padding: ${({theme:e})=>`1px ${e.sizes.fileEntry.renamePadding}px`};
  position: relative;
  resize: none;
  text-align: center;
  top: 2px;
  user-select: text;
  white-space: break-spaces;
  z-index: 1;
`;var o=n(79281),l=n(1864),f=n(67294),u=n(46499),h=({name:e,path:t,renameFile:n})=>{let h=(0,f.useRef)(null),p=()=>n(t,h.current?.value),{formats:c,sizes:x}=(0,i.Fg)(),m=(0,f.useCallback)((e=>{if(e instanceof HTMLTextAreaElement){let{width:t}=(0,o.oc)(e.value,x.fileEntry.fontSize,c.systemFont);e.setAttribute("style","height: 1px"),e.setAttribute("style",`height: ${e.scrollHeight+2}px; width: ${t+22}px`)}}),[c.systemFont,x.fileEntry.fontSize]);return(0,f.useLayoutEffect)((()=>{m(h.current),h.current?.focus(a.eS),h.current?.setSelectionRange(0,e.length-l.extname(e).length)}),[e,m]),(0,r.jsx)(s,{ref:h,defaultValue:e,onBlurCapture:p,onClick:u.nK,onDragStart:u.nK,onKeyDown:({key:e})=>{"Enter"===e&&p()},onKeyUp:e=>{m(e.target),(0,u.nK)(e)}})}}}]);