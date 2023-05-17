/**
 * 该文件专门为count组件生成action对象
 */
export const createIncrementAction = data => ({type:'increment',data});

export const createDecrementAction = data => ({type:'decrement',data});