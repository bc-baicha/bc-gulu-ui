<template>
  <div>
    <h1>这是Tabs示例</h1>
    <Showcodedemo :component="Tabsdefault" />
    <Showcodedemo :component="Tabsdisable" />
    <Showcodedemo :component="Tabsicon" />
  </div>
</template>
<script lang="ts">
import Tabsdefault from "./components/Tabsdefault.vue";
import Tabsdisable from "./components/Tabsdisable.vue";
import Tabsicon from "./components/Tabsicon.vue";
export default {
  components: {
    Tabsdefault,
    Tabsdisable,
    Tabsicon,
  },
  setup() {
    return { Tabsdefault, Tabsdisable, Tabsicon };
  },
};
</script>
