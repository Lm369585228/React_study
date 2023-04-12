import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    state = {
      userList:[],
      isFirst:true,
      isLoading:false,
      errMsg:""
    }
    componentDidMount(){
        PubSub.subscribe('getState',(_,stateObj) => {
            this.setState({...stateObj})
        })
    }
    render() {
        const {userList,isFirst,isLoading,errMsg} = this.state
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
