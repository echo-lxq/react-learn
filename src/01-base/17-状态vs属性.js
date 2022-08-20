/*
 * @Author: WeiShan
 * @Date: 2022-08-20 21:26:14
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-20 21:48:08
 * @FilePath: \react-learn\src\01-base\17-状态vs属性.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import lxq from 'prop-types'

class Child extends Component{

  constructor(){
    super()
    console.log("子组件控制器")
  }

  static propTypes = {
    text:lxq.string
  }
  
    render(){
      console.log("子组件渲染")
        return(<div>Child-{this.props.text}</div>);
    }

}

export default class App extends Component {

  state = {
    text:"123"
  }

  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState(
              {
                text:"222"
              }
            ,()=>{
              console.log(this.state.text)
            })
        }}>父组件按钮</button>
        <div>{this.state.text}</div>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
