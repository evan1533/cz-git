if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),d={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>d[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.d03c79e0.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.9436dcce.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.cf549a85.js",revision:null},{url:"assets/cli_alias.md.80463ab6.js",revision:null},{url:"assets/cli_alias.md.80463ab6.lean.js",revision:null},{url:"assets/cli_break.md.ebe97177.js",revision:null},{url:"assets/cli_break.md.ebe97177.lean.js",revision:null},{url:"assets/cli_checkbox.md.b609dd5a.js",revision:null},{url:"assets/cli_checkbox.md.b609dd5a.lean.js",revision:null},{url:"assets/cli_config.md.cf09e761.js",revision:null},{url:"assets/cli_config.md.cf09e761.lean.js",revision:null},{url:"assets/cli_emoji.md.f20ab315.js",revision:null},{url:"assets/cli_emoji.md.f20ab315.lean.js",revision:null},{url:"assets/cli_index.md.9c9acf9d.js",revision:null},{url:"assets/cli_index.md.9c9acf9d.lean.js",revision:null},{url:"assets/cli_install.md.f5ffcbf2.js",revision:null},{url:"assets/cli_install.md.f5ffcbf2.lean.js",revision:null},{url:"assets/cli_retry.md.39bf59a3.js",revision:null},{url:"assets/cli_retry.md.39bf59a3.lean.js",revision:null},{url:"assets/cli_why.md.607f2c11.js",revision:null},{url:"assets/cli_why.md.607f2c11.lean.js",revision:null},{url:"assets/config_engineer.md.469705f1.js",revision:null},{url:"assets/config_engineer.md.469705f1.lean.js",revision:null},{url:"assets/config_index.md.702c0256.js",revision:null},{url:"assets/config_index.md.702c0256.lean.js",revision:null},{url:"assets/config_show.md.a63ffd08.js",revision:null},{url:"assets/config_show.md.a63ffd08.lean.js",revision:null},{url:"assets/faq_index.md.dfa34804.js",revision:null},{url:"assets/faq_index.md.dfa34804.lean.js",revision:null},{url:"assets/guide_index.md.e1b62f22.js",revision:null},{url:"assets/guide_index.md.e1b62f22.lean.js",revision:null},{url:"assets/guide_introduction.md.9e842bf9.js",revision:null},{url:"assets/guide_introduction.md.9e842bf9.lean.js",revision:null},{url:"assets/guide_why.md.f342b87a.js",revision:null},{url:"assets/guide_why.md.f342b87a.lean.js",revision:null},{url:"assets/index.md.df348692.js",revision:null},{url:"assets/index.md.df348692.lean.js",revision:null},{url:"assets/recipes_alias.md.c3759b85.js",revision:null},{url:"assets/recipes_alias.md.c3759b85.lean.js",revision:null},{url:"assets/recipes_breakingchange.md.e5032059.js",revision:null},{url:"assets/recipes_breakingchange.md.e5032059.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.9b51723f.js",revision:null},{url:"assets/recipes_defaultIssues.md.9b51723f.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.11e869ee.js",revision:null},{url:"assets/recipes_defaultScope.md.11e869ee.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.a762c965.js",revision:null},{url:"assets/recipes_defaultSubject.md.a762c965.lean.js",revision:null},{url:"assets/recipes_index.md.fe292941.js",revision:null},{url:"assets/recipes_index.md.fe292941.lean.js",revision:null},{url:"assets/style.5224e098.css",revision:null},{url:"assets/zh_cli_alias.md.db89b08d.js",revision:null},{url:"assets/zh_cli_alias.md.db89b08d.lean.js",revision:null},{url:"assets/zh_cli_break.md.0a62fb22.js",revision:null},{url:"assets/zh_cli_break.md.0a62fb22.lean.js",revision:null},{url:"assets/zh_cli_checkbox.md.f5523f6d.js",revision:null},{url:"assets/zh_cli_checkbox.md.f5523f6d.lean.js",revision:null},{url:"assets/zh_cli_config.md.14f2cfd9.js",revision:null},{url:"assets/zh_cli_config.md.14f2cfd9.lean.js",revision:null},{url:"assets/zh_cli_emoji.md.0d3702d1.js",revision:null},{url:"assets/zh_cli_emoji.md.0d3702d1.lean.js",revision:null},{url:"assets/zh_cli_index.md.e6cb44e4.js",revision:null},{url:"assets/zh_cli_index.md.e6cb44e4.lean.js",revision:null},{url:"assets/zh_cli_install.md.683594e1.js",revision:null},{url:"assets/zh_cli_install.md.683594e1.lean.js",revision:null},{url:"assets/zh_cli_retry.md.35f3b519.js",revision:null},{url:"assets/zh_cli_retry.md.35f3b519.lean.js",revision:null},{url:"assets/zh_cli_why.md.b59fba07.js",revision:null},{url:"assets/zh_cli_why.md.b59fba07.lean.js",revision:null},{url:"assets/zh_config_engineer.md.93a6b24b.js",revision:null},{url:"assets/zh_config_engineer.md.93a6b24b.lean.js",revision:null},{url:"assets/zh_config_index.md.97ac2060.js",revision:null},{url:"assets/zh_config_index.md.97ac2060.lean.js",revision:null},{url:"assets/zh_config_show.md.0e916b44.js",revision:null},{url:"assets/zh_config_show.md.0e916b44.lean.js",revision:null},{url:"assets/zh_faq_index.md.b2216a0f.js",revision:null},{url:"assets/zh_faq_index.md.b2216a0f.lean.js",revision:null},{url:"assets/zh_guide_index.md.770aea7e.js",revision:null},{url:"assets/zh_guide_index.md.770aea7e.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.16afc575.js",revision:null},{url:"assets/zh_guide_introduction.md.16afc575.lean.js",revision:null},{url:"assets/zh_guide_why.md.018a9340.js",revision:null},{url:"assets/zh_guide_why.md.018a9340.lean.js",revision:null},{url:"assets/zh_index.md.417409d8.js",revision:null},{url:"assets/zh_index.md.417409d8.lean.js",revision:null},{url:"assets/zh_recipes_alias.md.974dc86d.js",revision:null},{url:"assets/zh_recipes_alias.md.974dc86d.lean.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.6c777694.js",revision:null},{url:"assets/zh_recipes_breakingchange.md.6c777694.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.bf867824.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.bf867824.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.e3d82780.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.e3d82780.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.ba1846f3.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.ba1846f3.lean.js",revision:null},{url:"assets/zh_recipes_index.md.f8921ed2.js",revision:null},{url:"assets/zh_recipes_index.md.f8921ed2.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.c6467dcc.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.c6467dcc.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"8eb069cb2d9aa3301c0f899735d3b1db"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/og.png",revision:"f7675db71b92472744fb19a46fe3378d"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"82bcc9cc7f56775bc1e0e6e445bed88f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
