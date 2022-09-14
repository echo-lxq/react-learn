/*
 * @Author: WeiShan
 * @Date: 2022-09-10 11:10:43
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-13 21:56:21
 * @FilePath: \react-learn\src\06-react-redux\redux\store.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */

// 1.引入redux
import { createStore, applyMiddleware, compose } from 'redux';

// 2.createStore(reducer) 

import { combineReducers } from "redux";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['CityReducer']
  }

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk,reduxPromise)
    ));

    let persistor = persistStore(store)

// 3.导出
export {store,persistor}

/**
 * store.dispatch
 * store.subscribe
 * store.getState
 */

// function createWeiShanStore(reducer){
//     var list = []
//     var state = reducer(undefined,{})
//     function subscribe(callback){
//         list.push(callback)
//     }
//     function dispatch(action){
//         state = reducer(state,action)
//         for(var i in list){
//             list[i]&&list[i]()
//         }
//     }
//     function getState(){
//         return state
//     }
//     return{
//         subscribe,
//         dispatch,
//         getState
//     }

// }