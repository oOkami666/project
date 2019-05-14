import React, { Component } from 'react';
import { Input, Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Frame } from 'components';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Frame>
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item hasFeedback validateStatus="success">      
                    <Input 
                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        size='large'
                        placeholder='Username'                            
                    />
                </Form.Item>
                <Form.Item>                            
                    <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        type="password" 
                        placeholder="Password"
                        size="large" 
                    />
                </Form.Item>
                <Form.Item>           
                    <Button type="primary" size="large">
                        Войти в аккаунт
                    </Button>                
                </Form.Item>
                    <Link className='auth__reg-link' to='/register'>Зарегистрироваться</Link>
            </Form>
            </Frame>
            </div>
        );
    }
}

export default LoginForm;