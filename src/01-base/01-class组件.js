/*
 * @Author: WeiShan
 * @Date: 2022-07-20 16:29:51
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-07-20 16:52:57
 * @FilePath: \react-learn\src\01-base\01-class组件.js
 * @Description: 
 * 
 * Copyright (c) 2022 by XLS, All Rights Reserved. 
 */
// class Test {
//     constructor(){
//         this.a = 23;
//     }
//     testA(){
//         console.log(this.a)
//     }
// }

// class ChildTest extends Test{
//     testB(){
//         console.log(this.a)
//     }
// }

// var obj = new ChildTest();
// obj.testB();
import React from "react";

//只有继承React.Component才为定义一个组件，否则为定义一个类
class WeiShanApp extends React.Component{

    render(){
        return <div>
            Hello React Component
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div> //为jsx语法
    }

}

export default WeiShanApp;