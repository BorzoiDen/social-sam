import React from 'react';
import {UserType} from "../../../redux/usersReducer";
import s from './Users.module.css'

type UsersPropsType = {
    users: UserType[],
    followUSR: (userID: string) => void,
    unfollowUSR: (userID: string) => void,
    setUsers: (users: UserType[]) => void

}

export const Users = (props: UsersPropsType) => {
    // if(props.users.length === 0){
    //     props.setUsers([{
    //             id: '1',
    //             name: 'Denis',
    //             status: 'my status 1',
    //             isFriend: true,
    //             ava: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
    //             location: {
    //                 country: "Russia",
    //                 city: 'Novosibirsk'
    //             }
    //         },
    //         {id: '2', name: 'Svelana', status: 'my status 2', isFriend: false, ava: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg', location: {country: "Italy", city: 'Rome'}},
    //         {id: '3', name: 'Nikolay', status: 'my status 3', isFriend: true, ava: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg', location: {country: "Belarus", city: 'Minsk'}}])
    // }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.userBlock}>
                        <div className={s.userImg}>
                            <img className={s.avatar} src={u.ava} alt={s.avatar}/>
                            {u.isFriend
                                ?<button className={s.buttonFollow} onClick={()=>{props.unfollowUSR(u.id)}}>UNFOLLOW</button>
                                :<button className={s.buttonFollow} onClick={()=>{props.followUSR(u.id)}}>FOLLOW</button>
                            }
                        </div>
                        <div className={s.userInfo}>
                            <span className={s.userName}>{u.name}</span>
                            <span className={s.userStatus}>{u.status}</span>
                            <span className={s.userCountry}>{u.location.country}</span>
                            <span className={s.userCity}>{u.location.city}</span>
                        </div>
                    </div>
                </div> )
            }
        </div>
    );
};

