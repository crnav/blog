<template>
  <div class="comment-container">
    <Comment :c_id="id" @submitOk="submitOk"></Comment>
    <div class="pl-2 text-sm text-gray-400">共 {{ state.total }} 条评论</div>
    <!-- 评论 -->
    <div class="mb-2" v-for="item in state.dataList" :key="item.id">
      <!-- 一级 -->
      <comment-content :c_id="id" :p_id="item.id" :item="item"></comment-content>
      <div
        class="pl-4 mt-1"
        v-for="children in item.children"
        :key="children.id"
      >
        <!-- 二级 -->
        <comment-content :c_id="id" :p_id="item.id" :item="children"></comment-content>
      </div>
    </div>
    <!-- 加载更多 -->
    <div class="flex justify-center">
      <el-button
        :loading="state.dataListLoading"
        v-show="state.pageStatus == 2"
        type="primary"
        @click="getDataList()"
        >加载更多</el-button
      >
      <span class="text-sm text-gray-400" v-show="state.pageStatus == 1">到底啦</span>
      <span class="text-sm text-gray-400 pb-4" v-show="state.pageStatus == 0">期待你的高见</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  c_id: {
    type: String,
    required: true,
  },
});
// 定义变量
const id = ref(props.c_id);

const queryForm = {
  cId: props.c_id,
};

const state: any = reactive({
  dataListUrl: "/comment/list",
  queryForm: queryForm,
});
// 分页一些方法
const { getDataList,setState } = useCrud(state);

// 提交评论
const submitOk = (res: any) => {
  state.dataList.unshift(res);
  state.total++;
};

// 获取列表
const resArticle: any = await getCommentList(queryForm);
setState(resArticle.data)



</script>
