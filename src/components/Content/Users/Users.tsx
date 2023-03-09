import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import userPhoto from "../../../img/user.jpg"
import {CommonPropsType} from "./UsersContainer";

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
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((response) => this.props.setUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>

            {pages.map(p => <span onClick={()=> this.onPageChanged(p)} className={this.props.currentPage === p? s.selectedPage: ''}>{" " + p + " "}</span>)}

            {
                this.props.users.map((u: any) => <div key={u.id}>
                    <div className={s.userBlock}>
                        <div className={s.userImg}>
                            <img className={s.avatar} src={userPhoto} alt={'avatar'}/>
                            {u.followed
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
