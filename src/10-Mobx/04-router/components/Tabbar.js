/*
 * @Author: WeiShan
 * @Date: 2022-09-07 10:35:25
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-10 10:51:11
 * @FilePath: \react-learn\src\04-router\components\Tabbar.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from'./Tabbar.module.css'
import '../views/css/App.css'


export default function Tabbar() {
  return (
    <div className={style.tabbar}>
      <ul>
        <li>
          <NavLink to="/films" activeClassName={style.active}>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName={style.active}>影院</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName={style.active}>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
