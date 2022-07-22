/*
 * @Author: WeiShan
 * @Date: 2022-07-22 09:00:37
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-22 11:03:28
 * @FilePath: \react-learn\src\01-base\06-事件邦定-2.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    a = 100
    
  render() {
    return (
      <div>
            <input type="text" />
            {/* 方法一 可以调用 this.a 箭头函数里面 this与外面render指针域一样 */}
            <button onClick={()=>{
                console.log("click1",this.a);
            }}>add1</button>

            {/* 方法二 可以调用 this.a 箭头函数里面 this与外面render指针域一样*/}
            <button onClick={this.handleClick2}>add2</button>

            {/* 方法三 不可调用 this.a 被reatc事件系统调用，this指向react事件系统不是app实例*/}
            <button onClick={this.handleClick3.bind(this)}>add3</button> {/* bind 可以绑定来修正 */}

            {/* 方法四  比较推荐 传参的时候方便 */}
            <button onClick={()=>this.handleClick4()}>add4</button>
      </div>
    )
  }
  handleClick2 = (ref)=>{
        console.log("click2",this.a,ref.target);
        //输出为 click2 100 <button>add2</button>
  }

  handleClick3(){
        //这函数谁调用this指向谁
        console.log("click3",this.a);
  }

  handleClick4(){
    console.log("click4",this.a);
  }

}

/**
  * 改变this指向的方法
  * 
  * call 改变了this指向，并自动执行函数
  * apply 改变了this指向，并自动执行函数
  * bind 改变了this指向，手动加 () 执行函数
  */
var obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name)
    }
  }

var obj2 = {
   name:"obj2",
   getName(){
       console.log(this.name)
   }
}

obj1.getName.call(obj2) // 修改this指向 调用 call
obj1.getName.apply(obj2) // 修改this指向 调用 apply
obj1.getName.bind(obj2) // 修改this指向 不调用 bind
obj1.getName.bind(obj2)() // 函数调用使用 () 执行函数
obj2.getName()