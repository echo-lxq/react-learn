/*
 * @Author: WeiShan
 * @Date: 2022-08-24 21:48:46
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-24 22:07:23
 * @FilePath: \react-learn\src\02-advanced\05-ref版-表单域组件.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Field extends Component{

    state = {
        value:''
    }

    clear = ()=>{
        this.setState({
            value:''
        })
    }

    setValue = (value)=>{
        this.setState({
            value:value
        })
    }

    render(){
        return(
            <div style={{background:"yellow"}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={
                    (evt)=>{
                        this.setState(
                            {
                                value:evt.target.value
                            }
                        )
                    }
                } value={this.state.value} />
            </div>
        )
    }

}

export default class App extends Component {

    username = React.createRef()
    password = React.createRef()

    localUserName = localStorage.getItem("username")

  render() {
    return (
      <div>
        <h1>登录界面</h1>

        <Field label="用户名" type="text" ref={this.username}></Field>
        <Field label="密码" type="password" ref={this.password}></Field>

        <button onClick={()=>{
            console.log(this.username.current.state.value,
                this.password.current.state.value)
        }}>登录</button>

        <button onClick={()=>{
            this.username.current.clear()
            this.password.current.clear()
        }}>重置</button>
        
      </div>
    )
  }
}