import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import userPhoto from "../../../img/user.jpg"
import {CommonPropsType} from "./UsersContainer";

type UsersPropsType = {
    users: any[],
    followUSR: (userID: string) => void,
    unfollowUSR: (userID: string) => void,
    setUsers: (users: any[]) => void
}


export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean

}


export type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}


export class Users extends React.Component<CommonPropsType> {


    componentDidMount() {
        axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => this.props.setUsers(response.data.items))
    }

    render() {
        return <div>
            {
                this.props.users.map((u: any) => <div key={u.id}>
                    <div className={s.userBlock}>
                        <div className={s.userImg}>
                            <img className={s.avatar} src={userPhoto} alt={'avatar'}/>
                            {u.isFriend
                                ? <button className={s.buttonFollow} onClick={() => {
                                    this.props.unfollowUSR(u.id)
                                }}>UNFOLLOW</button>
                                : <button className={s.buttonFollow} onClick={() => {
                                    this.props.followUSR(u.id)
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
    }
}
