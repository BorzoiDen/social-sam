
const UPDATE_NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


let initialState = {
    dialogsData: [
        {id: 1, name: 'Анна'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Юлия'},
        {id: 4, name: 'Мария'},
        {id: 5, name: 'Светлана'},
        {id: 6, name: 'Сергей'}
    ],
    messagesData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Что нового?'},
        {id: 3, message: 'Как дела?'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action: SendMessageAC | UpdateNewMessageAC): typeof initialState => {
    //let stateCopy = {...state}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            // stateCopy.newMessageText = action.newText
            // return stateCopy
            return {...state, newMessageText: action.newText}

        case SEND_NEW_MESSAGE:
            let newMessage = state.newMessageText
            return {...state, newMessageText: '', messagesData: [...state.messagesData, {id: 6, message: newMessage}]}

        default: return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE } as const)
export const updateNewMessageTextCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText} as const)
export type SendMessageAC = ReturnType <typeof sendMessageCreator>
export type UpdateNewMessageAC = ReturnType <typeof updateNewMessageTextCreator>
export default dialogsReducer