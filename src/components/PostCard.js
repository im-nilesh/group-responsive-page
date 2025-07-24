import React from "react";

const PostCard = ({
  image,
  typeLogo,
  title,
  author,
  authorImg,
  views,
  buttonText,
  buttonVariant,
}) => {
  return (
    <div className="card mb-4">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        {typeLogo && (
          <img src={typeLogo} className="post-type mb-4" alt="type logo" />
        )}

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{title}</h5>
          <div className="position-relative">
            <img
              src="./images/3dot.png"
              className="pe-2 dropdown-toggle"
              alt="menu"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Optional Button */}
        {buttonText && (
          <div className="w-100 pt-2">
            <button className="custom-button">
              <span className={`text-${buttonVariant}`}>{buttonText}</span>
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
              <i className="bi bi-share">
                <img src="./images/share.png" alt="share" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
