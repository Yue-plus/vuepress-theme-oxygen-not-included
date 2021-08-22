import { defineClientAppEnhance } from '@vuepress/client'
import Overlays from './components/global/Overlays.vue'

// 参考：https://vuepress2.netlify.app/zh/advanced/cookbook/usage-of-client-app-enhance.html#%E6%B3%A8%E5%86%8C-vue-%E7%BB%84%E4%BB%B6
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Overlays', Overlays)
})