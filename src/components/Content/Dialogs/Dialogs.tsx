import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from './DialogItems/DialogItems'
import Messages from "./Messages/Messages";


let dialogsData = [
    {id: 1, name: 'Анна'},
    {id: 2, name: 'Андрей'},
    {id: 3, name: 'Юлия'},
    {id: 4, name: 'Мария'},
    {id: 5, name: 'Светлана'},
    {id: 6, name: 'Сергей'}
]

let messagesData = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Что нового?'},
    {id: 3, message: 'Как дела?'}
]


const Dialogs = () => {
  return (
      <div className={css.dialogs}>
          <div className={css.names}>
              <DialogItems data={dialogsData} />
          </div>
          <div className={css.messages}>
              <Messages data={messagesData} />
          </div>
      </div>
  );
}

export default Dialogs;