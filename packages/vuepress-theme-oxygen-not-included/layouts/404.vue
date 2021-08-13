<template lang="html">
  <img id="error-img" src="../asset/error_message.png" alt="Error Message">
  <div id="error-msg">
    <h1>404 NOT FOUND</h1>
    <p>救命！黑洞吞噬了这个页面！</p>
    <a onclick="window.history.back()">返回上一页</a>
    <a :href="homeLink">{{ homeText }}</a>
    <a onclick="window.close()">关闭此页</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouteLocale } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client'

export default defineComponent({
  name: '404',
  setup() {
    const routeLocale = useRouteLocale()
    const themeLocale = useThemeLocaleData()

    const homeLink = themeLocale.value.home ?? routeLocale.value
    const homeText = themeLocale.value.backToHome ?? '回到首页'

    return {
      homeLink,
      homeText
    }
  }
})
</script>

<style lang="scss">
  @import "../styles/vars";

  html, body, #app { height: 100%; }

  #app {
    color: $text-shade;
    background-color: $bg-404;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #error-img {
    width: 380px;
    display: inline-block;
  }

  #error-msg {
    h1 { font-size: xxx-large }
    p { font-size: x-large }
    a {
      color: $text-shade;
      display: inline-block;
      padding: 12px 18px;
      margin-right: 12px;
      background-color: $bg-secondary;
      border: 1px solid $border;
      &:hover {
        background-color: $bg-secondary-action;
      }
    }
  }

  @media (max-width: 719px) {
    #app {
      flex-direction: column;
    }
  }
</style>