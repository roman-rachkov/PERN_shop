import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import DeviceList from "../components/DeviceList.jsx";

const Shop = () => {
    return (
        <>
            <Sidebar className="w-p-1/4"/>
            <DeviceList className="w-p-3/4 ml-auto"/>
        </>
    );
};

export default Shop;