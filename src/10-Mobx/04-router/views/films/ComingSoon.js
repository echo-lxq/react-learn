/*
 * @Author: WeiShan
 * @Date: 2022-09-06 11:09:00
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-08 22:03:11
 * @FilePath: \react-learn\src\04-router\views\films\ComingSoon.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function ComingSoon() {
  useEffect(()=>{
    
    axios({
      url:"/ajax/comingList?ci=272&limit=10&movieIds=&token=&optimus_uuid=556A94F02F7911EDADFC891B0223160177BBBE0A5A2C422FB4DA4F00BB4ACC67&optimus_risk_level=71&optimus_code=10"
    }).then(res=>{
      // setList(res.data.data.films)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
    
  },[])
  return (
    <div>ComingSoon</div>
  )
}
