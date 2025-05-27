// components/atoms/NavLink.js
import React from 'react';

const NavLink = ({ label, href }) => {
    return (
        <a
            href={href}
            className="text-black hover:text-gray-700 transition duration-200 text-lg font-medium">
            {label}
        </a>
    );
};

export default NavLink;