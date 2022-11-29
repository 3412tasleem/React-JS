import React, { useState } from "react";

//components
import Header from "./Header";
import Sidebar_menu from "./Sidebar_menu";
import Home_content from "./Home_content";

const Main_content = () => {
  const [butt_menu, setbutt_menu] = useState(true);
  const okk = () => {
    setbutt_menu(butt_menu);
  };

  return (
    <>
      <Header func={setbutt_menu} />
      <div className="main_content">
        <Sidebar_menu checking={butt_menu} />
        <Home_content checking2={butt_menu} />
      </div>
    </>
  );
};

export default Main_content;
