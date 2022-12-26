import React from 'react';
import s from './Navbar.module.css';

const Navbar = () =>{
  return (
    <nav className={s.navbar}>
        <ul className={s.navbar_list}>
            <li className={s.navbar_link}><a>Profile</a></li>
            <li className={s.navbar_link}><a>Messages</a></li>
            <li className={s.navbar_link}><a>Photos</a></li>
            <li className={s.navbar_link}><a>Music</a></li>
            <li className={s.navbar_link}><a>Games</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;



