<template>
  <div class="comment-container">
    <Comment :c_id="id"></Comment>
    <div>共 {{ data.count }} 条评论</div>
    <!-- 评论 -->
    <div
      class="bg-white mb-2 flex p-2"
      v-for="item in data.list"
      :key="item.comment_id"
    >
      <div class="w-10 h-10 bg-gray-200 rounded-full mr-2"></div>
      <div class="flex-1">
        <div class="flex items-center">
          <span class="text-sm mr-2">{{ item.from_name }}</span>

          <span
            class="bg-blue-200 rounded-sm text-xs text-blue-500 py-0.5 px-1"
            >{{ item.role_name }}</span
          >
        </div>
        <p class="text-gray-600">{{ item.content }}</p>
        <div>
          <span class="text-xs mr-2 text-gray-400">
            {{ timeago(item.created_at) }}
          </span>
        </div>
      </div>
    </div>
    <!-- 加载更多 -->
    <div class="flex justify-center">
      <el-button
        v-show="data.count != data.list.length"
        type="primary"
        @click="loadList"
        >加载更多</el-button
      >
      <span
        class="text-sm text-gray-400"
        v-show="data.count == data.list.length"
        >到底啦</span
      >
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
const id = ref(props.c_id);
const { timeago } = useDateStore();

let query: any = {
  page: 1,
  pageSize: 10,
  cId: id.value,
};
let data: any = ref({
  count: 0,
  list: [],
});

const res: any = await getCommentList(query);
data.value.count = res.data.count;
data.value.list = res.data.rows;

// // 加载数据
const loadData = async () => {
  // 到底了
  if (data.value.count == data.value.list.length && query.page != 1) {
    return;
  }
  query.page++;
  const resArticle: any = await getCommentList(query);
  data.value.count = resArticle.data.count;
  // 其它页
  data.value.list = data.value.list.concat(resArticle.data.rows);
};

const loadList = async () => {
  loadData();
};
</script>
