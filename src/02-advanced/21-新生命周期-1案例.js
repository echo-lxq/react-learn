/*
 * @Author: WeiShan
 * @Date: 2022-08-31 10:53:58
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-31 11:19:58
 * @FilePath: \react-learn\src\02-advanced\21-新生命周期-1案例.js
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

    state = {
        list:[1,2,3],
        type:1
    }

    // //第一次 只会在初始化阶段执行的函数
    // UNSAFE_componentWillMount(){

    // }

    render(){
        return(
            <div>
                FilmList-{this.state.list}
            </div>
        )
    }

    componentDidMount(){
        if(this.props.type === 1){
            console.log("请求正在热映的数据")
        }else{
            console.log("请求即将上映的数据")
        }
    }

    //这里只更新状态
    static getDerivedStateFromProps(nextProps){
        console.log("执行了 getDerivedStateFromProps")
        //进行异步请求之后
        return {
            type:nextProps.type
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.type === prevState.type){
            return
        }
        console.log(prevState.type,this.state.type)
        if(this.state.type === 1){
            console.log("请求正在热映的数据")
        }else{
            console.log("请求即将上映的数据")
        }
    }

}
