<template>
  <div>
    <h1>这是Tabs示例</h1>
    <Showcodedemo :component="Tabsdefault" />
    <Showcodedemo :component="Tabsdisable" />
  </div>
</template>
<script lang="ts">
import Tabsdefault from "./components/Tabsdefault.vue";
import Tabsdisable from "./components/Tabsdisable.vue";
export default {
  components: {
    Tabsdefault,
    Tabsdisable,
  },
  setup() {
    return { Tabsdefault, Tabsdisable };
  },
};
</script>
