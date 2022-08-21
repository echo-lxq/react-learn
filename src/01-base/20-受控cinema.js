/*
 * @Author: WeiShan
 * @Date: 2022-08-21 09:18:20
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-21 10:41:52
 * @FilePath: \react-learn\src\01-base\20-受控cinema.js
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
          cinemaList: [],
          inputText : ''
        //   bakCinemaList:[]
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
        console.log(res.data.data.cinemas)
        this.setState(
          {
            cinemaList:res.data.data.cinemas,
            // bakCinemaList:res.data.data.cinemas
          }
        )

        //打印log
        console.log(this.state.cinemaList)
        // console.log(this.state.bakCinemaList)

      }).catch(err=>{
        console.log(err);
      })

    }

    inputRef = React.createRef()


  render() {
    return (
      <div>

        {/* 注意使用 jsx的语法中的{} 可以自动传入一个event */}
        <input type="text" ref={this.inputRef} onInput={this.handleInput} value={this.state.inputText} onChange={this.handleInput} />

        {/* 请求数据 */}
        {this.getCinemaList().map(item=>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        )}
      </div>
    )
    
  }

  //受控组件写法
  handleInput = (evt)=>{

    //将输入框内容赋值给(完成过滤)

    let inputText = evt.target.value

    this.setState(
        {
            // cinemaList:this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(inputText.toUpperCase())||item.address.toUpperCase().includes(inputText.toUpperCase())),
            inputText:inputText
        }
    )

  }

  //页面显示过滤内容
  getCinemaList=()=>{    
    var newList = this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.state.inputText.toUpperCase())||
    item.address.toUpperCase().includes(this.state.inputText.toUpperCase())
    )
    return newList
  }

}