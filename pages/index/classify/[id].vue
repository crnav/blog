<template>
  <div class="container">
    <Title>{{ $route.params.id }}</Title>
    <!-- banner -->
    <div class="swiper-box default-radius">
      <!-- <img src="@/assets/images/here-we-go.png" alt="" /> -->
      <div class="tips">
        <h2>{{ $route.query.title }}</h2>
      </div>
    </div>
    <!-- 文章 -->
    <div class="article-box mt-2">
      <div
        class="default-radius container"
        v-for="(item, index) in articleList.rows"
        :key="index"
      >
        <card-article-item :item="item"></card-article-item>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

const id = ref(route.params.id);
const res: any = await getClassifyArticleList({ id: id._value });
const articleList: any = ref({ rows: [] });
if (res.code == 1) {
  articleList.value = res.data;
}
</script>
<style scoped lang="scss">
.swiper-box {
  height: 200px;
  margin-bottom: 10px;
  position: relative;
  margin: 0;
  padding: 0;
  font-family: "montserrat";
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%;
  animation: bganimation 15s infinite;
  .tips {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
  }
}

@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
