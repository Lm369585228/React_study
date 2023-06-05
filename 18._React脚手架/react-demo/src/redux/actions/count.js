/**
 * 该文件专门为count组件生成action对象
 */
//  import store from '../redux/store'

//同步action,action返回值为object类型的一般对象
export const createIncrementAction = data => ({type:'increment',data});
export const createDecrementAction = data => ({type:'decrement',data});

//异步action,就是action返回值为函数,异步action中都会调用同步action,异步action不是必须要使用的
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}