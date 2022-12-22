import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.navbar}>
        <ul className={s.navbar_list}>
            <li><a>Profile</a></li>
            <li><a>Messages</a></li>
            <li><a>Photos</a></li>
            <li><a>Music</a></li>
            <li><a>Games</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;