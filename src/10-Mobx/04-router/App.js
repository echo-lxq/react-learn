/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:23:15
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-20 08:55:18
 * @FilePath: \react-learn\src\10-Mobx\04-router\App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Router from './router/IndexRouter'
import Tabbar from './components/Tabbar'

import store from './mobx/store'
import {autorun} from 'mobx'


export default class App extends Component {

  state = {
    isShow:false
  }

  componentDidMount() { 
    autorun(()=>{
      this.setState({
        isShow:store.isTabbarShow
      })
    })
   }

  render() {
    return (
      <div>
        <div>其他内容</div>
        <Router>
          {this.state.isShow&&<Tabbar></Tabbar>}
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
