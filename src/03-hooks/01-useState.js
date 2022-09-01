/*
 * @Author: WeiShan
 * @Date: 2022-09-01 21:57:16
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 22:04:07
 * @FilePath: \react-learn\src\03-hooks\01-useState.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useState } from 'react'

export default function App() {

const [name,setName] = useState("WeiShan")
const [age,setAge] = useState(18)

console.log(name)

  return (
    <div>
        
        <button onClick={()=>{
            setName("XiaoMing")
            setAge(19)
        }}>点击</button>
        {name}-{age}
        
    </div>
  )
}
