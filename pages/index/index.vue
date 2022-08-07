<template>
  <div class="w-full">
    <Title>首页</Title>
    <!-- banner -->
    <div class="swiper-box default-radius">
      <Swiper :sList="swiperList">
        <template #default="{ data }">
          <span class="swiper-tips">{{ data.tips }}</span>
          <img :src="data.url" alt="" class=" " />
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
      <div
        class="default-radius"
        v-for="(item, index) in data.list"
        :key="item.id"
      >
        <card-article-item :item="item"></card-article-item>
      </div>
    </div>
    <div
      class="rounded-sm relative overflow-hidden flex justify-between group h-10 w-full cursor-pointer"
      @click="onLoadingData"
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
          {{ data.list.length > 0 ? data.list.length + "/" + data.count : "" }}
        </div>
        <div
          class="w-28 flex justify-center items-center text-sm p-2 pr-4 -mr-2 group-hover:text-white"
        >
          {{ data.count == data.list.length ? "到底了" : "更多数据" }}
          <el-icon
            class="ml-1 animate-bounce"
            v-if="data.count != data.list.length"
            ><ArrowDownBold
          /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownBold } from "@element-plus/icons-vue";
import { ref } from "vue";
import banner from "@/assets/images/banner.jpg";
import { getNoticePageList } from "~~/composables/api";

const swiperList = ref([
  { tips: "banner1", url: banner },
  { tips: "banner2", url: banner },
]);

let query: any = {
  page: 1,
  pageSize: 10,
};
let data: any = ref({
  count: 0,
  list: [],
});
//

const resNotice: any = await getNoticePageList();
console.log("log=>", resNotice);
const noticeList = resNotice.data;

const resArticle: any = await getArticlePageList();
data.value.count = resArticle.data.count;
data.value.list = resArticle.data.rows;

// 加载数据
const loadData = async () => {
  // 到底了
  if (data.value.count == data.value.list.length && query.page != 1) {
    return;
  }
  query.page++;
  const resArticle: any = await getArticlePageList(query);
  data.value.count = resArticle.data.count;
  // 其它页
  data.value.list = data.value.list.concat(resArticle.data.rows);
};

const onLoadingData = async () => {
  loadData();
};
</script>
<style scoped lang="scss">
$_color: #ffffff;
$_text-secondary: rgba(0, 0, 0, 0.5);
$bgColor: rgba(255, 255, 255, 0.8);

.paging-box {
  overflow: hidden;
}
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
