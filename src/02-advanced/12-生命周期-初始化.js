/*
 * @Author: WeiShan
 * @Date: 2022-08-27 10:32:44
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-27 10:55:42
 * @FilePath: \react-learn\src\02-advanced\12-生命周期-初始化.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName:"WeiShan"
    }

    //将要挂载,拿不到dom - 在这里可以进行状态初始化
    componentWillMount(){
        console.log("will mount",this.state.myName)

        //第一次上树前的最后一次状态修改机会

        this.setState(
            {
                myName:"WeiShanVerify"
            }
        )

        //初始化数据的作用。

    }

    //已经渲染完，可以拿到真实的dom节点
    componentDidMount(){
        console.log("did mount")

        //数据请求axios/ajax
        //订阅发布模式中的订阅函数的调用
    }

  render() {
    console.log("render")
    return (
      <div>
        <span id="my_name">
            {this.state.myName}
        </span>
      </div>
    )
  }
}
