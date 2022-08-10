/*
 * @Author: WeiShan
 * @Date: 2022-08-09 23:21:38
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-10 15:14:58
 * @FilePath: \react-learn\src\01-base\12-卖座选项卡.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Film from './maizuocomponent/Film'

import Cinema from './maizuocomponent/Cinema'

import Center from './maizuocomponent/Center'

import "./css/02-maizuo.css"

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

        {/* {this.state.click_current === 0&&<Film></Film>}
        {this.state.click_current === 1&&<Cinema></Cinema>}
        {this.state.click_current === 2&&<Center></Center>} */}

        {/* 加载哪个组件 */}
        {this.which()}


        <ul>
          {/* 根据当前点击的索引跟当前索引判断 */}
          {this.state.list.map((item,index)=><li className={this.state.click_current === index?'active':''} key={item.id} onClick={()=>{this.listClick(index)}} >{item.text}</li>)}
        </ul>
      </div>
    )
  }

  listClick = (index)=>{
    // 需要注意的是，每次setState之后，render都会重新渲染一遍
    this.setState(
      {
        click_current:index
      }
    )
  }

  //加载哪个组件
  which(){
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
