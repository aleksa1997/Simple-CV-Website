import React, { useId } from "react";
import Skills from "./Skills";

const AboutMe = ({ data, skills }) => {
  const { title, body } = data;
  const id = useId();
  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((el, index) => (
        <p className="mb-6" key={`${id}_${index}`}>
          {el}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
};

export default AboutMe;
