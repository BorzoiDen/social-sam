import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems'
import Messages from "./Messages/Messages";
import {DialogsDataType} from "../../../redux/state";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";

export type DialogsType = {
    dialogsState: DialogsDataType,
    dispatch: Function
}

const Dialogs = (props: DialogsType) => {

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }
    const onSendButtonClick = () => {
        props.dispatch(sendMessageCreator())
    }

  return (
      <div className={s.dialogs}>
          <div className={s.names}>
              <DialogItems data={props.dialogsState.dialogsData} />
          </div>
          <div className={s.messages}>
              <Messages data={props.dialogsState.messagesData} />
              <div>
                  <div><textarea value={props.dialogsState.newMessageText} placeholder={'Enter your message'} onChange={onChange}></textarea></div>
                  <div><button onClick={onSendButtonClick}>Отправить</button></div>
              </div>
          </div>
      </div>
  );
}

export default Dialogs;