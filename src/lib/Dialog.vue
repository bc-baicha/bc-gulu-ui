<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="bc-dialog-overlay" @click="closeClickOverlay"></div>
      <div class="bc-dialog-wrapper">
        <div class="bc-dialog">
          <header>
            {{ title }}
            <span @click="onClose" class="bc-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="onClose">{{ cancelText }}</Button>
            <Button theme="primay" @click="onClose">{{ okText }}</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import "./styles/dialog.scss";
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    onCloseOverlay: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "标题",
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    okText: {
      type: String,
      default: "OK",
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    const onClose = () => {
      context.emit("update:visible", false);
    };
    const closeClickOverlay = () => {
      if (props.onCloseOverlay) {
        onClose();
      }
    };
    return {
      onClose,
      closeClickOverlay,
    };
  },
};
</script>
