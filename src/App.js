import React from "react";
import HeroSection from "./components/HeroSection";
import FeedNav from "./components/FeedNav";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeedNav />
      <ProjectsSection />
    </div>
  );
}

export default App;
