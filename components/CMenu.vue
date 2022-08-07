<template>
  <ul class="left-aside fixed" @click="menuStore.hide()">
    <li
      :class="{ active: $route.path == nav.url }"
      v-for="(nav, index) in navs"
      :key="index"
    >
      <nuxt-link :title="nav.name" :to="nav.url">{{ nav.name }}</nuxt-link>
    </li>
    <li
      :class="{ active: $route.path == '/page/' + nav.title_en }"
      v-for="(nav, index) in pageList"
      :key="index"
    >
      <nuxt-link :title="nav.title" :to="'/page/' + nav.title_en">{{
        nav.title
      }}</nuxt-link>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useMenuStore } from "../stores/menu";
const menuStore = useMenuStore();

const { navs } = useConfig();

const resPage: any = await getMenu();
// const resNotice: any = await getNoticePageList();
const pageList = resPage.data;

</script>

<style scoped lang="scss">
ul {
  padding: 10px 0;
  width: 160px;
  li {
    height: 40px;
    text-align: center;
    line-height: 40px;
    &:hover {
      background-color: rgba(90, 149, 229, 0.16);
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
    background-color: #fff;
    border-radius: 4px;
    a {
      color: #3f82e7;
    }
  }
}
</style>
