import RoomsServices from '../../services/RoomsServices'; 
import ActionTypes from '../constants';
import { API_URL } from '../../http';
import { useSelector, useDispatch } from 'react-redux'; 
import { checkAuth, getMe, set_user, set_user_isauth } from './users'; 


export function setActiveRoom(id) {
  return {
    type: ActionTypes.ROOMS_SET_ACTIVE,
    payload: id
  }
}
 
 
export async function createRoom(obj, dispatch) {
  try {
    const room = await RoomsServices.createRoom(obj);
    // console.log(dialogs.data.id);
    return room;
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}
 
export async function deleteRoom(obj, dispatch) {
  try {
    const deleted = await RoomsServices.deleteRoom(obj);
    // console.log(dialogs.data.id);
    return deleted;
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}