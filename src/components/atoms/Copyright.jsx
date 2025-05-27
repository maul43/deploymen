// src/components/atoms/Copyright.js
import React from 'react';

const Copyright = () => {
    return (
        <p className="text-sm text-gray-500 bg-[#333333] py-4 border-t border-gray-200">
            © {new Date().getFullYear()}. All rights reserved.
        </p>
    );
};

export default Copyright;
