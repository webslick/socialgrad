import React from 'react'; 
import RegistrationButton from '../RegistrationButton';
import { HashLink as Link } from 'react-router-hash-link'; 
import { useDispatch } from 'react-redux';
import './style.css'

export default function CardsPrice(props) {
  const { img, title, description, price, txtbtn, gift } = props;
  const dispatch = useDispatch();
  return (
    <div className="CardsItemWrapper">
      <div className="CardsItemTop">
        <div className="txtCardsName">{title}</div>
        <div className="txtCardsName">{`${price} руб.`}</div>
        <div style={{ color:'#4ca54c', fontSize: '20px',fontWeight:'700'}} className="txtCardsName">{gift}</div> 
      </div>
      <div className="CardsItemBottom"> 
        <div className="txtCardsAbout">{description}</div> 
        <RegistrationButton color={'#5daafd'} margin="20px 0px 0px 0px" text={txtbtn} onClick={() => {}} />
        {/* <Link style={{ textDecoration: 'none' }} to={"/shop"}><OrangeButton margin="20px 0px 0px 0px" text={txtbtn} onClick={() => {}} /></Link>  */}
      </div>
    </div>
  ); 
}
 