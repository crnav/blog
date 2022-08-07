
export const useConfig = () => ({
  
  navs: [
    { url: '/', name: '首页' },
    // { url: '/tag', name: '标签' },
    { url: '/about', name: '关于' },
    { url: '/links', name: '友链' }
  ],
  blog: {
    title: '刘洋博客',
    desc: '猥琐发育别浪',
    mail: '153115598@qq.com',
  },
  intro: {
    author: 'BluesYoung-web',
    say: '沉迷代码，无法自拔',
    doc_toc: '文章目录',
    search: '搜索'
  },
  not_found: '未找到页面',
  music: {
    api: 'https://api.i-meto.com/meting/api',
    // # 目前为播放清单的 id，可以为 歌曲id、清单id、专辑id、搜索关键词
    id: '3231649721',
    // # 歌曲服务器 netease, tencent, kugou, xiami, baidu
    server: 'netease',
    // # id 类型 song, playlist, album, search, artist
    type: 'playlist'
  },
  one_say: {
    refresh: 'https://v1.hitokoto.cn/',
    detail: 'https://hitokoto.cn?uuid='
  }
});