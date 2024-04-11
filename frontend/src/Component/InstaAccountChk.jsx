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
        <form>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
          <div>
            <input type="text" placeholder="" />
          </div>
        </form>
        <div>
          <button className="btn" onClick={chkSentiment}>
            {animation ? <Spinner /> : "Check Sentiment"}
          </button>
        </div>
        <div>Result: {respose}</div>
      </div>
    </>
  );
};

export default InstaAccountChk;
