/*
 * @Author: WeiShan
 * @Date: 2022-09-01 10:04:24
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 10:11:06
 * @FilePath: \react-learn\src\02-advanced\24-性能优化.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state = {
        myName:"WeiShan"
    }
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{
            this.setState(
                {
                    myName:"xiaoming"
                }
            )
        }}>点击</button>
        <span>{this.state.myName}</span>
      </div>
    )
  }

  
  //输入scu回车 可以生成以下函数
//   shouldComponentUpdate(nextProps,nextState){
//     // return false;  //阻止更新
//     //return true; //应该更新
//     if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
//         return true;
//     }
        
//     return false;
    
//   }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
}
