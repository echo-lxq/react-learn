/*
 * @Author: WeiShan
 * @Date: 2022-08-22 10:13:55
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 10:25:08
 * @FilePath: \react-learn\src\02-advanced\maizuocomponent\Tabbar.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
// import "./css/02-maizuo.css"

export default class Tabbar extends Component {
    constructor(){
        super()
        this.state = {
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
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.list.map((item,index)=><li key={item.id} className={this.state.click_current === index?'active':''} 
                onClick = {()=>{this.listClick(index)}}>{item.text}</li>)
            }
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

}
