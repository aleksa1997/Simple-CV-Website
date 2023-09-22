"use client";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
  const setTabsAlign = (tab) => (tab === "soft" ? "text-left" : "text-right");
  return (
    <div>
      <div className="flex">
        {["soft", "hard"].map((el) => (
          <button
            key={el}
            className={`btn ${setBg(el)} ${setTabsAlign(el)}`}
            type="button"
            onClick={() => setActiveTab(el)}
          >
            {el} Skills
          </button>
        ))}
      </div>
      <ul
        className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
          activeTab === "soft" ? "justify-start" : "justify-end"
        }`}
      >
        {data[activeTab].map(({ icon, text }) => (
          <li key={text} className="skill">
            <span>{icon}</span> {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
