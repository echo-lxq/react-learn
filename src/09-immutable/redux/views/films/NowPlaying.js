/*
 * @Author: WeiShan
 * @Date: 2022-09-06 11:03:08
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-08 22:01:52
 * @FilePath: \react-learn\src\04-router\views\films\NowPlaying.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'

export default function NowPlaying(props) {
  const [list,setList] = useState([])
  useEffect(()=>{
    axios({
      url:"/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3197837",
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16625201711699604458373121","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      setList(res.data.data.films)
      console.log(res.data.data.films)
    }).catch(err=>{
      console.log(err)
    })
    // return()=>{
    //   console.log("组件销毁")
    //   // window.location.href=''
    // }
  },[])
  
  // const handleChangePage = (id)=>{
  //   // console.log("click")
    
  //   //原生js方法
  //   // window.location.href = "#/detail/"+id
    
  //   //当前组件包含在Route中，为Route子组件，可以接受props

  //   // 1.动态路由传参
  //   // props.history.push(`/detail/${id}`)

  //   // 2. query传参
  //   // props.history.push({pathname:'/detail',query:{id:id}})

  //   // 3. state传参
  //   props.history.push({pathname:'/detail',state:{id:id}})

  // }
  return (
    <div>
      {list.map(item=><WithFilmItem key={item.filmId} {...item}></WithFilmItem>)}
    </div>
  )
}

function FilmItem(props){
  // const item = props.item
  let {name,filmId,poster} = props
  return(
    <li onClick={()=>{
      // handleChangePage(item.filmId)
      console.log(filmId)
      props.history.push({pathname:'/detail',state:{id:filmId}})
    }}>
      <img src={poster} alt={name} style={{height:"80px"}} />
      {name}</li>
  )
}

const WithFilmItem = withRouter(FilmItem)
