<template>
  <div class="w-full">
    <Title>首页</Title>
    <!-- banner -->
    <div class="swiper-box default-radius">
      <Swiper :sList="swiperList">
        <template #default="{ data }">
          <span class="swiper-tips">{{ data.tips }}</span>
          <img :src="data.url" alt="banner" class=" " />
        </template>
      </Swiper>
    </div>
    <!-- 消息 -->
    <div class="notice-box default-radius">
      <Swiper
        :style="'height: 40px'"
        :sList="noticeList"
        :isPagination="false"
        :direction="'vertical'"
      >
        <template #default="{ data }">
          <span>{{ data.content }}</span>
        </template>
      </Swiper>
    </div>
    <!-- 文章 -->
    <div class="article-box">
      <div class="default-radius" v-for="item in state.dataList" :key="item.id">
        <card-article-item :item="item"></card-article-item>
      </div>
    </div>
    <div
      class="rounded-sm relative overflow-hidden flex justify-between group h-10 w-full cursor-pointer"
      @click="getDataList()"
    >
      <div
        class="skew-20 text-sm p-2 pl-4 -ml-2 flex-1 mr-2 box-bg-color h-full"
      ></div>
      <div
        class="w-28 skew-20 text-sm h-full p-2 pr-4 -mr-2 cursor-pointer box-bg-color group-hover:bg-blue-400 group-hover:text-white"
      ></div>
      <div
        class="flex justify-between absolute w-full h-full z-10 items-center group"
      >
        <div class="text-sm p-2 pl-4 -ml-2 flex-1 mr-2">
          {{
            state.dataList.length > 0
              ? state.dataList.length + "/" + state.total
              : ""
          }}
        </div>
        <div
          class="w-28 flex justify-center items-center text-sm p-2 pr-4 -mr-2 group-hover:text-white"
        >
          {{ ["", "到底了", "更多数据"][state.pageStatus] }}
          <el-icon
            class="ml-1 animate-bounce"
            v-if="state.total != state.dataList.length"
            ><ArrowDownBold
          /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownBold } from "@element-plus/icons-vue";
import banner from "@/assets/images/banner.jpg";

const swiperList = ref([
  { tips: "banner1", url: banner },
  { tips: "banner2", url: banner },
]);

// 消息通知
const resNotice: any = await getNoticePageList();
const noticeList = resNotice.data;

const state: any = reactive({
  dataListUrl: "/article/pageList",
});
// 分页一些方法
const { getDataList, setState } = useCrud(state);

// 获取文章
const resArticle: any = await getArticlePageList();
setState(resArticle.data);

</script>

<style scoped lang="scss">
$_color: #ffffff;
$_text-secondary: rgba(0, 0, 0, 0.5);
$bgColor: rgba(255, 255, 255, 0.8);

.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.default-radius {
  border-radius: 2px;
}

.swiper-box {
  height: 200px;
  background-color: var(--module-bg);
  img {
    object-fit: cover;
  }
  .swiper-tips {
    position: absolute;
    color: #fff;
    text-align: center;
    top: 0;
    bottom: 0;
    width: 100%;
    line-height: 200px;
    font-size: 32px;
    left: 0;
  }
}

.notice-box {
  height: 40px;
  color: var(--el-menu-text-color);
  background-color: var(--module-bg);
  margin-top: 10px;
  line-height: 40px;
  padding: 0 10px;
}
.article-box {
  margin-top: 10px;
}
</style>
