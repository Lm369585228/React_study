import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
  }

  render() {
    const {todos,updateTodo,delTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos?.map((item)=>{
            return <Item {...item} key={item.id} updateTodo={updateTodo} delTodo={delTodo}/>
          })
        }
      </ul>
    )
  }
}
