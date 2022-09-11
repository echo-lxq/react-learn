/*
 * @Author: WeiShan
 * @Date: 2022-09-11 10:46:46
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-11 10:48:31
 * @FilePath: \react-learn\src\05-redux\redux\reducers\TabbarReducer.js
 * @Description: c
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const TabbarReducer = (prevState={
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
export default TabbarReducer