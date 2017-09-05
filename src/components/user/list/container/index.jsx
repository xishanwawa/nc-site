/**
 * Created by yangtmm on 2017-08-30
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Icon, Modal, Form, Progress, Row, Col, Button, Checkbox, Layout } from 'antd';
import './index.less'

//导入action方法
import * as Actions from "../action"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    //this.props.action.getListData();
  }

  render() {
    return (
      <div>
         userlist
      </div>
    )
  }
}

//绑定状态到组件props
function mapStateToProps(state, ownProps) {
  return {
    $$state: state.userlist
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