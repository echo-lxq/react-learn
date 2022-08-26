/*
 * @Author: WeiShan
 * @Date: 2022-08-26 08:37:09
 * @LastEditors: WeiShan
 * @LastEditTime: 2022-08-26 08:59:34
 * @FilePath: \react-learn\src\02-advanced\00-间接复习.js
 * @Description: 
 * 
 * Copyright (c) 2022 by WeiShan/xls, All Rights Reserved. 
 */
import React, { Component } from 'react'

const GlobalContext = React.createContext()

class Navbar extends Component{

    render(){
        return(
            <GlobalContext.Consumer>
                {
                    (value)=>{
                        return(
                            <div style={{background:"yellow"}}>
                                <h2>navbar</h2>
                                <button onClick={()=>{
                                    value.setInfo()
                                }}>控制</button>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }

}

class Sidebar extends Component{

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }

}

export default class App extends Component {
    state = {
        info:false
    }
  render() {
    return (
        <GlobalContext.Provider value={{
            call:"1234",
            info:this.state.value,
            setInfo:()=>{
                this.setState(
                    {
                        info:!this.state.info
                    }
                )
            }
        }}>
            <div>
                <h2>123</h2>
                <Navbar></Navbar>
                {this.state.info&&<Sidebar>
                        <div>
                            <h2>sidebar</h2>
                            <ul>
                                <li>1111111</li>
                                <li>1111111</li>
                                <li>1111111</li>
                                <li>1111111</li>
                                <li>1111111</li>
                                <li>1111111</li>
                                <li>1111111</li>
                            </ul>
                        </div>
                    </Sidebar>}
            </div>
        </GlobalContext.Provider>
    )
  }
}
