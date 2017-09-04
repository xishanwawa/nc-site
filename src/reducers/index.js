import {combineReducers} from 'redux'

//project目录
import login from 'components/login/reducer'
import projectList from 'components/project/list/reducer'

let rootReducer = combineReducers({
    projectList,
    login,
 });

export {rootReducer}