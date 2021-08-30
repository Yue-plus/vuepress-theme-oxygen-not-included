"use strict";(self.webpackChunkvuepress_theme_oxygen_not_included_demo=self.webpackChunkvuepress_theme_oxygen_not_included_demo||[]).push([[807],{9570:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-fffb8e28",path:"/guide/",title:"文档：在开始之前",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"步骤1: 创建并进入一个新目录",slug:"步骤1-创建并进入一个新目录",children:[]},{level:2,title:"步骤2: 初始化项目",slug:"步骤2-初始化项目",children:[]},{level:2,title:"步骤3: 将 vuepress-theme-oxygen-not-included 主题 安装为本地依赖",slug:"步骤3-将-vuepress-theme-oxygen-not-included-主题-安装为本地依赖",children:[]},{level:2,title:"步骤4: 在 package.json 中添加一些 scripts",slug:"步骤4-在-package-json-中添加一些-scripts",children:[]},{level:2,title:"步骤5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中",slug:"步骤5-将默认的临时目录和缓存目录添加到-gitignore-文件中",children:[]},{level:2,title:"步骤6: 创建第一篇文档",slug:"步骤6-创建第一篇文档",children:[]},{level:2,title:"步骤7: 在本地启动服务器来开发你的文档网站",slug:"步骤7-在本地启动服务器来开发你的文档网站",children:[]}],filePathRelative:"guide/README.md",git:{updatedTime:1628451534e3,contributors:[{name:"Yue-plus",email:"Yue_plus@foxmail.com",commits:2}]}}},5033:(e,n,s)=>{s.r(n),s.d(n,{default:()=>ae});var a=s(6252);const l=(0,a._)("h1",{id:"文档-在开始之前",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#文档-在开始之前","aria-hidden":"true"},"#"),(0,a.Uk)(" 文档：在开始之前")],-1),r=(0,a._)("p",null,"在开始之前请确保依赖环境正常：",-1),t={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("Node.js v12+"),i={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("Yarn v1 classic"),u=(0,a.Uk)(" （可选）"),p={class:"custom-container tip"},d=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),h=(0,a.Uk)("使用 "),g={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("pnpm"),_=(0,a.Uk)(" 时，需要在 "),b={href:"https://pnpm.io/zh/npmrc#shamefully-hoist",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("code",null,".npmrc",-1),f=(0,a.Uk)(" 文件中设置 "),v=(0,a._)("code",null,"shamefully-hoist=true",-1),U=(0,a.Uk)("。"),x=(0,a.Uk)("使用 "),y={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("yarn 2"),w=(0,a.Uk)(" 时，需要在 "),j={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},P=(0,a._)("code",null,".yarnrc.yml",-1),q=(0,a.Uk)(" 文件中设置 "),N=(0,a._)("code",null,"nodeLinker: 'node-modules'",-1),Y=(0,a.Uk)(" 。"),z=(0,a.uE)('<h1 id="文档-手动安装" tabindex="-1"><a class="header-anchor" href="#文档-手动安装" aria-hidden="true">#</a> 文档：手动安装</h1><p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。 如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。</p><h2 id="步骤1-创建并进入一个新目录" tabindex="-1"><a class="header-anchor" href="#步骤1-创建并进入一个新目录" aria-hidden="true">#</a> <strong>步骤1</strong>: 创建并进入一个新目录</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter\n<span class="token builtin class-name">cd</span> vuepress-starter\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="步骤2-初始化项目" tabindex="-1"><a class="header-anchor" href="#步骤2-初始化项目" aria-hidden="true">#</a> <strong>步骤2</strong>: 初始化项目</h2>',5),E=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(" init\n"),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(" init\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br")])],-1),M=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(" init\n"),(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(" init\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br")])],-1),R=(0,a._)("h2",{id:"步骤3-将-vuepress-theme-oxygen-not-included-主题-安装为本地依赖",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#步骤3-将-vuepress-theme-oxygen-not-included-主题-安装为本地依赖","aria-hidden":"true"},"#"),(0,a.Uk)(),(0,a._)("strong",null,"步骤3"),(0,a.Uk)(": 将 "),(0,a._)("strong",null,[(0,a._)("code",null,"vuepress-theme-oxygen-not-included"),(0,a.Uk)(" 主题")]),(0,a.Uk)(" 安装为本地依赖")],-1),V=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" vuepress-theme-oxygen-not-included\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),A=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" vuepress-theme-oxygen-not-included\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),C={id:"步骤4-在-package-json-中添加一些-scripts",tabindex:"-1"},H=(0,a._)("a",{class:"header-anchor",href:"#步骤4-在-package-json-中添加一些-scripts","aria-hidden":"true"},"#",-1),D=(0,a.Uk)(),L=(0,a._)("strong",null,"步骤4",-1),G=(0,a.Uk)(": 在 "),I=(0,a._)("code",null,"package.json",-1),T=(0,a.Uk)(" 中添加一些 "),O={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},B=(0,a.Uk)("scripts"),F=(0,a.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="步骤5-将默认的临时目录和缓存目录添加到-gitignore-文件中" tabindex="-1"><a class="header-anchor" href="#步骤5-将默认的临时目录和缓存目录添加到-gitignore-文件中" aria-hidden="true">#</a> <strong>步骤5</strong>: 将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="步骤6-创建第一篇文档" tabindex="-1"><a class="header-anchor" href="#步骤6-创建第一篇文档" aria-hidden="true">#</a> <strong>步骤6</strong>: 创建第一篇文档</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="步骤7-在本地启动服务器来开发你的文档网站" tabindex="-1"><a class="header-anchor" href="#步骤7-在本地启动服务器来开发你的文档网站" aria-hidden="true">#</a> <strong>步骤7</strong>: 在本地启动服务器来开发你的文档网站</h2>',6),J=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(" docs:dev\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),K=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(" run docs:dev\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Q=(0,a.Uk)("VuePress 会在 "),S={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},X=(0,a.Uk)("http://localhost:8080"),Z=(0,a.Uk)(" 启动一个热重载的开发服务器。 当修改 Markdown 文件时，浏览器中的内容也会自动更新。"),$=(0,a.Uk)("现在，应该已经有了一个简单可用的 VuePress 文档网站。 接下来，了解一下 "),ee={href:"https://vuepress2.netlify.app/zh/guide/configuration.html",target:"_blank",rel:"noopener noreferrer"},ne=(0,a.Uk)("VuePress 配置"),se=(0,a.Uk)(" 相关的内容。"),ae={render:function(e,n){const s=(0,a.up)("OutboundLink"),ae=(0,a.up)("CodeGroupItem"),le=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,r,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",t,[o,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",i,[c,(0,a.Wm)(s)]),u])]),(0,a._)("div",p,[d,(0,a._)("ul",null,[(0,a._)("li",null,[h,(0,a._)("a",g,[m,(0,a.Wm)(s)]),_,(0,a._)("a",b,[k,(0,a.Wm)(s)]),f,v,U]),(0,a._)("li",null,[x,(0,a._)("a",y,[W,(0,a.Wm)(s)]),w,(0,a._)("a",j,[P,(0,a.Wm)(s)]),q,N,Y])])]),z,(0,a.Wm)(le,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ae,{title:"YARN",active:""},{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(ae,{title:"NPM"},{default:(0,a.w5)((()=>[M])),_:1})])),_:1}),R,(0,a.Wm)(le,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ae,{title:"YARN",active:""},{default:(0,a.w5)((()=>[V])),_:1}),(0,a.Wm)(ae,{title:"NPM"},{default:(0,a.w5)((()=>[A])),_:1})])),_:1}),(0,a._)("h2",C,[H,D,L,G,I,T,(0,a._)("a",O,[B,(0,a.Wm)(s)])]),F,(0,a.Wm)(le,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ae,{title:"YARN",active:""},{default:(0,a.w5)((()=>[J])),_:1}),(0,a.Wm)(ae,{title:"NPM"},{default:(0,a.w5)((()=>[K])),_:1})])),_:1}),(0,a._)("p",null,[Q,(0,a._)("a",S,[X,(0,a.Wm)(s)]),Z]),(0,a._)("p",null,[$,(0,a._)("a",ee,[ne,(0,a.Wm)(s)]),se])],64)}}}}]);