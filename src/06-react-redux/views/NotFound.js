/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:53:07
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-13 21:23:06
 * @FilePath: \react-learn\src\06-react-redux\views\NotFound.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'

function NotFound(props) {

  useEffect(()=>{
    console.log(props)
  },[props])

  return (
    <div>404 NotFound</div>
  )
}

function WeiShanconnect(cb,obj){
  var value= cb()
  return(MyComponent)=>{
    return(props)=>{
      console.log(props)
      return <div style={{color:"red"}}>
        <MyComponent {...value} {...props} {...obj}></MyComponent>
      </div>
    }
  }
}

export default WeiShanconnect(()=>{
  return{
    a:1,
    b:2
  }
},{aa(){console.log("aa")}})(NotFound)