<template>
  <div class="switch_wrap">
    <button @click="toggle" :class="{ checked: value }"><span></span></button>
  </div>
</template>
<script lang="ts">
import "./index.scss";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
