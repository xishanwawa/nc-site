
import React, { Component, PropTypes } from 'react'
import { Layout   } from 'antd';
import Menu from 'components/common/menu/container'
import Header from 'components/common/header/container'
import './index.less'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return <div className="app-container full-height">
            <Header  
                collapsed = {this.state.collapsed} 
                toggleCollapsed = {this.toggleCollapsed} 
            />
            <div className="app-body">
                <Menu 
                    collapsed = {this.state.collapsed} 
                />
                <div className="app-content">
                    { this.props.children || "not indexRouter" }
                </div>
            </div>
        </div>
    }
}

module.exports = Main