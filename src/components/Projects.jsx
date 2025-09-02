import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Rent Ride",
      desc: [
        "Full-stack vehicle rental platform for families, businesses, tourists, and logistics.",
        "Responsive, secure, and user-friendly booking interface.",
        "Scalable architecture with GPS tracking & AI-ready features.",
      ],
      link: "https://github.com/Harshvadher05/rentride",
    },
    {
      title: "Online Attendance System",
      desc: [
        "Face recognition-based attendance automation using MERN stack.",
        "Uploads class group image and matches faces with student database.",
        "Generates attendance records by semester & subject automatically.",
      ],
      link: "https://github.com/Harshvadher05/AttendanceSys",
    },
    {
      title: "MERN Blog Application",
      desc: [
        "Developed a full-stack blogging platform using MongoDB, Express, React, and Node.js.",
        "Implemented secure user authentication for creating and managing posts.",
        "Integrated a rich-text editor (React Quill) to enhance the writing experience.",
        "Supported image uploads, embedded links, and organized post listing with author details.",
      ],
      link: "https://mern-blog-1-sssj.onrender.com/",
    },
    {
      title: "Spindle Vibration Anomaly Detection System",
      desc: [
        "AI-powered predictive maintenance for heavy milling machines.",
        "Detects abnormal spindle vibration patterns in real time.",
        "Prevents costly machine failures by early anomaly detection.",
      ],
      link: "https://github.com/Harshvadher05/Spindle-Vibration-Anomaly-Detection",
    },
    {
      title: "AI Voice Analyzer",
      desc: [
        "React PWA that converts speech to text and analyzes word frequency.",
        "Generates text reports for insights and easy sharing.",
        "Optimized for fast, offline-ready performance.",
      ],
      link: "https://ai-voice-analyzer.vercel.app/",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">
                {project.title}
              </h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-1 text-sm md:text-base leading-relaxed">
                {project.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm md:text-base bg-blue-600 font-medium rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
