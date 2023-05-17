/**
 * 该文件适用于创建一个为Count组件服务的reducer,reducer的本质是一个对象
 * reducer函数会接到两个参数：分别为：之前的状态(perState),动作对象(action)
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