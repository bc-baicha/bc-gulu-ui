<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="Tab1">内容1</Tab>
    <Tab title="Tab2">内容2</Tab>
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
    const x = ref();
    return { x };
  },
};
</script>
