import Immutable from 'immutable'

let $$initialState = {
	loading: false,
	data:[]
};

export default function home($$state = Immutable.fromJS($$initialState), action){
	switch (action.type) {
	    case 'GET_LIST_DATA':
	        debugger
	        return $$state.merge({
                loading: true
            })
	    case 'GET_LIST_DATA_SUCCESS': 
	        return $$state.merge({
	        	loading: false,
                data: action.payload.data
            })
	    default: 
	        return $$state;
	}
};












// keyMirror
// "use static";
// let KeyVal = function(obj) {
// 	let ret = {};
// 	let key;
// 	if((obj instanceof Object && !Array.isArray(obj))) {
// 		throw new Error('arg must be an object')
// 	}
// 	for (key in obj) {
//        if (obj.hasOwnProperty(key)) {
// 		   ret[key] = key;
// 	   }
// 	};

// 	return ret;
// }