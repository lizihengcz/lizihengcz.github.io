if(!self.define){let e,i={};const o=(o,t)=>(o=new URL(o+".js",t).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const c=e=>o(e,r),u={module:{uri:r},exports:s,require:c};i[r]=Promise.all(t.map((e=>u[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0960c365412e25102ec8571cad78ba17"},{url:"/",revision:"index-20230827095941936"},{url:"music/",revision:"music-20230827095941936"},{url:"about/",revision:"about-20230827095941936"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
