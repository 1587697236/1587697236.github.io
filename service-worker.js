if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const f=e=>d(e,s),b={module:{uri:s},exports:a,require:f};i[s]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e612fd179c27ba4c08930a212615afad"},{url:"about/index.html",revision:"7962004d1fd5e159da4280253fb1dbd7"},{url:"archives/2022/02/index.html",revision:"3c3c162302cea5f05fdb9ba0a9b1cb7b"},{url:"archives/2022/02/page/2/index.html",revision:"e3c1d589f73ccb07bb2c3b7c4adf2786"},{url:"archives/2022/index.html",revision:"1ad64a8cf2008f257be1a3f273b830a4"},{url:"archives/2022/page/2/index.html",revision:"e6cd8b205bffd5fb4e3d3487f91d9c4b"},{url:"archives/index.html",revision:"016e81d6f45a9381c6b6068676f57e8a"},{url:"archives/page/2/index.html",revision:"0fb5ac6dfb3b2d85bd3649a8147da9ee"},{url:"artitalk/index.html",revision:"ce8ff809cc35380380f7e0e4c536eb57"},{url:"categories/Hexo/index.html",revision:"185a1ab97c87189190523a06e30681ef"},{url:"categories/index.html",revision:"d45d310c3c360b85997102be7e9fafe3"},{url:"categories/常用工具/index.html",revision:"9f4ffd2b3599caf7249084e77c2262c7"},{url:"categories/测试博客/index.html",revision:"53ff515f2b2103f07b3509e831c62856"},{url:"css/index.css",revision:"c35ee834e9156691764558556b7df979"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"d9af58036bcc0ca706ec566ca9b3b4e0"},{url:"daodao/index.html",revision:"1010a0e2bfc7778fff1833ff4a0ad916"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1a8a3a93d90ba609dc7eb67624dddf96"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"2f502d637a7bebbf6e51eb997b9a0869"},{url:"link/index.html",revision:"ada7c84b24a0ff72e3916064a699228c"},{url:"page/2/index.html",revision:"ce677203712b0e8bfe069ab17380c222"},{url:"post/21edfb2b.html",revision:"64d7524723a0230cc2ec3f4aa1214126"},{url:"post/260f1aad.html",revision:"6155f8c0050e5c8a797fe553ed2e6f89"},{url:"post/2fb95686.html",revision:"cc613a956195c1744f533b09bd8c5cc4"},{url:"post/51082a3b.html",revision:"681e6fd7d5f883bf4cbea1526f4dfe6d"},{url:"post/5665ee22.html",revision:"fb32fde20b68ce0981a882135f44ca4d"},{url:"post/58be6610.html",revision:"dfa4df524d0796740b53777b8b8dcf09"},{url:"post/6977acaf.html",revision:"2ded4588c6ad5a88dbc5dedf68e1bfb4"},{url:"post/82343a4b.html",revision:"cd46890a55e4d64d7544c0e836ebb5ff"},{url:"post/bf064b17.html",revision:"c348d32fa69912532c8eda99153b6599"},{url:"post/c8017b81.html",revision:"5b327609ace91869711ed61b3480166a"},{url:"post/cf6cbf98.html",revision:"b3d21720886dfccebf4100da4f1e40a6"},{url:"tags/Git/index.html",revision:"c9bcd3689f448aace1d17c5db411517f"},{url:"tags/index.html",revision:"06ac0f67546d375e8adc28f2a10a9f45"},{url:"tags/博客/index.html",revision:"9cd02f44bd26e07f1000ecd202526de1"},{url:"tags/杂乱知识点/index.html",revision:"a9121985b2c62e5a8347be657f069664"},{url:"tags/测试博客/index.html",revision:"3c6c123d3ffe9742c27e9a953830f620"}],{})}));
//# sourceMappingURL=service-worker.js.map
