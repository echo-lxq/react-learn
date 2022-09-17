/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:32:27
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-17 12:01:13
 * @FilePath: \react-learn\src\08-antd-mobile\views\Cinemas.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
// import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import  {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

function Cinemas(props) {

  // const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.cinemaList)
  const {cinemaList,getCinemaListAction} = props
  useEffect(()=>{
    if(cinemaList.length === 0){
      // console.log("去后台取数据")
      //actionCreator 里写异步
      getCinemaListAction()
      // console.log(store.getState().CinemaListReducer.cinemaList)
    }else{
      console.log("store 取数据")
    }

  },[cinemaList,getCinemaListAction])

  return (
    <div>
      {/* <div style={{overflow:"hidden"}}>
        <div style={{float:"left"}} onClick={()=>{
          props.history.push(`/city`)
        }}>{props.cityName}</div>
        <div style={{float:"right"}} onClick={()=>{
          props.history.push(`/cinemas/search`)
        }}>
          搜索
        </div>
      </div> */}

        <NavBar back={null} right={ <SearchOutline onClick={()=>{
          props.history.push(`/cinemas/search`)
        }}/>} left={<div onClick={()=>{
          props.history.push(`/city`)
        }}>{props.cityName}</div>}>
          影院
        </NavBar>
      
      <div>
        <ul>
        {props.cinemaList.map(item=><li key={item.cinemaId}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=> {
  return {
    cinemaList:state.CinemaListReducer.cinemaList,
    cityName:state.CityReducer.cityName
  }

}

const mapDispatchToProps = {
  getCinemaListAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Cinemas)

