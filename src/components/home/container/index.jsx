
import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import { Map, Marker } from 'react-amap';

import './index.less'

class Home extends React.Component {
    constructor(props) {
        super(props);
        let mmt = moment('2011-01-02');
        this.state = {
        }
    }

    render() {
        return <div>
            <div className="app-welcome">welcome to clond crmweb</div>
            <div className="demo-class">
            </div>
        </div>
    }
}

export default  Home