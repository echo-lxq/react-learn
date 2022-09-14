/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:23:15
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 21:38:36
 * @FilePath: \react-learn\src\08-antd-mobile\App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Router from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import {connect} from 'react-redux'
// import store from './redux/store'

// import {Button} from 'antd-mobile'


class App extends Component {
  //store.subscribe 订阅

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div>
        {/* <div>其他内容</div> */}
        <Router>
          {this.props.isShow&&<Tabbar></Tabbar>}
        </Router>
        
        {/* <Button color='danger' fill='solid'>
            Solid
          </Button> */}

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log(state)
  return{
    isShow:state.TabbarReducer.show
  }
}

export default  connect(mapStateToProps)(App)

/**
 * /films ===>Films
 * /cinemas ===>Cinemas
 * /center ===>Center
 */
