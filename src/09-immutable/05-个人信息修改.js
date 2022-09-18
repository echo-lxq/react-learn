/*
 * @Author: WeiShan
 * @Date: 2022-09-18 21:50:59
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-18 22:07:16
 * @FilePath: \react-learn\src\09-immutable\05-个人信息修改.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import {Map,List} from 'immutable'

export default class App extends Component {
    state = {
        info:Map(
            {
                name:"WeiShan",
                location:Map({
                    province:"辽宁",
                    city:"大连"
                }),
                favor:List(["读书","看报","写代码"])
            }
        )
    }
  render() {
    return (
      <div>
        <h1>个人信息展示</h1>
        <button onClick={()=>{
            this.setState({
                info:this.state.info.set("name","copyWeiShan")
                .set("location",this.state.info.get("location").set("city","沈阳"))
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
                info:this.state.info.set("favor",this.state.info.get('favor').splice(index,1))
            })
        }}>del</button></li>)}
      </div>
    )
  }
}
