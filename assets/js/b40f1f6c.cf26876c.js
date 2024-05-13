"use strict";(self.webpackChunktrustification_io=self.webpackChunktrustification_io||[]).push([[6163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),g=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(n),u=o,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var g=2;g<r;g++)a[g]=n[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var i=n(7462),o=(n(7294),n(3905));const r={title:"Keyless Git Signing with Sigstore",authors:"danbev",tags:["sigstore"]},a=void 0,s={permalink:"/blog/2022/12/02/sign-commits-with-sigstore",editUrl:"https://github.com/trustification/trustification.github.io/tree/main/blog/2022-12-02-sign-commits-with-sigstore.md",source:"@site/blog/2022-12-02-sign-commits-with-sigstore.md",title:"Keyless Git Signing with Sigstore",description:"This post contains the steps for setting up",date:"2022-12-02T00:00:00.000Z",formattedDate:"December 2, 2022",tags:[{label:"sigstore",permalink:"/blog/tags/sigstore"}],readingTime:1.715,hasTruncateMarker:!0,authors:[{name:"Daniel Bevenius",title:"Maintainer",url:"https://github.com/danbev",imageURL:"https://github.com/danbev.png",key:"danbev"}],frontMatter:{title:"Keyless Git Signing with Sigstore",authors:"danbev",tags:["sigstore"]},prevItem:{title:"How to Configure a Gitsign Cache",permalink:"/blog/2022/12/05/gitsign-cache"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},g=[{value:"Install gitsign",id:"install-gitsign",level:3},{value:"Configure git",id:"configure-git",level:3},{value:"Commit",id:"commit",level:3},{value:"Verifying a commit",id:"verifying-a-commit",level:3},{value:"Inspect commit signature",id:"inspect-commit-signature",level:3}],c={toc:g},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post contains the steps for setting up\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sigstore/gitsign"},"gitsign")," to sign your git\ncommits using ",(0,o.kt)("a",{parentName:"p",href:"https://www.sigstore.dev/"},"sigstore"),"."),(0,o.kt)("h3",{id:"install-gitsign"},"Install gitsign"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ go install github.com/sigstore/gitsign@latest\n")),(0,o.kt)("p",null,"Or using brew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install sigstore/tap/gitsign\n")),(0,o.kt)("h3",{id:"configure-git"},"Configure git"),(0,o.kt)("p",null,"The collowing will configure signing for the current project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"#!/bin/bash\n\n# Sign all commits\ngit config --local commit.gpgsign true\n\n# Sign all tags\ngit config --local tag.gpgsign true\n\n# Use gitsign for signing\ngit config --local gpg.x509.program gitsign\n\n# gitsign expects x509 args\ngit config --local gpg.format x509\n")),(0,o.kt)("p",null,"To configure for all projects, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"#!/bin/bash\n\n# Sign all commits\ngit config --global commit.gpgsign true\n\n# Sign all tags\ngit config --global tag.gpgsign true\n\n# Use gitsign for signing\ngit config --global gpg.x509.program gitsign\n\n# gitsign expects x509 args\ngit config --global gpg.format x509\n")),(0,o.kt)("h3",{id:"commit"},"Commit"),(0,o.kt)("p",null,"Now when you commit, ",(0,o.kt)("inlineCode",{parentName:"p"},"gitsign")," will be used to start an Open ID\nConnect (OIDC) flow. This will allow you to choose an OIDC provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ git commit -v\nYour browser will now be opened to:\nhttps://oauth2.sigstore.dev/auth/auth?access_type=online&client_id=sigstore&code_challenge=eQvdw56pTgXnkj76Cab-4ZWaKk8XFM6UFFBdayKQX1Y&code_challenge_method=S256&nonce=2GmBDq86TMNuz8VhMUixMxiPSe2&redirect_uri=http%3A%2F%2Flocalhost%3A39617%2Fauth%2Fcallback&response_type=code&scope=openid+email&state=2GmBDlYDps5Ywd8dX4Ebwo4VnQL\n[master 4292869] Add initial Oniro notes\n 1 file changed, 10 insertions(+)\n create mode 100644 notes/oniro.md\n")),(0,o.kt)("p",null,"Note that on github this commit will be marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"Unverified")," because\nthe sigstore Certificate Authority root is not part of Github's trust\nroot. Further, validation needs to be done using Rekor to verify that\nthe certificate was valid at the time this commit was signed."),(0,o.kt)("p",null,"To avoid having to choose an auth provider each time, set the following environment variable. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ export GITSIGN_CONNECTOR_ID=https://github.com/login/oauth\n")),(0,o.kt)("h3",{id:"verifying-a-commit"},"Verifying a commit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ git verify-commit HEAD\n")),(0,o.kt)("p",null,"If verified, you'll see output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"tlog index: 6058402\ngitsign: Signature made using certificate ID 0xb073e00bfabd4fb9988b9e1e0896dcfc1527fcdb | CN=sigstore-intermediate,O=sigstore.dev\ngitsign: Good signature from [daniel.bevenius@gmail.com]\nValidated Git signature: true\nValidated Rekor entry: true\n")),(0,o.kt)("h3",{id:"inspect-commit-signature"},"Inspect commit signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ git cat-file commit HEAD \\\n  | sed -n '/BEGIN/, /END/p' \\\n  | sed 's/^ //g' \\\n  | sed 's/gpgsig //g' \\\n  | sed 's/SIGNED MESSAGE/PKCS7/g' \\\n  | openssl pkcs7 -print -print_certs -text\n")))}m.isMDXComponent=!0}}]);