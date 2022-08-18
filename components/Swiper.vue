<template>
  <swiper
    :style="style"
    :direction="direction"
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :loop="true"
    @slideChangeTransitionStart="onSlideChangeTransitionStart"
    @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
  >
    <!--  
          
    @slideChange="onSlideChange" -->

    <swiper-slide v-for="(item, index) in sList" :key="index">
      <div class="swiper-content">
        <!-- :class="getDirection" -->
        <!-- 向父组件 传递数据 以data接受 -->
        <slot :data="item"></slot>
      </div>
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </swiper>
</template>
<script>
// 引入分页，前进后退，立方体效果，自动循环 模块 Pagination, Navigation, EffectCube, Autoplay
import { Pagination, Autoplay } from "swiper";

// 引入基础轮播组件
import { Swiper, SwiperSlide } from "swiper/vue";

//  基础样式
import "swiper/css";
// 前进后退样式
// import "swiper/css/navigation";
// 分页样式
import "swiper/css/pagination";
// 滚动条样式
// import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    style: {
      type: String, //类型
      default: "", //设置默认值
    },
    sList: {
      type: Array, //类型
      default: [], //设置默认值
      required: true, //是否必须传递
    },
    isPagination: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: "horizontal", //vertical
    },
  },
  onMounted() {
    // console.log("onMounted3");
  },
  setup(props) {
    const getDirection = ref("");
    let isBlur = ref < Boolean > false;

    const setIsBlur = () => {
      isBlur = true;
    };

    onMounted(setIsBlur);
    // 结束
    const onSlideChangeTransitionEnd = (e) => {
      setTimeout(() => {
        if (e.slides[e.activeIndex] && isBlur) {
          let classData = "swiper-content";
          if (props.direction == "horizontal") {
            classData = "swiper-content transition-all hover:scale-110";
          }
          e.slides[e.activeIndex].firstChild.setAttribute("class", classData);
        }
      }, 10);
    };
    // 开始
    const onSlideChangeTransitionStart = (e) => {
      if (e.slides[e.activeIndex] && isBlur) {
        e.slides[e.activeIndex]?.firstChild.setAttribute(
          "class",
          "swiper-content blur-" + props.direction
        );
      }
    };

    // const onSlideChange = (e) => {
    //   console.log("slide change");
    // };
    const modules = ref([]);
    if (props.isPagination) {
      modules.value = [Pagination, Autoplay];
    } else {
      modules.value = [Autoplay];
    }
    return {
      getDirection,
      onSlideChangeTransitionStart,
      onSlideChangeTransitionEnd,
      // onSlideChange,
      modules: modules,
    };
  },
};
</script>
<style scoped>
:deep(.swiper-pagination) .swiper-pagination-bullet {
  background-color: #fff;
}
:deep(.swiper-pagination) .swiper-pagination-bullet-active {
  width: 30px;
  border-radius: 20px;
}
:deep(.swiper-content) {
  min-height: 40px;
}
:deep(.swiper-content) img {
  width: 100%;
  height: 200px;
}

.swiper-slide-active .blur-vertical {
  animation: blurVertical 1s;
  animation-fill-mode: forwards;
}
.swiper-slide-active .blur-horizontal {
  animation: blurHorizontal 1.6s;
  animation-fill-mode: forwards;
}
@keyframes blurHorizontal {
  from {
    filter: url(@/assets/images/motion-blur.svg#horizontal);
  }
  to {
    filter: none;
  }
}

@keyframes blurVertical {
  from {
    filter: url(@/assets/images/motion-blur.svg#vertical-small);
  }
  to {
    filter: none;
  }
}
</style>
