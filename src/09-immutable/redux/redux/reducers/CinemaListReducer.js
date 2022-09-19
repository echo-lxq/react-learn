/*
 * @Author: WeiShan
 * @Date: 2022-09-11 11:13:44
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-11 11:20:44
 * @FilePath: \react-learn\src\05-redux\redux\reducers\CinemaListReducer.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const CinemaListReducer = (prevState = {
    cinemaList:[]
},action={})=>{
    const newState = {...prevState}
    switch(action.type){
        case "change-list":
            newState.cinemaList = action.payload
            return newState
        default :
            return prevState
    }
}

export default CinemaListReducer