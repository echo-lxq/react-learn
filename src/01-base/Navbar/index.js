/*
 * @Author: WeiShan
 * @Date: 2022-08-18 08:18:18
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-20 10:21:12
 * @FilePath: \react-learn\src\01-base\Navbar\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

//react中属性验证模块 - prop-types
import propTypes from 'prop-types'

// console.log(propTypes)

export default class Navbar extends Component {

  state = {
    //只能内部自己用的，外面无法改变
  }

  //类属性 不用new 就能访问到
  static propTypes = {
    title:propTypes.string,
    leftShow:propTypes.bool.isRequired
  }

  static defaultProps = {
    leftShow:true
  }

  //属性是父组件传来的,this.props

  render() {
    // console.log(this.props.title)

    let {title,leftShow} = this.props

    // console.log(leftShow)

    return (
      <div>
        {leftShow && <button>返回</button>}
        Navbar-{title}
        <button>home</button>
      </div>
    )
  }
}

//默认属性

// Navbar.defaultProps = {
//   leftShow:true
// }


class Test{
  //此处a为对象属性
  a = 1

  //类属性
  static a =101

}

//类属性，不用new就能访问
// Test.a = 100

var obj = new Test();

console.log(obj.a) // 1

console.log(Test.a) // 100