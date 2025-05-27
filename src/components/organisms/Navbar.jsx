// components/organisms/Navbar.js
import React from 'react';
import Logo from '../atoms/Logo';
import NavMenu from '../molecules/NavMenu';

const Navbar = () => {
    const links = [
        { label: 'ABOUT', href: '/about' },
        { label: 'PROJECT', href: '/projects' },
        { label: 'CONTACT', href: '/contact' },
    ];

    return (
        <header className="bg-[#F8FAFC] shadow-md">
            <div className="container mx-auto flex justify-between items-center py-10 px-6">
                <Logo title="Maul" />
                <NavMenu links={links} />
            </div>
        </header>
    );
};

export default Navbar;
