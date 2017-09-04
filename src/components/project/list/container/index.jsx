/**
 * Created by ytm
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Icon, Modal, Form, Progress, Row, Col, Button, Checkbox, Layout } from 'antd';

import Query from './Query'
import './index.less'

//导入action方法
import * as Actions from "../action"
//导入ant组件

const { Header, Footer, Sider, Content } = Layout;
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      editIndex: -1,
    }
  }

  componentDidMount() {
    this.props.action.getListData();
  }

  onAdd = () => {
    this.setState({ isEdit: false });
    this.props.action.showForm(true, {});
  }

  onEdit = (record, index) => {
    this.setState({ isEdit: true, editIndex: index });
    //record = getData(pk);
    this.props.action.showForm(true, record, index);
  }

  _onDelete = (record, index) => {
    this.props.action.onDelete(record, index);
  }

  onSave = () => {
    let card = this.formRef.props.form;
    let value = card.getFieldsValue();
    if (value.begintime) {
      value.begintime = value.begintime.format("YYYY-MM-DD hh:mm:ss");
    }
    if (value.owner) {
      //[dev,guankx]
      value.owner = value.owner.map((item, index) => {
        if (index == 0) {
          return {
            key: item,
            value: deptRef[item],
          }
        }
        return {
          key: item,
          value: userRef[item],
        }
      })
    }

    if (this.state.isEdit) {
      this.props.action.onEdit(value, this.state.editIndex);
    }
    else {
      this.props.action.onAdd(value);
    }
  }

  onCancel = () => {
    this.props.action.showForm(false);
  }

  onQuery = () => {
    this.props.action.getListData();
  }

  getTemplate = () => {
    const columns = [
      {
        title: 'operate',
        dataIndex: 'operate',
        key: 'operate',
        width: 100,
        render: (text, record, index) => (
          <span>
            <a href="#" onClick={this.onEdit.bind(this, record, index)}>edit</a>
            <span className="ant-divider" />
            <a href="#" onClick={this._onDelete.bind(this, record, index)}>delete</a>
          </span>
        )
      },
      {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>
      },
      {
        title: '项目类型',
        dataIndex: 'type',
        key: 'type',
        width: 90,
        render: text => typeEnum[text],
      },
      {
        title: '开始时间',
        dataIndex: 'begintime',
        key: 'begintime',
        width: 130,
      },
      {
        title: '项目负责人',
        dataIndex: 'owner',
        key: 'owner',
        render: (value) => {
          
          if (value) {
            let data = value.map((item) => {
              return item.value;
            });
            return data.join("/");
          }
        }
      },
      {
        title: '参与人数',
        dataIndex: 'personnum',
        key: 'personnum',
      },
      {
        title: '是否紧急',
        dataIndex: 'isbusy',
        key: 'isbusy',
        render: (value) => (<Checkbox checked={value == 'Y' || value === true ? true : false} disabled='true' />)
      },
      {
        title: '项目进度',
        dataIndex: 'stage',
        key: 'stage',
        render: (text) => (
          <Progress percent={(text == undefined ? 0 : text) * 100} />
        )
      },

    ];
    return columns;
  }

  render() {
    const template = this.getTemplate();
    const { $$state } = this.props;
    const data = $$state.get("data").toJS();
    const editData = $$state.get("editData").toJS();
    const loading = $$state.get("loading");
    const visible = $$state.get("visible");
    const CardWrap = Form.create()(Card);

    const scheme = [{
      title: "我负责的"
    }, {
      title: "我参与的"
    }, {
      title: "全部项目"
    }];


    return (
      <div>
        <Row>
          <Col span={3}>
            <Button type="primary" className="button" onClick={this.onAdd}>新建项目</Button>

          </Col>
          <Col span={21}>
            <Query />
            <Table columns={template} dataSource={data} />
          </Col>
        </Row>
        {/*编辑新增窗口*/}
        <Modal
          title="新建项目"
          visible={visible}
          onOk={this.onSave.bind(this, CardWrap)}
          onCancel={this.onCancel}
        >
          <CardWrap dataSource={editData} wrappedComponentRef={(inst) => this.formRef = inst} />
        </Modal>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    $$state: state.projectList
  }
}

module.exports = connect(
  state => {
    return {
      $$state: state.projectList
    }
  },
  dispatch => {
    return {
      action : bindActionCreators(Actions,dispatch)
    }
  }
)(List)