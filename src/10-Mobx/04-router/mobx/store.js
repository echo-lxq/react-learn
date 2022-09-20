/*
 * @Author: WeiShan
 * @Date: 2022-09-20 08:50:11
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-20 08:52:57
 * @FilePath: \react-learn\src\10-Mobx\04-router\mobx\store.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import {observable} from 'mobx'

const store = observable({
    isTabbarShow:true,
    list:[],
    cityName:"北京"
})

export default store