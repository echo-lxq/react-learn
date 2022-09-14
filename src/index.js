/*
 * @Author: WeiShan
 * @Date: 2022-07-18 11:25:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 16:42:32
 * @FilePath: \react-learn\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React from "react";

import ReactDOM from "react-dom/client";
import 'antd/dist/antd.min.css';


// import App from "./01-base/01-class组件";

// import App from "./01-base/02-函数式组件";

import App from "./07-antd/09-Modal"

// import { Provider } from "react-redux";

// import {store,persistor} from "./07-antd/01-antd引入";

// import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    // <Provider store={store}>
    //     <PersistGate loading={null} persistor={persistor}>
    //     <App/>
    //     </PersistGate>
    // </Provider>
    <App></App>
);