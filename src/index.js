/*
 * @Author: WeiShan
 * @Date: 2022-07-18 11:25:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-20 16:46:36
 * @FilePath: \react-learn\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React from "react";

import ReactDOM from "react-dom/client";

import App from "./01-base/01-class组件";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    // React.createElement("div",{
    //     id:"aaa",
    //     className:"bbb"
    // },"123")
    
    <App/>
);