import React, { useEffect, useState } from "react";

const Card = (props) => {
  return (
    <div className="cards_outer">
      <div className="cards_view">
        <div className="cards_img">
          <img src={props.pic} />
        </div>
        <div className="logo_discrip">
          <div className="upper_div">
            <div className="logo">
              <img src={props.logo} alt="" />
            </div>
            <div className="cards_discrip_outer">
              <div className="cards_description">
                {props.description
                  ? props.description.slice(0, 20) + "..."
                  : ""}
              </div>

              <div className="name_views_div">
                <div className="channal_name">
                  {props ? props.title.slice(0, 20) + "..." : ""}
                </div>
                <div className="Views">
                  {'" MovieDuration ' + props.durationInSeconds}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
