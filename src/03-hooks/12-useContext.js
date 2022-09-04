/*
 * @Author: WeiShan
 * @Date: 2022-09-04 21:44:37
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-04 22:16:27
 * @FilePath: \react-learn\src\03-hooks\12-useContext.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import axios from 'axios'
import './css/03-communication.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

const GlobalContext = React.createContext() //创建context对象

export default function App(){
    const [filmList,setFileList] = useState([])
    const [info,setInfo] = useState('')

    useEffect(()=>{
        axios.get('/test.json').then(
            res=>{
                setFileList(res.data.data.films)
            }
        )
    },[])

    return (
        // 生产者
        <GlobalContext.Provider value={{
                call:"打电话",
                sms:"短信",
                info:info,
                changeInfo:(value)=>{
                    setInfo(value)
                }
            }}>
            <div>
            {filmList.map(
                item=><FilmItem key={item.filmId} {...item}></FilmItem>
            )}
            <FilmDetail></FilmDetail>
            </div>
      </GlobalContext.Provider>
    )
}


function FilmItem(props){
    let {name,poster,grade,synopsis} = props

    const value = useContext(GlobalContext)

    return(
        <div className='filmitem' onClick={()=>{
            // this.props.onEvent(synopsis)
            value.changeInfo(synopsis)
        }}>
            <img src={poster} alt={name} />
            <span className='name'>{props.name}</span>
            <div>观众评分：{grade}</div>
        </div>
    )

}

function FilmDetail(){
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