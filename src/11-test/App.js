/*
 * @Author: WeiShan
 * @Date: 2022-12-30 14:20:04
 * @LastEditors: WeiShan
 * @LastEditTime: 2023-01-31 09:19:31
 * @FilePath: \react-learn\src\11-test\App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {
  
  var [list,setList] = useState([])
  var [total,setTotal] = useState(0)
  var [finish,setFinish] = useState(0)
  var [addKey,setAddKey] = useState('')

  useEffect(()=>{
    let finish = 0
    let initList = [
      {id:"001",text:"通信方式1",done:true},
      {id:"002",text:"通信方式2",done:true},
      {id:"003",text:"通信方式3",done:false},
      {id:"004",text:"通信方式4",done:false},
      {id:"005",text:"通信方式5",done:false},
      {id:"006",text:"通信方式6",done:true}
    ]
    for(let i=0;i<initList.length;i++){
      if(initList[i].done){
        finish++
      }
    }
    // initList.forEach(function(value){
    //   if(value.done){
    //     finish++
    //   }
    // })
    setFinish(finish)
    setList(initList)
    setTotal(initList.length)
  },[])

  let clearFinishTask = ()=>{
    // TODO 更好的方式处理数组
    var newList = [...list]
    var lists = [...list]
    var j = 0
    newList.forEach(function(value,index,array){
      if(value.done){
        lists.splice(index-j,1)
        j++
      }
    })
    setList(lists)
    setTotal(lists.length)
    setFinish(0)
  }
  let changeSelect = (index)=>{
    let newList = [...list]
    newList[index].done = !newList[index].done
    if(newList[index].done){
      setFinish(++finish)
    }
    setList(newList)
  }
  let addInput = (event)=>{
    event.preventDefault();
    let newList = [...list]
    newList.push({id:nanoid(),text:addKey,done:false})
    setList(newList)
    // initList()
    console.log("新增输入框！",addKey)
    setAddKey("")
  }

  return (
    <div>
      <form onSubmit={(e) => {addInput(e)}}>
      <input type="text" name="addKey" onChange={(e)=>{setAddKey(e.target.value)}} value={addKey} placeholder='请输入名称，按回车键确认'/>
      </form>
        {
          list.map((item,index)=><div key={item.id}><input type="checkbox" name = "socket" value={item.id} checked={item.done} onChange={()=>{changeSelect(index)}} />{item.text}</div>)
        }
      <div>
        <div style={{float:"left"}}><input type="checkbox" name = "socket" value="selectAll" />已完成{finish}/全部{total}</div>
        <div style={{float:"left"}}><button onClick={()=>{clearFinishTask()}}>清除已完成任务</button></div>
      </div>
    </div>
  )
}
