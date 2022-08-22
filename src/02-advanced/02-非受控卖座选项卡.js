/*
 * @Author: WeiShan
 * @Date: 2022-08-22 09:56:15
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 10:24:10
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

export default class App extends Component {

  state = {
    
    
  }

  render() {
    return (
      <div>

        {/* {this.state.click_current === 0&&<Film></Film>}
        {this.state.click_current === 1&&<Cinema></Cinema>}
        {this.state.click_current === 2&&<Center></Center>} */}

        {/* 加载哪个组件 */}
        {
        this.which()
        }
        <Tabbar></Tabbar>
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
}
