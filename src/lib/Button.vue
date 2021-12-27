<template>
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
<style lang="scss">
$hover: #1890ff;
.bc-button {
  padding: 10px 20px;
  text-align: center;
  background-color: #fff;
  border: solid 1px #ccc;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 15px;
  font-weight: 400;
}
.bc-button:focus {
  border-color: $hover;
  color: $hover;
  animation: boxShadowColor 0.5s linear 1;
}
@keyframes boxShadowColor {
  0% {
    box-shadow: 0px 0px 1px;
  }
  25% {
    box-shadow: 0px 0px 2px;
  }
  50% {
    box-shadow: 0px 0px 3px;
  }
  75% {
    box-shadow: 0px 0px 4px;
  }
  100% {
    box-shadow: 0px 0px 1px;
  }
}
.bc-button:hover {
  color: $hover;
}
.bc-large {
  padding: 5px 10px;
}
.bc-big {
  padding: 12px 35px;
}
</style>
