/*
 * @Author: WeiShan
 * @Date: 2022-09-18 10:31:16
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-18 11:34:27
 * @FilePath: \react-learn\src\09-immutable\03-map2.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import {Map} from 'immutable'

export default class App extends Component {

    state = {
        info:Map(
          {
            name:"WeiShan",
            select:"aa",
            filter:Map({
              text:"",
              up:true,
              down:false
            })
          }
        )
    }

    componentDidMount(){
      console.log(this.state.info.get("filter"))
    }

  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            info:this.state.info.set("name","copyWeiShan")
          })
        }}>点击</button>
        {this.state.info.get("name")}
        <Child filter={this.state.info.get("filter")}></Child>
      </div>
    )
  }
}
class Child extends Component{
  shouldComponentUpdate(nextProps, nextState) { 
    
    if(this.props.filter === nextProps.filter){
      return false
    }

    return true

   }
  
  render(){
    return <div>
      child
    </div>
  }
  componentDidUpdate(){
    console.log("child","didUpdate")
  }
}
