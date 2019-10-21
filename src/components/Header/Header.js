import React from 'react';
import logo from '../../logo.svg';

function Header () {
    return (
    <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
    </header>
    )
}

export default Header;