/*
 * @Author: WeiShan
 * @Date: 2022-07-22 08:35:53
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-22 08:56:54
 * @FilePath: \react-learn\src\01-base\05-事件绑定-1.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
    
  render() {
    return (
      <div>
            <input type="text" />
            {/* 方法一 如果处理逻辑过多，不推荐这种 */}
            <button onClick={()=>{
                console.log("click1");
            }}>add1</button>

            {/* 方法二 */}
            <button onClick={this.handleClick2}>add2</button>

            {/* 方法三 */}
            <button onClick={this.handleClick3}>add3</button>

            {/* 方法四  比较推荐 */}
            <button onClick={()=>{
                this.handleClick4()
            }}>add4</button>
      </div>
    )
  }

  handleClick2 = ()=>{
        console.log("click2");
  }

  handleClick3(){
        console.log("click3");
  }

  handleClick4(){
    console.log("click4");
  }

}
