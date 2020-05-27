import React from 'react';

import "./Box.css";

const Box = (props) => {
  return (
    <div className="box__container">
      <div className="box__imgContainer" style={{backgroundImage: `url(${props.imgUrl})`}}>
      </div>
      <div className="box__textContainer">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Box;