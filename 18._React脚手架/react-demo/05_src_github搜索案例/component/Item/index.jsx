import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {itemobj} = this.props
    return (
      <div className="card">
        <a rel="noreferrer" href={itemobj.html_url} target="_blank">
          <img src={itemobj.avatar_url} style={{width: '100px'}} alt="头像"/>
        </a>
        <p className="card-text">{itemobj.login}</p>
      </div>
    )
  }
}
