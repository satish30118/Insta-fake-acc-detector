import React from "react";
import { Link } from "react-router-dom";

const PredictAccount = () => {
  return (
    <>
      <div className="prediction-page">
        <div className="insta">
        <Link to={"/predict/insta-fake-account"}>
            <img src="https://www.webdew.com/wp-content/uploads/2023/01/Check-for-fake-followers.svg" alt="" />
          </Link>
          <div className="acc-text">Check Fake Account</div>
        </div>
        
        <div className="twitter">
          <Link to={"/predict/tweet-status"}>
            <img src="https://miro.medium.com/v2/resize:fit:1024/1*cNLqgreCvK9hdaTsV6BJMg.png" alt="" />
          </Link>
          <div className="acc-text">Check Sentiment</div>
        </div>
      </div>
    </>
  );
};

export default PredictAccount;
