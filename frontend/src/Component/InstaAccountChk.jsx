import axios from "axios";
import React, { useState } from "react";
import Spinner from "../Animation/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const bg =
  "https://img.freepik.com/premium-photo/instagram-icon-screen-smartphone-mobile-3d-render_41204-14339.jpg";

const InstaAccountChk = () => {
  const [animation, setAnimation] = useState(false);
  const [respose, setResponse] = useState();
  const [data, setData] = useState({});
  const [error, setError] = useState({ lin: "", pic: "" });

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const chkAccount = async (e) => {
    e.preventDefault();
    try {
      const { pos, flw, flg, pic, lin, erl, erc, pr, fo, cs, pi } = data;
      if (
        !pos ||
        !flw ||
        !flg ||
        !pic ||
        !lin ||
        !erl ||
        !erc ||
        !pr ||
        !fo ||
        !cs ||
        !pi
      ) {
        toast.warn("Fill data!");
        return;
      }
      setAnimation(true);
      setResponse("");
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/predict/predict-insta-account`,
        { pos, flw, flg, pic, lin, erl, erc, pr, fo, cs, pi }
      );
      setAnimation(false);

      if (res?.status == 200) {
        // alert(res.data.prediction);
        setResponse(JSON.stringify(res?.data?.prediction));
        // console.log(JSON.stringify(res?.data?.prediction));
        // console.log(respose[2])
      } else {
        alert(res);
      }
    } catch (error) {
      console.log(error);
      setAnimation(false);
      toast.error("Something went wrong, please try again");
    }
  };
  return (
    <>
      <div className="insta-page">
        <img src={bg} alt="" className="insta-page-bg" />
        {/* <div style={{ color: "red", fontWeight: "660" }}>
          {error ? error.pic : ""}
        </div> */}
        <h1 id="insta-head">Fake Instagram Profile Prediction</h1>
        <form>
          <div className="form-data">
            <div>
              <input
                type="number"
                name="pos"
                placeholder="Enter number of Post"
                onChange={handleData}
              />
            </div>
            <div>
              <input
                type="number"
                name="flw"
                onChange={handleData}
                placeholder="Enter number of Follwer"
              />
            </div>
            <div>
              <input
                type="number"
                name="flg"
                onChange={handleData}
                placeholder="Enter number of Following"
              />
            </div>
            <div>
              <input
                type="number"
                name="pic"
                onChange={handleData}
                placeholder="Picture availability (0 if no profile pic, or 1 if has"
              />
            </div>
            <div>
              <input
                type="number"
                name="lin"
                onChange={handleData}
                placeholder="Link availability (0 if no external URL, or 1 if has"
              />
            </div>
            <div>
              <input
                type="number"
                name="erl"
                onChange={handleData}
                placeholder="Engagement rate(Like)"
              />
            </div>
            <div>
              <input
                type="number"
                name="erc"
                onChange={handleData}
                placeholder="Engagement rate (Comments)"
              />
            </div>
            <div>
              <input
                type="number"
                name="pr"
                placeholder="Promotional keywords"
                onChange={handleData}
              />
            </div>
            <div>
              <input
                type="number"
                name="fo"
                placeholder="Followers keywords"
                onChange={handleData}
              />
            </div>
            <div>
              <input
                type="number"
                name="cs"
                onChange={handleData}
                placeholder="Cosine similarity (Average cosine similarity of between all pair of two posts a user has)"
              />
            </div>
            <div>
              <input
                type="number"
                name="pi"
                onChange={handleData}
                placeholder=" Post interval (Average interval between posts (in hours))"
              />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btn" onClick={chkAccount}>
              {animation ? <Spinner /> : "Check"}
            </button>
          </div>
          <div className="result">
            {respose ? (
              respose[2] == 1 ? (
                <img
                  style={{ borderRadius: "300%" }}
                  src="https://en.pimg.jp/055/025/346/1/55025346.jpg"
                />
              ) : (
                <img src="https://cdn-icons-png.flaticon.com/512/5229/5229573.png" />
              )
            ) : (
              ""
            )}
          </div>
        </form>
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

export default InstaAccountChk;
