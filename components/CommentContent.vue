<template>
  <div>
    <div class="flex group relative">
      <div
        class="absolute w-12 h-12 bg-gray-200 top-4 left-4 rounded-full border-4 border-white"
      >
        <img class="rounded-full" :src="item.avatar" alt="" />
      </div>
      <div class="flex-1 box-bg-color-bright ml-10 py-2 pl-9">
        <div class="flex items-center">
          <div class="flex justify-between w-full">
            <div>
              <a
                target="_blank"
                v-show="item.url"
                :href="item.url"
                class="text-sm mr-2"
                >{{ item.from_name }}</a
              >
              <span v-show="!item.url" :href="item.url" class="text-sm mr-2">{{
                item.from_name
              }}</span>
              <span
                class="bg-blue-200 rounded-sm text-xs text-blue-500 py-0.5 px-1"
                v-show="item.role_name"
                >{{ item.role_name }}</span
              >
            </div>
            <span class="text-sm mr-2 text-color-info-7">#{{ item.id }}</span>
          </div>
        </div>
        <p class="text-color">
          <span class="text-sm" v-show="item.to_name">回复</span>
          <span class="text-sm text-blue-400 mr-1" v-show="item.to_name"
            >#{{item.to_id}} @{{ item.to_name }}</span
          >
          <span class="text-sm"> {{ item.content }}</span>
        </p>
        <div class="flex items-center">
          <span class="text-xs mr-2 text-gray-400">
            {{ timeago(item.created_at) }}
          </span>
          <span
            class="text-xs ml-2 text-gray-400 cursor-pointer hidden group-hover:block"
            @click="onShow(item)"
            >{{ item.show ? "取消回复" : "回复" }}</span
          >
        </div>
      </div>
    </div>
    <Comment :c_id="id" :pid="props.p_id" :item="item" v-if="item.show" :isReply="true"></Comment>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  p_id: {
    type: Number,
    required: true,
  },
  c_id: {
    type: String,
    required: true,
  },
});
const item: Object = props.item;
const id = props.c_id;
const { timeago } = useDateStore();

const onShow = (item) => {
  if (item["show"]) {
    item["show"] = false;
  } else {
    item["show"] = true;
  }
};
const okClick = () => {
  console.log("dataok");
  debugger;
  item["show"] = false;
};
</script>
