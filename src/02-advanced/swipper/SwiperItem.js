/*
 * @Author: WeiShan
 * @Date: 2022-09-01 16:36:56
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 16:57:21
 * @FilePath: \react-learn\src\02-advanced\swipper\SwiperItem.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class SwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide">
        {this.props.children}
      </div>
    )
  }
}
