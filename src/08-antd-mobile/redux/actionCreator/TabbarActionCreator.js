/*
 * @Author: WeiShan
 * @Date: 2022-09-10 11:45:14
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-10 11:45:29
 * @FilePath: \react-learn\src\05-redux\redux\actionCreator\TabbarActionCreator.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
function show(){
    return {
        type:"show-tabbar"
    }
}

function hide(){
    return{
        type:'hide-tabbar'
    }
}

export {show,hide}