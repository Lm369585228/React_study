import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    render() {
        const {userList,isFirst,isLoading,errMsg} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字</h2> :
                    isLoading ? <h2>Loading......</h2> :
                    errMsg ? <h2>{errMsg.message}</h2> :
                    userList?.map((itemobj) => {
                        return <Item itemobj={itemobj} key={itemobj.id}/>
                    })
                }
            </div>
        )
    }
}
