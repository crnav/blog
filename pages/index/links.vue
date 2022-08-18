<template>
  <div class="links module-bg p-2">
    <!-- <Title>友情链接</Title> -->
    <MdEditor
      :theme="color.value"
      class="p-10"
      :previewOnly="true"
      v-model="data.content"
    ></MdEditor>
    <div class="flex flex-wrap">
      <div
        class="rounded-sm w-6/12 md:w-4/12 p-2"
        v-for="item in linksList"
        :key="item.id"
      >
        <nuxt-link
          no-prefetch
          target="_blank"
          :to="item.url"
          class="bg-white flex items-center p-2 cursor-pointer"
        >
          <div class="flex-1 flex flex-col mr-2 w-0">
            <text class="name text-gray-900">{{ item.title }}</text>
            <text class="desc text-sm text-gray-400 truncate">{{
              item.desc
            }}</text>
          </div>
          <div class="bg-black rounded-sm">
            <img
              src="@/assets/images/here-we-go.png"
              class="w-10 h-10 object-cover"
              alt=""
            />
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- <comment-container c_id="links"></comment-container> -->
  </div>
</template>
<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";



const color: any = useColorMode();

// 获取连接
const resLink: any = await getLink();
const linksList: any = ref(resLink.data);
// 获取md
const res: any = await getMD({ name: "links" });
const data = ref(res.data);

// useHead({
//   titleTemplate: (title) => `友情链接 - ${title}`,
// });
</script>
