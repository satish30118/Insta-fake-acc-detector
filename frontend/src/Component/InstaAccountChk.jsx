import axios from "axios";
import React, { useState } from "react";
import Spinner from "../Animation/Spinner";

const InstaAccountChk = () => {
  const [msg, setMsg] = useState("");
  const [animation, setAnimation] = useState(false);
  const [respose, setResponse] = useState();

  const chkSentiment = async (e) => {
    e.preventDefault();
    try {
      if (!msg) {
        alert("Write something!");
        return;
      }

      setAnimation(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/predict/predict-insta-account`,
        { msg }
      );
      setAnimation(false);

      if (res?.status == 200) {
        // alert(res.data.prediction);
        setResponse(res?.data?.prediction);
      } else {
        alert(res);
      }
    } catch (error) {
      console.log(error);
      setAnimation(false);
      alert("Something went wrong, please try again");
    }
  };
  return (
    <>
      <div className="insta-page">
        <h1 id="insta-head">Fake Instagram Profile Prediction</h1>
        <form>
          <div>
            <input type="number" name="pos"  placeholder="Enter number of Post" />
          </div>
          <div>
            <input type="number" name="flw" placeholder="Enter number of Follwer" />
          </div>
          <div>
            <input type="number"name="flg" placeholder="Enter number of Following" />
          </div>
          <div>
            <input type="number" name="pic" placeholder="Picture availability (0 if no profile pic, or 1 if has" />
          </div>
          <div>
            <input type="number" name="lin" placeholder="Link availability (0 if no external URL, or 1 if has" />
          </div>
          <div>
            <input type="number" name="erl" placeholder="Engagement rate(Like)" />
          </div>
          <div>
            <input type="number" name="erc" placeholder="Engagement rate (Comm.)" />
          </div>
          <div>
            <input type="number" name="pr" placeholder="Promotional keywords" />
          </div>
          <div>
            <input type="number" name="fo" placeholder="Followers keywords" />
          </div>
          <div>
            <input type="number" name="cs" placeholder="Cosine similarity (Average cosine similarity of between all pair of two posts a user has)" />
          </div>
          <div>
            <input type="number" name="pi" placeholder=" Post interval (Average interval between posts (in hours))" />
          </div>
          <br />
          <div>
           
          <button className="btn" onClick={chkSentiment}>
            {animation ? <Spinner /> : "Check Sentiment"}
          </button>
        </div>
        </form>
        {/* <div>
          <button className="btn" onClick={chkSentiment}>
            {animation ? <Spinner /> : "Check Sentiment"}
          </button>
        </div> */}
        <div>Result: {respose}</div>
      </div>
    </>
  );
};

export default InstaAccountChk;
