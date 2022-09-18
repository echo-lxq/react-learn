/*
 * @Author: WeiShan
 * @Date: 2022-09-18 22:09:50
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-18 22:16:47
 * @FilePath: \react-learn\src\09-immutable\06-个人信息修改第二版.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import {fromJS} from 'immutable'

export default class App extends Component {
    state = {
        info:fromJS(
            {
                name:"WeiShan",
                location:{
                    province:"辽宁",
                    city:"大连"
                },
                favor:["读书","看报","写代码"]
            }
        )
    }
    componentDidMount(){
        console.log(this.state.info)
    }
  render() {
    return (
      <div>
        <h1>个人信息展示</h1>
        <button onClick={()=>{
            this.setState({
                info:this.state.info.set("name","copyWeiShan")
                .setIn(["location","city"],"沈阳")
            })
        }}>修改</button>
        <br />
        <h2>{this.state.info.get("name")}</h2>
        <br />
        {
            this.state.info.get("location").get("province")
        }
        {
            this.state.info.get("location").get("city")
        }
        <br />
        {this.state.info.get("favor").map((item,index)=><li key={item}>{item}<button onClick={()=>{
            this.setState({
                info:this.state.info.updateIn(
                    ["favor"],(list)=>list.splice(index,1)
                )
            })
        }}>del</button></li>)}
      </div>
    )
  }
}