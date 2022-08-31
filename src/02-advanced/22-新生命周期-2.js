import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myText:"1111"
    }
  render() {
    console.log("render")
    return (
      <div>
        App
        <button onClick={()=>{
            this.setState(
                {
                    myText:"2222"
                }
            )
        }}>点击</button>
        {this.state.myText}
      </div>
    )
  }
//   componentWillMount(){
//     console.log("componentWillMount")
//   }
  componentDidUpdate(prevProps,prevState,value){
    console.log("componentDidUpdate",value)
    
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return 100
  }
}
