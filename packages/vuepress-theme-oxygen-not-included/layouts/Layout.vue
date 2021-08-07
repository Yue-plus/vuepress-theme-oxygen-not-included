<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">This is my custom page footer</div>
    </template>
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
@import '@vuepress/plugin-palette/palette';
@import '../styles/vars';
@import '../styles/navbar';

.my-footer {
  text-align: center;
}
</style>