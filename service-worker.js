if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const a=e=>d(e,s),l={module:{uri:s},exports:f,require:a};i[s]=Promise.all(r.map((e=>l[e]||a(e)))).then((e=>(c(...e),f)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"bd98fafd938d74dbfbd4893796c2d6d0"},{url:"about/index.html",revision:"f73016b2f146daae11bfaaa6f0cdbb61"},{url:"archives/2022/02/index.html",revision:"6d1936417b3e3feec78a0efe3a4eb3c1"},{url:"archives/2022/02/page/2/index.html",revision:"8087eb98c4fe3af6808af1c5c60ebb86"},{url:"archives/2022/index.html",revision:"88e448a2239af5618f0c5bfbdede7e23"},{url:"archives/2022/page/2/index.html",revision:"ed93194a446aa211992654a65045be0d"},{url:"archives/index.html",revision:"47361dfbacaf1f2e00dde0dfeed155b6"},{url:"archives/page/2/index.html",revision:"28226909fdc026b9e2da07da431738d8"},{url:"categories/Git/index.html",revision:"95469ca4c04caa8e00c43b4b1050c44f"},{url:"categories/Hexo/index.html",revision:"48c3305562c7168d582ae7e09fea4ecb"},{url:"categories/index.html",revision:"943a217b635c7b6778ee04f85b2ac732"},{url:"css/index.css",revision:"ed86a775072b9054774d6a8d4a016dd7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"b22e795dbd4f5172206405cf3df3b8a1"},{url:"gallery/index.html",revision:"380d4f599759d9d909abcce09e77adfb"},{url:"gallery/ohmygirl/index.html",revision:"711038cb33dd186ba9f960464a08bf51"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1dbd85695d7b81f1fa108ea039bc586c"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"ac5cd59c17493ce559bb65f88f392c49"},{url:"link/index.html",revision:"4232c1ca375ddd612d17ba296cf4864c"},{url:"page/2/index.html",revision:"36333227857837591b0611c2e85068d2"},{url:"post/21edfb2b.html",revision:"f30c328c3e21fc99bc174452e10695ea"},{url:"post/260f1aad.html",revision:"2b13d932c022c13d841811de0eff9480"},{url:"post/2fb95686.html",revision:"0457d4041c8e8da9ac442268f9d026dc"},{url:"post/51082a3b.html",revision:"aecdeabb92adf501937ca405da112742"},{url:"post/5665ee22.html",revision:"39fa7ad7b6ec9ef9b1182f1f97412443"},{url:"post/58be6610.html",revision:"e037fe7f91f973f41922df50835aed0f"},{url:"post/6977acaf.html",revision:"3669d5426b546f9cc882075bcce9452a"},{url:"post/b86b8f0e.html",revision:"567fd7a154121e0cffbb6d417e20fc45"},{url:"post/bf064b17.html",revision:"27294312a3fd33bcada3e3d0d165c405"},{url:"post/c8017b81.html",revision:"c200fd648ab7d51c2e719d26f5b3d50e"},{url:"post/cf6cbf98.html",revision:"0ea72c6a4bf70704859928cf6bfe546c"},{url:"tags/Git/index.html",revision:"7bfb6752a0b189ef84c4f9fb93d22b45"},{url:"tags/index.html",revision:"24f1029cf159ab4ab6c4808f6eb4fc47"},{url:"tags/博客/index.html",revision:"02ff0fb59dd97dbe16de3ef285f01129"},{url:"tags/杂乱知识点/index.html",revision:"d069c65c8732969b26e64fd010773626"}],{})}));
//# sourceMappingURL=service-worker.js.map
