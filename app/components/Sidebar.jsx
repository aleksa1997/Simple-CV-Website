import React from "react";
import Image from "next/image";
import { Envelope, Twitter, Linkedin, Medium } from "../../icons";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col h-auto content-between w-full sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          className="rounded-full h-full mb-6"
          priority
          width={300}
          height={300}
          src="/images/julian-wan-WNoLnJo7tS8-unsplash.jpg"
          alt="julian-wan-WNoLnJo7tS8-unsplash.jpg"
          aria-label="julian-wan-WNoLnJo7tS8-unsplash.jpg"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <div className="text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">Contact Me</h3>
          <div className="flex justify-center gap-2">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"envelope-link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter-link"}
            >
              <Twitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"linkedin-link"}
            >
              <Linkedin />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[3]}
              aria-label={"meduim-link"}
            >
              <Medium />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;