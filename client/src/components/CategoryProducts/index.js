import React,{ useState } from 'react'; 
import Button from '../Button_';
import InputCardProducts from '../InputCardProducts';
import { HashLink as Link } from 'react-router-hash-link'; 
import { DownloadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Select, Col, Row } from 'antd';  
import './style.css'

export default function CategoryProducts(props) {
  const { img, title, description, categories } = props; 
 
  return (
    <Link to={`categories/${categories}`} className="categoryProductWrapper">
      <div className="categoryProductImageContainer">
        <img className="categoryImage" src={img} alt="img" />
      </div>
      <div className="categoryProductContainer"> 
        <div className="txtCategoryName">{title}</div>
        <div className="txtCategoryAbout">{description}</div>   
      </div>
    </Link>
  ); 
}
 