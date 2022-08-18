<template>
  <NuxtLayout name="custom">
    <div class="content max-w-screen-xl m-auto flex justify-center">
      <!-- 内容 -->
      <!-- 侧栏左边 invisible md:visible visibility: visible;-->
      <aside
        class="w-0 md:w-40 h-screen  left-aside z-20 transition-all relative "
        :style="menuStore.menuVisible ? 'width:10rem;' : ''"
      >
        <CMenu></CMenu>
      </aside>
      <!-- 内容 -->
      <section class="main w-screen p-3" :style="menuStore.menuVisible ? 'transform: scale(0.99);' : ''">
        <NuxtPage />
      </section>

      <!-- 侧栏右边 -->
      <aside class="right-aside hidden md:block pt-3" style="width:260px">
        <card-me></card-me>
        <!-- 统计 -->
        <!-- <CardStatistics></CardStatistics> -->
        <!-- 热门 -->
        <card-hot></card-hot>
        <!-- 分类 -->
        <card-classify></card-classify>
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";

const menuStore = useMenuStore();
</script>

<style scoped lang="scss">
$color: #f1f1f1;
$whiteColor: #fff;
$bgColor: rgba(255, 255, 255, 0.6);
.default-radius {
  border-radius: 2px;
}

.warpper {
  // width: 1200px;
  margin: 0 auto;
}
</style>
