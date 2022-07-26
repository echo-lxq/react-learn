/*
 * @Author: WeiShan
 * @Date: 2022-07-26 14:52:12
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-26 15:15:22
 * @FilePath: \react-learn\src\01-base\08-state.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    //变量名字固定
    state = {
        myText:"收藏", //未用
        myShow:true
    }

  render() {
    return (
      <div>
        <h1>React开发</h1>
        <button onClick={()=>{
            this.setState(
                {
                    myShow:!this.state.myShow
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
