// src/components/atoms/FooterLink.js
import React from 'react';
import PropTypes from 'prop-types';

const FooterLink = ({ href, label }) => {
    return (
        <a
            href={href}
            className="text-gray-100 hover:text-gray-800 transition duration-200">
            {label}
        </a>
    );
};

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default FooterLink;