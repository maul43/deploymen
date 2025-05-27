// src/components/molecules/FooterMenu.js
import React from 'react';
import FooterLink from '../atoms/FooterLink';

const FooterMenu = () => {
    const links = [
        { href: '/about', label: 'Tentang Kami' },
    ];

    return (
        <div className="flex justify-center space-x-6">
            {links.map((link, index) => (
                <FooterLink key={index} href={link.href} label={link.label} />
            ))}
        </div>
    );
};

export default FooterMenu;
