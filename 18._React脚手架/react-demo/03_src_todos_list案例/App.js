import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {id:'1',name:"吃饭",isChecked:false},
      {id:'2',name:"睡觉",isChecked:false},
      {id:'3',name:"打豆豆",isChecked:false},
    ],
    isChecked:false
  }
  //addtode用于添加一个todo，接收的参数时todo对象
  addTodo = (itemObj) => {
    // console.log(itemObj,'App数据！！！！！！');
    const {todos} = this.state
    this.setState({
      todos:[itemObj,...todos],
    })
  }
  //更新todo状态
  updateTodo = (id,isChecked) => {
    const {todos} = this.state;
    const newTodos = todos.map(itemObj => {
      if(itemObj.id === id) return {...itemObj,isChecked}
      else return itemObj 
    })
    const status = newTodos.some((item) => !item.isChecked)
    this.setState({todos:newTodos,isChecked:status ? false : true})
  }
  //删除Todo 接收的参数是删除项的id
  delTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(itemObj => {
      return itemObj.id !== id
    })
    this.setState({todos:newTodos})
  }
  //清除全部
  clearAllTodo = (val) => {
    const {todos} = this.state
    const newTodos = todos.map((itemObj) => {
      return {
        ...itemObj,
        isChecked:false
      }
    })
    this.setState({todos:newTodos,isChecked:val})
  }
  //选中全部任务
  checkedAlltodo = (val) => {
    const {todos} = this.state
    const newTodos = todos.map((itemObj) => {
      return {
        ...itemObj,
        isChecked:true
      }
    })
    this.setState({todos:newTodos,isChecked:val})
  }
  render() {
    const {todos,isChecked} = this.state;
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
          <Footer todos={todos} isChecked={isChecked} clearAllCallback={this.clearAllTodo} checkedAlltodo={this.checkedAlltodo}/>
        </div>
      </div>
    )
  }
}


