import axios from 'axios';
import DialogsServices from '../../services/DialogsServices'; 
import ActionTypes from '../constants';
import { API_URL } from '../../http';

export function set_user(dialog) {
  return {
    type: ActionTypes.DIALOGS_SET_ITEMS,
    payload: dialog
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
 