/*
 * @Author: WeiShan
 * @Date: 2022-09-11 21:25:21
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-13 21:55:29
 * @FilePath: \react-learn\src\06-react-redux\views\Search.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
import {store} from '../redux/store'
import { useState } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { useMemo } from 'react'

export default function Search() {

  const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.cinemaList)

  const [mytext,setMytext] = useState("")
  useEffect(()=>{
    if(store.getState().CinemaListReducer.cinemaList.length === 0){
      // console.log("去后台取数据")
      //actionCreator 里写异步
      store.dispatch(getCinemaListAction())
      // console.log(store.getState().CinemaListReducer.cinemaList)
    }else{
      console.log("store 取数据")
    }

    // 会导致订阅多次,订阅完成之后会返回一个函数，这个函数就可以取消订阅
    var unsubscribe =store.subscribe(()=>{
      console.log("cinema中订阅",store.getState().CinemaListReducer.cinemaList)
      setCinemaList(store.getState().CinemaListReducer.cinemaList)
    })

    //禁止重复订阅
    return(()=>{
      //取消订阅
      unsubscribe()
    })

  },[])

  const getCinemaList = useMemo(()=>cinemaList.filter(item=>item.name.toUpperCase().includes(mytext.toUpperCase())),
  [cinemaList,mytext])

  return (
    <div>
        <div>
            <input type="text" value={mytext} onChange={(evt)=>{
                setMytext(evt.target.value)
                // getCinemaList()
                // getCinemaList()
            }}/>
        </div>
        <div>
            <ul>
                {getCinemaList.map(item=><li key={item.cinemaId}>{item.name}</li>)}    
            </ul>
        </div>
    </div>
  )
}
