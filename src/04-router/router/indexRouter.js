/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:39:04
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-06 11:12:53
 * @FilePath: \react-learn\src\04-router\router\indexRouter.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Films from '../views/Films'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import NotFound from '../views/NotFound'

export default class indexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/films" component={Films}></Route>

              <Route path="/cinemas" component={Cinemas}></Route>
              <Route path="/center" component={Center}></Route>
              {/* 模糊匹配 */}
              {/* <Redirect from="/" to="/films" /> */}

              {/* 精确匹配  exact*/}
              <Redirect from="/" to="/films" exact/>

              <Route component={NotFound}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
