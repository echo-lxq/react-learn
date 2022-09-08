/*
 * @Author: WeiShan
 * @Date: 2022-09-08 21:37:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-08 22:02:17
 * @FilePath: \react-learn\src\setupProxy.js
 * @Description: ()
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/ajax', //请求的路径 以api开头的路径需要配置反向代理
        createProxyMiddleware({
            target: 'https://i.maoyan.com', //上面的请求路径会转发到地址
            changeOrigin: true
        })
    )
    app.use(
        '/gateway', //请求的路径 以api开头的路径需要配置反向代理
        createProxyMiddleware({
            target: 'https://m.maizuo.com', //上面的请求路径会转发到地址
            changeOrigin: true
        })
    )
}