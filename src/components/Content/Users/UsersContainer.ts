import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../../redux/usersReducer";
import {Users, UserType} from "./Users";

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

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)