if(!self.define){let e,i={};const o=(o,t)=>(o=new URL(o+".js",t).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const u=e=>o(e,r),c={module:{uri:r},exports:s,require:u};i[r]=Promise.all(t.map((e=>c[e]||u(e)))).then((e=>(n(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"5626e474ab1b2f8020efd249f24e9da6"},{url:"/",revision:"index-20230917062622043"},{url:"music/",revision:"music-20230917062622043"},{url:"about/",revision:"about-20230917062622043"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
