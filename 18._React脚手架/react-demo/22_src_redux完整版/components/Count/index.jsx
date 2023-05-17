import React, { Component } from 'react'
//引入store,用于获取redux中保存的状态
import store from '../../redux/store'
//引入actionCreator,专门用于创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
    state = {count:0}
    componentDidMount(){
        store.subscribe(() => {
            this.setState({})
        })
    }
    //加法
    increment = () => {
        const {value} = this.selectRef;
        //通知store
        store.dispatch(createIncrementAction(value*1))
    }
    //减法
    decrement = () => {
        const {value} = this.selectRef;
        //通知store
        store.dispatch(createDecrementAction(value*1))
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectRef;
        const count = store.getState()
        if(count %2 !==  0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectRef;
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        },2000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c => this.selectRef = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>&nbsp;
            </div>
        )
    }
}
