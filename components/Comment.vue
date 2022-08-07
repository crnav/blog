<template>
  <div class="comment p-2">
    <!-- 评论 -->
    <div class="block w-full md:flex justify-between text-sm">
      <div class="ch-nick ch-box flex mb-2 items-center">
        <label class="mr-1">昵称</label>
        <input
          v-model="form.from_name"
          class="p-2 flex-1"
          type="text"
          placeholder="输入昵称"
        />
      </div>
      <div class="ch-email ch-box mb-2 flex items-center">
        <label class="mr-1">邮箱</label>
        <input
          v-model="form.email"
          class="p-2 flex-1"
          type="text"
          placeholder="输入邮箱"
        />
      </div>
      <div class="mb-2 flex items-center">
        <label class="mr-1">网站</label>
        <input
          v-model="form.url"
          class="p-2 flex-1 "
          type="text"
          placeholder="输入网站(可选 请带http)"
        />
      </div>
    </div>
    <div class="mt-2">
      <!-- cols="30" rows="10" -->
      <textarea
        class="h-32 w-full p-2 text-sm"
        placeholder="输入内容"
        v-model="form.content"
      ></textarea>
    </div>
    <div class="flex justify-between">
      <div class="cf-left"></div>
      <el-button type="primary" @click="subMit">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

const props = defineProps({
  c_id: {
    type: String,
    required: true,
  },
});

let form: any = ref({
  // content: "",
  // url: "",
  // email: "",
  // from_name: "",
});

const subMit = async () => {
  form.value["topic_id"] = props.c_id;

  const res: any = await getCommentAdd(form.value);
  console.log(res)
  if (res.code == 1) {
    form.value = {};
    ElMessage({
      message: res.msg,
      type: "success",
    });
  } else {
    ElMessage({
      message: res.msg,
      type: "error",
    });
  }
};
</script>
