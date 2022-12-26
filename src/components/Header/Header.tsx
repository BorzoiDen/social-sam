import React from 'react';
import s from './Header.module.css';
import logo from '../../img/13.png';

const Header = () => {
    return (
        <header className={s.header}>
            <a><img className={s.logo} src={logo} alt="logo"/></a>
        </header>
    );
}

export default Header;