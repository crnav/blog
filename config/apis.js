let BASE_URL = ''
const BASE_URL_DEV = 'http://127.0.0.1:3002'
// const BASE_URL_PRE = 'http://127.0.0.1:3002' //同一台服务器-- 做了代理的-
const BASE_URL_PRE = 'http://120.48.61.71:3002'
const lifecycle = process.env.npm_lifecycle_event

if (lifecycle == 'dev') {
  BASE_URL = BASE_URL_DEV
} else if (lifecycle == 'build') {
  BASE_URL = BASE_URL_PRE
}

/**
 * 文章列表
 */
export const ARTICLE_PAGELIST = `${BASE_URL}/article/pageList`
/**
 * 通过分类获取文章列表
 */
export const ARTICLE_CLASSIFY_LIST = `${BASE_URL}/article/classify`

/**
 * 文章热门列表
 */
export const ARTICLE_HOT = `${BASE_URL}/article/hot`
/**
 * 文章详情
 */
export const ARTICLE_DETAIL = `${BASE_URL}/article/detail`

/**
 * 通知列表
 */
export const NOTICE_PAGELIST = `${BASE_URL}/notice/pageList`
/**
 * 分类列表
 */
export const CLASSIFY_LIST = `${BASE_URL}/classify/list`


/**
* 关于 md获取
*/
export const INFO_ABOUT = `${BASE_URL}/info/get`

/**
* 友情链接获取
*/
export const LINKS_LIST = `${BASE_URL}/links/list`


/**
* 预览图片
*/
export const FILE_IMGS = `${BASE_URL}/file/imgs`

/**
* 评论
*/
export const COMMENT = `${BASE_URL}/comment/`


