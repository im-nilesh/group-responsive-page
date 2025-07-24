import React from "react";
import PostCard from "./PostCard";
import GroupList from "./GroupList";
import Article from "../assets/Article1.png";
import ArticleLogo from "../assets/ArticleLogo.png"; // Assuming you have an ArticleLogo image

const ProjectsSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <PostCard
            image={Article}
            typeLogo={ArticleLogo}
            title="What if famous brands had regular fonts? Meet RegulaBrands!"
            author="Sarthak Kamra"
            authorImg="./images/Owner 1.png"
            views="1.4k views"
          />
          <PostCard
            image="./images/Article 2.png"
            typeLogo="./images/EducationLogo.png"
            title="Tax Benefits for Investment under National Pension Scheme"
            author="Sarah West"
            authorImg="./images/Owner 2.png"
            views="1.4k views"
          />
          {/* Add more PostCard components similarly */}
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <GroupList />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
