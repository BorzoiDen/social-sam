import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {RootState} from "../../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";

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
        setUsers: () => {
            dispatch(setUsersAC([]))
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)