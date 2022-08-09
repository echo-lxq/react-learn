/*
 * @Author: WeiShan
 * @Date: 2022-07-29 11:54:02
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-09 22:56:35
 * @FilePath: \react-learn\src\01-base\10-todolist.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React, { Component } from 'react'

import "./css/01-index.css"

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
                    {this.state.list.map((item,index)=>
                    <li key={item.id}>
                        {item.text}
                        <button onClick={()=>{
                            this.handleDelClick(index);
                        }}>删除</button>
                    </li>)}
                </ul>

                {/* 条件渲染部分 */}
                {/* 方案一 */}
                {this.state.list.length === 0 ?<div>条件渲染一</div>:null}

                {/* 方案二 利用 && 前面为真后面才有机会执行 */}
                {this.state.list.length ===0 && <div>条件渲染二</div>}

                {/* 方案三 已经创建好 动态控制class来控制显示与隐藏 */}
                <div className={this.state.list.length ===0?'':'hidden'}>条件渲染三</div>

                <button onClick={()=>{this.setState({state:!this.state.state})}}>
                    {this.state.state?"收藏":"取消收藏"}
                </button>

            </div>
        )
    }

    myRefClick = ()=>{
        // console.log("点击",this.myRef.current.value)

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

        //清空输入框
        this.myRef.current.value = ''

        // console.log(newList_)
        // console.log(this.state.list)

    }

    handleDelClick = (index) => {
        console.log("点击删除",index)

        //不要直接修改原状态，造成不可预期问题

        let newList = this.state.list.slice(); //slice

        newList.splice(index,1); //splice

        console.log(newList)

        this.setState(
            {
                list:newList
            }
        )

    }

}
