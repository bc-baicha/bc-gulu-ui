<template>
  <button :disabled="disable || loading" class="bc-button" :class="classes">
    <div class="bc-button-wrap">
      <span v-if="loading" class="bc-loadingIndicator"></span>
      <slot />
    </div>
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
import "./styles/button.scss";
export default {
  props: {
    theme: {
      type: String,
      default: "",
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
    shape: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { theme, size, shape } = props;
    const classes = computed(() => {
      return {
        [`bc-${theme}`]: theme,
        [`bc-${size}`]: size,
        [`bc-${shape}`]: shape,
      };
    });
    return { classes };
  },
};
</script>
