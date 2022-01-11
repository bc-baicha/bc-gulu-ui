<template>
  <button
    :disabled="disable"
    @click="toggle"
    :class="{ checked: value }"
    ref="indicator"
  >
    {{ value ? checkedChildren : unCheckedChildren }}
    <span></span>
  </button>
</template>
<script lang="ts">
import { onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    value: Boolean,
    checkedChildren: {
      type: String,
      default: "",
    },
    unCheckedChildren: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const indicator = ref<HTMLDivElement>();
    const { checkedChildren } = props;
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    onMounted(() => {
      watchEffect(() => {
        if (checkedChildren !== "开启") {
          indicator.value.style.width = 44 + "px";
        }
        if (checkedChildren === "1") {
          indicator.value.style.paddingLeft = 10 + "px";
          indicator.value.style.paddingRight = 10 + "px";
        }
      });
    });
    return { toggle, indicator };
  },
};
</script>
<style lang="scss" scoped>
$public: #1890ff;
$h2: 18px;
button {
  height: 22px;
  width: 52px;
  border: none;
  background-color: #00000040;
  border-radius: 11px;
  position: relative;
  transition: background-color 0.25s;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  text-align: right;
  margin-right: 10px;
  &[disabled] {
    cursor: not-allowed;
    color: #fff;
    background-color: #ddd;
    border: none;
  }
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
.checked {
  background-color: $public;
  text-align: left;
  span {
    left: calc(100% - 20px);
  }
}
button:active {
  > span {
    width: $h2 + 4px;
  }
}
.checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>
