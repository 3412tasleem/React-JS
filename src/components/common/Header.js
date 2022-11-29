// Init
import React from "react";
// icons
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
// image
import account_profile from "../../assets/header/account_profile.jpg";

const Header = (props) => {
  const click = () => {
    props.func((p) => !p);
  };

  return (
    <div className="header_container">
      {/* header start  */}
      <div className="header_start">
        <div className="header_subStart">
          <div className="sidbar_menu_button" onClick={click}>
            <MenuIcon />
          </div>
          <div className="youtube_logo">
            <YouTubeIcon fontSize="large" className="YouTubeIcon" />
            <div className="youtube_text">YouTube</div>
          </div>
        </div>
      </div>

      {/* header center  */}

      <div className="header_center">
        <div className="header_subCenter">
          <div className="search_box">
            <div className="search_box_input">
              <div className="input_dive">
                <input type="text" placeholder="Search" />
              </div>
              <div className="search_icon">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="mic_icon">
            <MicIcon />
          </div>
        </div>
      </div>

      {/* header end  */}

      <div className="header_end">
        <div className="header_Subend">
          <div className="video_creater">
            <VideoCallIcon />
          </div>
          <div className="notification">
            <NotificationsIcon />
          </div>
          <div className={"account_profile" || "home"}>
            <img src={account_profile} alt="account_profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
