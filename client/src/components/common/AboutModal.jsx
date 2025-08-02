import React, { useEffect } from "react";
import { FiMonitor, FiServer, FiStar, FiGithub } from "react-icons/fi";

const AboutModal = ({ onClose }) => {
  const FrontEnd = ["React", "Redux", "Tailwind CSS", "Axios"];
  const BackEnd = ["Node.js", "Express", "MongoDB"];
  const techStack = ["Multer", "Cloudinary", "Nodemailer", "Bcrypt", "Jwt"];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Lock scroll

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Restore scroll
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-3 sm:p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 relative transition-all duration-300 ease-in-out scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-black text-xl sm:text-2xl leading-none transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center pr-8">
          About This Project
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 text-center">
          <strong>Foodie Hub</strong> is a full-stack restaurant application
          built using the MERN stack. It features both user and admin
          functionality such as product browsing, cart management, order
          placement, and an admin dashboard for product and order control.{" "}
          <br />
        </p>

        <div className="grid gap-3 sm:gap-4 md:gap-5">
          {/* Frontend Section */}
          <Section
            color="blue"
            title="Frontend"
            items={FrontEnd}
            icon={<FiMonitor />}
          />

          {/* Backend Section */}
          <Section
            color="indigo"
            title="Backend"
            items={BackEnd}
            icon={<FiServer />}
          />

          {/* Features Section */}
          <Section
            color="purple"
            title="Key Features"
            items={techStack}
            icon={<FiStar />}
          />
        </div>

        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-900">
          This project is intended purely for <strong>learning</strong> and{" "}
          <strong>practice</strong> purposes.
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/AbdulWasaySaleem/Resturant-MERN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-black rounded-full transition-colors"
          >
            <FiGithub className="text-lg" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Section = ({ color, title, items, icon }) => {
  return (
    <div
      className={`bg-white border-l-4 border-${color}-500 p-4 sm:p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-6 h-6 bg-${color}-500 rounded-full flex items-center justify-center`}
        >
          <div className="w-4 h-4 text-white">{icon}</div>
        </div>
        <h4 className={`font-semibold text-${color}-600 text-lg`}>{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-3 py-1 bg-${color}-100 text-${color}-700 rounded-full text-sm font-medium`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutModal;
