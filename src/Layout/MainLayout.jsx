import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;