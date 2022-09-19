import { fromJS } from "immutable"

/*
 * @Author: WeiShan
 * @Date: 2022-09-11 10:46:46
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-19 16:01:35
 * @FilePath: \react-learn\src\09-immutable\redux\redux\reducers\TabbarReducer.js
 * @Description: c
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const TabbarReducer = (prevState=fromJS({
    show:true
}),action)=>{
    // let newState = {...prevState}
    switch(action.type){
        case "hide-tabbar":
            return prevState.set("show",false)
        case "show-tabbar":
            return prevState.set("show",true)
        default:
            return prevState
    }
}
export default TabbarReducer