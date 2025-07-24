import React from "react";
import PostCard from "./PostCard";
import GroupList from "./GroupList";
import Article from "../assets/Article1.png";
import ArticleLogo from "../assets/ArticleLogo.png";
import Author1 from "../assets/AuthorImage.png";
import Author2 from "../assets/Author2.png";
import Article2 from "../assets/Article 2.png";
import EducationLogo from "../assets/EducationLogo.png";

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
            authorImg={Author1}
            views="1.4k views"
          />
          <PostCard
            image={Article2}
            typeLogo={EducationLogo}
            title="Tax Benefits for Investment under National Pension Scheme"
            author="Sarah West"
            authorImg={Author2}
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
