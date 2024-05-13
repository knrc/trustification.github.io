"use strict";(self.webpackChunktrustification_io=self.webpackChunktrustification_io||[]).push([[7357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,b=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(b,r(r({ref:t},p),{},{components:n})):a.createElement(b,r({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const s={title:"in-toto attestations",authors:"danbev",tags:[]},r=void 0,o={permalink:"/blog/2023/03/13/in-toto-attestations",editUrl:"https://github.com/trustification/trustification.github.io/tree/main/blog/2023-03-13-in-toto-attestations.md",source:"@site/blog/2023-03-13-in-toto-attestations.md",title:"in-toto attestations",description:"When we sign an artifact, like a blob, the signature proves that we were in",date:"2023-03-13T00:00:00.000Z",formattedDate:"March 13, 2023",tags:[],readingTime:7.425,hasTruncateMarker:!0,authors:[{name:"Daniel Bevenius",title:"Maintainer",url:"https://github.com/danbev",imageURL:"https://github.com/danbev.png",key:"danbev"}],frontMatter:{title:"in-toto attestations",authors:"danbev",tags:[]},prevItem:{title:"The CycloneDX Maven Aggregate SBOM and why you shouldn't trust it (yet)",permalink:"/blog/2023/03/20/cyclonedx-maven-aggregate-bom-why-not-to-trust"},nextItem:{title:"Signing elf binaries, or not?! Lessons learned.",permalink:"/blog/2023/02/13/elfsign"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When we sign an artifact, like a blob, the signature proves that we were in\npossesion of the private key. When we verify, we use the signature, the public\nkey, and the blob, and we are verifying that this was in fact the case. But it\ndoes not say anything else about the artifact, we don't know ",(0,i.kt)("inlineCode",{parentName:"p"},"what")," was actually\nsigned."),(0,i.kt)("p",null,"By providing, and signing a document specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"statements")," about the artifact\nwe can say things about the artifact as well. Statements could be anything which\nwe will address later in this document. A signed Statement is called an\nAttestation."),(0,i.kt)("p",null,"An attestation is authenticated metadata about software artifacts and follows\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://slsa.dev/attestation-model"},"Software-chain Levels for Software Artifacts attestation model"),"."),(0,i.kt)("p",null,"An attestation can be json object, and the outer-most element is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Envelope"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payloadType": "application/vnd.in-toto+json",\n  "payload": "<Base64(Statement)>",\n  "signatures": [{ "sig": "<Base64(Signature)>" }]\n}\n')),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," is a base64 encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"Statement"),". This format follows\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/secure-systems-lab/dsse"},"DSSE")," format."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"payloadType")," could be JSON, CBOR, or ProtoBuf."),(0,i.kt)("p",null,"The structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Statement"),", in payload element above, looks something\nlike this (before it is base64 encoded):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_type": "https://in-toto.io/Statement/v0.1",\n  "subject": [\n    {\n      "name": "<NAME>",\n      "digest": { "<ALGORITHM>": "<HEX_VALUE>" }\n    }\n  ],\n  "predicateType": "<URI>",\n  "predicate": {}\n}\n')),(0,i.kt)("p",null,"The subjects bind this attestation to a set of software artifacts, notice that\nthis is an array of objects."),(0,i.kt)("p",null,"Each software artifact is given a name and a digest. The digest contains the\nname of the hashing algorithm used, and the digest (the outcome of the hash\nfunction).\nThe name could be a file name but it can also be left unspecified using ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"."),(0,i.kt)("p",null,"This leads us to the ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate")," fields, which like shown above has one field\nfor the type of the predicate (predicateType), and an object as the content of\nthe predicate."),(0,i.kt)("p",null,"The predicate can contain pretty much any metadata related to the Statement\nobject's subjects. The ",(0,i.kt)("inlineCode",{parentName:"p"},"predicateType")," provides a way of knowing how to\ninterpret the ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate")," field."),(0,i.kt)("p",null,"Examples of predicate types are\n",(0,i.kt)("a",{parentName:"p",href:"https://slsa.dev/provenance/v0.1#example"},"SLSA Provenance"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/in-toto/attestation/blob/main/spec/predicates/link.md"},"in-toto Link"),"\n, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/in-toto/attestation/blob/main/spec/predicates/spdx.md"},"SPDX"),"\n, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/in-toto/attestation/blob/main/spec/predicates/scai.md"},"Software Supply Chain Attribute Integrity (SCAI)"),"."),(0,i.kt)("p",null,"NPM also uses this for it to publish ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/npm/rfcs/blob/main/accepted/0049-link-packages-to-source-and-build.md#slsa-provenance-schema"},"attestations"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_type": "https://in-toto.io/Statement/v0.1",\n  "subject": [\n    {\n      "name": "pkg:npm/@scope/package-foo@1.4.3",\n      "digest": { "sha512": "41o0P/CEffYGDqvo2pHQXRBOfFOxvYY3WkwkQTy..." }\n    }\n  ],\n  "predicateType": "https://github.com/npm/attestation/tree/main/specs/publish/v0.1",\n  "predicate": {\n    "name": "@scope/package-foo",\n    "version": "1.4.3",\n    "registry": "https://registry.npmjs.org"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"digest")," in this case is the sha512sum of the published tar file."),(0,i.kt)("p",null,"So, we mentioned that the predicate type is used by the consumer of the\npredicate so it knows how to interpret the contents of the predicate. But who\nis the consumer?",(0,i.kt)("br",{parentName:"p"}),"\n","Most often this would be a Policy Engine. The Policy engine would be passed\nthe contents of the Statement related to the predicate, and rules written in\nthe Policy Engine's language would process the predicate as input. The outcome\nwould be a true/false result (remember that a predicate is a statement/function\nthat returns true or false)."),(0,i.kt)("p",null,"To try to make this a little more concrete lets take a look at an example\nthat creates an attestation."),(0,i.kt)("p",null,"For this example I'm going to use a GitHub Action named\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/slsa-framework/slsa-github-generator/blob/main/internal/builders/generic/README.md"},"slsa-github-generator")," which can generate SLSA provenance attestations for\ngithub native projects. This generator can generate SLSA provenance for SLSA\nlevel 3."),(0,i.kt)("p",null,"The example project I'm going to use is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/danbev/tuf-keyid"},"tuf-keyid"),"\nbut the actual project is not important in this case, any Rust project could\nhave been used."),(0,i.kt)("p",null,"So we need to set up a GitHub Action which can been seen in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/danbev/tuf-keyid/blob/main/.github/workflows/provenance.yaml"},"provenance.yaml"),"."),(0,i.kt)("p",null,"After that workflow has run it will produce an attestation and a binary which\nwe will use to verify."),(0,i.kt)("p",null,"First, we need to download the binary from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/danbev/tuf-keyid/actions/runs/4015220869"},"workflow run")," (we should really\nbe able to be download this from the releases page too, but I've not been able\nto get that to work just yet):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ unzip tuf-keyid.zip\n$ file tuf-keyid\ntuf-keyid: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=ceaa62d49b024798ebd7fe7d021f3ade5925b1f9, for GNU/Linux 3.2.0, with debug_info, not stripped\n")),(0,i.kt)("p",null,"And then we need to download the attestation file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ curl -L https://github.com/danbev/tuf-keyid/releases/download/v0.2.0/tuf-keyid.intoto.jsonl --output tuf-keyid.intoto.jsonl\n")),(0,i.kt)("p",null,"Lets inspect the attestation file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ cat tuf-keyid.intoto.jsonl | jq\n{\n  "payloadType": "application/vnd.in-toto+json",\n  "payload": "...",\n  "signatures": [\n    {\n      "keyid": "",\n      "sig": "MEUCIHwmJopmrXWqi+rKIeTlWW0r027hLL1nO7xEj0mW8czsAiEAhdc6SDlhWo3m0YOtsUSoIYSlvw3Xu7ts3S8btHzdMpw=",\n      "cert": "-----BEGIN CERTIFICATE-----\\nMIIDtjCCAzygAwIBAgIUCeak2sfkfZbS0IMRSbK4+BHcUzAwCgYIKoZIzj0EAwMw\\nNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRl\\ncm1lZGlhdGUwHhcNMjMwMTI2MTAxMzQxWhcNMjMwMTI2MTAyMzQxWjAAMFkwEwYH\\nKoZIzj0CAQYIKoZIzj0DAQcDQgAEZMurC3H80wzo+Xn7uifeTDV/AAFnye8uFwEj\\n5VmxJb30VzuEw8gD8/Dj4V79bIW9sePcZjvREhFWak+PhUZVMqOCAlswggJXMA4G\\nA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUncOT\\nSyRyKgylBYlUHwPF+EyemfkwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4Y\\nZD8wgYQGA1UdEQEB/wR6MHiGdmh0dHBzOi8vZ2l0aHViLmNvbS9zbHNhLWZyYW1l\\nd29yay9zbHNhLWdpdGh1Yi1nZW5lcmF0b3IvLmdpdGh1Yi93b3JrZmxvd3MvZ2Vu\\nZXJhdG9yX2dlbmVyaWNfc2xzYTMueW1sQHJlZnMvdGFncy92MS40LjAwOQYKKwYB\\nBAGDvzABAQQraHR0cHM6Ly90b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50\\nLmNvbTASBgorBgEEAYO/MAECBARwdXNoMDYGCisGAQQBg78wAQMEKDUxM2IwZTA2\\nMGM3NmExZGVkN2IxYTQxNzMxNjUxMDM4MzhmOGRkZTcwFQYKKwYBBAGDvzABBAQH\\nUHVibGlzaDAeBgorBgEEAYO/MAEFBBBkYW5iZXYvdHVmLWtleWlkMB4GCisGAQQB\\ng78wAQYEEHJlZnMvdGFncy92MC4yLjAwgYoGCisGAQQB1nkCBAIEfAR6AHgAdgDd\\nPTBqxscRMmMZHhyZZzcCokpeuN48rf+HinKALynujgAAAYXtkZ+vAAAEAwBHMEUC\\nIQDgO+S94sXq3wcfg344IV8FRhynvsJsVFEfHmwOHGqAVgIgArfX+7pnaLrplJ0u\\nXB6tlWaCxQJ7GAo9YByqXCa0b2gwCgYIKoZIzj0EAwMDaAAwZQIxAOYkXbpLbSqC\\njdORW6lWGWB/Ts2aOhK7VAHaQCRgRHQGiZx4Pe/LCwqkQF/1W2BAEQIwLB9Ic2jt\\nIiEjtw8xKFDQAfnUleNUtZ51LXgXEkdpIX9cnj4UdR6k4gu/wul16Bd8\\n-----END CERTIFICATE-----\\n"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"If we look back at the beginning of this document we will see that this format\nmatches the ",(0,i.kt)("inlineCode",{parentName:"p"},"Envelope")," of the attestation, and we have the ",(0,i.kt)("inlineCode",{parentName:"p"},"payloadType"),",\na ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"signatures"),"."),(0,i.kt)("p",null,"The certificate can be inspected using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ cat tuf-keyid.intoto.jsonl | jq -r '.signatures[].cert' | openssl x509 --text\n")),(0,i.kt)("p",null,"Recall that the payload is a base64 encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"Statement"),". Let's decode the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Statement")," and take a closer a look at it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ cat tuf-keyid.intoto.jsonl | jq -r \'.payload\' | base64 -d | jq\n{\n  "_type": "https://in-toto.io/Statement/v0.1",\n  "predicateType": "https://slsa.dev/provenance/v0.2",\n  "subject": [\n    {\n      "name": "tuf-keyid",\n      "digest": {\n        "sha256": "470c549740f98fe1b1977d48e014031ed5183785fd459df7e04605daefe8e293"\n      }\n    }\n  ],\n  "predicate": {\n    "builder": {\n      "id": "https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v1.4.0"\n    },\n    "buildType": "https://github.com/slsa-framework/slsa-github-generator/generic@v1",\n    "invocation": {\n      "configSource": {\n        "uri": "git+https://github.com/danbev/tuf-keyid@refs/tags/v0.2.0",\n        "digest": {\n          "sha1": "513b0e060c76a1ded7b1a4173165103838f8dde7"\n        },\n        "entryPoint": ".github/workflows/provenance.yaml"\n      },\n      "parameters": {},\n      "environment": {\n        "github_actor": "danbev",\n        "github_actor_id": "432351",\n        "github_base_ref": "",\n        "github_event_name": "push",\n        "github_event_payload": {\n          "after": "13c69c54cbd04d1920cc5e42441f0a693a371494",\n          "base_ref": null,\n          "before": "0000000000000000000000000000000000000000",\n          "commits": [],\n          "compare": "https://github.com/danbev/tuf-keyid/compare/v0.2.0",\n          "created": true,\n          "deleted": false,\n          "forced": false,\n          "head_commit": {\n            "author": {\n              "email": "daniel.bevenius@gmail.com",\n              "name": "Daniel Bevenius",\n              "username": "danbev"\n            },\n            "committer": {\n              "email": "daniel.bevenius@gmail.com",\n              "name": "Daniel Bevenius",\n              "username": "danbev"\n            },\n            "distinct": true,\n            "id": "513b0e060c76a1ded7b1a4173165103838f8dde7",\n            "message": "Add content(releases) write permission\\n\\nSigned-off-by: Daniel Bevenius <daniel.bevenius@gmail.com>",\n            "timestamp": "2023-01-26T11:09:02+01:00",\n            "tree_id": "5030177fa47fc8b8252c26e8556083b4abc5df71",\n            "url": "https://github.com/danbev/tuf-keyid/commit/513b0e060c76a1ded7b1a4173165103838f8dde7"\n          },\n          "pusher": {\n            "email": "daniel.bevenius@gmail.com",\n            "name": "danbev"\n          },\n          "ref": "refs/tags/v0.2.0",\n          "repository": {\n            "allow_forking": true,\n            "archive_url": "https://api.github.com/repos/danbev/tuf-keyid/{archive_format}{/ref}",\n            "archived": false,\n            "assignees_url": "https://api.github.com/repos/danbev/tuf-keyid/assignees{/user}",\n            "blobs_url": "https://api.github.com/repos/danbev/tuf-keyid/git/blobs{/sha}",\n            "branches_url": "https://api.github.com/repos/danbev/tuf-keyid/branches{/branch}",\n            "clone_url": "https://github.com/danbev/tuf-keyid.git",\n            "collaborators_url": "https://api.github.com/repos/danbev/tuf-keyid/collaborators{/collaborator}",\n            "comments_url": "https://api.github.com/repos/danbev/tuf-keyid/comments{/number}",\n            "commits_url": "https://api.github.com/repos/danbev/tuf-keyid/commits{/sha}",\n            "compare_url": "https://api.github.com/repos/danbev/tuf-keyid/compare/{base}...{head}",\n            "contents_url": "https://api.github.com/repos/danbev/tuf-keyid/contents/{+path}",\n            "contributors_url": "https://api.github.com/repos/danbev/tuf-keyid/contributors",\n            "created_at": 1674117641,\n            "default_branch": "main",\n            "deployments_url": "https://api.github.com/repos/danbev/tuf-keyid/deployments",\n            "description": "A command line tool to print the key id for a TUF public key in JSON format.",\n            "disabled": false,\n            "downloads_url": "https://api.github.com/repos/danbev/tuf-keyid/downloads",\n            "events_url": "https://api.github.com/repos/danbev/tuf-keyid/events",\n            "fork": false,\n            "forks": 0,\n            "forks_count": 0,\n            "forks_url": "https://api.github.com/repos/danbev/tuf-keyid/forks",\n            "full_name": "danbev/tuf-keyid",\n            "git_commits_url": "https://api.github.com/repos/danbev/tuf-keyid/git/commits{/sha}",\n            "git_refs_url": "https://api.github.com/repos/danbev/tuf-keyid/git/refs{/sha}",\n            "git_tags_url": "https://api.github.com/repos/danbev/tuf-keyid/git/tags{/sha}",\n            "git_url": "git://github.com/danbev/tuf-keyid.git",\n            "has_discussions": false,\n            "has_downloads": true,\n            "has_issues": true,\n            "has_pages": false,\n            "has_projects": true,\n            "has_wiki": true,\n            "homepage": null,\n            "hooks_url": "https://api.github.com/repos/danbev/tuf-keyid/hooks",\n            "html_url": "https://github.com/danbev/tuf-keyid",\n            "id": 590801502,\n            "is_template": false,\n            "issue_comment_url": "https://api.github.com/repos/danbev/tuf-keyid/issues/comments{/number}",\n            "issue_events_url": "https://api.github.com/repos/danbev/tuf-keyid/issues/events{/number}",\n            "issues_url": "https://api.github.com/repos/danbev/tuf-keyid/issues{/number}",\n            "keys_url": "https://api.github.com/repos/danbev/tuf-keyid/keys{/key_id}",\n            "labels_url": "https://api.github.com/repos/danbev/tuf-keyid/labels{/name}",\n            "language": "Rust",\n            "languages_url": "https://api.github.com/repos/danbev/tuf-keyid/languages",\n            "license": null,\n            "master_branch": "main",\n            "merges_url": "https://api.github.com/repos/danbev/tuf-keyid/merges",\n            "milestones_url": "https://api.github.com/repos/danbev/tuf-keyid/milestones{/number}",\n            "mirror_url": null,\n            "name": "tuf-keyid",\n            "node_id": "R_kgDOIzbqXg",\n            "notifications_url": "https://api.github.com/repos/danbev/tuf-keyid/notifications{?since,all,participating}",\n            "open_issues": 0,\n            "open_issues_count": 0,\n            "owner": {\n              "avatar_url": "https://avatars.githubusercontent.com/u/432351?v=4",\n              "email": "daniel.bevenius@gmail.com",\n              "events_url": "https://api.github.com/users/danbev/events{/privacy}",\n              "followers_url": "https://api.github.com/users/danbev/followers",\n              "following_url": "https://api.github.com/users/danbev/following{/other_user}",\n              "gists_url": "https://api.github.com/users/danbev/gists{/gist_id}",\n              "gravatar_id": "",\n              "html_url": "https://github.com/danbev",\n              "id": 432351,\n              "login": "danbev",\n              "name": "danbev",\n              "node_id": "MDQ6VXNlcjQzMjM1MQ==",\n              "organizations_url": "https://api.github.com/users/danbev/orgs",\n              "received_events_url": "https://api.github.com/users/danbev/received_events",\n              "repos_url": "https://api.github.com/users/danbev/repos",\n              "site_admin": false,\n              "starred_url": "https://api.github.com/users/danbev/starred{/owner}{/repo}",\n              "subscriptions_url": "https://api.github.com/users/danbev/subscriptions",\n              "type": "User",\n              "url": "https://api.github.com/users/danbev"\n            },\n            "private": false,\n            "pulls_url": "https://api.github.com/repos/danbev/tuf-keyid/pulls{/number}",\n            "pushed_at": 1674727856,\n            "releases_url": "https://api.github.com/repos/danbev/tuf-keyid/releases{/id}",\n            "size": 21,\n            "ssh_url": "git@github.com:danbev/tuf-keyid.git",\n            "stargazers": 1,\n            "stargazers_count": 1,\n            "stargazers_url": "https://api.github.com/repos/danbev/tuf-keyid/stargazers",\n            "statuses_url": "https://api.github.com/repos/danbev/tuf-keyid/statuses/{sha}",\n            "subscribers_url": "https://api.github.com/repos/danbev/tuf-keyid/subscribers",\n            "subscription_url": "https://api.github.com/repos/danbev/tuf-keyid/subscription",\n            "svn_url": "https://github.com/danbev/tuf-keyid",\n            "tags_url": "https://api.github.com/repos/danbev/tuf-keyid/tags",\n            "teams_url": "https://api.github.com/repos/danbev/tuf-keyid/teams",\n            "topics": [],\n            "trees_url": "https://api.github.com/repos/danbev/tuf-keyid/git/trees{/sha}",\n            "updated_at": "2023-01-19T10:26:19Z",\n            "url": "https://github.com/danbev/tuf-keyid",\n            "visibility": "public",\n            "watchers": 1,\n            "watchers_count": 1,\n            "web_commit_signoff_required": false\n          },\n          "sender": {\n            "avatar_url": "https://avatars.githubusercontent.com/u/432351?v=4",\n            "events_url": "https://api.github.com/users/danbev/events{/privacy}",\n            "followers_url": "https://api.github.com/users/danbev/followers",\n            "following_url": "https://api.github.com/users/danbev/following{/other_user}",\n            "gists_url": "https://api.github.com/users/danbev/gists{/gist_id}",\n            "gravatar_id": "",\n            "html_url": "https://github.com/danbev",\n            "id": 432351,\n            "login": "danbev",\n            "node_id": "MDQ6VXNlcjQzMjM1MQ==",\n            "organizations_url": "https://api.github.com/users/danbev/orgs",\n            "received_events_url": "https://api.github.com/users/danbev/received_events",\n            "repos_url": "https://api.github.com/users/danbev/repos",\n            "site_admin": false,\n            "starred_url": "https://api.github.com/users/danbev/starred{/owner}{/repo}",\n            "subscriptions_url": "https://api.github.com/users/danbev/subscriptions",\n            "type": "User",\n            "url": "https://api.github.com/users/danbev"\n          }\n        },\n        "github_head_ref": "",\n        "github_ref": "refs/tags/v0.2.0",\n        "github_ref_type": "tag",\n        "github_repository_id": "590801502",\n        "github_repository_owner": "danbev",\n        "github_repository_owner_id": "432351",\n        "github_run_attempt": "1",\n        "github_run_id": "4014167952",\n        "github_run_number": "13",\n        "github_sha1": "513b0e060c76a1ded7b1a4173165103838f8dde7"\n      }\n    },\n    "metadata": {\n      "buildInvocationID": "4014167952-1",\n      "completeness": {\n        "parameters": true,\n        "environment": false,\n        "materials": false\n      },\n      "reproducible": false\n    },\n    "materials": [\n      {\n        "uri": "git+https://github.com/danbev/tuf-keyid@refs/tags/v0.2.0",\n        "digest": {\n          "sha1": "513b0e060c76a1ded7b1a4173165103838f8dde7"\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"So that gives us a concrete example of an attestation and in this case it is\na ",(0,i.kt)("a",{parentName:"p",href:"https://slsa.dev/provenance/v0.1"},"SLSA Provenance"),"."),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"digest")," in the subject array is the sha256sum of the tuf-keyid\nbinary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ cat tuf-keyid.intoto.jsonl | jq -r '.payload' | base64 -d | jq -r '.subject[].digest.sha256'\n470c549740f98fe1b1977d48e014031ed5183785fd459df7e04605daefe8e293\n$ sha256sum tuf-keyid\n470c549740f98fe1b1977d48e014031ed5183785fd459df7e04605daefe8e293  tuf-keyid\n")),(0,i.kt)("p",null,"Alright, so next step if to verify the binary that we produced, using the\nattestation."),(0,i.kt)("p",null,"There is project named ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/slsa-framework/slsa-verifier#example"},"slsa-verifier")," which can be used to verify the artifact.\nInstalling ",(0,i.kt)("inlineCode",{parentName:"p"},"slsa-verifier"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ go install github.com/slsa-framework/slsa-verifier/v2/cli/slsa-verifier@v2.0.1\n")),(0,i.kt)("p",null,"Let's try verifying the attestation using ",(0,i.kt)("inlineCode",{parentName:"p"},"slsa-verifier")," and using a local\nbuild of the binary, that is, a local build on my laptop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ slsa-verifier verify-artifact --provenance-path tuf-keyid.intoto.jsonl \\\n  --source-uri github.com/danbev/tuf-keyid \\\n   ~/work/rust/tuf-keyid/target/release/tuf-keyid\nVerified signature against tlog entry index 11978552 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a217b8f07bccab3dc8caa1c7badf65f104a762647e5e355db23ccc13a22e275dd\nFAILED: SLSA verification failed: expected hash '32dcff46ec4be5462a66aeb5d82366da3b870d36796f3d1fe6fec6245f21ce6f' not found: artifact hash does not match provenance subject\n")),(0,i.kt)("p",null,"And now let's see what happens when we try with the binary that was produced by\nthe GitHub action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ slsa-verifier verify-artifact --provenance-path tuf-keyid.intoto.jsonl \\\n  --source-uri github.com/danbev/tuf-keyid \\\n   tuf-keyid\nVerified signature against tlog entry index 11978552 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a217b8f07bccab3dc8caa1c7badf65f104a762647e5e355db23ccc13a22e275dd\nVerified build using builder https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v1.4.0 at commit 513b0e060c76a1ded7b1a4173165103838f8dde7\nPASSED: Verified SLSA provenance\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"slsa-verifier")," can also print out the predicate information after validation\n, using ",(0,i.kt)("inlineCode",{parentName:"p"},"--print-provenance"),", which could then be passed to a Policy Engine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ slsa-verifier verify-artifact --provenance-path tuf-keyid.intoto.jsonl \\\n  --source-uri github.com/danbev/tuf-keyid \\\n  --print-provenance \\\n  tuf-keyid\n")))}c.isMDXComponent=!0}}]);