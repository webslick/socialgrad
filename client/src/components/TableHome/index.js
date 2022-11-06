import React from 'react';
import './style.css';

function TableHome(props) {
    const { arrColumn } = props; 
    return (
      <section className="wrapper_tablehome" > 
       {
        arrColumn.map((column,keys) => (
          <div key={keys} className="tablehome_item">
            {
              column.map(({ title,value },key) => (
                <div key={key} className="tablehome_col">
                  <div className="tablehome_col_title">{title}</div>
                  <div className="tablehome_col_value">{value}</div>
                </div>
              ))
            } 
          </div>  
        ))
       } 
      </section> 
    );
}

export default TableHome;
