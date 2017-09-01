import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import  * as Actions  from 'app/login/main/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'


const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:"",
            password:"",
            token:undefined,
        }
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        const { getFieldsValue } = this.props.form;
        let a = this.props.action;
        this.props.login(getFieldsValue());
    }
    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const userError = isFieldTouched('user') && getFieldError('user');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div className="loginform">
                <Form onSubmit={this.handleSubmit} width={200}>
                    <FormItem
                        validateStatus={userError ? 'error' : ''}
                        help={userError || ''}
                    >
                        {getFieldDecorator('user', {
                            rules: [{ required: true, message: 'Please input your userName!' }],
                        })(
                            <Input placeholder="userName" />
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox >
                                Remember Me
                            </Checkbox>
                        )}
                        <a style={{ float: "right" }} href="">Forgot password</a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                            style={{ width: "100%" }}
                        >
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}



function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => {
        return fieldsError[field]
    });
}


const Login = Form.create()(LoginForm);


class LoginCon extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div style={{ width: "300px" }}>
               <Login login = {this.props.action.login} />
            </div>
        );
    }
}

module.exports = connect(
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
