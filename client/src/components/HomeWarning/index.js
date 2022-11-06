import React from 'react';
import './style.css';

function HomeWarning(props) {
    const { title, description, titletwo, descriptiontwo } = props;
    return (
      <div className="wrapper_homewarning">
        <div className="alert_homewarning">
          <div className="column_homewarning_top">
            <span className="bold">{title}</span>
            <span>{description}</span>
          </div>
          <div className="column_homewarning_bottom">
            <span className="bold">{titletwo}</span>
            <span>
            {descriptiontwo}
              {/* <a href="#">ООО "Служба заказчика ЖКХ  Ленинского района"</a> */}
            </span>
          </div>
        </div>
      </div>
    );
}

export default HomeWarning;
