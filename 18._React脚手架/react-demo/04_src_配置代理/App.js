import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  //获取数据
  getStudensData = () => {
    axios.get('http://localhost:3000/students')
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  render(){
    return (
      <div>
        <button onClick={this.getStudensData}>获取学生数据</button>
      </div>
    )
  }
}



