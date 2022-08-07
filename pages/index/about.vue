<template>
  <div class="module-bg p-2">
    <Title>关于</Title>
    <MdEditor
      :theme="color.value"
      class="p-10"
      :previewOnly="true"
      v-model="data.content"
    ></MdEditor>
    <!-- <Comment c_id="about"></Comment> -->
    <comment-container c_id="about"></comment-container>
  </div>
</template>

<script lang="ts" setup>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const color = useColorMode();

const res: any = await getMD({ name: "about" });
const data = ref(res.data);


</script>
