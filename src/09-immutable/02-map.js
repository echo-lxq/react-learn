/*
 * @Author: WeiShan
 * @Date: 2022-09-18 10:31:16
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-18 11:00:18
 * @FilePath: \react-learn\src\09-immutable\02-map.js\
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import {Map} from 'immutable'

var obj = {
    name:"WeiShan",
    age:18
}
var oldImmuObj = Map(obj)
var newImmuObj = oldImmuObj.set("name","copyWeiShan")

// console.log(oldImmuObj,newImmuObj)

//1.get获取immutable

console.log(oldImmuObj.get("name"),newImmuObj.get("name"))

//2.immutable===>普通对象

console.log(oldImmuObj.toJS(),newImmuObj.toJS())

export default class App extends Component {

    state = {
        info:Map(
            {
                name:"WeiShan",
                age:18
            }
        )  
    }

  render() {
    return (
      <div>
        {this.state.info.get("name")}--
        {this.state.info.get("age")}
        <button onClick={()=>{
            this.setState({
                info:this.state.info.set("name","copyWeiShan").set("age",19)
            })
        }}>点击</button>
      </div>
    )
  }
}
