<demo>
支持disable
</demo>
<template>
  <Button disabled="true"></Button>
  <Button disabled="true">circle</Button>
  <Button theme="primay" @click="onDisable" :disabled="disable">circle</Button>
</template>
<script lang="ts">
import { ref } from "vue";
import { Button } from "../../../lib/index";
export default {
  components: {
    Button,
  },
  setup() {
    const disable = ref(false);
    const onDisable = () => {
      disable.value = !disable.value;
      setTimeout(() => {
        disable.value = !disable.value;
      }, 3000);
    };
    return {
      disable,
      onDisable,
    };
  },
};
</script>
