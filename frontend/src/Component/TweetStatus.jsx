import axios from "axios";
import React, { useState } from "react";
import Spinner from "../Animation/Spinner";

const TweetStatus = () => {
  const [msg, setMsg] = useState("");
  const [animation, setAnimation] = useState(false);
  const [respose, setResponse] = useState();
  const [length, setLength] = useState("");

  const chkSentiment = async (e) => {
    e.preventDefault();
    try {
      setResponse("");
      if (!msg) {
        alert("Write something!");
        return;
      }

      setAnimation(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/predict/predict-tweet-status`,
        { msg }
      );
      setAnimation(false);

      if (res?.status == 200) {
        // alert(res.data.prediction);
        setResponse(res?.data?.prediction);
        setLength(res?.data?.prediction.length - 2);
        // console.log(length)
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
      <div className="tweet-status">
        <form>
          <div>
            <textarea onChange={(e) => setMsg(e.target.value)}>
              Enter tweet here...
            </textarea>
          </div>
          <div>
            <button className="btn" onClick={chkSentiment}>
              {animation ? <Spinner /> : "Check Sentiment"}
            </button>
          </div>
        </form>
        <div style={{ fontWeight: "700", fontSize: "23px" }}>
          {respose ? `${respose.substring(2, length)}` : " "}
        </div>
      </div>
    </>
  );
};

export default TweetStatus;
