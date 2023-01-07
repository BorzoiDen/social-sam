import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./DialogNavLinkItem.module.css";
import {DialogPropsType} from "../DialogItems/DialogItems";

const DialogNavLinkItem = (props: DialogPropsType) =>{
    return(
        <NavLink to={'/dialogs/' + props.id} className={css.names_item} activeClassName={css.active}>{props.name}</NavLink>
    );
}

export default DialogNavLinkItem;