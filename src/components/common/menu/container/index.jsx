
import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'

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
                mode="inline"
                inlineCollapsed={this.props.collapsed}
            >
                <Menu.Item key="1">
                    <Link to="/crmweb">
                        <Icon type="home" />
                        <span>主页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/crmweb/project">
                        <Icon type="pie-chart" />
                        <span>项目</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/crmweb/user">
                        <Icon type="user" />
                        <span>用户</span>
                    </Link>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>二级菜单demo</span></span>}>
                    <Menu.Item key="4">菜单3</Menu.Item>
                    <Menu.Item key="5">菜单4</Menu.Item>
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
