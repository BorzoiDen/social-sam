import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../../redux/usersReducer";
import React from 'react';
import axios from "axios";
import {Users} from "./Users";

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

export class UsersContain extends React.Component<CommonPropsType> {

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

        return <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollowUSR={this.props.unfollowUSR}
        followUSR={this.props.followUSR}
        />
    }
}


let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersState.users,
        pageSize: state.usersState.pageSize,
        totalUsersCount: state.usersState.totalUsersCount,
        currentPage: state.usersState.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        followUSR: (userID: string) => dispatch(followAC(userID)),
        unfollowUSR: (userID: string) => dispatch(unfollowAC(userID)),
        setUsers: (users: any) => dispatch(setUsersAC(users)),
        setUsersCount: (count: number) => dispatch(setUsersCountAC(count)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
    }
}

type MSTP = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type MDTP = {
    followUSR: (userID: string) => void
    unfollowUSR: (userID: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (count: number) => void
}

export type CommonPropsType = MSTP & MDTP

export let UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(UsersContain)