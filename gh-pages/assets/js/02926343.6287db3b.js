"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[6382],{9972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(4848),r=t(8453),o=t(1470),i=t(9365);const l={sidebar_position:3,title:"Accessing the System",description:"Access of On-Premises Cluster Wukong",tags:["HPC","On-Premises","Access","Wukong"]},c=void 0,a={id:"services/on-prem/Wukong/access",title:"Accessing the System",description:"Access of On-Premises Cluster Wukong",source:"@site/docs/services/on-prem/Wukong/access.md",sourceDirName:"services/on-prem/Wukong",slug:"/services/on-prem/Wukong/access",permalink:"/docs/services/on-prem/Wukong/access",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/services/on-prem/Wukong/access.md",tags:[{label:"HPC",permalink:"/docs/tags/hpc"},{label:"On-Premises",permalink:"/docs/tags/on-premises"},{label:"Access",permalink:"/docs/tags/access"},{label:"Wukong",permalink:"/docs/tags/wukong"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Accessing the System",description:"Access of On-Premises Cluster Wukong",tags:["HPC","On-Premises","Access","Wukong"]},sidebar:"services",previous:{title:"Obtaining an Account",permalink:"/docs/services/on-prem/Wukong/obtain"},next:{title:"CIROH Subdomain Request Form",permalink:"/docs/services/subdomain"}},u={},d=[{value:"General overview",id:"general-overview",level:3},{value:"Connect to the Network",id:"connect-to-the-network",level:3},{value:"Connect to the SSH",id:"connect-to-the-ssh",level:3},{value:"PuTTY",id:"putty",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Wukong curretly only supports the Secure Shell (SSH) mechanisms for logging in. The Secure Shell mechanism uses SSH keys. If you need help creating or uploading your SSH keys, please see the Managing SSH Public Keys page for that information."}),"\n",(0,s.jsx)(n.h3,{id:"general-overview",children:"General overview"}),"\n",(0,s.jsx)(n.p,{children:"To connect to Wukong using SSH, you must follow two high-level steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#connect-to-the-network",children:"Connect to the University of Alabama (UA) Network"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#connect-to-the-ssh",children:"Connect to the Secure Shell (SSH)"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Obtain Wukong Access",type:"info",children:(0,s.jsxs)(n.p,{children:["In the case that access to the Wukong system is unavailable to you, please follow the instructions on ",(0,s.jsx)(n.a,{href:"/docs/services/on-prem/Wukong/obtain",children:"Obtaining an Account"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-the-network",children:"Connect to the Network"}),"\n",(0,s.jsx)(n.p,{children:"University of Alabama (UA) requires users to use the Virtual private network (VPN) to connect to the UA campus network in order to connect to the Wukong cluster."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For more information on setting up a VPN, please visit the ",(0,s.jsx)(n.a,{href:"https://oit.ua.edu/services/internet-networking/vpn/",children:"Office of Information Technology (OIT) website"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-the-ssh",children:"Connect to the SSH"}),"\n","\n",(0,s.jsxs)(o.A,{groupId:"current-os",queryString:!0,children:[(0,s.jsxs)(i.A,{value:"mac",label:"MacOS and Linux",default:!0,children:[(0,s.jsx)(n.p,{children:"Once you are connected to the VPN, follow these steps to access Wukong:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Open a Terminal:"})," Find ",(0,s.jsx)(n.code,{children:"Terminal"})," in your local machine and open it."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In MacOS, use Spotlight search (",(0,s.jsx)(n.strong,{children:"Command"})," + ",(0,s.jsx)(n.strong,{children:"Spacebar"}),") and type ",(0,s.jsx)(n.code,{children:"Terminal"})," to open a new terminal window."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Connect via SSH:"})," In the terminal,"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the SSH command to connect to Wukong.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"ssh <USERNAME>@Wukong.ua.edu\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<USERNAME>"})," with your actual Wukong username."]})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Enter your Wukong password"}),"\n"]}),"\n"]}),"\n"]})]}),(0,s.jsxs)(i.A,{value:"win",label:"Windows",children:[(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("tr",{children:(0,s.jsx)("th",{colspan:"2",children:"Windows SSH Instruction "})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Programs"}),(0,s.jsx)("th",{children:"Instructions"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"MobaXterm"}),(0,s.jsxs)("td",{children:["Open a local terminal and ",(0,s.jsx)(n.a,{href:"/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh",children:"follow steps"}),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Git Bash"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.a,{href:"/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh",children:"follow steps"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Windows 10 PowerShell"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.a,{href:"/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh",children:"follow steps"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Windows 10 Subsystem for Linux"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.a,{href:"/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh",children:"follow steps"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"PuTTY"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/services/on-prem/Wukong/access?current-os=win#putty",children:"Follow steps below"})})})]})]}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h4,{id:"putty",children:"PuTTY"}),(0,s.jsx)(n.p,{children:"PuTTY, initially developed by Simon Tatham for the Windows operating system, serves as a client application for both SSH (Secure Shell) and telnet protocols. It is characterized by its open-source nature, providing access to its source code, and is maintained through collaborative efforts by a community of volunteers."}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For more information on PuTTY, please visit the ",(0,s.jsx)(n.a,{href:"https://www.putty.org/",children:"PuTTY website"})]})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Download PuTTY:"})," To download PuTTY, click ",(0,s.jsx)(n.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"download page"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Open PuTTY:"})," Open downloaded file ",(0,s.jsx)(n.code,{children:"putty.exe"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/putty/image.png",alt:"putty",style:{width:"50%",height:"50%"}})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Host Name:"})," In the ",(0,s.jsx)("mark",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Host Name (or IP address)"})})})," field enter the ",(0,s.jsx)(n.code,{children:"Wukong.ua.edu"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Port:"})," In the ",(0,s.jsx)("mark",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Port"})})})," field enter the ",(0,s.jsx)(n.code,{children:"22"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Open:"})," Click on the ",(0,s.jsx)("mark",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Open"})})})," button. This will prompt a new login Secure Shell window."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Name:"})," In given new window, enter your Wukong ",(0,s.jsx)("mark",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"User Name"})})}),".","\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/putty/frame08_1.webp",alt:"putty"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Password:"})," Enter your Wukong account ",(0,s.jsx)("mark",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Password"})})}),".","\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/putty/frame09_1.webp",alt:"putty"})}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.p,{children:"We hope this guide helps you efficiently utilize the Wukong HPC system for your research needs. Happy computing!"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),r=t(4164),o=t(3104),i=t(6347),l=t(205),c=t(7485),a=t(1682),u=t(9466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[a,d]=m({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),j=(()=>{const e=a??x;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==s&&(a(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.A)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);