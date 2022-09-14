/*
 * @Author: WeiShan
 * @Date: 2022-09-11 10:12:13
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-13 20:29:19
 * @FilePath: \react-learn\src\06-react-redux\views\City.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import { useState } from 'react'
// import store from '../redux/store'
import {connect} from 'react-redux'

function City(props) {
    const [list] = useState(["北京","上海","深圳","广州"])
  return (
    <div>
        City
        <ul>
            {list.map(item=><li onClick={()=>{
                props.change(item)
                props.history.goBack()
            }} key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

const mapDispatchToProps = {
    change(item){
        return{
            type:"change-city",
            payload:item
        }
    }
}

export default connect(null,mapDispatchToProps)(City)
