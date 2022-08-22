/*
 * @Author: WeiShan
 * @Date: 2022-08-22 21:54:08
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 22:37:52
 * @FilePath: \react-learn\src\02-advanced\02-非受控卖座选项卡.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
/*
 * @Author: WeiShan
 * @Date: 2022-08-22 09:56:15
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 22:14:56
 * @FilePath: \react-learn\src\02-advanced\02-非受控卖座选项卡.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import "./css/02-maizuo.css"

import Film from './maizuocomponent/Film'

import Cinema from './maizuocomponent/Cinema'

import Center from './maizuocomponent/Center'

import Tabbar from './maizuocomponent/Tabbar'

import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {

  state = {
    click_current: 0
  }

  render() {
    return (
      <div>

        <Navbar click_current={()=>{
          console.log("点击了navbar下面按钮")
          this.setState(
            {
              click_current:2
            }
          )
        }}></Navbar>

        {/* {this.state.click_current === 0&&<Film></Film>}
        {this.state.click_current === 1&&<Cinema></Cinema>}
        {this.state.click_current === 2&&<Center></Center>} */}

        {/* 加载哪个组件 */}
        {
        this.which()
        }
        <Tabbar click_current={(current)=>{this.setCurrent(current)}}></Tabbar>
      </div>
    )
  }


  //加载哪个组件
  which=()=>{
    switch(this.state.click_current){
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return null;
    }
  }

  //传给tabbar子组件回调函数，当子组件改变时候 通知父组件修改状态
  setCurrent = (current)=>{
    this.setState(
      {
        click_current:current
      }
    )
  }

}
