<demo>
基础用法
</demo>
<template>
  <Tabs v-model:title="title">
    <Tab tab="Tab1">内容1</Tab>
    <Tab tab="Tab2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from "../../../lib/Tabs.vue";
import Tab from "../../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const title = ref();
    return { title };
  },
};
</script>
