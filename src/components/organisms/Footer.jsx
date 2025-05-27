// src/components/organisms/Footer.js
import React from 'react';
import FooterMenu from '../molecules/FooterMenu';
import SocialMediaSection from '../molecules/SocialMediaSection';
import Copyright from '../atoms/Copyright';

const Footer = () => {
    return (
        <footer className="bg-[#333333] py-6 border-t border-gray-200 shadow-sm">
            <div className="container mx-auto text-center">
                {/* Media Sosial */}
                <SocialMediaSection />
                {/* Menu Navigasi Footer */}
                <div className="mt-4">
                <FooterMenu />
                </div>
                {/* Copyright */}
                <div className="mt-4">
                <Copyright />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
