// src/templates/MainLayout.js
import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />
            {/* Konten Utama */}
            <main className="flex-grow bg-grey-200">{children}</main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
