
import React, { Component, PropTypes } from 'react'

//导入ant组件
import { Form ,Input,DatePicker,Cascader,InputNumber,Select,Checkbox  } from 'antd';
import moment from 'moment';

import { typeEnum,people } from 'app/project/valuemap'

const {  RangePicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;
export default class Card extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
        if(this.props.dataSource) {
            let { begintime,owner,type } = this.props.dataSource;

            if(begintime) {
                begintime = moment(begintime,'YYYY-MM-DD hh:mm:ss');
                this.props.dataSource.begintime = begintime
            }
            if(owner) {
                owner = owner.map((item) => {
                    if(item.key) {
                        return item.key;
                    }
                    return item;
                })
                this.props.dataSource.owner = owner;
            }

            this.props.form.setFieldsValue(this.props.dataSource);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };

        getFieldDecorator('stage', {
            rules: [{ required: true, message: 'Please input project name!' }],
        })(
            <Input />
        )
        return (
        <Form >
            <FormItem {...formItemLayout} label="项目名称">
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input project name!' }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="项目类型">
                {getFieldDecorator('type', {
                })(
                    <Select >
                        {
                            Object.keys(typeEnum).map((item) => {
                                return <Option value={item}>{typeEnum[item]}</Option>
                            })
                        }
                    </Select>
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="开始时间">
                {getFieldDecorator('begintime', {})(
                    <DatePicker />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="负责人">
                {getFieldDecorator('owner', {})(
                    <Cascader options={people} placeholder=""/>
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="参与人数">
                {getFieldDecorator('personnum', {})(
                    <InputNumber />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="是否紧急">
                {getFieldDecorator('isbusy', {})(
                    <Checkbox  />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="项目描述">
                {getFieldDecorator('marks', {})(
                    <TextArea autosize="true" /> 
                )}
            </FormItem>
        </Form>
        );
    }
}

module.exports = Form.create()(Card);