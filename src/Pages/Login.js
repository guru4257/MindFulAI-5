import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    Login(userData)
      .then((res) => {
        if (res.data.Success) {
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
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={onHandleSubmit}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  name="username"
                  value={userData.username}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter a valid user Name"
                />
                <label className="form-label" for="form3Example3">
                  User Name
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  name="password"
                  value={userData.password}
                  onChange={onHandleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" for="form3Example4">
                  Password
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
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-danger">
                    Register
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

export default Login;
