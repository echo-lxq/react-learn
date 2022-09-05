/*
 * @Author: WeiShan
 * @Date: 2022-09-05 20:21:43
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-05 20:32:50
 * @FilePath: \react-learn\src\03-hooks\13-useReducer1.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { useReducer } from 'react'
//处理函数
const reducer = (prevState,action)=>{
    console.log("reducer",prevState,action)
    let newState = {...prevState}
    switch(action.type){
        case "minus":
            newState.count--
            return newState
        case "add":
            newState.count++
            return newState
        default:
            return prevState
    }
}
//外部的对象
const intialState = {
    count:0
}

export default function App() {
    const [state,dispath] = useReducer(reducer,intialState)
    return (
        <div>
            app-
            <button onClick={()=>{
                dispath({
                    type:"minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={()=>{
                dispath({
                    type:"add"
                })
            }}>+</button>
        </div>
    )
}
