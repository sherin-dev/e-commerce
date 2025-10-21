import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate=useNavigate();
     const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password= form.password.value;
    const confirmPassword= form.confirmPassword.value;

    if(password!==confirmPassword){
      alert("Passwords do not match!");
      return;
    }
    // get existing users from local storage
    const existingUsers= JSON.parse(localStorage.getItem("users")||"[]");

    // Check if user already exists
    const userExists=existingUsers.find((user)=>user.email===email);
    if(userExists){
      alert("The user already exists! Try logging in.");
      return;
    }

    // Add new user
    const newUser={name,email,password};
    existingUsers.push(newUser);

    // Save to local storage
    localStorage.setItem("users",JSON.stringify(existingUsers));
    alert("Registration completed successfully!!!");
    form.reset();
    navigate("/login");
  };
  

  return (
      <div className="m-5 p-5">
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title text-center">Register</h3>

            {/* ✅ Form should wrap all fields */}
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name*"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address*"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password*"
                  required
                  className="form-control"
                />
              </div>
               
               <div className="form-group mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password*"
                  required
                  className="form-control"
                />
              </div>

              {/* ✅ Align Remember Me + Forget Password in one line */}
              <div className="form-group remember-forget">                
                <Link to="/forgetpass" className="forget-link">
                  Forget Password
                </Link>
              </div>

              <div className="form-group mt-3 text-center">
                <button type="submit" className=" d-block lab-btn">
                  Signup
                </button>
              </div>
            </form>
            {/* account bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Have an Account? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span className="or">OR</span>
              </span>
              {/* {social login */}
              <h5 className="subtitle">Login With Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleSignup}> <i className="icofont-github"></i></button>
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
  )
}

export default SignUp
