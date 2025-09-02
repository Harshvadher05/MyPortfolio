import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      className="text-white bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900
          bg-[length:200%_200%]
          animate-gradient-x"
    >
      <div className="max-w-6xl my-8 md:my-0 mx-auto flex flex-col md:flex-row items-center justify-center min-h-[60vh] px-6 gap-10 md:gap-16">
        {/* Left Side - Static Photo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/image.png" // <-- Your image from public folder
            alt="profile"
            className="rounded-full shadow-2xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-gray-800 object-cover"
          />
        </div>

        {/* Right Side - Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Name / Role - Typed Effect */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            <ReactTyped
              strings={[
                "Harsh Vadher",
                "MERN Stack Developer",
                "AI & Web Technologies",
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </h2>

          {/* Description Lines */}
          <div className="space-y-3">
            <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-light italic transition-transform duration-300 hover:scale-105">
              Turning ideas into{" "}
              <span className="text-teal-400 font-semibold">
                interactive experiences
              </span>
              .
            </p>
            <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-light italic transition-colors duration-300 hover:text-teal-400">
              <span className="font-bold">Code.</span>{" "}
              <span className="font-bold">Design.</span>{" "}
              <span className="font-bold">Innovate.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
