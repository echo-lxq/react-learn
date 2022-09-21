/*
 * @Author: WeiShan
 * @Date: 2022-09-20 08:50:11
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-21 14:24:10
 * @FilePath: \react-learn\src\10-Mobx\04-router\mobx\store.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import {observable,configure, action} from 'mobx'
configure({
    enforceActions:"always"
})
// const store = observable(
//     {
//         isTabbarShow:true,
//         list:[],
//         cityName:"北京",
//         changeShow(){
//             this.isTabbarShow = true
//         },
//         changeHide(){
//             this.isTabbarShow = false
//         }
//     },{
//         changeHide:action,
//         changeShow:action //标记两个方法是action，专门修改可观测的value  
//     }
// )

class Store{
    
    @observable isTabbarShow = true

    @observable list = []

    @action changeShow(){
        this.isTabbarShow = true
    }

    @action changeHide(){
        this.isTabbarShow = false
    }
}

const store = new Store()

export default store