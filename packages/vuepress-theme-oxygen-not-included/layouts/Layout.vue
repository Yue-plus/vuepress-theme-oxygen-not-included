<template>
  <Layout>
<!--    <template #page-bottom>-->
<!--      <div class="my-footer">This is my custom page footer</div>-->
<!--    </template>-->
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>

<style lang="scss">
@import '@vuepress/plugin-palette/palette'; // 此文件由 VuePress 动态生成
@import '../styles/vars';
@import '../styles/normalize';
@import '../styles/navbar';
@import '../styles/home';
@import '../styles/sidebar';
@import '../styles/custom-container';
@import '../styles/badge';

//.my-footer {
//  text-align: center;
//}
</style>

<!-- 此文件由 VuePress 动态生成 -->
<style lang="scss" src="@vuepress/plugin-palette/style"></style>