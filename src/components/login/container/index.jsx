import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import  * as Actions  from '../action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import "./index.less"

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        browserHistory.push('/crmweb')
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入姓名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="姓名" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <div>
          <Button type="primary" disabled={hasErrors(getFieldsError())} htmlType="submit" className="login-form-button">登录</Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);



function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => {
        return fieldsError[field]
    });
}


class LoginCon extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="login-box" >
               <div className="login-bg">
                    <div className="login-tit">Cloud CRM</div>
                    <WrappedNormalLoginForm login = {this.props.action.login} />
               </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            $$state : state.login
        }
    },
    dispatch => {
        return  {
            action : bindActionCreators(Actions,dispatch),
        }
    }
)(LoginCon);
