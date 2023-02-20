import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems'
import Messages from "./Messages/Messages";
import {DialogsDataType} from "../../../redux/store";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type Props = {
    dialogsData: DialogsDataType,
    dispatch: Function
}

export const DialogsContainer = (props: Props) => {

    const onSendButtonClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const updateNewMessageText = (text: string) => {
        props.dispatch(updateNewMessageTextCreator(text))
    }

  return (
      <Dialogs dialogsData={props.dialogsData} onSendButtonClick={onSendButtonClick} updateNewMessageText={updateNewMessageText}/>
  );
}
