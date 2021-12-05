<template>
  <div>
    <h1>这是Dialog 示例</h1>
    <Button @click="onShow">点击</Button>
    <Dialog
      v-model:visible="visible"
      :onCloseOverlay="false"
      okText="确定"
      cancelText="取消"
    >
      <template v-slot:title>
        <strong>这是标题</strong>
      </template>
      <template v-slot:content>
        <!-- 具名插槽 -->
        <h1>则是</h1>
        <h4>这是Dialog可配置内容</h4>
      </template>
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
