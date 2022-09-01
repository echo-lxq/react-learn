import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('/test.json').then(res=>{
            console.log(res.data.data.films)
            setList(res.data.data.films)
        })
    },[]) //传入空数组，前一个参数函数在整个app渲染的时候只会执行一次

  return (
    <div>
        {list.map(item=><li key={item.filmId}>{item.name}</li>)}
    </div>
  )
}
