import React from 'react';
import DialogNavLinkItem from "../DialogNavLinkItem/DialogNavLinkItem";

export type DialogPropsType = {
    id: number,
    name: string
}

export type DialogItemsType = {
    dialogsData: DialogPropsType[]
}

const DialogItems = (props: DialogItemsType) => {

  return (
      <>
        {props.dialogsData.map(({id,name}: DialogPropsType)=> <DialogNavLinkItem key={id} id={id} name={name}/>)}
      </>
  );
}

export default DialogItems;