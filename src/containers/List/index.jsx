/**
 * Created by ytm
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//导入action方法
import {getListDate} from "actions/list"

//导入ant组件
import { Table, Icon } from 'antd';

class List extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.props.getListDate();
    }

    render() {
      const columns  = [{
        title: '名字',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '家庭地址',
        dataIndex: 'address',
        key: 'address',
      }];

    	const { $$state } = this.props;
      const data = $$state.get("data").toJS();
      const loading = $$state.get("loading");

      return (
      	<div>
          <Table columns={columns} dataSource={data} loading = {loading} />
        </div>
      )
    }
}


function mapStateToProps(state, ownProps) {
  return {
    $$state: state.list
  }
}

module.exports = connect(mapStateToProps, {
  getListDate,
})(List)