import { combineReducers } from 'redux';
import users from './users'; 
import pages from './pages'; 
import popup_login from './popup_login';
import loader from './loader';  
import app from './app'; 


const rootReducer = combineReducers({
  users,
  app, 
  pages, 
  popup_login,
  loader   
});

export default rootReducer;