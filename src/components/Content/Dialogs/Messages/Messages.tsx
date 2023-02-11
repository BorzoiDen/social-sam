import React from 'react';
import {Message, MessagePropsType} from "./Message/Message";
import s from './messages.module.css'

type MessagesDataType = {
    data : MessagePropsType[]
}

const  Messages = ({data}: MessagesDataType) => {
  return (
      <div className={s.messages}>
          {data.map((m: MessagePropsType)=> <Message key={m.id} id={m.id} message={m.message}/>)}
      </div>
  );
}

export default Messages;