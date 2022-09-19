/*
 * @Author: WeiShan
 * @Date: 2022-07-18 11:25:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-19 15:58:17
 * @FilePath: \react-learn\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React from "react";

import ReactDOM from "react-dom/client";

import App from "./09-immutable/redux/App";


const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    <App/>
);