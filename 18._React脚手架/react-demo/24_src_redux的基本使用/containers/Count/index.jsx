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

//mapStateToProps函数的返回对象中的key就作为传递给UI组件的props的key,value就作为传递给UI组件props的value---状态
function mapStateToProps (state){
    return {
        count:state,
    }
}
//mapDispatchToProps函数的返回对象中的key就作为传递给UI组件的props的key,value就作为传递给UI组件props的value---操作状态的方法
function mapDispatchToProps (dispatch){
    return {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        asyncJia:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}

//使用connect创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

