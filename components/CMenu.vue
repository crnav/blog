<template>
  <ul
    class="w-full md:w-40 overlay-bg pt-3 absolute md:fixed overflow-hidden"
    @click="menuStore.hide()"
  >
    <li
      :class="{ active: $route.path == nav.link }"
      v-for="(nav, index) in navs"
      :key="index"
    >
      <a class="cursor-pointer" :title="nav.title" @click="onLink(nav)">{{
        nav.title
      }}</a>
    </li>
    <li
      :class="{
        active:
          $route.path == '/page/' + nav.title_en || $route.path == nav.link,
      }"
      v-for="(nav, index) in pageList"
      :key="index"
    >
      <a class="cursor-pointer" :title="nav.title" @click="onLink(nav)">{{
        nav.title
      }}</a>
    </li>
  </ul>
</template>
<script setup lang="ts">
const pageStore = usePageStore();
const menuStore = useMenuStore();

const { navs } = useConfig();
const router = useRouter();

const resPage: any = await getMenu();
// const resNotice: any = await getNoticePageList();
const pageList = resPage.data;

const onLink = (nav: any) => {
  document.documentElement.style.overflow = "auto";
  if (nav.type == 0) {
    nav["name"] = nav.title;
    pageStore.setName(nav);
    router.push(nav.link);
  } else {
    router.push(`/page/${nav.title_en}`);
  }
};
</script>

<style scoped lang="scss">
ul {
  // width: 160px;
  height: 100%;
  // background-color: var(--el-overlay-color-light);
  li {
    height: 40px;
    text-align: center;
    line-height: 40px;
    &:hover {
      // background-color: rgba(90, 149, 229, 0.16);
      a {
        color: rgba(90, 149, 229, 1);
      }
    }
    a {
      font-size: 13px;
      color: #666666;
      text-decoration: none;
      display: block;
      font-weight: bold;
    }
  }
  .active {
    background-color: var(--el-bg-color-overlay);
    a {
      color: #3f82e7;
    }
  }
}
@media (min-width: 768px) {
  ul {
    background-color: transparent;
  }
}
</style>
