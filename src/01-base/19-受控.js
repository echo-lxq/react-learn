/*
 * @Author: WeiShan
 * @Date: 2022-08-20 22:24:54
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-20 22:35:32
 * @FilePath: \react-learn\src\01-base\19-受控.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
  
    state = {
        userName:"WeiShan"
    }

    render() {
    return (
      <div>
        <h1>登录页面</h1>
        <input type="text" value={this.state.userName} onChange={this.changeInput} />
        <button onClick={()=>{this.login()}}>登录</button>
        <button onClick={()=>{this.clearInput()}}>重置</button>
      </div>
    )

  }

    //监听输入框值
    changeInput = (evt)=>{
        console.log("onChange",evt.target.value)

        this.setState(
            {
                userName:evt.target.value
            }
        )

    }

    //登录操作
    login = ()=>{
        console.log(this.state.userName)
    }

    //清除输入框内容
    clearInput = ()=>{
        this.setState(
            {
                userName:''
            }
        )
    }

}
