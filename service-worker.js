if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const l=e=>d(e,s),b={module:{uri:s},exports:a,require:l};i[s]=Promise.all(r.map((e=>b[e]||l(e)))).then((e=>(c(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2308def40ceb8b991cf5b968ba9c45c0"},{url:"about/index.html",revision:"4432750ae142dc75a74b216f8b62c3a7"},{url:"archives/2022/02/index.html",revision:"9bf8cff10ce7ba559da9ff2e5cd91d67"},{url:"archives/2022/02/page/2/index.html",revision:"4eee4771dbce2453c71e4c1fb3929eeb"},{url:"archives/2022/index.html",revision:"f538504663ef7a958a6c48e73418d326"},{url:"archives/2022/page/2/index.html",revision:"4dda1b0e827c250b038ad4704ac815e4"},{url:"archives/index.html",revision:"357ca26210f8a694ecfd592b73794068"},{url:"archives/page/2/index.html",revision:"be7ac2d29651be11cb4840cd7032ac8d"},{url:"categories/Git/index.html",revision:"888e90440b524700aa698aeb3bf51125"},{url:"categories/Hexo/index.html",revision:"abec82283149abda6a86ddd6c68b9282"},{url:"categories/index.html",revision:"a83f7bc4f211cabfdd4a8a5041e78ec3"},{url:"css/index.css",revision:"ed86a775072b9054774d6a8d4a016dd7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"2501385fd3d567bc3470468044fafec5"},{url:"Gallery/index.html",revision:"8812f84454d49c50901497299d39a911"},{url:"Gallery/ohmygirl/index.html",revision:"8af57401b0d4a9ca9f4c1da2d4b253f8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"d28154b91859ed4c54c2bbdc6872e250"},{url:"img/avatar.jpg",revision:"c5c98bb6dedc3f05ede6d7f8b9b8b2e5"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/naer.jpg",revision:"6dfbc498f95cc4081459f86f3982b554"},{url:"img/smile.png",revision:"a4873f47ee555379b9689b98a7b48169"},{url:"img/wechat.png",revision:"520a76a6369696c04815f1f7e62eccd3"},{url:"img/又拍云_logo2.png",revision:"4ff5b7d3ed727d330fcdda17165de906"},{url:"img/又拍云_logo5.png",revision:"6bdb8361db95808e6d8d196d37d8cbcc"},{url:"index.html",revision:"7b5d29a74e24b96f61db84f618900545"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"9c614925528b15131253d725508d8539"},{url:"link/index.html",revision:"4e1489586ced0feef2e2536b8d65880a"},{url:"page/2/index.html",revision:"2a47a869df989bfc618b1e8d31570995"},{url:"post/21edfb2b.html",revision:"7d711f80549a3b0f72e0867f47c35e24"},{url:"post/260f1aad.html",revision:"53467aba151924d6a025724aaeb67ff0"},{url:"post/2fb95686.html",revision:"01e32813dcb39fefd8a919979535425e"},{url:"post/51082a3b.html",revision:"f7685dfe5141e656b0c6c475fed534f7"},{url:"post/5665ee22.html",revision:"d4a40cfd40229264e454d139b35500c0"},{url:"post/58be6610.html",revision:"85e171131f2c00eb375d8d6587ee2caa"},{url:"post/6977acaf.html",revision:"4b08b390772cd2a968a2e4439b7f71ed"},{url:"post/b86b8f0e.html",revision:"d1eed1d1d2a6c3cdce452b789be209b9"},{url:"post/bf064b17.html",revision:"eaca480c2726f92c66e60ff1edb2cf64"},{url:"post/c8017b81.html",revision:"bf031d9e2a21db65d999e5d902c62548"},{url:"post/cf6cbf98.html",revision:"c28f50503ae76683971bdd5caa2cf1f1"},{url:"tags/Git/index.html",revision:"583129e9be6848244c09420e63c47e61"},{url:"tags/index.html",revision:"97b13c34e86f023e619eede75528ef87"},{url:"tags/博客/index.html",revision:"8c21527b5fec6a95aa06bcb917332779"},{url:"tags/杂乱知识点/index.html",revision:"6c2f74c4edceee80e2709d9a4d724895"},{url:"timeline/index.html",revision:"15bbcb61ebf2d76559542a6cedddd4b1"}],{})}));
//# sourceMappingURL=service-worker.js.map
