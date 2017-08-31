
import React, { Component, PropTypes } from 'react'
import { Layout   } from 'antd';
import LeftMenu from 'app/common/leftmenu/main/containers'
import MyHeader from 'app/common/header/main/containers'
import './index.less'

const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component {
    render() {

        return <div className = "boxed-layout">
            <Layout>
                <MyHeader />

                <Layout>
                    <Sider width={70}>
                        <LeftMenu dataSource={[]} />
                    </Sider>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}

module.exports = Main