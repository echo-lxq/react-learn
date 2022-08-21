/*
 * @Author: WeiShan
 * @Date: 2022-08-21 22:39:41
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-21 22:52:30
 * @FilePath: \react-learn\src\02-advanced\01-子传递父.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
            <div style={{background:"red"}}>
                <button onClick={()=>{
                    // 通知父组件让isSHow取反
                    this.props.event() //调用父组件的回调函数
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component{
    render(){
        return(
            <div style={{background:"yellow",width: "200px"}}>
                <ul>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow:true
    }
  render() {
    return (
      <div>
        <Navbar event={
            ()=>{
                this.setState(
                    {
                        isShow:!this.state.isShow
                    }
                )
            }
        }></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}        
      </div>
    )
  }
}
