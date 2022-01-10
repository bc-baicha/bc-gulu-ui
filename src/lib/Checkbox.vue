<template>
  <div class="checkbox-wrap" @click="disable ? '' : onChoose()">
    <div
      class="choose"
      :class="{ selected: choose, disable: disable }"
      :style="{ borderColor: disable ? '#ddd' : '' }"
    >
      <svg v-if="choose">
        <use xlink:href="#icon-duihao"></use>
      </svg>
    </div>
    <div class="textName">Apple</div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  setup(props, context) {
    const { defaultChecked, onChange } = props;
    const choose = ref(defaultChecked);
    const onChoose = () => {
      if (onChange) {
        onChange(!choose.value);
      }
      choose.value = !choose.value;
    };
    return { onChoose, choose };
  },
};
</script>
<style lang="scss">
$c: #1890ff;
.checkbox-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.choose {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border: solid 1px #ccc;
  border-radius: 2px;
  svg {
    width: 14px;
    height: 14px;
  }
  &.selected {
    background-color: $c;
    border-color: $c;
    animation: boxShadowprimay 0.5s linear 1;
  }
  &.disable {
    background-color: #ddd;
    border-color: #ddd;
    cursor: not-allowed;
  }
}
.choose:hover {
  border-color: $c;
}
.textName {
  font-size: 14px;
  margin-left: 5px;
}
@keyframes boxShadowprimay {
  0% {
    box-shadow: $c 0px 0px 1px;
    transform: scale(0, 0);
  }
  25% {
    box-shadow: $c 0px 0px 3px;
    transform: scale(0.5, 0.5);
  }
  50% {
    box-shadow: $c 0px 0px 5px;
    transform: scale(1.1, 1.1);
  }
  75% {
    box-shadow: $c 0px 0px 6px;
    transform: scale(1.2, 1.2);
  }
  100% {
    box-shadow: $c 0px 0px 1px;
    transform: scale(1, 1);
  }
}
</style>
