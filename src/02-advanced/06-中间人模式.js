/*
 * @Author: WeiShan
 * @Date: 2022-08-24 22:24:38
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-25 11:22:57
 * @FilePath: \react-learn\src\02-advanced\06-中间人模式.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
          filmList:[],
          info:''
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
        item=><FilmItem onEvent={(value)=>{
          this.setState({
            info:value
          })
        }} key={item.filmId} {...item}></FilmItem>
      )}
      <FilmDetail detail = {this.state.info}></FilmDetail>
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
        this.props.onEvent(synopsis)
      }}>
        <img src={poster} alt={name} />
        <span className='name'>{this.props.name}</span>
        <div>观众评分：{grade}</div>
      </div>
    )
  }
}

class FilmDetail extends Component{

  render(){
    return(
      <div className="filmdetail">
        {this.props.detail}
      </div>
    )
  }

}
