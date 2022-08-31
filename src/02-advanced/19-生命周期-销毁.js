/*
 * @Author: WeiShan
 * @Date: 2022-08-31 09:35:35
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-31 09:57:34
 * @FilePath: \react-learn\src\02-advanced\19-生命周期-销毁.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isCreate:true
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState(
                {
                    isCreate:!this.state.isCreate
                }
            )
        }}>点击</button>
      {this.state.isCreate?<Child></Child>:''}
      {this.state.isCreate&&<Child></Child>}
      </div>
    )
  }
}

class Child extends Component{
    render(){
        return(
            <div>
                Child
            </div>
        )
    }

    componentDidMount(){
        window.onresize = () =>{
            console.log('resize')
        }

        this.timer = setInterval(()=>{
            console.log("111")
        },2000)
    }

    //被销毁时候调用这个生命周期
    //组件被销毁，组件内部的监听会销毁，但是绑定在window窗口的事件监听不会销毁 - 定时器等
    componentWillUnmount(){
        console.log("componentWillUnmount")
        window.onresize = null
        clearInterval(this.timer)
    }
}
