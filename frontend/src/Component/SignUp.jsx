import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [otp, setOtp] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = data;

    if (!name || !email || !password || !cpassword) {
      toast.warn("Fill all data!!");
      return;
    }

    if (password !== cpassword) {
      toast.warn("Password and Confirm password are not same");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password }
      );

      if (res.status === 201) {
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
    <>
      <div className="signin-page">
        <form>
          <div className="signin-form">
            <h1 className="signin-head">Sign Up</h1>
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleData}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleData}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleData}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <div data-mdb-input-init className="form-outline flex-fill mb-0">
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  name="cpassword"
                  onChange={handleData}
                />
              </div>
            </div>

            <div className="form-check d-flex justify-content-center mb-5">
              <label className="form-check-label" for="form2Example3">
                Already have an Account?
                <Link to="/sign-in">Login</Link>
              </label>
            </div>
            <div>
              <button type="button" className="m-btn" onClick={sendData}>
                Register
              </button>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img
              src={
                "https://img.freepik.com/premium-vector/young-woman-cartoon_18591-42804.jpg"
              }
              className="img-fluid"
              alt="Sample image"
            />
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

export default SignUp;
