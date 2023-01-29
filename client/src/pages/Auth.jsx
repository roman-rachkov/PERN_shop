import React from 'react';
import InputField from "../components/UI/InputField.jsx";
import Button from "../components/UI/Button.jsx";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants.js";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const submit = (event) => {
        event.preventDefault();

    }
    return (
        <div className={'mx-auto self-center flex content-center justify-center'}>
            <form onSubmit={submit} className="form border border-gray-400 rounded-lg p-[35px] flex flex-col ">
                <h1 className='text-center text-2xl font-bold mb-3'>
                    {isLogin ? 'Login' : 'Registration'}
                </h1>
                <InputField autoComplete='email' type='email' className='mb-2' placeholder='E-mail'/>
                <InputField autoComplete='password' type="password" placeholder='Password' className='mb-2'/>
                <div className='flex content-center flex-wrap'>
                    <Button type='submit'>{isLogin ? 'Login' : 'Register'}</Button>
                    <p className='block my-auto ml-1'>or <NavLink
                        to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} className='text-violet-500 hover:text-violet-300'>{!isLogin ? 'Login' : 'Register'}</NavLink></p>
                </div>
            </form>
        </div>
    );
};

export default Auth;