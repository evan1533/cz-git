import{_ as s,o as n,c as a,a as e}from"./app.88e0e186.js";const y=JSON.parse('{"title":"czg","titleTemplate":"Interactive Commitizen CLI that generate standardized commit messages","description":"Interactive Commitizen CLI that generate standardized commit messages","frontmatter":{"title":"czg","titleTemplate":"Interactive Commitizen CLI that generate standardized commit messages","description":"Interactive Commitizen CLI that generate standardized commit messages"},"headers":[{"level":2,"title":"Quick start","slug":"quick-start"},{"level":2,"title":"Features and Help","slug":"features-and-help"},{"level":2,"title":"Projects using czg CLI","slug":"projects-using-czg-cli"},{"level":2,"title":"LICENSE","slug":"license"}],"relativePath":"cli/index.md","lastUpdated":1658259150000}'),l={name:"cli/index.md"},p=e(`<h1 class="clip">czg</h1><p class="description">Interactive Commitizen CLI that generate standardized commit messages</p><p align="center"><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social"></a><a target="_blank" href="https://github.com/agarrharr/awesome-cli-apps#git"><img style="display:inline-block;margin:0.2em;" alt="awesome-cli-app" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg"></a><br><a href="https://www.npmjs.com/package/czg"><img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/czg?style=flat-square&amp;logo=npm"></a><a href="https://formulae.brew.sh/formula/czg"><img style="display:inline-block;margin:0.2em;" alt="homebrew" src="https://img.shields.io/homebrew/v/czg?style=flat-square&amp;logo=homebrew&amp;label=homebrew"></a></p><br><ul><li><strong>Lightweight</strong> : Zero Dependencies (1.3MB)</li><li><strong>Simpler and Faster</strong> : No plugin, No adapter, No extra steps, You can use <code>npx</code> | <code>npm script</code> | <code>global install</code>... quick start CLI in your any project</li><li><strong>Highly Customizable</strong> : Internally contains the core of cz-git. Extend all the features of cz-git. Same behavior, Same configuration loader... You can customize the commit CLI according to your need</li></ul><p><img src="https://user-images.githubusercontent.com/40693636/175753060-cf4f5e48-100d-430a-93e9-31b17f42802f.gif" alt="demo"></p><h2 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h2><ol><li>Now try it out, use <code>npx czg</code> in <strong>your any projects</strong></li><li>And then, let&#39;s try to simply configure it. Create a <code>.czrc</code> file in the project root directory</li></ol><div class="language-json"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
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
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>More information about configure file and options. See \u2192 <a href="/config/">Config</a></p></div><h2 id="features-and-help" tabindex="-1">Features and Help <a class="header-anchor" href="#features-and-help" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ czg --help</span></span>
<span class="line"><span style="color:#DBD7CA;">NAME:</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg - Interactive Commitizen CLI that generate standardized commit messages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">WEBSITE:</span></span>
<span class="line"><span style="color:#DBD7CA;">    https://cz-git.qbb.sh/cli/</span></span>
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
<span class="line"><span style="color:#DBD7CA;">    :, --alias     Directly submit the defined commit message</span></span>
<span class="line"><span style="color:#DBD7CA;">    -r, --retry    Directly retry submit by the last message</span></span>
<span class="line"><span style="color:#DBD7CA;">    -h, --help     Show </span><span style="color:#E0A569;">help</span></span>
<span class="line"><span style="color:#DBD7CA;">    -v, --version  Show version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">EXAMPLES:</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg emoji</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg :fd</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg --alias=fd</span></span>
<span class="line"><span style="color:#DBD7CA;">    czg --config=</span><span style="color:#C98A7D;">&quot;./config/cz.json&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Extends </span><span style="color:#C98A7D;">&#39;git commit&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">command</span><span style="color:#DBD7CA;"> and options.</span></span>
<span class="line"><span style="color:#DBD7CA;">See </span><span style="color:#C98A7D;">&#39;git commit --help&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> more information.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ czg --help</span></span>
<span class="line"><span style="color:#393A34;">NAME:</span></span>
<span class="line"><span style="color:#393A34;">    czg - Interactive Commitizen CLI that generate standardized commit messages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">WEBSITE:</span></span>
<span class="line"><span style="color:#393A34;">    https://cz-git.qbb.sh/cli/</span></span>
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
<span class="line"><span style="color:#393A34;">    :, --alias     Directly submit the defined commit message</span></span>
<span class="line"><span style="color:#393A34;">    -r, --retry    Directly retry submit by the last message</span></span>
<span class="line"><span style="color:#393A34;">    -h, --help     Show </span><span style="color:#B58451;">help</span></span>
<span class="line"><span style="color:#393A34;">    -v, --version  Show version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">EXAMPLES:</span></span>
<span class="line"><span style="color:#393A34;">    czg</span></span>
<span class="line"><span style="color:#393A34;">    czg emoji</span></span>
<span class="line"><span style="color:#393A34;">    czg :fd</span></span>
<span class="line"><span style="color:#393A34;">    czg --alias=fd</span></span>
<span class="line"><span style="color:#393A34;">    czg --config=</span><span style="color:#B56959;">&quot;./config/cz.json&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Extends </span><span style="color:#B56959;">&#39;git commit&#39;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">command</span><span style="color:#393A34;"> and options.</span></span>
<span class="line"><span style="color:#393A34;">See </span><span style="color:#B56959;">&#39;git commit --help&#39;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> more information.</span></span>
<span class="line"></span></code></pre></div><h2 id="projects-using-czg-cli" tabindex="-1">Projects using czg CLI <a class="header-anchor" href="#projects-using-czg-cli" aria-hidden="true">#</a></h2><table><tr><td align="center" width="200px"><a target="_blank" href="https://github.com/element-plus/element-plus"><img src="https://user-images.githubusercontent.com/40693636/172459748-939e3f1b-a694-4c09-b643-e1dce602105c.png" alt="Element Plus logo" width="40"><sub>Element Plus</sub></a></td><td align="center" width="200px"><a target="_blank" href="https://github.com/Tencent/tdesign-vue-next"><img src="https://user-images.githubusercontent.com/40693636/170830562-38e4c998-9af4-4303-9270-4f14e0942b08.png" alt="TDesign-Vue-Next logo" width="40"><sub>TDesign-Vue-Next</sub></a></td><td align="center" width="200px"><a target="_blank" href="https://github.com/vbenjs/vue-vben-admin"><img src="https://user-images.githubusercontent.com/40693636/178189964-931a1fc2-92df-4d04-8d0d-b748fc318c0a.png" alt="Vben-Admin logo" width="40"><sub>Vben-Admin</sub></a></td><td align="center" width="200px"><a target="_blank" href="https://github.com/buqiyuan/vue3-antd-admin"><img src="https://user-images.githubusercontent.com/40693636/170830597-31d6f0d7-2c93-491b-a984-7bf21db8f75b.png" alt="Vue3-Antd-Admin logo" width="40"><sub>Vue3-Antd-Admin</sub></a></td></tr></table><h2 id="license" tabindex="-1">LICENSE <a class="header-anchor" href="#license" aria-hidden="true">#</a></h2><p>MIT Copyright (c) 2022-present Qiubin Zheng <a href="mailto:zhengqbbb@gmail.com">zhengqbbb@gmail.com</a> (<a href="https://github.com/Zhengqbbb" target="_blank" rel="noopener noreferrer">https://github.com/Zhengqbbb</a>)</p><blockquote><p>I just do my best to make thing well, Could you give a <a href="https://github.com/Zhengqbbb/cz-git" target="_blank" rel="noopener noreferrer">star \u2B50</a> to encourage me ?</p></blockquote>`,17),o=[p];function t(c,i,r,g,d,m){return n(),a("div",null,o)}var u=s(l,[["render",t]]);export{y as __pageData,u as default};
