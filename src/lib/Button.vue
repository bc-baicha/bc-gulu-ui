<template>
  <!-- :class="`bc-${theme} bc-${size}`" -->
  <button :disabled="disable" class="bc-button" :class="classes">
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
    size: {
      type: String,
      default: "normal",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`bc-${theme}`]: theme,
        [`bc-${size}`]: size,
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
