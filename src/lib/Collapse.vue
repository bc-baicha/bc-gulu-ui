<template>
  <div class="bc-coll-wrap">
    <div
      @click="disable ? '' : changeShow()"
      class="coll-header"
      :class="{ disable: disable }"
    >
      <svg
        class="point-left"
        :style="{ transform: show ? 'rotate(90deg)' : '' }"
      >
        <use xlink:href="#icon-point-right" />
      </svg>
      {{ header }}
    </div>
    <div :class="show ? 'show-content' : 'hidden-content'" ref="heightContent">
      <div :class="show ? 'show-opcity' : 'hidden-opcity'">{{ content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import "./styles/collapse.scss";
export default {
  props: {
    header: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    maxHeight: {
      type: Number,
      default: 100,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { maxHeight } = props;
    const show = ref(false);
    const heightContent = ref<HTMLDivElement>(null);
    const changeShow = () => {
      show.value = !show.value;
      if (show.value) {
        heightContent.value.style.height = maxHeight + "px";
      } else {
        heightContent.value.style.height = 0 + "px";
      }
    };
    return {
      show,
      changeShow,
      heightContent,
    };
  },
};
</script>
