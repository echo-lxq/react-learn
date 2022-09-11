/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:32:27
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-11 12:00:41
 * @FilePath: \react-learn\src\05-redux\views\Cinemas.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {

  const [cityName] = useState(store.getState().CityReducer.cityName)

  const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.cinemaList)

  useEffect(()=>{
    if(store.getState().CinemaListReducer.cinemaList.length === 0){
      // console.log("去后台取数据")
      //actionCreator 里写异步
      store.dispatch(getCinemaListAction())
      // console.log(store.getState().CinemaListReducer.cinemaList)
    }else{
      console.log("store 取数据")
    }
    store.subscribe(()=>{
      console.log("cinema中订阅",store.getState().CinemaListReducer.cinemaList)
      setCinemaList(store.getState().CinemaListReducer.cinemaList)
    })

    //禁止重复订阅

  },[])

  return (
    <div>
      Cinemas-
      <div onClick={()=>{
        props.history.push(`/city`)
      }}>{cityName}</div>
      <div>
        <ul>
        {cinemaList.map(item=><li key={item.cinemaId}>{item.name}</li>)}    
        </ul>
      </div>
    </div>
  )
}

