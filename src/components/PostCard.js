import React from "react";
import Menu from "../assets/3dot.png";
import share from "../assets/share.png";

const PostCard = ({ image, typeLogo, title, author, authorImg, views }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <img src={typeLogo} className="post-type mb-4" alt="type" />
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{title}</h5>
          <img
            src={Menu}
            className="pe-2 dropdown-toggle"
            alt="menu"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="d-flex gap-lg-5 p-2 time-loc"></div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <img src={authorImg} alt={author} className="rounded-circle me-2" />
            <div className="fw-bold">{author}</div>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div className="text-muted small d-flex gap-1 align-items-center">
              <i className="bi bi-eye"></i>
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
