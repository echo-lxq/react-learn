/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:23:15
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-07 10:50:00
 * @FilePath: \react-learn\src\04-router\App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Router from './router/indexRouter'
import Tabbar from './components/Tabbar'


export default class App extends Component {
  render() {
    return (
      <div>
        <div>其他内容</div>
        <Router>
          <Tabbar></Tabbar>
        </Router>
        
      </div>
    )
  }
}

/**
 * /films ===>Films
 * /cinemas ===>Cinemas
 * /center ===>Center
 */
