<demo>
支持disable
</demo>
<template>
  <Switch :disable="true" v-model:value="bool" />
</template>
<script lang="ts">
import { ref } from "vue";
import { Switch } from "../../../lib/index";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>
