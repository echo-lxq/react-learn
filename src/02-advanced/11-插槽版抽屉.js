/*
 * @Author: WeiShan
 * @Date: 2022-08-25 22:41:07
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-25 22:43:52
 * @FilePath: \react-learn\src\02-advanced\11-插槽版抽屉.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
            <div style={{background:"red"}}>
                <span>navbar</span>
                {this.props.children}
            </div>
        )
    }
}

class Sidebar extends Component{
    render(){
        return(
            <div style={{background:"yellow",width: "200px"}}>
                <ul>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow:true
    }
  render() {
    return (
      <div>
        <Navbar>
        <button onClick={()=>{
            this.setState(
                {
                    isShow:!this.state.isShow
                }
            )
        }}>click</button>
        </Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}        
      </div>
    )
  }
}