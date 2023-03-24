import axios from 'axios';
import DialogsServices from '../../services/DialogsServices'; 
import ActionTypes from '../constants';
import { API_URL } from '../../http';
import { useSelector, useDispatch } from 'react-redux'; 
import { checkAuth, getMe, set_user, set_user_isauth } from './users'; 


export function setActiveDialog(id) {
  return {
    type: ActionTypes.DIALOGS_SET_ACTIVE,
    payload: id
  }
}

export  async function getDialogsRoom(user, dispatch) { 
  try { 
    const join_rooms = await DialogsServices.getDialogsRoom(user.id);  
    const tmp_user = {
      ...user,
      ...join_rooms.data
    } 
  
    dispatch(set_user({...tmp_user})); 
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}
 
export async function getDialogsAll(id,dispatch) {
  try {
    const dialogs = await DialogsServices.getAllDialogs(id);
    console.log(dialogs.data.id);
    return dialogs;
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}
 
export async function createDialog(obj, dispatch) {
  try {
    const dialogs = await DialogsServices.createDialog(obj);
    // console.log(dialogs.data.id);
    return dialogs;
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}
 
// export async function checkAuth (dispatch) {
//     try {
//       const response = await axios.get(`${API_URL}/refresh`, { withCredentials:true })
//       localStorage.setItem('token_pfds',response.data.accessToken);
//       dispatch(set_user(response.data.user));
//       dispatch(set_user_isauth(true));
//     } catch (error) {
//       console.log(error.response?.data?.message)
//       return error.response?.status;
//     }
// }
 