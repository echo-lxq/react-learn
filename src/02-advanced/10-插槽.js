/*
 * @Author: WeiShan
 * @Date: 2022-08-25 22:30:16
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-25 22:49:13
 * @FilePath: \react-learn\src\02-advanced\10-插槽.js
 * @Description:
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                child
                {/*  插槽 vue slot  */}
                {this.props.children[0]}                
                {this.props.children[1]}                
                {this.props.children[2]}                
            </div>
        )
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
            <div>1111</div>
            <div>2222</div>
            <div>3333</div>
        </Child>
      </div>
    )
  }
}

/**
 * 1.为了复用（多种类型dom）-例：轮播(图片或视频)
 * 2.减少父子通信
 */
