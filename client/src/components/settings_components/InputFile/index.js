import React from 'react';
import './style.css';

export default function InputFile(props) {

  const { styles, id, onChange, icon } = props;

  return (
    <div className="input__wrapper">
      <input onChange={(event) => { onChange(event) }} name="file" type="file" id={id} className="input input__file" multiple />
      <label htmlFor={id} className="input__file-button">
          <span className="input__file-icon-wrapper"><img className="input__file-icon" src={icon} alt="Выбрать файл" width="25" /></span>
          <span className="input__file-button-text">Выберите файл</span>
      </label>
    </div>
  );
}