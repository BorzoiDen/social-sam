import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../../img/user.jpg";



export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: any[]
    unfollowUSR: (id: string) => void
    followUSR: (id: string) => void
}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>

            {pages.map((p, index) => <span key={index} onClick={()=> props.onPageChanged(p)} className={props.currentPage === p? s.selectedPage: ''}>{" " + p + " "}</span>)}

            {
                props.users.map((u: any) => <div key={u.id}>
                    <div className={s.userBlock}>
                        <div className={s.userImg}>
                            <img className={s.avatar} src={u.photos.small?u.photos.small:userPhoto} alt={'avatar'}/>
                            {u.followed
                                ? <button className={s.buttonFollow} onClick={() => {
                                    props.unfollowUSR(u.id)
                                }}>UNFOLLOW</button>
                                : <button className={s.buttonFollow} onClick={() => {
                                    props.followUSR(u.id)
                                }}>FOLLOW</button>
                            }
                        </div>
                        <div className={s.userInfo}>
                            <span className={s.userName}>{u.name}</span>
                            <span className={s.userStatus}>{u.status}</span>
                            <span className={s.userCountry}>{"u.location.country"}</span>
                            <span className={s.userCity}>{'u.location.city'}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};