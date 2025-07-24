import React from "react";
import PostCard from "./PostCard";
import GroupList from "./GroupList";

import Article from "../assets/Article1.png";
import Article2 from "../assets/Article 2.png";
import Article3 from "../assets/Article 3.png";
import ArticleLogo from "../assets/ArticleLogo.png";
import EducationLogo from "../assets/EducationLogo.png";
import MeetupLogo from "../assets/MeetupLogo.png";
import JobLogo from "../assets/JobLogo.png";

import Author1 from "../assets/AuthorImage.png";
import Author2 from "../assets/Author2.png";
import Author3 from "../assets/Owner 3.png";
import Author4 from "../assets/Owner 4.png";

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

          <PostCard
            image={Article3}
            typeLogo={MeetupLogo}
            title="Finance & Investment Elite Social Mixer @Lujiazui"
            author="Ronal Jones"
            authorImg={Author3}
            views="800 views"
            buttonText="Visit My Website"
            buttonVariant="danger"
          />

          <PostCard
            image={null}
            typeLogo={JobLogo}
            title="Software Developer"
            author="Joseph Gray"
            authorImg={Author4}
            views="1.7k views"
            buttonText="Apply on Timejobs"
            buttonVariant="success"
          />
        </div>

        <div className="col-lg-4 d-none d-lg-block">
          <GroupList />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
