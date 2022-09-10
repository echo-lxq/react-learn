/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:31:48
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-08 21:19:52
 * @FilePath: \react-learn\src\04-router\views\Films.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import { Route , Redirect , Switch} from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'
import { NavLink } from 'react-router-dom'


export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{height:"200px",background:"yellow"}}>大轮播</div>
        
        <ul>
          <NavLink to="/films/nowplaying" activeClassName="active"> 正在热映 </NavLink>
          <NavLink to="/films/comingsoon" activeClassName="active"> 即将上映 </NavLink>
        </ul>

        {/* 路由配置，嵌套路由 */}
        <Switch>
            <Route path="/films/nowplaying" component={NowPlaying}></Route>
            <Route path="/films/comingsoon" component={ComingSoon}></Route>
            <Redirect from="/films" to="/films/nowplaying" />
        </Switch>
      </div>
    )
  }
}
