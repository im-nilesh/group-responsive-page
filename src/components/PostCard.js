import React, { useState } from "react";
import menu from "../assets/3dot.png";
import share from "../assets/share.png";
import "./PostCard.css"; // Custom styles

const PostCard = ({
  image,
  typeLogo,
  title,
  author,
  authorImg,
  views,
  buttonText,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="card mb-4">
      {image && <img src={image} className="card-img-top" alt={title} />}

      <div className="card-body">
        {typeLogo && (
          <img
            src={typeLogo}
            className="post-type mb-4 d-block"
            alt="type logo"
          />
        )}

        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>

          {/* Dropdown Trigger */}
          <div className="position-relative">
            <img
              src={menu}
              className="pe-2 dropdown-toggle"
              alt="menu"
              style={{ cursor: "pointer" }}
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {/* Custom Dropdown */}
            {showDropdown && (
              <div className="custom-dropdown position-absolute end-0 bg-white border rounded shadow">
                <ul className="list-unstyled m-0 p-2">
                  <li className="dropdown-item">Edit</li>
                  <li className="dropdown-item">Report</li>
                  <li className="dropdown-item">Option 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {buttonText && (
          <div className="w-100 pt-2">
            <button className="custom-btn">
              <span className="text-danger">{buttonText}</span>
            </button>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <img src={authorImg} alt={author} className="rounded-circle me-2" />
            <div className="fw-bold">{author}</div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="text-muted small d-flex align-items-center gap-1">
              <i className="bi bi-eye me-1"></i>
              {views}
            </div>
            <button className="btn btn-light">
              <img src={share} alt="share" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
