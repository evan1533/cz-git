if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),c={module:{uri:a},exports:l,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-d77e59e2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6cbb87d7a407362ab6d249bcafcc0209"},{url:"assets/css/styles.ae39b9a7.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/158.22b41f35.js",revision:null},{url:"assets/js/188.0420ac51.js",revision:null},{url:"assets/js/217.6a0741b4.js",revision:null},{url:"assets/js/611.462d6c70.js",revision:null},{url:"assets/js/692.c77ca9e8.js",revision:null},{url:"assets/js/872.9cb8c303.js",revision:null},{url:"assets/js/app.a6ed2663.js",revision:null},{url:"assets/js/runtime~app.353163fc.js",revision:null},{url:"assets/js/v-0538835e.70f1c5ea.js",revision:null},{url:"assets/js/v-2c96a45e.3a48e1f4.js",revision:null},{url:"assets/js/v-2d0ad528.0ac68d38.js",revision:null},{url:"assets/js/v-3706649a.547e85f9.js",revision:null},{url:"assets/js/v-37781588.aff5b6fe.js",revision:null},{url:"assets/js/v-37e1c06f.e77839ac.js",revision:null},{url:"assets/js/v-47357bdb.0fd5f1c4.js",revision:null},{url:"assets/js/v-4f4ccb8f.5d02d615.js",revision:null},{url:"assets/js/v-6703f8cd.f9fe1939.js",revision:null},{url:"assets/js/v-714f65dc.fb5ed36f.js",revision:null},{url:"assets/js/v-81f65e84.9145883a.js",revision:null},{url:"assets/js/v-8daa1a0e.9be92fca.js",revision:null},{url:"assets/js/v-abece2a2.e279bb07.js",revision:null},{url:"assets/js/v-b9538b80.96f65095.js",revision:null},{url:"assets/js/v-c46fc206.d7872b72.js",revision:null},{url:"assets/js/v-db05fa28.b33a64bc.js",revision:null},{url:"assets/js/v-fb0f0066.830601a3.js",revision:null},{url:"assets/js/v-fca597be.60e8a05d.js",revision:null},{url:"assets/js/v-fffb8e28.db83975d.js",revision:null},{url:"guide/configuration.html",revision:"b533b49e187048a03a94b8a00d627814"},{url:"guide/faq.html",revision:"d9c6a84e6f60a5b41fc1303f05f67265"},{url:"guide/getting-started.html",revision:"b16d772df387138dccd2ee61ee2f95b9"},{url:"guide/index.html",revision:"b2418c95ab4af6d90d945ec820f97071"},{url:"guide/option-engineer.html",revision:"b172ff700a3e615f68338f6e978df778"},{url:"guide/options-show.html",revision:"581e2416d0349757c7d09763cf20d59e"},{url:"guide/recipes.html",revision:"402a76c1178b51191e22c059886b1335"},{url:"guide/why.html",revision:"90205543d6076c0bcc335610139701c7"},{url:"images/demo.gif",revision:"3061a79e88e986f3ae37fdd3476a9be1"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114-precomposed.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120-precomposed.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144-precomposed.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152-precomposed.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180-precomposed.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72-precomposed.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"index.html",revision:"f02c3339be42fb1b527ac9048d244630"},{url:"zh/guide/configuration.html",revision:"deac57b57ed1db841fe0eb0ff703817d"},{url:"zh/guide/faq.html",revision:"f81c83d2f8be271dac55a74ffea1ca3a"},{url:"zh/guide/getting-started.html",revision:"1a5d5be08c62c68ed5ce74d29d4c9797"},{url:"zh/guide/index.html",revision:"f5fb7b669051f3f4cb32c275a8533c0d"},{url:"zh/guide/option-engineer.html",revision:"0b6285f13f8cb0f576107decf86e1b48"},{url:"zh/guide/options-show.html",revision:"8ae0bf48d4dca6e608645ab9387296a8"},{url:"zh/guide/recipes.html",revision:"247f66886ce16e5f72b5036e510ffb16"},{url:"zh/guide/why.html",revision:"1b76d42a838c0fabc04ce75b85ff039f"},{url:"zh/index.html",revision:"09d8157db0669827390cdaadd59c0a47"}],{})}));
