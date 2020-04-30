(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),c=r(9),o=(r(0),r(155)),a={title:"Services, Load Balancing, and Networking"},i={id:"services",title:"Services, Load Balancing, and Networking",description:"```yaml",source:"@site/docs/services.md",permalink:"/k8s-workshop/docs/services",editUrl:"https://github.com/stackworx/k8s-workshop/edit/master/website/docs/services.md",sidebar:"someSidebar",previous:{title:"Pods",permalink:"/k8s-workshop/docs/pods"},next:{title:"Workloads",permalink:"/k8s-workshop/docs/workloads"}},s=[{value:"Exercise",id:"exercise",children:[]},{value:"Change the service type",id:"change-the-service-type",children:[]},{value:"Ingress",id:"ingress",children:[]},{value:"References",id:"references",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: echosvc\nspec:\n  selector:\n    app: echo\n  ports:\n    - protocol: TCP\n      port: 9090 # Published Port\n      targetPort: 8080 # Exposed port in the container\n")),Object(o.b)("h3",{id:"exercise"},"Exercise"),Object(o.b)("p",null,"Save the above content in a file name ",Object(o.b)("inlineCode",{parentName:"p"},"svc.yaml")," and run"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"k apply -f svc.yaml\nk port-forward service/echosvc 9090:9090\nkubectl get endpoints echosvc\n")),Object(o.b)("h3",{id:"change-the-service-type"},"Change the service type"),Object(o.b)("h4",{id:"nodeport"},"NodePort"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: echosvc\nspec:\n  type: NodePort\n  selector:\n    app: echo\n  ports:\n    - protocol: TCP\n      port: 9090 # Published Port\n      targetPort: 8080 # Exposed port in the container\n      # By default and for convenience, the Kubernetes control plane will allocate a port from a range (default: 30000-32767)\n      nodePort: 30007\n")),Object(o.b)("h4",{id:"loadbalancer"},"LoadBalancer"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: echosvc\nspec:\n  type: LoadBalancer\n  selector:\n    app: echo\n  ports:\n    - protocol: TCP\n      port: 9090 # Published Port\n      targetPort: 8080 # Exposed port in the container\n")),Object(o.b)("h3",{id:"ingress"},"Ingress"),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/#service-resource"}),"https://kubernetes.io/docs/concepts/services-networking/service/#service-resource")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/"}),"https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"}),"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"))))}l.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,v=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return r?c.a.createElement(v,i({ref:t},p,{components:r})):c.a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);