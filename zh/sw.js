if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),d={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>d[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.2ac217d2.js",revision:null},{url:"assets/chunks/pwa.1b6f45f1.js",revision:null},{url:"assets/chunks/ui-custom.127ecb46.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.6659bb36.js",revision:null},{url:"assets/cli_break.md.b1bdc42a.js",revision:null},{url:"assets/cli_break.md.b1bdc42a.lean.js",revision:null},{url:"assets/cli_checkbox.md.d352737f.js",revision:null},{url:"assets/cli_checkbox.md.d352737f.lean.js",revision:null},{url:"assets/cli_config.md.a38e8f12.js",revision:null},{url:"assets/cli_config.md.a38e8f12.lean.js",revision:null},{url:"assets/cli_emoji.md.b7b4b037.js",revision:null},{url:"assets/cli_emoji.md.b7b4b037.lean.js",revision:null},{url:"assets/cli_index.md.5f88c2e5.js",revision:null},{url:"assets/cli_index.md.5f88c2e5.lean.js",revision:null},{url:"assets/cli_install.md.0f64591b.js",revision:null},{url:"assets/cli_install.md.0f64591b.lean.js",revision:null},{url:"assets/cli_retry.md.5152134a.js",revision:null},{url:"assets/cli_retry.md.5152134a.lean.js",revision:null},{url:"assets/cli_why.md.454035c4.js",revision:null},{url:"assets/cli_why.md.454035c4.lean.js",revision:null},{url:"assets/config_engineer.md.e28c6d7a.js",revision:null},{url:"assets/config_engineer.md.e28c6d7a.lean.js",revision:null},{url:"assets/config_index.md.3e03b987.js",revision:null},{url:"assets/config_index.md.3e03b987.lean.js",revision:null},{url:"assets/config_show.md.ca383b18.js",revision:null},{url:"assets/config_show.md.ca383b18.lean.js",revision:null},{url:"assets/faq_index.md.397504c5.js",revision:null},{url:"assets/faq_index.md.397504c5.lean.js",revision:null},{url:"assets/guide_index.md.735946c7.js",revision:null},{url:"assets/guide_index.md.735946c7.lean.js",revision:null},{url:"assets/guide_introduction.md.9f37125f.js",revision:null},{url:"assets/guide_introduction.md.9f37125f.lean.js",revision:null},{url:"assets/guide_why.md.b1ab36e8.js",revision:null},{url:"assets/guide_why.md.b1ab36e8.lean.js",revision:null},{url:"assets/index.md.ef67b4dd.js",revision:null},{url:"assets/index.md.ef67b4dd.lean.js",revision:null},{url:"assets/recipes_breakingchange.md.fd23e606.js",revision:null},{url:"assets/recipes_breakingchange.md.fd23e606.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.c034ccc5.js",revision:null},{url:"assets/recipes_defaultIssues.md.c034ccc5.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.c41acf7a.js",revision:null},{url:"assets/recipes_defaultScope.md.c41acf7a.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.fd340aae.js",revision:null},{url:"assets/recipes_defaultSubject.md.fd340aae.lean.js",revision:null},{url:"assets/recipes_index.md.c868eb83.js",revision:null},{url:"assets/recipes_index.md.c868eb83.lean.js",revision:null},{url:"assets/recipes_issuePrefixs.md.33b44e48.js",revision:null},{url:"assets/recipes_issuePrefixs.md.33b44e48.lean.js",revision:null},{url:"assets/style.a53447f6.css",revision:null},{url:"manifest.webmanifest",revision:"ded4130fbc92eee46bdc7bb0dd608c58"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
