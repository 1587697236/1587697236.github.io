if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>d(e,s),b={module:{uri:s},exports:c,require:f};i[s]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3830d4ead0a2ded4e55cd6ec4d7cbea6"},{url:"about/index.html",revision:"256df4a14a0860842b0df53541a6284f"},{url:"archives/2022/02/index.html",revision:"72cf3f958045995fc6d2151f9a5aea84"},{url:"archives/2022/02/page/2/index.html",revision:"00091ea761b7b72ef4a76c906a91abfb"},{url:"archives/2022/index.html",revision:"f98f2783040c4dc49e428b9a246a2337"},{url:"archives/2022/page/2/index.html",revision:"b53bc32783377d47f4eb318724888994"},{url:"archives/index.html",revision:"d6fad50167258496e1a53fa204a3bcf5"},{url:"archives/page/2/index.html",revision:"0d539b649c8574701d35bf952f3f0a2f"},{url:"artitalk/index.html",revision:"c79756fc6bb89436b6c9ec85b5c7b3c9"},{url:"categories/Git/index.html",revision:"92ed0b878824fe2351aa197c74f83d2a"},{url:"categories/Hexo/index.html",revision:"0f0e1dae7f6019b9311c3eb330f0a7fb"},{url:"categories/index.html",revision:"809accdfaecad3502ee2a24a4a3849fd"},{url:"css/index.css",revision:"ed86a775072b9054774d6a8d4a016dd7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"308418917ebda17537ee97dd0c5106e5"},{url:"daodao/index.html",revision:"ac544ebb3843968b2f5ec530959f3fd1"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f71d07588e8679be9f6280f3b2ff97ea"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"9991ca278f6562e95e1e033575df07f9"},{url:"link/index.html",revision:"c8a0ca51599c86eed64c1ea0fc54d844"},{url:"page/2/index.html",revision:"9354aad9f0f740fadd8d49f5c5453949"},{url:"post/21edfb2b.html",revision:"8a42e1ef5bd37b6056562caaecd638d7"},{url:"post/260f1aad.html",revision:"b89aab3d0e40f1167b932cf6affe8481"},{url:"post/2fb95686.html",revision:"6d1fec357a0b11c6516c9b6f4e4d8cfc"},{url:"post/51082a3b.html",revision:"4f4772c71e25d056ee006211ae54a852"},{url:"post/5665ee22.html",revision:"972aa0ce882f500a3b243db662c0f60e"},{url:"post/58be6610.html",revision:"e7ddc98fa4ce7087be8dd1be29555d65"},{url:"post/6977acaf.html",revision:"525803f5cf0f50abe23667d6e9f097b9"},{url:"post/b86b8f0e.html",revision:"1419b8194cb31e40f9cf191b69115454"},{url:"post/bf064b17.html",revision:"2c21dd34dafc86afe25aa5ed30c0bb0c"},{url:"post/c8017b81.html",revision:"420ba2f2abe64dd00edee89d64627524"},{url:"post/cf6cbf98.html",revision:"706f533bd8161fb1fa5839672e0b581b"},{url:"tags/Git/index.html",revision:"b95b2f242888a8c53e2b88c1c4c5d3c9"},{url:"tags/index.html",revision:"19723930da4f3bb90adb72554c29b23b"},{url:"tags/博客/index.html",revision:"cbf281fca002e9d92ffc530e94bbd9ee"},{url:"tags/杂乱知识点/index.html",revision:"989445b9a3e41d6d950142b37a249a2a"}],{})}));
//# sourceMappingURL=service-worker.js.map
