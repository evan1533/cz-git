import{_ as n,o as a,c as l,b as p,a as o,r as e}from"./app.2ac217d2.js";const B=JSON.parse('{"title":"czg","titleTemplate":"\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u5DE5\u5177\u751F\u6210\u6807\u51C6\u5316\u7684 git commit message","description":"\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u5DE5\u5177\u751F\u6210\u6807\u51C6\u5316\u7684 git commit message","frontmatter":{"title":"czg","titleTemplate":"\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u5DE5\u5177\u751F\u6210\u6807\u51C6\u5316\u7684 git commit message","description":"\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u5DE5\u5177\u751F\u6210\u6807\u51C6\u5316\u7684 git commit message"},"headers":[{"level":2,"title":"\u5FEB\u901F\u5165\u95E8","slug":"\u5FEB\u901F\u5165\u95E8"},{"level":2,"title":"\u7279\u6027\u4EE5\u53CA\u5E2E\u52A9\u6587\u6863","slug":"\u7279\u6027\u4EE5\u53CA\u5E2E\u52A9\u6587\u6863"}],"relativePath":"cli/index.md","lastUpdated":1656316713000}'),c={name:"cli/index.md"},t=o(`<p align="center"><a href="https://www.npmjs.com/package/czg"><img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&amp;logo=npm"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social"></a></p><br><ul><li><strong>\u8F7B\u91CF\u7EA7</strong> : \u96F6\u4F9D\u8D56\u9879 (1.3MB)</li><li><strong>\u7B80\u5355\u4E14\u5FEB\u901F</strong> : \u65E0\u9700\u524D\u7F6E\u914D\u7F6E\uFF0C\u65E0\u9700\u9002\u914D\u5668\uFF0C\u6CA1\u6709\u989D\u5916\u7684\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>npx</code> | <code>npm \u811A\u672C</code> | <code>\u5168\u5C40\u4E0B\u8F7D</code>... \u5728\u4F60\u7684\u4EFB\u4F55\u9879\u76EE\u4E2D\u5FEB\u901F\u542F\u52A8</li><li><strong>\u53EF\u5B9A\u5236\u5316</strong> : \u5185\u90E8\u5305\u542B cz-git \u7684\u6838\u5FC3\uFF0C\u7EE7\u627F\u4E86 cz-git \u7684\u6240\u6709\u7279\u6027\uFF0C\u5177\u6709\u76F8\u540C\u7684\u884C\u4E3A\uFF0C\u914D\u7F6E\u52A0\u8F7D... \u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u914D\u7F6E\u7684 CLI \u7684\u884C\u4E3A</li></ul><p><img src="https://user-images.githubusercontent.com/40693636/175753060-cf4f5e48-100d-430a-93e9-31b17f42802f.gif" alt="demo"></p><h2 id="\u5FEB\u901F\u5165\u95E8" tabindex="-1">\u5FEB\u901F\u5165\u95E8 <a class="header-anchor" href="#\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a></h2><ol><li>\u4F60\u5728\u4F60\u4EFB\u4F55\u7684\u9879\u76EE\u4E2D\u8FD0\u884C <code>npx czg</code></li><li>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u8FDB\u884C\u7B80\u5355\u7684\u914D\u7F6E\uFF0C\u67E5\u770B\u6548\u679C\u3002\u521B\u5EFA <code>.czrc</code> \u5728\u4F60\u7684\u9879\u76EE\u6839\u8DEF\u5F84\u4E2D\uFF0C\u7136\u540E\u8FD0\u884C\u76F8\u540C\u7684\u547D\u4EE4</li></ol><div class="language-json"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">scopes</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;hello&quot;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">scopes</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;hello&quot;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5173\u4E8E\u914D\u7F6E\u6587\u4EF6\u4EE5\u53CA\u914D\u7F6E\u9879\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u67E5\u770B \u2192 <a href="/zh/config/">\u914D\u7F6E</a></p></div><h2 id="\u7279\u6027\u4EE5\u53CA\u5E2E\u52A9\u6587\u6863" tabindex="-1">\u7279\u6027\u4EE5\u53CA\u5E2E\u52A9\u6587\u6863 <a class="header-anchor" href="#\u7279\u6027\u4EE5\u53CA\u5E2E\u52A9\u6587\u6863" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ czg --help</span></span>
<span class="line"><span style="color:#DBD7CA;">NAME:</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg - Interactive Commitizen CLI that generate standardized commit messages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">WEBSITE:</span></span>
<span class="line"><span style="color:#DBD7CA;">    https://cz-git.qbenben.com/cli/</span></span>
<span class="line"><span style="color:#DBD7CA;">    https://github.com/Zhengqbbb/cz-git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">SYNOPSIS:</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">subcommand</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">options</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">SUBCOMMAND:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">break</span><span style="color:#DBD7CA;">          Turn on BREAKING CHANGE mode, Add </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> mark on header</span></span>
<span class="line"><span style="color:#DBD7CA;">    emoji          Turn on output message with emoji mode</span></span>
<span class="line"><span style="color:#DBD7CA;">    checkbox       Turn on scope checkbox mode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">OPTIONS:</span></span>
<span class="line"><span style="color:#DBD7CA;">    --config       Specify the configuration file to use</span></span>
<span class="line"><span style="color:#DBD7CA;">    --retry</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">-r     Direct retry submit by the last message</span></span>
<span class="line"><span style="color:#DBD7CA;">    --help</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">-h      Show </span><span style="color:#E0A569;">help</span></span>
<span class="line"><span style="color:#DBD7CA;">    --version      Show version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">EXAMPLES:</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg emoji</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg --config=</span><span style="color:#C98A7D;">&quot;./config/cz.json&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Extends </span><span style="color:#C98A7D;">&#39;git commit&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">command</span><span style="color:#DBD7CA;"> and options.</span></span>
<span class="line"><span style="color:#DBD7CA;">See </span><span style="color:#C98A7D;">&#39;git commit --help&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> more information.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ czg --help</span></span>
<span class="line"><span style="color:#393A34;">NAME:</span></span>
<span class="line"><span style="color:#393A34;">    czg - Interactive Commitizen CLI that generate standardized commit messages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">WEBSITE:</span></span>
<span class="line"><span style="color:#393A34;">    https://cz-git.qbenben.com/cli/</span></span>
<span class="line"><span style="color:#393A34;">    https://github.com/Zhengqbbb/cz-git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">SYNOPSIS:</span></span>
<span class="line"><span style="color:#393A34;">    czg </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">subcommand</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">options</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">SUBCOMMAND:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">break</span><span style="color:#393A34;">          Turn on BREAKING CHANGE mode, Add </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> mark on header</span></span>
<span class="line"><span style="color:#393A34;">    emoji          Turn on output message with emoji mode</span></span>
<span class="line"><span style="color:#393A34;">    checkbox       Turn on scope checkbox mode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">OPTIONS:</span></span>
<span class="line"><span style="color:#393A34;">    --config       Specify the configuration file to use</span></span>
<span class="line"><span style="color:#393A34;">    --retry</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">-r     Direct retry submit by the last message</span></span>
<span class="line"><span style="color:#393A34;">    --help</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">-h      Show </span><span style="color:#B58451;">help</span></span>
<span class="line"><span style="color:#393A34;">    --version      Show version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXAMPLES:</span></span>
<span class="line"><span style="color:#393A34;">    czg</span></span>
<span class="line"><span style="color:#393A34;">    czg emoji</span></span>
<span class="line"><span style="color:#393A34;">    czg --config=</span><span style="color:#B56959;">&quot;./config/cz.json&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Extends </span><span style="color:#B56959;">&#39;git commit&#39;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">command</span><span style="color:#393A34;"> and options.</span></span>
<span class="line"><span style="color:#393A34;">See </span><span style="color:#B56959;">&#39;git commit --help&#39;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> more information.</span></span>
<span class="line"></span></code></pre></div>`,10);function r(i,y,A,m,g,d){const s=e("Hero");return a(),l("div",null,[p(s,{title:"czg",description:"\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u5DE5\u5177\u751F\u6210\u6807\u51C6\u5316\u7684 git commit message"}),t])}var h=n(c,[["render",r]]);export{B as __pageData,h as default};
