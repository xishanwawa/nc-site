
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import './index.less'

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys:[]
        }
    }

    componentDidMount() {
    }

    onSelect = ( item ) => {
        debugger
        localStorage.selectedKeys = item.keyPath;
        this.setState({
            selectedKeys:item.keyPath
        })
    }

    onOpenChange = (openKeys) => {
        localStorage.openKeys = openKeys;
        this.setState({
            openKeys
        })
    }

    renderMenu = () => {

        // const data = [
        //     {
        //         "webId":"#",
        //         "name":"主页",
        //         "id":"sub1",
        //         "child":[{
        //             "webId":"#",
        //             "name":"项目管理",
        //             "id":2,
        //             "parentId":1,
        //             },{
        //             "webId":"#",
        //             "name":"项目不管理",
        //             "id":3,
        //             "parentId":1
        //             }
        //         ]
        //     },
        //     {
        //         "webId":"#",
        //         "name":"用户",
        //         "id":"sub2",
        //         "child":[{
        //             "webId":"#",
        //             "name":"用户管理",
        //             "id":5,
        //             "parentId":4,
        //             },{
        //             "webId":"#",
        //             "name":"角色管理",
        //             "id":6,
        //             "parentId":4
        //             }
        //         ]
        //     }
	    // ]
        
        // function tree(data){
        //     return data.map((item) => {
        //         if(item.child){
        //             return <SubMenu  key={item.id} title = {item.name}>
        //                 {tree(item.child)}
        //             </SubMenu>
        //         }else{
        //             return <Menu.Item key={item.id}>
        //                 <Link to="/crmweb">
        //                     <span>{item.name}</span>
        //                 </Link>
        //             </Menu.Item>
        //         }
        //     })
        // };

        // return (
        //     <Menu
        //       mode="inline"
        //       selectedKeys = {this.state.selectedKeys}
        //       onSelect = {this.onSelect}
        //     >
        //        {tree(data)}
        //     </Menu>
        // )
        
        //let openKeys = this.state.openKeys;
        let localOpenKeys = localStorage.openKeys ? localStorage.openKeys.split(",") : [];
        let localSelectedKeys = localStorage.selectedKeys ? localStorage.selectedKeys.split(",") : [];

        return (
            <Menu
                defaultSelectedKeys = {[]}
                selectedKeys = {localSelectedKeys}
                mode="inline"
                inlineCollapsed = {this.props.collapsed}
                theme={"dark"}
                onSelect = {this.onSelect}
                onOpenChange = {this.onOpenChange}
                openKeys = {localOpenKeys}
            >
                <Menu.Item key="1">
                    <Link to="/crmweb">
                        <Icon type="home" />
                        <span>主页</span>
                    </Link>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="pie-chart" /><span>项目</span></span>}>
                    <Menu.Item key="2">
                        <Link to="/crmweb/project">
                            <span>项目管理</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="user" /><span>用户</span></span>}>
                    <Menu.Item key="3">
                        <Link to="/crmweb/user">
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
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
