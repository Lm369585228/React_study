import { combineReducers } from 'redux'

//引入为count组件服务的reducer
import countReducer from './count'

import personReducer from './person'

//借助combineReducerAPI合并所有reducer
export default combineReducers({
    countReducer,
    personReducer,
})
