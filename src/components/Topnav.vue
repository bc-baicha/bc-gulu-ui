<template>
  <div class="topnav">
    <div>
      <span class="toggle" @click="toggleMenu"></span>
      <span class="logo">LOGO</span>
    </div>
    <div class="menu">
      <span>文档</span>
      <!-- <span>菜单2</span> -->
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";

export default {
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
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(#333, 0.1);
  z-index: 10;
  .menu {
    display: flex;
    justify-content: space-around;
  }
  .toggle {
    width: 24px;
    height: 24px;
    background-color: rebeccapurple;
    margin-right: 20px;
    display: none;
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
