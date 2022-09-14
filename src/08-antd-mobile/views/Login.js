import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" />
        <button onClick={()=>{
            localStorage.setItem("token","123")
            this.props.history.push('/center')
        }}>登录</button>
      </div>
    )
  }
}
