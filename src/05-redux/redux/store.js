/*
 * @Author: WeiShan
 * @Date: 2022-09-10 11:10:43
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-10 11:38:11
 * @FilePath: \react-learn\src\05-redux\redux\store.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */

// 1.引入redux
import { createStore } from 'redux'

// 2.createStore(reducer) 
const reducer = (prevState={
    show:true
},action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "hide-tabbar":
            newState.show = false
            return newState
        case "show-tabbar":
            newState.show = true
            return newState
        default:
            return prevState
    }
    
}
const store = createStore(reducer);

// 3.导出
export default store