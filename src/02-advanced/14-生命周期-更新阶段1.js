/*
 * @Author: WeiShan
 * @Date: 2022-08-29 22:15:51
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-29 23:02:09
 * @FilePath: \react-learn\src\02-advanced\14-生命周期-更新阶段.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import axios from 'axios'
import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
      myName:"WeiShan",
      list:[]
    }
    componentDidMount(){
        axios.get("/test.json").then(res=>{
            this.setState({
                list:res.data.data.films
            })
            console.log("调用",document.getElementById('warpper'))  
            //这个不好用  本地读取数据 不是第一次初始化的时候用下面didUpdate
            // new BetterScroll('#warpper')
        })
        
        
    }
    render() {
        return (
        <div>
            <button onClick={()=>{
                this.setState(
                    {
                        myName:"TeiChui"
                    }
                )
            }}>点击</button>
            
            <span id="my_name">{this.state.myName}</span>

            <div id="warpper" style={{
                    height:"80px",
                    overflow:"hidden",
                    background:"yellow"
                }}>
                <ul>
                    {this.state.list.map(item=><li key={item.filmId}>{item.name}</li>)}
                </ul>
            </div>

        </div>
        )
    }

    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate",document.getElementById('my_name').innerHTML)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("commponentDidUpdate",document.getElementById('my_name').innerHTML)
        console.log(prevState.list)
        //更新后，想要获取dom节点 ， 更新

        if(prevState.list.length === 0){
            new BetterScroll('#warpper')
            console.log("执行操作")
        }
    }

}
