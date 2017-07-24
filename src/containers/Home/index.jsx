/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//导入UI组件
import Counter     from "components/Home/Counter"

//导入action方法
import {onIncrement, onDecrement} from "actions/home"

class Home extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

    render() {
    	const { $$state } = this.props;
      let countValue = $$state.get("val");
      return (
      	<div>
            <Counter
              value={ countValue }
              onIncrement={ this.props.onIncrement.bind(this) }
              onDecrement={ this.props.onDecrement.bind(this) }
            />
        </div>
      )
    }
}


function mapStateToProps(state) {
  return {
    $$state: state.home
  }
}

module.exports = connect(mapStateToProps, {
  onIncrement,
  onDecrement,
})(Home)



//or

// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }
// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)


