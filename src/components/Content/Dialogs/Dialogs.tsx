import React from 'react';
import css from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems'
import Messages from "./Messages/Messages";
import {DialogsDataType} from "../../../state";

export type DialogsType = {
    dialogsState: DialogsDataType
}

const Dialogs = ({dialogsState}: DialogsType) => {
    const {dialogsData, messagesData} = dialogsState
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