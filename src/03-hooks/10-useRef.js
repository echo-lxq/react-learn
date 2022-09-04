/*
 * @Author: WeiShan
 * @Date: 2022-09-04 10:36:53
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-04 21:34:28
 * @FilePath: \react-learn\src\03-hooks\10-useRef.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function App() {

    var [list,setList] = useState(['12','13'])

    const myText = useRef() //React.createRef()

    var addList = ()=>{
        setList([...list,myText.current.value])
        // setList([...list,text])
    }

    var clearInput = ()=>{
        // setText("")
        myText.current.value = ''
    }

    var delList = (index)=>{
        var newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }

  return (
    <div>
        
        <input type="text" ref={myText}/>
        
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
