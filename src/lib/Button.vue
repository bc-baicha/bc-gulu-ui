<template>
  <button :disabled="disable" class="bc-button" :class="classes">
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
import "./styles/button.scss";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "middle",
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
};
</script>
