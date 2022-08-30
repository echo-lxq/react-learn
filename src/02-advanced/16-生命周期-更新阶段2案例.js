/*
 * @Author: WeiShan
 * @Date: 2022-08-30 10:33:57
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-30 11:27:40
 * @FilePath: \react-learn\src\02-advanced\16-生命周期-更新阶段2案例.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Child extends Component{
    render(){
        console.log("render")
        return(
            <div style={{
                width:"100px",
                height:"100px",
                float:'left',
                marginLeft:"10px",
                border:this.props.current === this.props.index ? "1px solid red":"1px solid black"
            }}>
                
            </div>
        )
    }
    shouldComponentUpdate(nextProps){
        if(this.props.current === this.props.index || nextProps.current === nextProps.index){
            return true
        }
        return false
    }
}

export default class App extends Component {
    state = {
        list:["00","01","02","03","04","05","06","07","08","09"],
        current:0
    }
  render() {
    return (
      <div>
        <div style={{overflow:'hidden'}}>
            <input type="number" onChange={(evt)=>{
                this.setState(
                    {
                        current:Number(evt.target.value)
                    }
                )
            }} value={this.state.current} />
        </div>
        {this.state.list.map((item,index)=><Child current={this.state.current} key={item} index={index}></Child>)}
      </div>
    )
  }
}
