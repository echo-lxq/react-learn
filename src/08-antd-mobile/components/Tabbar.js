/*
 * @Author: WeiShan
 * @Date: 2022-09-07 10:35:25
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-14 22:14:52
 * @FilePath: \react-learn\src\08-antd-mobile\components\Tabbar.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
// import { NavLink } from 'react-router-dom'
import style from'./Tabbar.module.css'
import '../views/css/App.css'
import {TabBar} from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'


function Tabbar(props) {
  const tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />,
      // badge: '5',
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className={style.tabbar}>
      {/* <ul>
        <li>
          <NavLink to="/films" activeClassName={style.active}>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName={style.active}>影院</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName={style.active}>我的</NavLink>
        </li>
      </ul> */}
      <TabBar onChange={(value)=>{
        props.history.push(value)
      }} defaultActiveKey={"/"+props.location.pathname.split("/")[1]}>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
    </div>
  )
}

export default withRouter(Tabbar)
