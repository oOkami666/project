import React from 'react';
import { Route } from 'react-router-dom';
import { LoginForm, RegisterForm } from 'modules';

import './Auth.scss';

const Auth = () => (
    <section className='auth'>
        <div className='auth__content'>
        <Route exact path='/register' component={ RegisterForm } />
        <Route exact path={['/', '/login']} component={ LoginForm } />
        </div>
    </section>
);
   
export default Auth;