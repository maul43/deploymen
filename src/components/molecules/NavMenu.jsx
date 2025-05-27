// components/molecules/NavMenu.js
import React from 'react';
import NavLink from '../atoms/NavLink';

const NavMenu = ({ links }) => {
    return (
        <nav className="flex space-x-8">
            {links.map((link, index) => (
                <NavLink key={index} label={link.label} href={link.href} />
            ))}
        </nav>
    );
};

export default NavMenu;
