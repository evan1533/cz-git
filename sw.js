if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const u=s=>i(s,a),d={module:{uri:a},exports:r,require:u};e[a]=Promise.all(l.map((s=>d[s]||u(s)))).then((s=>(n(...s),r)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.906dfc96.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.b6592f78.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.ad6f4587.js",revision:null},{url:"assets/cli_alias.md.cfd07d50.js",revision:null},{url:"assets/cli_alias.md.cfd07d50.lean.js",revision:null},{url:"assets/cli_break.md.c16871a2.js",revision:null},{url:"assets/cli_break.md.c16871a2.lean.js",revision:null},{url:"assets/cli_checkbox.md.cbb8eadf.js",revision:null},{url:"assets/cli_checkbox.md.cbb8eadf.lean.js",revision:null},{url:"assets/cli_config.md.62caeec1.js",revision:null},{url:"assets/cli_config.md.62caeec1.lean.js",revision:null},{url:"assets/cli_emoji.md.a9bdff3f.js",revision:null},{url:"assets/cli_emoji.md.a9bdff3f.lean.js",revision:null},{url:"assets/cli_index.md.a34a7798.js",revision:null},{url:"assets/cli_index.md.a34a7798.lean.js",revision:null},{url:"assets/cli_install.md.7b65f68d.js",revision:null},{url:"assets/cli_install.md.7b65f68d.lean.js",revision:null},{url:"assets/cli_retry.md.c8383cfe.js",revision:null},{url:"assets/cli_retry.md.c8383cfe.lean.js",revision:null},{url:"assets/cli_why.md.78d4b50e.js",revision:null},{url:"assets/cli_why.md.78d4b50e.lean.js",revision:null},{url:"assets/config_engineer.md.9c8c4a8a.js",revision:null},{url:"assets/config_engineer.md.9c8c4a8a.lean.js",revision:null},{url:"assets/config_index.md.4d94bde3.js",revision:null},{url:"assets/config_index.md.4d94bde3.lean.js",revision:null},{url:"assets/config_show.md.f9f6ac4d.js",revision:null},{url:"assets/config_show.md.f9f6ac4d.lean.js",revision:null},{url:"assets/faq_index.md.991db93f.js",revision:null},{url:"assets/faq_index.md.991db93f.lean.js",revision:null},{url:"assets/guide_index.md.177c820e.js",revision:null},{url:"assets/guide_index.md.177c820e.lean.js",revision:null},{url:"assets/guide_introduction.md.9134ef68.js",revision:null},{url:"assets/guide_introduction.md.9134ef68.lean.js",revision:null},{url:"assets/guide_why.md.066c5d76.js",revision:null},{url:"assets/guide_why.md.066c5d76.lean.js",revision:null},{url:"assets/index.md.6a213d4a.js",revision:null},{url:"assets/index.md.6a213d4a.lean.js",revision:null},{url:"assets/recipes_alias.md.0b8056f2.js",revision:null},{url:"assets/recipes_alias.md.0b8056f2.lean.js",revision:null},{url:"assets/recipes_breakingchange.md.ddfa58be.js",revision:null},{url:"assets/recipes_breakingchange.md.ddfa58be.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.e431d986.js",revision:null},{url:"assets/recipes_defaultIssues.md.e431d986.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.c1a59621.js",revision:null},{url:"assets/recipes_defaultScope.md.c1a59621.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.95d99722.js",revision:null},{url:"assets/recipes_defaultSubject.md.95d99722.lean.js",revision:null},{url:"assets/recipes_index.md.b1e7b650.js",revision:null},{url:"assets/recipes_index.md.b1e7b650.lean.js",revision:null},{url:"assets/style.70761a27.css",revision:null},{url:"assets/zh_cli_alias.md.4b70898d.js",revision:null},{url:"assets/zh_cli_alias.md.4b70898d.lean.js",revision:null},{url:"assets/zh_cli_break.md.5fb676db.js",revision:null},{url:"assets/zh_cli_break.md.5fb676db.lean.js",revision:null},{url:"assets/zh_cli_checkbox.md.22fba63b.js",revision:null},{url:"assets/zh_cli_checkbox.md.22fba63b.lean.js",revision:null},{url:"assets/zh_cli_config.md.2380a3f9.js",revision:null},{url:"assets/zh_cli_config.md.2380a3f9.lean.js",revision:null},{url:"assets/zh_cli_emoji.md.10232254.js",revision:null},{url:"assets/zh_cli_emoji.md.10232254.lean.js",revision:null},{url:"assets/zh_cli_index.md.c0fb3fe8.js",revision:null},{url:"assets/zh_cli_index.md.c0fb3fe8.lean.js",revision:null},{url:"assets/zh_cli_install.md.2eee6732.js",revision:null},{url:"assets/zh_cli_install.md.2eee6732.lean.js",revision:null},{url:"assets/zh_cli_retry.md.457ff323.js",revision:null},{url:"assets/zh_cli_retry.md.457ff323.lean.js",revision:null},{url:"assets/zh_cli_why.md.2eddf620.js",revision:null},{url:"assets/zh_cli_why.md.2eddf620.lean.js",revision:null},{url:"assets/zh_config_engineer.md.ac07fca9.js",revision:null},{url:"assets/zh_config_engineer.md.ac07fca9.lean.js",revision:null},{url:"assets/zh_config_index.md.a00ccb9b.js",revision:null},{url:"assets/zh_config_index.md.a00ccb9b.lean.js",revision:null},{url:"assets/zh_config_show.md.aac1d051.js",revision:null},{url:"assets/zh_config_show.md.aac1d051.lean.js",revision:null},{url:"assets/zh_faq_index.md.4b813893.js",revision:null},{url:"assets/zh_faq_index.md.4b813893.lean.js",revision:null},{url:"assets/zh_guide_index.md.7f2da959.js",revision:null},{url:"assets/zh_guide_index.md.7f2da959.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.bc178bd9.js",revision:null},{url:"assets/zh_guide_introduction.md.bc178bd9.lean.js",revision:null},{url:"assets/zh_guide_why.md.705ccc9c.js",revision:null},{url:"assets/zh_guide_why.md.705ccc9c.lean.js",revision:null},{url:"assets/zh_index.md.38eed5d8.js",revision:null},{url:"assets/zh_index.md.38eed5d8.lean.js",revision:null},{url:"assets/zh_recipes_alias.md.907a24f1.js",revision:null},{url:"assets/zh_recipes_alias.md.907a24f1.lean.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.381b6a72.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.381b6a72.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.ad89d6e2.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.ad89d6e2.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.73af03c7.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.73af03c7.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.e76cb4c2.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.e76cb4c2.lean.js",revision:null},{url:"assets/zh_recipes_index.md.ff8ce61a.js",revision:null},{url:"assets/zh_recipes_index.md.ff8ce61a.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.e66d05fd.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.e66d05fd.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"783edf35434b069e017ded24fb198441"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/og.png",revision:"f7675db71b92472744fb19a46fe3378d"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"2dd781507342e731a653c6787120e34e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
