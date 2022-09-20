import React, { Component } from 'react'

import {observable,autorun} from 'mobx'

//对于普通类型数据监听 .box()方法
var observableNumber = observable.box(10)
var observableName = observable.box("WeiShan")

//第一次执行一次，之后每次改变执行（有条件，只有相关的会自动执行）
autorun(()=>{
    console.log(observableNumber.get())
})

autorun(()=>{
    console.log(observableName.get())
})

setTimeout(()=>{
    observableNumber.set(20)
},1000)

setTimeout(()=>{
    observableName.set("WeiShanCopy")
},2000)

//加map
var myObj = observable.map({
    name:"WeiShan",
    age:100
})

autorun(()=>{
    console.log("对象name属性改变",myObj.get("name"))
})

setTimeout(()=>{
    myObj.set("name","copyWeiShan")
},3000)

//不加map
var myObj1 = observable({
    name:"WeiShan",
    age:100
})

autorun(()=>{
    console.log("对象name属性改变",myObj1.name)
})

setTimeout(()=>{
    myObj1.name="copyWeiShan"
},3000)

export default class App extends Component {
  render() {
    return (
      <div>app</div>
    )
  }
}
