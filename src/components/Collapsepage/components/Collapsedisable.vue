<demo>
支持disable
</demo>
<template>
  <Collapse :header="obj.header" :content="obj.content" :maxHeight="300" />
  <Collapse
    :header="obj.header"
    :content="obj.content"
    :maxHeight="300"
    :disable="true"
  />
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity";
import { Collapse } from "../../../lib/index";
export default {
  components: {
    Collapse,
  },
  setup() {
    const obj = reactive({
      header: "这是头部",
      content:
        "A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
    });
    return {
      obj,
    };
  },
};
</script>
