(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),l=(r(0),r(156)),c={title:"Requirements"},o={id:"requirements",title:"Requirements",description:"## Required Tools",source:"@site/docs/requirements.md",permalink:"/k8s-workshop/docs/requirements",editUrl:"https://github.com/stackworx/k8s-workshop/edit/master/website/docs/requirements.md",sidebar:"someSidebar",previous:{title:"Background",permalink:"/k8s-workshop/docs/background"},next:{title:"Getting Started",permalink:"/k8s-workshop/docs/getting-started"}},i=[{value:"Required Tools",id:"required-tools",children:[]},{value:"Enable Docker Kubernetes",id:"enable-docker-kubernetes",children:[{value:"Mac",id:"mac",children:[]},{value:"Kubernetes Plugins",id:"kubernetes-plugins",children:[]},{value:"Quality of Life",id:"quality-of-life",children:[]},{value:"Check list (These should all work)",id:"check-list-these-should-all-work",children:[]}]}],s={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"required-tools"},"Required Tools"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}),"kubectl")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"docker for mac/windows")," with kubernetes enabled"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/"}),"helm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"}),"Krew"))),Object(l.b)("h2",{id:"enable-docker-kubernetes"},"Enable Docker Kubernetes"),Object(l.b)("p",null,"Click on the docker tray icon and select Preferences"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Select Kubernetes"),Object(l.b)("li",{parentName:"ol"},"Click Enable"),Object(l.b)("li",{parentName:"ol"},"Click Apply and Restart")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/static/img/enable-docker-kubernetes.png",alt:"enable-docker-kubernetes"}))),Object(l.b)("h3",{id:"mac"},"Mac"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# Install kubectl\ncurl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl"\n\n# Install helm\nbrew install helm\n\n# Install Krew\n(\n  set -x; cd "$(mktemp -d)" &&\n  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew.{tar.gz,yaml}" &&\n  tar zxvf krew.tar.gz &&\n  KREW=./krew-"$(uname | tr \'[:upper:]\' \'[:lower:]\')_amd64" &&\n  "$KREW" install --manifest=krew.yaml --archive=krew.tar.gz &&\n  "$KREW" update\n)\n# Add krew to PATH\nexport PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"\n')),Object(l.b)("h3",{id:"kubernetes-plugins"},"Kubernetes Plugins"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl krew update\nkubectl krew install ctx\nkubectl krew install ns\nkubectl krew install tail\nkubectl krew install view-secret\n\n")),Object(l.b)("h3",{id:"quality-of-life"},"Quality of Life"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"alias k=kubectl\n")),Object(l.b)("h3",{id:"check-list-these-should-all-work"},"Check list (These should all work)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl cluster-info\nkubectl krew search\nhelm version\n")))}u.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||l;return r?a.a.createElement(m,o({ref:t},s,{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);