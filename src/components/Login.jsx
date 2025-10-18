import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate= useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password =form.password.value;

    // Get users from localstorage
    const users=JSON.parse(localStorage.getItem("users"))||[];

    // Check if user exists and password matches
    const validUser=users.find(
      (user)=>user.email===email&&user.password===password
    );
    if(validUser){
      alert(`Welcome back ${validUser.name}!`);
      // store logged in user
      localStorage.setItem("loggedInUser",JSON.stringify(validUser));
      // redirect to homepage 
      navigate("/");
    }
    else{
      alert("Invalid email or password");
    }
  };
const handleRegister = () =>{

}
  return (
    <div className="m-5 p-5">
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title text-center">Login</h3>

            {/* ✅ Form should wrap all fields */}
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="form-control"
                />
              </div>

              {/* ✅ Align Remember Me + Forget Password in one line */}
              <div className="form-group remember-forget">
                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember</label>
                </div>
                <Link to="/forgetpass" className="forget-link">
                  Forget Password
                </Link>
              </div>

              <div className="form-group mt-3 text-center">
                <button type="submit" className=" d-block lab-btn">
                  Login
                </button>
              </div>
            </form>
            {/* account bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don't have an Account? <Link to="/sign-up">Sign Up</Link>
              </span>
              <span className="or">
                <span className="or">OR</span>
              </span>
              {/* {social login */}
              <h5 className="subtitle">Login With Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}> <i className="icofont-github"></i></button>
                </li>
                 <li>
                  <a href="/" className="facebook"> <i className="icofont-facebook"></i></a>
                </li>
                <li>
                  <a href="/" className="twitter"> <i className="icofont-twitter"></i></a>
                </li>
                <li>
                  <a href="/" className="linkedin"> <i className="icofont-linkedin"></i></a>
                </li>
                <li>
                  <a href="/" className="instargram"> <i className="icofont-instagram"></i></a>
                </li>
                 
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
