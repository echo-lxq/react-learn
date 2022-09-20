/*
 * @Author: WeiShan
 * @Date: 2022-09-07 20:37:05
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-20 08:52:23
 * @FilePath: \react-learn\src\10-Mobx\04-router\views\Detail.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
import store from '../mobx/store'

export default function Detail(props) {
    // console.log(props.match.params.myid,"利用id取后端拿数据")
    // console.log(props.location.query.id,"利用id取后端拿数据")
    console.log(props.location.state.id,"利用id取后端拿数据")

    useEffect(()=>{
      store.isTabbarShow = false
      return(()=>{
        // console.log("销毁")
        store.isTabbarShow = true
      })
    },[])

  return (
    <div>Detail</div>
  )
}
