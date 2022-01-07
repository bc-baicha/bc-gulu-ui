<demo>
  图标标签
</demo>
<template>
  <Tabs v-model:title="title">
    <Tab tab="Tab1" icon="http://33h.co/kxfnt">内容1</Tab>
    <Tab tab="Tab2" icon="http://33h.co/kxfnc">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import { Tabs, Tab } from "../../../lib/index";
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
