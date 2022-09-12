/*
 * @Author: WeiShan
 * @Date: 2022-09-11 10:46:36
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-11 10:47:38
 * @FilePath: \react-learn\src\05-redux\redux\reducers\cityReducer.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
const CityReducer = (prevState={
    // show:true,
    cityName:"北京"
},action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "change-city":
            newState.cityName = action.payload
            return newState
        default:
            return prevState
    }
    
}

export default CityReducer