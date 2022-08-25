/*
 * @Author: WeiShan
 * @Date: 2022-08-25 14:45:20
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-25 15:09:52
 * @FilePath: \react-learn\src\02-advanced\07-发布订阅模式.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>07-发布订阅模式</div>
    )
  }
}

//js实现发布订阅模式

var bus = {
    list:[],
    //订阅
    subscribe(callback){

        this.list.push(callback)

    },

    //发布
    publish(content){
        //遍历所有list，将回调函数执行
        this.list.forEach(callback=>{
            callback&&callback(content);
        })
    }
}

//订阅
bus.subscribe((content)=>{
    console.log("订阅1",content)
});
bus.subscribe((content)=>{
    console.log("订阅2",content)
});

//发布
setTimeout(()=>{bus.publish("传递的实参1")},0)
setTimeout(()=>{bus.publish("传递的实参2")},1000)
setTimeout(()=>{bus.publish("传递的实参3")},2000)
