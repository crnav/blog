<template>
  <div>
    <el-image-viewer
      v-if="modelValue"
      :urlList="srcList"
      :zIndex="999"
      :initialIndex="initialIndex"
      :infinite="true"
      :hideOnClickModal="true"
      @close="close"
    />
  </div>
</template>

<script lang="ts" setup>
import { View, Timer, UserFilled } from "@element-plus/icons-vue";
const props = defineProps({
  srcList: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: false,
  },
  initialIndex: {
    type: Number,
    required: false,
  },
});

// 点击关闭
const emit = defineEmits(["update:modelValue"]);
const close = () => {
  emit("update:modelValue", false);
};
</script>
