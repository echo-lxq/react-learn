import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary" danger loading={true} onClick={()=>{
            console.log("click")
        }}>Primary Button</Button>
      </div>
    )
  }
}
