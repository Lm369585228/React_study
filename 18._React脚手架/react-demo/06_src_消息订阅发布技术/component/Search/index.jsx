import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        const {valueEl:{value:keyWord}} = this
        PubSub.publish('getState',{isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res => {
            // console.log(res.data);
            PubSub.publish('getState',{isLoading:false,userList:res.data.items})
        }).catch(error => {
            PubSub.publish('getState',{isLoading:false,errMsg:error})
        })
    }
    render() {
        return (
            <div className='jumbotron'>
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.valueEl = c} type="text" placeholder="输入关键词，点击搜索" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }
}
