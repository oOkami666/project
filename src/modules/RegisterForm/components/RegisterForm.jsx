import React from 'react';
import { Input, Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Frame } from 'components';


const success = false;

const RegisterForm = props => {
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
            <h2>Регистрация</h2>
            <p>Необходимо зарегистрироваться</p>
        </div>
        <Frame>
            { !success ? (
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
            <Form.Item>                            
                <Input 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    placeholder="Ваше имя" 
                    size="large" 
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
            <Form.Item 
                hasFeedback 
                validateStatus={!touched.password2 ? '' : errors.password2 ? 'error' : 'success'}
                help={!touched.password2 ? '' : errors.password2}>      
                <Input 
                    id='password2'
                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    size='large'
                    type="password" 
                    placeholder="Повторите пароль"                            
                />
            </Form.Item>
            <Form.Item>
                {dirty && !isValid && <span>Ошибка</span>}           
                <Button onClick={handleSubmit} type="primary" size="large">
                    Зарегистрироваться
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


export default RegisterForm;