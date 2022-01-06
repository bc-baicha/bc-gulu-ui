<template>
  <div>
    <h1>这是Tabs示例</h1>
    <Showcodedemo :component="Tabsdefault" />
  </div>
</template>
<script lang="ts">
import Tabsdefault from "./components/Tabsdefault.vue";
export default {
  components: {
    Tabsdefault,
  },
  setup() {
    return { Tabsdefault };
  },
};
</script>
