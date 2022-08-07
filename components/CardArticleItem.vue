<template>
  <div class="ab-item mb-2">
    <nuxt-link :to="'/detail/' + item.id" class="ab-item-img w-40 md:w-48">
      <el-image
        :src="item.coverUrl"
        style="width: 100%; height: 100%"
        fit="cover"
      />
      <!--   :lazy="true"-->
      <!-- <img src="@/assets/images/here-we-go.png" alt="" /> -->
      <span class="ab-item-tag">{{ item.classifyName }}</span>
    </nuxt-link>
    <div class="ab-item-content">
      <nuxt-link :to="`/detail/${item.id}`">
        <h5 class="title truncate">{{ item.title }}</h5>
      </nuxt-link>
      <div class="description">{{ item.desc }}</div>
      <div class="ab-item-content-footer">
        <span class="flex items-center mr-6">
          <el-icon class="mr-1"><UserFilled /></el-icon>
          {{item.userName || '暂无'}}
        </span>
        <span class="flex items-center mr-6">
          <el-icon class="mr-1"><Timer /></el-icon>
          {{ timeago(item.created_at) }}
        </span>
        <span class="flex items-center mr-6 hidden md:block">
          <el-icon class="mr-1"><View /></el-icon> {{ item.views }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

import { View, Timer, UserFilled } from "@element-plus/icons-vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isSkeleton: {
    type: Boolean,
    required: false,
  },
});
const loading = ref(true);


const { timeago } = useDateStore();

// const countPlus = computed(()=>{
//     return count.value+1
// })

// const getCover = computed(()=>{
//   return 'http://192.168.110.53:3002'+props.item.coverUrl
// })

</script>

<style scoped lang="scss">
.ab-item {
  height: 130px;
  padding: 6px;
  background-color: var(--module-bg);
  display: flex;
  // margin-bottom: 10px;
  transition: background-color 0.1s;

  &:hover {
    background-color: var(--module-bg-lighter);
    // background-color: rgba($color: #fff, $alpha: 1);
    .ab-item-img {
      img {
        transform: scale(1.2);
      }
      .ab-item-tag {
        opacity: 1;
      }
    }
  }
  &-img {
    // width: 200px;
    height: 100%;
    flex-shrink: 1;
    margin-right: 10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    .ab-item-tag {
      position: absolute;
      left: 0;
      top: 0;
      height: 30px;
      line-height: 30px;
      z-index: 1;
      padding: 0 10px;
      border-bottom-right-radius: 2px;
      opacity: 0.8;
      font-size: 12px;
      color: #fff;
      text-align: center;
      transition: opacity 0.1s;
      background-color: #0088f5;
    }
    img {
      width: 100%;
      height: 100%;
      transition: transform 0.2s;
      object-fit: cover;
    }
  }
  &-content {
    flex: 1;
    width: 0;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-wrap: normal;
      color: var(--el-menu-text-color);
    }
    .description {
      margin-top: 10px;
      font-size: 13px;
      flex: 1;
    }
    &-footer {
      display: flex;
      align-items: center;
      height: 30px;
      font-size: 12px;
      color: var(--el-menu-text-color);
      margin-top: 10px;
    }
  }
}
</style>
