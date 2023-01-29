import React, {useContext} from 'react';
import {Context} from "../context/index.js";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants.js";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <nav className={'min-h-[80px] flex content-center bg-gray-400 sticky top-0'}>
            <div className="container m-auto flex content-center justify-between">
                <NavLink to={MAIN_ROUTE} className={'uppercase font-bold text-xl'}>LOGO</NavLink>
                <ul className="menu flex content-center">
                    <li className={'ml-2'}><NavLink className={'hover:underline'} to={MAIN_ROUTE}>Shop</NavLink></li>
                    {
                        !user.isAuth ?
                            <>
                                <li className={'ml-2'}><NavLink className={'hover:underline'} to={REGISTRATION_ROUTE}>Register</NavLink></li>
                                <li className={'ml-2'}><NavLink className={'hover:underline'} to={LOGIN_ROUTE}>Login</NavLink></li>
                            </>
                            :
                            <>
                                {
                                    user.hasRole('admin') &&
                                    <li className={'ml-2'}><NavLink className={'hover:underline'} to={ADMIN_ROUTE}>Admin</NavLink></li>
                                }
                                <li className={'ml-2'}><NavLink className={'hover:underline'} to={BASKET_ROUTE}>Basket</NavLink></li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    );
});

export default NavBar;