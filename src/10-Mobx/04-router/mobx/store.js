/*
 * @Author: WeiShan
 * @Date: 2022-09-20 08:50:11
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-27 15:52:08
 * @FilePath: \react-learn\src\10-Mobx\04-router\mobx\store.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import {observable,configure, action , runInAction} from 'mobx'
import axios from 'axios'
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

    @action async getList(){
        var list = await axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660142019135536282959873","bc":"110100"}',
              'X-Host': 'mall.film-ticket.cinema.list'
            }
          }).then(res=>{
            // console.log(res.data.data.cinemas)
            return res.data.data.cinemas
          }).catch(err=>{
            console.log(err);
          })
        runInAction(()=>{
            this.list = list
        })
    }
}

const store = new Store()

export default store