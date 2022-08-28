/*
 * @Author: WeiShan
 * @Date: 2022-08-28 22:44:49
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-28 22:58:13
 * @FilePath: \react-learn\src\02-advanced\13-生命周期-初始化案例.js
 * @Description:
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        list:['111','222','333','444','555','121','123','124']
    }

    componentWillMount(){
        //拿不到dom
        console.log(document.querySelectorAll('li'))
    }
    componentDidMount(){
        new BetterScroll('.wapper')  //better-scroll 中 new 之后 中间填写跟jquery一样的dom元素的class或者id
        document.getElementsByTagName('li')
    }

  render() {
    return (
      <div>
        <div className='wapper' style={{height:"100px",width:"200px",background:"yellow",overflow:"hidden"}}>
            <ul>
                {this.state.list.map(item=>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </div>
      </div>
    )
  }
}
