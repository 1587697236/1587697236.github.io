if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const a=e=>d(e,s),l={module:{uri:s},exports:f,require:a};i[s]=Promise.all(c.map((e=>l[e]||a(e)))).then((e=>(r(...e),f)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"79b891d558de408a3901e11f568c496e"},{url:"about/index.html",revision:"5df165c9ddd449549a64109ef0589b35"},{url:"archives/2022/02/index.html",revision:"e179e0a5cfbaa5ad81bebd19e9812dec"},{url:"archives/2022/02/page/2/index.html",revision:"cd5cbb25e7f482548d48eb4037160e4d"},{url:"archives/2022/index.html",revision:"4f183d6acc1c33cbe135f6d46d1b4990"},{url:"archives/2022/page/2/index.html",revision:"6366ba962e2f77425cb4cab2fab90a98"},{url:"archives/index.html",revision:"684a351902d27b7822ba7f75e7cb85ed"},{url:"archives/page/2/index.html",revision:"ad1448b04eeb4fdcd2abe155987b2291"},{url:"categories/Git/index.html",revision:"c67272289c8b6b754d9236df1a994e38"},{url:"categories/Hexo/index.html",revision:"3e63942b8e4b7cf3fe2f63bca76b4549"},{url:"categories/index.html",revision:"a2dad686beab63789875d010b2b945c9"},{url:"css/index.css",revision:"ed86a775072b9054774d6a8d4a016dd7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/Zyc.css",revision:"38849b2c77e4992ac3700fcb5ad03217"},{url:"Gallery/index.html",revision:"4c4bc02f61553d60ec9e9e3f76fd4dfb"},{url:"Gallery/ohmygirl/index.html",revision:"2984c6e04838f873569ddc9f6c52c389"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"d149d9994678beb6342b2502e7cdcf43"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/Zyc.js",revision:"ec60454597278b7786dfb3b33d63489e"},{url:"link/index.html",revision:"053925cfc2f21ab0418c88d79b9cef7f"},{url:"page/2/index.html",revision:"a159e81848043633e294f516484e42c7"},{url:"post/21edfb2b.html",revision:"9e8ab703d7fa0d3fe7d14a4414c91eb0"},{url:"post/260f1aad.html",revision:"817367e8be85ca84237a2942faf303ab"},{url:"post/2fb95686.html",revision:"5c16c3831bf63a989ea2562417d2bfd5"},{url:"post/51082a3b.html",revision:"f4c50322ce17f1136b27644d5f6170fe"},{url:"post/5665ee22.html",revision:"82323c9ff15bb45d7b42843693dc17e4"},{url:"post/58be6610.html",revision:"721f9ccf1ca6818de1c8e22045a72a38"},{url:"post/6977acaf.html",revision:"3aeda6f82f652b2d619fa0596c237985"},{url:"post/b86b8f0e.html",revision:"ebb66c5b88762507c75bdc200c95ce81"},{url:"post/bf064b17.html",revision:"c556508f836ffc6d2f67c61c1e78976d"},{url:"post/c8017b81.html",revision:"48ce3ac1162f4d10de1a1431dc62c597"},{url:"post/cf6cbf98.html",revision:"5cca4b02433250a9fd2bb47a12ba8629"},{url:"tags/Git/index.html",revision:"d124e9ec537f4cd9a45a752b5881f2f9"},{url:"tags/index.html",revision:"444ff61f41cc315a22a195a3bb93b95c"},{url:"tags/博客/index.html",revision:"0764f4f3596fc8460f817a27711feb65"},{url:"tags/杂乱知识点/index.html",revision:"2f66d08dd6f95106e7191d080d63cf43"},{url:"timeline/index.html",revision:"9dce70fc2d653a9230263f4b9463e6eb"}],{})}));
//# sourceMappingURL=service-worker.js.map
