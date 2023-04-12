import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {
  state = {
    userList:[],
    isFirst:true,
    isLoading:false,
    errMsg:""
  }
  updataAppState = (stateObj) => {
    this.setState({...stateObj})
  }
  render() {
    // const {userList} = this.state
    return (
      <div className='container'>
        <Search updataAppState={this.updataAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}



