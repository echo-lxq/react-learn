/*
 * @Author: WeiShan
 * @Date: 2022-08-18 22:58:53
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-20 10:20:30
 * @FilePath: \react-learn\src\01-base\16-props函数式组件.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Navbar from './Navbar'

import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <Navbar title="类组件1" leftShow={true}></Navbar>
        <Navbar title="类组件2" leftShow={false}></Navbar>
        {/* 函数式组件 */}
        <Sidebar bg="yellow" position="right"></Sidebar>
      </div>
    )
  }
}
