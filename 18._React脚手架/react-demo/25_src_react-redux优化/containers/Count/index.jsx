import React, { Component } from 'react'

//引入counnect用于连接UI组件与redux
import {connect} from 'react-redux'

//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from '../../redux/count_action'

class Count extends Component {
    // state = {count:0}
    componentDidMount(){
    }
    //加法
    increment = () => {
        const {value} = this.selectRef;
        this.props.jia(value*1)
    }
    //减法
    decrement = () => {
        const {value} = this.selectRef;
        this.props.jian(value*1)
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectRef;
        const {count} = this.props
        if(count %2 !==  0){
            this.props.jia(value*1)
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectRef;
        this.props.asyncJia(value*1,500)
    }
    render() {
        // console.log('UI组件接收到的Props',this.props);
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
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
    state => ({count:state}),
    //mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia:number => dispatch(createIncrementAction(number)),
    //     jian:number => dispatch(createDecrementAction(number)),
    //     asyncJia:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    // }),
    //mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyncJia:createIncrementAsyncAction
    }
)(Count)

