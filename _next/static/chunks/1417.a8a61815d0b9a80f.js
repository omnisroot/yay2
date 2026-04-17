"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1417],{21417:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var a=r(85893),n=r(67294);let i=(0,n.memo)((()=>(0,a.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"})}))),o=(0,n.memo)((()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001C14.366 2.693 14.2 1.643 13.616 0h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847L2.372 4.657c.745 1.568 1.375 2.434.847 3.707C2.692 9.635 1.635 9.802 0 10.384v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"})}))),s=(0,n.memo)((()=>(0,a.jsxs)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M338.7 174.6 135.3 378.3c-12.5 12.5-12.5 32.8 0 45.3l180.1 180.3c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l22.6-22.6L203 400.9l158.2-158.4c12.5-12.5 12.5-32.8 0-45.3l-22.5-22.6z"}),(0,a.jsx)("path",{d:"M654.5 369.4h-496c-17.7 0-32 14.3-32 32s14.3 32 32 32h496c97.2 0 176 78.8 176 176s-78.8 176-176 176h-496c-17.7 0-32 14.3-32 32s14.3 32 32 32h496c132.5 0 240-107.5 240-240s-107.5-240-240-240z"})]})));var l=r(41686),c=r(45949),u=r(49108);let p=l.ZP.div.withConfig({componentId:"sc-52d8fe5f-0"})`
  background-color: rgb(68, 70, 84);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > button {
    fill: rgba(200, 200, 200, 75%);
    margin: 3px;
    padding: 4px;
    position: absolute;
    right: ${u.BQ}px;
    width: 24px;
    z-index: 1;

    &:hover {
      fill: rgba(200, 200, 200, 100%);
    }
  }

  .sub-margin {
    margin: -2px;
  }

  > ul {
    ${(0,c.Z)()};
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 84px;
    position: relative;
  }
`,d=l.ZP.li.withConfig({componentId:"sc-be59d8ad-0"})`
  padding-bottom: 15px;

  figure {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    padding-left: 15px;

    figcaption {
      color: rgba(236, 236, 241);
      padding-left: 5px;

      b {
        font-weight: 600;
      }
    }
  }
`,g=`${u.sC}/AI Images`,b="0 0.5px 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",m={"/caption":{action:"CAPTIONING",icon:"📝",label:"Captioning"},"/classify":{action:"CLASSIFYING",icon:"🏷️",label:"Classifying"},"/draw":{action:"DRAWING",icon:"🎨",label:"Drawing"},"/summarize":{action:"SUMMARY",icon:"📋",label:"Summarizing"},"/translate":{action:"TRANSLATION",icon:"🌐",label:"Translating"},"/wallpaper":{action:"DRAWING",icon:"🖼️",label:"Creating Wallpaper"}},h={401:"Valid API key required.",404:"Model not found.",429:"Rate limit reached."},x=l.ZP.div.withConfig({componentId:"sc-374ce36d-0"})`
  align-items: flex-end;
  background-color: rgb(52, 53, 65);
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: ${u.BQ}px;

  .status {
    background-color: rgb(52, 53, 65);
    border-top-right-radius: 5px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    max-width: 95%;
    overflow: hidden;
    padding: 5px 10px;
    position: absolute;
    text-overflow: ellipsis;
    top: -26px;
    white-space: nowrap;
    width: fit-content;
  }

  textarea {
    background-color: rgb(64, 65, 79);
    border: 5px solid rgb(64, 65, 79);
    border-radius: 24px;
    box-shadow: ${b};
    color: #fff;
    font-family: ${({theme:e})=>e.formats.systemFont};
    font-size: 16px;
    height: 40px;
    line-height: 20px;
    margin: 22px;
    overflow: hidden;
    padding: 4px 40px 4px 16px;
    resize: none;
    width: 100%;

    &::placeholder {
      color: rgba(200, 200, 200, 75%);
    }
  }

  button {
    bottom: 25px;
    cursor: pointer;
    opacity: ${({$hideSend:e})=>e?"0%":"100%"};
    pointer-events: ${({$hideSend:e})=>e?"none":"all"};
    position: absolute;
    right: 28px;
    transition: opacity 0.1s ease-in-out;
    width: min-content;

    &:hover {
      background-color: rgb(52, 53, 65);
      border-radius: 50%;
    }

    svg {
      color: rgb(0, 132, 255);
      margin: 8px 8px 3px 6px;
      pointer-events: none;
      width: 20px;
    }
  }
`,f=l.ZP.span.withConfig({componentId:"sc-12ff28b5-0"})`
  height: 32px;
  opacity: ${({$showLoading:e})=>e?"100%":"0%"};
  position: absolute;
  right: 24px;
  top: 18px;
  transition: opacity 0.1s ease-in-out;
  width: 32px;

  &::after {
    animation: ellipsis steps(4, end) 900ms infinite;
    color: rgb(142, 142, 160);
    content: "";
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  @keyframes ellipsis {
    0% {
      content: ".";
    }

    50% {
      content: "..";
    }

    100% {
      content: "...";
    }
  }
`,w=l.ZP.li.withConfig({componentId:"sc-68679167-0"})`
  background-size: cover;
  border-radius: 18px;
  box-shadow: ${b};
  cursor: ${({$image:e})=>e?void 0:"text"};
  font-size: 16px;
  height: ${({$image:e})=>e?"256px":void 0};
  line-height: 20px;
  margin: 20px;
  max-width: calc(100% - 40px);
  overflow-wrap: break-word;
  padding: 10px 15px;
  user-select: text;
  white-space: break-spaces;
  width: ${({$image:e})=>e?"256px":"max-content"};

  ${({$image:e,$type:t})=>"assistant"===t&&l.iv`
      background: ${e?`url(${e})`:"linear-gradient(90deg, rgb(248, 249, 253), rgb(245, 248, 253))"};
      background-size: contain;
      color: #000;
      margin-left: 56px;
      margin-right: auto;
      max-width: calc(100% - 78px);
      position: relative;

      &::before {
        background-color: black;
        background-image: url("/favicon.ico");
        background-size: contain;
        border-radius: 50%;
        content: "";
        height: 31px;
        left: -40px;
        position: absolute;
        top: 9px;
        width: 31px;
      }

      .cursor {
        display: contents;
        font-size: 14px;
      }

      > span {
        cursor: text;
        display: flex;
        flex-direction: column;
        gap: 10px;
        user-select: text;

        code {
          background-color: rgb(25, 25, 25);
          border-radius: 6px;
          color: rgb(250, 250, 250);
          cursor: text;
          font-size: 12px;
          padding: 2px 5px;
          user-select: text;
        }

        p {
          cursor: text;
          user-select: text;
        }

        pre > code {
          display: block;
          font-size: 14px;
          padding: 10px;
          white-space: pre-wrap;
        }

        ol,
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: auto;
          user-select: text;

          li {
            user-select: text;
          }
        }
      }
    `}

  ${({$isCommand:e,$type:t})=>"user"===t&&l.iv`
      background: linear-gradient(
        90deg,
        ${e?"rgb(224, 40, 234)":"rgb(40, 112, 234)"},
        ${e?"rgb(148, 27, 239)":"rgb(27, 74, 239)"}
      );
      color: #fff;
      margin-left: auto;
    `}
`,k=l.ZP.li.withConfig({componentId:"sc-6128ecab-0"})`
  background-color: rgb(70, 59, 63);
  border: 1px solid rgb(124, 70, 43);
  border-radius: 10px;
  color: rgb(248, 236, 234);
  font-size: 16px;
  margin: 25px;
  outline: 1px solid rgb(73, 48, 40);
  padding: 15px;
`;var A=r(79281),y=r(82973),v=r(7316),$=r(29222),S=r(18849),C=r(13275),M=r(21023),E=r(38246);let L={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"},T=class{destroy(){this.reset()}constructor(e){this.model="",this.worker=void 0,this.isChatting=!1,this.greeting=L,this.model=e}async init(){return window.webLLM=window.webLLM||{},window.webLLM[this.model]=window.webLLM[this.model]||new Worker(r.tu(new URL(r.p+r.u(6496),r.b)),{name:this.model,type:void 0}),this.worker=window.webLLM[this.model],this.worker.postMessage({model:this.model,type:"init"}),Promise.resolve()}async chat(e,t,r,a,n,i){return!this.isChatting&&(this.isChatting=!0,i&&this.worker?.postMessage({prompt:i,type:"system"})),setTimeout((()=>{this.worker?.postMessage({prompt:e,type:"chat"})}),100),new Promise((e=>{this.worker?.addEventListener("message",(({data:t})=>{let r=n||console.info;"string"==typeof t?(e(t),r("","")):"object"==typeof t&&r(t.type,t.message)}))}))}async classify(e,t){return Promise.resolve("")}async draw(e){return Promise.resolve()}async imageToText(e,t,r){return Promise.resolve("")}reset(){this.worker?.postMessage({type:"reset"})}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}};var I=r(46499),z=r(48764).Buffer;let j={text:"Hello, I'm an AI assistant. How can I help you?",type:"assistant"},P={chat:"textGeneration",conversational:"facebook/blenderbot-400M-distill",imageToText:"Salesforce/blip-image-captioning-large",summarization:"philschmid/bart-large-cnn-samsum",textGeneration:"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",textToImage:"stabilityai/stable-diffusion-2-1",translation:"t5-base",zeroShotClassification:"facebook/bart-large-mnli"},R={"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5":{assistantStartToken:"<|assistant|>",endToken:"<|endoftext|>",userStartToken:"<|prompter|>"}},B=(e,t)=>{let{assistantStartToken:r,endToken:a,userStartToken:n}=R[P.textGeneration];return`${[...t,{text:e,type:"user"}].filter((({type:e})=>"system"!==e)).map((({text:e,type:t})=>`${"assistant"===t?r:n}${e}${a}`)).join("")}${r}`},_={wait_for_model:!0};var H=r(48764).Buffer;let O={model:"gpt-4",n:1,temperature:.8},W={content:"You are a helpful assistant.",role:"system"},N={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};var Z=r(46548);let U={HuggingFace:class{checkError(e){e.message.includes("Rate limit reached")&&this.setError(429)}constructor(e,t){this.inference={},this.greeting=j,this.apiKey=e,this.setError=t}async init(){await(0,I.mb)(["Program Files/HuggingFace/inference.min.js"]),window.HfInference&&(this.inference=new window.HfInference(this.apiKey))}async chat(e,t,r,a){let n="",i=P[P.chat];try{({generated_text:n=""}="conversational"===P.chat?await this.inference.conversational({inputs:{generated_responses:r,past_user_inputs:t,text:e},model:i},_):await this.inference.textGeneration({inputs:B(e,a),model:i,parameters:{max_new_tokens:100,return_full_text:!1}},_))}catch(e){this.checkError(e)}return n}async classify(e,t){try{let[{labels:[r],scores:[a]}]=await this.inference.zeroShotClassification({inputs:[e],model:P.zeroShotClassification,parameters:{candidate_labels:t}},_);return`${r} (${(100*a).toFixed(1)}%)`}catch(e){this.checkError(e)}return""}async draw(e){try{let t=await this.inference.textToImage({inputs:e,model:P.textToImage,negative_prompt:"blurry"},_);return z.from(await t.arrayBuffer())}catch(e){return this.checkError(e)}}async imageToText(e,t,r){try{let[{generated_text:a}]=await this.inference.request({data:new File([(0,I.V4)(r,t)],e,{type:t}),model:P.imageToText},{..._,binary:!0});return a}catch(e){this.checkError(e)}return""}async summarization(e){try{return(await this.inference.summarization({inputs:e,model:P.summarization,parameters:{max_length:100}},_)).summary_text}catch(e){this.checkError(e)}return""}async translation(e){try{return(await this.inference.translation({inputs:e,model:P.translation},_)).translation_text}catch(e){this.checkError(e)}return""}},OpenAI:class{getHeaders(){return{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},method:"POST"}}constructor(e,t){this.apiKey="",this.greeting=N,this.apiKey=e,this.setError=t}async init(){return Promise.resolve()}async chat(e,t,r,a,n,i){i&&W.content!==i&&(W.content=i);let o=(a||[]).map((({text:e,type:t})=>({content:e,role:t}))),s=await fetch("https://api.openai.com/v1/chat/completions",{body:JSON.stringify({messages:[W,...o,{content:e,role:"user"}],...O}),...this.getHeaders()});if(s?.ok){let e=await s.json(),[{message:t,finish_reason:r}]=e?.choices||[];if(t){let{content:e}=t;if("stop"===r)return e;if("length"===r)return`${e}\n\n[Incomplete Response]`;if("content_filter"===r)return`${e}\n\n[Content Filtered]`}}return s?.status&&this.setError(s?.status),""}async classify(e,t){return Promise.resolve("")}async draw(e){let t=await fetch("https://api.openai.com/v1/images/generations",{body:JSON.stringify({n:1,prompt:e,response_format:"b64_json",size:"256x256"}),...this.getHeaders()});if(t?.ok){let e=await t.json(),r=e?.data?.[0]?.b64_json;return r?H.from(r,"base64"):void 0}t?.status&&this.setError(t?.status)}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}},"WebLLM [RedPajama 3B]":T,"WebLLM [Vicuna 7B]":T},F=(e="",t="")=>{let[r,a]=(0,n.useState)(0),i=(0,Z.Z)(),[o,s]=(0,n.useState)("");return(0,n.useEffect)((()=>{if("boolean"==typeof i){let[e]=u.OG.split(":"),r=e;t&&t in U?r=t.startsWith("WebLLM")&&!i?u.wB:t:r.startsWith("WebLLM")&&!i&&(r=u.wB),s(r)}}),[t,i]),{engine:(0,n.useMemo)((()=>o?new U[o](t===o?e:"",a):void 0),[o,e,t]),error:r,name:o,resetError:()=>a(0)}};var G=r(1864),D=r(44714),Q=({id:e})=>{let{aiApi:t,setAiApi:r,setWallpaper:l}=(0,E.k)(),{readFile:c,mkdirRecursive:b,writeFile:L}=(0,$.o)(),{close:T,open:z,processes:{[e]:j},title:P,url:R}=(0,C.z)(),{url:B}=j||{},[_,H]=(0,n.useMemo)((()=>t.split(":")),[t]),{engine:O,error:W,name:N,resetError:U}=F(_.startsWith("WebLLM")?_:H,_),Q=(0,n.useRef)(null),K=(0,n.useRef)(null),[V,Y]=(0,n.useState)(""),[J,q]=(0,n.useState)([]),X=(0,n.useRef)(!1),ee=(0,n.useCallback)((([e,...t],r=!1)=>{let a=t.length>0;q((t=>{if(r)return[...t,{text:e,type:"assistant",writing:a}];let n=[...t],i=n.findIndex((({writing:e})=>e));return n[i]={text:`${n[i].text}${e}`,type:"assistant",writing:a},n})),a&&setTimeout((()=>ee(t)),(()=>{let e=Math.random(),t=150;return e<.3?t=30:e<.6?t=37.5:e<.9&&(t=50),Math.random()*(t-1+1)+1})())}),[]),te=(0,n.useCallback)((e=>{let{image:t,text:r,type:a}=e;r&&("assistant"!==a||t?q((t=>[...t,e])):ee([...r],!0))}),[ee]),[re,ae]=(0,n.useState)(!1),ne=(0,n.useCallback)((async e=>{if(!e)return"";ae(!0);let t=await e;return ae(!1),t}),[]),[ie,oe]=(0,n.useState)(""),se=(0,n.useCallback)(((e,t)=>{oe(e&&t?`${e} ${t}`:"")}),[]),[le,ce]=(0,n.useState)(""),[ue,pe]=(0,n.useState)(),de=(0,n.useCallback)(((e,t=ue)=>{if(!t)return;let r=new SpeechSynthesisUtterance(e);r.voice=t,r.pitch=.9,r.rate=1.5,r.volume=.5,window.speechSynthesis.speak(r)}),[ue]),ge=(0,n.useCallback)((e=>{if(!O)return;let[t,r]=J.map((e=>e.command&&"user"===e.type?{...e,text:`${e.command.replace("/","").toUpperCase()}: ${e.text}`}:e.image&&"assistant"===e.type?{...e,text:`IMAGE: ${e.text}`}:e)).reduce((([e,t],{text:r,type:a})=>"assistant"===a?[[...e,r],t]:[e,[...t,r]]),[[],[]]),a=e.trim();ne(O.chat(a,r,t,J,se,le)).then((async e=>{e&&(window.marked?.parse||await(0,I.mb)(["/Program Files/Marked/marked.min.js"]),te({text:window.marked.parse(e.trim(),{headerIds:!1}),type:"assistant"}),ue&&de(e))})),te({text:a,type:"user"})}),[O,te,J,de,se,le,ue,ne]),[be,me]=(0,n.useState)([]),he=(0,n.useCallback)((async(e,t,r)=>{let a=Date.now();ae(!0),me((r=>[...r,{command:e,text:t,timestamp:a}]));let n=await r;return me((e=>e.filter((({timestamp:e})=>e!==a)))),ae(!1),n}),[]),xe=(0,n.useCallback)(((e,t,r)=>{let[a,...n]=t.split(" "),i=n.join(" ");te({command:a,text:i,type:"user"}),he(a,i,e).then((e=>e&&te({command:a,..."string"==typeof e?{text:`${r||"RESPONSE"}: ${e.trim()}`}:{image:(0,I.YS)(e),text:i},type:"assistant"})))}),[te,he]),fe=(0,n.useCallback)((()=>{K.current&&(K.current.style.height="0px",K.current.style.height=`${Math.max(40,K.current.scrollHeight+10)}px`)}),[]),we=(0,n.useCallback)((async(e,t,r)=>{try{let a=(0,G.join)(g,`${(0,y.gL)(e)} (${(0,I.gE)()}).jpg`);await b(g),await L(a,t,!0),r&&l(a)}catch{}}),[b,l,L]),ke=(0,n.useCallback)((async()=>{if(K.current&&O){if(K.current.value.startsWith("/")){let[e,...t]=K.current.value.split(" "),r=t.join(" ");switch(e){case"/classify":xe(O.classify(r,Object.keys(m).map((e=>e.replace("/",""))).filter((e=>"classify"!==e))),K.current.value,"CLASSIFYING");break;case"/draw":case"/wallpaper":xe(O.draw(r).then((t=>(t&&we(r,t,"/wallpaper"===e),t))),K.current.value,"DRAWING");break;case"/caption":xe(O.imageToText((0,G.basename)(r),(0,A.bh)(r),await c(r)),K.current.value,"CAPTIONING");break;case"/summarize":xe(O.summarization(r),K.current.value,"SUMMARY");break;case"/translate":xe(O.translation(r),K.current.value,"TRANSLATION");break;default:ge(K.current.value)}}else ge(K.current.value);U(),K.current.value="",Y(""),fe()}}),[O,xe,c,U,we,ge,fe]),Ae=(0,n.useMemo)((()=>J.some((({writing:e})=>e))),[J]),ye=re||Ae,ve=V&&!ye,{contextMenu:$e}=(0,S.H)(),[Se,Ce]=(0,n.useState)([]),Me=(0,Z.Z)(),{onContextMenuCapture:Ee}=(0,n.useMemo)((()=>$e?.((()=>1===J.length?[{label:"Set AI Engine",menu:["HuggingFace","OpenAI",...Me?["WebLLM [RedPajama 3B]"]:[],...Me?["WebLLM [Vicuna 7B]"]:[]].map((t=>({action:()=>{r(`${t}:${t.startsWith("WebLLM")?"":prompt("API Key")||""}`),T(e),setTimeout((()=>z(e.split(u.CC)[0])),1.5*u.jx.WINDOW)},checked:N===t,label:t})))},..."OpenAI"===N?[{action:()=>{ce(prompt("System Prompt")||"")},label:"Set System Prompt"}]:[],...Se.length>0?[{label:"Set Text-to-Speech",menu:Se.map((e=>({action:()=>{pe(e),de(J[0].text,e)},checked:e===ue,label:e.name})))}]:[]]:[]))),[T,$e,Me,e,J,N,z,r,de,ue,Se]),Le=(0,n.useCallback)((()=>{q((e=>[e[0]])),O?.reset?.()}),[O]);return(0,n.useEffect)((()=>{if(O&&"speechSynthesis"in window){let e=window.speechSynthesis.getVoices();0===e.length?setTimeout((()=>Ce(window.speechSynthesis.getVoices())),500):Ce(e)}}),[O]),(0,n.useEffect)((()=>{N&&P(e,`${M.Z.Chat.title} (${N})`)}),[e,N,P]),(0,n.useEffect)((()=>{Q.current&&J.length>0&&Q.current.scrollTo(0,Q.current.scrollHeight)}),[J]),(0,n.useEffect)((()=>(O&&!X.current&&(X.current=!0,O.init().then((()=>te(O.greeting))),K.current?.focus(u.eS)),()=>{X.current&&O?.destroy?.()})),[O,te]),(0,n.useEffect)((()=>{if(B&&K.current&&u.lM.has((0,I.RT)(B))){let t=`${V?"":"/caption "}${V}${V?" ":""}${B}`;K.current.value=t,Y(t),fe(),R(e,"")}}),[e,V,R,fe,B]),(0,a.jsxs)(p,{...(0,v.Z)({id:e}),children:[1===J.length?(0,a.jsx)(D.Z,{onClick:Ee,children:(0,a.jsx)(o,{})}):J.length>1&&!ye&&(0,a.jsx)(D.Z,{className:"sub-margin",onClick:Le,title:"Reset Chat",children:(0,a.jsx)(s,{})}),(0,a.jsxs)("ul",{ref:Q,children:[J.map((({command:e,image:t,text:r,type:n,writing:i},o)=>{let s="assistant"===n,l=e||!s?r:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:`${r}${i?"<span class='cursor'>|</span>":""}`}});return(0,a.jsxs)(w,{$image:t,$isCommand:!!e,$type:n,title:t?r:"",children:[e&&!s?`${m[e].icon} `:"",t?"":l]},o)})),!(!W||!h[W])&&(0,a.jsx)(k,{children:h[W]}),be.map((({command:e,text:t})=>(0,a.jsx)(d,{children:(0,a.jsxs)("figure",{children:[m[e].icon,(0,a.jsxs)("figcaption",{children:[m[e].label,": ",(0,a.jsx)("b",{children:t}),"..."]})]})},`${e}-${t}`)))]}),(0,a.jsxs)(x,{$hideSend:!ve,children:[ie&&(0,a.jsx)("div",{className:"status",children:ie}),(0,a.jsx)("textarea",{ref:K,onInput:e=>{let{nativeEvent:t,target:r}=e;r instanceof HTMLTextAreaElement&&t instanceof InputEvent&&(["insertFromPaste","deleteByCut"].includes(t.inputType)&&Y(r.value),fe())},onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{let{key:t,target:r,shiftKey:a}=e;r instanceof HTMLTextAreaElement&&(r.value&&"Enter"===t?a?(r.value+="\n",fe()):ve&&ke():Y(r.value))},placeholder:"Ask me anything..."}),(0,a.jsx)(f,{$showLoading:ye}),(0,a.jsx)(D.Z,{onClick:ke,children:(0,a.jsx)(i,{})})]})]})}},7316:function(e,t,r){var a=r(73260),n=r(82973),i=r(60480),o=r(29222),s=r(13275),l=r(38246),c=r(1864),u=r(67294),p=r(49108),d=r(46499);t.Z=({callback:e,directory:t=p.Ll,id:r,onDragLeave:g,onDragOver:b,updatePositions:m})=>{let{url:h}=(0,s.z)(),{iconPositions:x,sortOrders:f,setIconPositions:w}=(0,l.k)(),{mkdirRecursive:k,updateFolder:A,writeFile:y}=(0,o.o)(),v=(0,u.useCallback)((async(e,t,a)=>{if(r)if(t){let n=(0,c.join)(p.Ll,e);if(await k(p.Ll),await y(n,t,!0))return a===i.v.UPDATE_URL&&h(r,n),A(p.Ll,e),(0,c.basename)(n)}else a===i.v.UPDATE_URL&&h(r,e);return""}),[r,k,A,h,y]),{openTransferDialog:$}=(0,a.Z)();return{onDragLeave:g,onDragOver:e=>{b?.(e),(0,d.nK)(e)},onDrop:a=>{if(!p.my.has((0,d.RT)(t))){if(m&&a.target instanceof HTMLElement){let{files:e,text:r}=(0,n.p4)(a);if(0===e.length&&""===r)return;let i={x:a.clientX,y:a.clientY},o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=e instanceof FileList?[...e].map((e=>e.name)):[...e].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!x[`${t}/${e}`])return e;let r=0,a="";do{r+=1,a=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${r})${(0,c.extname)(e)}`}while(x[a]);return(0,c.basename)(a)})),(0,d.vi)(t,a.target,x,f,i,o,w)}(0,n.WG)(a,e||v,t,$,!!r)}}}}},46548:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(67294);let n=()=>{let[e,t]=(0,a.useState)(),r=(0,a.useCallback)((async()=>t(await(async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1073741824>(e.limits.maxBufferSize??0)||1073741824>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,a.useEffect)((()=>{r()}),[r]),e}},45949:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(41686),n=r(49108);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=(e=n.BQ,t=0,r=0,o="dark")=>a.iv`
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
    background-position-y: ${0===r?"center":`${r}px`};
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
`}}]);