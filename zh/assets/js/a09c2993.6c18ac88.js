"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Introduction",slug:"/"},u=void 0,p={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is OpenYurt?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Peeknut",lastUpdatedAt:1637131172,formattedLastUpdatedAt:"2021/11/17",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Manually Setup",permalink:"/zh/docs/manually-setup"}},s=[{value:"What is OpenYurt?",id:"what-is-openyurt",children:[],level:2},{value:"Key features",id:"key-features",children:[],level:2},{value:"Why OpenYurt?",id:"why-openyurt",children:[],level:2},{value:"What&#39;s Next",id:"whats-next",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-openyurt"},"What is OpenYurt?"),(0,o.kt)("p",null,'OpenYurt follows the philosophy of "integrating cloud and edge". It is an open platform that embraces the powerful\norchestration capabilities of upstream Kubernetes. OpenYurt empowers users to manage large scale edge computing\nworkloads with ease. Users can deliver, manage and monitor the edge workloads using the same upstream Kubernetes APIs. '),(0,o.kt)("p",null,"From the architectural perspective, OpenYurt provides edge computing capabilities via add-on mechanism rather than\nchanging the upstream Kubernetes components. It is an open source project under Apache 2.0 License. Welcome to join us!"),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Edge Autonomy")),(0,o.kt)("p",{parentName:"li"},"When edge nodes are offline or the cloud-to-node networking is not stable, it is important to make sure the workloads\nare not being disrupted. When the connection resumes, the status of edge workloads will be synced with the cloud\ncontrol plane and remain consistent.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Edge and Cloud Synchronization")),(0,o.kt)("p",{parentName:"li"},"OpenYurt provides mutually encrypted tunnel and reverse proxy between edge nodes and the cloud control plane.\nWhen ingress traffic is blocked due to networking policy, the cloud control plane can still retrieve heartbeat and\nmonitor the workloads. And users will still be able to use Kubectl and other monitoring tools such as prometheus,\nmetrics-server to manage and monitor the edge workloads.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Edge Zoning Unit")),(0,o.kt)("p",{parentName:"li"},"OpenYurt allows users to group workloads into different units distributed in different geo-locations. Out of box,\nOpenYurt is able to provide users individual lifecycle management and operational policies based on the unit zoning.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Seamless Conversion")),(0,o.kt)("p",{parentName:"li"},"With yurtctl, a CLI tool, users can easily convert an upstream Kubernetes cluster into an OpenYurt one, and vice versa.\nThe add-ons by OpenYurt is low maintenance as well."))),(0,o.kt)("h2",{id:"why-openyurt"},"Why OpenYurt?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Kubernetes native")),(0,o.kt)("p",{parentName:"li"},"  OpenYurt is fully compatible with upstream Kubernetes. It supports all Kubernetes APIs as well as all the Workload\ntypes, Service, CSI plugin etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Highly reliable")),(0,o.kt)("p",{parentName:"li"},"  Built upon edge autonomy and zoning unit, OpenYurt ensures high reliability in large scaled use cases.\nIt supports most popular AI platforms\uff0csuch as Tensorflow and Pytorch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Platform agnostic")),(0,o.kt)("p",{parentName:"li"},"OpenYurt can be deployed on any Kubernetes cluster in public cloud or onprem datacenter.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supports different edge architectures")),(0,o.kt)("p",{parentName:"li"},"OpenYurt supports arm, arm64 and x86 edge nodes."))),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"Here are some recommended next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start to ",(0,o.kt)("a",{parentName:"li",href:"./manually-setup"},"install OpenYurt"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn OpenYurt's ",(0,o.kt)("a",{parentName:"li",href:"core-concepts/architecture"},"Architecture"),".")))}d.isMDXComponent=!0}}]);