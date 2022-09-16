/*
 * @Author: WeiShan
 * @Date: 2022-09-06 11:03:08
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-16 10:36:27
 * @FilePath: \react-learn\src\08-antd-mobile\views\films\NowPlaying.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import axios from 'axios'
// import { useEffect } from 'react'
import { useState } from 'react'
// import { withRouter } from 'react-router-dom'
import { List , Image , InfiniteScroll } from 'antd-mobile'
import { useRef } from 'react'

export default function NowPlaying(props) {
  const [list,setList] = useState([])
  const [hasMore,setHasMore] = useState(true)

  const count = useRef(0)

  // useEffect(()=>{
  //   axios({
  //     url:"/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3197837",
  //     headers:{
  //       'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16625201711699604458373121","bc":"110100"}',
  //       'X-Host': 'mall.film-ticket.film.list'
  //     }
  //   }).then(res=>{
  //     setList(res.data.data.films)
  //     console.log(res.data.data.films)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // },[])
  
  const loadMore = ()=>{
      count.current++

      setHasMore(false)

      console.log("到底")

      axios({
        url:`/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=3197837`,
        headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16625201711699604458373121","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        setList([...list,...res.data.data.films])
      setHasMore(res.data.data.films.length>0)
        console.log(res.data.data.films)
      }).catch(err=>{
        console.log(err)
      })

  }
  
  return (
    <div>
      <List>
        {list.map(item=>
          <List.Item
            key={item.filmId} {...item}
            prefix = {
              <Image 
                src={item.poster}
                // style={{borderRadius:20}}
                // fit='cover'
                width={80}
                // height={40}
              />
            }
            description={<div>
              {
                item.grade?<div>观众评分：{item.grade}</div>:
                <div style={{visibility:"hidden"}}>观众评分：{item.grade}</div>
              }
              
              <div>主演：***</div>
              <div>{item.nation}</div>
              <div>{item.runtime}分钟</div>
              
            </div>}
            onClick={()=>{
              // console.log(filmId)
              props.history.push({pathname:'/detail',state:{id:item.filmId}})
            }}
          >
              {item.name}
          </List.Item>
        )}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}

// function FilmItem(props){
//   let {name,filmId,poster} = props
//   return(
    // <li onClick={()=>{
    //   console.log(filmId)
    //   props.history.push({pathname:'/detail',state:{id:filmId}})
    // }}>
//       <img src={poster} alt={name} style={{height:"80px"}} />
//       {name}</li>
//   )
// }

// const WithFilmItem = withRouter(FilmItem)
