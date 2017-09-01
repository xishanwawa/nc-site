
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'antd'
import './index.less'

export default class LeftMenu extends React.Component {
    componentDidMount() {
    }

    onClick = (item) => {
        if(item.url) {
            browserHistory.push(item.url);
        }
    }

    childData = (data) => {
        const leftMenuItem = [{
            title:"首页",
            icon:<Icon  style={{ fontSize: 16, color: 'white' }} type="windows" />,
            url:"/",
        },{
            title:"基础设置",
            icon:<Icon  style={{ fontSize: 16, color: 'white' }} type="windows" />,
            child:[{
                title:"项目管理",
                url:"/project",
            },
            {
                title:"项目管理",
                url:"/project",
            }
            ]
        },{
            title:"渠道行销",
            icon:<Icon  style={{ fontSize: 16, color: 'white' }} type="line-chart" />,
        }];
        return leftMenuItem.map((item) => {
            return <li className="left_menuitem" onClick = {this.onClick.bind(this,item)}>
                    {
                        item.icon ? <div className="left_menuitem_icon">{item.icon}</div> : ""
                    }
                    <div className="left_menuitem_title" >
                        {item.title}
                        {
                            item.child ? 
                            <div className="left_submenu" >
                                {
                                    item.child.map((item) => {
                                        return <div className="left_submenu_title" onClick = {this.onClick.bind(this,item)}>{item.title}</div>
                                     })
                                }
                            </div> 
                            : ""
                        }
                    </div>
                </li>
        })
    }

    render() {
        let data = this.props.dataSource;
        return <ul className="leftmenu">{this.childData(data)}</ul>
    }
}
