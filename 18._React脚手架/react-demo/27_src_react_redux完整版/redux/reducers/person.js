//初始化状态
const initState = [{id:'001',name:'Tom',age:18}]
export default function personReducer(perState = initState,action){
    //reducer中必须是纯函数 1.不可加工参数 2.入参和出参保持一致 3.不能使用new Date()
    //从action对象上获取type,data
    const {type,data} = action;
    //根据type决定如何加工对象
    switch(type){
        case 'addPerson':  //加法
            return [data,...perState]
        default:
            return perState
    }
}