


const fetch = (url: string, options?: any) => {
    // console.log('log000=>', { ...options })
    options['headers'] = { url: url }
    return new Promise((resolve, reject) => {
        useFetch('/api/', { ...options }).then(({ data, error }) => {
            if (error.value) {
                reject(error.value)
                return
            }
            const value = data.value
            if (!value) {
                // 这里处理错误回调
                reject(value)
                // $router.replace('/reject/' + value.status)
            } else {
                resolve(value)
            }
        }).catch((err: any) => {
            console.log(err)
            reject(err)
        })
    })
}

export default new class Http {

    get(url: string, params?: any) {
        return fetch(url, { method: 'get', params })
    }

    post(url: string, body?: any) {
        return fetch(url, { method: 'post', body })
    }

    put(url: string, body?: any) {
        return fetch(url, { method: 'put', body })
    }

    delete(url: string, body?: any) {
        return fetch(url, { method: 'delete', body })
    }
}