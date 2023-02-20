import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems'
import Messages from "./Messages/Messages";
import {DialogsDataType} from "../../../redux/store";


export type DialogsType = {
    dialogsData: DialogsDataType,
    updateNewMessageText:(text: string) => void
    onSendButtonClick: () => void
}

const Dialogs = (props: DialogsType) => {

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewMessageText(text)
    }
    const onSendButtonClick = () => {
        props.onSendButtonClick()
    }

  return (
      <div className={s.dialogs}>
          <div className={s.names}>
              <DialogItems dialogsData={props.dialogsData.dialogsData} />
          </div>
          <div className={s.messages}>
              <Messages messagesData={props.dialogsData.messagesData} />
              <div>
                  <div><textarea value={props.dialogsData.newMessageText} placeholder={'Enter your message'} onChange={onChange}></textarea></div>
                  <div><button onClick={onSendButtonClick}>Отправить</button></div>
              </div>
          </div>
      </div>
  );
}

export default Dialogs;