/*
 * @Author: WeiShan
 * @Date: 2022-07-25 08:13:51
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-01 08:32:26
 * @FilePath: \react-learn\src\01-base\00-间接复习.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
import React,{Component} from "react";

import "./css/01-index.css";

/**
 * 练习三种组件 - 出错 注意首字母大写 
 *             - 组件写行内样式时候，样式单独定义为object，使用{}给style引入样式变量
 */

class Navigator extends Component{

    render(){
        var styleNav = {backgroundColor:"red"}

        return <div style={styleNav}>navigator</div>
    }

}

function Content(){
    return <div className="active">content</div>
}


var Bottom = () =>{
    return (<div>bottom</div>)
}

var Other = () => <div id="myapp">other</div>

class App extends Component{
    
    constructor(){

        super()  //**注意在构造函数内集成super */

        this.state = {
            isClick:true,
            list:["111","222","333"],
            sampleList:[
                {id:1,text:"小红"},
                {id:2,text:"小明"},
                {id:3,text:"小白"},
                {id:4,text:"小零"},
            ]
        }
    }

    cha = 'this pointer'

    myRef = React.createRef() 

    newRef = React.createRef()

    // state = {
    //     isClick:true        
    // }

   

    render(){

        var click1 = {
            userSelect:"none"
        }

        return (<div>
            
            <Navigator></Navigator>
            <Content></Content>
            <Bottom></Bottom>
            <Other></Other>

            {/* 事件绑定 */}
            <label style={click1} htmlFor="click1">用户名</label>
            
            <button id="click1" onClick={()=>{console.log("click1",this.cha)}}>按钮1</button>

            <button onClick={this.click2.bind(this)}>按钮2</button>

            <button onClick={this.click3}>按钮3</button>

            <button onClick={()=>{this.click4()}}>按钮4</button>

            {/* ref 应用 与 state状态 */}
            <input type="text" ref={this.myRef} />
            <button onClick={()=>{
                this.tRef()
                
                this.setState({isClick:!this.state.isClick}) 
                
                if(this.state.isClick){
                    console.log("执行收藏的逻辑")
                }else{
                    console.log("执行取消收藏的逻辑")
                }
            }}>{this.state.isClick?"收藏":"取消收藏"}</button>

            <br></br>

            <h2>列表渲染</h2>

            <ul>

                {this.state.list.map(item=><li key={item}>{item}</li>)}

            </ul>

            <br></br>
            {/* 简单的 todo list */}
            <h2>简单的todolist</h2>
            <input type="text" ref={this.newRef} />
            <button onClick={()=>{
                this.sampleList()
            }}>添加</button>
            <ul>
                {this.state.sampleList.map(item=><li key={item.id}>{item.text}</li>)}
            </ul>


        </div>)
    }
    
    click2(){
        console.log("click2",this.cha)
    }

    click3 = ()=>{
        console.log("click3",this.cha)
    }

    click4 = () =>{
        console.log("click4",this.cha)
    }

    tRef = ()=>{
        console.log("tRef",this.myRef.current.value)
        var a;
        console.log(a) //undefined
        // var b = {age:123}
        // delete b.age
        // console.log(b==b)
    }

    sampleList = ()=>{
        let inputText = this.newRef.current.value;
        let setId = parseInt(Math.random() * 10000);
        let addNew = {id:setId,text:inputText};
        let newList = this.state.sampleList.slice();

        //!!!重新渲染部分知识忘记

        this.setState(
            {
                sampleList:newList
            }
        )

        newList.push(addNew)
        console.log(newList)
        console.log(this.state.sampleList)
    }

}

export default App