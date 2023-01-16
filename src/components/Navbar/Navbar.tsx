import * as React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {FriendType} from "./Friends/Friend/Friend";

export type NavbarType = {
    navbarState : FriendType[]
}

const Navbar = (props: NavbarType) =>{
  return (
      <>
          <nav className={css.navbar}>
              <NavLink to={'/profile'} className={css.navbar_item} activeClassName={css.active}>Profile</NavLink>
              <NavLink to={'/dialogs'} className={css.navbar_item} activeClassName={css.active}>Messages</NavLink>
              <NavLink to={'/photos'} className={css.navbar_item} activeClassName={css.active}>Photos</NavLink>
              <NavLink to={'/music'} className={css.navbar_item} activeClassName={css.active}>Music</NavLink>
              <NavLink to={'/games'} className={css.navbar_item} activeClassName={css.active}>Games</NavLink>
              <NavLink to={'/settings'} className={css.navbar_item} activeClassName={css.active}>Settings</NavLink>
              <Friends friendsProps={props.navbarState}/>
          </nav>
      </>

  );
}
export default Navbar;


