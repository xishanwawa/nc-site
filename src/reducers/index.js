import { combineReducers } from 'redux'


import login from 'components/login/reducer'

//project目录
import projectList from 'components/project/list/reducer'

//user目录
import userlist from 'components/user/list/reducer'


let rootReducer = combineReducers({
    login,
    projectList,
    userlist,
 });

export { rootReducer }