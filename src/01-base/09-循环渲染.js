/*
 * @Author: WeiShan
 * @Date: 2022-07-28 09:22:24
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-29 10:22:56
 * @FilePath: \react-learn\src\01-base\09-循环渲染.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list:[
          {id:1,text:"1"},{id:2,text:"2"},{id:3,text:"3"}
        ]
    }

  render() {

    var newList = this.state.list.map(item=><li key={item.id}>{item.text}</li>)

    return (
      <div>
        <ul>
            {/* 第一种 */}
            {/* {this.state.list.map(item=><li>{item}</li>)} */}

            {/* 第二种 */}
            {newList}
        </ul>
      </div>
    )
  }
}

/**
 * 原生js的map方法
 */

var list =['a','b','c'];

var newList = list.map(item=>`<li>${item}</li>`);  //映射，将list内容都映射为iteam

console.log(newList.join(""))