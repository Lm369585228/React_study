import React, { Component } from 'react';

import {nanoid} from 'nanoid'

import {connect} from 'react-redux'

import {addPerson} from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameRef.value
    const age = this.ageRef.value
    const personObj = {id:nanoid(),name,age}
    // console.log(personObj);
    this.props.addPerson(personObj)
    this.nameRef.value = ''
    this.ageRef.value = ''
  }
  render() {
    return (
      <div>
        姓名：<input ref={ c => this.nameRef = c} type="text" placeholder='输入姓名'></input>
        年龄：<input ref={ c => this.ageRef = c} type="text" placeholder='输入年龄'></input>
        <br/>
        <button onClick={this.addPerson}>添加人员</button>&nbsp;
        <ul>
          {
            this.props.personList.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({personList:state.personReducer}),
  {
    addPerson,
  }
)(Person)