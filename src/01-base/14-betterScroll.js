/*
 * @Author: WeiShan
 * @Date: 2022-08-17 22:23:07
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-17 22:53:22
 * @FilePath: \react-learn\src\01-base\14-betterScroll.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    list:[]
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.getData()}}>click</button>
        <div className="wrapper" style={{height:'200px',border:'1px solid red',overflow:'hidden'}}>
            <ul className="content">
                {this.state.list.map(item=><li key={item}>{item}</li>)}
            </ul>
        </div>
      </div>
    )
  }
  //点击按钮赋值
  getData(){
    var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.setState({
        list:list
    },()=>{
        //放在setState回调函数中，等dom渲染完成之后再调用
        new BetterScroll(".wrapper")
    })

  }
}
