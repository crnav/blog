<template>
  <NuxtLayout name="custom">
    <div class="flex flex-col w-full">
      <!-- 侧栏左边 -->
      <aside
        style="width: 160px"
         class="hidden box-bg-color-bright left-aside z-20"
       :style="menuStore.menuVisible ? 'display:block !important;' : ''"
      >
        <CMenu></CMenu>
      </aside>

      <div class="banner">
        <div
          class="m-auto h-full flex-col max-w-screen-xl text-white flex items-center justify-center"
        >
          <h1 class="text-3xl tracking-wider">网站地址</h1>
          <h3 class="text-sm mt-2">自用网站收藏</h3>
        </div>
      </div>
      <div class="container m-auto max-w-screen-xl">
        <div v-for="item in linksList" :key="item.id">
          <div class="link-title m-3 mt-6 tracking-widest text-center">
            {{ item.name }}
          </div>
          <div class="flex flex-wrap">
            <div
              class="rounded-sm w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12 p-2"
              v-for="link in item.links"
              :key="link.id"
            >
              <nuxt-link
                no-prefetch
                target="_blank"
                :to="link.url"
                class="module-bg flex items-center p-2 cursor-pointer"
              >
                <div class="flex-1 flex flex-col mr-2 w-0">
                  <text class="name text-sm text-color-regular truncate">{{
                    link.title
                  }}</text>
                  <text
                    class="desc mt-1 text-xs text-color-secondary truncate"
                    >{{ link.desc }}</text
                  >
                </div>
                <div class="rounded-sm">
                  <el-icon><Link /></el-icon>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<!-- <script>
export default {
  layout: false,
};
</script> -->
<script setup lang="ts">
import { Link } from "@element-plus/icons-vue";
// 获取连接
const resLink: any = await getTypeLink();
const linksList: any = ref(resLink.data);

const menuStore = useMenuStore();
</script>

<style scoped lang="scss">
.banner {
  background-color: #f1f1f1;
  height: 300px;
  overflow: hidden;
  background-image: url(@/assets/images/banner3.jpg);
  background-size: cover;
  background-position-x: center;
  background-position-y: 36%;
}
.menu-block {
  display: block !important;
  left: 0;
  position: fixed;
  top: 4rem;
  z-index: 99;
  height: 100%;
  margin: 0;
}
.content {
  min-height: calc(100vh - 120px);
  .link-title {
    height: 60px;
    line-height: 60px;
    background: linear-gradient(
      to right,
      transparent,
      var(--module-bg),
      transparent
    );
    color: var(--el-color-info-dark-2);
  }
}
</style>
