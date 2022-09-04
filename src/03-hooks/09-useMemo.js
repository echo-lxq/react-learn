/*
 * @Author: WeiShan
 * @Date: 2022-09-04 10:07:45
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-04 10:31:41
 * @FilePath: \react-learn\src\03-hooks\09-useMemo.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { useState,useEffect} from 'react'

import axios from 'axios';
import { useMemo } from 'react';

export default function Cinema(){
    const [inputText,setInputText] = useState("")
    const [cinemaList,setCinemaList] = useState([])

    useEffect(()=>{
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
              'X-Host': 'mall.film-ticket.cinema.list'
            }
          }).then(res=>{
            console.log(res.data.data.cinemas)

            setCinemaList(res.data.data.cinemas)
    
            //打印log
            console.log(this.state.cinemaList)
            // console.log(this.state.bakCinemaList)
    
          }).catch(err=>{
            console.log(err);
          })
    },[])

    const getCinemaList = useMemo(()=>cinemaList.filter(item=>item.name.toUpperCase().includes(inputText.toUpperCase())||
        item.address.toUpperCase().includes(inputText.toUpperCase())
    ),[inputText,cinemaList])

    //受控组件写法
  let handleInput = (evt)=>{

    //将输入框内容赋值给(完成过滤)

    let inputText = evt.target.value

    setInputText(inputText)

  }

    return (
        <div>
  
          {/* 注意使用 jsx的语法中的{} 可以自动传入一个event */}
          <input type="text" value={inputText} onChange={handleInput} />
  
          {/* 请求数据 */}
          {getCinemaList.map(item=>
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          )}
        </div>
      )

}