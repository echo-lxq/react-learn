/*
 * @Author: WeiShan
 * @Date: 2022-08-25 15:12:32
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-25 15:46:38
 * @FilePath: \react-learn\src\02-advanced\08-发布订阅模式案例.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

var bus = {
    list:[],
    //订阅
    subscribe(callback){

        this.list.push(callback)

    },

    //发布
    publish(content){
        //遍历所有list，将回调函数执行
        this.list.forEach(callback=>{
            callback&&callback(content);
        })
    }
}


export default class App extends Component {

    constructor(){
        super()
        this.state = {
          filmList:[],
        }
        axios.get('/test.json').then(
            res=>{
                this.setState(
                  {
                    filmList:res.data.data.films
                  }
                )
            }
        )

    }

  render() {
    return (
      <div>
      {this.state.filmList.map(
        item=><FilmItem key={item.filmId} {...item}></FilmItem>
      )}
      <FilmDetail></FilmDetail>
      </div>
    )
  }
}

class FilmItem extends Component{
  render(){
    // console.log(this.props)
    let {name,poster,grade,synopsis} = this.props
    return(
      <div className='filmitem' onClick={()=>{
        // console.log(synopsis)
        bus.publish(synopsis)
      }}>
        <img src={poster} alt={name} />
        <span className='name'>{this.props.name}</span>
        <div>观众评分：{grade}</div>
      </div>
    )
  }
}

class FilmDetail extends Component{

    constructor(){
        super()
        bus.subscribe((content)=>{
            this.setState(
                {
                    content:content
                }
            )
        })
        this.state = {
            content:''
        }
    }

  render(){
    return(
      <div className="filmdetail">
        {this.state.content}
      </div>
    )
  }

}
