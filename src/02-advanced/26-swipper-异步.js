/*
 * @Author: WeiShan
 * @Date: 2022-09-01 11:24:31
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 11:37:07
 * @FilePath: \react-learn\src\02-advanced\26-swipper-异步.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

import Swiper,{Navigation,Pagination} from 'swiper'

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation,Pagination])

export default class App extends Component {
    state = {
        list:[]
    }
    componentDidMount() {

        setTimeout(
            ()=>{
                this.setState(
                    {
                        list:['aaa','bbb','ccc']
                    }
                )
            },1000
        )        
     }

    //方案一、这里可以获取数据，并且更新dom完成渲染之后
     componentDidUpdate(){
        new Swiper('.swiper',{
            pagination:{
                el:'.swiper-pagination'
            }
        })
     }
  render() {
    return (
      <div>

        <div className="swiper" style={{
            height:"200px",
            background:"yellow"
        }}>
            <div className="swiper-wrapper">
                {this.state.list.map((item,index)=>
                    <div key={index} className="swiper-slide">{item}</div>
                )}
            </div>
            <div className="swiper-pagination"></div>
        </div>    
    
      </div>
    )
  }
}
