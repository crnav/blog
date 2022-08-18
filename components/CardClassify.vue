<template>
  <div class="card-box p-2 mb-2 module-bg shadow-sm">
    <!-- 分类 -->
    <a
      class="bg-blue-200 text-sm m-1 cursor-pointer"
      @click="onLink(item)"
      v-for="item in classifyList"
      :key="item.id"
    >
      <el-tag>{{ item.name }}</el-tag>
    </a>
  </div>
</template>
<script setup lang="ts">
const pageStore = usePageStore();
const router = useRouter();

const res: any = await getClassifyList();
const classifyList = res.data;

const onLink = (nav: any) => {
  pageStore.setName(nav);
  router.push(`/classify/${nav.name_en}`);
};
</script>
