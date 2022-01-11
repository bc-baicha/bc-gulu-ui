<demo>
基础用法
</demo>
<template>
  <Button theme="primay" @click="onChangeVisible">点击</Button>
  <Dialog v-model:visible="visible">
    <template v-slot:content>
      <div>这是内容</div>
    </template>
  </Dialog>
</template>
<script lang="ts">
import { Dialog } from "../../../lib/index";
import { ref } from "vue";
import { Button } from "../../../lib/index";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const onChangeVisible = () => {
      visible.value = true;
    };
    return {
      visible,
      onChangeVisible,
    };
  },
};
</script>
