import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Layout = () => {
    useScrollAnimation();

    return (
        <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
