"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8646],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),s=o,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2002:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={title:"v0.4.0 Roadmap"},u=void 0,l={unversionedId:"roadmap/v0.4.0-roadmap",id:"roadmap/v0.4.0-roadmap",isDocsHomePage:!1,title:"v0.4.0 Roadmap",description:"Release Plan: 2021.5",source:"@site/docs/roadmap/v0.4.0-roadmap.md",sourceDirName:"roadmap",slug:"/roadmap/v0.4.0-roadmap",permalink:"/zh/docs/roadmap/v0.4.0-roadmap",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/roadmap/v0.4.0-roadmap.md",tags:[],version:"current",lastUpdatedBy:"Peeknut",lastUpdatedAt:1637131172,formattedLastUpdatedAt:"2021/11/17",frontMatter:{title:"v0.4.0 Roadmap"}},c=[],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Release Plan: 2021.5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Cloud Native IOT Device Management API definition."),(0,a.kt)("li",{parentName:"ul"},"Support IOT Device Management that comply with cloud native IOT API"),(0,a.kt)("li",{parentName:"ul"},"Support autonomy feature in node pool level."),(0,a.kt)("li",{parentName:"ul"},"Support manage configmap in node pool with unique setting."),(0,a.kt)("li",{parentName:"ul"},"Upgrade openyurt components to support Kubernetes 1.18."),(0,a.kt)("li",{parentName:"ul"},"Add basic Pod network recovery mechanism to handle edge node restarts."),(0,a.kt)("li",{parentName:"ul"},"Improve ",(0,a.kt)("inlineCode",{parentName:"li"},"YurtCtl")," user experience."),(0,a.kt)("li",{parentName:"ul"},"Add minimal hardware requirement and system requirement info of OpenYurt.")))}d.isMDXComponent=!0}}]);