import React from "react";

const Button = (props) => {
  return (
    <div className="home">
      <div className="home_icon">{props.logo}</div>
      <div className="home_text">{props.text}</div>
    </div>
  );
};

export default Button;
