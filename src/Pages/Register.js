import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Services/postRequest";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    userType: "",
    mobileNo: "",
    mentorExperiance: '',
    mentorDomain: "",
    estimationAmount: '',
    intrestedDomain: "",
  });

  const navigate = useNavigate();

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    register(userData)
      .then((res) => {
        if (res.data.Success) {
          window.alert(res.data.Message);
          sessionStorage.setItem("isAuth", true);
          sessionStorage.setItem("userType", res.data.userType);
          sessionStorage.setItem('username',res.data.username);
          navigate("/");
        } else {
          window.alert(res.data.Message);
        }
      })
      .catch((err) => {
        window.alert(err.response.data.Message);
      });
  };

  if(sessionStorage.getItem('isAuth')){
    navigate('/');
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div
            className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            style={{ marginTop: "4%" }}
          >
            <form onSubmit={onHandleSubmit}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example1"
                  name="username"
                  value={userData.username}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter a user Name"
                  required
                />
                <label className="form-label" for="form3Example1">
                  User Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example2"
                  name="email"
                  value={userData.email}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  required
                />
                <label className="form-label" for="form3Example2">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example3"
                  name="password"
                  value={userData.password}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  required
                />
                <label className="form-label" for="form3Example3">
                  Password
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="text"
                  pattern="[0-9]{10}"
                  name="mobileNo"
                  id="form3Example4"
                  value={userData.mobileNo}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter Mobile No"
                  required
                />
                <label className="form-label" for="form3Example4">
                  Mobile No
                </label>
              </div>
              <div className="form-outline mb-3">
                <select
                  id="form3Example5"
                  name="userType"
                  value={userData.userType}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  required
                >
                  {" "}
                  <option value="">User Type</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Investor">Investor</option>
                  <option value="ProblemSolver">Problem Solver</option>
                </select>
                <label className="form-label" for="form3Example5">
                  User Type
                </label>
              </div>
              {userData.userType === "Investor" && (
                <>
                  <div className="form-outline mb-3">
                    <input
                      type="number"
                      name="estimationAmount"
                      id="form3Example6"
                      value={userData.estimationAmount}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter Estimated Amount"
                      required
                    />
                    <label className="form-label" for="form3Example6">
                      Estimataed Amount
                    </label>
                  </div>
                  <div className="form-outline mb-3">
                    <select
                      id="form3Example7"
                      name="intrestedDomain"
                      value={userData.intrestedDomain}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      required
                    >
                      {" "}
                      <option value="">Intrested Domain</option>
                      <option value="Healthcare">Health Care</option>
                      <option value="WebDevelopment">Web Development</option>
                      <option value="MobileAppDevelopment">
                        Mobile App Development
                      </option>
                    </select>
                    <label className="form-label" for="form3Example7">
                      Intrested Domain
                    </label>
                  </div>
                </>
              )}
              {userData.userType === "Mentor" && (
                <>
                  <div className="form-outline mb-3">
                    <input
                      type="number"
                      name="mentorExperiance"
                      id="form3Example8"
                      value={userData.mentorExperiance}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter Your Experiance in Number"
                      required
                    />
                    <label className="form-label" for="form3Example8">
                      Mentor Experiance
                    </label>
                  </div>
                  <div className="form-outline mb-3">
                    <select
                      id="form3Example9"
                      name="mentorDomain"
                      value={userData.mentorDomain}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      required
                    >
                      {" "}
                      <option value="">Mentor Domain</option>
                      <option value="Healthcare">Health Care</option>
                      <option value="WebDevelopment">Web Development</option>
                      <option value="MobileAppDevelopment">
                        Mobile App Development
                      </option>
                    </select>
                    <label className="form-label" for="form3Example9">
                      Mentor Domain
                    </label>
                  </div>
                </>
              )}

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                {/* <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div> */}
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                >
                  SIGNUP
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="link-danger">
                    LogIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
