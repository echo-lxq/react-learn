/*
 * @Author: WeiShan
 * @Date: 2022-07-26 14:52:12
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-27 16:43:26
 * @FilePath: \react-learn\src\01-base\08-state.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    //变量名字固定 - 第一种定义状态的方法
    // state = {
    //     myText:"收藏", //未用
    //     myShow:true
    // }

    //第二种定义状态的方法
    constructor(){

      super()

      this.state = {
        myShow:true,
        myText:"未命名"
      }

    }

  render() {
    return (
      <div>
        <h1>React开发-{this.state.myText}</h1>
        <button onClick={()=>{
            this.setState(
                {
                    myShow:!this.state.myShow,
                    myText:"已命名"
                }
            )
            
            if(this.state.myShow){
                console.log("执行收藏的逻辑")
            }else{
                console.log("取消收藏的逻辑")
            }

        }}>{this.state.myShow?'收藏':"取消收藏"}</button>
        
      </div>
    )
  }
}
