import React,{ useState } from 'react'; 
import Button from '../Button_';
import InputCardProducts from '../InputCardProducts';
import { HashLink as Link } from 'react-router-hash-link'; 
import { DownloadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Select, Col, Row } from 'antd';  
import './style.css'

export default function CardProducts(props) {
  const { img, title, description, price, txtbtn, defaultValue } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
 
  console.log(price[value].number)
  return (
    <div className="cardProductWrapper">
      <div className="cardProductImageContainer">
        <img className="cardImage" src={img} alt="img" />
      </div>
      <div className="cardProductRadioContainer"> 
        <div className="txtCardsName">{title}</div>
        <div className="txtCardsAbout">{description}</div>  
        <div className="radioContainer">
        <Select
          defaultValue={defaultValue} 
          onChange={handleChange}
          options={price}
        /> 
        <InputCardProducts number={price[value].number} />
        </div>   
      </div>
      <div className='buttonContainer'>
        <Button className="colorGreen" type="primary" size="midle" block >{txtbtn}</Button> 
      </div>
    </div>
  ); 
}
 