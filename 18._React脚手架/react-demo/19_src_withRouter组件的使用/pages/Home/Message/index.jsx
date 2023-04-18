import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Details from './Details'

export default class Message extends Component {
  state = {
    messageArrs:[
      {id:'01',text:"消息1"},
      {id:'02',text:"消息2"},
      {id:'03',text:"消息3"},
    ]
  }
  pushShow = (id,text) => {
    this.props.history.push(`/home/message/details/${id}/${text}`)
  }
  replaceShow = (id,text) => {
    // replace携带params参数
    // this.props.history.replace(`/home/message/details/${id}/${text}`)
    // replace携带query参数
    // this.props.history.replace(`/home/message/details/?id=${id}&text=${text}`)
    // replace携带state参数
    this.props.history.replace('/home/message/details',{id,text})
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  render() {
    const {messageArrs} = this.state
    return (
      <div>
        <ul>
          {
            messageArrs.map((item) => {
              return (
                <li key={item.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/details/${item.id}/${item.text}`}>{item.text}</Link> */}
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/details/?id=${item.id}&text=${item.text}`}>{item.text}</Link> */}
                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:'/home/message/details',state:{id:item.id,text:item.text}}}>{item.text}</Link>
                  &nbsp;<button onClick={() => this.pushShow(item.id,item.text)}>push查看</button>
                  &nbsp;<button onClick={() => this.replaceShow(item.id,item.text)}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* params参数申明接收 */}
        {/* <Route path='/home/message/details/:id/:text' component={Details}/> */}
        {/* search/state参数无需申明接收 */}
        <Route path='/home/message/details' component={Details}/>
        &nbsp;<button onClick={this.back}>回退</button>
        &nbsp;<button onClick={this.forward}>前进</button>
      </div>
    )
  }
}
