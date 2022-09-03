/*
 * @Author: WeiShan
 * @Date: 2022-09-03 21:59:08
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-03 22:07:13
 * @FilePath: \react-learn\src\03-hooks\06-userEffect3.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import { useEffect } from 'react'

export default class App extends Component {
    state = {
        isCreate:true
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState(
                {
                    isCreate:!this.state.isCreate
                }
            )
        }}>点击</button>
      {this.state.isCreate?<Child></Child>:''}
      {this.state.isCreate&&<Child></Child>}
      </div>
    )
  }
}

function Child(){

    useEffect(()=>{
        window.onresize = () =>{
            console.log('resize')
        }

        return()=>{
            console.log("组件销毁") //没有依赖的时候
            window.onresize = null;
        }

    },[])

    useEffect(()=>{

       var timer = setInterval(()=>{
            console.log("111")
        },2000)

        return()=>{
            console.log("组件销毁") //没有依赖的时候
            clearInterval(timer)
        }

    },[])

    return(
        <div>Child</div>
    )
}