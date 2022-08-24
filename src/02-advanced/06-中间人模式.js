/*
 * @Author: WeiShan
 * @Date: 2022-08-24 22:24:38
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-24 22:24:41
 * @FilePath: \react-learn\src\02-advanced\06-中间人模式.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    constructor(){
        super()
        axios.get().then(
            res=>{
                console.log(res)
            }
        )

    }

  render() {
    return (
      <div>
        


      </div>
    )
  }
}
