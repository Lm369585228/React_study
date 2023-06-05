/**
 * 该文件适用于创建一个为Count组件服务的reducer,reducer的本质是一个对象
 * reducer函数会接到两个参数：分别为：之前的状态(perState),动作对象(action)
 * reducer有两个作用：初始化状态，加工状态
 * reducer第一次调用，是store自动触发的
 * reducer只负责管理状态，至于状态的改变驱动页面的展示，需要我们自己写
 */
//初始化状态
const initState = 0
export default function conutReducer(perState = initState,action){
    //从action对象上获取type,data
    const {type,data} = action;
    //根据type决定如何加工对象
    switch(type){
        case 'increment':  //加法
            return perState + data;
        case 'decrement':  //减法
            return perState - data;
        default:
            return perState
    }
}