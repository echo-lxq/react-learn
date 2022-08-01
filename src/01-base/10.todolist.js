/*
 * @Author: WeiShan
 * @Date: 2022-07-29 11:54:02
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-01 08:33:30
 * @FilePath: \react-learn\src\01-base\10.todolist.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

export default class App extends Component {
    myRef = React.createRef()

    constructor(){
        super()
        this.state = {
            state: true,
            list:[
                {id:1,text:"111"},
                {id:2,text:"222"},
                {id:3,text:"333"}
            ],
        }
    }

    render() {
        
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={()=>{
                    this.myRefClick();
                }}>添加</button>

                <ul>
                    {this.state.list.map(item=><li key={item.id}>{item.text}</li>)}
                </ul>

                <button onClick={()=>{this.setState({state:!this.state.state})}}>
                    {this.state.state?"收藏":"取消收藏"}
                </button>

            </div>
        )
    }

    myRefClick = ()=>{
        console.log("点击",this.myRef.current.value)

        //不推荐 更新数组 不要直接修改状态 - 可能造成不可预期的状态
        // this.state.list.push({
        //     id:this.myRef.current.value,
        //     text:this.myRef.current.value
        // })

        //js处理复杂数据类型赋值方式为引用赋值(多一把钥匙) 
        //不推荐  ！！注意 此下为引用赋值 也属于上面那种直接修改的
        // let newList = this.state.list
        // newList.push(this.myRef.current.value)

        //深复制(深拷贝) slice()方法、[...arr]方法

        let newList_ = [...this.state.list]
        newList_.push({
            id:Math.random()*100, //生成不同id的函数
            text:this.myRef.current.value
        })

        //重新渲染
        this.setState(
            {
                list:newList_
            }
        )

        console.log(newList_)
        console.log(this.state.list)

    }

}
