
//定义key， type

let table_params = {
	url:'',
	data: {
	}
}


//mockData
let mockData = [{
  key: '1',
  name: '小红',
  age: 32,
  address: '北京海淀区',
}, {
  key: '2',
  name: '小明',
  age: 42,
  address: '北京海淀区',
}, {
  key: '3',
  name: '小李',
  age: 32,
  address: '北京海淀区',
}]

//定义方法 action
const getListDate = (params) => {
	const fetchData = (type, payload) => {
        return {
            type,
            payload
        }
    }
	return (dispatch) => {
	    dispatch(fetchData('GET_LIST_DATA', {}))
	    setTimeout(()=>{
	  	    dispatch(fetchData('GET_LIST_DATA_SUCCESS', {data: mockData}))
	    }, 2000)

	 // reqwest({
     //        url: table_params.url = params.url || table_params.url,
     //        type: 'json',
     //        method: 'post',
     //        data: {
     //            params: JSON.stringify(Object.assign(table_params.data, params.data))
     //        }
     //    })
     //    .then(function (data) {
     //    	dispatch(fetchData(GET_LIST_DATA_SUCCESS, {data: mockData}))
     //    })
     //    .fail(function (err, msg) {
     //    })
	}
}


//输出 type 与 方法
export {
	getListDate,
}