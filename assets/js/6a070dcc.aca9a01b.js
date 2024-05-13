"use strict";(self.webpackChunktrustification_io=self.webpackChunktrustification_io||[]).push([[6947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||g[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={title:"How to Configure a Gitsign Cache",authors:"danbev",tags:["sigstore"]},a=void 0,c={permalink:"/blog/2022/12/05/gitsign-cache",editUrl:"https://github.com/trustification/trustification.github.io/tree/main/blog/2022-12-05-gitsign-cache.md",source:"@site/blog/2022-12-05-gitsign-cache.md",title:"How to Configure a Gitsign Cache",description:"This post contains the steps for setting up",date:"2022-12-05T00:00:00.000Z",formattedDate:"December 5, 2022",tags:[{label:"sigstore",permalink:"/blog/tags/sigstore"}],readingTime:1.15,hasTruncateMarker:!0,authors:[{name:"Daniel Bevenius",title:"Maintainer",url:"https://github.com/danbev",imageURL:"https://github.com/danbev.png",key:"danbev"}],frontMatter:{title:"How to Configure a Gitsign Cache",authors:"danbev",tags:["sigstore"]},prevItem:{title:"An Adventure with the CycloneDX Maven Plugin",permalink:"/blog/2022/12/09/cyclonedx-maven-plugin-adventure"},nextItem:{title:"Keyless Git Signing with Sigstore",permalink:"/blog/2022/12/02/sign-commits-with-sigstore"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post contains the steps for setting up\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sigstore/gitsign/tree/main/cmd/gitsign-credential-cache"},"gitsign-credential-cache"),".\nwhich is useful if one has to perform multiple commits in short succession, or\nwhen doing a rebase."))}g.isMDXComponent=!0}}]);