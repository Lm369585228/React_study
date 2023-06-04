//引入count的ui组件
import CountUI from "../../components/Count";

//引入counnect用于连接UI组件与redux
import {connect} from 'react-redux'

//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from '../../redux/count_action'

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
)(CountUI)

