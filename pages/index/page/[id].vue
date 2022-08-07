<template>
  <div class="content mb-10 module-bg" v-if="info">
    <!-- {{ id }}
    {{ info }} -->
    <Title>{{ info.title }}</Title>
    <!--  <div class="p-6">
      <text class="text-2xl text-center block">{{ info.title }} </text>
      <div class="flex justify-center text-xs text-gray-400 mt-2">
        <text class="">admin ({{ timeago(info.updated_at) }})</text
        ><text class="mx-4">|</text> <text>{{ info.views }}次阅读</text>
      </div>
    </div> -->
    <MdEditor
      :theme="color.value"
      class="p-10"
      :previewOnly="true"
      v-model="info.content"
    ></MdEditor>
  </div>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const color = useColorMode();
const router = useRouter();

const { timeago } = useDateStore();
// id
const route = useRoute();
const id = route.params.id;

const res: any = await getMenuDetail({ name: id });
const info = ref(null);
if (res.code == 1) {
  info.value = res.data;
} else {
  // 跳转404
  router.push("/404");
}
</script>
