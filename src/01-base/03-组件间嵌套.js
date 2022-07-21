/*
 * @Author: WeiShan
 * @Date: 2022-07-21 08:31:28
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-21 09:19:56
 * @FilePath: \react-learn\src\01-base\03-组件间嵌套.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, {Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <div>Navbar</div>
        )
    }
}

function Swiper(){
    return (
        <div>Swiper</div>
    )
}

//es6 箭头函数 箭头函数后面为该函数返回值
const Tabbar =()=><div>Tabbar</div>

class App extends Component{
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default App;
