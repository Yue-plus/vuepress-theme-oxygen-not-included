import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import * as path from 'path';

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'VuePress Theme Oxygen Not Included',
    description: '《缺氧》游戏风格主题，开发中……',
    theme: path.resolve(__dirname, './theme'),

    themeConfig: {
        repo: 'https://github.com/Yue-plus/vuepress-theme-oxygen-not-included',
        editLinkText: '编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        backToHome: '返回首页'
    },
})