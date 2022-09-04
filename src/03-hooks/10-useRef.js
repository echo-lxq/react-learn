/*
 * @Author: WeiShan
 * @Date: 2022-09-04 10:36:53
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-04 10:36:56
 * @FilePath: \react-learn\src\03-hooks\10-useRef.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useState } from 'react'

export default function App() {

    var [text,setText] = useState('')

    var [list,setList] = useState(['12','13'])

    var addList = ()=>{
        setList([...list,text])
    }

    var handleChange = (evt)=>{
        setText(evt.target.value)
    }

    var clearInput = ()=>{
        setText("")
    }

    var delList = (index)=>{
        var newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }

  return (
    <div>
        
        <input type="text" onChange={handleChange} value = {text}/>
        
        <button onClick={()=>{
            addList()
        }}>添加</button>

        <button onClick={()=>{clearInput()}}>清空</button>

        <ul>
            {list.map((item,index)=><li key={item}>{item}<button onClick={()=>delList(index)}>删除</button></li>)}
        </ul>

        {!list.length && <div>空空如也</div>}
    </div>
  )

}
