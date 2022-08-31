/*
 * @Author: WeiShan
 * @Date: 2022-07-18 11:25:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-31 22:56:10
 * @FilePath: \react-learn\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React from "react";

import ReactDOM from "react-dom/client";

// import App from "./01-base/01-class组件";

// import App from "./01-base/02-函数式组件";

import App from "./02-advanced/23-新生命周期-2案例";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    // React.createElement("div",{
    //     id:"aaa",
    //     className:"bbb"
    // },"123")
    // 使用严格模式校验 React.StrictMode 
    // <React.StrictMode>
    
        <App/>
    
    // </React.StrictMode>
    
);