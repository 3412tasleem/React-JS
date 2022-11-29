import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//components
import Four_item_sidebar from "./Four_item_sidebar";

import Button from "./Button";
import Footer from "./Footer";
// import Sidebar_menu from "./Sidebar_menu";

import HomeIcon from "@material-ui/icons/Home";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

import sidebar_icons_data from "../../utils/sidebar_icons_data";
import Header from "./Header";
const Library = () => {
  const [showmore, setShowmore] = useState(true);
  const open = () => {
    setShowmore(!showmore);
  };
  return (
    <>
      <Header />
      <div style={{ color: "red", width: "100%", fontSize: "4vh" }}>
        <p>
          {" "}
          ==================================Library page no exist at this moment
          !! ================================
        </p>
      </div>
      <div className="sidebar">
        <div className="main_subContainer">
          <div className="upper_items">
            <NavLink
              to="/"
              style={(isActive) => ({
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "" : "",
                borderRadius: isActive ? "12px" : "",
                textDecoration: isActive ? "none" : "none",
              })}
            >
              <Button text="Home" logo={<HomeIcon />} />
            </NavLink>

            <NavLink
              to="/Shorts"
              style={(isActive) => ({
                color: isActive ? "black" : "black",
                backgroundColor: isActive ? "lightgrey" : "",
                borderRadius: isActive ? "12px" : "",
                textDecoration: isActive ? "none" : "none",
              })}
            >
              <Button text="Shorts" logo={<ShortTextIcon />} />
            </NavLink>

            <NavLink
              to="/subscriptions"
              style={(isActive) => ({
                color: isActive ? "black" : "black",
                backgroundColor: isActive ? "lightgrey" : "",
                borderRadius: isActive ? "12px" : "",
                textDecoration: isActive ? "none" : "none",
              })}
            >
              <Button text="subcriptions" logo={<SubscriptionsIcon />} />
            </NavLink>
            <div className="dividers" />
            <NavLink
              to="/library"
              style={(isActive) => ({
                color: isActive ? "black" : "black",
                backgroundColor: isActive ? "lightgrey" : "",
                borderRadius: isActive ? "12px" : "",
                textDecoration: isActive ? "none" : "none",
              })}
            >
              <Button text="library" logo={<VideoLibraryIcon />} />
            </NavLink>
            <>
              <Button text="history" logo={<HistoryIcon />} />
              <Button text="your videos" logo={<PersonalVideoIcon />} />
              <Button text="watch lator" logo={<ThumbUpIcon />} />
              <Button text="liked videos" logo={<WatchLaterIcon />} />
            </>
          </div>
          <div className="upper_items">
            Subcriptions
            <Button text="Shorts" logo={<ShortTextIcon />} />
            <Button text="subcriptions" logo={<SubscriptionsIcon />} />
            <div className="divider" />
            <Button text="library" logo={<VideoLibraryIcon />} />
            <Button text="history" logo={<HistoryIcon />} />
            <Button text="your videos" logo={<PersonalVideoIcon />} />
            <Button text="watch lator" logo={<ThumbUpIcon />} />
            <Button text="liked videos" logo={<WatchLaterIcon />} />
            {showmore ? (
              <>
                {sidebar_icons_data.map((data) => (
                  <div className="home">
                    <div className="home_icon">{data.logo}</div>
                    <div className="home_text">{data.text}</div>
                  </div>
                ))}

                <button className="show_less_button" onClick={open}>
                  ^ Show fewer
                </button>
              </>
            ) : (
              <button className="show_less_button" onClick={open}>
                Show more
              </button>
            )}
          </div>
          <div className="upper_items">
            More from YouTube
            <br></br>
            <Button text="your videos" logo={<PersonalVideoIcon />} />
            <Button text="Shorts" logo={<ShortTextIcon />} />
            <Button text="subcriptions" logo={<SubscriptionsIcon />} />
            <div className="divider" />
            <Button text="library" logo={<VideoLibraryIcon />} />
            <div className="dividers" />
            <br></br>
            Explore
            <br></br>
            <Button text="history" logo={<HistoryIcon />} />
            <Button text="your videos" logo={<PersonalVideoIcon />} />
            <Button text="watch lator" logo={<ThumbUpIcon />} />
            <Button text="liked videos" logo={<WatchLaterIcon />} />
          </div>

          <div className="dividers" />
          <Footer />
        </div>
        <Four_item_sidebar />
      </div>
    </>
  );
};

export default Library;
