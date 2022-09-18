/*
 * @Author: WeiShan
 * @Date: 2022-07-18 11:25:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-18 22:10:04
 * @FilePath: \react-learn\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React from "react";

import ReactDOM from "react-dom/client";

import App from "./09-immutable/06-个人信息修改第二版";


const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    <App/>
);