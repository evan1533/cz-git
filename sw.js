if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const u=s=>i(s,a),d={module:{uri:a},exports:r,require:u};e[a]=Promise.all(l.map((s=>d[s]||u(s)))).then((s=>(n(...s),r)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.f4c01087.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.3ccfeff5.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.0c55ccbb.js",revision:null},{url:"assets/cli_break.md.57fc6658.js",revision:null},{url:"assets/cli_break.md.57fc6658.lean.js",revision:null},{url:"assets/cli_checkbox.md.cee16154.js",revision:null},{url:"assets/cli_checkbox.md.cee16154.lean.js",revision:null},{url:"assets/cli_config.md.0995531c.js",revision:null},{url:"assets/cli_config.md.0995531c.lean.js",revision:null},{url:"assets/cli_emoji.md.297e505c.js",revision:null},{url:"assets/cli_emoji.md.297e505c.lean.js",revision:null},{url:"assets/cli_index.md.267dc00d.js",revision:null},{url:"assets/cli_index.md.267dc00d.lean.js",revision:null},{url:"assets/cli_install.md.78706eab.js",revision:null},{url:"assets/cli_install.md.78706eab.lean.js",revision:null},{url:"assets/cli_retry.md.7f5ccd59.js",revision:null},{url:"assets/cli_retry.md.7f5ccd59.lean.js",revision:null},{url:"assets/cli_why.md.d9625fd3.js",revision:null},{url:"assets/cli_why.md.d9625fd3.lean.js",revision:null},{url:"assets/config_engineer.md.85a00a33.js",revision:null},{url:"assets/config_engineer.md.85a00a33.lean.js",revision:null},{url:"assets/config_index.md.ff6f121a.js",revision:null},{url:"assets/config_index.md.ff6f121a.lean.js",revision:null},{url:"assets/config_show.md.3350d547.js",revision:null},{url:"assets/config_show.md.3350d547.lean.js",revision:null},{url:"assets/faq_index.md.1dc6af34.js",revision:null},{url:"assets/faq_index.md.1dc6af34.lean.js",revision:null},{url:"assets/guide_index.md.713282f6.js",revision:null},{url:"assets/guide_index.md.713282f6.lean.js",revision:null},{url:"assets/guide_introduction.md.4d24e1b5.js",revision:null},{url:"assets/guide_introduction.md.4d24e1b5.lean.js",revision:null},{url:"assets/guide_why.md.446d4f07.js",revision:null},{url:"assets/guide_why.md.446d4f07.lean.js",revision:null},{url:"assets/index.md.b5a9e46a.js",revision:null},{url:"assets/index.md.b5a9e46a.lean.js",revision:null},{url:"assets/recipes_breakingchange.md.cb0f7b63.js",revision:null},{url:"assets/recipes_breakingchange.md.cb0f7b63.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.cf2e5d0a.js",revision:null},{url:"assets/recipes_defaultIssues.md.cf2e5d0a.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.0ece4533.js",revision:null},{url:"assets/recipes_defaultScope.md.0ece4533.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.dd0872af.js",revision:null},{url:"assets/recipes_defaultSubject.md.dd0872af.lean.js",revision:null},{url:"assets/recipes_index.md.fa9ad4e0.js",revision:null},{url:"assets/recipes_index.md.fa9ad4e0.lean.js",revision:null},{url:"assets/style.70761a27.css",revision:null},{url:"assets/zh_cli_break.md.1f96b64f.js",revision:null},{url:"assets/zh_cli_break.md.1f96b64f.lean.js",revision:null},{url:"assets/zh_cli_checkbox.md.37a1a891.js",revision:null},{url:"assets/zh_cli_checkbox.md.37a1a891.lean.js",revision:null},{url:"assets/zh_cli_config.md.84e448cc.js",revision:null},{url:"assets/zh_cli_config.md.84e448cc.lean.js",revision:null},{url:"assets/zh_cli_emoji.md.a352f8dd.js",revision:null},{url:"assets/zh_cli_emoji.md.a352f8dd.lean.js",revision:null},{url:"assets/zh_cli_index.md.a71f94fc.js",revision:null},{url:"assets/zh_cli_index.md.a71f94fc.lean.js",revision:null},{url:"assets/zh_cli_install.md.f7403bc8.js",revision:null},{url:"assets/zh_cli_install.md.f7403bc8.lean.js",revision:null},{url:"assets/zh_cli_retry.md.024984a5.js",revision:null},{url:"assets/zh_cli_retry.md.024984a5.lean.js",revision:null},{url:"assets/zh_cli_why.md.fa2f14c1.js",revision:null},{url:"assets/zh_cli_why.md.fa2f14c1.lean.js",revision:null},{url:"assets/zh_config_engineer.md.830c7a4e.js",revision:null},{url:"assets/zh_config_engineer.md.830c7a4e.lean.js",revision:null},{url:"assets/zh_config_index.md.e2672a54.js",revision:null},{url:"assets/zh_config_index.md.e2672a54.lean.js",revision:null},{url:"assets/zh_config_show.md.dbbd9af0.js",revision:null},{url:"assets/zh_config_show.md.dbbd9af0.lean.js",revision:null},{url:"assets/zh_faq_index.md.7328b12a.js",revision:null},{url:"assets/zh_faq_index.md.7328b12a.lean.js",revision:null},{url:"assets/zh_guide_index.md.6feb2a5e.js",revision:null},{url:"assets/zh_guide_index.md.6feb2a5e.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.3cdba003.js",revision:null},{url:"assets/zh_guide_introduction.md.3cdba003.lean.js",revision:null},{url:"assets/zh_guide_why.md.7ef4deb9.js",revision:null},{url:"assets/zh_guide_why.md.7ef4deb9.lean.js",revision:null},{url:"assets/zh_index.md.39124522.js",revision:null},{url:"assets/zh_index.md.39124522.lean.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.61699d96.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.61699d96.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.92cccaa4.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.92cccaa4.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.26889417.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.26889417.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.72837988.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.72837988.lean.js",revision:null},{url:"assets/zh_recipes_index.md.96dcfd06.js",revision:null},{url:"assets/zh_recipes_index.md.96dcfd06.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.76511311.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.76511311.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"783edf35434b069e017ded24fb198441"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/og.png",revision:"f7675db71b92472744fb19a46fe3378d"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"2dd781507342e731a653c6787120e34e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
