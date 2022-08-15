/*
 * @Author: WeiShan
 * @Date: 2022-08-15 22:37:43
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-15 23:47:27
 * @FilePath: \react-learn\src\01-base\13-setState同步异步.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
  render() {
    return (
        <div>
            <div>{this.state.count}</div>
            <button onClick={()=>{this.addCount1()}}>add1</button>
            <button onClick={this.addCount2}>add2</button>
        </div>
    )
  }

  //计数器加一
  addCount1 = () => {
    /**
     * setState 异步更新状态，更新真实dom
     * 连续调用多次setState不会让页面一直渲染
     * 性能考虑，等一个事件循环完事之后在下一个宏任务中进行页面渲染
    */

    this.setState({
        count:this.state.count+1
    },()=>{
        //状态真实dom已经更新完成
        console.log(this.state.count)
    })

    this.setState({
        count:this.state.count+1
    })

    this.setState({
        count:this.state.count+1
    })

  }

  //计数器二，将执行逻辑放到setState的异步函数中
  addCount2 = () => {

    setTimeout(()=>{
        
        this.setState({
            count:this.state.count+1
        })
    
        this.setState({
            count:this.state.count+1
        })
    
        this.setState({
            count:this.state.count+1
        })

    },0)

  }

}

