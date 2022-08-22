/*
 * @Author: WeiShan
 * @Date: 2022-08-22 22:06:16
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 22:08:09
 * @FilePath: \react-learn\src\02-advanced\maizuocomponent\Navbar.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{height:"25px", background:"gray",textAlign:"center"}}>
        <button style={{float:"left"}}>back</button>
        <span>卖座电影</span>
        <button style={{float:"right"}} onClick = {()=>{
            this.props.click_current()
        }}>center</button>
      </div>
    )
  }
}
