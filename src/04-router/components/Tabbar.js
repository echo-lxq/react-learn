/*
 * @Author: WeiShan
 * @Date: 2022-09-07 10:35:25
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-07 11:15:17
 * @FilePath: \react-learn\src\04-router\components\Tabbar.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'


export default function Tabbar() {
  return (
    <div>
        <li>
          <NavLink to="/films" activeClassName='active'>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName='active'>影院</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName='active'>我的</NavLink>
        </li>
    </div>
  )
}
