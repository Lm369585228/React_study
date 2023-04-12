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
                  <Link to={`/home/message/details/${item.id}/${item.text}`}>{item.text}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 申明接收params参数 */}
        <Route  path='/home/message/details/:id/:text' component={Details}/>
      </div>
    )
  }
}
