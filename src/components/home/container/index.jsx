
import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import { Map, Marker } from 'react-amap';

import Speak from './Speak'

import './index.less'

class Home extends React.Component {
    constructor(props) {
        super(props);
        let mmt = moment('2011-01-02');
    }

    render() {
        return <div>
            <div className="app-welcome">welcome to clond crmweb</div>
            <div className="demo-class" style={{width:300, padding:20}}>
                <Speak />
            </div>
        </div>
    }
}

export default  Home