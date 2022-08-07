<template>
  <div class="itliuyang w-full pt-16">
    <!-- 背景 -->
    <div id="background" class="fixed">
      <div class="image"></div>
    </div>
    <!-- 顶部 -->
    <CHeader></CHeader>
    <!-- 内容 -->
    <section class="m-auto content max-w-screen-xl">
      <!-- 侧栏左边 -->
      <aside
        style="width: 160px"
        class="hidden md:block left-aside"
        :class="{ 'menu-block': menuStore.menuVisible }"
      >
        <!-- <CMenu></CMenu> -->
      </aside>
      <!-- 内容 -->
      <section class="main mb-2 w-screen">
        <NuxtPage />
      </section>

      <!-- 侧栏右边 -->
      <aside class="right-aside hidden md:block">
        <card-me></card-me>
        <!-- 统计 -->
        <!-- <CardStatistics></CardStatistics> -->
        <!-- 热门 -->
        <!-- <card-hot></card-hot> -->
        <!-- 分类 -->
        <!-- <card-classify></card-classify> -->
      </aside>
    </section>
    <footer
      class="flex items-center text-sm justify-center text-gray-500 module-bg"
    >
      <p class="">
        © 2022 itliuyang |
        <a href="http://beian.miit.gov.cn">渝ICP备16008276号-3</a>
      </p>
      <el-backtop :right="100" :bottom="100" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";

import { useMenuStore } from "../stores/menu";
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
footer {
  height: 40px;
}
.content {
  display: flex;
  min-height: calc(100vh - 120px);
  margin-top: 10px;

  // :deep(.content) {
  //   background-color: var(--module-bg);
  // }

  aside {
    margin: 0 10px;
    :deep(.card-box) {
      // box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
      // min-height: 200px;
      // margin-bottom: 10px;
      .aside-title {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
      }
      .aside-content {
        padding: 0 10px 10px;
      }
    }
  }
  .menu-block {
    display: block !important;
    left: 0;
    position: fixed;
    top: 4rem;
    z-index: 99;
    background: #fff;
    height: 100%;
    margin: 0;
  }
  .left-aside {
    background: var(--module-bg);
  }
  .right-aside {
    width: 270px;
  }
}
</style>
