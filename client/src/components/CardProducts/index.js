import React,{ useState } from 'react'; 
import Button from '../Button_';
import InputCardProducts from '../InputCardProducts';
import { HashLink as Link } from 'react-router-hash-link'; 
import { DownloadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Radio } from 'antd';  
import './style.css'

export default function CardProducts(props) {
  const { img, title, description, price, txtbtn, defaultValue } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [weigth, setWeigth] = useState(1);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleSizeChange = (e) => {
    setWeigth(e.target.value);
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
          <span className="price">70 <span className="rub">₽</span></span>
          <InputCardProducts number={price[value].number} />
        </div>   
      </div>
      <div className='buttonContainer'>
        <Button style={{ width: 220, height: 40 }} className="colorGreen" type="primary" block >{txtbtn}</Button> 
      </div>
      <div className='weigthContainer'>
        <div className='partWeigthContainer'>
          <div className='titleWeigth'> Вес: </div>
        </div>
        <div className='partWeigthContainer'>
          <Radio.Group value={weigth} onChange={handleSizeChange}>
            <Radio.Button value={1}>1 кг</Radio.Button>
            <Radio.Button value={10}>10 кг</Radio.Button>
            <Radio.Button value={50}>50 кг</Radio.Button>
          </Radio.Group>
        </div> 
      </div>
    </div>
  ); 
}
 