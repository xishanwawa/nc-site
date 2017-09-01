/**
 * Created by ytm
 */

import React, { Component, PropTypes } from 'react'

//导入ant组件
import { Select, DatePicker, Button, Row} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;

export default class Query extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

    render() {
      return (
      	<div className="querypanel" >
            <Row>
                <span className='queryitem'>项目状态</span>
                <Select defaultValue="1" style={{ width: 120 }} >
                    <Option value="0">未开始</Option>
                    <Option value="1">进行中</Option>
                    <Option value="2">已完成</Option>
                </Select>
               
                <span className='queryitem'>项目级别</span>
                <Select defaultValue="1" style={{ width: 120 }} >
                    <Option value="0">轻微</Option>
                    <Option value="1">中等</Option>
                    <Option value="2">重要</Option>
                </Select>
                
                <span className='queryitem'>开始时间</span>
                <RangePicker />
                <Button type="primary" className="queryitem" onClick={this.props.onSearch}>查询</Button>
                
            </Row>
        </div>
      )
    }
}