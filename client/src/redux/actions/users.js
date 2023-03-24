import axios from 'axios';
import AuthServices from '../../services/AuthServices'; 
import ActionTypes from '../constants';
import { API_URL } from '../../http'; 
import moment from 'moment'; 
import UsersServices from '../../services/UsersServices';
import { loader_switch, setWorkData } from '../actions/app';

export function set_user(user) {
  return {
    type: ActionTypes.USERS_PUT_USER,
    payload: user
  }
}

export function set_user_home(users) {
  return {
    type: ActionTypes.USERS_PUT_USERS_HOME,
    payload: users
  }
}

export function set_popup_data(data_popup_login) {
  return {
    type: ActionTypes.LOGIN_DATA_REGISTRATION_VK,
    payload: data_popup_login
  }
}

export function set_user_isauth(isAuth) {
  return {
    type: ActionTypes.USERS_PUT_ISAUTH,
    payload: isAuth
  }
}

export function change_visible_popup(visible) {
  return {
    type: ActionTypes.POPUP_LOGIN_VISIBLE,
    payload: visible
  }
}

export function set_enter_popup(enter) {
  return {
    type: ActionTypes.POPUP_LOGIN_ENTER,
    payload: enter
  }
}

export async function login (login,password,dispatch) {
  try {
    const response = await AuthServices.login(login,password);  
    localStorage.setItem('token_pfds',response.data.user.accessToken); 
    dispatch(set_user(response.data.user));
    dispatch(set_user_isauth(true));
    dispatch(setWorkData(true));  
    dispatch(change_visible_popup(false))
    return response
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}

export async function registration (login, password, name, lastname, gender, email, region, city, district, street, number,dispatch) {
  try {
  
    const response = await AuthServices.registration(login, password, name, lastname, gender, email, region, city, district, street, number); 
 
    // dispatch(set_user(response.data.user));
    // dispatch(set_user_isauth(true));
  } catch (error) {
    console.log(error.response?.data?.message)
    return error.response?.status;
  }
}

export async function checkAuth (dispatch) {
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials:true })
      localStorage.setItem('token_pfds',response.data.accessToken);
      dispatch(set_user(response.data.user));
      dispatch(set_user_isauth(true));
      dispatch(setWorkData(true));  
    } catch (error) {
      console.log(error.response?.data?.message)
      return error.response?.status;
    }
}

export async function logout (dispatch) {
    try { 
      const response = await AuthServices.logout();
      console.log(response,"response logout")
      localStorage.removeItem('token_pfds');
      dispatch(set_user({}));
      dispatch(set_user_isauth(false));
      dispatch(setWorkData(false));  
    } catch (error) {
      console.log(error.response?.data?.message)
    }
} 

export const convertSeconds = (time) => {
  const milliseconds = time%1000;
  const seconds     = parseInt(time=time/1000)%60;
  const minutes     = parseInt(time=time/60)%60;
  const hours       = parseInt(time=time/60)%24;
  const days        =  parseInt(time=time/24);
  return {
    seconds,
    minutes,
    hours,
    days,
  }
}

export const differentsTimeOff = (now,last) => {
  return convertSeconds(moment(last).diff(now));
}

export const convertTimeBd = (time) => {
  return moment(time).subtract(7,'hours').format("YYYY-MM-DD HH:mm");
}

export const getInfoUntilDays = (obj,dispatch) => {
  if(
    obj  
    && Object.keys(obj).length !== 0 
  ) {
 
    let userInfo = JSON.parse(obj.history) 
    let payInfo = userInfo.payInfo  
    let datePay = []; 
    let diffday = 0;
  
    payInfo.map((item, i) => { 
      switch (Number(item.Summ.split('.',1)[0])) {
        case 1: 
          datePay.push({ date:item.Date, payday: 30, diffday: Math.abs(differentsTimeOff (convertTimeBd(moment(item.Date).add(30, 'd')),moment().format()).days)})   
          break;
        case 3000: 
          datePay.push({ date:item.Date, payday: 120, diffday: Math.abs(differentsTimeOff (convertTimeBd(moment(item.Date).add(120, 'd')),moment().format()).days)}) 
          break;
        case 6000: 
          datePay.push({ date:item.Date, payday: 360, diffday: Math.abs(differentsTimeOff (convertTimeBd(moment(item.Date).add(360, 'd')),moment().format()).days)})
          break; 
        default:
          break;
      } 
      return false;
    });
  
    datePay.map(item => diffday += item.diffday);
    dispatch(set_user_untilday(diffday));
  } 
}
 
export function set_restate(restate) {
  return {
    type: ActionTypes.USERS_PUT_RESTATE,
    payload: restate
  }
}
  
export function set_user_untilday(untilDays) {
  return {
    type: ActionTypes.USERS_PUT_UNTILDAY,
    payload: untilDays
  }
}
 
export async function forgot (email,dispatch) {
  try {
    const response = await AuthServices.forgot(email); 
    return response
  } catch (error) { 
    return {
      status:error.response?.status,
      msg:error.response?.data?.message
    };
  }
} 

export async function getMe (dispatch) { 
    try { 
      const response = await axios.get(`${API_URL}/user/me`, { withCredentials:true });
      console.log(response,'clientgetme')
      const user = response.data;  
      return user
    } catch (error) {
      console.log(error.response?.data?.message)
      return error.response?.status;
    }  
} 

export async function getUsersFromHome (city, street, number, dispatch) { 
  try { 
    const response = await UsersServices.getUsersFromHome(city, street, number); 
    dispatch(set_user_home(response)); 
  } catch (error) {
    console.log(error.response?.data?.message)
  }
} 

export async function login_vk (social_login, social_password, id, id_acc, accounts) {
  const account = accounts[id_acc - 1];
  let lock = false;

  try {
    accounts.map((item) => {
      if(item.user_accounts_info.social_login !== undefined) {
        if(item.user_accounts_info.social_login === social_login) { 
          lock = true
        }
      }
      return false
    })
    console.log(lock,'lock');
    if(!lock) { 
      const temp = { ...account }; 
      temp.user_accounts_info = { ...account.user_accounts_info, social_login, social_password, id_acc , user_id: id } 
      // const vk_res = await VkApiServices.writeCardsVk(temp);
      const vk_res = '';
      return vk_res;
    } else {
      return 401;
    }

  } catch (error) {
    console.log(error)
    console.log(error.response?.data?.message)
    return error.response?.status;
  }
}

