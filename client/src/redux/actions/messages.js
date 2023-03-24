import axios from 'axios';
import messagesServices from '../../services/MessagesServices'; 
import ActionTypes from '../constants';
import { API_URL } from '../../http';
import { useSelector, useDispatch } from 'react-redux'; 
import { checkAuth, getMe, set_user, set_user_isauth } from './users'; 
 
export  async function getMessagesRoom(room, user, dispatch) { 
  try {  
    const messages = await messagesServices.getMessagesRoom(room);  
 
    user.join_rooms.map(item => {
      if(item.roomId === room) {
        item.messages = messages.data.messages
      }
    })
 
    dispatch(set_user({...user})); 
  } catch (error) { 
    console.log(error);
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}
 
export async function createRoomMessages(obj, dispatch) {
  try {
    const messages = await messagesServices.createRoomMessages(obj); 
    return messages;
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}
 