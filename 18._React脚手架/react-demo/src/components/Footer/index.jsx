import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    isChecked:PropTypes.bool.isRequired,
    clearAllCallback:PropTypes.func.isRequired,
    checkedAlltodo:PropTypes.func.isRequired,
  }
  //清除全部任务回调事件
  clearAll = () => {
    this.props.clearAllCallback(false)
  }
  //全部选中任务回调事件
  checkedAll = (event) => {
    if(event.target.checked) this.props.checkedAlltodo(event.target.checked)
    else this.props.clearAllCallback(event.target.checked) 
  }
  render() {
    const {todos,isChecked} = this.props;
    const isCheckedNums = todos.reduce((prev,cur) => {
      return prev + (cur.isChecked ? 1 : 0)
    },0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={isChecked} onChange={this.checkedAll} />
        </label>
        <span>
          <span>已完成{isCheckedNums}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearAll}>清除已完成任务</button>
      </div>
    )
  }
}
