import{_ as s,o as a,c as n,a as e}from"./app.7ff3597f.js";const h=JSON.parse('{"title":"markBreakingChangeMode","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u914D\u7F6E\u9879: markBreakingChangeMode","slug":"\u4F7F\u7528\u914D\u7F6E\u9879-markbreakingchangemode"},{"level":2,"title":"\u4F7F\u7528 commitizen CLI + cz-git","slug":"\u4F7F\u7528-commitizen-cli-cz-git"},{"level":2,"title":"\u4F7F\u7528 cz-git CLI czg","slug":"\u4F7F\u7528-cz-git-cli-czg"}],"relativePath":"recipes/breakingchange.md","lastUpdated":1656137173000}'),p={name:"recipes/breakingchange.md"},l=e(`<h1 id="markbreakingchangemode" tabindex="-1">markBreakingChangeMode <a class="header-anchor" href="#markbreakingchangemode" aria-hidden="true">#</a></h1><blockquote><p>\u6DFB\u52A0 ! \u6807\u8BC6\uFF0C\u8868\u660E\u8BE5 commit \u6D88\u606F\u5C5E\u4E8E\u91CD\u5927\u53D8\u66F4</p></blockquote><p>See: \u8BE5\u89C4\u5219\u6765\u81EA <a href="https://www.conventionalcommits.org/en/v1.0.0/#examples" target="_blank" rel="noopener noreferrer">Conventional Commits</a><br> E.g:</p><div class="language-text"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;"># Commit message \u5E26\u6709 ! \u63D0\u793A\u91CD\u5927\u53D8\u66F4</span></span>
<span class="line"><span style="color:#dbd7ca;">feat!: send an email to the customer when a product is shipped</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># Commit message \u4E0E\u8303\u56F4\u4EE5\u53CA ! \u6807\u8BC6\u63D0\u793A\u91CD\u5927\u53D8\u66F4</span></span>
<span class="line"><span style="color:#dbd7ca;">feat(api)!: send an email to the customer when a product is shipped</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># Commit message \u5E26\u6709 ! \u63D0\u793A\u91CD\u5927\u53D8\u66F4\u4EE5\u53CA\u5E95\u90E8\u8BF4\u660E</span></span>
<span class="line"><span style="color:#dbd7ca;">chore!: drop support for Node 6</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">BREAKING CHANGE: use JavaScript features not available in Node 6.</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;"># Commit message \u5E26\u6709 ! \u63D0\u793A\u91CD\u5927\u53D8\u66F4</span></span>
<span class="line"><span style="color:#393a34;">feat!: send an email to the customer when a product is shipped</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Commit message \u4E0E\u8303\u56F4\u4EE5\u53CA ! \u6807\u8BC6\u63D0\u793A\u91CD\u5927\u53D8\u66F4</span></span>
<span class="line"><span style="color:#393a34;">feat(api)!: send an email to the customer when a product is shipped</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Commit message \u5E26\u6709 ! \u63D0\u793A\u91CD\u5927\u53D8\u66F4\u4EE5\u53CA\u5E95\u90E8\u8BF4\u660E</span></span>
<span class="line"><span style="color:#393a34;">chore!: drop support for Node 6</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">BREAKING CHANGE: use JavaScript features not available in Node 6.</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="\u4F7F\u7528\u914D\u7F6E\u9879-markbreakingchangemode" tabindex="-1">\u4F7F\u7528\u914D\u7F6E\u9879: <code>markBreakingChangeMode</code> <a class="header-anchor" href="#\u4F7F\u7528\u914D\u7F6E\u9879-markbreakingchangemode" aria-hidden="true">#</a></h2><blockquote><p>\u6539\u53D8 &quot;BREAKINGCHANGE&quot;\u7684\u63D0\u95EE\u65B9\u5F0F\uFF0C\u8BE2\u95EE\u662F\u5426\u9700\u8981\u6DFB\u52A0 <mark>&quot;!&quot;</mark> \u6807\u8BC6</p></blockquote><div class="language-js"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// .commitlintrc.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">/** </span><span style="color:#858585;">@</span><span style="color:#CB7676;">type</span><span style="color:#758575;"> </span><span style="color:#858585;">{</span><span style="color:#A1B567;">import(&#39;cz-git&#39;).UserConfig</span><span style="color:#858585;">}</span><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#E0A569;">module</span><span style="color:#858585;">.</span><span style="color:#E0A569;">exports</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">prompt</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">markBreakingChangeMode</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">};</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// .commitlintrc.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">/** </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">type</span><span style="color:#A0ADA0;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#6C7834;">import(&#39;cz-git&#39;).UserConfig</span><span style="color:#8E8F8B;">}</span><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#B58451;">module</span><span style="color:#8E8F8B;">.</span><span style="color:#B58451;">exports</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">prompt</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">markBreakingChangeMode</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">};</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B: <img src="https://user-images.githubusercontent.com/40693636/174950214-b294413c-b2b4-4e5b-9b8d-38deab9e8485.gif" alt="demo"></p><h2 id="\u4F7F\u7528-commitizen-cli-cz-git" tabindex="-1">\u4F7F\u7528 commitizen CLI + cz-git <a class="header-anchor" href="#\u4F7F\u7528-commitizen-cli-cz-git" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5C1D\u8BD5\u8FD0\u884C\u547D\u4EE4\u81EA\u52A8\u6DFB\u52A0\u6807\u8BC6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">break=1 cz</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">break=1 cz</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B: <img src="https://user-images.githubusercontent.com/40693636/174949733-d5cd7f0d-ac81-40e8-8cb9-158737330d7a.gif" alt="demo"></p><h2 id="\u4F7F\u7528-cz-git-cli-czg" tabindex="-1">\u4F7F\u7528 cz-git CLI <code>czg</code> <a class="header-anchor" href="#\u4F7F\u7528-cz-git-cli-czg" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5C1D\u8BD5\u8FD0\u884C\u547D\u4EE4\u81EA\u52A8\u6DFB\u52A0\u6807\u8BC6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">czg </span><span style="color:#E0A569;">break</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">czg </span><span style="color:#B58451;">break</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B: <img src="https://user-images.githubusercontent.com/40693636/175755362-2fdeed9e-cf05-4f41-b317-453154a5775c.gif" alt="demo"></p>`,16),o=[l];function c(r,t,i,d,y,m){return a(),n("div",null,o)}var b=s(p,[["render",c]]);export{h as __pageData,b as default};
