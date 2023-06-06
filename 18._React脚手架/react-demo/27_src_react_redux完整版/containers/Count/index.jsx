import React, { Component } from 'react'

//引入counnect用于连接UI组件与redux
import {connect} from 'react-redux'

//引入action
import {
    Increment,
    Decrement,
    IncrementAsync,
} from '../../redux/actions/count'

class Count extends Component {
    componentDidMount(){
    }
    //加法
    increment = () => {
        const {value} = this.selectRef;
        this.props.Increment(value*1)
    }
    //减法
    decrement = () => {
        const {value} = this.selectRef;
        this.props.Decrement(value*1)
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectRef;
        const {count} = this.props
        if(count %2 !==  0){
            this.props.Increment(value*1)
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectRef;
        this.props.IncrementAsync(value*1,500)
    }
    render() {
        // console.log('UI组件接收到的Props',this.props);
        return (
            <div>
                <h1>当前求和为:{this.props.count},下方组件人数为{this.props.personLists}</h1>
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

//使用connect创建并暴露一个Count的容器组件
export default connect(
    state => ({
        count:state.countReducer,
        personLists:state.personReducer.length
    }),
    {
        Increment,
        Decrement,
        IncrementAsync,
    }
)(Count)

