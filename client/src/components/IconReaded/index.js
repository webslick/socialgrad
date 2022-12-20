import React from "react";
import PropTypes from "prop-types";
import images from "../../assets/images"; 

const { read, noread } = images; 

const IconReaded = ({ isMe, isReaded }) =>
  (isMe &&
    (isReaded ? (
      <img className="message__icon-readed" src={read} alt="Readed icon" />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noread}
        alt="No readed icon"
      />
    ))) ||
  null;

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
};

export default IconReaded;
