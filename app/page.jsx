import React from "react";
import AboutMe from "./components/AboutMe";
import { aboutMe, skills, professionalData } from "../data/page-data";
import Experience from "./components/Experience";

const page = () => {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <Experience data={professionalData} />
    </div>
  );
};

export default page;
