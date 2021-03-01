## 使用方法
1. `npm install` or 
2. `npm run dev` 使用nodemon方法

## 功能
### 下载功能
1. 路由代码放在 `/components/download/index.js`
2. 所有可下载的文件放置在 `/components/download/assert`文件夹下
3. 使用浏览器打开 
    - 方法一: 使用express自带的res.download方法
    `localhost:8080/download/method1?name=下载文件名`
    
    - 方法二: 使用fs读取文件，然后通过转换成流stream下载
    `localhost:8080/download/method2?name=下载文件名`
    
### 上传功能

## 使用的库
1. express: 搭建后端的框架
2. path: Node自带的路径模块库
3. fs: Node自带的文件传输模块库
4. mime: 根据后缀获取Content-type的库, ".txt" => "text/plain"
5. multer: 是一个node.js中间件，用于处理 multipart/form-data类型的表单数据，主要用于上传文件。