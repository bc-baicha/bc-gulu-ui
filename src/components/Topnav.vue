<template>
  <div class="topnav">
    <div>
      <span v-if="isShowtoggle" class="toggle" @click="toggleMenu">
        <svg>
          <use xlink:href="#icon-zhedie"></use>
        </svg>
      </span>
      <router-link to="/">
        <svg class="fanqie">
          <use xlink:href="#icon-fanqie"></use>
        </svg>
      </router-link>
    </div>
    <div class="menu">
      <span>文档</span>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    isShowtoggle: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  box-shadow: 0 5px 5px rgba(#333, 0.1);
  z-index: 10;
  .fanqie {
    width: 32px;
    height: 32px;
    transition: all 0.25s;
  }
  .line {
    width: 32px;
    display: none;
  }
  .fanqie:hover {
    width: 42px;
    height: 42px;
    transition: all 0.25s;
  }
  .menu {
    display: flex;
    justify-content: space-around;
  }
  .toggle {
    width: 32px;
    height: 32px;
    display: none;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    .toggle {
      display: inline-block;
    }
  }
}
</style>
