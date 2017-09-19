/**
 * Created by yangtmm on 2017-08-30
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment';
import { Table, Icon, Modal, Form, Progress, Row, Col, Button, Checkbox, Layout, DatePicker } from 'antd';
import './index.less'

//导入action方法
import * as Actions from "../action"

class List extends React.Component {
  constructor(props) {
    super(props)
    // var start  = moment().startOf('week');
    // var end    = moment().endOf('week');

    // debugger
    this.state = {
      date : "2017-09-12"
    }
  }

  componentDidMount() {
    //this.props.action.getListData();
  }

  changeDate = (date, dateString) => {
    this.setState({
      date: dateString
    })
  }

  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    return (
      <div>
         <div className="breadcrumb">项目管理</div>
         <div className= "search-list">
          <Row>
              <Col span={2}>日期</Col>
              <Col span={4}>
                  <DatePicker value = {moment(this.state.date)} onChange={this.changeDate} />
              </Col>
              <Col span={2}>金额</Col>
              <Col span={4}>
                  <DatePicker value = {moment(this.state.date)} onChange={this.changeDate} />
              </Col>
          </Row>
         </div>
         <div className="list-box">
             <Table dataSource={dataSource} columns={columns} />
         </div>
      </div>
    )
  }
}

//绑定状态到组件props
function mapStateToProps(state, ownProps) {
  return {
    $$state: state.projectList
  }
}

//绑定action到组件props
function mapDispatchToProps(dispatch) {
  return {
      action : bindActionCreators(Actions, dispatch)
  }
}

//输出绑定state和action后组件
export default  connect( mapStateToProps, mapDispatchToProps)(List);