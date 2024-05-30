"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[2835],{3462:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=o(4848),n=o(8453),a=o(2467);const r={sidebar_position:6,title:"CSES",description:"Community Streamflow Evaluation System",tags:["roset","python"]},i="CSES",c={id:"products/cses/index",title:"CSES",description:"Community Streamflow Evaluation System",source:"@site/docs/products/cses/index.md",sourceDirName:"products/cses",slug:"/products/cses/",permalink:"/docs/products/cses/",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/cses/index.md",tags:[{label:"roset",permalink:"/docs/tags/roset"},{label:"python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"CSES",description:"Community Streamflow Evaluation System",tags:["roset","python"]},sidebar:"products",previous:{title:"CIROH Research Portal",permalink:"/docs/products/tethysportal/"},next:{title:"Data Access",permalink:"/docs/products/dataaccess/"}},l={},d=[];function u(e){const t={h1:"h1",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cses",children:"CSES"}),"\n",(0,s.jsx)(t.p,{children:"Community Streamflow Evaluation System (CSES) is a Python-based, user friendly, fast, and model agnostic streamflow evaluator tool. This tool can be used to evaluate any hydrological model that uses NHDPlus dataset. It allows a user to evaluate the performance of a hydrological model at the collocated USGS gauges and NHDPlus stream reaches. This Python-based tool helps visualize the results and investigate the model performance interactively. The current version of the tool is available on GitHub and can be accessed using the following link."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Community Streamflow Evaluation System (CSES)",src:o(1265).A+"",width:"1417",height:"314"})}),"\n","\n",(0,s.jsx)(a.A,{username:"whitelightning450",repo:"Community-Streamflow-Evaluation-System"})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2467:(e,t,o)=>{o.d(t,{A:()=>a});var s=o(6540),n=o(4848);const a=function(e){let{repo:t,username:o,subfolder:a="",readmeFileName:r=""}=e;const[i,c]=(0,s.useState)("");return(0,s.useEffect)((()=>{let e="";e=""!=a?""!=r?`https://api.github.com/repos/${o}/${t}/contents/${a}/${r}?ref=main`:`https://api.github.com/repos/${o}/${t}/contents/${a}/readme?ref=main`:""!=r?`https://api.github.com/repos/${o}/${t}/${r}?ref=main`:`https://api.github.com/repos/${o}/${t}/readme?ref=main`,fetch(e,{headers:{Accept:"application/vnd.github.v3.html"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch README");return e.text()})).then((e=>{c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${o}/${t}/blob/main/README.md'>https://github.com/${o}/${t}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+e)})).catch((e=>console.error("Error fetching README:",e)))}),[t,o]),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})}},1265:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/streamfloweval-4c1ea3189f3b5edd1da55317f4efaeb1.png"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var s=o(6540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);