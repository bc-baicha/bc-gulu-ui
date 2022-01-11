<template>
  <transition name="slide">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li><router-link to="/doc/introduce">介绍</router-link></li>
        <!-- <li><router-link to="/doc/installation">安装</router-link></li>
        <li><router-link to="/doc/usestep">开始使用</router-link></li> -->
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/checkbox">Checkbox 组件</router-link>
        </li>
      </ol>
    </aside>
  </transition>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$lightbgc: #e6f7ff;
$deepbgc: #1890ff;
$text: #1890ff;
aside {
  min-width: 285px;
  height: calc(100vh - 100px);
  background: #fff;
  box-shadow: 5px 0px 5px rgba(#333, 0.1);
  z-index: 5;
  padding-top: 20px;
  > h2 {
    margin-bottom: 4px;
    margin-top: 0;
    padding-left: 30px;
  }
  > ol {
    margin: 0;
    padding: 0;
    line-height: 40px;
    > li {
      list-style: none;
      padding: 4px 0;
      > a {
        position: relative;
        height: 40px;
        color: rgba(0, 0, 0, 0.67);
        font-weight: 400;
        font-size: 16px;
        display: block;
        padding: 4px 50px;
        text-decoration: none;
        &:hover {
          color: $text;
          background: $lightbgc;
          border-bottom: none;
        }
      }
      .router-link-active {
        background: $lightbgc;
        border-right: 3px solid $deepbgc;
        color: $text;
        @media (min-width: 500px) {
          border-right: none;
          &::after {
            content: "";
            display: block;
            animation: bdrolate 0.8s;
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 48px;
            background-color: $deepbgc;
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  aside {
    position: fixed;
    top: 85px;
    left: 0;
  }
}
@keyframes bdrolate {
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
