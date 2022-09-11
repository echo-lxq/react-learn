/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:23:15
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-11 21:31:37
 * @FilePath: \react-learn\src\05-redux\App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Router from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'


export default class App extends Component {

  state = {
    showTabbar:true
  }

  //store.subscribe 订阅

  componentDidMount(){
    store.subscribe(()=>{
      // console.log("app 中订阅",store.getState())
      this.setState({
        showTabbar:store.getState().TabbarReducer.show
      })
    })
  }

  render() {
    return (
      <div>
        {/* <div>其他内容</div> */}
        <Router>
          {this.state.showTabbar&&<Tabbar></Tabbar>}
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
