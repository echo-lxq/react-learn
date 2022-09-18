/*
 * @Author: WeiShan
 * @Date: 2022-09-18 11:36:42
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-18 11:42:55
 * @FilePath: \react-learn\src\09-immutable\04-list.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import {List} from 'immutable'

var arr = List([1,2,3])

var arr2 = arr.push(4) //push不会影响老的对象结构

var arr3 = arr2.concat([5,6,7]) //不会影响之前的

console.log(arr.toJS(),arr2,arr3)

export default class App extends Component {
    state = {
        favor:List(
            ["aaa","bbb","ccc"]
        )
    }
  render() {
    return (
      <div>
        {this.state.favor.map(item=><li key={item}>{item}</li>)}
      </div>
    )
  }
}
