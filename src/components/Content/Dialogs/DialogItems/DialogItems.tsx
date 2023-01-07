import React from 'react';
import DialogNavLinkItem from "../DialogNavLinkItem/DialogNavLinkItem";

export type DialogPropsType = {
    id: number,
    name: string
}

export type DialogItemsType = {
    data: DialogPropsType[]
}

const DialogItems = ({data}: DialogItemsType) => {

  return (
      <>
        {data.map(({id,name}: DialogPropsType)=> <DialogNavLinkItem key={id} id={id} name={name}/>)}
      </>
  );
}

export default DialogItems;