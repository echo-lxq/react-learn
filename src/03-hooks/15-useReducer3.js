/*
 * @Author: WeiShan
 * @Date: 2022-09-05 21:10:28
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-05 21:32:02
 * @FilePath: \react-learn\src\03-hooks\15-useReducer3.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React from 'react'
import axios from 'axios'
import './css/03-communication.css'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'

const GlobalContext = React.createContext() //创建context对象

const reducer = (prevState,action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "setDetail":
            newState.detail = action.detail
            return newState
        case "setList":
            newState.filmList = [...action.list]
            return newState
        default:
            return prevState;
    }
}

const initailSatate = {
    detail:"",
    filmList:[]
}


export default function App(){

    const [detail,setReducer] = useReducer(reducer,initailSatate)

    useEffect(()=>{
        axios.get('/test.json').then(
            res=>{
                setReducer({
                    type:"setList",
                    list:res.data.data.films
                })
            }
        )
    },[])

    return (
        // 生产者
        <GlobalContext.Provider value={{
                detail,
                setReducer
            }}>
            <div>
            {detail.filmList.map(
                item=><FilmItem key={item.filmId} {...item}></FilmItem>
            )}
            <FilmDetail></FilmDetail>
            </div>
      </GlobalContext.Provider>
    )
}


function FilmItem(props){
    let {name,poster,grade,synopsis} = props

    const {setReducer} = useContext(GlobalContext)

    return(
        <div className='filmitem' onClick={()=>{
            // this.props.onEvent(synopsis)
            setReducer({
                type:"setDetail",
                detail:synopsis
            })
        }}>
            <img src={poster} alt={name} />
            <span className='name'>{props.name}</span>
            <div>观众评分：{grade}</div>
        </div>
    )

}

function FilmDetail(){
    const {detail} = useContext(GlobalContext)
    return(
        <div className="filmdetail">
            {detail.detail}
        </div>
    )
}