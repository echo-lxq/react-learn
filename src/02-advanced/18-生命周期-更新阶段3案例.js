/*
 * @Author: WeiShan
 * @Date: 2022-08-30 22:38:09
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-30 23:05:09
 * @FilePath: \react-learn\src\02-advanced\18-生命周期-更新阶段3案例.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

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

class FilmList extends Component{

    //第一次 只会在初始化阶段执行的函数
    UNSAFE_componentWillMount(){
        if(this.props.type === 1){
            console.log("请求正在热映的数据")
        }else{
            console.log("请求即将上映的数据")
        }
    }

    render(){
        return(
            <div>
                FilmList
            </div>
        )
    }
    //后续变化
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.type ===1){
            console.log("请求正在热映的数据")
        }else{
            console.log("请求即将上映的数据")
        }
    }
}
