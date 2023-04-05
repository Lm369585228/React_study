//引入React核心库
import React,{Component} from 'react';
import Hello from './comonents/Hello';
import Welcome from './comonents/Welcome';

//引入hello组件

//创建并暴露App组件
export default class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}

