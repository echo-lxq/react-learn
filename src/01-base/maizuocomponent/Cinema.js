/*
 * @Author: WeiShan
 * @Date: 2022-08-10 15:01:13
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-10 23:29:43
 * @FilePath: \react-learn\src\01-base\maizuocomponent\Cinema.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import axios from 'axios';

export default class Cinema extends Component {

    // 请求数据部分，暂时放到构造函数里面  后面的生命周期函数更适合发送ajax
    constructor(){
        super()

        this.state = {
          cinemaList: []
        }

        //axios 第三方的库，专门用于请求数据 axios封装给予es6的promise
        // axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})

        //简写方式
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159").then(res=>{
        //   console.log(res)
        // }).catch(err=>{
        //   console.log(err)
        // })
      axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
        method:"get",
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res=>{
        this.setState(
          {
            cinemaList:res.data.data.cinemas
          }
        )
      })

    }


  render() {
    return (
      <div>
        {this.state.cinemaList.map(item=>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        )}
      </div>
    )
    
  }
}
