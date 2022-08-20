/*
 * @Author: WeiShan
 * @Date: 2022-08-20 22:00:18
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-20 22:24:00
 * @FilePath: \react-learn\src\01-base\18-非受控.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import { createRef } from 'react'

export default class App extends Component {
  
    idRef = createRef()

    render() {
    return (
      <div>
        <h1>登录页面</h1>
        <input type="text" ref = {this.idRef} defaultValue="userName" />
        <button onClick={()=>{this.login()}}>登录</button>
        <button onClick={()=>{this.clearInput()}}>重置</button>
      </div>
    )

  }
   //登录操作
    login = ()=>{
        var userName = this.idRef.current.value
        //检查及提交数据
        console.log(userName)
    }

    //清除输入框内容
    clearInput = ()=>{
        this.idRef.current.value = ""
    }

}
