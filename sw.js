if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const u=s=>i(s,a),d={module:{uri:a},exports:r,require:u};e[a]=Promise.all(l.map((s=>d[s]||u(s)))).then((s=>(n(...s),r)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.4f59a86d.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.e0599297.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.cc817224.js",revision:null},{url:"assets/cli_break.md.ba7b5421.js",revision:null},{url:"assets/cli_break.md.ba7b5421.lean.js",revision:null},{url:"assets/cli_checkbox.md.207d2203.js",revision:null},{url:"assets/cli_checkbox.md.207d2203.lean.js",revision:null},{url:"assets/cli_config.md.416046ce.js",revision:null},{url:"assets/cli_config.md.416046ce.lean.js",revision:null},{url:"assets/cli_emoji.md.8ff279d9.js",revision:null},{url:"assets/cli_emoji.md.8ff279d9.lean.js",revision:null},{url:"assets/cli_index.md.aedb4a5e.js",revision:null},{url:"assets/cli_index.md.aedb4a5e.lean.js",revision:null},{url:"assets/cli_install.md.84eaee92.js",revision:null},{url:"assets/cli_install.md.84eaee92.lean.js",revision:null},{url:"assets/cli_retry.md.daf6475b.js",revision:null},{url:"assets/cli_retry.md.daf6475b.lean.js",revision:null},{url:"assets/cli_why.md.f0402661.js",revision:null},{url:"assets/cli_why.md.f0402661.lean.js",revision:null},{url:"assets/config_engineer.md.9c8880aa.js",revision:null},{url:"assets/config_engineer.md.9c8880aa.lean.js",revision:null},{url:"assets/config_index.md.d48406d1.js",revision:null},{url:"assets/config_index.md.d48406d1.lean.js",revision:null},{url:"assets/config_show.md.289c4555.js",revision:null},{url:"assets/config_show.md.289c4555.lean.js",revision:null},{url:"assets/faq_index.md.43d2b567.js",revision:null},{url:"assets/faq_index.md.43d2b567.lean.js",revision:null},{url:"assets/guide_index.md.cea9e964.js",revision:null},{url:"assets/guide_index.md.cea9e964.lean.js",revision:null},{url:"assets/guide_introduction.md.d3883ba3.js",revision:null},{url:"assets/guide_introduction.md.d3883ba3.lean.js",revision:null},{url:"assets/guide_why.md.0700cef8.js",revision:null},{url:"assets/guide_why.md.0700cef8.lean.js",revision:null},{url:"assets/index.md.c8eaa362.js",revision:null},{url:"assets/index.md.c8eaa362.lean.js",revision:null},{url:"assets/recipes_breakingchange.md.dceae361.js",revision:null},{url:"assets/recipes_breakingchange.md.dceae361.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.458fe39f.js",revision:null},{url:"assets/recipes_defaultIssues.md.458fe39f.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.f2eec90b.js",revision:null},{url:"assets/recipes_defaultScope.md.f2eec90b.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.e2cbebd7.js",revision:null},{url:"assets/recipes_defaultSubject.md.e2cbebd7.lean.js",revision:null},{url:"assets/recipes_index.md.ea003e64.js",revision:null},{url:"assets/recipes_index.md.ea003e64.lean.js",revision:null},{url:"assets/style.9e846e4c.css",revision:null},{url:"assets/zh_cli_break.md.b3be9d2f.js",revision:null},{url:"assets/zh_cli_break.md.b3be9d2f.lean.js",revision:null},{url:"assets/zh_cli_checkbox.md.e83d0cf3.js",revision:null},{url:"assets/zh_cli_checkbox.md.e83d0cf3.lean.js",revision:null},{url:"assets/zh_cli_config.md.36a51139.js",revision:null},{url:"assets/zh_cli_config.md.36a51139.lean.js",revision:null},{url:"assets/zh_cli_emoji.md.a0414a2e.js",revision:null},{url:"assets/zh_cli_emoji.md.a0414a2e.lean.js",revision:null},{url:"assets/zh_cli_index.md.86bb6cf5.js",revision:null},{url:"assets/zh_cli_index.md.86bb6cf5.lean.js",revision:null},{url:"assets/zh_cli_install.md.3ac50bd7.js",revision:null},{url:"assets/zh_cli_install.md.3ac50bd7.lean.js",revision:null},{url:"assets/zh_cli_retry.md.b8f0b612.js",revision:null},{url:"assets/zh_cli_retry.md.b8f0b612.lean.js",revision:null},{url:"assets/zh_cli_why.md.ba3435af.js",revision:null},{url:"assets/zh_cli_why.md.ba3435af.lean.js",revision:null},{url:"assets/zh_config_engineer.md.21c09ce3.js",revision:null},{url:"assets/zh_config_engineer.md.21c09ce3.lean.js",revision:null},{url:"assets/zh_config_index.md.2c9fe499.js",revision:null},{url:"assets/zh_config_index.md.2c9fe499.lean.js",revision:null},{url:"assets/zh_config_show.md.2083e9de.js",revision:null},{url:"assets/zh_config_show.md.2083e9de.lean.js",revision:null},{url:"assets/zh_faq_index.md.85db46d6.js",revision:null},{url:"assets/zh_faq_index.md.85db46d6.lean.js",revision:null},{url:"assets/zh_guide_index.md.9fb8f7da.js",revision:null},{url:"assets/zh_guide_index.md.9fb8f7da.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.75ed00a5.js",revision:null},{url:"assets/zh_guide_introduction.md.75ed00a5.lean.js",revision:null},{url:"assets/zh_guide_why.md.a6639e7f.js",revision:null},{url:"assets/zh_guide_why.md.a6639e7f.lean.js",revision:null},{url:"assets/zh_index.md.4530bb7f.js",revision:null},{url:"assets/zh_index.md.4530bb7f.lean.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.d6355f5d.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.d6355f5d.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.6a8236aa.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.6a8236aa.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.cdfdcac7.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.cdfdcac7.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.5785a716.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.5785a716.lean.js",revision:null},{url:"assets/zh_recipes_index.md.3591e4e9.js",revision:null},{url:"assets/zh_recipes_index.md.3591e4e9.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.246feae7.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.246feae7.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"783edf35434b069e017ded24fb198441"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/og.png",revision:"f7675db71b92472744fb19a46fe3378d"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"2dd781507342e731a653c6787120e34e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
