import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number,
    name: string
}

type MessagePropsType = {
    message: string;
}

const Dialog = (props: DialogPropsType) =>{
    return(
        <NavLink to={'/dialogs/' + props.id} className={css.names_item} activeClassName={css.active}>{props.name}</NavLink>
    );
}

const Message = (props: MessagePropsType) => {
    return(
        <div className={css.messages_item}>{props.message}</div>
    )
}

const Dialogs = () => {
  return (
      <div className={css.dialogs}>
          <div className={css.names}>
              <Dialog id={1} name={'Анна'}/>
              <Dialog id={2} name={'Андрей'}/>
              <Dialog id={3} name={'Юлия'}/>
              <Dialog id={4} name={'Мария'}/>
              <Dialog id={5} name={'Светлана'}/>
              <Dialog id={6} name={'Сергей'}/>
          </div>
          <div className={css.messages}>
              <Message message={'Привет'}/>
              <Message message={'Как дела?'}/>
              <Message message={'Что нового?'}/>
          </div>
      </div>
  );
}

export default Dialogs;