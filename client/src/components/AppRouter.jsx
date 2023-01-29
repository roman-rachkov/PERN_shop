import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Shop from "../pages/Shop.jsx";
import DevicePage from "../pages/DevicePage.jsx";
import Auth from "../pages/Auth.jsx";
import Basket from "../pages/Basket.jsx";
import Admin from "../pages/Admin.jsx";
import Error from "../pages/Error.jsx";
import {Context} from "../context/index.js";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    ERROR_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE,
    REGISTRATION_ROUTE
} from "../utils/constants.js";

const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = true;
    return (
        <Routes>
            {
                user.isAuth &&
                <>
                    <Route path={BASKET_ROUTE} element={<Basket/>}/>
                    <Route path={ADMIN_ROUTE} element={<Admin/>}/>
                </>
            }

            <Route path={`${DEVICE_ROUTE}/:id`} element={<DevicePage/>}/>
            <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route path={MAIN_ROUTE} element={<Shop/>}/>
            <Route path={ERROR_ROUTE} element={<Error/>}/>
            <Route path={'*'} element={<Navigate to={'/notfound'}/>}/>
        </Routes>
    );
};

export default AppRouter;