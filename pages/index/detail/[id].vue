<template>
  <div class="content mb-10 module-bg" v-if="info">
    <Title>{{ info.title }}</Title>
    <div class="p-6">
      <text class="text-2xl text-center block">{{ info.title }} </text>
      <div class="flex justify-center text-xs text-gray-400 mt-2">
        <text class="">admin ({{ timeago(info.updated_at) }})</text
        ><text class="mx-4">|</text> <text>{{ info.views }}次阅读</text>
      </div>
    </div>
    <MdEditor
      :theme="color.value"
      class="p-10"
      :previewOnly="true"
      v-model="info.content"
    ></MdEditor>
    <!-- <show-img
      v-model="imgsVisible"
      :initialIndex="initialIndex"
      :srcList="srcList"
    ></show-img> -->
    <comment-container :c_id="id"></comment-container>

  </div>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const color: any = useColorMode();

const { timeago } = useDateStore();
// id
const route = useRoute();
const router = useRouter();
const id = route.params.id+'';

// 详情
const res: any = await getDetail({ id: id });
const info = ref(null);
if (res.code == 1) {
  info.value = res.data;
} else {
  // 跳转404
  router.push("/404");
}

// const { data } = await useFetch("/api/article/getDetail", { params: id });
// const info = data;

// md中的图片
const src = ref<String>("");
const srcList = ref<Array<any>>([]);
const initialIndex = ref(0);

// 图片弹窗
const imgsVisible = ref(false);
// const router = useRouter();
// router.back();
// router.forward();
// router.go();
// router.push({ path: "/home" });
// router.replace({ hash: "#bio" });

// md 图片点击
let imageClick = (images, currentIndex) => {
  // imgsVisible = true;
  imgsVisible.value = true;
  // src.value = images[currentIndex];
  srcList.value = images;
  initialIndex.value = currentIndex;
};
</script>
