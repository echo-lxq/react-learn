/*
 * @Author: WeiShan
 * @Date: 2022-08-31 10:38:11
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-31 10:47:22
 * @FilePath: \react-learn\src\02-advanced\20-新生命周期-1.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName:"weishan",
        myAge:16
    }

    //这个是类方法 componentWillMount
    static getDerivedStateFromProps(nextProps,nextState){
        console.log("123",nextState)
        //return对象会跟state合并
        return {
            myName:nextState.myName.substring(0,1).toUpperCase()+nextState.myName.substring(1),
        };
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    //这里setState会被 getDerivedStateFromProps覆盖
                    this.setState(
                        {
                            myName:"xiaoming"
                        }
                    )
                }}>点击</button>
                app -{this.state.myName}
            </div>
        )
    }
}
