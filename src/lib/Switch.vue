<template>
  <div class="bc-switch_wrap">
    <Button @click="toggle" :class="{ checked: value }"><span></span></Button>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
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
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.bc-switch_wrap {
  button {
    height: $h;
    width: $h * 2;
    border: none;
    background-color: grey;
    border-radius: 11px;
    position: relative;
    transition: background-color 0.25s;
    cursor: pointer;
  }
  button.checked {
    background-color: #5468ff;
  }
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: 8px;
    transition: all 0.25s;
  }
  button.checked {
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  button:active {
    > span {
      width: $h2 + 4px;
    }
  }
  button.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
