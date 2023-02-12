const UPDATE_NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_NEW_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id: 6, message: newMessage});
            return state
        default: return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE})
export const updateNewMessageTextCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText})

export default  dialogsReducer;