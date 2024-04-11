import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [animation, setAnimation] = useState(false)
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
      alert("Fill all data!!");
      return;
    }

    if (password !== cpassword) {
      alert("Password and Confirm password are not same");
      return;
    }

    try {
     
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password }
      );

      if (res.status === 201) {
        alert(res.data.message);
        //Forward to dashboard
        navigate(`/predict-account`);
        return;
      } else {
        alert(res.data.message);
        return;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try again");
    }
  };

  return (
    <>
      <div className="signup-form">
        <section
          className="vh-100"
          style={{ backgroundColor: "rgb(118, 207, 207)" }}
        >
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5 mb-1">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-1">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input type="text" placeholder="Enter Name" name="name" onChange={handleData}/>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input type="email" placeholder="Enter email" name="email" onChange={handleData}/>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
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
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="password"
                                placeholder="Re-enter Password"
                                name="cpassword"
                                onChange={handleData}
                              />
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            
                            <label
                              className="form-check-label"
                              for="form2Example3"
                            >
                              Already have an Account?
                              <Link to="/sign-in">Login</Link>
                            </label>
                            <label
                              className="form-check-label"
                              for="form2Example3"
                            >
                              Predict Insta fake Account?
                              <Link to="/predict/insta-fake-account">
                                Insta
                              </Link>
                            </label>
                            <label
                              className="form-check-label"
                              for="form2Example3"
                            >
                              Predict tweet sentiment?
                              <Link to="/predict/tweet-status">Tweet</Link>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-lg"
                              onClick={sendData}
                            >
                              Register
                            </button>
                          </div>
                        </form>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
