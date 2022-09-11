/*
 * @Author: WeiShan
 * @Date: 2022-09-06 10:39:04
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-09-11 10:15:52
 * @FilePath: \react-learn\src\05-redux\router\IndexRouter.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Films from '../views/Films'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'

function isAuth(){
  return localStorage.getItem("token")
  //跟后端验证得需要检验没有权限等操作，这里做简单读取验证
}

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/films" component={Films}></Route>

              <Route path="/cinemas" component={Cinemas} exact></Route>

              <Route path="/cinemas/search" component={Search}></Route>

              <Route path="/login" component={Login}></Route>

              <Route path="/city" component={City}></Route>

              {/* 路由拦截 */}
              <Route path="/center" render={(props)=>{
                return isAuth()?<Center {...props}></Center>:<Redirect to="/login"/>
              }}></Route>


              {/* <Route path="/detail/:myid" component={Detail}></Route> */}
              <Route path="/detail" component={Detail}></Route>
              {/* 模糊匹配 */}
              {/* <Redirect from="/" to="/films" /> */}

              {/* 精确匹配  exact*/}
              <Redirect from="/" to="/films" exact/>

              <Route component={NotFound}></Route>
          </Switch>
          {this.props.children}
        </Router>
      </div>
    )
  }
}

// class Route extends Component{
//   render(){
//     var MyComponent = this.props.component
//     return(
//       <div>
//         <MyComponent history={}></MyComponent>
//       </div>
//     )
//   }
// }
