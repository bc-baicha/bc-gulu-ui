<template>
  <div class="bc-tabs">
    <div class="bc-tabs-nav" ref="container">
      <div
        class="bc-tabs-nav-item"
        v-for="(item, index) in titleArr"
        :ref="
          (el) => {
            if (item.tab === selectTitle) selectedItem = el;
          }
        "
        :class="{ selected: item.tab === selectTitle, disable: item.disable }"
        :key="index"
        @click="
          {
            item.disable ? '' : onChange(item.tab);
          }
        "
      >
        {{ item.tab }}
      </div>
      <div class="bc-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="bc-tabs-content">
      <component
        class="bc-tabs-content-item"
        :is="current"
        :key="current.props.tab"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    title: String,
    disable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    const selectTitle = ref<String>("");
    //判断子组件的类型
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的子组件必须是Tab");
      }
    });
    //获取到所有的title值
    const titleArr = defaults.map((tag) => {
      return tag.props;
    });
    const current = computed(() => {
      selectTitle.value = props.title ? props.title : titleArr[0].tab;
      let title = props.title ? props.title : titleArr[0].tab;
      return defaults.find((tag) => tag.props.tab === title);
    });
    //改变传入title的值
    const onChange = (value) => {
      context.emit("update:title", value);
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
      titleArr,
      onChange,
      selectedItem,
      indicator,
      container,
      current,
      selectTitle,
    };
  },
};
</script>
<style lang="scss">
$blue: #1890ff;
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
      font-weight: 500;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
      &.disable {
        color: #00000040;
        cursor: not-allowed;
      }
    }
    &-item:hover {
      color: $blue;
      &.disable {
        color: #00000040;
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
