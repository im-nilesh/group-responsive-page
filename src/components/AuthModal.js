import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import authImage from "../assets/Auth.png";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop-custom">
      <div className="modal d-block fade show" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 shadow p-4">
            {/* Header message and close */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              <p className="text-success fw-semibold fs-6 mb-0 text-center w-100">
                Let’s learn, share & inspire each other with our passion for
                computer engineering.{" "}
                <span className="text-decoration-underline">
                  Sign up now 👋
                </span>
              </p>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="row">
              {/* Left side form */}
              <div className="col-md-6">
                <h4 className="mb-1 fw-bold">Sign In</h4>
                <p className="text-muted mb-4 fs-sm">
                  Don’t have an account yet?{" "}
                  <button className="btn btn-link text-primary p-0 m-0 align-baseline">
                    Create new for free!
                  </button>
                </p>

                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-light rounded-2"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control bg-light rounded-2"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill mb-3"
                  >
                    Sign In
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 mb-2"
                  >
                    <img src={facebook} alt="Facebook" height="20" />
                    Sign in with Facebook
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <img src={google} alt="Google" height="20" />
                    Sign in with Google
                  </button>

                  <div className="text-center mt-3">
                    <button className="btn btn-link text-muted p-0">
                      Forgot Password?
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side illustration */}
              <div className="col-md-6 d-none d-md-block">
                <img
                  src={authImage}
                  alt="Illustration"
                  className="img-fluid"
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
