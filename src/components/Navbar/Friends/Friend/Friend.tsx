import React from 'react';
import s from './Friend.module.css'

export type FriendType = {
    id : number,
    src: string,
    name: string
}

const Friend = (props: FriendType) => {
    return (
        <a href={'#'} key={props.id} className={s.friendItem}>
            <img src={props.src} className={s.friendAvatar} alt={'friendAvatar'}/>
            <span className={s.friendAName}>{props.name}</span>
        </a>
    );
};

export default Friend;