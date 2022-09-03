/*
 * @Author: WeiShan
 * @Date: 2022-09-03 22:28:16
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-03 22:30:36
 * @FilePath: \react-learn\src\03-hooks\07-useCallback1.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  //useState 记忆函数 能记住状态
  
  let handleClick = ()=>{
    setCount(count+1)
  }
  
  return (
    <div>
        <button onClick={()=>{
            handleClick()
        }}>点击</button>
        app-{count}
    </div>
  )
}
