if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),d={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>d[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.4f59a86d.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.e0599297.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.cc817224.js",revision:null},{url:"assets/cli_break.md.5b7c257a.js",revision:null},{url:"assets/cli_break.md.5b7c257a.lean.js",revision:null},{url:"assets/cli_checkbox.md.3956e114.js",revision:null},{url:"assets/cli_checkbox.md.3956e114.lean.js",revision:null},{url:"assets/cli_config.md.f7734f03.js",revision:null},{url:"assets/cli_config.md.f7734f03.lean.js",revision:null},{url:"assets/cli_emoji.md.e7af7944.js",revision:null},{url:"assets/cli_emoji.md.e7af7944.lean.js",revision:null},{url:"assets/cli_index.md.5ad60af2.js",revision:null},{url:"assets/cli_index.md.5ad60af2.lean.js",revision:null},{url:"assets/cli_install.md.fd93a457.js",revision:null},{url:"assets/cli_install.md.fd93a457.lean.js",revision:null},{url:"assets/cli_retry.md.c9e13687.js",revision:null},{url:"assets/cli_retry.md.c9e13687.lean.js",revision:null},{url:"assets/cli_why.md.a86d7516.js",revision:null},{url:"assets/cli_why.md.a86d7516.lean.js",revision:null},{url:"assets/config_engineer.md.671ecb4b.js",revision:null},{url:"assets/config_engineer.md.671ecb4b.lean.js",revision:null},{url:"assets/config_index.md.2baaa1ed.js",revision:null},{url:"assets/config_index.md.2baaa1ed.lean.js",revision:null},{url:"assets/config_show.md.df29f03c.js",revision:null},{url:"assets/config_show.md.df29f03c.lean.js",revision:null},{url:"assets/faq_index.md.35b4afa1.js",revision:null},{url:"assets/faq_index.md.35b4afa1.lean.js",revision:null},{url:"assets/guide_index.md.796313d5.js",revision:null},{url:"assets/guide_index.md.796313d5.lean.js",revision:null},{url:"assets/guide_introduction.md.d32f5c51.js",revision:null},{url:"assets/guide_introduction.md.d32f5c51.lean.js",revision:null},{url:"assets/guide_why.md.21b6fb7c.js",revision:null},{url:"assets/guide_why.md.21b6fb7c.lean.js",revision:null},{url:"assets/index.md.f72798ef.js",revision:null},{url:"assets/index.md.f72798ef.lean.js",revision:null},{url:"assets/recipes_breakingchange.md.d21b2849.js",revision:null},{url:"assets/recipes_breakingchange.md.d21b2849.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.9a78d089.js",revision:null},{url:"assets/recipes_defaultIssues.md.9a78d089.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.e3ff2691.js",revision:null},{url:"assets/recipes_defaultScope.md.e3ff2691.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.403f52e4.js",revision:null},{url:"assets/recipes_defaultSubject.md.403f52e4.lean.js",revision:null},{url:"assets/recipes_index.md.eb3f3042.js",revision:null},{url:"assets/recipes_index.md.eb3f3042.lean.js",revision:null},{url:"assets/style.bf3b9571.css",revision:null},{url:"assets/zh_cli_break.md.6ce3b038.js",revision:null},{url:"assets/zh_cli_break.md.6ce3b038.lean.js",revision:null},{url:"assets/zh_cli_checkbox.md.4b585f29.js",revision:null},{url:"assets/zh_cli_checkbox.md.4b585f29.lean.js",revision:null},{url:"assets/zh_cli_config.md.bf6a97f0.js",revision:null},{url:"assets/zh_cli_config.md.bf6a97f0.lean.js",revision:null},{url:"assets/zh_cli_emoji.md.2cf4c68d.js",revision:null},{url:"assets/zh_cli_emoji.md.2cf4c68d.lean.js",revision:null},{url:"assets/zh_cli_index.md.a44fb21c.js",revision:null},{url:"assets/zh_cli_index.md.a44fb21c.lean.js",revision:null},{url:"assets/zh_cli_install.md.4cec355c.js",revision:null},{url:"assets/zh_cli_install.md.4cec355c.lean.js",revision:null},{url:"assets/zh_cli_retry.md.0f100415.js",revision:null},{url:"assets/zh_cli_retry.md.0f100415.lean.js",revision:null},{url:"assets/zh_cli_why.md.b663c7e6.js",revision:null},{url:"assets/zh_cli_why.md.b663c7e6.lean.js",revision:null},{url:"assets/zh_config_engineer.md.a43254ee.js",revision:null},{url:"assets/zh_config_engineer.md.a43254ee.lean.js",revision:null},{url:"assets/zh_config_index.md.56576237.js",revision:null},{url:"assets/zh_config_index.md.56576237.lean.js",revision:null},{url:"assets/zh_config_show.md.a084d8f7.js",revision:null},{url:"assets/zh_config_show.md.a084d8f7.lean.js",revision:null},{url:"assets/zh_faq_index.md.f9b47d89.js",revision:null},{url:"assets/zh_faq_index.md.f9b47d89.lean.js",revision:null},{url:"assets/zh_guide_index.md.667d8e7d.js",revision:null},{url:"assets/zh_guide_index.md.667d8e7d.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.da2a1df0.js",revision:null},{url:"assets/zh_guide_introduction.md.da2a1df0.lean.js",revision:null},{url:"assets/zh_guide_why.md.2c9a06bd.js",revision:null},{url:"assets/zh_guide_why.md.2c9a06bd.lean.js",revision:null},{url:"assets/zh_index.md.b944c8e1.js",revision:null},{url:"assets/zh_index.md.b944c8e1.lean.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.ea919bd6.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.ea919bd6.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.41e6f604.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.41e6f604.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.cbaefc1a.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.cbaefc1a.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.45c0a356.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.45c0a356.lean.js",revision:null},{url:"assets/zh_recipes_index.md.a7365fe4.js",revision:null},{url:"assets/zh_recipes_index.md.a7365fe4.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.c77c0f54.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.c77c0f54.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"783edf35434b069e017ded24fb198441"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/og.png",revision:"f7675db71b92472744fb19a46fe3378d"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"2dd781507342e731a653c6787120e34e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
