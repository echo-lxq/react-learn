/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:32:34
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-08 20:43:04
 * @FilePath: \react-learn\src\04-router\views\Center.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'

export default function Center(props) {
  return (
    <div>
      Center
      <div onClick={()=>{
        props.history.push(`/filmsorder`)
        // console.log(props)
      }}>
        电影订单
      </div>  
    </div>
  )
}

