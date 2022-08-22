/*
 * @Author: WeiShan
 * @Date: 2022-08-22 22:37:46
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 23:03:45
 * @FilePath: \react-learn\src\02-advanced\03-受控卖座选项卡.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import "./css/02-maizuo.css"

import Film from './maizuocomponent1/Film'

import Cinema from './maizuocomponent1/Cinema'

import Center from './maizuocomponent1/Center'

import Tabbar from './maizuocomponent1/Tabbar'

import Navbar from './maizuocomponent1/Navbar'

export default class App extends Component {

  state = {
    'list':[
        {
          id:1,
          text:"首页"
        },
        {
          id:2,
          text:"商城"
        },
        {
          id:3,
          text:"我的"
        }
      ],
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
        <Tabbar list={this.state.list} current={this.state.click_current} click_current={(current)=>{this.setCurrent(current)}}></Tabbar>
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