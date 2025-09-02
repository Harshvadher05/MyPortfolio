import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiC,
  SiRedux,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <SiC className="text-gray-400" />, name: "C" },
    { icon: <FaJava className="text-red-500" />, name: "Java" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-gray-200" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <p className="text-lg font-bold">SQL</p>, name: "SQL" },
    { icon: <SiPostgresql className="text-sky-400" />, name: "PostgreSQL" },
    { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
    { icon: <SiPython className="text-yellow-300" />, name: "Python" },
    { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
    { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-950 text-white bg-gradient-to-br from-gray-950 via-blue-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 tracking-wide">
          Skills
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 sm:gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-5xl">{skill.icon}</div>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
