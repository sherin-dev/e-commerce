import React from "react";

const subTitle = "Save The Day";
const title = (
  <h2 className="title">
    Join our Day-Long Free Workshop for <b>Advanced <span>Mastering</span></b> on Sales
  </h2>
);
const desc = "Limited Time Offer! Hurry Up";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          
          {/* Left Side Content */}
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="reg-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="reg-input"
                  required
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Phone"
                  className="reg-input"
                  required
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Register;
