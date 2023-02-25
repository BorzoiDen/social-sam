
const initialState = {
    users: [{
        id: '1',
        name: 'Denis',
        status: 'my status 1',
        isFriend: true,
        ava: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
        location: {
            country: "Russia",
            city: 'Novosibirsk'
        }
    },
        {id: '2', name: 'Svelana', status: 'my status 2', isFriend: false, ava: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg', location: {country: "Italy", city: 'Rome'}},
        {id: '3', name: 'Nikolay', status: 'my status 3', isFriend: true, ava: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg', location: {country: "Belarus", city: 'Minsk'}}]
}

export type UserType = {
    id: string,
    name: string,
    status: string,
    isFriend: boolean,
    ava: string,
    location: {
        country: string,
        city: string
    }
}

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'


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
            return {...state, users: [...state.users, ...action.users]}


        default: return state
    }
}

export const followAC = (userID: string) => ({userID, type: FOLLOW_USER})
export const unfollowAC = (userID: string) =>({userID, type: UNFOLLOW_USER})
export const setUsersAC = (users: UserType[]) =>({type: SET_USERS, users})


export default usersReducer;