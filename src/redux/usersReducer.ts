import {UserType} from "../components/Content/Users/Users";


type InitStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}


const initialState:InitStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 1
}

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'SET-USERS-COUNT'


const usersReducer = (state = initialState , action: any):typeof initialState => {
    switch (action.type){
        case FOLLOW_USER:
            return {...state,
                users: state.users.map(u => u.id === action.userID?{...u, isFriend: true}:u)
            }
        case UNFOLLOW_USER:
            return {...state,
                users: state.users.map(u => u.id === action.userID?{...u, isFriend: false}:u)
            }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        default: return state
    }
}

export const followAC = (userID: string) => ({userID, type: FOLLOW_USER})
export const unfollowAC = (userID: string) =>({userID, type: UNFOLLOW_USER})
export const setUsersAC = (users: any[]) =>({type: SET_USERS, users})
export const setUsersCountAC = (count: number) =>({type: SET_USERS_COUNT, count})
export const setCurrentPageAC = (currentPage: number) =>({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer;