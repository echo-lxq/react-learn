import React, { Component } from 'react'
// import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list:[1,2,3,4,5,6,7,8,9]
    }
    myRef = React.createRef()
    render() {
        return (
        <div>
            <button onClick={()=>{
                this.setState(
                    {
                        list:[...[11,12,13,14,15,16],...this.state.list]
                    }
                )
            }}>来邮件</button>
            <h1>邮箱应用</h1>
            <div id="email_box" style={{
                height:"120px",
                background:"yellow",
                overflow:"auto"
            }} ref={this.myRef}>
                <ul>
                    {this.state.list.map(item=><li style={{
                        height:"80px"
                    }} key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
        )
  }

  //获取容器高度
  getSnapshotBeforeUpdate(){
        console.log(this.myRef.current.scrollHeight)
        return this.myRef.current.scrollHeight
  }

  componentDidUpdate(prevProps,prevState,value){
        console.log(this.myRef.current.scrollHeight)
        this.myRef.current.scrollTop += this.myRef.current.scrollHeight-value
  } 

//   componentDidMount(){
//     new BetterScroll('#email_box')
//   }

}
