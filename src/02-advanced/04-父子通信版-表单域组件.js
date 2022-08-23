/*
 * @Author: WeiShan
 * @Date: 2022-08-23 22:19:47
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-23 22:46:52
 * @FilePath: \react-learn\src\02-advanced\04-父子通信版-表单域组件.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Field extends Component{

    render(){
        return(
            <div style={{background:"yellow"}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} value = {this.props.value} onChange={(evt)=>{this.props.inputEvent(evt.target.value)}}/>
            </div>
        )
    }

}

export default class App extends Component {

    state = {
        userName:localStorage.getItem("username"),
        password:''
    }

  render() {
    return (
      <div>
        <h1>登录界面</h1>

        <Field label="用户名" type="text" inputEvent = {(value)=>{this.setState({userName:value})}} value={this.state.userName}></Field>
        <Field label="密码" type="password" inputEvent = {(value)=>{this.setState({password:value})}} value={this.state.password}></Field>

        <button onClick={()=>{
            console.log(this.state.userName,this.state.password)
        }}>登录</button>

        <button onClick={()=>{
            this.setState(
                {
                    userName:'',
                    password:''
                }
            )
        }}>重置</button>
        
      </div>
    )
  }
}
