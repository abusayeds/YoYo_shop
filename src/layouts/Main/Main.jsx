import React from 'react';
import Header from '../../components/Header/Header';
import Navber from '../../components/Navber/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <Outlet></Outlet>
            <p>footer</p>
        </div>
    );
};

export default Main;