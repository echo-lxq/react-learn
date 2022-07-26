/*
 * @Author: WeiShan
 * @Date: 2022-07-22 09:00:37
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-26 09:21:55
 * @FilePath: \react-learn\src\01-base\07-ref应用.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    a = 100

    myref = React.createRef()
    
  render() {

    return (
      <div>
            <input type="text" ref={this.myref} />
            <button onClick={()=>this.handleClick()}>add</button>
      </div>
    )
  }

  handleClick(){
    console.log("click",this.myref.current.value); //添加current属性才可以拿到dom
  }

}
