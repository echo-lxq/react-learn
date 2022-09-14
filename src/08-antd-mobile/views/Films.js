/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:31:48
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 22:01:15
 * @FilePath: \react-learn\src\08-antd-mobile\views\Films.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'
// import { NavLink } from 'react-router-dom'
import { Swiper, Tabs } from 'antd-mobile'

export default class Films extends Component {
  render() {
    return (
      <div>
        <Swiper autoplay loop>
          <Swiper.Item style={{ width: "100%", background: "yellow", height: "200px" }}>111</Swiper.Item>
          <Swiper.Item style={{ width: "100%", background: "red", height: "200px" }}>222</Swiper.Item>
          <Swiper.Item style={{ width: "100%", background: "gray", height: "200px" }}>333</Swiper.Item>
        </Swiper>

        {/* <ul>
          <NavLink to="/films/nowplaying" activeClassName="active"> 正在热映 </NavLink>
          <NavLink to="/films/comingsoon" activeClassName="active"> 即将上映 </NavLink>
        </ul> */}

        <div style={{ position: "sticky", top: "0px" ,background:"white"}}>
          <Tabs onChange={(value) => {
            console.log(value)
            this.props.history.push(value)
          }} activeKey={
            this.props.location.pathname
          }>
            <Tabs.Tab title='正在热映' key='/films/nowplaying'>

            </Tabs.Tab>
            <Tabs.Tab title='即将上映' key='/films/comingsoon'>

            </Tabs.Tab>
          </Tabs>
        </div>


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
