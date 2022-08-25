/*
 * @Author: WeiShan
 * @Date: 2022-08-25 21:57:50
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-25 22:22:11
 * @FilePath: \react-learn\src\02-advanced\09-context.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

const GlobalContext = React.createContext() //创建context对象

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
        // 生产者
        <GlobalContext.Provider value={{
                call:"打电话",
                sms:"短信",
                info:this.state.info,
                changeInfo:(value)=>{
                    this.setState({
                        info:value
                    })
                }
            }}>
            <div>
            {this.state.filmList.map(
                item=><FilmItem key={item.filmId} {...item}></FilmItem>
            )}
            <FilmDetail></FilmDetail>
            </div>
      </GlobalContext.Provider>
    )
  }
}

class FilmItem extends Component{
  render(){
    // console.log(this.props)
    let {name,poster,grade,synopsis} = this.props
    return(
        // 消费者
        <GlobalContext.Consumer>
            {
                //在形参中获取公共服务
                (value)=>{
                    console.log(value)
                    return(
                        <div className='filmitem' onClick={()=>{
                            // this.props.onEvent(synopsis)
                            value.changeInfo(synopsis)
                        }}>
                            <img src={poster} alt={name} />
                            <span className='name'>{this.props.name}</span>
                            <div>观众评分：{grade}</div>
                        </div>
                    )
                }
            }
        </GlobalContext.Consumer>
    )
  }
}

class FilmDetail extends Component{

  render(){
    return(
        <GlobalContext.Consumer>
            {
                (value)=>
                <div className="filmdetail">
                    {value.info}
                </div>
                
            }      
        </GlobalContext.Consumer>
    )
  }

}