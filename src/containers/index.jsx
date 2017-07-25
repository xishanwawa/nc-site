
/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class Index extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
        	<div>
            <a href = './'>主页</a><a href = './list'>列表</a>
            { this.props.children || "index" }
          </div>
        )
    }
}


function mapStateToProps(state) {
  return {
    $$state: state.Index
  }
}

module.exports = connect(mapStateToProps, {
  
})(Index)