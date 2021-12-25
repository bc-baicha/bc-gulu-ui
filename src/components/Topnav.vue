<template>
  <div class="topnav" :class="{ showBc: showColor }">
    <div class="wrap">
      <span v-if="isShowtoggle" class="toggle" @click="toggleMenu">
        <transition name="fade">
          <svg v-if="menuVisible">
            <use xlink:href="#icon-close"></use>
          </svg>
          <svg v-else>
            <use xlink:href="#icon-zhedie-up"></use>
          </svg>
        </transition>
      </span>
      <router-link to="/">
        <svg class="fanqie">
          <use xlink:href="#icon-chaye"></use>
        </svg>
      </router-link>
    </div>
    <div class="menu">
      <a target="_blank" href="https://github.com/bc-baicha/bc-gulu-ui"
        >Github</a
      >
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
    showColor: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu, menuVisible };
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
  &.showBc {
    background: radial-gradient(
      circle at left,
      #448a6c 0%,
      rgb(99, 111, 164) 100%
    );
    color: #fff;
  }
  .wrap {
    display: flex;
    align-items: center;
    height: 42px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .toggle {
    width: 32px;
    height: 32px;
    display: none;
    svg {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
  .fanqie {
    width: 32px;
    height: 32px;
    transition: all 0.25s;
  }
  .fanqie:hover {
    width: 42px;
    height: 42px;
    transition: all 0.25s;
  }
  .line {
    width: 32px;
    display: none;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    .toggle {
      display: inline-block;
      margin-right: 60px;
    }
  }
}
</style>
