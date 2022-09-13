/*
 * @Author: WeiShan
 * @Date: 2022-09-07 20:37:05
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-13 20:19:56
 * @FilePath: \react-learn\src\06-react-redux\views\Detail.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
import { show,hide } from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'

function Detail(props) {
    // console.log(props.match.params.myid,"利用id取后端拿数据")
    // console.log(props.location.query.id,"利用id取后端拿数据"
    let {show,hide,location} = props
    useEffect(()=>{
      console.log(location.state.id,"利用id取后端拿数据")
      
      //store.dispatch 通知
      // store.dispatch(hide())
      hide()

      return(()=>{
      //   store.dispatch(show())
        show()
      })
    },[location.state.id,show,hide])

  return (
    <div>Detail</div>
  )
}
//connect 第一个参数，给孩子传的属性，第二个参数为给孩子传的回调函数

const mapDispatchToProps = {
  show,
  hide
}

export default connect(null,mapDispatchToProps)(Detail)
