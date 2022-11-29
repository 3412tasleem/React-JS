import React from "react";
import { NavLink } from "react-router-dom";
// components
import Button from "./Button";
// icons
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ShortTextIcon from "@material-ui/icons/ShortText";

const four_item_sidebar = () => {
  return (
    <>
      <div className="sidbar_click">
        <div>
          <NavLink
            to="/"
            style={(isActive) => ({
              color: isActive ? "black" : "",

              borderRadius: isActive ? "12px" : "",
              textDecoration: isActive ? "none" : "none",
              width: isActive ? "100%" : "none",
            })}
          >
            <Button text="" logo={<HomeIcon />} />
          </NavLink>
          <p>Home</p>
        </div>
        <div>
          <NavLink
            to="/shorts"
            style={(isActive) => ({
              color: isActive ? "black" : "black",
              backgroundColor: isActive ? "lightgrey" : "",
              borderRadius: isActive ? "12px" : "",
              textDecoration: isActive ? "none" : "none",
              width: isActive ? "100%" : "none",
              height: isActive ? "55px" : "none",
            })}
          >
            <Button text="" logo={<ShortTextIcon />} />
          </NavLink>
          <p>Shorts</p>
        </div>
        <div>
          <Button logo={<SubscriptionsIcon />} />
          <p> Subscriptions</p>
        </div>

        <div>
          <Button logo={<VideoLibraryIcon />} />
          <p>Library</p>
        </div>
      </div>
    </>
  );
};

export default four_item_sidebar;
