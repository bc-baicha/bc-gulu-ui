<template>
  <!-- :class="`theme-${theme}`" -->
  <button class="gulu-button" :class="classes">
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup(props) {
    const { theme } = props;
    const classes = computed(() => {
      return {
        [`bc-${theme}`]: theme,
      };
    });
    return { classes };
  },
  // computed: { //vue2的语法
  //   classes: function () {
  //     return {
  //       [`bc-${this.theme}`]: this.theme,
  //     };
  //   },
  // },
};
</script>
