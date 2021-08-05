const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-oxygen-not-included',
  extends: '@vuepress/theme-default',
  layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      // 404: path.resolve(__dirname, 'layouts/404.vue'),
  },
}