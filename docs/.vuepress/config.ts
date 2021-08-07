import type { DefaultThemeOptions } from 'vuepress'
import { defineUserConfig } from 'vuepress'
import * as path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'VuePress Theme Oxygen Not Included',
  description: '《缺氧》游戏风格主题，开发中……',
  theme: 'vuepress-theme-oxygen-not-included',

  themeConfig: {
    navbar: [
      {
        text: '主题文档',
        children: [
          { text: '文档：开始之前', link: '/guide/' },
          { text: '文档：主题配置', link: '/guide/config.md' }
        ]
      },
      {
        text: '关于',
        children: [
          { text: '关于：《缺氧》', link: '/about/OxygenNotIncluded.html' }
        ]
      }
    ],
    logo: '/icon/errand_research.png',
    repo: 'https://github.com/Yue-plus/vuepress-theme-oxygen-not-included',
    editLinkText: '编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    backToHome: '返回首页'
  },
})