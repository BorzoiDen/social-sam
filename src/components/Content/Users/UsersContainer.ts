import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import {Users, UserType} from "./Users";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersState.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        followUSR: (userID: string) => {
            dispatch(followAC(userID))},
        unfollowUSR: (userID: string) => {
            dispatch(unfollowAC(userID))},
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

type MSTP = {
    users: UserType[]
}

type MDTP = {
    followUSR: (userID: string) => void
    unfollowUSR: (userID: string) => void
    setUsers: (users: any) => void
}

export type CommonPropsType = MSTP & MDTP

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)