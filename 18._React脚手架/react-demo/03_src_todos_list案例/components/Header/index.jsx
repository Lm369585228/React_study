import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {keyCode,target} = event;
    if(keyCode !== 13)return;
    if(target.value.trim() === ''){
      alert('输入不能为空！')
      return;
    }
    let item = {
      id:nanoid(),
      name:target.value,
      isChecked:false,
    }
    this.props.addTodo(item)
    target.value = "";
  }
  render() {
    return (
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
