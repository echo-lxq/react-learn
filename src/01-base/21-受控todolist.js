/*
 * @Author: WeiShan
 * @Date: 2022-08-21 17:37:57
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-21 18:43:09
 * @FilePath: \react-learn\src\01-base\21-受控todolist.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
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
                {id:1,text:"111",isChecked:false},
                {id:2,text:"222",isChecked:false},
                {id:3,text:"333",isChecked:true}
            ],
            inputText:''
        }
    }

    render() {
        
        return (
            <div>
                <input type="text" value={this.state.inputText} onChange = {this.inputChange} ref={this.myRef} />
                <button onClick={()=>{
                    this.addClick();
                }}>添加</button>

                <ul>
                    {this.state.list.map((item,index)=>
                    <li key={item.id}>
                        <input type="checkbox" checked = {item.isChecked} onChange = {()=>{this.handleSelect(index)}}/>
                        <span style={{textDecoration:item.isChecked?"line-through":"blue"}}>{item.text}</span>
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

    //输入框内容改变
    inputChange = (evt) => {
        this.setState(
            {
                inputText:evt.target.value
            }
        )
    }

    //点击添加按钮
    addClick = () => {

        var newList = [...this.state.list]

        newList.push({id:parseInt(Math.random()*1000),text:this.state.inputText,isChecked:false})

        this.setState(
            {
                list:newList,
                inputText:''
            }
        )
    }

    //点击删除按钮
    handleDelClick = (index) => {
        var delList = this.state.list.slice()

        delList.splice(index,1)

        this.setState(
            {
                list: delList
            }
        )

    }

    //点击选择按钮
    handleSelect = (index) => {
        let newList  = this.state.list.slice()

        newList[index].isChecked = !this.state.list[index].isChecked

        this.setState(
            {
                list:newList
            }
        )

    }

}
