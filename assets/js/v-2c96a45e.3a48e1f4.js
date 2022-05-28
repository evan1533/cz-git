"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[852],{1588:(e,i,l)=>{l.r(i),l.d(i,{data:()=>a});const a={key:"v-2c96a45e",path:"/zh/guide/faq.html",title:"常见问题",lang:"zh-CN",frontmatter:{title:"常见问题",sidebarDepth:1,lastUpdated:!0,sitemap:{priority:.6}},excerpt:"",headers:[{level:2,title:"Windows 用户使用",slug:"windows-用户使用",children:[]},{level:2,title:"全局安装后无法找到命令",slug:"全局安装后无法找到命令",children:[]},{level:2,title:"终端无法显示Emoji符号",slug:"终端无法显示emoji符号",children:[]},{level:2,title:"为什么输出的 Emoji符号要放在 subject",slug:"为什么输出的-emoji符号要放在-subject",children:[]}],git:{updatedTime:1653750337e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:1}]},filePathRelative:"zh/guide/faq.md"}},7914:(e,i,l)=>{l.r(i),l.d(i,{default:()=>b});var a=l(7208);const r=(0,a.uE)('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h2 id="windows-用户使用" tabindex="-1"><a class="header-anchor" href="#windows-用户使用" aria-hidden="true">#</a> Windows 用户使用</h2><ul><li>Windows用户建议不要使用 powershell, cmd 进行命令行的使用</li><li>因为他们不是基于 POSIX SHELL 规范，即不是标准终端环境</li><li>建议也不要使用 gitbash，因为该终端并不是交互型终端，上下选择会受到很大的使用体验</li><li><strong>建议使用 Windows Terminal 结合 WSL ，你在日常的开发和使用中也应该如此</strong></li></ul><h2 id="全局安装后无法找到命令" tabindex="-1"><a class="header-anchor" href="#全局安装后无法找到命令" aria-hidden="true">#</a> 全局安装后无法找到命令</h2><ul><li>输入命令 <code>npm prefix -g</code> 查看当中npm全局下载的路径是否为根目录下</li><li>大概率是因为使用 nvm 更改了 npm 的全局下载路径前缀</li><li>可以打开.zshrc 或者 .bashrc 将加载 nvm 部分先注释掉，重新开启终端检查</li></ul><h2 id="终端无法显示emoji符号" tabindex="-1"><a class="header-anchor" href="#终端无法显示emoji符号" aria-hidden="true">#</a> 终端无法显示Emoji符号</h2>',6),t=(0,a.Uk)("终端无法Emoji符号，大概率是因为你的终端对于 emoji/unicode 字符支持较差，但是不影响提交 因为最终输出提交的是 Emoji Code，可以考虑更换终端与"),n={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("字体"),o=(0,a._)("h2",{id:"为什么输出的-emoji符号要放在-subject",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#为什么输出的-emoji符号要放在-subject","aria-hidden":"true"},"#"),(0,a.Uk)(" 为什么输出的 Emoji符号要放在 subject")],-1),s=(0,a.Uk)("我也知道会破坏最终输出格式的美观体验，但Emoji 放在 subject 是因为遵循 "),h={href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("Angular commit"),u=(0,a.Uk)(" 规范不能放于 type 中"),m={},b=(0,l(3243).Z)(m,[["render",function(e,i){const l=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[r,(0,a._)("ul",null,[(0,a._)("li",null,[t,(0,a._)("a",n,[d,(0,a.Wm)(l)])])]),o,(0,a._)("ul",null,[(0,a._)("li",null,[s,(0,a._)("a",h,[c,(0,a.Wm)(l)]),u])])])}]])}}]);