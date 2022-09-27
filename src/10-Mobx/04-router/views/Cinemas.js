/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:32:27
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-27 16:05:26
 * @FilePath: \react-learn\src\10-Mobx\04-router\views\Cinemas.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import store from '../mobx/store'
import {autorun} from 'mobx'

function Cinemas(props) {

  // const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.cinemaList)
  const [cinemaList,setCinemaList] = useState([])

  // setCinemaList = (list)=>{
  //   cinemaList = list
  // }

  useEffect(()=>{
    if(store.list.length===0){
      store.getList()
    }

    var unsubscribe = autorun(()=>{
      console.log(store.list,store.isTabbarShow)
      setCinemaList(store.list)
    })

    return()=>{
      unsubscribe()
    }

  },[])

  return (
    <div>      
      <div>
        <ul>
        {cinemaList.map(item=><li key={item.cinemaId}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  )
}


export default Cinemas

