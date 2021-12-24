<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <button @click="toggleCode" v-if="codeVisible">隐藏代码</button>
      <button @click="toggleCode" v-else>查看代码</button>
    </div>
    <div :class="'demo-code' + [codeVisible ? ' code-show ' : ' code-hidden ']">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);
    const toggleCode = () => (codeVisible.value = !codeVisible.value);
    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #ccc;
.demo {
  border: 1px solid $border-color;
  border-radius: 5px;
  margin: 16px 0 32px;
  max-width: 500px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 20px 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
    > :first-child {
      animation: none;
    }
  }
  &-code {
    border-top: 1px dashed $border-color;
    overflow: auto;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      padding: 24px;
    }
  }
  .language-html {
    background-color: #eee;
  }
  .code-hidden {
    transition: all 0.4s;
    max-height: 0;
    border: none;
  }
  .code-show {
    max-height: 800px;
    transition: all 1s;
  }
}
</style>
