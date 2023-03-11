import {UserType} from "../components/Content/Users/UsersContainer";

type InitStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}

const initialState:InitStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true
}

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'SET-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

type ActionType = followAT | unfollowAT | setUsersCountAT | setUsersAT | setCurrentPageAT | setIsFetchingAT


const usersReducer = (state = initialState , action: ActionType):typeof initialState => {
    switch (action.type){
        case FOLLOW_USER: {
            return  {...state, users: state.users.map(u => u.id === action.userID?{...u, followed: true}:u )}

        }

        case UNFOLLOW_USER:
            return {...state, users: state.users.map(u => u.id === action.userID?{...u, followed: false}:u )}


        case SET_USERS:
            return {...state, users: action.users}

        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case TOGGLE_FETCHING:
            return {...state, isFetching: action.fetching}

        default: return state
    }
}

export const follow = (userID: string | number ) => ({userID, type: FOLLOW_USER} as const)
export type  followAT = ReturnType <typeof follow>

export const unfollow = (userID: string | number) =>({userID, type: UNFOLLOW_USER} as const)
export type  unfollowAT = ReturnType <typeof unfollow>

export const setUsers = (users: any[]) =>({type: SET_USERS, users} as const)
export type  setUsersAT = ReturnType <typeof setUsers>

export const setUsersCount = (count: number) =>({type: SET_USERS_COUNT, count} as const)
export type  setUsersCountAT = ReturnType <typeof setUsersCount>

export const setCurrentPage = (currentPage: number) =>({type: SET_CURRENT_PAGE, currentPage} as const)
export type  setCurrentPageAT = ReturnType <typeof setCurrentPage>

export const setIsFetching = (fetching: boolean) =>({type: TOGGLE_FETCHING, fetching} as const)
export type  setIsFetchingAT = ReturnType <typeof setIsFetching>

export default usersReducer;