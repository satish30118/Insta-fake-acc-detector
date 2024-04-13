import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Fill all data!!");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );

      if (res?.data?.success) {
        toast.success(res.data.message);
        //Forward to dashboard
        navigate(`/dashboard`);
        return;
      } else {
        toast.error(res.data.message);
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again");
    }
  };
  return (
    <div className="signin-page">
      <form>
        <div className="signin-form">
          <h1 className="signin-head">Sign In</h1>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div data-mdb-input-init className="form-outline flex-fill mb-0">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div data-mdb-input-init className="form-outline flex-fill mb-0">
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <label className="form-check-label" for="form2Example3">
              Not have an account?
              <Link to="/sign-up">Register</Link>
            </label>
          </div>
          <div>
            <button type="button" className="m-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <div className="auth-img">
          <img
            src={
              "https://img.freepik.com/premium-vector/young-man-cartoon_18591-44529.jpg?size=626&ext=jpg"
            }
            alt="Sample image"
          />
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
      />
    </div>
  );
};

export default SignIn;
