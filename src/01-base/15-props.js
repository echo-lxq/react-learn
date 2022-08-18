/*
 * @Author: WeiShan
 * @Date: 2022-08-18 08:16:49
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-18 08:22:51
 * @FilePath: \react-learn\src\01-base\15-props.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <div>
            <h2>首页</h2>
            <Navbar></Navbar>
        </div>
        
        <div>
            <h2>列表</h2>
            <Navbar></Navbar>
        </div>

        <div>
            <h2>购物车</h2>
            <Navbar></Navbar>
        </div>

      </div>
    )
  }
}
