import React from 'react';
import { Input, Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Frame } from 'components';

const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
        <Frame>
            <Form onSubmit={handleSubmit} className='login-form'>
            <Form.Item 
            validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
            hasFeedback
            help={!touched.email ? '' : errors.email}>      
                <Input 
                    id="email"
                    prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    size='large'
                    placeholder='E-Mail'
                    onChange={handleChange} 
                    onBlur={handleBlur}  
                    value={values.email}                         
                />
            </Form.Item>
            <Form.Item 
                validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
                help={!touched.password ? '' : errors.password}
                hasFeedback>      
                <Input 
                    id="password"
                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    size='large'
                    type="password" 
                    placeholder="Пароль"
                    onChange={handleChange} 
                    onBlur={handleBlur}  
                    value={values.password}                             
                />
            </Form.Item>
            <Form.Item>
                {dirty && !isValid && <span>Ошибка</span>}           
                <Button onClick={handleSubmit} type="primary" size="large">
                    Войти в аккаунт
                </Button>                
            </Form.Item>
                <Link className='auth__reg-link' to='/register'>Зарегистрироваться</Link>
            </Form>
        </Frame>
        </div>
    );
}

export default LoginForm;