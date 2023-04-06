import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  state = {
    mouse:false
  }
  static propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isChecked:PropTypes.bool.isRequired,
    updateTodo:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
  }
  //勾选/取消回调事件
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }
  //鼠标移入/移出
  handleMouse = (falg) => {
    return ()=> {
      this.setState({mouse:falg})
    }
  }
  // 删除
  handleDelTodo = (id) => {
    return () => {
      // const {target} = event
      // console.log(id,target);
      this.props.delTodo(id)
    }
  }
  render() {
    const {mouse} = this.state;
    const {id,name,isChecked} = this.props
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={isChecked} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button 
        className="btn btn-danger" 
        style={{display:mouse ? 'block' :'none'}}
        onClick={this.handleDelTodo(id)}
        >删除</button>
      </li>
    )
  }
}
