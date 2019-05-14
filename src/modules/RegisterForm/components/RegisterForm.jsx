import React, { Component } from 'react';
import { Input, Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Frame } from 'components';

class RegisterForm extends Component {
    render() {
        const success = false;
        return (
            <div>
                <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Необходимо зарегистрироваться</p>
            </div>
            <Frame>
                { !success ? (
                <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item hasFeedback validateStatus="success">      
                    <Input 
                        prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        size='large'
                        placeholder='E-Mail'                            
                    />
                </Form.Item>
                <Form.Item>                            
                    <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        placeholder="Ваше имя" 
                        size="large" 
                    />
                </Form.Item>
                <Form.Item hasFeedback validateStatus="success">      
                    <Input 
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        size='large'
                        type="password" 
                        placeholder="Пароль"                            
                    />
                </Form.Item>
                <Form.Item hasFeedback validateStatus="success">      
                    <Input 
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        size='large'
                        type="password" 
                        placeholder="Повторите пароль"                            
                    />
                </Form.Item>
                <Form.Item>           
                    <Button type="primary" size="large">
                        Войти в аккаунт
                    </Button>                
                </Form.Item>
                    <Link className='auth__reg-link' to='/login'>Войти в аккаунт</Link>
                </Form>) : 
                <div className='auth__success-block'>
                    <div>
                        <Icon style={{ fontSize: '50px' }} type="exclamation-circle" theme="twoTone" />
                    </div>
                    <h2>Подтвердите свой аакаунт</h2>
                    <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                </div> }
            </Frame>
            </div>
        );
    }
}

export default RegisterForm;