<template>
  <span>{{ src }}</span>
</template>

<script>
  import { defineComponent, h, ref } from 'vue'
  // import type, { Component, VNode } from 'vue'

  export default defineComponent({
    name: 'Overlays',
    props: {
      src: {
        type: String,
        required: false,
        default: '@#@#@#@###@#@#'
      }
    }

    // setup(_, { slots }) {
      /**
       * 当前选中项的索引
       * index of current active item
       */
      // const overlayIndex = ref(-1)

      // console.log('@@@@@@@@@@@')

      // return () => {
      //   return 'asd';
      // }
    // }
  })
</script>

