/*
 * @Author: WeiShan
 * @Date: 2022-09-03 11:10:52
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-03 11:25:23
 * @FilePath: \react-learn\src\03-hooks\04-useEffect2.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
   const [name,setName] = useState("weishan")

   useEffect(()=>{
    setName(name.substring(0,1).toUpperCase()+name.substring(1))
   },[name]) //第一次执行一次，之后name(依赖)更新也会执行

  return (
    <div>
        app-{name}
        <button onClick={()=>setName("xiaoming")}>点击</button>
    </div>
  )
}
