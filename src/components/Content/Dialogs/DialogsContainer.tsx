import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootState) => {
   const {dialogsData} = state
   return {
        dialogsData: dialogsData
   }
}
let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextCreator(text))},
        onSendButtonClick: () => {
            dispatch(sendMessageCreator())}
    }
}

export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)