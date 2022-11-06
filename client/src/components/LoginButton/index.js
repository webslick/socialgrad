import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { change_visible_popup } from '../../redux/actions/users';
import { popup_login } from '../../redux/selectors';

function LoginButton(props) {
    const { text, width, height } = props;
    const dispatch = useDispatch();

    const popup_visible = useSelector(popup_login.popup_visible); 

    return ( 
      <div  
        className="buttonLoginContainer"
        onClick={ () => { dispatch(change_visible_popup(!popup_visible)) }}
      >
        <div className="buttonLogin py-2 px-3">{ text }</div>
      </div>
    );
}

export default LoginButton;
