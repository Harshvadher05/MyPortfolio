import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        {/* Left: About */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">
            About Me
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            I'm a passionate computer engineering student with a strong interest
            in full-stack web development using the{" "}
            <span className="text-blue-400 font-semibold">MERN stack</span>{" "}
            (MongoDB, Express.js, React.js, Node.js). I enjoy building
            responsive, dynamic web applications and am constantly learning new
            technologies to improve my skills.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            I'm also exploring the exciting world of{" "}
            <span className="text-blue-400 font-semibold">
              Artificial Intelligence
            </span>
            , with a keen interest in how AI can enhance software development
            and real-world problem-solving.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Always open to collaboration, learning opportunities, and tech
            discussions!
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex md:w-1/2 justify-center md:justify-end gap-6">
          <a
            href="https://github.com/Harshvadher05"
            className="hover:text-blue-400 transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshvadher05/"
            className="hover:text-blue-400 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            className="hover:text-blue-400 transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter size={36} />
          </a>
          <a
            href="https://instagram.com/your-profile"
            className="hover:text-blue-400 transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={36} />
          </a>
        </div>
      </div>
    </section>
  );
}
