
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