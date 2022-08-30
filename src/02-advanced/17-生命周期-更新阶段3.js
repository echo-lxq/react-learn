/*
 * @Author: WeiShan
 * @Date: 2022-08-30 22:13:37
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-30 22:31:58
 * @FilePath: \react-learn\src\02-advanced\17-生命周期-更新阶段3.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Child extends Component{
    state = {
        title:""
    }
    render(){
        return(
            <div>
                Child-{this.state.title}
            </div>
        )
    }

    // 用于子组件
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("willReceiveProps")
        //获取到的属性为老属性、
        console.log(this.props.text)
        //新的属性
        console.log(nextProps.text)
        
        //最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
        //把属性转化成孩子自己的状态
        this.setState(
            {
                title:nextProps.text+"WeiShan"
            }
        )
    }
    
}

export default class App extends Component {
    state = {
        text:"11111"
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                text:"2222"
            })
        }}>点击</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
