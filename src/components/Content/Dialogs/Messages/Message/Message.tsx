import React from 'react';
import css from '../../Dialogs.module.css';

export type MessagePropsType = {
    id: number
    message: string;
}

export const Message = (props: MessagePropsType) => {
    return(
        <div className={css.messages_item}>{props.message}</div>
    )
}
