import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  function inputChangeHandler(event) {
    setInput(event.target.value);
    
  }
  //console.log(input)
  function sendPrompt() {
    // console.log(input);
    onSent(input);
    setInput("");
  }

  return (
    <div className="main">
      {/* {console.log('rendering main')} */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <div className="greet">
            <p>
              <span>Hello, Dev.</span>
            </p>
            <p>How can i help you</p>
          </div>
        ) : (
          <div className="result"> <div className="result-title">
            <img src={assets.user_icon} alt="" /></div> </div>
        )}
        {!showResult && (
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
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={inputChangeHandler}
              type="text"
              placeholder="Enter a prompt here"
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={sendPrompt} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may provide inaccurate info. Please verify it before use
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
