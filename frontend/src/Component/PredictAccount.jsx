import React from "react";
import { Link } from "react-router-dom";

const PredictAccount = () => {
  return (
    <>
      <div className="prediction-page">
        <div className="insta">
        <Link to={"/predict/insta-account"}>
            <img src="" alt="" />
          </Link>
        </div>
        <div className="twitter">
          <Link to={"/predict/tweet-status"}>
            <img src="" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PredictAccount;
