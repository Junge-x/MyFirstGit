import { combineReducers } from 'redux';
import routerReducer from 'react-router-redux';
 
// 合并管理
const reducer = combineReducers({
    routing: routerReducer,
});
export default reducer;