if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>d(e,r),b={module:{uri:r},exports:s,require:f};i[r]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(a(...e),s)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"668fec250d5acf0474042578b8d2a5c2"},{url:"about/index.html",revision:"8f67cf03f3077327eb25154f6ba3afbe"},{url:"archives/2022/02/index.html",revision:"f9b5e2f0a69397caa80dc93fab8058a2"},{url:"archives/2022/02/page/2/index.html",revision:"14f4bca1b526fcc94ae076894c0d65ee"},{url:"archives/2022/index.html",revision:"f467601ca1997297d3de462acc1b8a64"},{url:"archives/2022/page/2/index.html",revision:"82d7340d02851390b56555421bc2882b"},{url:"archives/index.html",revision:"13a01f3acdd44c8727bcdfa77a5a04f8"},{url:"archives/page/2/index.html",revision:"fbfe454c1bc9ac94b669ead663434ba5"},{url:"artitalk/index.html",revision:"2225a1fca84a1e54eee825ce5c654ef8"},{url:"categories/Git/index.html",revision:"828960be8c8d77366edbd9ecea7c4379"},{url:"categories/Hexo/index.html",revision:"052bd769db5dc805fc7d7263105ac052"},{url:"categories/index.html",revision:"fb61d1c827a66af151f338e07c1000f0"},{url:"css/index.css",revision:"ed86a775072b9054774d6a8d4a016dd7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"308418917ebda17537ee97dd0c5106e5"},{url:"daodao/index.html",revision:"50c02c16cfe7bad74ca818f531c8c8da"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"588dedb58685ee32a52aa5962796a7a4"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"0a40b1156ecf5551371fdcd29c6bdc27"},{url:"link/index.html",revision:"435a8710c74c2a84f5c993f1524b7270"},{url:"page/2/index.html",revision:"dc5afb464a2e5feb8ef19368b10c4164"},{url:"post/21edfb2b.html",revision:"1eb64ba8b2bff4fef772f0bc0034d0ba"},{url:"post/260f1aad.html",revision:"0bc5cda93ccea25b1130a11ea6e3da31"},{url:"post/2fb95686.html",revision:"cd75a520cb26a61578bf03439e13fd11"},{url:"post/51082a3b.html",revision:"d7078450522024d4a75b5d64e036c452"},{url:"post/5665ee22.html",revision:"4b74898a26e8ebd3cc7e7ca7a7e3e498"},{url:"post/58be6610.html",revision:"afb4569cb232fdea27d49fd60c69dd63"},{url:"post/6977acaf.html",revision:"fdc91648d0d8296bc4cef2bd5ef91bea"},{url:"post/b86b8f0e.html",revision:"13303b89b3f11ff7eb19a7fc00b0bc8e"},{url:"post/bf064b17.html",revision:"baad021933cb002f3cedf51c2af2294a"},{url:"post/c8017b81.html",revision:"05e6d1521b666f57420daf5f0455b75d"},{url:"post/cf6cbf98.html",revision:"b603ac6bff3b157aeb351b505723a0f6"},{url:"tags/Git/index.html",revision:"18d0e5d1e419fe42e582bc4c626cd603"},{url:"tags/index.html",revision:"1f853c168a02234f777db1d0eb5508d4"},{url:"tags/博客/index.html",revision:"5d75d0ed665cb5e2a5269d1bd02d63b9"},{url:"tags/杂乱知识点/index.html",revision:"889d12e54a3b283ad239c8d71ffa7a72"}],{})}));
//# sourceMappingURL=service-worker.js.map
