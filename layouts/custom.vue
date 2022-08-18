<template>
  <div class="itliuyang w-full pt-16">
    <Title>收藏网站</Title>
    <!-- 背景 -->
    <div id="background" class="fixed">
      <div class="image"></div>
    </div>
    <!-- 顶部 -->
    <CHeader></CHeader>
    <!-- 内容 -->
    <section class=" " @click.stop="onClick">
      <div
        class="w-full h-full absolute info-bg z-10"
        v-if="menuStore.menuVisible"
      ></div>
      <slot />
    </section>

    <c-footer></c-footer>
  </div>
</template>
<script lang="ts" setup>
const menuStore = useMenuStore();

const onClick = () => {
  if (menuStore.menuVisible) {
    document.documentElement.style.overflow = "auto";
    menuStore.hide();
  }
};

const mounted = () => {
  window.addEventListener("resize", function () {
    if (document.body.offsetWidth > 500) {
      // 收起菜单
      menuStore.hide();
    }
  });
  onClick();
};

onMounted(mounted);

</script>
<style lang="scss" scoped>
.content {
  display: flex;
  min-height: calc(100vh - 120px);
  margin-top: 10px;

  aside {
    margin: 0 10px;
    :deep(.card-box) {
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
