/*
 * @Author: WeiShan
 * @Date: 2022-09-01 16:11:49
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 17:09:33
 * @FilePath: \react-learn\src\02-advanced\27-swiper-组件.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Swiper from './swipper/Swipper'

import SwiperItem from './swipper/SwiperItem'

export default class App extends Component {

    state = {
        list:[]
    }

    componentDidMount() { 
        setTimeout(()=>{
            this.setState(
                {
                    list:['111','222','333',"444"]
                }
            )
        },1000)

     }

  render() {
    return (
      <div>
        <Swiper loop={true}>
            {this.state.list.map(item=>
                <SwiperItem key={item}>{item}</SwiperItem>
            )}
        </Swiper>
      </div>
    )
  }
}
