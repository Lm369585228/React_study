/**
 * 该文件专门暴露一个store对象，整个应用只有一个store对象
 */
//引入createStore，专门用于创建redux中的store对象
import { createStore,applyMiddleware } from 'redux'
//引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

import allReducer from './reducers'

export default createStore(allReducer,applyMiddleware(thunk)); 