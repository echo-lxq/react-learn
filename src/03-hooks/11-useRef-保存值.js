/*
 * @Author: WeiShan
 * @Date: 2022-09-04 21:37:31
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-04 21:40:59
 * @FilePath: \react-learn\src\03-hooks\11-useRef-保存值.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  //useState 记忆函数 能记住状态
  
  var myCount = useRef(0)

  let handleClick = ()=>{
    setCount(count+1)
    myCount.current++
  }
  
  return (
    <div>
        <button onClick={()=>{
            handleClick()
        }}>点击</button>
        app-{count}
        app1-{myCount.current}
    </div>
  )
}