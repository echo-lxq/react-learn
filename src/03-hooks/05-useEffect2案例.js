/*
 * @Author: WeiShan
 * @Date: 2022-09-03 11:35:10
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-03 11:43:46
 * @FilePath: \react-learn\src\03-hooks\05-useEffect2案例.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default class App extends Component {
    state = {
        type:1
    }
  render() {
    return (
      <div>
        <ul>
            <li onClick={()=>{
                this.setState(
                    {
                        type:1
                    }
                )
            }}>正在热映</li>
            <li onClick={()=>{
                this.setState(
                    {
                        type:2
                    }
                )
            }}>即将上映</li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

function FilmList(props) {
    const [list,setList] = useState([])
    useEffect(()=>{
        if(props.type === 1){
            console.log("请求正在热映的数据")
            setList(["正在热映数据"])
        }else{
            console.log("请求即将上映的数据")
            setList(["即将上映数据"])
        }
    },[props.type])
    return (
      <div>05-useEffect2案例-{list}</div>
    )
  }