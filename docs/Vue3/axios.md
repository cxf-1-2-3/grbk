---
autoPrev: elementPlus
---
# axois使用及配置

## 1.安装

```
npm i axios
```

## 2.创建配置文件

```js
创还一个存储axios基础配置js文件
//  axios 基础封装
import axios from 'axios'

const httpIns = axios.create({
  baseURL: '', //基础地址
  timeout: 5000 //超时时间5s
})

// 请求拦截器
httpIns.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => Promise.reject(e)
)
// 响应拦截器
httpIns.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e)
  }
)
export default httpIns
```

## 3.创建接口

```js
使用
注册请求
import httpIns from '@/util/http'

export function getlist() {
  return httpIns({
    url: ''
  })
}
```

## 4.使用接口

```js
import { getlist } from '@/api/testAPI'
getlist()
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
```



