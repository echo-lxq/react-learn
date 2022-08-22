/*
 * @Author: WeiShan
 * @Date: 2022-08-22 10:13:55
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-22 23:10:46
 * @FilePath: \react-learn\src\02-advanced\maizuocomponent1\Tabbar.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */

// import React from "react"

const Tabbar = (props)=>{

  return(
    <div>
        <ul>
            {
                props.list.map((item,index)=><li key={item.id} className={props.current === index?'active':''} 
                onClick = {()=>{props.click_current(index) }}>{item.text}</li>)
            }
        </ul>
      </div>
  )

}

export default Tabbar
