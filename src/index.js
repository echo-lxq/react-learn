/*
 * @Author: WeiShan
 * @Date: 2022-07-14 09:29:18
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-14 14:35:57
 * @FilePath: \react-learn\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */

//引入react 核心模块

//从react的包当中引入了React，只要你要写React.js组件就必须引入React，
//因为react里有一种语法叫JSX,要写JSX就必须引入React
import React from "react";
//ReactDom 可以帮助我们把React组件渲染到页面上去，没有其他作用了。它
//是从react-dom中引入的
// import ReactDOM from "react-dom";

import ReactDOM from "react-dom/client";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

//ReactDom里有一个render方法，功能就是把组件渲染并且构造DOM树，然后插入到页面上某个特定的元素上
root.render(
    //这里比较奇怪了，它并不是一个字符串，看起来像是纯HTML代码写在JavaScript代码里面。
    //"在JavaScript写的标签的"语法叫JSX-JavaScript XML
    <h1>欢迎使用react的世界</h1>
    //渲染到哪里
    
)
