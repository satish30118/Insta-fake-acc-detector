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
        </div>
        <div className="twitter">
          <Link to={"/predict/tweet-status"}>
            <img src="https://monkeylearn.com/static/6700dcab9bcc691104dd0d794f6e7ef4/Sentiment-analysis-of-Twitter-Social.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PredictAccount;
