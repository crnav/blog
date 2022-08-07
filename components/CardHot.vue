<template>
  <div class="mb-2 module-bg shadow-sm">
    <div
      class="p-2 text-base mb-1 border-gray-200 border-solid"
      style="border-bottom-width: 1px"
    >
      热门文章
    </div>
    <div class="p-2">
      <div class="mb-2" v-for="item in hotList.rows" :key="item.id">
        <nuxt-link
          class="mb-1 text-sm block truncate text-base truncate"
          :to="`/detail/${item.id}`"
          tag="span"
        >
          {{ item.title }}
        </nuxt-link>
        <div class="flex items-center text-gray-400 text-xs">
          <span class="mr-4">{{ timeago(item.created_at) }}</span>
          <span class="">浏览{{ item.views }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { timeago } = useDateStore();

const resHot: any = await getArticleHotList();
const hotList = resHot.data;

</script>
