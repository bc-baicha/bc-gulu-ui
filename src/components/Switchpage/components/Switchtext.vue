<demo>
支持带文字和数字
</demo>
<template>
  <Switch
    checkedChildren="开启"
    unCheckedChildren="关闭"
    v-model:value="bool"
  />
  <Switch checkedChildren="1" unCheckedChildren="0" v-model:value="bool2" />
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
    const bool2 = ref(false);
    return { bool, bool2 };
  },
};
</script>
