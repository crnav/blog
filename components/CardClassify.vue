<template>
  <div class="card-box p-2 mb-2 module-bg shadow-sm">
    <!-- 分类 -->
    <nuxt-link
      class="bg-blue-200 text-sm m-1"
      :to="`/classify/${item.name_en}?title=${item.name}`"
      v-for="item in classifyList"
      :key="item.id"
      ><el-tag>{{ item.name }}</el-tag>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
const res: any = await getClassifyList();
const classifyList = res.data;
</script>
