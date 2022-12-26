import React from 'react';
import s from './Footer.module.css';
import logo from '../../img/13.png';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <a><img className={s.logo} src={logo} alt="logo"/></a>
        </footer>
    );
}

