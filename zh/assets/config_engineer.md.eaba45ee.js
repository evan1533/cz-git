import{_ as e,o,c as t,a as s}from"./app.6742cf19.js";const m=JSON.parse('{"title":"\u5DE5\u7A0B\u5316\u76F8\u5173","description":"","frontmatter":{"title":"\u5DE5\u7A0B\u5316\u76F8\u5173","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.6}},"headers":[{"level":2,"title":"alias","slug":"alias"},{"level":2,"title":"scopes","slug":"scopes"},{"level":2,"title":"scopeOverrides","slug":"scopeoverrides"},{"level":2,"title":"scopeFilters","slug":"scopefilters"},{"level":2,"title":"enableMultipleScopes","slug":"enablemultiplescopes"},{"level":2,"title":"scopeEnumSeparator","slug":"scopeenumseparator"},{"level":2,"title":"allowCustomScopes","slug":"allowcustomscopes"},{"level":2,"title":"allowEmptyScopes","slug":"allowemptyscopes"},{"level":2,"title":"markBreakingChangeMode","slug":"markbreakingchangemode"},{"level":2,"title":"allowBreakingChanges","slug":"allowbreakingchanges"},{"level":2,"title":"upperCaseSubject","slug":"uppercasesubject"},{"level":2,"title":"breaklineNumber","slug":"breaklinenumber"},{"level":2,"title":"breaklineChar","slug":"breaklinechar"},{"level":2,"title":"skipQuestions","slug":"skipquestions"},{"level":2,"title":"issuePrefixs","slug":"issueprefixs"},{"level":2,"title":"allowCustomIssuePrefixs","slug":"allowcustomissueprefixs"},{"level":2,"title":"allowEmptyIssuePrefixs","slug":"allowemptyissueprefixs"},{"level":2,"title":"maxHeaderLength","slug":"maxheaderlength"},{"level":2,"title":"maxSubjectLength","slug":"maxsubjectlength"},{"level":2,"title":"minSubjectLength","slug":"minsubjectlength"}],"relativePath":"config/engineer.md","lastUpdated":1656670124000}'),l={name:"config/engineer.md"},i=s('<h1 id="\u5DE5\u7A0B\u5316\u89C4\u8303\u5316\u76F8\u5173" tabindex="-1">\u5DE5\u7A0B\u5316\u89C4\u8303\u5316\u76F8\u5173 <a class="header-anchor" href="#\u5DE5\u7A0B\u5316\u89C4\u8303\u5316\u76F8\u5173" aria-hidden="true">#</a></h1><h2 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5B9A\u4E49\u5E38\u7528\u7684 commit message \u522B\u540D</li><li><strong>\u7C7B\u578B</strong> : <code>{ [alias: string]: string }</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>{ fd: &quot;docs: fix typos&quot; }</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u66F4\u591A\u7528\u6CD5\u548C\u793A\u4F8B <a href="/zh/recipes/alias.html">\u21D2 \u66F4\u591A\u5C0F\u7A8D\u95E8</a></p></div><h2 id="scopes" tabindex="-1">scopes <a class="header-anchor" href="#scopes" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49\u9009\u62E9 <strong>\u6A21\u5757\u8303\u56F4</strong> \u547D\u4EE4\u884C\u663E\u793A\u4FE1\u606F</li><li><strong>\u7C7B\u578B</strong> : <code>string[] | Array&lt;{ name: string, value?: string }&gt;</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>[]</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F60\u4F7F\u7528 <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a> \u89C4\u5219\u5B9A\u4E49\u4E86 <code>scope-enum</code>\uFF0C\u4F1A\u81EA\u52A8\u5F15\u5165\u3002<br><a href="/zh/recipes/#scopes">\u21D2 \u66F4\u591A\u5C0F\u7A8D\u95E8</a></p></div><h2 id="scopeoverrides" tabindex="-1">scopeOverrides <a class="header-anchor" href="#scopeoverrides" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49\u9009\u62E9\u4E86\u7279\u5B9A<strong>\u7C7B\u578B</strong>\u540E <strong>\u8986\u76D6\u6A21\u5757\u8303\u56F4</strong> \u547D\u4EE4\u884C\u663E\u793A\u4FE1\u606F</li><li><strong>\u7C7B\u578B</strong> : <br><code>{ [type: string]: string[] | Array&lt;{ name: string, value?: string }&gt; } | undefined</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>undefined</code></li><li><strong>\u4F8B\u5B50</strong> : <code>scopeOverrides: { &quot;test&quot;: [&quot;e2eTest&quot;, &quot;unitTest&quot;] }</code></li><li><strong>\u4F7F\u7528</strong> : \u9488\u5BF9\u9009\u62E9 <mark>\u7279\u5B9A</mark> \u7684 commit <strong>\u7C7B\u578B</strong> <code>type</code> \u540E\u9009\u62E9\u6A21\u5757\u8303\u56F4\u65F6\u663E\u793A \u81EA\u5B9A\u4E49\u7684\u6A21\u5757\u8303\u56F4\u9009\u62E9</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u5B9A\u4E49<code>scopeOverrides</code> \u5C31\u8981\u5B9A\u4E49\u901A\u7528\u7684 <code>scopes</code></p></div><h2 id="scopefilters" tabindex="-1">scopeFilters <a class="header-anchor" href="#scopefilters" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : Filter select of prompt to select module scopes by the scope.value</li><li><strong>\u63CF\u8FF0</strong> : \u6839\u636E scope.value \u8FC7\u6EE4\u6A21\u5757\u8303\u56F4\u4E2D\u7684\u9009\u9879</li><li><strong>\u7C7B\u578B</strong> : string[]</li><li><strong>\u9ED8\u8BA4</strong> : <code>[&quot;.DS_Store&quot;]</code></li></ul><h2 id="enablemultiplescopes" tabindex="-1">enableMultipleScopes <a class="header-anchor" href="#enablemultiplescopes" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u5F00\u542F\u5728\u9009\u62E9 <strong>\u6A21\u5757\u8303\u56F4</strong> \u65F6\u4F7F\u7528\u591A\u9009\u6A21\u5F0F</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>false</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5C1D\u8BD5\u8FD0\u884C\u547D\u4EE4 <strong>\u53EF\u5728\u5F53\u524D\u4F1A\u8BDD\u76F4\u63A5\u5F00\u542F\u591A\u9009\u6A21\u5F0F</strong></p><ul><li>\u4F7F\u7528 Commitizen CLI: <code>checkbox=1 cz</code></li><li>\u4F7F\u7528 cz-git CLI: <code>czg checkbox</code> \u793A\u4F8B\u4E0E\u4F7F\u7528\u65B9\u5F0F <a href="/zh/recipes/#\u652F\u6301\u591A\u9009-scopes">\u21D2 \u67E5\u770B\u5C0F\u7A8D\u95E8</a></li></ul></div><h2 id="scopeenumseparator" tabindex="-1">scopeEnumSeparator <a class="header-anchor" href="#scopeenumseparator" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5728\u591A\u9009\u6A21\u5F0F\u4E0B <strong>\u6A21\u5757\u8303\u56F4</strong> \u4E4B\u95F4\u7684\u5206\u9694\u7B26</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>,</code></li></ul><h2 id="allowcustomscopes" tabindex="-1">allowCustomScopes <a class="header-anchor" href="#allowcustomscopes" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u5728\u9009\u62E9 <strong>\u6A21\u5757\u8303\u56F4</strong> \u663E\u793A\u81EA\u5B9A\u4E49\u9009\u9879(custom)</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>true</code></li><li><strong>\u4F7F\u7528</strong> : \u6CA1\u6709\u4F7F\u7528 <code>commitlint</code>\u5E76\u4E14\u60F3\u5728\u9009\u62E9\u4E2D\u5173\u95ED\u81EA\u5B9A\u4E49\u9009\u9879</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F1A\u81EA\u52A8\u68C0\u6D4B <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a> \u89C4\u5219 <code>scope-enum</code>\u7684\u5B9A\u4E49\u662F\u5426\u4E25\u683C\uFF0C\u81EA\u52A8\u4E0D\u663E\u793A\u3002</p></div><h2 id="allowemptyscopes" tabindex="-1">allowEmptyScopes <a class="header-anchor" href="#allowemptyscopes" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u5728\u9009\u62E9 <strong>\u6A21\u5757\u8303\u56F4</strong> \u663E\u793A\u4E3A\u7A7A\u9009\u9879(empty)</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>true</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F1A\u81EA\u52A8\u68C0\u6D4B <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a> \u89C4\u5219 <code>scope-empty</code>\u7684\u5B9A\u4E49\u662F\u5426\u4E25\u683C\uFF0C\u81EA\u52A8\u4E0D\u663E\u793A\u3002</p></div><h2 id="markbreakingchangemode" tabindex="-1">markBreakingChangeMode <a class="header-anchor" href="#markbreakingchangemode" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u6DFB\u52A0\u989D\u5916\u7684\u95EE\u9898\u91CD\u5927\u53D8\u66F4(BREAKING CHANGES)\u63D0\u95EE\uFF0C\u8BE2\u95EE\u662F\u5426\u9700\u8981\u6DFB\u52A0 <mark>&quot;!&quot;</mark> \u6807\u8BC6\u4E8E\u5934\u90E8</li><li><strong>\u4F7F\u7528</strong> : \u5F53\u4F60\u60F3\u6DFB\u52A0 ! \u6807\u8BC6\u4E8E\u5934\u90E8\uFF0C\u8868\u660E\u8BE5 commit \u4E3A\u91CD\u5927\u53D8\u66F4\u65F6\uFF0C\u8BF7\u4F7F\u7528\u8BE5\u9009\u9879</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>false</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u66F4\u591A\u7528\u6CD5\u4E0E\u793A\u4F8B <a href="/zh/recipes/breakingchange.html">\u21D2 \u67E5\u770B\u5C0F\u7A8D\u95E8</a></p></div><h2 id="allowbreakingchanges" tabindex="-1">allowBreakingChanges <a class="header-anchor" href="#allowbreakingchanges" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5141\u8BB8\u51FA\u73B0 \u91CD\u5927\u53D8\u66F4(BREAKING CHANGES)\u7684\u7279\u5B9A <strong>type</strong></li><li><strong>\u7C7B\u578B</strong> : <code>string[]</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>[&#39;feat&#39;, &#39;fix&#39;]</code></li></ul><h2 id="uppercasesubject" tabindex="-1">upperCaseSubject <a class="header-anchor" href="#uppercasesubject" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u81EA\u52A8\u5C06\u7B80\u77ED\u63CF\u8FF0(subject)\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8FDB\u884C\u5927\u5199\u5904\u7406</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>false</code></li></ul><h2 id="breaklinenumber" tabindex="-1">breaklineNumber <a class="header-anchor" href="#breaklinenumber" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u8BE6\u7EC6\u63CF\u8FF0(body)\u548C\u91CD\u5927\u53D8\u66F4(BREAKING CHANGES)\u4E2D\u6839\u636E\u5B57\u7B26\u8D85\u8FC7\u8BE5\u6570\u503C\u81EA\u52A8\u6362\u884C</li><li><strong>\u7C7B\u578B</strong> : <code>number</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>100</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u6CA1\u6709\u4F7F\u7528 commitlint \u5E76\u8981\u4F7F\u7528\u89C4\u8303\u5316\u65F6</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E3B\u8981\u6839\u636E<strong>\u5355\u8BCD\u5B8C\u6574\u6027</strong>\u8FDB\u884C\u6362\u884C <br> \u5982\u679C\u4F7F\u7528 commitlint \u4F1A\u81EA\u52A8\u8BFB\u53D6 <code>body-max-line-length</code> \u8FDB\u884C\u8BBE\u7F6E</p></div><h2 id="breaklinechar" tabindex="-1">breaklineChar <a class="header-anchor" href="#breaklinechar" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u8BE6\u7EC6\u63CF\u8FF0(body)\u548C\u91CD\u5927\u53D8\u66F4(BREAKING CHANGES)\u4E2D\u6362\u884C\u5B57\u7B26</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;|&quot;</code></li></ul><h2 id="skipquestions" tabindex="-1">skipQuestions <a class="header-anchor" href="#skipquestions" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49\u9009\u62E9\u6307\u5B9A\u7684\u95EE\u9898\u4E0D\u663E\u793A</li><li><strong>\u7C7B\u578B</strong> : <code>Array&lt;&quot;scope&quot; | &quot;body&quot; | &quot;breaking&quot; | &quot;footerPrefix&quot; | &quot;footer&quot;&gt;</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>[]</code></li></ul><h2 id="issueprefixs" tabindex="-1">issuePrefixs <a class="header-anchor" href="#issueprefixs" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49\u9009\u62E9issue\u524D\u7F00</li><li><strong>\u7C7B\u578B</strong> : <code>Array&lt;{ value: string, name: string }&gt;</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>[{ value: &quot;closed&quot;, name: &quot;closed: ISSUES has been processed&quot; }]</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u56FD\u5185\u7528\u6237\u5982\u679C\u4F7F\u7528 Gitee \u4F5C\u4E3A\u9879\u76EE\u7BA1\u7406\uFF0C\u90A3\u4E48\u8BE5\u5DE5\u5177\u53EF\u4EE5\u5F88\u597D<br> <mark>\u5229\u7528 commit message\u6539\u53D8issue\u72B6\u6001</mark> <a href="/zh/recipes/issuePrefixs.html">\u21D2 \u67E5\u770B\u5C0F\u7A8D\u95E8</a></p></div><h2 id="allowcustomissueprefixs" tabindex="-1">allowCustomIssuePrefixs <a class="header-anchor" href="#allowcustomissueprefixs" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u5728\u9009\u62E9 <strong>ISSUE \u524D\u7F00</strong> \u663E\u793A\u81EA\u5B9A\u4E49\u9009\u9879(custom)</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>true</code></li></ul><h2 id="allowemptyissueprefixs" tabindex="-1">allowEmptyIssuePrefixs <a class="header-anchor" href="#allowemptyissueprefixs" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u5728\u9009\u62E9 <strong>ISSUE \u524D\u7F00</strong> \u663E\u793A\u4E3A\u8DF3\u8FC7\u9009\u9879(skip)</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>true</code></li></ul><h2 id="maxheaderlength" tabindex="-1">maxHeaderLength <a class="header-anchor" href="#maxheaderlength" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5B9A\u4E49commit message\u4E2D\u7684 header \u957F\u5EA6, \u7ED9\u4E88\u5728\u547D\u4EE4\u884C\u4E2D\u7684\u6821\u9A8C\u4FE1\u606F</li><li><strong>\u7C7B\u578B</strong> : <code>number</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>Infinity</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u6CA1\u6709\u4F7F\u7528 commitlint \u5E76\u8981\u4F7F\u7528\u89C4\u8303\u5316\u65F6</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F7F\u7528 commitlint \u4F1A\u81EA\u52A8\u8BFB\u53D6 <code>header-max-length</code> \u8FDB\u884C\u8BBE\u7F6E\u7ED9\u4E88\u5728\u547D\u4EE4\u884C\u4E2D\u7684\u63D0\u793A</p></div><h2 id="maxsubjectlength" tabindex="-1">maxSubjectLength <a class="header-anchor" href="#maxsubjectlength" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5B9A\u4E49commit message\u4E2D\u7684 subject \u957F\u5EA6, \u7ED9\u4E88\u5728\u547D\u4EE4\u884C\u4E2D\u7684\u6821\u9A8C\u4FE1\u606F</li><li><strong>\u7C7B\u578B</strong> : <code>number</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>Infinity</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u6CA1\u6709\u4F7F\u7528 commitlint\uFF0C\u5E76\u8981\u4F7F\u7528\u89C4\u8303\u5316\u65F6</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F7F\u7528 commitlint \u4F1A\u81EA\u52A8\u8BFB\u53D6 <code>subject-max-length</code> \u8FDB\u884C\u8BBE\u7F6E\u7ED9\u4E88\u5728\u547D\u4EE4\u884C\u4E2D\u7684\u63D0\u793A</p></div><h2 id="minsubjectlength" tabindex="-1">minSubjectLength <a class="header-anchor" href="#minsubjectlength" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5B9A\u4E49commit message\u4E2D\u7684 subject \u957F\u5EA6, \u7ED9\u4E88\u5728\u547D\u4EE4\u884C\u4E2D\u7684\u6821\u9A8C\u4FE1\u606F</li><li><strong>\u7C7B\u578B</strong> : <code>number</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>0</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u6CA1\u6709\u4F7F\u7528 commitlint\uFF0C\u5E76\u8981\u4F7F\u7528\u89C4\u8303\u5316\u65F6</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F7F\u7528 commitlint \u4F1A\u81EA\u52A8\u8BFB\u53D6 <code>subject-min-length</code> \u8FDB\u884C\u8BBE\u7F6E\u7ED9\u4E88\u5728\u547D\u4EE4\u884C\u4E2D\u7684\u63D0\u793A</p></div>',53),r=[i];function n(a,c,d,g,u,h){return o(),t("div",null,r)}var b=e(l,[["render",n]]);export{m as __pageData,b as default};
