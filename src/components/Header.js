import React, { useState } from "react";
import logo from "../assets/Logo.png";
import AuthModal from "./AuthModal"; // import modal component

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
        <div className="container-fluid px-3 px-md-5">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="ATG World" className="logo" />
          </a>

          <div className="d-none d-lg-flex position-relative flex-grow-1 mx-4">
            <input
              type="search"
              className="form-control rounded-pill bg-light"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-link text-dark text-decoration-none d-none d-lg-block"
              onClick={() => setShowModal(true)}
            >
              Create account. It’s free!
            </button>
            <button className="btn btn-primary d-lg-none">Join Group</button>
          </div>
        </div>
      </nav>

      {/* Controlled Modal */}
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Header;
