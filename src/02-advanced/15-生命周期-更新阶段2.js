/*
 * @Author: WeiShan
 * @Date: 2022-08-30 08:12:58
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-30 08:30:30
 * @FilePath: \react-learn\src\02-advanced\15-生命周期-更新阶段2.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myName:"WeiShan"
    }
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{
            this.setState(
                {
                    myName:"xiaoming"
                }
            )
        }}>点击</button>
        <span>{this.state.myName}</span>
      </div>
    )
  }

  
  //输入scu回车 可以生成以下函数
  shouldComponentUpdate(nextProps,nextState){
    // return false;  //阻止更新
    //return true; //应该更新
    if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
        return true;
    }
        
    return false;
    
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
}
