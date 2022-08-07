<template>
  <header
    class="module-bg shadow fixed left-0 right-0 backdrop-blur top-0 z-50"
  >
    <div
      class="max-w-screen-xl h-16 flex justify-between items-center m-auto pr-4"
    >
      <div class="flex items-center">
        <nuxt-link title="首页" to="/" class="mr-2">
          <img
            class="w-20 h-20"
            src="@/assets/images/logo.png"
            :alt="blog.title"
          />
        </nuxt-link>
        <div class="text-gray-500 text-sm">
          {{ blog.desc }}
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex cursor-pointer" @click="toggleDark">
          <el-icon v-show="color.value == 'dark'" :size="20"><Moon /></el-icon>
          <el-icon v-show="color.value != 'dark'" :size="20"><Sunny /></el-icon>
        </div>
        <span
          class="nav-menu ml-4 block md:hidden"
          :class="{ 'on-menu': menuStore.menuVisible }"
          @click="toggleMenu"
        >
          <span ></span>
          <span ></span>
          <span ></span>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useMenuStore } from "../stores/menu";

const menuStore = useMenuStore();

const color = useColorMode();
let switchTheme = ref(false);
const { blog } = useConfig();

const toggleDark = () => {
  color.preference = color.value === "dark" ? "light" : "dark";
};

const toggleMenu = () => {
  if (menuStore.menuVisible) {
    menuStore.hide();
  } else {
    menuStore.show();
  }
};
</script>
<style scoped lang="scss">
.nav-menu {
  span {
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: var(--el-text-color-primary);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 20px;
    transition: all 0.3s;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.on-menu {
  span:nth-last-child(3) {
    opacity: 1;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  span:nth-last-child(2) {
    width: 0;
    opacity: 0;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: width 0.5s;
    transition: width 0.5s;
  }
  span:last-child {
    opacity: 1;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
