import ava1 from "../img/781.jpg";
import ava2 from "../img/769.jpg";
import ava3 from "../img/785.jpg";
import {FriendType} from "../components/Navbar/Friends/Friend/Friend";

type InitialState = {
    friendList: FriendType[]
}

const initialState = {
    friendList: [
        {
            id: 1,
            src: ava1,
            name: 'Julia'
        },
        {
            id: 2,
            src: ava2,
            name: 'Sergio'
        },
        {
            id: 3,
            src: ava3,
            name: 'Anna'
        },
    ]
}



const navbarReducer = (state = initialState, action: {type: string}) => {
    return state
}

export default  navbarReducer;