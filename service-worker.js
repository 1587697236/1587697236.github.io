if(!self.define){let e,d={};const i=(i,r)=>(i=new URL(i+".js",r).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(d[a])return;let c={};const f=e=>i(e,a),b={module:{uri:a},exports:c,require:f};d[a]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"5829d08df7e8cba642a1cd4f04d032c8"},{url:"about/index.html",revision:"c4e208a6dedb13a13a13c6845facd8a5"},{url:"archives/2022/02/index.html",revision:"6f61433b61930a1cc0565efec68f15ce"},{url:"archives/2022/02/page/2/index.html",revision:"70e43ef883a56b406ac04d68af65f479"},{url:"archives/2022/index.html",revision:"c192d0b3209b7942e4bd02288aef20eb"},{url:"archives/2022/page/2/index.html",revision:"02f2236565ec88a289e21d40709fad34"},{url:"archives/index.html",revision:"b2eb27f15895b0b25739451fca92253a"},{url:"archives/page/2/index.html",revision:"a49f1144ab626a7536cc2516bdcb5fcc"},{url:"artitalk/index.html",revision:"278d42593a90339a29711289b1dbea5b"},{url:"categories/Git/index.html",revision:"9d2b69b93fea6c8706e9fe83e7398f01"},{url:"categories/Hexo/index.html",revision:"e1df3faf230f0b5e3bd7bdede74d6db7"},{url:"categories/index.html",revision:"91d65239c421809f8cc40ba16a27bc8e"},{url:"css/index.css",revision:"ed86a775072b9054774d6a8d4a016dd7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"308418917ebda17537ee97dd0c5106e5"},{url:"daodao/index.html",revision:"0da3563371aa6ee5d216f9364090c830"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"334b8979cb01ff22c08562d3ecd57230"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"9991ca278f6562e95e1e033575df07f9"},{url:"link/index.html",revision:"f457ca6e13a555ed328b230b10d3178a"},{url:"page/2/index.html",revision:"ca76a561502a3a07fc7968d7cddd8af0"},{url:"post/21edfb2b.html",revision:"7f1b5be35d7a7d64666a984ca204ccc8"},{url:"post/260f1aad.html",revision:"32b67c8185f08c0c47b4d766edea2e9d"},{url:"post/2fb95686.html",revision:"332f45107ea77352585e131d8b63c422"},{url:"post/51082a3b.html",revision:"90ea6d217424e54c83ddbddde82745bf"},{url:"post/5665ee22.html",revision:"3447dc5bde1dfb3d5b43e192ff2f0484"},{url:"post/58be6610.html",revision:"200954697ec3d37612cfde25d9239d2a"},{url:"post/6977acaf.html",revision:"443e409c802d7da72da419e1914ae717"},{url:"post/b86b8f0e.html",revision:"f391c04bbd575178984ce861d6940dd1"},{url:"post/bf064b17.html",revision:"4f32519f9766d26b91d87179bce029a7"},{url:"post/c8017b81.html",revision:"9ea6e3f2942004fdb019ef00e723c628"},{url:"post/cf6cbf98.html",revision:"0d621bb8cbcbcae33ef524f88b0f33e3"},{url:"tags/Git/index.html",revision:"9c495e13b83bb790d49f39022957ba73"},{url:"tags/index.html",revision:"20d25ce91a92f3cabb5cb2b462f2d9db"},{url:"tags/博客/index.html",revision:"b9d2af91c9426aa1304383498f5bb3aa"},{url:"tags/杂乱知识点/index.html",revision:"3b54014d14f6a999280edfffec168790"}],{})}));
//# sourceMappingURL=service-worker.js.map
