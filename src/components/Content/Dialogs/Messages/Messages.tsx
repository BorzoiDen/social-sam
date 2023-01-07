import React from 'react';
import {Message, MessagePropsType} from "./Message/Message";


type MessagesDataType = {
    data : MessagePropsType[]
}

const  Messages = ({data}: MessagesDataType) => {
  return (
      <>
          {data.map((m: MessagePropsType)=> <Message key={m.id} id={m.id} message={m.message}/>)}
      </>
  );
}

export default Messages;