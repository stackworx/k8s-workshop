(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(155)),c={title:"Getting Started"},i={id:"getting-started",title:"Getting Started",description:"Make sure you have completed the [requirements](requirements.md) first",source:"@site/docs/getting-started.md",permalink:"/k8s-workshop/docs/getting-started",editUrl:"https://github.com/stackworx/k8s-workshop/edit/master/website/docs/getting-started.md",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/k8s-workshop/docs/requirements"},next:{title:"Manifests",permalink:"/k8s-workshop/docs/manifests"}},s=[{value:"Connect to the cluster",id:"connect-to-the-cluster",children:[]},{value:"View Nodes",id:"view-nodes",children:[]},{value:"View Pods",id:"view-pods",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Make sure you have completed the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/k8s-workshop/docs/requirements"}),"requirements")," first"),Object(a.b)("h2",{id:"connect-to-the-cluster"},"Connect to the cluster"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"k cluster-info\n")),Object(a.b)("h4",{id:"example-output"},"Example Output"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Kubernetes master is running at https://12345.ondigitalocean.com\nCoreDNS is running at https://12345.k8s.ondigitalocean.com/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\n")),Object(a.b)("h2",{id:"view-nodes"},"View Nodes"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"k get nodes\nk get nodes -o wide # show extra info\n")),Object(a.b)("h4",{id:"example-output-1"},"Example Output"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                  STATUS   ROLES    AGE    VERSION\npool-3puojptkz-agmg   Ready    <none>   164d   v1.16.2\n")),Object(a.b)("h2",{id:"view-pods"},"View Pods"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"k get pods\n")),Object(a.b)("h4",{id:"example-output-2"},"Example Output"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                                   READY   STATUS      RESTARTS   AGE\nstackbot-web-public-5db749894f-bvd78   1/1     Running     0          2d10h\nstackbot-web-server-1587960900-6f2ms   0/1     Completed   0          3d14h\nstackbot-web-server-fb945fd4b-xlcvp    1/1     Running     0          2d10h\n")))}u.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return n?o.a.createElement(m,i({ref:t},p,{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);