/*
 * @Author: WeiShan
 * @Date: 2022-09-03 22:34:14
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-03 22:44:12
 * @FilePath: \react-learn\src\03-hooks\08-useCallback2.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

export default function App() {

    var [name,setName] = useState('weishan')

    var [text,setText] = useState('')

    var [list,setList] = useState(['12','13'])

    var addList = useCallback(
        ()=>{
            setList([...list,text])
        },[text,list]
    )

    var handleChange = useCallback(
        (evt)=>{
            setText(evt.target.value)
        },[]
    )

    var clearInput = useCallback(
        ()=>{
            setText("")
        },[]
    )

    var delList = useCallback(
        (index)=>{
            var newList = [...list]
            newList.splice(index,1)
            setList(newList)
        },[list]
    )

    var changeName = useCallback(
        (newName)=>{
           console.log(newName)
        },[]
    )

  return (
    <div>

        <div>
            app-{name}
            <button onClick={()=>{
                changeName("xiaoming")
            }}>点击</button>
        </div>
        
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