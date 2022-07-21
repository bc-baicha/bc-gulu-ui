<template>
  <div class="home_wrap">
    <Topnav :isShowtoggle="false" />
    <header class="banner">
      <h1>
        BC-UI
        <svg>
          <use xlink:href="#icon-king"></use>
        </svg>
      </h1>
      <h2>基于 VUE3.0 的UI框架</h2>
      <p class="actions">
        <a target="_blank" href="https://github.com/bc-baicha/bc-gulu-ui"
          >Github</a
        >
        <router-link to="/doc">开始</router-link>
      </p>
    </header>
    <main>
      <div class="home_main_box" v-for="item in data" :key="item.name">
        <svg>
          <use :xlink:href="item.svgName"></use>
        </svg>
        <div class="box_right">
          <h3>{{ item.name }}</h3>
          <p>{{ item.introduction }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import "./home.scss";
export default {
  components: {
    Topnav,
  },
  setup() {
    const data = [
      {
        name: "基于Vue 3",
        introduction: "使用了Vue 3 Composition API",
        svgName: "#icon-Vue",
      },
      {
        name: "基于 TypeScript",
        introduction: "源代码采用 TypeScript 开发",
        svgName: "#icon-Type",
      },
      {
        name: "代码易读",
        introduction: "每个组件的源代码都较简结，易读",
        svgName: "#icon-Tool",
      },
    ];
    return { data };
  },
};
</script>
