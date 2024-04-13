import axios from "axios";
import React, { useState } from "react";
import Spinner from "../Animation/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TweetStatus = () => {
  const [msg, setMsg] = useState("");
  const [animation, setAnimation] = useState(false);
  const [respose, setResponse] = useState();
  const [length, setLength] = useState();

  const chkSentiment = async (e) => {
    e.preventDefault();
    try {
      setResponse("");
      if (!msg) {
        toast.warn("Write something!");
        return;
      }

      setAnimation(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/predict/predict-tweet-status`,
        { msg }
      );
      setAnimation(false);

      if (res?.status == 200) {
        // toast.success(res.data.prediction);
        setResponse(JSON.stringify(res?.data?.prediction));
        setLength(res?.data?.prediction.length - 3);
        // console.log(typeof(JSON.stringify(res?.data?.prediction)))
        // console.log((res?.data?.prediction))
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
        <div className="overlay"></div>
        <img
          src="https://usersnap.com/blog/wp-content/uploads/2022/09/Your-ultimate-guide-to-tools-for-sentiment-analysis-in-2022-1280x720.png"
          alt=""
        />

        <form>
          <div>
            <textarea
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Enter text here..."
            ></textarea>
          </div>
          <div>
            <button className="btn" onClick={chkSentiment}>
              {animation ? (
                <div style={{ color: "white" }}>
                  <Spinner />
                </div>
              ) : (
                "Check Sentiment"
              )}
            </button>
          </div>
        </form>
        <div
          style={{
            width: "190px",
            height: "70px",
            borderRadius: "10px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "23px",
            color: "white",
            display: "flex",
            visibility: `${respose ? "visible" : "hidden"}`,
            justifyContent: "center",
            alignItems: "center",
            textTransform:"uppercase"
          }}
          id="tweet-result"
        >
          {respose ? `${respose.substring(3, length)}` : " "}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
      />
    </>
  );
};

export default TweetStatus;
