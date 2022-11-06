import React,{ useState } from 'react';  
import { HashLink as Link } from 'react-router-hash-link';   
import './style.css'

export default function CategoryProducts(props) {
  const { img, title, description, categories } = props; 
 
  return (
    <Link to={`categories/${categories}`} className="categoryProductWrapper noselect">
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
 