
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './index.less'

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    renderMenu = () => {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={this.props.collapsed}
            >
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
                    <Menu.Item key="1">新增用户1</Menu.Item>
                    <Menu.Item key="2">用户列表</Menu.Item>
                </SubMenu>
            </Menu>
            );
    }
    
    render() {

        let menuClassName = this.props.collapsed ? "app-menu-con" : "app-menu-con menu-con-open";
        return <div  className={menuClassName}>
            {this.renderMenu()}
        </div>
        
    }
}
