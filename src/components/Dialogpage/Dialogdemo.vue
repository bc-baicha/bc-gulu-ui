<template>
  <div>
    <h1>这是Dialog 示例</h1>
    <Button @click="onShow">点击</Button>
    <Dialog
      v-model:visible="visible"
      :onCloseOverlay="false"
      title="这是标题"
      okText="确定"
      cancelText="取消"
    >
      <h4>这是Dialog可配置内容</h4>
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import { ref } from "vue";
import Button from "../../lib/Button.vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const onShow = () => {
      visible.value = true;
    };
    return {
      visible,
      onShow,
    };
  },
};
</script>
