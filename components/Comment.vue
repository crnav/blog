<template>
  <div class="comment p-2">
    <!-- 评论 -->
    <div class="block w-full md:flex justify-between text-sm">
      <div class="ch-nick ch-box flex mb-2 items-center">
        <!-- <label class="mr-1"></label> -->
        <input
          v-model="form.from_name"
          class="p-2 flex-1"
          type="text"
          placeholder="昵称"
          name="text"
        />
      </div>
      <div class="ch-email ch-box mb-2 flex items-center">
        <!-- <label class="mr-1"></label> -->
        <input
          v-model="form.email"
          class="p-2 flex-1"
          type="email"
          name="email"
          placeholder="邮箱"
        />
      </div>
      <div class="mb-2 flex items-center">
        <!-- <label class="mr-1">网站</label> -->
        <input
          v-model="form.url"
          class="p-2 flex-1"
          type="url"
          name="url"
          placeholder="url"
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
      <el-button type="primary" :loading="btnLoading" @click="subMit"
        >发送</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

const emit = defineEmits(["submitOk"]);
const btnLoading = ref(false);

const props = defineProps({
  commentId: {
    type: String,
  },
  c_id: {
    type: String,
    required: true,
  },
  pid: {
    type: Number,
    required: false,
    default: 0,
  },
  item: {
    type: Object,
    default: null,
  },
  isReply: {
    type: Boolean,
    default: false,
  },
});

let form: any = ref({
  // content: "",
  // url: "",
  // email: "",
  // from_name: "",
});

const subMit = async () => {
  btnLoading.value = true;
  form.value["topic_id"] = props.c_id;
  let res: any = null;

  setTimeout(async () => {
    btnLoading.value = false;

    if (props.isReply) {
      form.value["pid"] = props.pid;
      form.value["to_name"] = props.item.from_name;
      form.value["to_email"] = props.item.email;
      form.value["to_id"] = props.item.id;
    }

    res = await getCommentAdd(form.value);
    if (res.code == 1) {
      // 回复成功
      emit("submitOk", res.data);
      form.value = {};
      ElMessage({
        message: props.isReply ? "回复成功" : "评论成功",
        type: "success",
      });
    } else {
      ElMessage({
        message: res.msg,
        type: "error",
      });
    }
  }, 1000);
};
</script>
