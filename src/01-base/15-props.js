/*
 * @Author: WeiShan
 * @Date: 2022-08-18 08:16:49
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-18 22:57:52
 * @FilePath: \react-learn\src\01-base\15-props.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Navbar from './Navbar'

export default class App extends Component {
  render() {

    //上面父组件传来的
    var obj = {
      title:"测试",
      leftShow:false
    }

    return (
      <div>
        
        <div>
            <h2>首页</h2>
            {/* 调用navabar的时候加了一个属性 title */}
            <Navbar title="首页" leftShow={false}></Navbar>
        </div>
        
        <div>
            <h2>列表</h2>
            <Navbar title="列表" ></Navbar>
        </div>

        <div>
            <h2>购物车</h2>
            <Navbar title="购物车"></Navbar>
        </div>

        <div>
            <h2>传对象</h2>
            <Navbar title={obj.title} leftShow={obj.leftShow}></Navbar>
            {/* 当与传入子组件参数一致时候，可以使用es6展开语法 */}
            <Navbar {...obj}></Navbar>
        </div>
        
      </div>
    )
  }
}
