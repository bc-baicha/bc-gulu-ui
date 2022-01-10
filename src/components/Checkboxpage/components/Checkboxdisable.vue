<demo>
支持diable
</demo>
<template>
  <Checkbox v-model:choose="obj.chooseOne" :disable="true" />
  <Checkbox v-model:choose="obj.chooseTwo" :disable="true" />
</template>
<script lang="ts">
import { ref, reactive } from "vue";
import { Checkbox } from "../../../lib/index";
export default {
  components: {
    Checkbox,
  },
  setup() {
    const obj = reactive({ chooseOne: false, chooseTwo: true });
    return {
      obj,
    };
  },
};
</script>
