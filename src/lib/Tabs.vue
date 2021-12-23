<template>
  <div class="bc-tabs">
    <div class="bc-tabs-nav" ref="container">
      <div
        class="bc-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        :class="{ selected: t === selected }"
        :key="index"
        @click="onChange(t)"
      >
        {{ t }}
      </div>
      <div class="bc-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="bc-tabs-content">
      <component
        class="bc-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    //判断子组件的类型
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的子组件必须是Tab");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    //获取到所有的title值
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    //改变传入title的值
    const onChange = (value) => {
      context.emit("update:selected", value);
    };
    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      });
    });
    return {
      defaults,
      titles,
      onChange,
      selectedItem,
      indicator,
      container,
      current,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.bc-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
