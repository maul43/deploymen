// components/atoms/Logo.js
import React from 'react';

const Logo = ({ title }) => {
    return (
        <div className="flex items-center space-x-2">
            <img
                src="/src/assets/20241125_205254.png" // Ganti dengan path logo Anda
                alt="Logo"
                className="w-10 h-10"/>
            <span className="text-black text-xl font-bold">{title}</span>
        </div>
    );
};

export default Logo;