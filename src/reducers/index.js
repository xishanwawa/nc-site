
import { combineReducers } from 'redux'

import home from "./home"
import list from "./list"

let rootReducer =  combineReducers({
	home,
	list,
});

export {
	rootReducer,
}