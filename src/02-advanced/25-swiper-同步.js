/*
 * @Author: WeiShan
 * @Date: 2022-09-01 10:19:59
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 11:21:51
 * @FilePath: \react-learn\src\02-advanced\25-swiper-同步.js
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
        list:['111','222','333']
    }
    componentDidMount() { 
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
