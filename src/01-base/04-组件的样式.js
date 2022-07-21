/*
 * @Author: WeiShan
 * @Date: 2022-07-21 14:32:10
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-21 15:09:26
 * @FilePath: \react-learn\src\01-base\04-组件的样式.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'
import './css/01-index.css' //导入css模块  webpack的支持！

export default class App extends Component {
  render() {
    let myName = "WeiShan"
    var obj = {
        backgroundColor:"yellow", //单一属性去掉 - 驼峰写法
        fontSize:"30px"
    }
    //jsx标签中 使用 {} 内判断为js
    return (
      <div>
            {10+20}{myName} 
            {10>20?"aaa":"bbb"} 

            <div style={obj}>
                1234
            </div>

            <div style={{background:"red"}}>
                1234
            </div>

            <div className="active">
                1234
            </div>

            <div id="myapp">
                1234
            </div>

            <label htmlFor="username">用户名</label>
            <input type="text" id="username" />

      </div>
    )
  }
}
