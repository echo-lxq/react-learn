/*
 * @Author: WeiShan
 * @Date: 2022-09-01 16:12:45
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-01 17:08:40
 * @FilePath: \react-learn\src\02-advanced\swipper\swipper.js
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

export default class KSwipper extends Component {
    componentDidMount() { 
        new Swiper('.swiper',{
            pagination:{
                el:'.swiper-pagination'
            },
            loop:this.props.loop
        })
     }
  render() {
    return (
      <div>

        <div className="swiper">
            <div className="swiper-wrapper">
                {this.props.children}
                
            </div>
            <div className="swiper-pagination"></div>
        </div>    
    
      </div>
    )
  }
}
