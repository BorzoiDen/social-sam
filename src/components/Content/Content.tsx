import React from 'react';
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";


const Content = () => {
  return (
      <div className={s.content}>
          <Profile />
          <Dialogs />
      </div>
  );
}

export default Content;