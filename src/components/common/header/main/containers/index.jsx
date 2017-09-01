
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import './index.less'

class Header extends React.Component {
    render() {
        const { $$state } = this.props;
        const user = $$state.get("user") || "";
        return <div className="header">
                <span className="head_button">CRMWEB</span>
                <div className="logger">{user}</div>
            </div>
    }
}

function mapStateToProps(state, ownProps) {
  return {
    $$state: state.login
  }
}

module.exports = connect(mapStateToProps, {})(Header);