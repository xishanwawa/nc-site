
import React, { Component, PropTypes } from 'react'

import './index.less'

export default class Left extends React.Component {
    render() {
        return <div className="left">{this.props.children}</div>
    }
    
}
