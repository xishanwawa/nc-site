import {combineReducers} from 'redux'

//project目录
import login from 'app/login/main/reducers'
import projectList from 'app/project/list/reducers'

let rootReducer = combineReducers({
    projectList,
    login,
 });

export {rootReducer}