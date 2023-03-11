import React from 'react';
import s from "../Users/Users.module.css";
import preloader from "../../../img/loader.gif";

type PreloaderPropsType = {
    null: any
}


export const Preloader = (props: any) => {
    return (
        <img className={s.usersLoader} src={preloader} alt={'loading...'}/>
    );
};
