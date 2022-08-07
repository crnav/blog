
import Http from '@/utils/http'




/**
获取文章列表 分页
*/
export const getArticlePageList = (params?: any) => {
    return Http.get(`/article/pageList`, params)
}

/**
 * 热门文章
*/
export const getArticleHotList = (params?: any) => {
    return Http.get(`/article/hot`, params)
}
/**
 * 文章详情
*/
export const getDetail = (params?: { id: any }) => {
    return Http.get(`/article/detail`, params)
}
/**
 * 获取分类列表
*/
export const getClassifyList = (params?: any) => {
    return Http.get(`/classify/list`,params)
}
// 分类相关的 文章列表
export const getClassifyArticleList = (params?: any) => {
    return Http.get(`/article/classifyList`,params)
}



/**
 * 通知
*/
export const getNoticePageList = (params?: any) => {
    return Http.get(`/notice/pageList`, params)
}

//--------------------------------评论 
/**
 * 评论列表
 * */
export const getCommentList = (params?: any) => {
    return Http.get(`/comment/list`, params)
}
/**
 * 评论
 * */
export const getCommentAdd = (data?: any) => {
    return Http.post(`/comment/add`, data)
}




/**
获取友情链接
*/
export const getLink = (params?: any) => {
    return Http.get(`/links/list`, params)
}


/**
 * 获取md文档  友链  关于 等页面内容
 * */
export const getMD = (params?: any) => {
    console.log('params-->', params)
    return Http.get(`/info/getMd`, params)
}

/**
获取左侧动态菜单
*/
export const getMenu = (params?: any) => {
    return Http.get(`/pages/list`, params)
}
export const getMenuDetail = (params?: any) => {
    return Http.get(`/pages/detail`, params)
}