
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Menu, Avatar, Dropdown, } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './index.less'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const menu = (
        <Menu>
          <Menu.Item>
            关于我们
          </Menu.Item>
          <Menu.Item>
            登出
          </Menu.Item>
        </Menu>
      );
        const { $$state } = this.props;
        const user = $$state.get("user") || "";
        return <div className="app-header">
                <span className="menu-style-control" onClick={this.props.toggleCollapsed}>
                  <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </span>
                <div className="logger">
                <Dropdown overlay={menu}>
                  <span className="ant-dropdown-link">
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>Hover me <Icon type="down" />
                  </span>
                </Dropdown>
                </div>
            </div>
    }
}

function mapStateToProps(state, ownProps) {
  return {
    $$state: state.login
  }
}

module.exports = connect(mapStateToProps, {})(Header);