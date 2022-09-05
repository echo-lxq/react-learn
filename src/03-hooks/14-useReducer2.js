/*
 * @Author: WeiShan
 * @Date: 2022-09-05 20:38:56
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-05 21:07:15
 * @FilePath: \react-learn\src\03-hooks\14-useReducer2.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'

const initailState = {
    a:"1111",
    b:"1111"
}
const reducer=(prevState,action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "change-a":
            newState.a = action.text;
            return newState
        case "change-b":
            newState.b = action.text;
            return newState
        default:
            return prevState
    }
}

const GlobalContext = React.createContext()

export default function App() {

    const [state,dispath] = useReducer(reducer,initailState)

    return (
        <GlobalContext.Provider value={
            {
                state,
                dispath
            }
        }>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1(){
    const {dispath} = useContext(GlobalContext)
    return(
        <div style={{background:"red"}}>
            <button onClick={()=>{
                dispath({
                    type:"change-a",
                    text:"2222"
                })
            }}>改变a</button>
            <button onClick={()=>{
                dispath({
                    type:"change-b",
                    text:"3333"
                })
            }}>改变b</button>
        </div>
    )
}

function Child2(){
    const {state} = useContext(GlobalContext)
    return(
        <div style={{background:"yellow"}}>
            Child2-{state.a}
        </div>
    )
}

function Child3(){
    const {state} = useContext(GlobalContext)
    return(
        <div style={{background:"gray"}}>
            Child3-{state.b}
        </div>
    )
}