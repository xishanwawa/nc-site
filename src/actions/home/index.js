
//定义key， type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//定义方法 action
const onIncrement = () => {
	return (dispatch) => {
	  dispatch({type: INCREMENT})
	}
}

const onDecrement = () => {
	return (dispatch) => {
	  dispatch({type: DECREMENT})
	}
}


//输出 type 与 方法
export {
	INCREMENT,
	DECREMENT,
	onIncrement,
	onDecrement,
}