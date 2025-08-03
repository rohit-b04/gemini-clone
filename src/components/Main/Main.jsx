import React, { useContext } from "react";
import { assets } from "../../assets/assets";

const Main = () => {

    function sendPrompt() {

    }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can i help you</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={sendPrompt}/>
            </div>
          </div>
          <p className="bottom-info">Gemini may provide inaccurate info. Please verify it before use</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
