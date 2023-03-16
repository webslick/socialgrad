import React from 'react';  
import Circle from '../../components/Circle'
import './style.css'

export default function CardsAdvantage(props) {
  const { title, description, count,mobile, fn } = props; 
  return (
    <div className={`${ mobile ? "mobileCardsAdvantageWrapper" : "CardsAdvantageWrapper" }`}>
      <Circle mobile={mobile} count={count} margin={20} />
      <div className="CardsAdvantageLeft">
        <div className={`${ mobile ? "mobileTitleCardsAdvantage" : "titleCardsAdvantage" }`}>{title}</div>
        <div style={mobile ? {textAlign: 'center', fontSize:'19px'} : {}} className="descriptionCardsAdvantage">{description}</div> 
      </div>
    </div>
  ); 
}
 