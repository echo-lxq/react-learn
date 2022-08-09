/*
 * @Author: WeiShan
 * @Date: 2022-08-09 23:09:45
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-09 23:16:59
 * @FilePath: \react-learn\src\01-base\11-dangerouslySetInnerHTML.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            myhtml:"<div><b>解析</b><br/><h1>标签</h1></div>"
        }
    }

  render() {
    return (
      <div>
        
        {/* 可以用到那时很危险，足够信任代码片段，后端返回接口数据 */}

        <div dangerouslySetInnerHTML={
            {
                __html:this.state.myhtml
            }
        }>

        </div>

      </div>
    )
  }
}
