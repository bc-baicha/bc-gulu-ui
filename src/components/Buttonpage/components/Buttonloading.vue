<demo>
支持loading
</demo>
<template>
  <Button theme="primay" loading="true"></Button>
  <Button theme="primay" loading="true">circle</Button>
  <Button theme="primay" @click="onLoading" :loading="loading">circle</Button>
</template>
<script lang="ts">
import { ref } from "vue";
import { Button } from "../../../lib/index";
export default {
  components: {
    Button,
  },
  setup() {
    const loading = ref(false);
    const onLoading = () => {
      loading.value = !loading.value;
      setTimeout(() => {
        loading.value = !loading.value;
      }, 3000);
    };
    return {
      loading,
      onLoading,
    };
  },
};
</script>
