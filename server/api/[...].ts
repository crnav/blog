// 当做代理 请求接口
import { useQuery, useBody } from 'h3'
const BASE_URL1 = 'http://127.0.0.1:3002'
const BASE_URL = 'http://120.48.61.71:3002'
export default async (event) => {
    let options = {
        method: event.method
    }
    console.log('options', options)
    switch (event.method) {
        case 'post':
        case 'POST':
            options['body'] = await useBody(event)
            break;
        case 'get':
        case 'GET':
            options['params'] = useQuery(event)
            break;
        default:
            break;
    }
    console.log('====', event.headers.url)
    const res = await $fetch(BASE_URL + event.headers.url, options)
    return res
}
